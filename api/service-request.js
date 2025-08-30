// Vercel serverless function for service requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import nodemailer from 'nodemailer';

neonConfig.webSocketConstructor = ws;

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

// Email service
async function sendNotificationEmail(data) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🚨 Nieuwe Service Aanvraag - ${data.selectedService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nieuwe Service Aanvraag</h2>
          <p><strong>Service:</strong> ${data.selectedService}</p>
          <p><strong>Naam:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefoon:</strong> ${data.phone}</p>
          <p><strong>Adres:</strong> ${data.address}</p>
          <p><strong>Beschrijving:</strong> ${data.projectDescription}</p>
          <p><strong>Contact voorkeur:</strong> ${data.contactPreference}</p>
          <p><strong>Ontvangen op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}

async function sendThankYouEmail(data) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: `Bedankt ${data.firstName}! Je aanvraag is ontvangen - TBGS B.V.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #27ae60;">Bedankt ${data.firstName}!</h2>
          <p>Je aanvraag voor <strong>${data.selectedService}</strong> is succesvol ontvangen.</p>
          <p>Wij nemen binnen 24 uur contact met je op via ${data.contactPreference}.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Jouw aanvraag details:</h3>
            <p><strong>Service:</strong> ${data.selectedService}</p>
            <p><strong>Adres:</strong> ${data.address}</p>
            <p><strong>Beschrijving:</strong> ${data.projectDescription}</p>
          </div>
          <p>Met vriendelijke groet,<br>Team TBGS</p>
          <p style="font-size: 12px; color: #666;">
            TBGS B.V. | Tel: 040 202 6744 | Email: info@tbgs.nl | Website: tbgs.nl
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Thank you email sent successfully');
  } catch (error) {
    console.error('Failed to send thank you email:', error);
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let formData = {};
    let files = [];

    // Parse FormData if content-type includes multipart
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      const form = new multiparty.Form({
        maxFilesSize: 50 * 1024 * 1024, // 50MB total
        maxFiles: 5, // Max 5 files
        maxFieldsSize: 20 * 1024 * 1024 // 20MB for text fields
      });
      
      const parseResult = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, uploadedFiles) => {
          if (err) reject(err);
          else resolve({ fields, files: uploadedFiles });
        });
      });
      
      // Convert fields to single values (multiparty returns arrays)
      for (const [key, value] of Object.entries(parseResult.fields)) {
        formData[key] = Array.isArray(value) ? value[0] : value;
      }
      
      // Handle uploaded files
      if (parseResult.files.files) {
        files = Array.isArray(parseResult.files.files) ? parseResult.files.files : [parseResult.files.files];
      }
    } else {
      // Use regular JSON body parsing
      formData = req.body;
    }

    const {
      selectedService,
      serviceType,
      specialist,
      projectType,
      urgencyLevel,
      photos = [],
      address,
      projectDescription,
      firstName,
      lastName,
      email,
      phone,
      contactPreference
    } = formData;

    // Validate required fields
    if (!selectedService || !address || !firstName || !lastName || !email || !phone) {
      return res.status(400).json({ 
        success: false,
        message: 'Ontbrekende verplichte velden',
        error: 'Ontbrekende verplichte velden' 
      });
    }

    // Save to database
    const [savedRequest] = await db.insert(serviceRequests).values({
      selectedService,
      photos: Array.isArray(photos) ? photos : [],
      address,
      projectDescription: projectDescription || '',
      firstName,
      lastName,
      email,
      phone,
      contactPreference: contactPreference || 'phone'
    }).returning();

    // Prepare data for database and email

    // Send notification email to admin
    try {
      await sendNotificationEmail({
        selectedService,
        serviceType,
        specialist,
        projectType,
        urgencyLevel,
        photos: Array.isArray(photos) ? photos : [],
        address,
        projectDescription: projectDescription || '',
        firstName,
        lastName,
        email,
        phone,
        contactPreference: contactPreference || 'phone',
        submittedAt: savedRequest.submittedAt || new Date(),
        formType: 'popup',
        files: files || []
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
    }

    // Send thank you email to client
    try {
      await sendThankYouEmail({
        selectedService,
        serviceType,
        specialist,
        projectType,
        urgencyLevel,
        photos: Array.isArray(photos) ? photos : [],
        address,
        projectDescription: projectDescription || '',
        firstName,
        lastName,
        email,
        phone,
        contactPreference: contactPreference || 'phone',
        submittedAt: savedRequest.submittedAt || new Date(),
        formType: 'popup'
      });
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Uw aanvraag is succesvol verzonden!' 
    });

  } catch (error) {
    console.error('Service request error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Er is een fout opgetreden. Probeer het opnieuw.',
      error: 'Er is een fout opgetreden. Probeer het opnieuw.' 
    });
  }
}