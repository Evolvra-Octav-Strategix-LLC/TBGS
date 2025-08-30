// Vercel serverless function for offerte requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import nodemailer from 'nodemailer';
import { readFileSync, existsSync, unlinkSync } from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
// imageProcessor not needed for serverless function
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

// Email service configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
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
const sendOfferteNotificationEmail = async (data) => {
  const transporter = createEmailTransporter();
  
  const attachments = data.files?.map(file => ({
    filename: `tbgs-${file.originalname || file.originalFilename || 'attachment'}`,
    path: file.path,
    contentType: file.mimetype
  })) || [];

  const emailContent = `
    <h2>Nieuwe Offerteaanvraag - TBGS BV</h2>
    <p><strong>Naam:</strong> ${data.voornaam} ${data.achternaam}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefoon:</strong> ${data.telefoon}</p>
    <p><strong>Adres:</strong> ${data.adres}, ${data.postcode} ${data.plaats}</p>
    <p><strong>Specialisme:</strong> ${data.specialisme}</p>
    <p><strong>Project Type:</strong> ${data.projectType}</p>
    <p><strong>Tijdlijn:</strong> ${data.tijdlijn}</p>
    <p><strong>Budget:</strong> ${data.budget || 'Niet opgegeven'}</p>
    <p><strong>Beschrijving:</strong> ${data.beschrijving}</p>
    <p><strong>Contact voorkeur:</strong> ${data.contactVoorkeur}</p>
    <p><strong>Ingediend op:</strong> ${new Date().toLocaleString('nl-NL')}</p>
    ${data.files?.length > 0 ? `<p><strong>Bijlagen:</strong> ${data.files.length} bestand(en)</p>` : ''}
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Nieuwe offerteaanvraag: ${data.specialisme}`,
    html: emailContent,
    attachments
  });
};

