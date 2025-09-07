#!/bin/bash

# TBGS Docker Monitoring Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

APP_DIR="/opt/tbgs"

echo -e "${BLUE}🔍 TBGS Docker System Status${NC}"
echo "=================================="

cd $APP_DIR

# Check Docker services
echo -e "${YELLOW}📦 Docker Services Status:${NC}"
docker-compose ps

echo ""

# Check container health
echo -e "${YELLOW}🏥 Container Health:${NC}"
for container in $(docker-compose ps -q); do
    name=$(docker inspect --format='{{.Name}}' $container | sed 's/\///')
    status=$(docker inspect --format='{{.State.Status}}' $container)
    health=$(docker inspect --format='{{.State.Health.Status}}' $container 2>/dev/null || echo "no healthcheck")
    
    if [ "$status" = "running" ]; then
        echo -e "${GREEN}✅ $name: $status ($health)${NC}"
    else
        echo -e "${RED}❌ $name: $status ($health)${NC}"
    fi
done

echo ""

# Check resource usage
echo -e "${YELLOW}💾 Resource Usage:${NC}"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}"

echo ""

# Check disk usage
echo -e "${YELLOW}💿 Disk Usage:${NC}"
echo "Application files:"
du -sh $APP_DIR
echo "Docker volumes:"
docker system df

echo ""

# Check logs for errors
echo -e "${YELLOW}📋 Recent Errors (last 50 lines):${NC}"
docker-compose logs --tail=50 | grep -i error || echo "No recent errors found"

echo ""

# Check SSL certificate expiry
echo -e "${YELLOW}🔒 SSL Certificate Status:${NC}"
if [ -f "/etc/letsencrypt/live/tbgs.nl/fullchain.pem" ]; then
    expiry=$(openssl x509 -enddate -noout -in /etc/letsencrypt/live/tbgs.nl/fullchain.pem | cut -d= -f2)
    echo "Certificate expires: $expiry"
    
    # Check if certificate expires in next 30 days
    if openssl x509 -checkend 2592000 -noout -in /etc/letsencrypt/live/tbgs.nl/fullchain.pem; then
        echo -e "${GREEN}✅ Certificate is valid for next 30 days${NC}"
    else
        echo -e "${RED}❌ Certificate expires within 30 days!${NC}"
    fi
else
    echo -e "${RED}❌ SSL certificate not found${NC}"
fi

echo ""

# Check website accessibility
echo -e "${YELLOW}🌐 Website Accessibility:${NC}"
for url in "https://tbgs.nl" "https://nextcloud.tbgs.nl" "https://portainer.tbgs.nl"; do
    if curl -s --max-time 10 "$url" > /dev/null; then
        echo -e "${GREEN}✅ $url is accessible${NC}"
    else
        echo -e "${RED}❌ $url is not accessible${NC}"
    fi
done

echo ""
echo -e "${BLUE}📊 Monitoring completed!${NC}"