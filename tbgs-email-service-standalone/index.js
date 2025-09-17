const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const sharp = require('sharp');
const helmet = require('helmet');
const mimeTypes = require('mime-types');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs-extra');
const path = require('path');
const Joi = require('joi');
// Enhanced error handling for module loading and startup
try {
  require('dotenv').config();
} catch (dotenvError) {
  console.warn('⚠️  .env file not found, using environment variables only:', dotenvError.message);
}

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow for development
  crossOriginEmbedderPolicy: false
}));

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

// File upload rate limiting (more restrictive)
const fileUploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit to 10 file uploads per 15 minutes
  message: {
    success: false,
    message: 'Te veel bestand uploads. Probeer het over 15 minuten opnieuw.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Email validation utility
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// CORS configuration - production ready
const corsOptions = {
  origin: process.env.CORS_ORIGINS 
    ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
    : true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
const processedDir = path.join(__dirname, 'processed');
fs.ensureDirSync(uploadsDir);
fs.ensureDirSync(processedDir);

// Allowed file types
const ALLOWED_MIME_TYPES = [
  // Images
  'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp',
  // Videos
  'video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo', 'video/webm',
  // Audio
  'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/webm',
  // Documents
  'application/pdf', 'text/plain',
  'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB per file
const MAX_TOTAL_SIZE = 100 * 1024 * 1024; // 100MB total

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Sanitize filename
    const sanitized = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const unique = `${Date.now()}-${uuidv4().slice(0, 8)}-${sanitized}`;
    cb(null, unique);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 10 // Maximum 10 files
  },
  fileFilter: (req, file, cb) => {
    const mimeType = mimeTypes.lookup(file.originalname) || file.mimetype;
    
    if (ALLOWED_MIME_TYPES.includes(mimeType)) {
      cb(null, true);
    } else {
      const error = new Error(`Bestandstype ${mimeType} is niet toegestaan`);
      error.code = 'INVALID_FILE_TYPE';
      cb(error, false);
    }
  }
});

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

// Environment variable validation
const validateEnvironment = () => {
  const requiredEnvVars = {
    'SMTP_USER': process.env.SMTP_USER,
    'SMTP_PASS': process.env.SMTP_PASS
  };
  
  const optionalEnvVars = {
    'SMTP_HOST': process.env.SMTP_HOST || 'smtp.gmail.com',
    'SMTP_PORT': process.env.SMTP_PORT || '587',
    'CONTACT_RECEIVER': process.env.CONTACT_RECEIVER,
    'CORS_ORIGINS': process.env.CORS_ORIGINS
  };
  
  const missing = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key);
    
  return {
    valid: missing.length === 0,
    missing,
    required: requiredEnvVars,
    optional: optionalEnvVars,
    hasSmtpCredentials: !!(process.env.SMTP_USER && process.env.SMTP_PASS)
  };
};

// SMTP connection status tracking
let smtpConnectionStatus = {
  connected: false,
  error: null,
  lastChecked: null,
  configured: false
};

// Email transporter configuration with proper security
const smtpPort = Number(process.env.SMTP_PORT) || 587;
const envValidation = validateEnvironment();

let transporter = null;

if (envValidation.hasSmtpCredentials) {
  transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: smtpPort,
    secure: smtpPort === 465, // true for 465 (SMTPS), false for 587 (STARTTLS)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  smtpConnectionStatus.configured = true;
} else {
  console.log('⚠️  SMTP credentials not configured - email functionality will be disabled');
  smtpConnectionStatus.configured = false;
}

