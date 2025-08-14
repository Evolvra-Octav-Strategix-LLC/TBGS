# Complete WordPress Headless Setup for TBGS

## 🎯 What This Setup Provides

✅ **Next.js 14 headless WordPress architecture** with automatic content sync  
✅ **All existing pages editable via WordPress admin** - no more code changes needed for content  
✅ **SEO-optimized URLs** with `/nl/[city]` and `/be/locaties/[city]` patterns  
✅ **Automatic revalidation** - WordPress changes instantly update the website  
✅ **Local test environment** with Docker for safe development  
✅ **Smart fallbacks** - site works even if WordPress is temporarily unavailable  

## 🚀 Quick Start Options

### Option 1: Local Development (Recommended First)
```bash
# Start local WordPress test environment
docker-compose up -d

# WordPress will be available at:
# http://localhost:8080 (WordPress)
# http://localhost:8080/wp-admin/ (Admin)
# http://localhost:8081 (phpMyAdmin)
```

### Option 2: Production Setup
1. **Install WordPress** on `cms.tbgs.nl` via your hosting provider
2. **Install required plugins** (details below)
3. **Configure GraphQL API**
4. **Migrate existing content**

## 📋 Step-by-Step Setup Guide

### 1. WordPress Installation & Plugins

**Required Plugins** (install in this order):
1. **WPGraphQL** (Free) - Creates `/graphql` API endpoint
2. **Advanced Custom Fields** (Free/Pro) - Custom content fields
3. **WPGraphQL for Advanced Custom Fields** (Free) - ACF ↔ GraphQL bridge
4. **RankMath SEO** (Free) - SEO optimization

**Install via WordPress Admin:**
1. Go to **Plugins → Add New**
2. Search for each plugin name
3. **Install → Activate** each plugin

### 2. Configure Custom Post Types

**Add to functions.php** (Appearance → Theme Editor → functions.php):

```php
// TBGS Custom Post Types
function create_tbgs_post_types() {
    // Locations Post Type
    register_post_type('locations', array(
        'labels' => array(
            'name' => 'Locations',
            'singular_name' => 'Location',
        ),
        'public' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'location',
        'graphql_plural_name' => 'locations',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-location-alt',
    ));
    
    // Services Post Type  
    register_post_type('diensten', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service',
        ),
        'public' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'dienst',
        'graphql_plural_name' => 'diensten',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-hammer',
    ));
}
add_action('init', 'create_tbgs_post_types');

// Auto-revalidation webhook
function trigger_nextjs_revalidation($post_id) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish') return;
    
    $revalidate_url = 'https://www.tbgs.nl/api/revalidate';
    $secret = 'tbgs-secret-2024'; // Change this!
    
    $paths = [];
    $country = get_field('country', $post_id);
    $city = get_field('city', $post_id);
    
    if ($country && $city) {
        $city_slug = sanitize_title($city);
        if ($country === 'nl') {
            $paths[] = "/nl/{$city_slug}";
        } else {
            $paths[] = "/be/locaties/{$city_slug}";
        }
    }
    
    if (!empty($paths)) {
        wp_remote_post($revalidate_url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'x-webhook-secret' => $secret,
            ),
            'body' => json_encode(array('paths' => $paths)),
        ));
    }
}
add_action('save_post', 'trigger_nextjs_revalidation');
```

### 3. Setup Custom Fields (ACF)

**Method A: Quick Setup**
1. **Custom Fields → Field Groups → Add New**
2. **Title**: "Location Fields"
3. **Add these fields**:
   - `country` (Select: nl, be)
   - `city` (Text)
   - `specialist` (Select: totaal-dak-specialist, totaal-schoorsteen-specialist, totaal-onderhoud-specialist, totaal-bouw-specialist)
   - `intro` (Textarea)
   - `body` (WYSIWYG Editor)
   - `faq` (Repeater: question/answer)
   - `latitude` (Number)
   - `longitude` (Number)
4. **Location Rules**: Post Type equals "locations"
5. **Publish**

**Method B: Import Configuration**
- Use the `acf-fields-export.json` file I created for automatic setup

### 4. Environment Configuration

**Update your `.env` file:**
```bash
# Local development
WORDPRESS_API_URL=http://localhost:8080/graphql
REVALIDATE_SECRET=tbgs-secret-2024
ENABLE_WP_SYNC=true

# Production (when ready)
# WORDPRESS_API_URL=https://cms.tbgs.nl/graphql
# REVALIDATE_SECRET=your-secure-production-key
```

### 5. Test the Connection

