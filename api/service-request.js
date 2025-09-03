// Vercel serverless function for service requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import { readFile } from 'fs/promises';
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

// Internal Vercel email service URL
const EMAIL_SERVICE_URL = 'https://tbgs.vercel.app/api/send-email';

// Service request validation schema
const serviceRequestSchema = z.object({
  selectedService: z.string().min(1, "Service is verplicht"),
  address: z.string().min(1, "Adres is verplicht"),
  projectDescription: z.string().min(1, "Beschrijving is verplicht"),
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(1, "Telefoonnummer is verplicht"),
  contactPreference: z.string().min(1, "Contact voorkeur is verplicht"),
  photos: z.string().optional(),
  serviceType: z.string().optional(),
  specialist: z.string().optional(),
  projectType: z.string().optional(),
  urgencyLevel: z.string().optional(),
  timeOnPage: z.string().optional(),
  interactionCount: z.string().optional(),
  leadScore: z.string().optional(),
  // Individual address components for better email subject formatting
  street: z.string().optional(),
  houseNumber: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().optional()
});

// Database schema
const serviceRequests = pgTable("service_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  selectedService: text("selected_service").notNull(),
  photos: json("photos").$type().default([]),
  address: text("address").notNull(),
  projectDescription: text("project_description").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  contactPreference: text("contact_preference").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// Database setup
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

// Email service via internal Vercel email API
async function sendEmailViaWebhook(emailData, files) {
  console.log('📧 Sending email via internal Vercel service...');
  try {
    // Prepare files for webhook (encode buffers as base64)
    const webhookFiles = [];
    if (files && files.length > 0) {
      for (const file of files) {
        try {
          const fileBuffer = await readFile(file.path);
          webhookFiles.push({
            buffer: fileBuffer.toString('base64'),
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
          });
          console.log(`✓ Prepared file for webhook: ${file.originalname}`);
        } catch (fileError) {
          console.error('Error reading file for webhook:', file.originalname, fileError);
        }
      }
    }

    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailData,
        files: webhookFiles
      })
    });

    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('✅ Email webhook successful:', result.message);
    return result;
  } catch (error) {
    console.error('❌ Email webhook error:', error);
    throw error;
  }
}

// Utility function to normalize file names
const normalizeFileName = (originalName) => {
  return originalName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
};

// Fast file processing
const processMultipartRequest = (req) => {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form({
      maxFilesSize: 12 * 1024 * 1024 * 8,
      maxFiles: 8
    });
    
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      
      const processedFiles = [];
      for (const [fieldName, fileArray] of Object.entries(files)) {
        for (const file of fileArray) {
          if (file.originalFilename) {
            file.originalname = normalizeFileName(file.originalFilename);
            processedFiles.push(file);
          }
        }
      }
      
      resolve({ fields, files: processedFiles });
    });
  });
};

// Main handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('🔥 Service request serverless function called');
  
  try {
    let validatedData;
    let files = [];
    
    // Check if it's multipart (with files) or JSON
    const contentType = req.headers['content-type'] || '';
    
    if (contentType.includes('multipart/form-data')) {
      const { fields, files: uploadedFiles } = await processMultipartRequest(req);
      
      // Extract form data from multipart fields
      const formData = {};
      for (const [key, values] of Object.entries(fields)) {
        formData[key] = Array.isArray(values) ? values[0] : values;
      }
      
      validatedData = serviceRequestSchema.parse(formData);
      files = uploadedFiles;
    } else {
      validatedData = serviceRequestSchema.parse(req.body);
    }
    
    // Save to database immediately
    const [savedRequest] = await db.insert(serviceRequests).values({
      ...validatedData,
      photos: []
    }).returning();

    console.log(`⚡ Request saved to database: ${savedRequest.id}`);

    // Send emails via internal Vercel email service
    try {
      await sendEmailViaWebhook({
        ...validatedData,
        formType: 'popup',
        submittedAt: savedRequest.submittedAt || new Date(),
        // Add individual address components for better email subject formatting
        street: validatedData.street,
        houseNumber: validatedData.houseNumber,
        city: validatedData.city,
        postcode: validatedData.postcode,
        country: validatedData.country,
        id: savedRequest.id
      }, files);
      
      console.log(`✓ Emails sent for ${savedRequest.id}`);
    } catch (emailError) {
      console.error('Email sending failed (form still submitted):', emailError);
    }

    // Return success immediately
    res.status(200).json({
      success: true,
      message: 'Aanvraag succesvol ingediend! Wij nemen binnen 24 uur contact met u op.',
      requestId: savedRequest.id
    });

  } catch (error) {
    console.error('Service request error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Controleer uw gegevens en probeer opnieuw.",
        errors: error.errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Er is een fout opgetreden. Probeer het later opnieuw." 
    });
  }
}