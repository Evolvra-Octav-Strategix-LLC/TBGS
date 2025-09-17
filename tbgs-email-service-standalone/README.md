# TBGS Email Service Enhanced - Standalone

A comprehensive standalone email service with advanced file processing capabilities, built for TBGS B.V. (Totaal Bouw Groep Specialisten).

## 🚀 Features

### Core Email Service
- **Multi-format contact forms**: Supports both JSON and multipart form submissions
- **Professional email templates**: TBGS-branded admin notifications and client thank-you emails
- **vCard generation**: Automatic contact card creation with detailed customer information
- **Rate limiting**: Protection against spam with 50 requests/15 minutes
- **CORS security**: Production-ready cross-origin resource sharing configuration

### Advanced File Processing
- **Multipart uploads**: Support for up to 10 files per submission (25MB each, 100MB total)
- **FFmpeg integration**: Automatic video/audio compression and optimization
  - Video: H.264/AAC encoding, CRF 28, max 1080p resolution
  - Audio: AAC encoding, 128kbps, stereo
- **Image optimization**: WebP conversion with 85% quality, max 1920x1080
- **Smart file handling**: Maintains original files as fallback if processing fails

### Production Ready
- **Docker deployment**: Optimized multi-stage build with Alpine Linux
- **Security hardened**: Non-root user, Helmet.js security headers, file validation
- **Health monitoring**: Built-in health checks and comprehensive logging
- **Graceful shutdown**: Proper cleanup of temporary files and processes

## 📋 Requirements

- Node.js 18+ (for local development)
- Docker (for containerized deployment)
- SMTP credentials (Gmail, SendGrid, or other email provider)
- FFmpeg (included in Docker image)

## 🛠️ Installation & Setup

### Local Development

1. **Clone and setup**
   ```bash
   cd tbgs-email-service-standalone
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. **Environment Variables**
   ```env
   PORT=3000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_RECEIVER=admin@tbgs.nl
   CORS_ORIGINS=https://tbgs.nl,https://api.evolvra.ai
   FFMPEG_PATH=/usr/local/bin/ffmpeg
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Docker Deployment

1. **Build the image**
   ```bash
   docker build -t tbgs-email-service:latest .
   ```

2. **Run with Docker**
   ```bash
   docker run -d \
     --name tbgs-email-service \
     -p 3000:3000 \
     --env-file .env \
     --restart unless-stopped \
     tbgs-email-service:latest
   ```

3. **Docker Compose (recommended)**
   ```yaml
   version: '3.8'
   services:
     email-service:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env
       restart: unless-stopped
       volumes:
         - /dev/null:/app/uploads  # Temporary files cleanup
         - /dev/null:/app/processed
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
         interval: 30s
         timeout: 10s
         retries: 3
         start_period: 40s
   ```

### Dokploy Deployment

1. **Create new application in Dokploy**
   - Application type: Docker
   - Repository: Your git repository
   - Dockerfile path: `./Dockerfile`

2. **Configure environment variables in Dokploy**
   ```env
   PORT=3000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_RECEIVER=admin@tbgs.nl
   CORS_ORIGINS=https://tbgs.nl,https://api.evolvra.ai
   FFMPEG_PATH=/usr/bin/ffmpeg
   ```

3. **Deploy**
   - Port mapping: `3000:3000`
   - Health check: `/api/health`
   - Deploy and monitor logs

## 📡 API Endpoints

### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "status": "healthy",
  "service": "TBGS Email Service Enhanced",
  "version": "2.0.0",
  "timestamp": "2025-01-17T19:30:45.123Z",
  "features": ["multipart-upload", "ffmpeg-processing", "image-optimization", "security-enhanced"]
}
```

### Contact Form (Enhanced - Multipart)
```http
POST /api/contact
Content-Type: multipart/form-data
```

**Form Fields:**
- `firstName` (required): Customer's first name
- `lastName` (required): Customer's last name  
- `email` (required): Customer's email address
- `phone` (required): Customer's phone number
- `selectedService` (required): Service being requested
- `address` (optional): Customer's address
- `projectDescription` (optional): Project details
- `contactPreference` (optional): Email, Phone, or WhatsApp
- `files` (optional): Up to 10 files, 25MB each

**Response:**
```json
{
  "success": true,
  "message": "Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op.",
  "filesProcessed": 3,
  "totalSize": 15728640
}
```

### Contact Form (Legacy - JSON)
```http
POST /api/contact-legacy
Content-Type: application/json
```

**Body (backward compatible):**
```json
{
  "emailData": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+31612345678",
    "selectedService": "Dakwerk",
    "address": "Hurkssestraat 64, 5652 AH Eindhoven",
    "projectDescription": "Lekkage reparatie nodig",
    "contactPreference": "WhatsApp"
  },
  "files": [
    {
      "originalname": "damage.jpg",
      "buffer": "base64-encoded-file-content",
      "mimetype": "image/jpeg"
    }
  ]
}
```

## 🎯 File Processing

### Supported File Types
- **Images**: JPEG, PNG, WebP, GIF, BMP
- **Videos**: MP4, AVI, MOV, WebM, MPEG
- **Audio**: MP3, WAV, AAC, OGG, WebM
- **Documents**: PDF, TXT, DOC, DOCX

### Processing Pipeline
1. **File Upload**: Secure multipart upload with validation
2. **Processing**:
   - Images → WebP conversion (85% quality, max 1920x1080)
   - Videos → H.264/AAC (CRF 28, max 1080p, faststart)
   - Audio → AAC (128kbps, stereo)
3. **Email Attachment**: Processed files attached to admin notification
4. **Cleanup**: Temporary files removed after processing

### File Size Limits
- **Per file**: 25MB maximum
- **Total upload**: 100MB maximum
- **File count**: 10 files maximum

## 📧 Email Templates

### Admin Notification
- Professional HTML template with TBGS branding
- Customer contact information with direct links (tel:, mailto:, maps)
- WhatsApp integration for quick customer contact
- File processing status and attachment summary
- Action items checklist for follow-up

### Client Thank You
- Modern responsive design with TBGS branding
- Process timeline showing next steps
- Emergency contact information with WhatsApp link
- File processing confirmation
- Social media and additional resources

### vCard Generation
- Automatic contact card creation for every submission
- Address parsing for Dutch and Belgian formats
- TBGS corporate information included
- Enhanced with regional mapping and customer notes

## 🔒 Security Features

### File Security
- MIME type validation and allowlist
- Filename sanitization
- Size limits enforcement
- Virus scanning ready (extend with ClamAV if needed)

### API Security
- Rate limiting (50 requests/15 minutes for contact, 10 for file uploads)
- CORS protection with domain allowlist
- Helmet.js security headers
- Input validation with Joi schemas
- HTML escaping for email content

### Container Security
- Non-root user execution
- Minimal Alpine Linux base image
- Health checks for monitoring
- Proper signal handling with tini

## 🧪 Testing

### Run API Tests
```bash
npm test
```

### Manual Testing
```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test contact form (JSON)
curl -X POST http://localhost:3000/api/contact-legacy \
  -H "Content-Type: application/json" \
  -d @test-data.json

