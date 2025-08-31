// Vercel serverless function for contact modal requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import { readFile } from 'fs/promises';
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

// Webhook URLs
const EMAIL_WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || 'https://c07fd8bb-fd42-499d-8f44-212b011ded97-00-3c70gedwkctgn.riker.replit.dev/api/email-webhook';
const GRIPP_WEBHOOK_URL = 'https://c07fd8bb-fd42-499d-8f44-212b011ded97-00-3c70gedwkctgn.riker.replit.dev/api/gripp-webhook';

// Contact modal validation schema
const contactModalSchema = z.object({
  serviceType: z.string().min(1, "Service type is verplicht"),
  specialisme: z.string().min(1, "Specialist is verplicht"),
  projectType: z.string().optional(),
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(1, "Telefoonnummer is verplicht"),
  location: z.string().min(1, "Locatie is verplicht"),
  description: z.string().min(10, "Beschrijving moet minimaal 10 karakters bevatten"),
  urgent: z.string().optional(),
  privacy: z.string().optional(),
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

// Database schema for contact modal requests
const contactModalRequests = pgTable("contact_modal_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  serviceType: text("service_type").notNull(),
  specialisme: text("specialisme").notNull(),
  projectType: text("project_type"),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  urgent: text("urgent").default('false'),
  privacy: text("privacy").default('true'),
  files: json("files").$type().default([]),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// Database setup
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

// Email service via webhook to main server
async function sendEmailViaWebhook(emailData, files) {
  console.log('📧 Sending contact modal email via webhook to main server...');
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
          console.log(`✓ Prepared contact modal file for webhook: ${file.originalname}`);
        } catch (fileError) {
          console.error('Error reading contact modal file for webhook:', file.originalname, fileError);
        }
      }
    }

    const response = await fetch(EMAIL_WEBHOOK_URL, {
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
    console.log('✅ Contact modal email webhook successful:', result.message);
    return result;
  } catch (error) {
    console.error('❌ Contact modal email webhook error:', error);
    throw error;
  }
}

// Gripp CRM integration via webhook
async function sendGrippViaWebhook(formData) {
  console.log('🏢 Sending contact modal to Gripp CRM via webhook...');
  try {
    const response = await fetch(GRIPP_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        street: '',
        houseNumber: '',
        city: '',
        postcode: '',
        requestDescription: formData.description || 'Contact via modal formulier',
        infix: ''
      })
    });

    if (!response.ok) {
      throw new Error(`Gripp webhook failed: ${response.status}`);
    }

    const result = await response.json();
    console.log('✓ Gripp contact modal webhook successful');
    return result;
  } catch (error) {
    console.error('Gripp contact modal webhook failed (non-blocking):', error);
    // Don't throw - this should not block form submission
    return null;
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

  console.log('🔥 Contact modal serverless function called');
  
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
      
      validatedData = contactModalSchema.parse(formData);
      files = uploadedFiles;
    } else {
      validatedData = contactModalSchema.parse(req.body);
    }
    
    // Save to database immediately
    const [savedRequest] = await db.insert(contactModalRequests).values({
      ...validatedData,
      urgent: validatedData.urgent || 'false',
      privacy: validatedData.privacy || 'true',
      files: []
    }).returning();

    console.log(`⚡ Contact modal saved to database: ${savedRequest.id}`);

    // Respond immediately to user for fast submission
    res.status(200).json({
      success: true,
      message: 'Uw aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.',
      requestId: savedRequest.id
    });

    // Send emails via webhook to main server (non-blocking)
    setImmediate(async () => {
      try {
        // Transform contact modal data to format expected by email service
        const emailData = {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          selectedService: `${validatedData.serviceType}${validatedData.projectType ? ` - ${validatedData.projectType}` : ''}`,
          address: validatedData.location,
          projectDescription: validatedData.description,
          contactPreference: 'email',
          photos: [],
          submittedAt: savedRequest.submittedAt || new Date(),
          formType: 'contact-modal',
          specialist: validatedData.specialisme,
          serviceType: validatedData.serviceType,
          projectType: validatedData.projectType || '',
          urgent: validatedData.urgent === 'true',
          // Add individual address components for better email subject formatting
          street: formData.street || validatedData.street,
          houseNumber: formData.houseNumber || validatedData.houseNumber,
          city: formData.city || validatedData.city,
          postcode: formData.postcode || validatedData.postcode,
          country: formData.country || validatedData.country,
          id: savedRequest.id
        };

        await sendEmailViaWebhook(emailData, files);
        
        console.log(`✓ Webhook emails sent for contact modal ${savedRequest.id}`);
      } catch (emailError) {
        console.error('Webhook email failed (form still submitted):', emailError);
      }

      // Send to Gripp CRM (non-blocking)
      try {
        await sendGrippViaWebhook(validatedData);
        console.log(`✓ Gripp CRM updated for contact modal ${savedRequest.id}`);
      } catch (grippError) {
        console.error('Gripp webhook failed (form still submitted):', grippError);
      }
    });

  } catch (error) {
    console.error('Contact modal request error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Controleer uw invoer en probeer opnieuw.",
        errors: error.errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: "Er is een fout opgetreden. Probeer het later opnieuw." 
    });
  }
}