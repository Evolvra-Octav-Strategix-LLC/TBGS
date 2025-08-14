# Complete WordPress Setup Guide for TBGS Headless CMS

## Step 1: WordPress Installation Options

### Option A: Local Development (Recommended for Testing)
1. **Download LocalWP** (free): https://localwp.com/
2. **Install and Create Site**:
   - Site Name: `tbgs-cms`
   - Username: `admin`
   - Password: `your-secure-password`
   - Local URL: `http://tbgs-cms.local`

3. **Enable HTTPS** (for GraphQL):
   - In LocalWP: Site → Overview → Enable SSL
   - New URL: `https://tbgs-cms.local`

### Option B: Managed Hosting (Production)
1. **Kinsta** (Recommended):
   - Go to kinsta.com → Create Account
   - Add Site → WordPress → Install
   - Choose subdomain: `cms.tbgs.nl`

2. **SiteGround**:
   - Go to siteground.com → Web Hosting
   - Install WordPress on `cms.tbgs.nl`

3. **WP Engine**:
   - Go to wpengine.com → Managed WordPress
   - Install on `cms.tbgs.nl`

## Step 2: WordPress Admin Login

After installation:
- **Local**: https://tbgs-cms.local/wp-admin/
- **Production**: https://cms.tbgs.nl/wp-admin/
- **Username**: Your admin username
- **Password**: Your admin password

## Step 3: Install Required Plugins

Login to WordPress Admin → Plugins → Add New:

### Essential Plugins (Install in Order):
1. **WPGraphQL** (Free)
   - Search "WPGraphQL" → Install → Activate
   - Adds GraphQL endpoint at `/graphql`

2. **Advanced Custom Fields (ACF)** (Free/Pro)
   - Search "Advanced Custom Fields" → Install → Activate
   - For Pro features: Upload ACF Pro zip file

3. **WPGraphQL for Advanced Custom Fields** (Free)
   - Search "WPGraphQL for Advanced Custom Fields" → Install → Activate
   - Connects ACF fields to GraphQL

4. **RankMath SEO** (Free)
   - Search "RankMath" → Install → Activate
   - Complete setup wizard (choose "Blog" setup)

5. **WP Webhooks** (Free)
   - Search "WP Webhooks" → Install → Activate
   - For automatic revalidation triggers

### Security Plugins (Optional but Recommended):
6. **Wordfence Security** (Free)
7. **Disable XML-RPC** (Free)

## Step 4: Configure Custom Post Types

### Method A: Add to functions.php
1. **Go to**: Appearance → Theme Editor → functions.php
2. **Add this code** at the bottom:

```php
// TBGS Custom Post Types
function create_tbgs_post_types() {
    // Locations Post Type
    register_post_type('locations', array(
        'labels' => array(
            'name' => 'Locations',
            'singular_name' => 'Location',
            'add_new' => 'Add Location',
            'edit_item' => 'Edit Location',
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
            'add_new' => 'Add Service',
            'edit_item' => 'Edit Service',
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

// Revalidation Webhook
function trigger_nextjs_revalidation($post_id) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish') return;
    
    $revalidate_url = 'https://www.tbgs.nl/api/revalidate';
    $secret = get_option('nextjs_revalidate_secret', 'tbgs-secret-2024');
    
    $paths = [];
    $country = get_field('country', $post_id);
    $city = get_field('city', $post_id);
    $specialist = get_field('specialist', $post_id);
    
    if ($country && $city) {
        $city_slug = sanitize_title($city);
        if ($country === 'nl') {
            $paths[] = "/nl/{$city_slug}";
            $paths[] = "/nl/locaties/{$city_slug}";
            if ($specialist) $paths[] = "/nl/{$specialist}/{$city_slug}";
        } else {
            $paths[] = "/be/locaties/{$city_slug}";
            if ($specialist) $paths[] = "/be/{$specialist}/{$city_slug}";
        }
    }
    
    if ($post->post_type === 'post') {
        $paths[] = "/kennisbank/{$post->post_name}";
    }
    
    if (!empty($paths)) {
        wp_remote_post($revalidate_url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
                'x-webhook-secret' => $secret,
            ),
            'body' => json_encode(array('paths' => $paths)),
            'timeout' => 10,
        ));
    }
}
add_action('save_post', 'trigger_nextjs_revalidation');
```

3. **Click "Update File"**

## Step 5: Setup Advanced Custom Fields

