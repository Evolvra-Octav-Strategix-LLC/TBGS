import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

interface EmailData {
  selectedService: string;
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
}

interface Attachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private async getTransporter() {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
        },
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

  async sendNotificationEmail(data: EmailData) {
    try {
      const transporter = await this.getTransporter();
      const formIcon = this.getFormTypeIcon(data.formType);
      const formTypeName = this.getFormTypeName(data.formType);
      
      // Prepare attachments for photos
      const attachments: any[] = [];
      
      // Process photo attachments from object storage URLs
      if (data.photos && data.photos.length > 0) {
        for (let i = 0; i < data.photos.length; i++) {
          const photoUrl = data.photos[i];
          try {
            // Convert object storage URL to server-accessible URL
            let serverUrl = photoUrl;
            if (photoUrl.startsWith('https://storage.googleapis.com/')) {
              // Extract the object path from the storage URL
              const urlParts = photoUrl.split('/');
              const bucketIndex = urlParts.findIndex(part => part === 'repl-default-bucket-' + process.env.REPL_ID);
              if (bucketIndex !== -1 && bucketIndex < urlParts.length - 1) {
                const objectPath = urlParts.slice(bucketIndex + 1).join('/');
                serverUrl = `http://localhost:5000/objects/${objectPath}`;
              }
            }

            console.log(`Downloading image ${i + 1} from:`, serverUrl);
            
            // Fetch the image from our server endpoint
            const response = await fetch(serverUrl);
            if (response.ok) {
              const imageBuffer = await response.arrayBuffer();
              const buffer = Buffer.from(imageBuffer);
              
              // Determine content type based on URL or use default
              let contentType = 'image/jpeg';
              if (photoUrl.toLowerCase().includes('.png')) {
                contentType = 'image/png';
              } else if (photoUrl.toLowerCase().includes('.pdf')) {
                contentType = 'application/pdf';
              }
              
              attachments.push({
                filename: `foto_${i + 1}.${contentType === 'image/png' ? 'png' : contentType === 'application/pdf' ? 'pdf' : 'jpg'}`,
                content: buffer,
                contentType: contentType
              });
              
              console.log(`Successfully attached image ${i + 1} (${buffer.length} bytes)`);
            } else {
              console.error(`Failed to fetch image ${i + 1}:`, response.status, response.statusText);
            }
          } catch (error) {
            console.error(`Error processing photo ${i + 1} (${photoUrl}):`, error);
          }
        }
      }
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
        subject: `${formIcon} Nieuwe ${formTypeName}: ${data.selectedService} - ${data.firstName} ${data.lastName}`,
        attachments: attachments,
        html: `
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
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 120px;">Service:</td>
                    <td style="padding: 8px 0;">${data.selectedService}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Beschrijving:</td>
                    <td style="padding: 8px 0; line-height: 1.5;">${data.projectDescription}</td>
                  </tr>
                </table>
              </div>
              
              ${data.photos.length > 0 ? `
              <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin-bottom: 15px;">Bijgevoegde Foto's</h3>
                <p style="color: #666; padding: 10px; background: #f9f9f9; border-radius: 4px;">
                  ${data.photos.length} foto${data.photos.length > 1 ? "'s" : ''} bijgevoegd (zie bijlagen)
                </p>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding: 15px; background: #f0f8ff; border-left: 4px solid #0066cc; border-radius: 4px;">
                <p style="margin: 0; color: #333; font-weight: bold;">Actie vereist:</p>
                <p style="margin: 5px 0 0 0; color: #666;">Neem binnen 2 uur contact op met de klant.</p>
              </div>
              
              <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px; border-top: 1px solid #eee; padding-top: 20px;">
                <strong>TBGS B.V.</strong><br>
                Totaal Bouw Groep Specialisten
              </div>
            </div>
          </body>
          </html>
        `,
      };

      await transporter.sendMail(mailOptions);
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
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: `Bedankt ${data.firstName}! Je ${formTypeName.toLowerCase()} is ontvangen - TBGS B.V.`,
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
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%); padding: 30px 20px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 300;">
                  🎉 Bedankt ${data.firstName}!
                </h1>
                <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">
                  Je ${formTypeName.toLowerCase()} is succesvol ontvangen
                </p>
              </div>
              
              <!-- Content -->
              <div style="padding: 30px;">
                
                <!-- Success Message -->
                <div style="text-align: center; margin-bottom: 30px;">
                  <div style="background: #e8f5e8; color: #27ae60; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h2 style="margin: 0; font-size: 22px;">✅ Aanvraag Ontvangen</h2>
                    <p style="margin: 10px 0 0 0; font-size: 16px;">
                      We hebben je aanvraag voor <strong>${data.selectedService}</strong> succesvol ontvangen en in behandeling genomen.
                    </p>
                  </div>
                </div>

                <!-- What happens next -->
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                  <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 22px; text-align: center;">
                    🚀 Wat gebeurt er nu?
                  </h2>
                  <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: start; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3498db;">
                      <span style="background: #3498db; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">1</span>
                      <div>
                        <strong style="color: #2c3e50;">Snelle beoordeling</strong>
                        <p style="margin: 5px 0 0 0; color: #666; line-height: 1.4;">We bekijken je aanvraag binnen 2 uur en beoordelen de beste aanpak</p>
                      </div>
                    </div>
                    <div style="display: flex; align-items: start; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #e74c3c;">
                      <span style="background: #e74c3c; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">2</span>
                      <div>
                        <strong style="color: #2c3e50;">Persoonlijk contact</strong>
                        <p style="margin: 5px 0 0 0; color: #666; line-height: 1.4;">Een van onze specialisten neemt contact met je op via ${data.contactPreference.toLowerCase()}</p>
                      </div>
                    </div>
                    <div style="display: flex; align-items: start; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #27ae60;">
                      <span style="background: #27ae60; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0; font-weight: bold;">3</span>
                      <div>
                        <strong style="color: #2c3e50;">Vrijblijvende afspraak</strong>
                        <p style="margin: 5px 0 0 0; color: #666; line-height: 1.4;">We plannen een afspraak voor advies en ${data.formType === 'offerte' ? 'een uitgebreide offerte' : 'directe hulp'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Project Summary -->
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                  <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; text-align: center;">
                    📋 Jouw Project Samenvatting
                  </h2>
                  <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                    <div style="display: grid; gap: 12px;">
                      <div style="display: flex;">
                        <strong style="width: 130px; color: #555;">Service:</strong>
                        <span style="background: #e8f5e8; color: #27ae60; padding: 4px 8px; border-radius: 4px; font-weight: 600;">${data.selectedService}</span>
                      </div>
                      <div style="display: flex;">
                        <strong style="width: 130px; color: #555;">Adres:</strong>
                        <span>${addressLink}</span>
                      </div>
                      <div style="display: flex;">
                        <strong style="width: 130px; color: #555;">Contact via:</strong>
                        <span style="background: #e3f2fd; padding: 4px 8px; border-radius: 4px; color: #1565c0;">${data.contactPreference}</span>
                      </div>
                      ${data.photos.length > 0 ? `
                      <div style="display: flex;">
                        <strong style="width: 130px; color: #555;">Foto's:</strong>
                        <span style="background: #f3e5f5; color: #8e24aa; padding: 4px 8px; border-radius: 4px;">${data.photos.length} bijgevoegd</span>
                      </div>
                      ` : ''}
                    </div>
                  </div>
                </div>

                <!-- Urgency Note for Storm/Lekkage -->
                ${data.selectedService.toLowerCase().includes('storm') || data.selectedService.toLowerCase().includes('lekkage') ? `
                <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 25px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; font-size: 18px;">⚡ Spoedgeval Herkend</h3>
                  <p style="margin: 0; font-size: 14px;">
                    We begrijpen dat dit mogelijk urgent is. Onze specialist neemt zo spoedig mogelijk contact met je op.
                  </p>
                </div>
                ` : ''}

                <!-- Contact Information -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 20px;">📞 Vragen of Spoed?</h3>
                  <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.9;">
                    Neem gerust direct contact met ons op
                  </p>
                  <div style="display: grid; gap: 10px; max-width: 300px; margin: 0 auto;">
                    <a href="tel:+31402026744" style="background: rgba(255,255,255,0.2); color: white; padding: 12px; border-radius: 6px; text-decoration: none; display: block;">
                      📞 +31 40 202 67 44
                    </a>
                    <a href="mailto:info@tbgs.nl" style="background: rgba(255,255,255,0.2); color: white; padding: 12px; border-radius: 6px; text-decoration: none; display: block;">
                      ✉️ info@tbgs.nl
                    </a>
                    <a href="https://www.tbgs.nl" target="_blank" style="background: rgba(255,255,255,0.2); color: white; padding: 12px; border-radius: 6px; text-decoration: none; display: block;">
                      🌐 www.tbgs.nl
                    </a>
                  </div>
                </div>

                <!-- Trust Indicators -->
                <div style="text-align: center; color: #666; font-size: 14px;">
                  <p style="margin: 0 0 10px 0;">
                    ⭐ Meer dan 15 jaar ervaring • 🛡️ Volledig verzekerd • 🏅 Gecertificeerde specialisten
                  </p>
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