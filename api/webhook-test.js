// Simple test endpoint to verify webhook connection
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const EMAIL_WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || 'https://tbgs-bv-website.replit.app/api/email-webhook';
  
  try {
    console.log(`Testing webhook connection to: ${EMAIL_WEBHOOK_URL}`);
    
    // Test the webhook endpoint with a simple health check
    const response = await fetch(`${EMAIL_WEBHOOK_URL.replace('/api/email-webhook', '/api/health')}`, {
      method: 'GET',
      timeout: 5000
    });

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({
        success: true,
        message: 'Webhook connection successful',
        webhookUrl: EMAIL_WEBHOOK_URL,
        health: result
      });
    } else {
      res.status(200).json({
        success: false,
        message: `Webhook server responded with ${response.status}`,
        webhookUrl: EMAIL_WEBHOOK_URL
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Failed to connect to webhook server',
      webhookUrl: EMAIL_WEBHOOK_URL,
      error: error.message
    });
  }
}