// Verify SMTP configuration at startup (non-fatal)
const verifySmtpConnection = async () => {
  if (!transporter) {
    smtpConnectionStatus = {
      connected: false,
      error: 'SMTP not configured - missing SMTP_USER or SMTP_PASS environment variables',
      lastChecked: new Date(),
      configured: false
    };
    console.log('⚠️  SMTP verification skipped - no credentials configured');
    return false;
  }
  
  try {
    await transporter.verify();
    smtpConnectionStatus = {
      connected: true,
      error: null,
      lastChecked: new Date(),
      configured: true
    };
    console.log('✅ SMTP connection verified successfully');
    console.log(`📧 Using ${process.env.SMTP_HOST || 'smtp.gmail.com'}:${smtpPort} (secure: ${smtpPort === 465})`);
    return true;
  } catch (error) {
    smtpConnectionStatus = {
      connected: false,
      error: error.message,
      lastChecked: new Date(),
      configured: true
    };
    console.warn('⚠️  SMTP verification failed:', error.message);
    console.warn('📧 Email functionality will be limited');
    console.warn('🔧 Check your SMTP environment variables:');
    console.warn('   - SMTP_USER:', process.env.SMTP_USER ? '✓ Set' : '✗ Missing');
    console.warn('   - SMTP_PASS:', process.env.SMTP_PASS ? '✓ Set' : '✗ Missing');
    console.warn('   - SMTP_HOST:', process.env.SMTP_HOST || 'smtp.gmail.com (default)');
    console.warn('   - SMTP_PORT:', process.env.SMTP_PORT || '587 (default)');
    return false;
  }
};

// Load email templates and vCard utility
const adminEmailTemplate = require('./templates/admin-email');
const clientEmailTemplate = require('./templates/client-email');
const { createTBGSVCard } = require('./vcard');

// File processing utilities
const processImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`📸 Image processed: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Image processing failed for ${inputPath}:`, error.message);
    // Return original path if processing fails
    return inputPath;
  }
};

const processVideo = async (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v libx264',
        '-crf 28',
        '-preset medium',
        '-c:a aac',
        '-b:a 128k',
        '-movflags faststart'
      ])
      .videoFilter('scale=min(1920\\,iw):min(1080\\,ih):force_original_aspect_ratio=decrease')
      .output(outputPath)
      .on('start', (commandLine) => {
        console.log(`🎥 Started video processing: ${path.basename(inputPath)}`);
      })
      .on('progress', (progress) => {
        if (progress.percent) {
          console.log(`🎬 Processing progress: ${Math.round(progress.percent)}%`);
        }
      })
      .on('end', () => {
        console.log(`✅ Video processed successfully: ${path.basename(outputPath)}`);
        resolve(outputPath);
      })
      .on('error', (error) => {
        console.error(`❌ Video processing failed for ${inputPath}:`, error.message);
        // Return original path if processing fails
        resolve(inputPath);
      })
      .run();
  });
};

const processAudio = async (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-c:a aac',
        '-b:a 128k',
        '-ac 2'
      ])
      .output(outputPath)
      .on('start', () => {
        console.log(`🎵 Started audio processing: ${path.basename(inputPath)}`);
      })
      .on('end', () => {
        console.log(`✅ Audio processed successfully: ${path.basename(outputPath)}`);
        resolve(outputPath);
      })
      .on('error', (error) => {
        console.error(`❌ Audio processing failed for ${inputPath}:`, error.message);
        // Return original path if processing fails
        resolve(inputPath);
      })
      .run();
  });
};

// Process uploaded files with ffmpeg
const processUploadedFiles = async (files) => {
  const processedFiles = [];
  
  for (const file of files) {
    try {
      const ext = path.extname(file.originalname).toLowerCase();
      const baseName = path.basename(file.filename, path.extname(file.filename));
      let processedPath = file.path;
      
      // Determine processing based on MIME type
      if (file.mimetype.startsWith('image/')) {
        const outputPath = path.join(processedDir, `${baseName}.webp`);
        processedPath = await processImage(file.path, outputPath);
      } else if (file.mimetype.startsWith('video/')) {
        const outputPath = path.join(processedDir, `${baseName}.mp4`);
        processedPath = await processVideo(file.path, outputPath);
      } else if (file.mimetype.startsWith('audio/')) {
        const outputPath = path.join(processedDir, `${baseName}.aac`);
        processedPath = await processAudio(file.path, outputPath);
      }
      
      // Get file stats for the processed file
      const stats = await fs.stat(processedPath);
      
      processedFiles.push({
        originalname: file.originalname,
        filename: path.basename(processedPath),
        path: processedPath,
        mimetype: mimeTypes.lookup(processedPath) || file.mimetype,
        size: stats.size,
        processed: processedPath !== file.path
      });
      
    } catch (error) {
      console.error(`❌ Failed to process file ${file.originalname}:`, error.message);
      // Include original file if processing fails
      processedFiles.push({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size,
        processed: false,
        error: error.message
      });
    }
  }
  
  return processedFiles;
};

