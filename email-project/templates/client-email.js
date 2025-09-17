// HTML escape utility for security
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

module.exports = (data) => {
  // TBGS Logo - Using placeholder for better email delivery
  // TODO: Replace with your hosted logo URL for production use
  const tbgsLogoBase64 = "https://via.placeholder.com/150x80/2c3e50/ffffff?text=TBGS+B.V.";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Bedankt voor je aanvraag</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        
        <!-- TBGS Logo Header -->
        <div style="text-align: center; margin-bottom: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
          <img src="${tbgsLogoBase64}" alt="TBGS B.V. Logo" style="max-width: 150px; height: auto; margin-bottom: 10px;" />
          <div style="font-size: 18px; font-weight: bold; color: #2c3e50;">
            TBGS B.V.
          </div>
          <div style="font-size: 14px; color: #666;">
            Totaal Bouw Groep Specialisten
          </div>
        </div>

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
};