# TBGS BV Website - VPS Production Deployment Guide

This guide will help you deploy the TBGS BV website to your VPS server so all processing happens on your own infrastructure.

## Prerequisites

- Ubuntu VPS server with SSH access
- Domain name pointed to your VPS IP
- Node.js 18+ and npm installed
- PostgreSQL database installed and configured
- Gmail account with app-specific password for SMTP

## Step 1: Server Setup

### Install Node.js and PM2
```bash
# Connect to your VPS
ssh your_username@your_vps_ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y

# Install PM2 globally
sudo npm install -g pm2

# Install Git and build tools
sudo apt install git build-essential -y
```

### Install and Configure PostgreSQL
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql -c "CREATE DATABASE tbgs_production;"
sudo -u postgres psql -c "CREATE USER tbgs_user WITH PASSWORD 'your_secure_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE tbgs_production TO tbgs_user;"
sudo -u postgres psql -c "ALTER USER tbgs_user CREATEDB;"
```

## Step 2: Deploy Application

### Clone and Setup Application
```bash
# Navigate to web directory
cd /var/www

# Clone your repository (replace with your actual repo)
sudo git clone https://github.com/yourusername/tbgs-website.git tbgs
cd tbgs

# Change ownership to your user
sudo chown -R $USER:$USER /var/www/tbgs

# Install dependencies
npm install

# Build the application
npm run build
```

### Configure Environment Variables
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

Update `.env` with your actual values:
```env
# Application Configuration
NODE_ENV=production
PORT=3000

# Database Configuration
DATABASE_URL=postgresql://tbgs_user:your_secure_password@localhost:5432/tbgs_production

# Email Service Configuration (Gmail SMTP)
GMAIL_USER=info@tbgs.nl
GMAIL_APP_PASSWORD=your_gmail_app_specific_password

# Google Services
GOOGLE_PLACES_API_KEY=your_google_places_api_key

# Security
JWT_SECRET=your_secure_random_jwt_secret_string_minimum_32_chars
SESSION_SECRET=your_secure_session_secret_string

# External Integrations (Optional)
GRIPP_API_URL=https://api.gripp.com
GRIPP_API_KEY=your_gripp_api_key
```

### Initialize Database Schema
```bash
# Run database migrations
npm run db:push
```

### Setup PM2 Configuration
```bash
# Create logs directory
mkdir logs

# Update ecosystem.config.js with your VPS details
nano ecosystem.config.js
```

Update the deploy section in `ecosystem.config.js`:
```javascript
deploy: {
  production: {
    user: 'your_username',
    host: 'your_vps_ip',
    ref: 'origin/main',
    repo: 'git@github.com:yourusername/your-repo.git',
    path: '/var/www/tbgs',
    'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
  }
}
```

### Start Application with PM2
```bash
# Start the application
pm2 start ecosystem.config.js --env production

# Check status
pm2 status

# View logs
pm2 logs tbgs-website

# Setup auto-restart on server reboot
pm2 startup
pm2 save
```

## Step 3: Install and Configure Nginx

### Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Configure Nginx for TBGS Website
```bash
# Create site configuration
sudo nano /etc/nginx/sites-available/tbgs.nl
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name tbgs.nl www.tbgs.nl;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Rate limiting
    limit_req zone=api burst=20 nodelay;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
}

# Rate limiting zone (add to nginx.conf http block)
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
```

### Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/tbgs.nl /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## Step 4: Setup SSL Certificate

### Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d tbgs.nl -d www.tbgs.nl

# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 5: Configure Firewall

```bash
# Allow HTTP, HTTPS, and SSH
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw enable

# Check status
sudo ufw status
```

## Step 6: Test Email Functionality

### Verify Gmail SMTP Configuration
1. Make sure `GMAIL_USER` is set to your Gmail address
2. Generate an app-specific password for Gmail:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password as `GMAIL_APP_PASSWORD`

### Test Email Sending
```bash
# Check application logs for email connectivity
pm2 logs tbgs-website

# You should see:
# ✅ Email credentials found in environment
# 📧 GMAIL_USER: info@tbgs.nl
# ✅ SMTP connection verified successfully
```

## Step 7: Production Maintenance

### Essential PM2 Commands
```bash
# Process management
pm2 restart tbgs-website    # Restart application
pm2 stop tbgs-website       # Stop application
pm2 delete tbgs-website     # Remove from PM2

# Monitoring
pm2 status                  # Show all processes
pm2 logs tbgs-website       # Show logs
pm2 monit                   # Real-time monitoring

# Updates
pm2 reload tbgs-website     # Zero-downtime reload
```

### Log Management
```bash
# View application logs
pm2 logs tbgs-website --lines 100

# Clear logs
pm2 flush

# Check Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Application Updates
```bash
# Pull latest changes
cd /var/www/tbgs
git pull origin main

# Rebuild and restart
npm install
npm run build
pm2 reload tbgs-website
```

## Step 8: Health Monitoring

### Create Health Check Script
```bash
# Create health monitoring script
nano ~/health-check.sh
```

Add this content:
```bash
#!/bin/bash
if ! curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    pm2 restart tbgs-website
    echo "$(date): TBGS app restarted due to health check failure" >> /var/log/tbgs-health.log
fi
```

```bash
# Make executable
chmod +x ~/health-check.sh

# Add to crontab (check every 5 minutes)
crontab -e
# Add line: */5 * * * * /home/your_username/health-check.sh
```

## Verification Checklist

- [ ] PM2 shows `tbgs-website` running: `pm2 status`
- [ ] Website accessible via HTTP: `http://tbgs.nl`
- [ ] Website accessible via HTTPS: `https://tbgs.nl`
- [ ] Contact forms send emails successfully
- [ ] Database queries work (check service requests)
- [ ] All specialist pages load correctly
- [ ] WhatsApp integration functions
- [ ] No errors in logs: `pm2 logs tbgs-website`

## Troubleshooting

### Common Issues

**Application won't start:**
```bash
# Check logs
pm2 logs tbgs-website
# Check environment variables
cat .env
# Test database connection
npm run db:push
```

**Email not working:**
```bash
# Verify Gmail credentials
echo $GMAIL_USER
# Check SMTP logs in PM2
pm2 logs tbgs-website | grep -i smtp
```

**Database connection errors:**
```bash
# Test PostgreSQL connection
sudo -u postgres psql -d tbgs_production -c "SELECT 1;"
# Check DATABASE_URL format
echo $DATABASE_URL
```

Your TBGS website is now running on your VPS with all processing happening on your own infrastructure!