### Import ACF Fields:
1. **Go to**: Custom Fields → Tools → Import
2. **Upload** the `acf-fields-export.json` file I provided
3. **Click Import**

### Manual Setup (Alternative):
1. **Go to**: Custom Fields → Field Groups → Add New
2. **Create Location Fields Group**:
   - Title: "Location Fields"
   - Fields:
     - Country (Select: nl/be)
     - City (Text)
     - Specialist (Select: TDS/TSS/TOS/TBS)
     - Intro (Textarea)
     - Body (WYSIWYG)
     - FAQ (Repeater: Question/Answer)
     - Images (Gallery)
     - Schema Type (Select)
     - Latitude (Number)
     - Longitude (Number)
   - Location Rules: Post Type = locations

## Step 6: Test GraphQL Connection

1. **Go to**: GraphQL → GraphiQL IDE
2. **Test Query**:
```graphql
query TestConnection {
  posts {
    nodes {
      title
      content
    }
  }
}
```
3. **Should return**: JSON response with posts

## Step 7: Environment Configuration

### Local Development:
Add to your `.env` file:
```
WORDPRESS_API_URL=https://tbgs-cms.local/graphql
REVALIDATE_SECRET=tbgs-secret-2024
```

### Production:
```
WORDPRESS_API_URL=https://cms.tbgs.nl/graphql
REVALIDATE_SECRET=your-secure-secret-key
```

## Step 8: Create Sample Content

### Create First Location:
1. **Go to**: Locations → Add New
2. **Title**: "TBGS Eindhoven"
3. **Content**: Add description
4. **ACF Fields**:
   - Country: nl
   - City: eindhoven
   - Specialist: (leave empty for city hub)
   - Intro: "Welkom bij TBGS Eindhoven..."
   - Body: Add detailed content
   - Latitude: 51.4416
   - Longitude: 5.4697
5. **Publish**

### Create Specialist Location:
1. **Go to**: Locations → Add New
2. **Title**: "Dakdekker Eindhoven"
3. **ACF Fields**:
   - Country: nl
   - City: eindhoven
   - Specialist: totaal-dak-specialist
   - Schema Type: RoofingContractor
5. **Publish**

## Step 9: Verify Integration

### Test in Next.js:
1. **Start your Next.js app**: `npm run dev`
2. **Visit**: http://localhost:3000/nl/eindhoven
3. **Should show**: WordPress content instead of static content
4. **Check**: Browser Network tab shows GraphQL requests

### Test Revalidation:
1. **Edit** a WordPress post
2. **Update/Publish**
3. **Check**: Next.js page updates automatically

## Step 10: Content Migration Process

### Migrate Existing Pages:
For each existing location page:

1. **Create Location Post**:
   - Copy title from static page
   - Copy intro text → ACF Intro field
   - Copy main content → ACF Body field
   - Add images → ACF Images gallery
   - Set country/city/specialist fields
   - Add coordinates for schema

2. **Create FAQ Content**:
   - Add common questions → ACF FAQ repeater
   - Service-specific questions per specialist

3. **Create Knowledge Base**:
   - Convert existing articles → WordPress Posts
   - Add categories: Dakonderhoud, Schoorsteenservice, etc.
   - Add tags for SEO

## Step 11: Security & Backup

### Security Setup:
1. **Strong Admin Password**
2. **Enable 2FA** (Wordfence plugin)
3. **Hide wp-admin** from search engines
4. **Regular updates**

### Backup Setup:
1. **UpdraftPlus** plugin (free)
2. **Daily backups** to Google Drive/Dropbox
3. **Database + files backup**

## Troubleshooting

### GraphQL Not Working:
- Check plugin activation
- Verify permalink structure (Settings → Permalinks → Save)
- Check server PHP version (7.4+)

### CORS Issues:
Add to WordPress `.htaccess`:
```
Header add Access-Control-Allow-Origin "https://www.tbgs.nl"
Header add Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header add Access-Control-Allow-Headers "Content-Type"
```

### Revalidation Not Working:
- Check webhook URL in functions.php
- Verify secret key matches
- Check server logs for errors

## Production Deployment Checklist

- [ ] WordPress installed on `cms.tbgs.nl`
- [ ] All plugins installed and activated
- [ ] Custom post types created
- [ ] ACF fields configured
- [ ] Sample content created
- [ ] GraphQL endpoint working
- [ ] Environment variables set
- [ ] Revalidation webhook working
- [ ] Security plugins configured
- [ ] Backup system setup
- [ ] SSL certificate installed
- [ ] DNS pointing correctly