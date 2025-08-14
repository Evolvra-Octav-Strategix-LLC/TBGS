# WordPress on Vercel Setup for TBGS

## 🚀 Vercel WordPress Options

### Option 1: Vercel + WordPress.com (Easiest)
**Best for: Quick setup, managed hosting**

1. **Create WordPress.com Site**:
   - Go to wordpress.com
   - Create site: `tbgs-cms.wordpress.com`
   - Choose Business plan ($25/month) for plugin support

2. **Install Required Plugins**:
   - WPGraphQL
   - Advanced Custom Fields
   - WPGraphQL for ACF

3. **Configure Vercel**:
```bash
# In your TBGS project
npm install @vercel/edge-config

# Update .env
WORDPRESS_API_URL=https://tbgs-cms.wordpress.com/graphql
VERCEL_URL=https://tbgs.vercel.app
```

### Option 2: Vercel + Headless WordPress Service
**Best for: Professional setup, better performance**

#### Using WordPress VIP or Pantheon:

1. **WordPress VIP** (Enterprise):
   - Professional WordPress hosting
   - Built-in GraphQL support
   - Automatic scaling

2. **Pantheon** (Recommended):
   - Go to pantheon.io
   - Create WordPress site
   - Install required plugins
   - Use their GraphQL endpoint

```bash
# Pantheon example
WORDPRESS_API_URL=https://dev-tbgs-cms.pantheonsite.io/wp/graphql
```

### Option 3: Vercel + Custom WordPress (Advanced)
**Best for: Full control, custom setup**

#### Using Railway/PlanetScale for WordPress:

1. **Deploy WordPress to Railway**:
```yaml
# railway.toml
[build]
builder = "dockerfile"

[deploy]
startCommand = "apache2-foreground"
```

2. **Create Dockerfile**:
```dockerfile
FROM wordpress:latest
COPY ./wp-content /var/www/html/wp-content
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
```

## 🔧 Vercel Configuration for TBGS

### 1. Update Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

```bash
WORDPRESS_API_URL=https://your-wp-site.com/graphql
REVALIDATE_SECRET=tbgs-vercel-secret-2024
ENABLE_WP_SYNC=true
```

### 2. Create Revalidation API Route
```javascript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-webhook-secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const { paths } = await request.json()
    
    for (const path of paths) {
      revalidatePath(path)
    }
    
    return NextResponse.json({ revalidated: true, paths })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
```

### 3. Configure WordPress Webhook
Add to your WordPress functions.php:

```php
function trigger_vercel_revalidation($post_id) {
    $revalidate_url = 'https://tbgs.vercel.app/api/revalidate';
    $secret = 'tbgs-vercel-secret-2024';
    
    // Your existing revalidation logic here
    wp_remote_post($revalidate_url, array(
        'headers' => array(
            'x-webhook-secret' => $secret,
            'Content-Type' => 'application/json',
        ),
        'body' => json_encode(array('paths' => $paths)),
    ));
}
add_action('save_post', 'trigger_vercel_revalidation');
```

## 🌟 Recommended Setup: Pantheon + Vercel

### Step 1: Create Pantheon WordPress Site
1. Go to pantheon.io
2. Create free account
3. "Create New Site" → WordPress
4. Site name: `tbgs-cms`
5. Choose region closest to your users

### Step 2: Install Plugins
```bash
# Via Pantheon dashboard or SFTP:
# - WPGraphQL
# - Advanced Custom Fields Pro
# - WPGraphQL for ACF
# - RankMath SEO
```

### Step 3: Configure Custom Post Types
Same functions.php code as SSH setup:

```php
// Add all the TBGS custom post types and ACF fields
// (same code from SSH-AUTOMATED-SETUP.sh)
```

### Step 4: Deploy to Vercel
```bash
# In your TBGS project:
npm install -g vercel
vercel login
vercel --prod

# Configure environment variables in Vercel dashboard
```

### Step 5: Connect Domain
1. **Pantheon**: Add custom domain `cms.tbgs.nl`
2. **Vercel**: Add custom domain `www.tbgs.nl`
3. **DNS**: Point both domains appropriately

## 📊 Comparison: VPS vs Vercel

| Feature | VPS Setup | Vercel Setup |
|---------|-----------|--------------|
| **Cost** | $5-20/month | $20-50/month |
| **Setup Time** | 30 minutes | 10 minutes |
| **Maintenance** | You manage | Fully managed |
| **Performance** | Good | Excellent (CDN) |
| **Scaling** | Manual | Automatic |
| **SSL** | You setup | Automatic |
| **Backups** | You manage | Automatic |
| **Uptime** | 99.5% | 99.9% |

## ✅ Easiest Vercel WordPress Setup:

### Quick Option: WordPress.com + Vercel
1. **Create WordPress.com Business site** ($25/month)
2. **Install required plugins**
3. **Deploy TBGS to Vercel** (free tier)
4. **Connect with GraphQL**

### Professional Option: Pantheon + Vercel
1. **Create Pantheon WordPress site** (free/paid)
2. **Setup custom post types and ACF**
3. **Deploy TBGS to Vercel Pro** ($20/month)
4. **Connect domains and configure webhooks**

## 🔧 Environment Variables for Vercel:

```bash
# Production
WORDPRESS_API_URL=https://dev-tbgs-cms.pantheonsite.io/wp/graphql
REVALIDATE_SECRET=tbgs-vercel-secret-2024
ENABLE_WP_SYNC=true

# Preview/Development  
WORDPRESS_API_URL=https://dev-tbgs-cms.pantheonsite.io/wp/graphql
REVALIDATE_SECRET=tbgs-vercel-secret-2024
ENABLE_WP_SYNC=true
```

## 🚀 Benefits of Vercel Setup:

✅ **Zero server management** - no SSH needed  
✅ **Automatic SSL certificates**  
✅ **Global CDN for fast loading**  
✅ **Automatic scaling**  
✅ **Built-in CI/CD with GitHub**  
✅ **Preview deployments for testing**  
✅ **Edge functions for API routes**  

The Vercel approach is more expensive but much easier to maintain than a VPS setup!