**Test GraphQL Endpoint:**
1. **Go to**: WordPress Admin → GraphQL → GraphiQL IDE
2. **Run test query**:
```graphql
query TestQuery {
  locations {
    nodes {
      title
      content
    }
  }
}
```
3. **Should return**: JSON response (even if empty)

### 6. Create Your First Content

**Create a test location:**
1. **Go to**: Locations → Add New
2. **Title**: "Test TBGS Eindhoven"
3. **Content**: "This is test content from WordPress"
4. **ACF Fields**:
   - Country: nl
   - City: eindhoven
   - Intro: "Test intro from WordPress admin"
5. **Publish**

**Test on website:**
- Visit: `http://localhost:3000/nl/eindhoven`
- Should show WordPress content instead of static content

## 📊 Content Migration Strategy

### Current Pages to Migrate:

**NL Locations (7 cities):**
- Eindhoven, Nuenen, Veldhoven, Best, Geldrop, Mierlo, Waalre

**BE Locations (4 cities):**
- Lommel, Hamont-Achel, Pelt, Retie

**Specialist Pages (44 total):**
- Each location × 4 specialists = location-specific service pages

### Migration Process:

1. **Create Location Hub Pages** (11 total):
   - Copy existing hero text → ACF "intro" field
   - Copy main content → WordPress editor
   - Add FAQ content → ACF "faq" repeater

2. **Create Specialist × Location Pages** (44 total):
   - Copy specialist-specific content
   - Set specialist field (totaal-dak-specialist, etc.)
   - Add location coordinates for SEO schema

3. **Create Knowledge Base** (new):
   - Convert existing articles → WordPress Posts
   - Add categories: Dakonderhoud, Schoorsteenservice, etc.
   - SEO optimize with focus keywords

## 🔧 WordPress Admin Management

### Daily Content Editing:
- **Edit any page text**: Locations → Edit → Change content → Update
- **Update FAQ**: Edit location → ACF FAQ section → Add/edit questions
- **Upload images**: Media → Add New → Upload files
- **SEO optimization**: Edit post → RankMath section → Update title/description

### Auto-Sync Features:
- **Instant updates**: Changes in WordPress appear on website immediately
- **Smart fallbacks**: Site stays online even if WordPress is down
- **SEO preservation**: All URLs and structure remain the same

## 🚨 Important Setup Notes

### Security:
1. **Change revalidation secret** in functions.php and .env
2. **Strong WordPress admin password**
3. **Install security plugin** (Wordfence recommended)
4. **Regular backups** (UpdraftPlus plugin)

### Performance:
- **ISR caching**: Pages load fast with automatic cache updates
- **Fallback system**: Static content if WordPress unavailable
- **Optimized images**: Use WordPress Media Library compression

### SEO Preservation:
- **All existing URLs work exactly the same**
- **Meta descriptions editable via RankMath**
- **Schema markup automatically generated**
- **Local business data from ACF fields**

## 🎯 What You Can Now Edit via WordPress Admin

✅ **All page titles and headlines**  
✅ **Hero section intro text**  
✅ **Main page content and descriptions**  
✅ **FAQ sections with unlimited questions**  
✅ **Images and photo galleries**  
✅ **SEO titles and meta descriptions**  
✅ **Service descriptions and features**  
✅ **Contact information and addresses**  
✅ **Blog articles and knowledge base**  

## 📱 Admin Access URLs

**Local Development:**
- WordPress Admin: http://localhost:8080/wp-admin/
- GraphQL IDE: http://localhost:8080/wp-admin/admin.php?page=graphiql-ide

**Production:**
- WordPress Admin: https://cms.tbgs.nl/wp-admin/
- GraphQL IDE: https://cms.tbgs.nl/wp-admin/admin.php?page=graphiql-ide

## 🔄 Content Sync Admin Panel

I've also created an admin interface at `/admin/sync` for monitoring the WordPress integration:

- **Connection status** monitoring
- **Content sync** progress tracking
- **Direct links** to WordPress admin
- **Migration tools** and guides

## ✅ Verification Checklist

- [ ] WordPress installed with required plugins
- [ ] Custom post types added to functions.php
- [ ] ACF fields configured for locations
- [ ] Environment variables set correctly
- [ ] Test location created in WordPress
- [ ] Website loads WordPress content
- [ ] Revalidation webhook working
- [ ] Admin access secured with strong password

This headless setup gives you complete control over all website content through the familiar WordPress admin interface, while maintaining the fast performance and SEO benefits of the Next.js frontend!