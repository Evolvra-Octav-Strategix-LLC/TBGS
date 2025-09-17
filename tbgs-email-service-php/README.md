# TBGS Email Service - PHP Enhanced v3.0

A reliable PHP-based email service for TBGS contact forms, designed to replace the Node.js version with better stability and easier deployment.

## 🚀 Features

- **🏗️ TBGS Branded**: Professional email templates with Dutch language support
- **📧 Dual Email System**: Admin notifications + client confirmations
- **📁 File Upload Support**: Handle images, PDFs, and documents up to 25MB
- **📱 WhatsApp Integration**: Direct links in emails for instant contact
- **🛡️ Security Enhanced**: Input validation, file type checking, CORS support
- **⚡ High Performance**: Optimized PHP with minimal dependencies
- **🐳 Docker Ready**: Complete containerization for easy deployment
- **💳 vCard Generation**: Automatic contact card creation for admin emails

## 📋 Quick Start

### 1. Environment Setup

Copy the environment template and configure your SMTP settings:

```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

### 2. Install Dependencies

```bash
composer install
```

### 3. Run Locally

```bash
# Development server
php -S localhost:8000

# Or using composer
composer run start
```

### 4. Docker Deployment

```bash
# Build image
docker build -t tbgs-email-service-php .

# Run container
docker run -d -p 80:80 --env-file .env tbgs-email-service-php
```

## 🔧 Configuration

### Required Environment Variables

- `SMTP_HOST`: SMTP server hostname (default: smtp.gmail.com)
- `SMTP_PORT`: SMTP port (587 for TLS, 465 for SSL)
- `SMTP_USER`: SMTP username (your email address)
- `SMTP_PASS`: SMTP password (use App Password for Gmail)

### Optional Environment Variables

- `CONTACT_RECEIVER`: Email to receive contact forms (default: info@tbgs.nl)
- `CORS_ORIGINS`: Allowed CORS origins, comma-separated (default: *)
- `APP_ENV`: Application environment (production/development)

### Gmail Setup

For Gmail SMTP:

1. Enable 2-factor authentication on your Google account
2. Generate an "App Password" specifically for this service
3. Use the App Password as `SMTP_PASS` (not your regular password)

## 📡 API Endpoints

### Status Page
```
GET /
```
Shows service status with TBGS branding

### Health Check
```
GET /api/health
```
Returns JSON health status and configuration info

### Contact Form Processing
```
POST /api/contact
```

**Request Body (JSON):**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+31612345678",
  "selectedService": "Daklekkage",
  "address": "Amsterdam, Netherlands",
  "projectDescription": "Ik heb een lekkage in mijn dak...",
  "contactPreference": "WhatsApp"
}
```

**File Uploads:**
Send as `multipart/form-data` with files in the `files[]` field.

**Response:**
```json
{
  "success": true,
  "message": "Contactaanvraag succesvol ontvangen",
  "data": {
    "submittedAt": "2025-01-15T10:30:00+00:00",
    "filesProcessed": 2,
    "emailsSent": {
      "admin": true,
      "client": true
    }
  }
}
```

## 🏭 Production Deployment

### Dokploy Deployment

1. Create new service in Dokploy
2. Set source to this repository
3. Configure environment variables in Dokploy UI
4. Deploy with Docker build

### Environment Variables in Dokploy

Add these in the Environment section:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-service@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER=info@tbgs.nl
CORS_ORIGINS=https://tbgs.nl
APP_ENV=production
```

### Health Monitoring

The service includes a health check endpoint for monitoring:

```bash
curl http://your-domain/api/health
```

## 📁 File Structure

```
tbgs-email-service-php/
├── index.php              # Main service file
├── composer.json          # PHP dependencies
├── Dockerfile             # Container configuration
├── .htaccess              # Apache URL routing
├── .env.example           # Environment template
├── README.md              # This file
├── templates/
│   ├── admin.php          # Admin email template
│   └── client.php         # Client confirmation template
├── uploads/               # Temporary file uploads
└── processed/             # Processed files (auto-created)
```

## 🔒 Security Features

- Input sanitization and validation
- File type and size restrictions
- CORS configuration
- HTML escaping in templates
- Secure SMTP connection (TLS/SSL)
- Environment-based configuration

## 🐛 Troubleshooting

### SMTP Connection Issues

1. **Gmail Authentication**: Ensure you're using an App Password, not your regular password
2. **Firewall**: Check that port 587 (TLS) or 465 (SSL) is allowed
3. **Credentials**: Verify SMTP_USER and SMTP_PASS are correctly set

### File Upload Problems

1. **Size Limits**: Default max file size is 25MB
2. **File Types**: Only images, PDFs, and documents are allowed
3. **Permissions**: Ensure uploads directory is writable (775)

### CORS Errors

Set `CORS_ORIGINS` to include your website domain:
```
CORS_ORIGINS=https://tbgs.nl,https://www.tbgs.nl
```

## 📧 Email Templates

The service includes professional TBGS-branded email templates:

### Admin Notification
- Complete customer information display
- WhatsApp quick-action buttons
- File attachment summaries
- Action items checklist
- vCard generation for contact management

### Client Confirmation
- Thank you message in Dutch
- Clear next steps timeline
- Emergency WhatsApp contact
- Service summary
- TBGS branding with logo

## 🚀 Performance

- **Lightweight**: Minimal PHP dependencies
- **Fast Startup**: No complex async initialization
- **Reliable**: Simple request/response model
- **Scalable**: Stateless design for horizontal scaling

## 📞 Support

For technical issues with the email service:
- Email: tech@tbgs.nl
- WhatsApp: +31 6 14595142

---

**TBGS B.V.** - Totaal Bouw Groep Specialisten  
© 2025 - Professional Email Service PHP Enhanced