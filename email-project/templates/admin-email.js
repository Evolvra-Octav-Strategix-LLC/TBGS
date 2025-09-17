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
  return `
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
};