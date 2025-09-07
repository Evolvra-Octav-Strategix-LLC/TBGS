# TBGS Docker Deployment Guide

Complete Docker setup voor TBGS website met PostgreSQL, Nginx en Nextcloud.

## 🏗️ Wat is er geconfigureerd?

### Services in de Docker setup:
- **TBGS Web App** (Node.js + React) - Port 3000 intern
- **PostgreSQL Database** - Voor TBGS en Nextcloud data
- **Redis** - Voor sessie opslag
- **Nextcloud** - Voor foto/bestand opslag
- **Nginx** - Reverse proxy met SSL
- **Certbot** - Automatische SSL certificaten

### URLs na deployment:
- **Hoofdwebsite**: https://tbgs.nl
- **Nextcloud**: https://nextcloud.tbgs.nl

## 🚀 Quick Start Deployment

### 1. Server Voorbereiden (DigitalOcean/VPS)

```bash
# Ubuntu 22.04 LTS droplet aanmaken
# Minimaal: 2GB RAM, 50GB SSD

# Verbinden via SSH
ssh root@YOUR_DROPLET_IP

# Systeem updaten
apt update && apt upgrade -y
```

### 2. Code Repository Setup

```bash
# Git installeren
apt install git -y

# Repository clonen
git clone https://github.com/JOUW-USERNAME/tbgs-website.git /opt/tbgs
cd /opt/tbgs

# Deploy script uitvoerbaar maken
chmod +x docker-deploy.sh docker-backup.sh docker-monitoring.sh
```

### 3. Environment Configuratie

```bash
# Kopieer en bewerk environment file
cp .env.docker .env.production
nano .env.production
```

**Vereiste environment variabelen:**
```env
# Database
POSTGRES_PASSWORD=sterke_database_wachtwoord
DATABASE_URL=postgresql://tbgs_user:sterke_database_wachtwoord@postgres:5432/tbgs_production

# API Keys
SENDGRID_API_KEY=jouw_sendgrid_api_key
GOOGLE_PLACES_API_KEY=jouw_google_places_api_key

# Security
SESSION_SECRET=zeer_lange_random_string_minimaal_32_karakters

# Nextcloud
NEXTCLOUD_ADMIN_PASSWORD=sterke_admin_wachtwoord

# SSL
SSL_EMAIL=jouw-email@tbgs.nl
```

### 4. DNS Configuratie

In je domain provider (TransIP/Hostnet etc.):
```
A Record: tbgs.nl → JOUW_DROPLET_IP
A Record: www.tbgs.nl → JOUW_DROPLET_IP  
A Record: nextcloud.tbgs.nl → JOUW_DROPLET_IP
```

### 5. Deployment Uitvoeren

```bash
# Deploy script uitvoeren
./docker-deploy.sh
```

Het script doet automatisch:
- Docker & Docker Compose installeren
- Containers bouwen en starten
- SSL certificaten ophalen
- Services controleren

## 📋 Na Deployment

### 1. Nextcloud Setup
1. Ga naar https://nextcloud.tbgs.nl
2. Login met admin credentials uit .env.production
3. Configureer storage en gebruikers

### 2. Website Testen
- Test https://tbgs.nl 
- Test alle contactformulieren
- Test locatiepagina's

### 3. Monitoring Setup

```bash
# Status controleren
./docker-monitoring.sh

# Logs bekijken
docker-compose logs -f

# Specifieke service logs
docker-compose logs -f tbgs-app
docker-compose logs -f nginx
```

## 🔧 Beheer Commando's

### Container Management
```bash
cd /opt/tbgs

# Status bekijken
docker-compose ps

# Services herstarten
docker-compose restart

# Logs bekijken
docker-compose logs -f

# Containers stoppen
docker-compose down

# Containers starten
docker-compose up -d
```

### Backup & Restore
```bash
# Backup maken
./docker-backup.sh

# Database backup handmatig
docker-compose exec postgres pg_dump -U tbgs_user tbgs_production > backup.sql

# Database restore
cat backup.sql | docker-compose exec -T postgres psql -U tbgs_user tbgs_production
```

### Updates Deployen
```bash
cd /opt/tbgs

# Nieuwe code pullen
git pull origin main

# Containers rebuilden
docker-compose build --no-cache
docker-compose up -d
```

## 🔒 Security Features

### SSL/TLS
- Automatische Let's Encrypt certificaten
- HTTPS redirect voor alle verkeer
- Security headers geconfigureerd

### Rate Limiting
- API endpoints: 10 requests/seconde
- Contact formulieren: 1 request/seconde
- Burst protection ingebouwd

### Container Security
- Non-root gebruiker in containers
- Read-only root filesystems waar mogelijk
- Network isolation tussen services

## 📊 Monitoring & Alerting

### Health Checks
```bash
# Website beschikbaarheid
curl -f https://tbgs.nl/api/health

# Nextcloud beschikbaarheid  
curl -f https://nextcloud.tbgs.nl/status.php
```

### Performance Monitoring
```bash
# Resource usage
docker stats

# Systeem monitoring
./docker-monitoring.sh
```

## 🚨 Troubleshooting

### Website niet bereikbaar
```bash
# Check container status
docker-compose ps

# Check nginx logs
docker-compose logs nginx

# Check app logs
docker-compose logs tbgs-app
```

### SSL problemen
```bash
# Hernieuw certificaat
docker-compose run --rm certbot renew

# Nginx herstarten
docker-compose restart nginx
```

### Database problemen
```bash
# Database connectie testen
docker-compose exec postgres psql -U tbgs_user tbgs_production -c "SELECT 1;"

# Database logs
docker-compose logs postgres
```

### Nextcloud problemen
```bash
# Nextcloud logs
docker-compose logs nextcloud

# Nextcloud maintenance mode
docker-compose exec nextcloud sudo -u www-data php occ maintenance:mode --on
```

## 💰 Kosten Schatting

**DigitalOcean Droplet (2GB RAM, 50GB SSD)**: €12/maand
**Domain naam**: €10-15/jaar
**Totaal**: ~€12/maand + domain kosten

## 🔄 Backup Strategie

### Automatische backups
- Database backup: dagelijks om 02:00
- Bestanden backup: dagelijks om 02:30
- Bewaarperiode: 7 dagen lokaal

### Crontab setup
```bash
# Voeg toe aan crontab
crontab -e

# Dagelijkse backup om 2:00
0 2 * * * /opt/tbgs/docker-backup.sh

# Wekelijkse monitoring rapport
0 8 * * 1 /opt/tbgs/docker-monitoring.sh | mail -s "TBGS Weekly Report" admin@tbgs.nl
```

## 📞 Support

Bij problemen:
1. Check container logs: `docker-compose logs`
2. Run monitoring script: `./docker-monitoring.sh`
3. Check deze documentatie
4. Contact ontwikkelaar voor complexe issues

---

**🎉 Gefeliciteerd! Je TBGS website draait nu volledig in Docker met professionele setup!**