const sendOfferteThankYouEmail = async (data) => {
  const transporter = createEmailTransporter();
  
  const emailContent = `
    <h2>Bedankt voor uw offerteaanvraag!</h2>
    <p>Beste ${data.voornaam},</p>
    <p>Wij hebben uw offerteaanvraag voor <strong>${data.specialisme}</strong> goed ontvangen.</p>
    <p>Onze specialist neemt binnen 24 uur contact met u op voor een vrijblijvende offerte.</p>
    <p>Met vriendelijke groet,<br>Het TBGS BV Team</p>
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: data.email,
    subject: 'Bevestiging van uw offerteaanvraag - TBGS BV',
    html: emailContent
  });
};

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

// Zod validation schema
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
      firstName: data.voornaam,
      lastName: data.achternaam,
      email: data.email,
      phone: data.telefoon,
      address: `${data.adres}, ${data.postcode} ${data.plaats}`,
      service: `${data.specialisme} - ${data.projectType}`
    });

    // Prepare attachments array
    const attachments = [];

    // Add vCard as first attachment
    const vCardFilename = `${data.voornaam.toLowerCase()}_${data.achternaam.toLowerCase()}_${data.adres.split(',')[0].toLowerCase().replace(/\s+/g, '')}_tbgs.vcf`;
    
    // Load TBGS logo for vCard
    let logoBase64 = null;
    try {
      const logoPath = path.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754928031668.png');
      const logoBuffer = await readFile(logoPath);
      logoBase64 = logoBuffer.toString('base64');
      console.log('✓ TBGS logo loaded for email:', logoPath);
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
          const fileBuffer = await readFile(file.path);
          const filename = `tbgs-${file.originalname || 'uploaded-file'}`;
          
          attachments.push({
            filename,
            content: fileBuffer,
            contentType: file.mimetype || 'application/octet-stream'
          });
          console.log(`✓ Offerte attachment: ${filename}`);
        } catch (fileError) {
          console.error('Error reading offerte file:', file.originalname, fileError);
        }
      }
    }
    
    const totalImages = data.processedImages?.length || data.files?.length || 0;
    if (totalImages > 0) {
      console.log(`✓ ${totalImages} bestanden verwerkt voor offerte ${data.id || 'unknown'}`);
    }

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `📋 Nieuwe Offerte Aanvraag - ${data.specialisme}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nieuwe Offerte Aanvraag</h2>
          <p><strong>Naam:</strong> ${data.voornaam} ${data.achternaam}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefoon:</strong> ${data.telefoon}</p>
          <p><strong>Adres:</strong> ${data.adres}, ${data.postcode} ${data.plaats}</p>
          <p><strong>Specialisme:</strong> ${data.specialisme}</p>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Tijdlijn:</strong> ${data.tijdlijn}</p>
          <p><strong>Budget:</strong> ${data.budget || 'Niet opgegeven'}</p>
          <p><strong>Beschrijving:</strong> ${data.beschrijving}</p>
          <p><strong>Contact voorkeur:</strong> ${data.contactVoorkeur}</p>
          <p><strong>Nieuwsbrief:</strong> ${data.nieuwsbrief ? 'Ja' : 'Nee'}</p>
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
    console.log('Offerte notification email sent successfully');
    console.log(`✓ Notification email sent voor offerte ${data.id || 'unknown'} met ${attachments.length} attachments`);
  } catch (error) {
    console.error('Failed to send offerte notification email:', error);
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
NOTE:Offerte aanvraag: ${service}
ORG:TBGS B.V. - Offerte Aanvraag
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
      subject: `Bedankt ${data.voornaam}! Je offerte aanvraag is ontvangen - TBGS B.V.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #27ae60;">Bedankt ${data.voornaam}!</h2>
          <p>Je offerte aanvraag voor <strong>${data.specialisme} - ${data.projectType}</strong> is succesvol ontvangen.</p>
          <p>Wij nemen binnen 24 uur contact met je op via ${data.contactVoorkeur} voor een afspraak.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Jouw aanvraag details:</h3>
            <p><strong>Project:</strong> ${data.specialisme} - ${data.projectType}</p>
            <p><strong>Adres:</strong> ${data.adres}, ${data.postcode} ${data.plaats}</p>
            <p><strong>Tijdlijn:</strong> ${data.tijdlijn}</p>
            <p><strong>Budget:</strong> ${data.budget || 'Niet opgegeven'}</p>
            <p><strong>Beschrijving:</strong> ${data.beschrijving}</p>
          </div>
          <p>Met vriendelijke groet,<br>Team TBGS</p>
          <p style="font-size: 12px; color: #666;">
            TBGS B.V. | Tel: 040 202 6744 | Email: info@tbgs.nl | Website: tbgs.nl
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Offerte thank you email sent successfully');
  } catch (error) {
    console.error('Failed to send offerte thank you email:', error);
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

  // Validate environment variables early
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not found');
    return res.status(500).json({ error: 'Database configuration missing' });
  }
  
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('❌ Email credentials not found');
    return res.status(500).json({ error: 'Email configuration missing' });
  }

  try {
    let formData = {};
    let files = [];

    // Parse FormData if content-type includes multipart
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      const form = new multiparty.Form({
        maxFilesSize: 12 * 1024 * 1024 * 8, // 96MB total
        maxFiles: 8
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
      
      // Handle uploaded files with normalization
      const processedFiles = [];
      for (const [fieldName, fileArray] of Object.entries(parseResult.files)) {
        for (const file of fileArray) {
          if (file.originalFilename) {
            file.originalname = normalizeFileName(file.originalFilename);
            processedFiles.push(file);
          }
        }
      }
      files = processedFiles;
    } else {
      // Use regular JSON body parsing
      formData = req.body;
    }

    // Validate form data first
    const validatedData = offerteFormSchema.parse(formData);

    // Handle files with instant background processing (same as service-request)
    if (files && files.length > 0) {
      console.log(`🔥 /api/offerte endpoint hit with ${files.length} files`);
      console.log(`⚡ Instant submission with ${files.length} files...`);
      console.log(`⚡ Using ${files.length} pre-compressed files from client`);
      
      // Save to database first
      const [savedRequest] = await db.insert(offerteRequests).values({
        voornaam: validatedData.voornaam,
        achternaam: validatedData.achternaam,
        email: validatedData.email,
        telefoon: validatedData.telefoon,
        adres: validatedData.adres,
        postcode: validatedData.postcode,
        plaats: validatedData.plaats,
        specialisme: validatedData.specialisme,
        projectType: validatedData.projectType,
        tijdlijn: validatedData.tijdlijn,
        budget: validatedData.budget || '',
        beschrijving: validatedData.beschrijving,
        contactVoorkeur: validatedData.contactVoorkeur,
        privacyAkkoord: validatedData.privacyAkkoord ? 'true' : 'false',
        nieuwsbrief: validatedData.nieuwsbrief ? 'true' : 'false',
        files: []
      }).returning();

      // Process files for email attachments (pre-compressed from client)
      const emailFiles = files.map(file => ({
        path: file.path,
        originalname: `tbgs-${normalizeFileName(file.originalFilename || 'attachment.jpg')}`,
        originalFilename: file.originalFilename,
        size: file.size,
        mimetype: file.headers?.['content-type'] || 'image/jpeg'
      }));

      // Respond immediately to user
      console.log(`⚡ INSTANT offerte submission complete for ${savedRequest.id}`);
      res.status(200).json({
        success: true,
        message: 'Offerte aanvraag succesvol ingediend! Wij nemen binnen 24 uur contact met u op.',
        requestId: savedRequest.id
      });

      // Send emails in background (non-blocking)
      setImmediate(async () => {
        try {
          await sendOfferteNotificationEmail({
            id: savedRequest.id,
            ...validatedOfferteData,
            processedImages: [],
            totalImages: emailFiles.length,
            files: emailFiles,
            ffmpegResults: []
          });
          console.log(`✓ Background notification email sent for offerte ${savedRequest.id}`);
        } catch (emailError) {
          console.error('Failed to send offerte notification email:', emailError);
        }

        try {
          await sendOfferteThankYouEmail({
            ...validatedOfferteData,
            processedImages: [],
            totalImages: emailFiles.length
          });
          console.log(`✓ Background thank you email sent for offerte ${savedRequest.id}`);
        } catch (emailError) {
          console.error('Failed to send offerte thank you email:', emailError);
        }

        // Clean up temporary files
        files.forEach(file => {
          try {
            if (existsSync(file.path)) {
              unlinkSync(file.path);
            }
          } catch (err) {
            console.warn('Could not clean up temp file:', err);
          }
        });
      });

      return;
    }

    // Convert string booleans to actual booleans
    if (formData.privacyAkkoord === 'true' || formData.privacyAkkoord === true) {
      formData.privacyAkkoord = true;
    } else {
      formData.privacyAkkoord = false;
    }

    if (formData.nieuwsbrief === 'true' || formData.nieuwsbrief === true) {
      formData.nieuwsbrief = true;
    } else {
      formData.nieuwsbrief = false;
    }

    // Validate form data
    const validatedOfferteData = offerteFormSchema.parse(formData);

    // Save to database
    const [savedRequest] = await db.insert(offerteRequests).values({
      voornaam: validatedOfferteData.voornaam,
      achternaam: validatedOfferteData.achternaam,
      email: validatedOfferteData.email,
      telefoon: validatedOfferteData.telefoon,
      adres: validatedOfferteData.adres,
      postcode: validatedOfferteData.postcode,
      plaats: validatedOfferteData.plaats,
      specialisme: validatedOfferteData.specialisme,
      projectType: validatedOfferteData.projectType,
      tijdlijn: validatedOfferteData.tijdlijn,
      budget: validatedOfferteData.budget || '',
      beschrijving: validatedOfferteData.beschrijving,
      contactVoorkeur: validatedOfferteData.contactVoorkeur,
      privacyAkkoord: validatedOfferteData.privacyAkkoord ? 'true' : 'false',
      nieuwsbrief: validatedOfferteData.nieuwsbrief ? 'true' : 'false',
      files: []
    }).returning();

    // Respond immediately to user
    res.status(200).json({ 
      success: true, 
      message: "Uw offerte aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op voor een afspraak.",
      id: savedRequest.id
    });

    // Send emails in background (non-blocking)
    setImmediate(async () => {
      try {
        await sendNotificationEmail({
          id: savedRequest.id,
          ...validatedOfferteData,
          processedImages: [],
          totalImages: 0,
          files: [],
          ffmpegResults: []
        });
        console.log(`✓ Background notification email sent for offerte ${savedRequest.id} (no files)`);
      } catch (emailError) {
        console.error('Failed to send offerte notification email:', emailError);
      }

      try {
        await sendThankYouEmail({
          ...validatedOfferteData,
          processedImages: [],
          totalImages: 0
        });
        console.log(`✓ Background thank you email sent for offerte ${savedRequest.id} (no files)`);
      } catch (emailError) {
        console.error('Failed to send offerte thank you email:', emailError);
      }
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
      console.error("Offerte form error:", error);
      return res.status(500).json({
        success: false,
        message: "Er is een fout opgetreden bij het versturen van uw offerte aanvraag. Probeer het opnieuw of neem telefonisch contact op."
      });
    }
  }
}