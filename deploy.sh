#!/bin/bash

# TBGS Production Deployment Script
# Run this script on your DigitalOcean droplet

set -e

echo "🚀 Starting TBGS deployment..."

# Variables
APP_DIR="/var/www/tbgs"
REPO_URL="https://github.com/yourusername/tbgs-website.git"  # Replace with your repo
BRANCH="main"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit 1
fi

# Create app directory if it doesn't exist
if [ ! -d "$APP_DIR" ]; then
    echo "📁 Creating application directory..."
    mkdir -p $APP_DIR
    chown tbgs:tbgs $APP_DIR
fi

# Switch to app directory
cd $APP_DIR

# Clone or pull latest code
if [ ! -d ".git" ]; then
    echo "📥 Cloning repository..."
    sudo -u tbgs git clone $REPO_URL .
else
    echo "📥 Pulling latest changes..."
    sudo -u tbgs git pull origin $BRANCH
fi

# Install dependencies
echo "📦 Installing dependencies..."
sudo -u tbgs npm ci --production

# Build application
echo "🏗️ Building application..."
sudo -u tbgs npm run build

# Set up environment variables
echo "⚙️ Setting up environment..."
if [ ! -f ".env.production" ]; then
    echo "❌ .env.production file not found!"
    echo "Please create .env.production with your production environment variables"
    exit 1
fi

# Database migration
echo "🗄️ Running database migrations..."
sudo -u tbgs npm run db:push

# Restart PM2 application
echo "🔄 Restarting application..."
if pm2 list | grep -q "tbgs-production"; then
    pm2 restart tbgs-production
else
    cd $APP_DIR && sudo -u tbgs pm2 start ecosystem.config.js
fi

# Save PM2 configuration
pm2 save
pm2 startup

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should be accessible at https://tbgs.nl"