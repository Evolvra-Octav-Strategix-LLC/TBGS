const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting for contact form
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Te veel aanvragen. Probeer het over 15 minuten opnieuw.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Email validation utility
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// CORS configuration - use allowlist if specified
const corsOptions = process.env.CORS_ORIGINS 
  ? { origin: process.env.CORS_ORIGINS.split(',').map(origin => origin.trim()) }
  : {}; // Allow all origins in development

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

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

// Email transporter configuration with proper security
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure: smtpPort === 465, // true for 465 (SMTPS), false for 587 (STARTTLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify SMTP configuration at startup
const verifySmtpConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');
    console.log(`📧 Using ${process.env.SMTP_HOST || 'smtp.gmail.com'}:${smtpPort} (secure: ${smtpPort === 465})`);
  } catch (error) {
    console.error('❌ SMTP verification failed:', error.message);
    console.error('🔧 Check your SMTP environment variables');
    process.exit(1);
  }
};

// Load email templates
const adminEmailTemplate = require('./templates/admin-email');
const clientEmailTemplate = require('./templates/client-email');

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'TBGS Email Service',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint with rate limiting
app.post('/api/contact', contactFormLimiter, async (req, res) => {
  try {
    console.log('📧 Contact form submission received');
    
    const {
      firstName,
      lastName,
      email,
      phone,
      selectedService,
      address,
      projectDescription,
      contactPreference = 'Email'
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !selectedService) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    const emailData = {
      firstName,
      lastName,
      email,
      phone,
      selectedService,
      address: address || 'Niet opgegeven',
      projectDescription: projectDescription || 'Geen beschrijving opgegeven',
      contactPreference,
      submittedAt: new Date()
    };

    // Send notification email to admin
    try {
      const adminHtml = adminEmailTemplate(emailData);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        subject: `Nieuwe aanvraag: ${selectedService} - ${firstName} ${lastName}`,
        html: adminHtml
      });
      console.log('✅ Admin notification email sent');
    } catch (adminEmailError) {
      console.error('❌ Failed to send admin email:', adminEmailError);
    }

    // Send thank you email to client
    try {
      const clientHtml = clientEmailTemplate(emailData);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: `Bedankt ${firstName}! Je aanvraag is ontvangen - TBGS B.V.`,
        html: clientHtml
      });
      console.log('✅ Client thank you email sent');
    } catch (clientEmailError) {
      console.error('❌ Failed to send client email:', clientEmailError);
    }

    res.status(200).json({
      success: true,
      message: 'Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op.'
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Er is een fout opgetreden. Probeer het later opnieuw.'
    });
  }
});

// Start server
const startServer = async () => {
  try {
    // Verify SMTP connection before starting the server
    await verifySmtpConnection();
    
    app.listen(PORT, () => {
      console.log(`🚀 TBGS Email Service running on port ${PORT}`);
      console.log(`📬 Contact receiver: ${process.env.CONTACT_RECEIVER || process.env.SMTP_USER}`);
      console.log(`🔒 CORS origins: ${process.env.CORS_ORIGINS || 'all origins allowed'}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;