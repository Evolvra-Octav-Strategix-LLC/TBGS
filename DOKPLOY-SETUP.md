# TBGS Dokploy Deployment Guide

## 🎯 Migration from Docker Compose to Dokploy

### Step 1: Backup Current Data
```bash
# Backup your current database (if needed)
docker exec tbgs-postgres pg_dump -U tbgs_user tbgs_production > backup.sql

# Stop current containers
docker compose down
```

### Step 2: Setup in Dokploy

1. **Create New Application in Dokploy**
   - Name: `tbgs-website`
   - Repository: Your Git repository
   - Branch: `main`

2. **Configure Build Settings**
   - Dockerfile: `Dockerfile.dokploy`
   - Build Context: `.`

3. **Setup Environment Variables in Dokploy**
   Add these in Dokploy's Environment Variables panel:
   ```env
   NODE_ENV=production
   DATABASE_URL=[Dokploy provides this automatically]
   
   # Email Configuration (Your values from current .env)
   GMAIL_USER=Info@tbgs.nl  
   GMAIL_APP_PASSWORD=[Your Gmail App Password]
   
   # APIs (Your values from current .env)
   GOOGLE_PLACES_API_KEY=[Your Google Places API Key]
   
   # Security (Generate new or copy from current .env)
   SESSION_SECRET=[Your Session Secret]
   JWT_SECRET=[Your JWT Secret]
   ```
   
   **⚠️ SECURITY: Never commit secrets to Git! Always set them in Dokploy's environment panel.**

4. **Configure Database**
   - Create PostgreSQL database in Dokploy
   - Name: `tbgs_production`
   - Dokploy will automatically set DATABASE_URL

5. **Configure Domain**
   - Add your domain: `tbgs.nl`
   - Dokploy will handle SSL automatically

6. **Deploy**
   - Click Deploy
   - Dokploy will build and deploy automatically

### Step 3: Import Database (if migrating)
```bash
# If you have existing data, import it via Dokploy's database panel
# Or connect via psql and import your backup.sql
```

### Step 4: Setup Multiple Domains (Optional)
For your specialist domains (TDS, TSS, TOS, TBS):
- `tds.tbgs.nl` → same app with routing
- `tss.tbgs.nl` → same app with routing  
- `tos.tbgs.nl` → same app with routing
- `tbs.tbgs.nl` → same app with routing

## 🚀 Benefits of Dokploy Migration

### ✅ What Dokploy Provides:
- **Automatic SSL** (Let's Encrypt)
- **Database Management** (PostgreSQL with GUI)
- **Git-based Deployments** (like Vercel)
- **Domain Management** (multiple domains easy)
- **Health Monitoring** (built-in)
- **Backup System** (automated)

### 🗑️ What We Remove:
- ❌ `postgres` container (Dokploy managed)
- ❌ `nginx-proxy-manager` (Dokploy nginx)
- ❌ `pgadmin` (Dokploy database UI)
- ❌ `portainer` (Dokploy management UI)
- ❌ `dashy` (Dokploy dashboard)
- ❌ Complex networking & SSL setup

### 📁 Files No Longer Needed:
- `docker-compose.yml` (replaced by Dokploy)
- `010-nextcloud-init.sh` (no manual DB setup)
- Nginx proxy configurations
- SSL certificate management

## 🎯 Result:
**Super simple deployment with just your TBGS app code + Dokploy handling all infrastructure!**