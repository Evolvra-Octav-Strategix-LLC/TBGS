# Import Guide: Alle Files naar Docker Setup

## 🎯 Overzicht

Deze guide legt uit hoe je alle files van je TBGS project importeert in de Docker productie setup.

## 📋 Stap 1: Files Voorbereiden

### Controleer welke files je hebt:
```bash
# Toon alle project files
find . -type f -not -path "./.git/*" -not -path "./node_modules/*" | head -20

# Toon project structuur
tree -I 'node_modules|.git' -L 3
```

### Belangrijke files die mee moeten:
- ✅ Alle source code (`client/`, `server/`, `shared/`)
- ✅ Package.json en package-lock.json
- ✅ Docker configuratie files
- ✅ Nginx configuratie
- ✅ Environment templates
- ❌ node_modules (wordt opnieuw geïnstalleerd)
- ❌ .env files met echte secrets

## 📤 Stap 2: Upload naar Git Repository

### A. Repository aanmaken:
1. Ga naar GitHub.com of GitLab.com
2. Maak nieuwe repository: `tbgs-website`
3. Kopieer de repository URL

### B. Files uploaden:
```bash
# Run het upload script
chmod +x upload-to-git.sh
./upload-to-git.sh

# Voeg remote repository toe
git remote add origin https://github.com/JOUW-USERNAME/tbgs-website.git

# Upload alle files
git push -u origin main
```

## 🐳 Stap 3: Docker Setup Configureren

### Update deploy script met jouw repository:
```bash
# Bewerk docker-deploy.sh
nano docker-deploy.sh

# Verander deze regel:
REPO_URL="https://github.com/JOUW-USERNAME/tbgs-website.git"
```

## 🚀 Stap 4: Deployment op Server

### Complete deployment proces:

```bash
# 1. Server verbinding
ssh root@JOUW-SERVER-IP

# 2. Deploy script downloaden (eerste keer)
wget https://raw.githubusercontent.com/JOUW-USERNAME/tbgs-website/main/docker-deploy.sh
chmod +x docker-deploy.sh

# 3. Environment setup
nano .env.production
# Vul alle benodigde variabelen in

# 4. Run deployment
./docker-deploy.sh
```

## 📁 Stap 5: File Permissions Controleren

### In Docker container:
```bash
# Check file permissions
docker-compose exec tbgs-app ls -la

# Check uploads directory
docker-compose exec tbgs-app ls -la uploads/

# Fix permissions indien nodig
docker-compose exec tbgs-app chown -R tbgs:tbgs /app
```

## 🔄 Stap 6: Updates Deployen

### Voor toekomstige updates:
```bash
# Lokaal: Commit en push nieuwe changes
git add .
git commit -m "Update website"
git push origin main

# Server: Pull nieuwe changes en redeploy
cd /opt/tbgs
git pull origin main
docker-compose build --no-cache
docker-compose up -d
```

## 📂 File Mapping in Docker

### Hoe files worden geïmporteerd:

```yaml
# Dockerfile kopieert files naar container:
COPY package*.json ./          # Dependencies
COPY . .                       # Alle source code
COPY --from=builder /app/dist  # Compiled frontend

# Docker volumes voor persistent data:
volumes:
  - ./uploads:/app/uploads           # Upload bestanden
  - ./nextcloud/uploads:/var/www/html/data  # Nextcloud files
```

## 🔍 Verificatie

### Check of alle files correct zijn geïmporteerd:

```bash
# 1. Container file structure
docker-compose exec tbgs-app find /app -name "*.js" | head -10

# 2. Check specifieke directories
docker-compose exec tbgs-app ls -la /app/client
docker-compose exec tbgs-app ls -la /app/server

# 3. Test application
curl http://localhost:3000/api/health

# 4. Check website
curl -I https://tbgs.nl
```

## ⚠️ Troubleshooting

### Files niet gevonden:
```bash
# Rebuild container met nieuwe files
docker-compose build --no-cache tbgs-app
docker-compose up -d

# Check container logs
docker-compose logs tbgs-app
```

### Permission errors:
```bash
# Fix ownership
docker-compose exec tbgs-app chown -R tbgs:tbgs /app

# Check user in container
docker-compose exec tbgs-app whoami
```

### Build errors:
```bash
# Clean build
docker system prune -f
docker-compose build --no-cache
```

## 📋 Checklist Import Success

- [ ] Git repository bevat alle source files
- [ ] Docker containers starten zonder errors
- [ ] Website accessible op https://tbgs.nl
- [ ] Health check endpoint werkt: `/api/health`
- [ ] Contactformulieren functioneren
- [ ] Nextcloud accessible op subdomain
- [ ] File uploads werken correct
- [ ] Database connectie succesvol

---

🎉 **Success!** Alle files zijn geïmporteerd en je website draait volledig in Docker!