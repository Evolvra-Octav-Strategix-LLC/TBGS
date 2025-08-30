// Vercel serverless function for offerte requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { pgTable, text, varchar, timestamp, json } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import ws from 'ws';
import multiparty from 'multiparty';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';
import { imageProcessor } from '../server/imageProcessor.js';
import { z } from 'zod';

neonConfig.webSocketConstructor = ws;

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
      const logoBuffer = await fs.readFile(logoPath);
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

    // Add compressed FFmpeg files as attachments (prefer compressed over originals)
    if (data.processedImages && data.processedImages.length > 0) {
      for (const processedImage of data.processedImages) {
        try {
          // Use compressed watermarked file if available, otherwise compressed file
          const attachmentPath = processedImage.watermarkedPath || processedImage.compressedPath;
          
          if (attachmentPath && !processedImage.processingFailed) {
            const fileBuffer = await fs.readFile(attachmentPath);
            const filename = `tbgs_${processedImage.originalName.replace(/\.[^/.]+$/, '')}_compressed.jpg`;
            
            attachments.push({
              filename,
              content: fileBuffer,
              contentType: 'image/jpeg'
            });
            
            console.log(`✓ Compressed attachment: ${filename} (${(fileBuffer.length / 1024).toFixed(1)}KB, ${processedImage.compressionRatio}% reduction)`);
          } else {
            // Fallback to original if processing failed
            const originalFile = data.files.find(f => f.originalFilename === processedImage.originalName);
            if (originalFile) {
              const fileBuffer = await fs.readFile(originalFile.path);
              attachments.push({
                filename: originalFile.originalFilename || 'uploaded_file',
                content: fileBuffer,
                contentType: originalFile.headers ? originalFile.headers['content-type'] : 'image/jpeg'
              });
              console.log(`⚠️ Fallback to original: ${originalFile.originalFilename} (processing failed)`);
            }
          }
        } catch (fileError) {
          console.error('Error reading processed image:', processedImage.originalName, fileError);
        }
      }
    } else if (data.files && data.files.length > 0) {
      // Fallback to original files if no processed images
      for (const file of data.files) {
        try {
          const fileBuffer = await fs.readFile(file.path);
          attachments.push({
            filename: file.originalFilename || 'uploaded_file',
            content: fileBuffer,
            contentType: file.headers ? file.headers['content-type'] : 'application/octet-stream'
          });
          console.log(`✓ Original attachment: ${file.originalFilename} (no FFmpeg processing)`);
        } catch (fileError) {
          console.error('Error reading original file:', file.originalFilename, fileError);
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

  try {
    let formData = {};
    let files = [];

    // Parse FormData if content-type includes multipart
    if (req.headers['content-type']?.includes('multipart/form-data')) {
      const form = new multiparty.Form();
      
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

    // Validate form data first
    const validatedData = offerteFormSchema.parse(formData);

    // Queue uploaded images for background processing with FFmpeg
    let queuedImages = [];
    if (files && files.length > 0) {
      console.log(`🚀 Processing ${files.length} offerte images with FFmpeg compression...`);
      
      // Save to database first to get request ID
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
        privacyAkkoord: validatedData.privacyAkkoord,
        nieuwsbrief: validatedData.nieuwsbrief,
        files: [] // Will be updated when processing completes
      }).returning();

      // Queue each image for background processing
      const { taskProcessor } = await import('../server/taskQueue.js');
      
      for (const file of files) {
        try {
          const taskId = await taskProcessor.addImageTask({
            originalPath: file.path,
            originalName: file.originalFilename || 'image.jpg',
            parentType: 'offerte',
            parentId: savedRequest.id,
            processingOptions: {
              maxWidth: 1920,
              maxHeight: 1080,
              quality: 85,
              format: 'jpeg',
              createThumbnail: true,
              thumbnailSize: 300,
              addWatermark: true,
              watermarkText: 'TBGS B.V.',
              removeMetadata: true,
              autoRotate: true
            }
          });

          queuedImages.push({
            taskId,
            originalName: file.originalFilename || 'image.jpg',
            originalSize: file.size || 0,
            status: 'queued'
          });

        } catch (error) {
          console.error(`Failed to queue offerte image ${file.originalFilename}:`, error);
          queuedImages.push({
            originalName: file.originalFilename || 'image.jpg',
            originalSize: file.size || 0,
            status: 'failed',
            error: error.message
          });
        }
      }

      console.log(`✓ ${queuedImages.filter(img => img.status === 'queued').length} offerte images queued for background processing`);

      // Return early with queued status
      return res.json({
        success: true,
        message: 'Offerte aanvraag succesvol ingediend! Uw afbeeldingen worden verwerkt in de achtergrond.',
        requestId: savedRequest.id,
        queuedImages,
        emailWillBeSentAfterProcessing: true
      });
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
    const validatedData = offerteFormSchema.parse(formData);

    // Save to database
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

    // Send notification email to admin with compressed attachments
    try {
      await sendNotificationEmail({
        id: savedRequest.id,
        ...validatedData,
        processedImages: [],
        totalImages: 0,
        files: [],
        ffmpegResults: []
      });
    } catch (emailError) {
      console.error('Failed to send offerte notification email:', emailError);
    }

    // No FFmpeg cleanup needed for no-files case

    // Send thank you email to client
    try {
      await sendThankYouEmail({
        ...validatedData,
        processedImages: [],
        totalImages: 0
      });
    } catch (emailError) {
      console.error('Failed to send offerte thank you email:', emailError);
    }

    return res.status(200).json({ 
      success: true, 
      message: "Uw offerte aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op voor een afspraak.",
      id: savedRequest.id
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