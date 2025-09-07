#!/bin/bash

# TBGS Docker Deployment Script
# Voor DigitalOcean droplet met Docker

set -e

echo "🚀 Starting TBGS Docker deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}Please run as root${NC}"
    exit 1
fi

# Variables
APP_DIR="/opt/tbgs"
REPO_URL="https://github.com/Evolvra-Octav-Strategix-LLC/TBGS.git"
BRANCH="main"

# Install Docker if not present
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}📦 Installing Docker...${NC}"
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io
fi

# Install Docker Compose if not present
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}📦 Installing Docker Compose...${NC}"
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

# Create app directory
echo -e "${YELLOW}📁 Setting up application directory...${NC}"
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or pull latest code
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📥 Cloning repository...${NC}"
    git clone $REPO_URL .
else
    echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
    git pull origin $BRANCH
fi

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo -e "${RED}❌ .env.production file not found!${NC}"
    echo -e "${YELLOW}Creating template from .env.docker...${NC}"
    cp .env.docker .env.production
    echo -e "${RED}Please edit .env.production with your actual values before continuing!${NC}"
    exit 1
fi

# Create necessary directories
echo -e "${YELLOW}📁 Creating directories...${NC}"
mkdir -p nginx/logs nginx/ssl uploads nextcloud/uploads

# Stop existing containers
echo -e "${YELLOW}🛑 Stopping existing containers...${NC}"
docker-compose down || true

# Build and start containers
echo -e "${YELLOW}🏗️ Building and starting containers...${NC}"
docker-compose up --build -d

# Wait for services to start
echo -e "${YELLOW}⏳ Waiting for services to start...${NC}"
sleep 30

# Check if services are running
echo -e "${YELLOW}🔍 Checking service status...${NC}"
docker-compose ps

# Get SSL certificates
echo -e "${YELLOW}🔒 Getting SSL certificates...${NC}"
docker-compose run --rm certbot

# Reload nginx with SSL
echo -e "${YELLOW}🔄 Reloading nginx with SSL...${NC}"
docker-compose restart nginx

# Show final status
echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${GREEN}🌐 Your websites should be accessible at:${NC}"
echo -e "${GREEN}   - Main site: https://tbgs.nl${NC}"
echo -e "${GREEN}   - Nextcloud: https://nextcloud.tbgs.nl${NC}"
echo -e "${YELLOW}📋 Next steps:${NC}"
echo -e "${YELLOW}   1. Configure DNS A records:${NC}"
echo -e "${YELLOW}      - tbgs.nl → $(curl -s ifconfig.me)${NC}"
echo -e "${YELLOW}      - www.tbgs.nl → $(curl -s ifconfig.me)${NC}"
echo -e "${YELLOW}      - nextcloud.tbgs.nl → $(curl -s ifconfig.me)${NC}"
echo -e "${YELLOW}   2. Complete Nextcloud setup at https://nextcloud.tbgs.nl${NC}"
echo -e "${YELLOW}   3. Test your website at https://tbgs.nl${NC}"

# Show logs command
echo -e "${YELLOW}📊 To view logs: docker-compose logs -f${NC}"