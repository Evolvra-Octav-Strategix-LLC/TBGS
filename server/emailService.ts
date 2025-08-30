import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { createTBGSVCard } from './vcard';
import { imageProcessor } from './imageProcessor';

interface EmailData {
  selectedService: string;
  serviceType?: string;
  specialist?: string;
  projectType?: string;
  urgencyLevel?: string;
  photos: string[];
  address: string;
  projectDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactPreference: string;
  submittedAt: Date;
  formType?: 'popup' | 'offerte';
  files?: FileUpload[]; // Voor multer uploads
  // Google Places API data
  street?: string;
  houseNumber?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

interface FileUpload {
  path?: string;
  buffer?: Buffer;
  originalname?: string;
  filename?: string;
  mimetype?: string;
  size?: number;
}

interface ProcessedImageData {
  originalName: string;
  compressedPath?: string;
  watermarkedPath?: string;
  thumbnailPath?: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  processingFailed?: boolean;
}

// ---- Config via ENV ----
const {
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '587',
  SMTP_USER = process.env.GMAIL_USER,
  SMTP_PASS = process.env.GMAIL_APP_PASSWORD,
  SMTP_SECURE = 'false', // 'true' voor 465
  MAIL_FROM = process.env.GMAIL_USER,
  MAIL_TO = process.env.GMAIL_USER, // admin ontvangst
  MAX_TOTAL_SIZE_MB = '20', // totale attachmentslimiet
  MAX_PER_FILE_MB = '12',   // per bestand limiet
} = process.env;

// ---- Mime/Ext whitelist ----
const ALLOWED_MIME = new Set([
  'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'application/vnd.ms-excel', // .xls
  'text/plain'
]);

const BLOCKED_EXT = new Set([
  '.exe','.bat','.cmd','.sh','.ps1','.js','.mjs','.cjs','.scr','.jar','.dll','.msi','.apk'
]);

// ---- Helpers ----
const toBytes = (mb: string) => Number(mb) * 1024 * 1024;

function isAllowedFile(filePathOrName: string, mimetype?: string): boolean {
  const ext = path.extname(filePathOrName || '').toLowerCase();
  if (BLOCKED_EXT.has(ext)) return false;
  if (mimetype && ALLOWED_MIME.has(mimetype)) return true;
  // fallback voor onbekende mimetype: alleen veilig als extensie duidelijk is
  const SAFE_EXT = new Set(['.jpg','.jpeg','.png','.webp','.gif','.pdf','.doc','.docx','.xls','.xlsx','.txt']);
  return SAFE_EXT.has(ext);
}

function hashName(name: string): string {
  const base = `${Date.now()}-${name}`;
  return base.replace(/[^a-z0-9.\-]+/gi, '_');
}

// ---- Retry met exponential backoff ----
async function withRetries<T>(fn: () => Promise<T>, { retries = 3, baseDelayMs = 600 } = {}): Promise<T> {
  let attempt = 0;
  let lastErr: any;
  while (attempt <= retries) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (attempt === retries) break;
      const jitter = Math.floor(Math.random() * 200);
      const delay = baseDelayMs * Math.pow(2, attempt) + jitter;
      await new Promise(r => setTimeout(r, delay));
      attempt++;
    }
  }
  throw lastErr;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private async getTransporter() {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === 'true',
        auth: SMTP_USER && SMTP_PASS ? { 
          user: SMTP_USER, 
          pass: SMTP_PASS 
        } : undefined,
      });
    }
    return this.transporter;
  }

  private createAddressLink(address: string): string {
    // Create Google Maps link for the address
    const encodedAddress = encodeURIComponent(address);
    return `<a href="https://maps.google.com/maps?q=${encodedAddress}" target="_blank" style="color: #667eea; text-decoration: none;">${address}</a>`;
  }

  private getFormTypeIcon(formType?: string): string {
    return formType === 'offerte' ? '📋' : '💬';
  }

  private getFormTypeName(formType?: string): string {
    return formType === 'offerte' ? 'Offerte Aanvraag' : 'Service Aanvraag';
  }

  /**
   * Stuur e-mail met attachments (uploads).
   */
  async sendEmailWithAttachments(opts: {
    subject: string;
    html: string;
    text?: string;
    files?: FileUpload[];
    to?: string;
    from?: string;
    contactData?: {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      address?: string;
      projectDescription?: string;
      selectedService?: string;
    };
  }) {
    const {
      subject,
      html,
      text,
      files = [],
      to = MAIL_TO,
      from = MAIL_FROM,
      contactData
    } = opts;

    if (!subject || !html) {
      throw new Error('emailservice: subject en html zijn verplicht.');
    }
    if (!to) throw new Error('emailservice: MAIL_TO ontbreekt (env of opts).');
    if (!from) throw new Error('emailservice: MAIL_FROM ontbreekt (env of opts).');

    // Filter & validatie attachments
    const perFileLimit = toBytes(MAX_PER_FILE_MB);
    const totalLimit = toBytes(MAX_TOTAL_SIZE_MB);
    let total = 0;

    const attachments: any[] = [];

    // Add high-end TBGS vCard attachment met logo FIRST (to show at top of email)
    if (contactData && (contactData.firstName || contactData.email)) {
      try {
        // Pass through separate address components if available (from Google Places API)
        const vcardData = {
          firstName: contactData.firstName,
          lastName: contactData.lastName,
          email: contactData.email,
          phone: contactData.phone,
          address: contactData.address,
          projectDescription: contactData.projectDescription,
          selectedService: contactData.selectedService,
          // Add individual components if available
          street: (contactData as any).street,
          houseNumber: (contactData as any).houseNumber,
          city: (contactData as any).city,
          postcode: (contactData as any).postcode,
          country: (contactData as any).country
        };
        
        const vcardBuffer = createTBGSVCard(vcardData);
        
        // Create comprehensive filename with name, address and postcode
        let filenameParts = [];
        
        // Add name
        if (contactData.firstName || contactData.lastName) {
          filenameParts.push([contactData.firstName, contactData.lastName].filter(Boolean).join('_'));
        }
        
        // Use individual address components if available, otherwise parse address string
        if ((contactData as any).street && (contactData as any).houseNumber) {
          filenameParts.push(`${(contactData as any).street}_${(contactData as any).houseNumber}`.replace(/[^a-zA-Z0-9_]/g, '_'));
          if ((contactData as any).postcode) {
            filenameParts.push((contactData as any).postcode.replace(/\s/g, ''));
          }
        } else if (contactData.address) {
          // Fallback: parse address string
          const addressParts = contactData.address.split(',')[0].trim();
          const cleanAddress = addressParts.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          if (cleanAddress) {
            filenameParts.push(cleanAddress);
          }
          
          const postcodeMatch = contactData.address.match(/(\d{4}\s*[A-Za-z]{2})/);
          if (postcodeMatch) {
            filenameParts.push(postcodeMatch[1].replace(/\s/g, ''));
          }
        }
        
        const filename = filenameParts.length > 0 
          ? `${filenameParts.join('_').toLowerCase().replace(/[^a-z0-9_]/g, '')}_tbgs.vcf`
          : 'tbgs_contact.vcf';
        
        // Add vCard as FIRST attachment
        attachments.push({
          filename,
          contentType: 'text/vcard; charset=utf-8',
          content: vcardBuffer,
        });
        console.log(`✓ TBGS vCard toegevoegd als eerste attachment: ${filename}`);
      } catch (vcardError) {
        console.warn('vCard generatie gefaald:', vcardError);
      }
    }

    // Process all files as direct attachments
    for (const f of files) {
      try {
        const name = hashName(f.originalname || f.filename || 'upload.bin');
        const mimetype = f.mimetype || 'application/octet-stream';
        
        if (!isAllowedFile(f.originalname || f.path || '', mimetype)) {
          console.warn(`emailservice: blocked file type: ${f.originalname}`);
          continue;
        }
        
        console.log(`📎 Adding attachment: ${f.originalname}`);
        
        let size = 0;
        let buffer: Buffer;

        // Get buffer and size
        if (f.buffer) {
          buffer = Buffer.isBuffer(f.buffer) ? f.buffer : Buffer.from(f.buffer);
          size = buffer.length;
        } else if (f.path && fs.existsSync(f.path)) {
          buffer = fs.readFileSync(f.path);
          size = buffer.length;
        } else {
          console.warn(`emailservice: no buffer or path for file: ${f.originalname}`);
          continue;
        }

        if (size > perFileLimit) {
          console.warn(`emailservice: file te groot (${size} > ${perFileLimit}): ${f.originalname}`);
          continue;
        }
        if (total + size > totalLimit) {
          console.warn(`emailservice: total attachment limiet bereikt. Skip: ${f.originalname}`);
          continue;
        }

        // Add file as attachment
        attachments.push({
          filename: name,
          contentType: mimetype,
          content: buffer,
        });
        total += size;
        console.log(`✅ Added attachment: ${name} (${(size / 1024).toFixed(1)}KB)`);
        
      } catch (error) {
        console.error(`Failed to process attachment ${f.originalname}:`, error);
      }
    }



    const transporter = await this.getTransporter();

    const mailOptions = {
      from,
      to,
      subject,
      text: text || html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 1000),
      html: html, // Clean HTML without metadata
      attachments,
    };

    const info = await withRetries(() => transporter.sendMail(mailOptions), { retries: 3, baseDelayMs: 750 });
    return info;
  }

  async sendNotificationEmail(data: EmailData) {
    try {
      const formIcon = this.getFormTypeIcon(data.formType);
      const formTypeName = this.getFormTypeName(data.formType);
      
      const html = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nieuwe ${formTypeName}</title>
          </head>
          <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              
              <h1 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">
                ${formIcon} Nieuwe ${formTypeName}
              </h1>
              
              <p style="color: #666; margin-bottom: 30px;">
                Ontvangen op ${data.submittedAt.toLocaleDateString('nl-NL')} om ${data.submittedAt.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
              </p>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin-bottom: 15px;">Klantgegevens</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Naam:</td>
                    <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Adres:</td>
                    <td style="padding: 8px 0;"><a href="https://maps.google.com/maps?q=${encodeURIComponent(data.address)}" target="_blank" style="color: #0066cc; text-decoration: none;">${data.address}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0066cc; text-decoration: none;">${data.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
                    <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #0066cc; text-decoration: none;">${data.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Contact voorkeur:</td>
                    <td style="padding: 8px 0;">${data.contactPreference}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin-bottom: 15px;">Project Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  ${data.serviceType ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Wat heeft u nodig:</td>
                    <td style="padding: 8px 0;">${data.serviceType}</td>
                  </tr>` : ''}
                  ${data.specialist ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Specialist:</td>
                    <td style="padding: 8px 0;">${data.specialist}</td>
                  </tr>` : ''}
                  ${data.projectType ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Type werkzaamheden:</td>
                    <td style="padding: 8px 0;">${data.projectType}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Service:</td>
                    <td style="padding: 8px 0;">${data.selectedService}</td>
                  </tr>
                  ${data.urgencyLevel ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Urgentie:</td>
                    <td style="padding: 8px 0; ${data.urgencyLevel === 'urgent' ? 'color: #e74c3c; font-weight: bold;' : ''}">${data.urgencyLevel === 'urgent' ? '🚨 SPOEDEISEND' : 'Normaal'}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Beschrijving:</td>
                    <td style="padding: 8px 0; line-height: 1.5;">${data.projectDescription}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 20px;">
                <strong>TBGS B.V.</strong><br>
                Totaal Bouw Groep Specialisten
              </div>
            </div>
          </body>
          </html>
      `;

      // Create address string for subject
      let addressPart = '';
      if (data.street && data.houseNumber && data.city) {
        addressPart = `${data.street}, ${data.houseNumber} ${data.city}`;
      } else if (data.address) {
        // Parse from full address if individual components not available
        const addressParts = data.address.split(',').map(p => p.trim());
        if (addressParts.length >= 2) {
          // Try to extract street/number from first part and city from last part
          const streetPart = addressParts[0];
          const cityPart = addressParts[addressParts.length - 1];
          addressPart = `${streetPart}, ${cityPart}`;
        } else {
          addressPart = data.address;
        }
      }

      // Gebruik nieuwe attachment functionaliteit met high-end vCard
      await this.sendEmailWithAttachments({
        subject: `💬 Aanvraag: "${data.selectedService}" "${addressPart}"`,
        html,
        files: data.files || [],
        contactData: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          projectDescription: data.projectDescription,
          selectedService: data.selectedService
        }
      });

      console.log('Notification email sent successfully');
    } catch (error) {
      console.error('Error sending notification email:', error);
      throw error;
    }
  }

  async sendThankYouEmail(data: EmailData) {
    try {
      const transporter = await this.getTransporter();
      const formTypeName = this.getFormTypeName(data.formType);
      const addressLink = this.createAddressLink(data.address);
      
      // Get TBGS logo for embedded image
      let logoAttachment = null;
      try {
        const fs = await import('fs');
        const pathLib = await import('path');
        const tbgsLogoPath = pathLib.join(process.cwd(), 'attached_assets', 'TBGS 545x642_1754928031668.png');
        if (fs.existsSync(tbgsLogoPath)) {
          logoAttachment = {
            filename: 'tbgs-logo.png',
            path: tbgsLogoPath,
            cid: 'tbgs-logo',
            contentDisposition: 'inline' as const
          };
          console.log('✓ TBGS logo loaded for email:', tbgsLogoPath);
        } else {
          console.warn('TBGS logo file not found:', tbgsLogoPath);
        }
      } catch (error) {
        console.warn('Could not load TBGS logo for email:', error);
      }

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: `Bedankt ${data.firstName}! Je ${formTypeName.toLowerCase()} is ontvangen - TBGS B.V.`,
        attachments: logoAttachment ? [logoAttachment] : [],
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bedankt voor je aanvraag</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              
              <!-- Header with TBGS Branding -->
              <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px 20px; text-align: center;">
                <div style="margin-bottom: 20px;">
                  <img src="cid:tbgs-logo" alt="TBGS Logo" style="max-width: 120px; height: auto;">
                </div>
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">
                  Bedankt ${data.firstName}!
                </h1>
                <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
                  Je aanvraag is succesvol ontvangen
                </p>
              </div>
              
              <!-- Content -->
              <div style="padding: 30px;">
                
                <!-- Simple confirmation -->
                <div style="text-align: center; margin-bottom: 30px;">
                  <p style="color: #2c3e50; font-size: 18px; line-height: 1.6; margin: 0;">
                    We hebben je aanvraag voor <strong>${data.selectedService}</strong> ontvangen.<br>
                    Een van onze specialisten neemt binnen 24 uur contact met je op.
                  </p>
                </div>

                ${data.selectedService.toLowerCase().includes('storm') || data.selectedService.toLowerCase().includes('lekkage') ? `
                <div style="background: #ff6b6b; color: white; padding: 20px; border-radius: 10px; margin-bottom: 25px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; font-size: 16px;">Spoedgeval</h3>
                  <p style="margin: 0; font-size: 14px;">
                    We begrijpen dat dit urgent kan zijn. Onze specialist neemt zo snel mogelijk contact op.
                  </p>
                </div>
                ` : ''}

                <!-- Contact Information -->
                <div style="background: #2c3e50; color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Vragen of spoedeisend?</h3>
                  <div style="display: grid; gap: 12px; max-width: 320px; margin: 0 auto;">
                    <a href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20een%20aanvraag%20ingediend%20via%20de%20website%20en%20zou%20graag%20meer%20informatie%20ontvangen.%20Er%20zit%20wat%20haast%20bij." style="background: #2ecc71; color: white; padding: 14px 18px; border-radius: 8px; text-decoration: none; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 16px; text-align: center; transition: background-color 0.3s;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px; flex-shrink: 0;">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                      </svg>
                      <span style="text-align: center;">WhatsApp Direct</span>
                    </a>
                    <a href="mailto:info@tbgs.nl" style="background: #34495e; color: white; padding: 14px 18px; border-radius: 8px; text-decoration: none; display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 16px; text-align: center; transition: background-color 0.3s;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px; flex-shrink: 0;">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span style="text-align: center;">info@tbgs.nl</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #2c3e50; color: white; padding: 25px; text-align: center;">
                <h3 style="margin: 0 0 8px 0; font-size: 20px;">TBGS B.V.</h3>
                <p style="margin: 0 0 5px 0; font-size: 16px; opacity: 0.9;">Totaal Bouw Groep Specialisten</p>
                <p style="margin: 0; font-size: 13px; opacity: 0.7;">Samen duurzaam & innovatief (ver)bouwen</p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="margin: 0; font-size: 12px; opacity: 0.6;">
                    Deze email is verstuurd omdat je een aanvraag hebt ingediend op onze website.
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Thank you email sent successfully');
    } catch (error) {
      console.error('Error sending thank you email:', error);
      throw error;
    }
  }
}

export const emailService = new EmailService();