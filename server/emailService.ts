import nodemailer from 'nodemailer';

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
      const addressLink = this.createAddressLink(data.address);
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
        subject: `${formIcon} Nieuwe ${formTypeName}: ${data.selectedService} - ${data.firstName} ${data.lastName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nieuwe ${formTypeName}</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center; position: relative;">
                <div style="position: absolute; top: 15px; right: 20px; background: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 20px; font-size: 14px; color: white;">
                  ${data.formType === 'offerte' ? 'OFFERTE' : 'SNELLE AANVRAAG'}
                </div>
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">
                  ${formIcon} Nieuwe ${formTypeName}
                </h1>
                <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">
                  Ontvangen op ${data.submittedAt.toLocaleDateString('nl-NL', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} om ${data.submittedAt.toLocaleTimeString('nl-NL', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
              
              <!-- Content -->
              <div style="padding: 30px;">
                
                <!-- Priority Alert for urgent services -->
                ${data.selectedService.toLowerCase().includes('storm') || data.selectedService.toLowerCase().includes('lekkage') ? `
                <div style="background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); color: white; padding: 15px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
                  <h3 style="margin: 0; font-size: 18px;">⚡ SPOED AANVRAAG</h3>
                  <p style="margin: 5px 0 0 0; font-size: 14px;">Deze klant heeft mogelijk een spoedgeval</p>
                </div>
                ` : ''}
                
                <!-- Client Information -->
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                  <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                    👤 Klantgegevens
                  </h2>
                  <div style="display: grid; gap: 12px;">
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #667eea;">
                      <strong style="width: 140px; color: #555;">Naam:</strong>
                      <span>${data.firstName} ${data.lastName}</span>
                    </div>
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #667eea;">
                      <strong style="width: 140px; color: #555;">Email:</strong>
                      <span><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a></span>
                    </div>
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #667eea;">
                      <strong style="width: 140px; color: #555;">Telefoon:</strong>
                      <span><a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">${data.phone}</a></span>
                    </div>
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #667eea;">
                      <strong style="width: 140px; color: #555;">Contact voorkeur:</strong>
                      <span style="background: #e3f2fd; padding: 4px 8px; border-radius: 4px; font-size: 13px;">${data.contactPreference}</span>
                    </div>
                  </div>
                </div>

                <!-- Project Information -->
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                  <h2 style="color: #2c3e50; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                    🏗️ Project Details
                  </h2>
                  <div style="display: grid; gap: 12px;">
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #27ae60;">
                      <strong style="width: 140px; color: #555;">Service:</strong>
                      <span style="background: #e8f5e8; padding: 4px 8px; border-radius: 4px; font-weight: 600; color: #27ae60;">${data.selectedService}</span>
                    </div>
                    <div style="display: flex; padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #e74c3c;">
                      <strong style="width: 140px; color: #555;">Adres:</strong>
                      <span>${addressLink} 
                        <a href="https://maps.google.com/maps?q=${encodeURIComponent(data.address)}" target="_blank" style="margin-left: 8px; background: #3498db; color: white; padding: 2px 6px; border-radius: 3px; text-decoration: none; font-size: 11px;">📍 KAART</a>
                      </span>
                    </div>
                    <div style="padding: 12px; background: white; border-radius: 6px; border-left: 4px solid #f39c12;">
                      <strong style="color: #555; display: block; margin-bottom: 8px;">Beschrijving:</strong>
                      <div style="background: #fdf6e3; padding: 12px; border-radius: 4px; line-height: 1.5; white-space: pre-wrap;">${data.projectDescription}</div>
                    </div>
                  </div>
                </div>

                <!-- Photos Section -->
                ${data.photos.length > 0 ? `
                <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
                  <h2 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 20px; display: flex; align-items: center;">
                    📸 Bijgevoegde Foto's
                  </h2>
                  <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #9b59b6;">
                    <span style="background: #f3e5f5; color: #8e24aa; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                      ${data.photos.length} foto${data.photos.length > 1 ? "'s" : ''} bijgevoegd
                    </span>
                    <p style="margin: 10px 0 0 0; color: #666; font-size: 13px;">Foto's zijn opgeslagen en kunnen worden bekeken in het systeem</p>
                  </div>
                </div>
                ` : ''}

                <!-- Action Required -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
                  <h3 style="margin: 0 0 10px 0; font-size: 18px;">🎯 Actie Vereist</h3>
                  <p style="margin: 0; font-size: 14px; opacity: 0.9;">
                    Neem binnen 2 uur contact op met de klant voor de beste service ervaring
                  </p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #2c3e50; color: white; padding: 20px; text-align: center;">
                <h3 style="margin: 0 0 5px 0; font-size: 18px;">TBGS B.V.</h3>
                <p style="margin: 0; font-size: 14px; opacity: 0.8;">Totaal Bouw Groep Specialisten</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.6;">Samen duurzaam & innovatief (ver)bouwen</p>
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