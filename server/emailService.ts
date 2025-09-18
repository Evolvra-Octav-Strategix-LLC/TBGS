import { Resend } from 'resend';
import { createTBGSVCard } from './vcard';

// HTML escape utility for security
const escapeHtml = (text: string): string => {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

interface EmailData {
  selectedService: string;
  address: string;
  projectDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  contactPreference: string;
  submittedAt: Date;
  formType?: 'popup' | 'offerte' | 'contact-modal';
  files?: any[]; // Keep for compatibility but ignore
  // Google Places API data (for vCard generation)
  street?: string;
  houseNumber?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

class EmailService {
  private resend: Resend;

  constructor() {
    // Validate environment variables on startup
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ CRITICAL: Missing Resend API key!');
      console.error('📧 RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing');
      console.error('📧 Please set RESEND_API_KEY environment variable!');
      throw new Error('RESEND_API_KEY is required');
    } else {
      console.log('✅ Resend API key found in environment');
      console.log('📧 Using Resend email service');
    }

    this.resend = new Resend(process.env.RESEND_API_KEY);
    
    // Test Resend connectivity on startup
    this.testConnectivity();
  }

  private async testConnectivity() {
    try {
      console.log('🔍 Testing Resend connectivity...');
      // Test by getting domains (basic API call)
      await this.resend.domains.list();
      console.log('✅ Resend connection verified successfully');
    } catch (error: any) {
      console.warn('⚠️ Resend connectivity test failed:', error.message);
    }
  }

  private async sendWithRetry(emailOptions: any, maxRetries = 3): Promise<any> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`📧 Email attempt ${attempt}/${maxRetries} via Resend...`);
        
        const result = await this.resend.emails.send(emailOptions);
        
        if (result.error) {
          throw new Error(`Resend API error: ${result.error.message}`);
        }
        
        console.log(`✅ Email sent successfully! ID: ${result.data?.id}`);
        return result;
      } catch (error: any) {
        console.error(`❌ Email attempt ${attempt} failed:`, error.message);
        
        if (attempt === maxRetries) {
          throw new Error(`Failed to send email after ${maxRetries} attempts: ${error.message}`);
        }
        
        // Wait before retry (exponential backoff)
        const delay = Math.pow(2, attempt - 1) * 1000; // 1s, 2s, 4s
        console.log(`⏳ Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  async sendNotificationEmail(data: EmailData) {
    try {
      console.log('📧 Starting email send process...');
      console.log('📧 Using Resend email service');
      
      if (!process.env.RESEND_API_KEY) {
        throw new Error('Resend API key not configured. Set RESEND_API_KEY environment variable.');
      }
      
      console.log('📧 Sending notification email to admin...');
      
      const subject = `Nieuwe aanvraag: ${data.selectedService} - ${data.firstName} ${data.lastName}`;
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nieuwe klantaanvraag</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px;">
              Nieuwe klantaanvraag
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Naam:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
                <td style="padding: 8px 0;"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Adres:</td>
                <td style="padding: 8px 0;"><a href="https://www.google.com/maps/search/${encodeURIComponent(data.address)}" target="_blank" rel="noopener noreferrer" style="color: #1e88e5; text-decoration: none;">${escapeHtml(data.address)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.selectedService)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Contact voorkeur:</td>
                <td style="padding: 8px 0;">${escapeHtml(data.contactPreference)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Beschrijving:</td>
                <td style="padding: 8px 0; line-height: 1.5;">${escapeHtml(data.projectDescription)}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Ontvangen op ${new Date(data.submittedAt).toLocaleDateString('nl-NL')} om ${new Date(data.submittedAt).toLocaleTimeString('nl-NL')}
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      // Create attachments array
      const attachments = [];
      
      // Add user uploaded files first
      if (data.files && data.files.length > 0) {
        console.log(`📎 Adding ${data.files.length} user uploaded files...`);
        for (const file of data.files) {
          if (file.path) {
            const fs = require('fs');
            const fileContent = fs.readFileSync(file.path);
            
            attachments.push({
              filename: file.originalname || 'upload.file',
              content: fileContent,
              content_type: file.mimetype || 'application/octet-stream'
            });
            console.log(`✅ Added file: ${file.originalname}`);
          }
        }
      }
      
      // Create high-end TBGS vCard attachment with logo 
      try {
        const vcardData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          projectDescription: data.projectDescription,
          selectedService: data.selectedService,
          // Add individual components if available from Google Places API
          street: (data as any).street,
          houseNumber: (data as any).houseNumber,
          city: (data as any).city,
          postcode: (data as any).postcode,
          country: (data as any).country
        };
        
        const vcardBuffer = createTBGSVCard(vcardData);
        
        // Create comprehensive filename with name, address and postcode
        let filenameParts = [];
        
        // Add name
        if (data.firstName || data.lastName) {
          filenameParts.push([data.firstName, data.lastName].filter(Boolean).join('_'));
        }
        
        // Add address info for easy identification
        if ((data as any).street && (data as any).houseNumber) {
          filenameParts.push(`${(data as any).street}_${(data as any).houseNumber}`.replace(/[^a-zA-Z0-9_]/g, '_'));
          if ((data as any).postcode) {
            filenameParts.push((data as any).postcode.replace(/\s/g, ''));
          }
        } else if (data.address) {
          // Fallback: parse address string
          const addressParts = data.address.split(',')[0].trim();
          const cleanAddress = addressParts.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          if (cleanAddress) {
            filenameParts.push(cleanAddress);
          }
          
          const postcodeMatch = data.address.match(/(\d{4}\s*[A-Za-z]{2})/);
          if (postcodeMatch) {
            filenameParts.push(postcodeMatch[1].replace(/\s/g, ''));
          }
        }
        
        const filename = filenameParts.length > 0 
          ? `${filenameParts.join('_').toLowerCase().replace(/[^a-z0-9_]/g, '')}_tbgs.vcf`
          : 'tbgs_contact.vcf';
        
        attachments.push({
          filename,
          content: vcardBuffer,
          content_type: 'text/vcard; charset=utf-8'
        });
        
        console.log(`✓ TBGS vCard attachment created: ${filename}`);
      } catch (vcardError) {
        console.warn('vCard generation failed:', vcardError);
      }

      // Send email using Resend
      await this.sendWithRetry({
        from: 'TBGS BV <info@tbgs.nl>',
        to: ['info@tbgs.nl'],
        subject,
        html,
        attachments: attachments.length > 0 ? attachments : undefined
      });

      console.log('✅ Notification email sent successfully');
    } catch (error) {
      console.error('❌ Failed to send notification email:', error);
      throw error;
    }
  }

  async sendThankYouEmail(data: EmailData) {
    try {
      console.log('📧 Sending thank you email to customer...');
      
      const subject = `Bedankt ${data.firstName}! Je aanvraag is ontvangen - TBGS B.V.`;
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Bedankt voor je aanvraag</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">
                Bedankt ${escapeHtml(data.firstName)}!
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Je aanvraag is succesvol ontvangen
              </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 30px;">
              <p style="font-size: 18px; line-height: 1.6; margin: 0;">
                We hebben je aanvraag voor <strong>${escapeHtml(data.selectedService)}</strong> ontvangen.<br>
                Een van onze specialisten neemt binnen 24 uur contact met je op.
              </p>
            </div>

            <div style="background: #f8f9fa; color: #333; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px; border: 1px solid #e9ecef;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #075e54;">Vragen of spoedeisend?</h3>
              <p style="margin: 0; font-size: 16px;">
                <a href="https://wa.me/31614595142?text=Hallo%20Team%20TBGS%2C%20ik%20heb%20een%20aanvraag%20ingediend%20en%20ik%20vroeg%20me%20af%20...." target="_blank" rel="noopener noreferrer" style="background: #dcf8c6; color: #075e54; padding: 12px 20px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; border: 2px solid #25d366;">
                  📱 WhatsApp: 06-14595142
                </a>
              </p>
            </div>
            
            <div style="text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 20px;">
              <strong>TBGS B.V.</strong><br>
              Totaal Bouw Groep Specialisten<br>
              Betrouwbare vakmannen voor al uw bouwprojecten
            </div>
          </div>
        </body>
        </html>
      `;

      await this.sendWithRetry({
        from: 'TBGS BV <info@tbgs.nl>',
        to: [data.email],
        subject,
        html
      });

      console.log('✅ Thank you email sent successfully');
    } catch (error) {
      console.error('❌ Failed to send thank you email:', error);
      throw error;
    }
  }

  // Simple method for sending emails with attachments (keeping for compatibility)
  async sendEmailWithAttachments(opts: any) {
    return this.sendNotificationEmail(opts.contactData);
  }
}

export const emailService = new EmailService();