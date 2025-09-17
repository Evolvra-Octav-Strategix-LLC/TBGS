# TBGS Email Service

A standalone Node.js backend service for handling contact form submissions with professional email templates.

## 🚀 Features

- **Professional Email Templates**: Beautiful HTML emails for both admin notifications and client confirmations
- **TBGS Branding**: Client emails include the TBGS logo and professional styling
- **Secure**: Input validation and HTML escaping for security
- **Docker Ready**: Includes Dockerfile for easy deployment
- **Health Checks**: Built-in health check endpoint for monitoring

## 📧 Email Templates

### Admin Notification Email
- Clean, structured table layout
- All customer information clearly displayed
- Direct links for email, phone, and address (Google Maps)
- Timestamp of submission

### Client Thank You Email  
- **TBGS Logo** prominently displayed at top
- Professional green gradient header
- WhatsApp contact button for urgent inquiries
- TBGS branding and company information

## 🏗️ Quick Start

### 1. Environment Setup

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your SMTP settings:
```env
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER=info@tbgs.nl
```

### 2. Local Development

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```

The service will be available at `http://localhost:3000`

### 3. Test the API

Send a POST request to `/api/contact`:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe", 
    "email": "john@example.com",
    "phone": "06-12345678",
    "selectedService": "Daklekkage reparatie",
    "address": "Amsterdam, Netherlands",
    "projectDescription": "Dak lekt aan de voorkant",
    "contactPreference": "Email"
  }'
```

## 🐳 Docker Deployment

Build the image:
```bash
docker build -t tbgs-email-service .
```

Run the container:
```bash
docker run -d \
  --name tbgs-email \
  -p 3000:3000 \
  --env-file .env \
  tbgs-email-service
```

## 🚀 Deploy with Dokploy

1. **Create New App in Dokploy**
   - Choose "Deploy from Dockerfile"
   - Upload this project folder

2. **Set Environment Variables**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_RECEIVER=info@tbgs.nl
   ```

3. **Assign Domain**
   - Example: `api.evolvra.ai`
   - Enable HTTPS (Let's Encrypt)

4. **Deploy**
   - Dokploy will build and deploy automatically
   - Health checks will ensure the service is running

## 📋 API Endpoints

### POST `/api/contact`
Submit a contact form.

**Required fields:**
- `firstName` (string)
- `lastName` (string) 
- `email` (string)
- `phone` (string)
- `selectedService` (string)

**Optional fields:**
- `address` (string)
- `projectDescription` (string)
- `contactPreference` (string)

**Response:**
```json
{
  "success": true,
  "message": "Uw aanvraag is succesvol verzonden! We nemen binnen 24 uur contact met u op."
}
```

### GET `/api/health`
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "healthy",
  "service": "TBGS Email Service", 
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🔧 Gmail SMTP Setup

1. **Enable 2-Step Verification** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use App Password** as `SMTP_PASS` (not your regular Gmail password)

## 🌐 Frontend Integration

From your website, send form data to your deployed service:

```javascript
const submitForm = async (formData) => {
  try {
    const response = await fetch('https://api.evolvra.ai/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Bedankt! We nemen binnen 24 uur contact met u op.');
    }
  } catch (error) {
    alert('Er is een fout opgetreden. Probeer het later opnieuw.');
  }
};
```

## 📝 Customization

### Modify Email Templates
Edit the templates in `/templates/`:
- `admin-email.js` - Admin notification template
- `client-email.js` - Client thank you template (includes TBGS logo)

### Add Your Logo
Replace the base64 logo in `client-email.js` with your actual TBGS logo:
1. Convert your logo to base64
2. Update the `tbgsLogoBase64` variable

## 🔒 Security Features

- Input validation for required fields
- HTML escaping to prevent XSS attacks
- CORS protection
- Non-root Docker user
- Health checks for monitoring

## 📞 Support

For questions about this email service, contact the TBGS development team.