# Complete Vercel Deployment Guide for TBGS

## 🎯 Quick Summary
Instead of managing a VPS, you can use Vercel for the Next.js app and a managed WordPress service for content. This eliminates server management completely.

## 🔄 Architecture Overview
```
WordPress (Content) ←→ Vercel (Next.js App) ←→ Users
     ↓                        ↓
   cms.tbgs.nl              www.tbgs.nl
```

## 🚀 Step-by-Step Setup

### 1. Choose WordPress Hosting

#### Option A: WordPress.com (Easiest)
```bash
# Go to wordpress.com
# Create business account: $25/month
# Site URL: tbgs-cms.wordpress.com
# Install plugins: WPGraphQL, ACF, WPGraphQL for ACF
```

#### Option B: Pantheon (Professional)
```bash
# Go to pantheon.io
# Create free account
# Create WordPress site: tbgs-cms
# Install same plugins
# GraphQL endpoint: https://dev-tbgs-cms.pantheonsite.io/wp/graphql
```

#### Option C: Kinsta (Premium)
```bash
# Go to kinsta.com
# WordPress hosting: $35/month
# Custom domain: cms.tbgs.nl
# Install plugins via WordPress admin
```

### 2. Deploy TBGS to Vercel

#### Connect GitHub Repository:
1. **Push to GitHub**:
```bash
git add .
git commit -m "WordPress headless setup complete"
git push origin main
```

2. **Connect Vercel**:
   - Go to vercel.com
   - "Import Git Repository"
   - Select your TBGS repository
   - Configure deployment

### 3. Configure Environment Variables in Vercel

In Vercel Dashboard → Settings → Environment Variables:

```bash
# WordPress API
WORDPRESS_API_URL=https://your-wp-site.com/graphql

# Revalidation
REVALIDATE_SECRET=tbgs-vercel-secret-2024

# Enable WordPress sync
ENABLE_WP_SYNC=true

# Google API (existing)
GOOGLE_PLACES_API_KEY=your-existing-key

# Database (if using)
DATABASE_URL=your-database-url
```

### 4. Configure Custom Domain in Vercel

1. **Add Domain**:
   - Vercel Dashboard → Domains
   - Add `www.tbgs.nl` and `tbgs.nl`
   - Follow DNS configuration instructions

2. **DNS Settings** (at your domain registrar):
```bash
# A record
@ → 76.76.19.61 (Vercel)
www → 76.76.19.61 (Vercel)

# CNAME for WordPress
cms → your-wordpress-host.com
```

### 5. WordPress Configuration

#### Install Required Plugins:
1. **WPGraphQL** - Creates `/graphql` endpoint
2. **Advanced Custom Fields** - Custom content fields  
3. **WPGraphQL for ACF** - Connects ACF to GraphQL
4. **RankMath SEO** - SEO optimization

#### Add Custom Post Types (functions.php):
```php
// Same code from SSH setup - add to your WordPress theme's functions.php
function create_tbgs_post_types() {
    register_post_type('locations', array(
        'public' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'location',
        'graphql_plural_name' => 'locations',
        // ... rest of configuration
    ));
}
add_action('init', 'create_tbgs_post_types');

// Vercel revalidation webhook
function trigger_vercel_revalidation($post_id) {
    $revalidate_url = 'https://www.tbgs.nl/api/revalidate';
    $secret = 'tbgs-vercel-secret-2024';
    
    // Trigger revalidation for changed content
    wp_remote_post($revalidate_url, array(
        'headers' => array(
            'x-webhook-secret' => $secret,
            'Content-Type' => 'application/json',
        ),
        'body' => json_encode(array('paths' => ['/nl/eindhoven', '/'])),
    ));
}
add_action('save_post', 'trigger_vercel_revalidation');
```

### 6. Test the Integration

#### Test WordPress GraphQL:
```bash
# Visit your WordPress GraphQL IDE
https://your-wp-site.com/wp-admin/admin.php?page=graphiql-ide

# Test query:
query {
  locations {
    nodes {
      title
      content
    }
  }
}
```

#### Test Vercel Deployment:
```bash
# Visit your Vercel app
https://www.tbgs.nl

# Check if WordPress content loads
https://www.tbgs.nl/nl/eindhoven
```

### 7. Content Migration

#### Create Location Content in WordPress:
1. **Go to**: WordPress Admin → Locations → Add New
2. **Title**: "TBGS Eindhoven"
3. **Content**: Your existing page content
4. **ACF Fields**:
   - Country: nl
   - City: eindhoven
   - Intro: "Complete bouwdienstverlening in Eindhoven..."
   - Coordinates: 51.4416, 5.4697
5. **Publish**

#### Verify Content Sync:
- Edit content in WordPress
- Check `https://www.tbgs.nl/nl/eindhoven`
- Content should update automatically via revalidation

## 💰 Cost Comparison

### VPS Setup:
- VPS: $5-10/month
- Domain: $10/year  
- **Total: ~$70-130/year**

### Vercel Setup:
- WordPress hosting: $25-35/month
- Vercel Pro: $20/month  
- Domain: $10/year
- **Total: ~$550-650/year**

## ✅ Benefits of Vercel Approach:

✅ **No server management** - zero SSH, no updates, no security patches  
✅ **Automatic scaling** - handles traffic spikes automatically  
✅ **Global CDN** - fast loading worldwide  
✅ **Zero downtime deployments**  
✅ **Preview deployments** for testing changes  
✅ **Automatic SSL certificates**  
✅ **Built-in CI/CD** with GitHub integration  
✅ **Edge functions** for optimal performance  

## 🔧 WordPress Admin Tasks:

After setup, all content editing happens in WordPress:

1. **Edit page content**: Locations → Edit → Update content → Save
2. **Add FAQ sections**: Edit location → ACF FAQ → Add questions
3. **Upload images**: Media → Add New → Upload files  
4. **SEO optimization**: Edit post → RankMath → Update meta
5. **Create new pages**: Locations → Add New → Fill ACF fields

Changes appear on your Vercel site within seconds via automatic revalidation.

## 🚀 Deployment Commands:

```bash
# Initial deployment
vercel --prod

# Environment variables
vercel env add WORDPRESS_API_URL
vercel env add REVALIDATE_SECRET  
vercel env add ENABLE_WP_SYNC

# Redeploy with new environment
vercel --prod --force
```

This Vercel approach is more expensive but eliminates all server management complexity!