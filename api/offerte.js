// Vercel serverless function for offerte requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import { readFile } from 'fs/promises';
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

// Webhook URL for email service
const EMAIL_WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || 'https://c07fd8bb-fd42-499d-8f44-212b011ded97-00-3c70gedwkctgn.riker.replit.dev/api/email-webhook';

// Database schema
const offerteRequests = pgTable("offerte_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  voornaam: text("voornaam").notNull(),
  achternaam: text("achternaam").notNull(),
  email: text("email").notNull(),
  telefoon: text("telefoon").notNull(),
  adres: text("adres").notNull(),
  postcode: text("postcode").notNull(),
  plaats: text("plaats").notNull(),
  specialisme: text("specialisme").notNull(),
  projectType: text("project_type").notNull(),
  tijdlijn: text("tijdlijn").notNull(),
  budget: text("budget"),
  beschrijving: text("beschrijving").notNull(),
  contactVoorkeur: text("contact_voorkeur").notNull(),
  privacyAkkoord: text("privacy_akkoord").notNull(),
  nieuwsbrief: text("nieuwsbrief"),
  files: json("files").$type().default([]),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// Validation schema
const offerteFormSchema = z.object({
  voornaam: z.string().min(2, "Voornaam moet minimaal 2 karakters zijn"),
  achternaam: z.string().min(2, "Achternaam moet minimaal 2 karakters zijn"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  telefoon: z.string().min(10, "Voer een geldig telefoonnummer in"),
  adres: z.string().min(5, "Voer uw volledige adres in"),
  postcode: z.string().min(6, "Voer een geldige postcode in"),
  plaats: z.string().min(2, "Voer uw woonplaats in"),
  specialisme: z.string().min(1, "Kies een specialisme"),
  projectType: z.string().min(1, "Kies een projecttype"),
  tijdlijn: z.string().min(1, "Kies de gewenste tijdlijn"),
  budget: z.string().optional(),
  beschrijving: z.string().min(20, "Beschrijf uw project in minimaal 20 karakters"),
  contactVoorkeur: z.string().min(1, "Kies uw contactvoorkeur"),
  privacyAkkoord: z.boolean().refine(val => val === true, "U moet akkoord gaan met de privacyverklaring"),
  nieuwsbrief: z.boolean().optional(),
});

// Database setup
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

// Email service via webhook to main server
async function sendEmailViaWebhook(emailData, files) {
  console.log('📧 Sending offerte email via webhook to main server...');
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
          console.log(`✓ Prepared offerte file for webhook: ${file.originalname}`);
        } catch (fileError) {
          console.error('Error reading offerte file for webhook:', file.originalname, fileError);
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
    console.log('✅ Offerte email webhook successful:', result.message);
    return result;
  } catch (error) {
    console.error('❌ Offerte email webhook error:', error);
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

  console.log('🔥 Offerte request serverless function called');
  
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
      
      validatedData = offerteFormSchema.parse(formData);
      files = uploadedFiles;
    } else {
      validatedData = offerteFormSchema.parse(req.body);
    }
    
    // Save to database immediately
    const [savedRequest] = await db.insert(offerteRequests).values({
      ...validatedData,
      privacyAkkoord: validatedData.privacyAkkoord ? 'true' : 'false',
      nieuwsbrief: validatedData.nieuwsbrief ? 'true' : 'false',
      files: []
    }).returning();

    console.log(`⚡ Offerte saved to database: ${savedRequest.id}`);

    // Respond immediately to user for fast submission
    res.status(200).json({
      success: true,
      message: 'Uw offerte aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op voor een afspraak.',
      requestId: savedRequest.id
    });

    // Send emails via webhook to main server (non-blocking)
    setImmediate(async () => {
      try {
        // Transform offerte data to format expected by email service
        const emailData = {
          firstName: validatedData.voornaam,
          lastName: validatedData.achternaam,
          email: validatedData.email,
          phone: validatedData.telefoon,
          selectedService: `${validatedData.specialisme} - ${validatedData.projectType}`,
          address: `${validatedData.adres}, ${validatedData.postcode} ${validatedData.plaats}`,
          projectDescription: `${validatedData.beschrijving}\n\nProject details:\n- Tijdlijn: ${validatedData.tijdlijn}\n- Budget: ${validatedData.budget || "Niet opgegeven"}`,
          contactPreference: validatedData.contactVoorkeur,
          photos: [],
          submittedAt: savedRequest.submittedAt || new Date(),
          formType: 'offerte',
          id: savedRequest.id
        };

        await sendEmailViaWebhook(emailData, files);
        
        console.log(`✓ Webhook emails sent for offerte ${savedRequest.id}`);
      } catch (emailError) {
        console.error('Webhook email failed (form still submitted):', emailError);
      }
    });

  } catch (error) {
    console.error('Offerte request error:', error);
    
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