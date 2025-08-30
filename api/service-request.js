// Vercel serverless function for service requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

// Email service configuration
const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

// Email service functions
const sendNotificationEmail = async (data) => {
  const transporter = createEmailTransporter();
  
  const attachments = data.files?.map(file => ({
    filename: `tbgs-${file.originalname || file.originalFilename || 'attachment'}`,
    path: file.path,
    contentType: file.mimetype
  })) || [];

  const emailContent = `
    <h2>Nieuwe Serviceverzoek - TBGS BV</h2>
    <p><strong>Service:</strong> ${data.selectedService}</p>
    <p><strong>Naam:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefoon:</strong> ${data.phone}</p>
    <p><strong>Adres:</strong> ${data.address}</p>
    <p><strong>Beschrijving:</strong> ${data.projectDescription}</p>
    <p><strong>Contact voorkeur:</strong> ${data.contactPreference}</p>
    <p><strong>Ingediend op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
    ${data.files?.length > 0 ? `<p><strong>Bijlagen:</strong> ${data.files.length} bestand(en)</p>` : ''}
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Nieuwe serviceverzoek: ${data.selectedService}`,
    html: emailContent,
    attachments
  });
};

const sendThankYouEmail = async (data) => {
  const transporter = createEmailTransporter();
  
  const emailContent = `
    <h2>Bedankt voor uw aanvraag!</h2>
    <p>Beste ${data.firstName},</p>
    <p>Wij hebben uw aanvraag voor <strong>${data.selectedService}</strong> goed ontvangen.</p>
    <p>Onze specialist neemt binnen 24 uur contact met u op.</p>
    <p>Met vriendelijke groet,<br>Het TBGS BV Team</p>
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: data.email,
    subject: 'Bevestiging van uw serviceverzoek - TBGS BV',
    html: emailContent
  });
};

// Service request validation schema (handles both ContactModal and FloatingServiceMenu)
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
  // Optional fields from ContactModal
  serviceType: z.string().optional(),
  specialist: z.string().optional(),
  projectType: z.string().optional(),
  urgencyLevel: z.string().optional(),
  timeOnPage: z.string().optional(),
  interactionCount: z.string().optional(),
  leadScore: z.string().optional()
});

// Utility function to normalize file names
const normalizeFileName = (originalName) => {
  return originalName
    .toLowerCase()
    .replace(/\s+/g, '-')           // spaces to dashes
    .replace(/[^a-z0-9.-]/g, '')    // remove special chars except dots and dashes
    .replace(/--+/g, '-')           // multiple dashes to single
    .replace(/^-|-$/g, '');         // remove leading/trailing dashes
};

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

    // Generate vCard content
    const vCardContent = generateVCard({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      service: data.selectedService
    });

    // Prepare attachments array
    const attachments = [];

    // Add vCard as first attachment
    const vCardFilename = `${data.firstName.toLowerCase()}_${data.lastName.toLowerCase()}_${data.address.split(',')[0].toLowerCase().replace(/\s+/g, '')}_tbgs.vcf`;
    
    // Load TBGS logo for vCard
    let logoBase64 = null;
    try {
      const logoPath = path.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754928031668.png');
      const logoBuffer = await fs.readFile(logoPath);
      logoBase64 = logoBuffer.toString('base64');
      console.log('✓ TBGS logo loaded for vCard:', 'TBGS 545x642_1754928031668.png');
    } catch (logoError) {
      console.log('Logo not found for vCard, continuing without logo');
    }

    // Add logo to vCard if available
    const finalVCardContent = logoBase64 ? 
      vCardContent + `PHOTO;ENCODING=BASE64;TYPE=PNG:${logoBase64}\n` + 'END:VCARD' :
      vCardContent + 'END:VCARD';

    attachments.push({
      filename: vCardFilename,
      content: finalVCardContent,
      contentType: 'text/vcard'
    });
    console.log('✓ TBGS vCard toegevoegd als eerste attachment:', vCardFilename);

    // Add uploaded files with tbgs- prefix
    if (data.files && data.files.length > 0) {
      for (const file of data.files) {
        try {
          const fileBuffer = await fs.readFile(file.path);
          const filename = `tbgs-${file.originalname || 'uploaded-file'}`;
          
          attachments.push({
            filename,
            content: fileBuffer,
            contentType: file.mimetype || 'application/octet-stream'
          });
          console.log(`✓ Service attachment: ${filename}`);
        } catch (fileError) {
          console.error('Error reading service file:', file.originalname, fileError);
        }
      }
    }
    
    const totalImages = data.processedImages?.length || data.files?.length || 0;
    if (totalImages > 0) {
      console.log(`✓ ${totalImages} bestanden verwerkt voor aanvraag ${data.id || 'unknown'}`);
    }

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
          ${data.processedImages && data.processedImages.length > 0 ? `
          <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
            <h3 style="margin-top: 0;">📸 Geüploade Foto's (${data.processedImages.length})</h3>
            ${data.processedImages.map((img, index) => `
              <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 3px;">
                <p><strong>Foto ${index + 1}:</strong> ${img.originalName}</p>
                <p>• <strong>Origineel:</strong> ${(img.originalSize / 1024).toFixed(1)} KB</p>
                <p>• <strong>Geoptimaliseerd:</strong> ${(img.optimizedSize / 1024).toFixed(1)} KB</p>
                <p>• <strong>Compressie:</strong> ${img.compressionRatio}% besparing</p>
                <p>• <strong>Afmetingen:</strong> ${img.dimensions.width}x${img.dimensions.height}</p>
                <p>• <strong>Features:</strong> ${[
                  img.hasWatermark ? 'TBGS Watermark' : null,
                  img.hasThumbnail ? 'Thumbnail' : null,
                  'Auto-rotate',
                  'Metadata verwijderd'
                ].filter(Boolean).join(', ')}</p>
                ${img.processingFailed ? '<p style="color: red;">⚠️ Verwerking mislukt - origineel bestand gebruikt</p>' : ''}
              </div>
            `).join('')}
          </div>
          ` : ''}
          <p><strong>Bijlagen:</strong> ${attachments.length} (inclusief vCard)</p>
          <p><strong>Ontvangen op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
        </div>
      `,
      attachments
    };

    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
    console.log(`✓ Notification email sent voor aanvraag ${data.id || 'unknown'} met ${attachments.length} attachments`);
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}