# Test file upload
curl -X POST http://localhost:3000/api/contact \
  -F "firstName=John" \
  -F "lastName=Doe" \
  -F "email=john@example.com" \
  -F "phone=+31612345678" \
  -F "selectedService=Dakwerk" \
  -F "files=@test-image.jpg"
```

## 📊 Monitoring & Logs

### Health Monitoring
- Health check endpoint: `/api/health`
- Docker health checks every 30 seconds
- FFmpeg availability verification

### Logging
- Structured console logging
- Request/response logging
- File processing status
- Error tracking with context
- Performance metrics

### Log Levels
- ✅ Success operations (green checkmarks)
- ⚠️ Warnings (yellow warning signs)  
- ❌ Errors (red X marks)
- ℹ️ Info messages (blue info icons)
- 🔄 Processing status (arrows)

## 🚀 Performance Optimizations

### File Processing
- Parallel processing for multiple files
- Progressive compression with quality fallbacks
- Memory-efficient streaming
- Automatic cleanup of temporary files

### Email Delivery
- Connection pooling for SMTP
- Async processing with error handling
- Optimized HTML templates for email clients
- Base64 image embedding for better compatibility

### Container Optimization
- Multi-stage Docker builds
- Minimal dependencies
- Layer caching optimization
- Health check performance tuning

## 🔧 Troubleshooting

### Common Issues

**FFmpeg not found**
```bash
# Check if ffmpeg is available
docker exec -it tbgs-email-service ffmpeg -version

# If missing, rebuild the Docker image
docker build --no-cache -t tbgs-email-service:latest .
```

**Email not sending**
```bash
# Check SMTP configuration
docker logs tbgs-email-service | grep SMTP

# Verify environment variables
docker exec -it tbgs-email-service env | grep SMTP
```

**File processing fails**
```bash
# Check disk space
df -h

# Monitor processing logs
docker logs -f tbgs-email-service | grep Processing
```

### Debug Mode
```bash
# Enable debug logging
export DEBUG=tbgs:*
npm start
```

## 📈 Deployment Strategies

### Development
- Local Node.js with nodemon
- File watching and auto-reload
- Debug logging enabled
- CORS allowlist disabled

### Staging
- Docker container with development image
- Reduced rate limits for testing
- Test SMTP configuration
- File size limits reduced

### Production
- Multi-stage Docker build
- Health monitoring enabled
- Production SMTP configuration
- Full security features enabled
- Log aggregation configured

## 🤝 Integration Examples

### Frontend Integration (React)
```javascript
const submitContactForm = async (formData, files) => {
  const data = new FormData();
  
  // Add form fields
  Object.keys(formData).forEach(key => {
    data.append(key, formData[key]);
  });
  
  // Add files
  files.forEach(file => {
    data.append('files', file);
  });
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: data
  });
  
  return response.json();
};
```

### Webhook Integration
```javascript
// Maintain backward compatibility with existing webhooks
const webhookData = {
  emailData: {
    firstName: 'John',
    lastName: 'Doe',
    // ... other fields
  },
  files: [
    {
      originalname: 'document.pdf',
      buffer: 'base64EncodedContent',
      mimetype: 'application/pdf'
    }
  ]
};

fetch('/api/contact-legacy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(webhookData)
});
```

## 📄 License

MIT License - Copyright (c) 2025 TBGS B.V.

## 📞 Support

For technical support or questions:
- **Email**: tech@tbgs.nl  
- **Issue Tracker**: GitHub Issues
- **Documentation**: This README

---

**TBGS B.V.** - Totaal Bouw Groep Specialisten  
Betrouwbare vakmannen voor al uw bouwprojecten