// Validation schema
const contactSchema = Joi.object({
  firstName: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).required(),
  selectedService: Joi.string().min(1).max(200).required(),
  address: Joi.string().max(500).optional(),
  projectDescription: Joi.string().max(2000).optional(),
  contactPreference: Joi.string().valid('Email', 'Phone', 'WhatsApp').default('Email')
});

// Index route - shows service is working in browser
app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>TBGS Email Service - Active</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          text-align: center;
          max-width: 600px;
          padding: 40px 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .logo {
          font-size: 48px;
          margin-bottom: 20px;
        }
        .title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #fff;
        }
        .subtitle {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        .status {
          background: #27ae60;
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          display: inline-block;
          margin: 20px 0;
          font-size: 16px;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 30px;
        }
        .feature {
          background: rgba(255,255,255,0.1);
          padding: 15px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .feature-icon {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .endpoint {
          background: rgba(52, 73, 94, 0.8);
          padding: 15px;
          border-radius: 10px;
          margin-top: 30px;
          font-family: 'Courier New', monospace;
        }
        .endpoint-title {
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 18px;
        }
        .endpoint-url {
          color: #3498db;
          font-size: 14px;
          margin: 5px 0;
        }
        .timestamp {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">🏗️</div>
        <div class="title">TBGS Email Service</div>
        <div class="subtitle">Enhanced Email Processing Service</div>
        
        <div class="status" id="service-status">
          ${envValidation.hasSmtpCredentials && smtpConnectionStatus.connected ? '✅ Service Active & Ready' : '⚠️ Service Active (Limited Functionality)'}
        </div>
        
        <div class="features">
          <div class="feature">
            <div class="feature-icon">📧</div>
            <div>Email Processing</div>
          </div>
          <div class="feature">
            <div class="feature-icon">📁</div>
            <div>File Upload Support</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🎬</div>
            <div>FFmpeg Processing</div>
          </div>
          <div class="feature">
            <div class="feature-icon">🛡️</div>
            <div>Security Enhanced</div>
          </div>
        </div>
        
        <div class="endpoint">
          <div class="endpoint-title">Available Endpoints:</div>
          <div class="endpoint-url">GET /api/health - Health Check</div>
          <div class="endpoint-url">POST /api/contact - Contact Form Processing</div>
        </div>
        
        ${envValidation.valid ? '' : `
        <div style="background: rgba(231, 76, 60, 0.2); border: 1px solid rgba(231, 76, 60, 0.5); padding: 15px; border-radius: 10px; margin: 20px 0;">
          <div style="font-weight: 600; margin-bottom: 10px; color: #e74c3c;">⚠️ Configuration Issues</div>
          <div style="font-size: 14px; line-height: 1.5;">
            ${envValidation.missing.length > 0 ? `Missing required environment variables:<br>• ${envValidation.missing.join('<br>• ')}` : ''}
            ${!envValidation.hasSmtpCredentials ? '<br>• Email functionality is disabled' : ''}
          </div>
        </div>`}
        
        ${!smtpConnectionStatus.configured ? `
        <div style="background: rgba(243, 156, 18, 0.2); border: 1px solid rgba(243, 156, 18, 0.5); padding: 15px; border-radius: 10px; margin: 20px 0;">
          <div style="font-weight: 600; margin-bottom: 10px; color: #f39c12;">📧 Email Status</div>
          <div style="font-size: 14px;">SMTP not configured - contact forms will be received but emails won't be sent</div>
        </div>` : smtpConnectionStatus.connected ? '' : `
        <div style="background: rgba(231, 76, 60, 0.2); border: 1px solid rgba(231, 76, 60, 0.5); padding: 15px; border-radius: 10px; margin: 20px 0;">
          <div style="font-weight: 600; margin-bottom: 10px; color: #e74c3c;">📧 SMTP Error</div>
          <div style="font-size: 14px;">${smtpConnectionStatus.error || 'SMTP connection failed'}</div>
        </div>`}
        
        <div class="timestamp">
          Service Version: 2.0.0 | ${new Date().toISOString()}
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

// Health check endpoint with environment and SMTP status
app.get('/api/health', (req, res) => {
  const envValidation = validateEnvironment();
  const healthStatus = {
    status: 'healthy',
    service: 'TBGS Email Service Enhanced',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    features: ['multipart-upload', 'ffmpeg-processing', 'image-optimization', 'security-enhanced'],
    configuration: {
      environment: {
        valid: envValidation.valid,
        missingRequired: envValidation.missing,
        smtpConfigured: envValidation.hasSmtpCredentials
      },
      smtp: {
        configured: smtpConnectionStatus.configured,
        connected: smtpConnectionStatus.connected,
        lastChecked: smtpConnectionStatus.lastChecked,
        error: smtpConnectionStatus.error
      },
      directories: {
        uploads: fs.existsSync(uploadsDir),
        processed: fs.existsSync(processedDir)
      }
    },
    warnings: []
  };
  
  // Add warnings for missing configuration
  if (!envValidation.valid) {
    healthStatus.warnings.push(`Missing required environment variables: ${envValidation.missing.join(', ')}`);
  }
  
  if (!smtpConnectionStatus.configured) {
    healthStatus.warnings.push('SMTP not configured - email functionality disabled');
  } else if (!smtpConnectionStatus.connected) {
    healthStatus.warnings.push('SMTP configured but connection failed - check credentials');
  }
  
  // Set overall status based on critical issues
  if (!envValidation.hasSmtpCredentials) {
    healthStatus.status = 'degraded';
  }
  
  res.json(healthStatus);
});

// Enhanced contact form endpoint with multipart support
app.post('/api/contact', fileUploadLimiter, upload.array('files', 10), async (req, res) => {
  try {
    console.log('📧 Contact form submission received');
    console.log('📋 Request body keys:', Object.keys(req.body));
    console.log('📎 Files uploaded:', req.files?.length || 0);
    
    // Handle both direct form submission and webhook format from TBGS APIs
    let formData, attachmentFiles = [];
    
    if (req.body.emailData) {
      // Webhook format from TBGS APIs (backward compatibility)
      formData = typeof req.body.emailData === 'string' 
        ? JSON.parse(req.body.emailData) 
        : req.body.emailData;
      
      // Handle base64 files from webhook
      if (req.body.files) {
        const webhookFiles = typeof req.body.files === 'string' 
          ? JSON.parse(req.body.files) 
          : req.body.files;
          
        attachmentFiles = webhookFiles.map(file => ({
          originalname: file.originalname,
          buffer: Buffer.from(file.buffer, 'base64'),
          mimetype: file.mimetype,
          size: Buffer.byteLength(file.buffer, 'base64')
        }));
      }
      
      console.log('📧 Processing webhook format from TBGS API');
    } else {
      // Direct form submission format
      formData = req.body;
      console.log('📧 Processing direct form submission with multipart files');
    }
    
    // Validate form data
    const { error, value } = contactSchema.validate(formData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: `Validation error: ${error.details[0].message}`
      });
    }
    
    const validatedData = value;
    
    // Validate email format (additional check)
    if (!isValidEmail(validatedData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }
    
    // Process uploaded files if any
    let processedFiles = [];
    if (req.files && req.files.length > 0) {
      console.log(`🔄 Processing ${req.files.length} uploaded files...`);
      processedFiles = await processUploadedFiles(req.files);
    }
    
    const emailData = {
      ...validatedData,
      address: validatedData.address || 'Niet opgegeven',
      projectDescription: validatedData.projectDescription || 'Geen beschrijving opgegeven',
      submittedAt: new Date(),
      formType: req.body.formType || 'contact-multipart',
      filesProcessed: processedFiles.length,
      totalFileSize: processedFiles.reduce((sum, file) => sum + file.size, 0)
    };

    // Check if SMTP is configured before attempting to send emails
    if (!transporter || !smtpConnectionStatus.configured) {
      console.warn('⚠️  SMTP not configured - emails will not be sent');
      console.warn('📧 Contact form data received but not emailed:');
      console.warn(`   Name: ${validatedData.firstName} ${validatedData.lastName}`);
      console.warn(`   Email: ${validatedData.email}`);
      console.warn(`   Service: ${validatedData.selectedService}`);
      console.warn('🔧 Configure SMTP_USER and SMTP_PASS environment variables to enable email functionality');
      
      // Still return success to user but note emails weren't sent
      res.status(200).json({
        success: true,
        message: 'Uw aanvraag is ontvangen! Let op: email functionaliteit is momenteel niet beschikbaar.',
        filesProcessed: processedFiles.length,
        totalSize: emailData.totalFileSize,
        warning: 'Email not sent - SMTP not configured'
      });
      return;
    }

    // Send notification email to admin
    try {
      const adminHtml = adminEmailTemplate(emailData);
      
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        subject: `Nieuwe aanvraag: ${validatedData.selectedService} - ${validatedData.firstName} ${validatedData.lastName}`,
        html: adminHtml,
        attachments: []
      };

      // Add processed file attachments
      if (processedFiles.length > 0) {
        for (const file of processedFiles) {
          try {
            const fileBuffer = await fs.readFile(file.path);
            mailOptions.attachments.push({
              filename: file.originalname + (file.processed ? ' (optimized)' : ''),
              content: fileBuffer,
              contentType: file.mimetype
            });
          } catch (fileError) {
            console.warn(`⚠️  Failed to attach file ${file.originalname}:`, fileError.message);
          }
        }
        console.log(`📎 Added ${mailOptions.attachments.length} file attachments to admin email`);
      }
      
      // Add webhook files (backward compatibility)
      if (attachmentFiles.length > 0) {
        const webhookAttachments = attachmentFiles.map(file => ({
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype
        }));
        mailOptions.attachments.push(...webhookAttachments);
        console.log(`📎 Added ${webhookAttachments.length} webhook file attachments to admin email`);
      }

      // Create and add TBGS vCard attachment
      try {
        const vcardBuffer = createTBGSVCard(emailData);
        
        let filenameParts = [];
        if (validatedData.firstName || validatedData.lastName) {
          filenameParts.push([validatedData.firstName, validatedData.lastName].filter(Boolean).join('_'));
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
        console.warn('⚠️  vCard generation failed:', vcardError.message);
      }

      await transporter.sendMail(mailOptions);
      console.log('✅ Admin notification email sent with attachments');
    } catch (adminEmailError) {
      console.error('❌ Failed to send admin email:', adminEmailError.message);
    }

    // Send thank you email to client
    try {
      const clientHtml = clientEmailTemplate(emailData);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: validatedData.email,
        subject: `Bedankt ${validatedData.firstName}! Je aanvraag is ontvangen - TBGS B.V.`,
        html: clientHtml
      });
      console.log('✅ Client thank you email sent');
    } catch (clientEmailError) {
      console.error('❌ Failed to send client email:', clientEmailError.message);
    }

    // Cleanup uploaded files after sending emails
    const cleanupFiles = [...(req.files || []), ...processedFiles];
    for (const file of cleanupFiles) {
      try {
        await fs.unlink(file.path);
      } catch (cleanupError) {
        console.warn(`⚠️  Failed to cleanup file ${file.path}:`, cleanupError.message);
      }
    }
    
    console.log(`🗑️  Cleaned up ${cleanupFiles.length} temporary files`);

    res.status(200).json({
      success: true,
      message: 'Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op.',
      filesProcessed: processedFiles.length,
      totalSize: emailData.totalFileSize
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Cleanup uploaded files on error
    if (req.files) {
      for (const file of req.files) {
        try {
          await fs.unlink(file.path);
        } catch (cleanupError) {
          // Ignore cleanup errors
        }
      }
    }
    
    res.status(500).json({
      success: false,
      message: 'Er is een fout opgetreden. Probeer het later opnieuw.'
    });
  }
});

// Legacy contact endpoint (JSON only, for backward compatibility)
app.post('/api/contact-legacy', contactFormLimiter, async (req, res) => {
  try {
    console.log('📧 Legacy contact form submission received');
    
    // This endpoint maintains exact compatibility with the original email-project
    const formData = req.body.emailData || req.body;
    const attachmentFiles = req.body.files || [];
    
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
      formType: formData.formType || 'contact-legacy',
      ...formData
    };

    // Check if SMTP is configured before attempting to send emails  
    if (!transporter || !smtpConnectionStatus.configured) {
      console.warn('⚠️  SMTP not configured - legacy contact form emails will not be sent');
      console.warn('📧 Legacy contact form data received but not emailed:');
      console.warn(`   Name: ${firstName} ${lastName}`);
      console.warn(`   Email: ${email}`);
      console.warn(`   Service: ${selectedService}`);
      console.warn('🔧 Configure SMTP_USER and SMTP_PASS environment variables to enable email functionality');
      
      res.status(200).json({
        success: true,
        message: 'Uw aanvraag is ontvangen! Let op: email functionaliteit is momenteel niet beschikbaar.',
        warning: 'Email not sent - SMTP not configured'
      });
      return;
    }

    // Send admin email
    try {
      const adminHtml = adminEmailTemplate(emailData);
      
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
        subject: `Nieuwe aanvraag: ${selectedService} - ${firstName} ${lastName}`,
        html: adminHtml,
        attachments: []
      };

      // Add base64 file attachments if provided
      if (attachmentFiles && attachmentFiles.length > 0) {
        const fileAttachments = attachmentFiles.map(file => ({
          filename: file.originalname,
          content: Buffer.from(file.buffer, 'base64'),
          contentType: file.mimetype
        }));
        mailOptions.attachments.push(...fileAttachments);
        console.log(`📎 Added ${fileAttachments.length} base64 file attachments to admin email`);
      }

      // Add vCard
      try {
        const vcardBuffer = createTBGSVCard(emailData);
        const filename = `${firstName}_${lastName}_tbgs.vcf`.toLowerCase().replace(/[^a-z0-9_.]/g, '');
        
        mailOptions.attachments.push({
          filename,
          contentType: 'text/vcard; charset=utf-8',
          content: vcardBuffer
        });
      } catch (vcardError) {
        console.warn('vCard generation failed:', vcardError);
      }

      await transporter.sendMail(mailOptions);
      console.log('✅ Admin notification email sent');
    } catch (adminEmailError) {
      console.error('❌ Failed to send admin email:', adminEmailError);
    }

    // Send client email
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
    console.error('❌ Legacy contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Er is een fout opgetreden. Probeer het later opnieuw.'
    });
  }
});

