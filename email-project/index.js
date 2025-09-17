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
  max: 50, // Limit each IP to 50 requests per windowMs
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

// Load email templates and vCard utility
const adminEmailTemplate = require('./templates/admin-email');
const clientEmailTemplate = require('./templates/client-email');
const { createTBGSVCard } = require('./vcard');

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
    console.log('📋 Request body structure:', Object.keys(req.body));
    
    // Handle both direct form submission and webhook format from TBGS APIs
    let formData, attachmentFiles = [];
    
    if (req.body.emailData) {
      // Webhook format from TBGS APIs
      formData = req.body.emailData;
      attachmentFiles = req.body.files || [];
      console.log('📧 Processing webhook format from TBGS API');
    } else {
      // Direct form submission format
      formData = req.body;
      console.log('📧 Processing direct form submission');
    }
    
    const {
      firstName,
      lastName,
      email,
      phone,
      selectedService,
      address,
      projectDescription,
      contactPreference = 'Email'
    } = formData;

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
      submittedAt: formData.submittedAt || new Date(),
      formType: formData.formType || 'contact',
      // Include any additional fields from webhook
      ...formData
    };

    // Send notification email to admin
    try {
      const adminHtml = adminEmailTemplate(emailData);
      
      // Prepare email with attachments if files are present
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        subject: `Nieuwe aanvraag: ${selectedService} - ${firstName} ${lastName}`,
        html: adminHtml
      };

      // Prepare attachments array
      mailOptions.attachments = [];

      // Add file attachments if provided (from webhook)
      if (attachmentFiles && attachmentFiles.length > 0) {
        const fileAttachments = attachmentFiles.map(file => ({
          filename: file.originalname,
          content: Buffer.from(file.buffer, 'base64'),
          contentType: file.mimetype
        }));
        mailOptions.attachments.push(...fileAttachments);
        console.log(`📎 Adding ${attachmentFiles.length} file attachments to admin email`);
      }

      // Create and add TBGS vCard attachment
      try {
        const vcardBuffer = createTBGSVCard(emailData);
        
        // Create comprehensive filename with name, address and postcode
        let filenameParts = [];
        
        // Add name
        if (firstName || lastName) {
          filenameParts.push([firstName, lastName].filter(Boolean).join('_'));
        }
        
        // Add address info for easy identification
        if (emailData.street && emailData.houseNumber) {
          filenameParts.push(`${emailData.street}_${emailData.houseNumber}`.replace(/[^a-zA-Z0-9_]/g, '_'));
          if (emailData.postcode) {
            filenameParts.push(emailData.postcode.replace(/\s/g, ''));
          }
        } else if (address) {
          // Fallback: parse address string
          const addressParts = address.split(',')[0].trim();
          const cleanAddress = addressParts.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
          if (cleanAddress) {
            filenameParts.push(cleanAddress);
          }
          
          const postcodeMatch = address.match(/(\d{4}\s*[A-Za-z]{2})/);
          if (postcodeMatch) {
            filenameParts.push(postcodeMatch[1].replace(/\s/g, ''));
          }
        }
        
        const filename = filenameParts.length > 0 
          ? `${filenameParts.join('_').toLowerCase().replace(/[^a-z0-9_]/g, '')}_tbgs.vcf`
          : 'tbgs_contact.vcf';
        
        mailOptions.attachments.push({
          filename,
          contentType: 'text/vcard; charset=utf-8',
          content: vcardBuffer
        });
        
        console.log(`📇 TBGS vCard attachment created: ${filename}`);
      } catch (vcardError) {
        console.warn('vCard generation failed:', vcardError);
      }

      await transporter.sendMail(mailOptions);
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