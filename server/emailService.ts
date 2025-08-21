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

  async sendNotificationEmail(data: EmailData) {
    try {
      const transporter = await this.getTransporter();
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
        subject: `Nieuwe Aanvraag: ${data.selectedService} - ${data.firstName} ${data.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Nieuwe Service Aanvraag</h1>
            </div>
            
            <div style="padding: 20px; background: #f9f9f9;">
              <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                Klantgegevens
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Naam:</td>
                  <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px; font-weight: bold;">Email:</td>
                  <td style="padding: 8px;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Telefoon:</td>
                  <td style="padding: 8px;">${data.phone}</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px; font-weight: bold;">Contact voorkeur:</td>
                  <td style="padding: 8px;">${data.contactPreference}</td>
                </tr>
              </table>

              <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">
                Project Details
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Service:</td>
                  <td style="padding: 8px;">${data.selectedService}</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px; font-weight: bold;">Adres:</td>
                  <td style="padding: 8px;">${data.address}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold; vertical-align: top;">Beschrijving:</td>
                  <td style="padding: 8px;">${data.projectDescription}</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px; font-weight: bold;">Datum aanvraag:</td>
                  <td style="padding: 8px;">${data.submittedAt.toLocaleString('nl-NL')}</td>
                </tr>
              </table>

              ${data.photos.length > 0 ? `
                <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">
                  Bijgevoegde Foto's
                </h2>
                <p>${data.photos.length} foto(s) bijgevoegd</p>
              ` : ''}
            </div>
            
            <div style="background: #333; color: white; padding: 15px; text-align: center;">
              <p style="margin: 0;">TBGS B.V. - Totaal Bouw Groep Specialisten</p>
            </div>
          </div>
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
      
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: 'Bedankt voor je aanvraag - TBGS B.V.',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Bedankt ${data.firstName}!</h1>
            </div>
            
            <div style="padding: 20px; background: #f9f9f9;">
              <h2 style="color: #333;">Je aanvraag is ontvangen</h2>
              <p>Bedankt voor je interesse in onze diensten. We hebben je aanvraag voor <strong>${data.selectedService}</strong> succesvol ontvangen.</p>
              
              <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-top: 0;">Wat gebeurt er nu?</h3>
                <ul style="padding-left: 20px;">
                  <li>We bekijken je aanvraag binnen 24 uur</li>
                  <li>Een van onze specialisten neemt contact met je op</li>
                  <li>We plannen een vrijblijvende afspraak voor advies</li>
                </ul>
              </div>

              <div style="background: #667eea; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Jouw project samenvatting:</h3>
                <p><strong>Service:</strong> ${data.selectedService}</p>
                <p><strong>Adres:</strong> ${data.address}</p>
                <p><strong>Contact voorkeur:</strong> ${data.contactPreference}</p>
              </div>

              <p><strong>Vragen?</strong> Neem gerust contact met ons op:</p>
              <ul style="list-style: none; padding: 0;">
                <li>📞 +31 40 202 67 44</li>
                <li>✉️ info@tbgs.nl</li>
                <li>🌐 www.tbgs.nl</li>
              </ul>
            </div>
            
            <div style="background: #333; color: white; padding: 15px; text-align: center;">
              <p style="margin: 0;">TBGS B.V. - Totaal Bouw Groep Specialisten</p>
              <p style="margin: 5px 0 0 0; font-size: 12px;">Samen duurzaam & innovatief (ver)bouwen</p>
            </div>
          </div>
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