// Helper function to generate vCard
function generateVCard({ firstName, lastName, email, phone, address, service }) {
  const formattedPhone = phone.startsWith('+') ? phone : `+31${phone.replace(/^0/, '')}`;
  
  return `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
N:${lastName};${firstName};;;
EMAIL:${email}
TEL;TYPE=MOBILE:${formattedPhone}
ADR;TYPE=HOME:;;${address};;;;
NOTE:Service aanvraag: ${service}
ORG:TBGS B.V. - Service Aanvraag
TITLE:Klant
URL:https://tbgs.nl
`;
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

// Fast file processing without blocking HTTP response
const processMultipartRequest = (req) => {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form({
      maxFilesSize: 12 * 1024 * 1024 * 8, // 96MB total
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

  console.log('🔥 /api/service-request endpoint hit');
  
  try {
    let validatedData;
    let files = [];

    // Process multipart data for forms with files
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      const { fields, files: uploadedFiles } = await processMultipartRequest(req);
      
      // Extract form data from multipart fields
      const formData = {};
      for (const [key, values] of Object.entries(fields)) {
        formData[key] = Array.isArray(values) ? values[0] : values;
      }
      
      // Convert string booleans to actual booleans
      if (formData.privacy === 'true' || formData.privacy === true) {
        formData.privacy = true;
      } else {
        formData.privacy = false;
      }
      
      validatedData = serviceRequestSchema.parse(formData);
      files = uploadedFiles;
    } else {
      // Handle regular JSON requests
      validatedData = serviceRequestSchema.parse(req.body);
    }

    console.log(`📁 Files received: ${files.length}`);

    // Transform data to database format
    const dbData = {
      selectedService: validatedData.selectedService,
      photos: [],
      address: validatedData.address,
      projectDescription: validatedData.projectDescription,
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phone: validatedData.phone,
      contactPreference: validatedData.contactPreference
    };

    // Save to database immediately
    const [savedRequest] = await db.insert(serviceRequests).values(dbData).returning();

    // Transform data for email
    const emailData = {
      ...dbData,
      submittedAt: savedRequest.submittedAt || new Date(),
      formType: 'popup',
      files: files.map(file => ({
        path: file.path,
        originalname: file.originalname,
        originalFilename: file.originalFilename,
        size: file.size,
        mimetype: file.headers?.['content-type'] || 'application/octet-stream'
      }))
    };

    // Respond immediately to user
    console.log(`⚡ INSTANT submission complete for ${savedRequest.id}`);
    res.status(200).json({
      success: true,
      message: 'Uw aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.',
      requestId: savedRequest.id
    });

    // Send emails in background (non-blocking)
    setImmediate(async () => {
      try {
        await sendNotificationEmail(emailData);
        console.log(`✓ Background notification email sent for ${savedRequest.id}`);
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }

      try {
        await sendThankYouEmail(emailData);
        console.log(`✓ Background thank you email sent for ${savedRequest.id}`);
      } catch (emailError) {
        console.error('Failed to send thank you email:', emailError);
      }

      // Clean up temporary files
      files.forEach(file => {
        try {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
          }
        } catch (err) {
          console.warn('Could not clean up temp file:', err);
        }
      });
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation errors
      return res.status(400).json({
        success: false,
        message: "Controleer uw invoer en probeer opnieuw.",
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    } else {
      // Other errors
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        message: "Er is een fout opgetreden bij het versturen van uw bericht. Probeer het opnieuw of neem telefonisch contact op."
      });
    }
  }
}