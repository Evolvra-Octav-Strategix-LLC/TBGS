// Vercel serverless function for sending emails using Resend
import { Resend } from 'resend';

const resend = new Resend('re_6jkbvCDw_5PS45oAiJRicknQV9z2E1mkf');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { emailData, files } = req.body;
    
    if (!emailData) {
      return res.status(400).json({ error: 'emailData is required' });
    }

    // Create email content
    const subject = `Nieuwe aanvraag: ${emailData.selectedService} - ${emailData.firstName} ${emailData.lastName}`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Nieuwe Service Aanvraag - TBGS BV</h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Klantgegevens</h3>
          <p><strong>Naam:</strong> ${emailData.firstName} ${emailData.lastName}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          <p><strong>Telefoon:</strong> ${emailData.phone}</p>
          <p><strong>Adres:</strong> ${emailData.address}</p>
          <p><strong>Voorkeur contact:</strong> ${emailData.contactPreference}</p>
        </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e40af;">Project Details</h3>
          <p><strong>Service:</strong> ${emailData.selectedService}</p>
          <p><strong>Beschrijving:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
            ${emailData.projectDescription}
          </p>
        </div>

        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #059669;">Actie Vereist</h3>
          <p>📞 <strong>Bel klant binnen 24 uur:</strong> ${emailData.phone}</p>
          <p>📧 <strong>Email klant:</strong> ${emailData.email}</p>
          <p>🕒 <strong>Ingediend op:</strong> ${new Date(emailData.submittedAt).toLocaleString('nl-NL')}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          TBGS BV - Totaal Bouw Groep Specialisten | Auto-generated email
        </p>
      </div>
    `;

    // Prepare attachments if any
    const attachments = [];
    if (files && files.length > 0) {
      for (const file of files) {
        if (file.buffer && file.originalname) {
          attachments.push({
            filename: file.originalname,
            content: Buffer.from(file.buffer, 'base64')
          });
        }
      }
    }

    // Send notification email to admin
    await resend.emails.send({
      from: 'noreply@tbgs.nl',
      to: 'info@tbgs.nl',
      subject: subject,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined
    });

    // Send thank you email to customer
    const thankYouHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Bedankt voor uw aanvraag!</h2>
        
        <p>Beste ${emailData.firstName},</p>
        
        <p>We hebben uw aanvraag voor <strong>${emailData.selectedService}</strong> in goede orde ontvangen.</p>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1e40af;">Wat gebeurt er nu?</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>We nemen binnen 24 uur contact met u op</li>
            <li>We bespreken uw project en maken een afspraak</li>
            <li>U ontvangt een gratis offerte</li>
          </ul>
        </div>

        <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Spoed?</strong> Bel direct: <strong>040-2026744</strong></p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          Met 80+ jaar familietraditie uw partner voor kwaliteit bouwwerk.<br>
          TBGS BV | 040-2026744 | info@tbgs.nl
        </p>
      </div>
    `;

    await resend.emails.send({
      from: 'noreply@tbgs.nl',
      to: emailData.email,
      subject: 'Bedankt voor uw aanvraag - TBGS BV',
      html: thankYouHtml
    });

    console.log('✅ Emails sent successfully via Resend');
    res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
}