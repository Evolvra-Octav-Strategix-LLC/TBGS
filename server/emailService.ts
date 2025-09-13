import nodemailer from 'nodemailer';
import { createTBGSVCard } from './vcard';

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
  formType?: 'popup' | 'offerte';
  files?: any[]; // Keep for compatibility but ignore
  // Google Places API data (for vCard generation)
  street?: string;
  houseNumber?: string;
  city?: string;
  postcode?: string;
  country?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });
  }

  async sendNotificationEmail(data: EmailData) {
    try {
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
                <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
                <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Adres:</td>
                <td style="padding: 8px 0;">${data.address}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0;">${data.selectedService}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Contact voorkeur:</td>
                <td style="padding: 8px 0;">${data.contactPreference}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Beschrijving:</td>
                <td style="padding: 8px 0; line-height: 1.5;">${data.projectDescription}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Ontvangen op ${data.submittedAt.toLocaleDateString('nl-NL')} om ${data.submittedAt.toLocaleTimeString('nl-NL')}
              </p>
            </div>
          </div>
        </body>
        </html>
      `;

      // Create attachments array starting with user uploaded files
      const attachments = [];
      
      // Add user uploaded files first
      if (data.files && data.files.length > 0) {
        console.log(`📎 Adding ${data.files.length} user uploaded files...`);
        for (const file of data.files) {
          if (file.path || file.buffer) {
            attachments.push({
              filename: file.originalname || file.filename || 'upload.file',
              path: file.path, // Use path if available
              content: file.buffer, // Or buffer if path not available
              contentType: file.mimetype || 'application/octet-stream'
            });
            console.log(`✓ Added file: ${file.originalname || file.filename}`);
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
          contentType: 'text/vcard; charset=utf-8',
          content: vcardBuffer,
        });
        
        console.log(`✓ TBGS vCard attachment created: ${filename}`);
      } catch (vcardError) {
        console.warn('vCard generation failed:', vcardError);
      }

      await this.transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Send to yourself (admin)
        subject,
        html,
        attachments
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
                Bedankt ${data.firstName}!
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Je aanvraag is succesvol ontvangen
              </p>
            </div>
            
            <div style="text-align: center; margin-bottom: 30px;">
              <p style="font-size: 18px; line-height: 1.6; margin: 0;">
                We hebben je aanvraag voor <strong>${data.selectedService}</strong> ontvangen.<br>
                Een van onze specialisten neemt binnen 24 uur contact met je op.
              </p>
            </div>

            <div style="background: #2c3e50; color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px;">Vragen of spoedeisend?</h3>
              <p style="margin: 0; font-size: 16px;">
                Bel direct: <a href="tel:+31614595142" style="color: #2ecc71; text-decoration: none; font-weight: bold;">06-14595142</a><br>
                Email: <a href="mailto:info@tbgs.nl" style="color: #2ecc71; text-decoration: none;">info@tbgs.nl</a>
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

      await this.transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: data.email,
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