// Start server with comprehensive error handling
const startServer = async () => {
  try {
    console.log('\n🚀 Starting TBGS Enhanced Email Service...');
    console.log('=' .repeat(60));
    
    // Validate environment configuration at startup
    // Re-validate environment in case variables changed
    const currentEnvValidation = validateEnvironment();
    console.log('\n🔧 Environment Configuration:');
    console.log('=' .repeat(30));
    
    // Show required environment variables status
    console.log('🔑 Required Variables:');
    Object.entries(currentEnvValidation.required).forEach(([key, value]) => {
      const status = value ? '✅' : '❌';
      const display = value ? (key.includes('PASS') ? '✓ Set (hidden)' : `✓ ${value}`) : '✗ Not set';
      console.log(`   ${status} ${key}: ${display}`);
    });
    
    // Show optional environment variables status
    console.log('\n🔍 Optional Variables:');
    Object.entries(currentEnvValidation.optional).forEach(([key, value]) => {
      const status = value ? '✅' : '⚠️ ';
      const display = value || 'Using default/not set';
      console.log(`   ${status} ${key}: ${display}`);
    });
    
    // Environment validation summary
    if (currentEnvValidation.valid) {
      console.log('\n✅ Environment validation: PASSED');
    } else {
      console.log('\n⚠️  Environment validation: PARTIAL');
      console.log(`❌ Missing required variables: ${currentEnvValidation.missing.join(', ')}`);
      console.log('📧 Email functionality will be disabled');
    }
    
    console.log('\n📧 SMTP Configuration Check:');
    console.log('=' .repeat(30));
    
    // Verify SMTP connection (non-fatal)
    await verifySmtpConnection();
    
    console.log('\n🔩 System Dependencies:');
    console.log('=' .repeat(30));
    
    // Check ffmpeg availability
    try {
      ffmpeg.setFfmpegPath(process.env.FFMPEG_PATH || 'ffmpeg');
      console.log('✅ FFmpeg: Available for video/audio processing');
    } catch (ffmpegError) {
      console.log('⚠️  FFmpeg: Not available - video/audio processing will be limited');
      console.log(`    Reason: ${ffmpegError.message}`);
    }
    
    // Check Sharp (image processing)
    try {
      const sharp = require('sharp');
      console.log('✅ Sharp: Available for image processing');
    } catch (sharpError) {
      console.log('❌ Sharp: Not available - image processing will fail');
    }
    
    // Directory setup
    console.log('\n📁 Directory Setup:');
    console.log('=' .repeat(20));
    console.log(`✅ Upload directory: ${uploadsDir}`);
    console.log(`✅ Processing directory: ${processedDir}`);
    
    // Start the server
    app.listen(PORT, '0.0.0.0', () => {
      console.log('\n\n🎉 SERVER STARTED SUCCESSFULLY!');
      console.log('=' .repeat(60));
      console.log(`🎯 Service: TBGS Enhanced Email Service v2.0.0`);
      console.log(`🔌 Port: ${PORT}`);
      console.log(`🌐 Access: http://localhost:${PORT}`);
      console.log(`📬 Contact receiver: ${process.env.CONTACT_RECEIVER || process.env.SMTP_USER || 'Not configured'}`);
      console.log(`🔒 CORS origins: ${process.env.CORS_ORIGINS || 'All origins allowed (development)'}`);
      
      console.log('\n✨ Available Features:');
      console.log('   ✅ Multipart file upload support');
      console.log('   ✅ Image optimization (WebP conversion)');
      console.log('   ✅ Video/audio processing with FFmpeg');
      console.log('   ✅ Enhanced security with rate limiting');
      console.log('   ✅ Health check endpoint (/api/health)');
      console.log(`   ${currentEnvValidation.hasSmtpCredentials && smtpConnectionStatus.connected ? '✅' : '⚠️ '} Email functionality`);
      
      console.log('\n🔗 Endpoints:');
      console.log(`   GET  /           - Service status page`);
      console.log(`   GET  /api/health - Health check with detailed status`);
      console.log(`   POST /api/contact - Enhanced contact form (multipart)`);
      console.log(`   POST /api/contact-legacy - Legacy contact form (JSON)`);
      
      if (!currentEnvValidation.hasSmtpCredentials) {
        console.log('\n⚠️  IMPORTANT NOTICE:');
        console.log('   Email functionality is DISABLED');
        console.log('   Contact forms will be received but emails won\'t be sent');
        console.log('   To enable email functionality, set these environment variables:');
        console.log('   - SMTP_USER (required)');
        console.log('   - SMTP_PASS (required)');
        console.log('   - SMTP_HOST (optional, defaults to smtp.gmail.com)');
        console.log('   - SMTP_PORT (optional, defaults to 587)');
        console.log('   - CONTACT_RECEIVER (optional, defaults to SMTP_USER)');
      } else if (!smtpConnectionStatus.connected) {
        console.log('\n⚠️  EMAIL WARNING:');
        console.log('   SMTP credentials are set but connection failed');
        console.log(`   Error: ${smtpConnectionStatus.error}`);
        console.log('   Please verify your SMTP credentials and network connectivity');
      }
      
      console.log('\n🔄 Service is ready and accepting requests!');
      console.log('=' .repeat(60));
    });
  } catch (error) {
    console.error('\n❌ CRITICAL ERROR: Failed to start server');
    console.error('=' .repeat(40));
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
    console.error('\n🔧 Please check your configuration and try again');
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  
  // Cleanup upload and processed directories
  try {
    await fs.emptyDir(uploadsDir);
    await fs.emptyDir(processedDir);
    console.log('🗑️  Cleaned up temporary directories');
  } catch (error) {
    console.warn('⚠️  Failed to cleanup directories:', error.message);
  }
  
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  
  // Cleanup upload and processed directories
  try {
    await fs.emptyDir(uploadsDir);
    await fs.emptyDir(processedDir);
    console.log('🗑️  Cleaned up temporary directories');
  } catch (error) {
    console.warn('⚠️  Failed to cleanup directories:', error.message);
  }
  
  process.exit(0);
});

// Initialize server with top-level error handling
(async () => {
  try {
    console.log('🔄 Initializing TBGS Email Service...');
    console.log(`📝 Node version: ${process.version}`);
    console.log(`📁 Working directory: ${process.cwd()}`);
    console.log(`📋 Environment: ${process.env.NODE_ENV || 'development'}`);
    
    await startServer();
  } catch (initError) {
    console.error('❌ FATAL: Failed to initialize service');
    console.error('Error:', initError.message);
    console.error('Stack:', initError.stack);
    console.error('\n🔧 Please check your configuration and dependencies');
    process.exit(1);
  }
})();

module.exports = app;