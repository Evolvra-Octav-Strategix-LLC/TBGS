#!/bin/bash

# TBGS Docker Backup Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
BACKUP_DIR="/opt/backups"
DATE=$(date +%Y%m%d_%H%M%S)
APP_DIR="/opt/tbgs"

echo -e "${YELLOW}🗄️ Starting backup process...${NC}"

# Create backup directory
mkdir -p $BACKUP_DIR

cd $APP_DIR

# Backup databases
echo -e "${YELLOW}💾 Backing up PostgreSQL databases...${NC}"
docker-compose exec -T postgres pg_dump -U tbgs_user tbgs_production | gzip > $BACKUP_DIR/tbgs_db_$DATE.sql.gz
docker-compose exec -T postgres pg_dump -U nextcloud_user nextcloud | gzip > $BACKUP_DIR/nextcloud_db_$DATE.sql.gz

# Backup Nextcloud data
echo -e "${YELLOW}📁 Backing up Nextcloud data...${NC}"
tar -czf $BACKUP_DIR/nextcloud_data_$DATE.tar.gz -C . nextcloud/

# Backup application uploads
echo -e "${YELLOW}📎 Backing up application uploads...${NC}"
tar -czf $BACKUP_DIR/tbgs_uploads_$DATE.tar.gz -C . uploads/

# Backup configuration files
echo -e "${YELLOW}⚙️ Backing up configuration...${NC}"
tar -czf $BACKUP_DIR/tbgs_config_$DATE.tar.gz docker-compose.yml .env.production nginx/

# Remove backups older than 7 days
echo -e "${YELLOW}🧹 Cleaning old backups...${NC}"
find $BACKUP_DIR -name "*.gz" -mtime +7 -delete

# Show backup info
echo -e "${GREEN}✅ Backup completed successfully!${NC}"
echo -e "${GREEN}📊 Backup files created:${NC}"
ls -la $BACKUP_DIR/*_$DATE.*

echo -e "${YELLOW}💡 To restore a backup:${NC}"
echo -e "${YELLOW}   Database: gunzip < backup.sql.gz | docker-compose exec -T postgres psql -U tbgs_user tbgs_production${NC}"
echo -e "${YELLOW}   Files: tar -xzf backup.tar.gz${NC}"