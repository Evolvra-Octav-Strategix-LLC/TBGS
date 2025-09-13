#!/bin/bash
# TBGS Clean Deployment Script
# This script ensures a clean GitOps workflow with zero conflicts

set -e  # Exit on any error

echo "🚀 Starting TBGS deployment..."
echo "📅 $(date)"

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Error: docker-compose.yml not found. Are you in the TBGS directory?"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "❌ Error: .env not found. Please copy .env.example to .env and configure it."
    exit 1
fi

echo "🔄 Fetching latest changes from repository..."
# Force clean pull - no conflicts allowed
git fetch --all
git reset --hard origin/main

echo "🛑 Stopping existing containers..."
docker compose down

echo "🧹 Cleaning up old images and containers..."
docker system prune -f

echo "🔨 Building and starting services..."
docker compose up -d --build

echo "⏳ Waiting for services to start up..."
sleep 30

# Health check function using docker compose health status
check_service_health() {
    local service_name=$1
    local display_name=$2
    echo "🔍 Checking $display_name health..."
    
    for i in {1..10}; do
        local health_status=$(docker compose ps --format "table {{.Service}}\t{{.Status}}" | grep "^${service_name}" | awk '{print $2}')
        
        if [[ "$health_status" == *"healthy"* ]] || [[ "$health_status" == *"Up"* ]]; then
            echo "✅ $display_name is healthy"
            return 0
        fi
        
        echo "⏳ Waiting for $display_name... ($i/10) - Status: $health_status"
        sleep 10
    done
    
    echo "❌ $display_name health check failed"
    return 1
}

# Alternative direct API health check for TBGS app (bypasses NPM)
check_tbgs_api_direct() {
    echo "🔍 Checking TBGS App API directly..."
    
    for i in {1..5}; do
        # Use wget instead of curl as it's more commonly available in containers
        if docker compose exec -T tbgs-app wget --quiet --tries=1 --spider "http://localhost:3000/api/health" > /dev/null 2>&1; then
            echo "✅ TBGS App API is responding"
            return 0
        fi
        echo "⏳ Waiting for TBGS App API... ($i/5)"
        sleep 5
    done
    
    echo "⚠️ TBGS App API check failed, but container may still be starting"
    return 1
}

# Check service health using Docker health status
check_service_health "tbgs-app" "TBGS Application"
check_service_health "postgres" "PostgreSQL Database" 
check_service_health "nginx-proxy-manager" "Nginx Proxy Manager"

# Additional direct API check
check_tbgs_api_direct || echo "⚠️ Direct API health check failed, check logs if needed"

echo "📊 Container status:"
docker compose ps

echo "📋 Recent logs:"
docker compose logs --tail=20

echo "🎉 Deployment completed!"
echo "🌐 Your services should now be available:"
echo "   - Main website: http://212.192.2.129:3000 (direct) or https://tbgs.nl (after NPM setup)"
echo "   - NPM Admin Panel: http://212.192.2.129:8081"
echo "   - Dashboard: https://dashboard.tbgs.nl (after NPM setup)"
echo "   - pgAdmin: https://pgadmin.tbgs.nl (after NPM setup)"
echo "   - Nextcloud: https://nextcloud.tbgs.nl (after NPM setup)"
echo "   - Portainer: https://portainer.tbgs.nl (after NPM setup)"

echo "✅ All done! Check https://tbgs.nl to verify everything is working."