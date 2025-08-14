# SSH WordPress Headless Setup for TBGS

## Prerequisites
- SSH access to your server
- Domain: `cms.tbgs.nl` pointing to your server
- Root or sudo access
- Ubuntu/Debian server (adjust commands for CentOS/RHEL)

## Step 1: Connect via SSH
```bash
ssh root@your-server-ip
# or
ssh username@your-server-ip
```

## Step 2: Install LAMP Stack

### Update System
```bash
apt update && apt upgrade -y
```

### Install Apache, MySQL, PHP
```bash
# Install Apache
apt install apache2 -y
systemctl enable apache2
systemctl start apache2

# Install MySQL
apt install mysql-server -y
systemctl enable mysql
systemctl start mysql

# Secure MySQL
mysql_secure_installation

# Install PHP 8.1
apt install software-properties-common -y
add-apt-repository ppa:ondrej/php -y
apt update
apt install php8.1 php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring php8.1-xml php8.1-zip php8.1-soap php8.1-intl php8.1-bcmath -y
```

### Configure Apache
```bash
# Enable mod_rewrite
a2enmod rewrite
a2enmod headers

# Create virtual host
cat > /etc/apache2/sites-available/cms.tbgs.nl.conf << 'EOF'
<VirtualHost *:80>
    ServerName cms.tbgs.nl
    DocumentRoot /var/www/cms.tbgs.nl
    
    <Directory /var/www/cms.tbgs.nl>
        AllowOverride All
        Require all granted
    </Directory>
    
    # CORS headers for TBGS frontend
    Header add Access-Control-Allow-Origin "https://www.tbgs.nl"
    Header add Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header add Access-Control-Allow-Headers "Content-Type"
    
    ErrorLog ${APACHE_LOG_DIR}/cms.tbgs.nl_error.log
    CustomLog ${APACHE_LOG_DIR}/cms.tbgs.nl_access.log combined
</VirtualHost>
EOF

# Enable site
a2ensite cms.tbgs.nl.conf
a2dissite 000-default.conf
systemctl reload apache2
```

## Step 3: Create WordPress Database

```bash
# Login to MySQL
mysql -u root -p

# In MySQL prompt:
CREATE DATABASE tbgs_wordpress;
CREATE USER 'tbgs_wp'@'localhost' IDENTIFIED BY 'secure_password_here';
GRANT ALL PRIVILEGES ON tbgs_wordpress.* TO 'tbgs_wp'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Step 4: Download and Install WordPress

```bash
# Create directory
mkdir -p /var/www/cms.tbgs.nl
cd /var/www/cms.tbgs.nl

# Download WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz --strip-components=1
rm latest.tar.gz

# Set permissions
chown -R www-data:www-data /var/www/cms.tbgs.nl
find /var/www/cms.tbgs.nl -type d -exec chmod 755 {} \;
find /var/www/cms.tbgs.nl -type f -exec chmod 644 {} \;

# Create wp-config.php
cp wp-config-sample.php wp-config.php
```

### Configure WordPress
```bash
# Generate WordPress salts
SALTS=$(curl -s https://api.wordpress.org/secret-key/1.1/salt/)

# Edit wp-config.php
cat > wp-config.php << EOF
<?php
define('DB_NAME', 'tbgs_wordpress');
define('DB_USER', 'tbgs_wp');
define('DB_PASSWORD', 'secure_password_here');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

$SALTS

\$table_prefix = 'tbgs_';

define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

// Headless WordPress optimizations
define('DISALLOW_FILE_EDIT', true);
define('WP_POST_REVISIONS', 5);

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
EOF
```

## Step 5: Install SSL Certificate

```bash
# Install Certbot
apt install certbot python3-certbot-apache -y

# Get SSL certificate
certbot --apache -d cms.tbgs.nl

# Verify auto-renewal
certbot renew --dry-run
```

## Step 6: Complete WordPress Installation

```bash
# Visit https://cms.tbgs.nl in browser to complete setup
echo "Visit https://cms.tbgs.nl to complete WordPress installation"
echo "Use these settings:"
echo "- Site Title: TBGS CMS"
echo "- Username: admin"
echo "- Password: [generate strong password]"
echo "- Email: your-email@domain.com"
```

## Step 7: Install Required Plugins via SSH

```bash
# Install WP-CLI
curl -O https://raw.githubusercontent.com/wp-cli/wp-cli/main/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

# Navigate to WordPress directory
cd /var/www/cms.tbgs.nl

# Install plugins
wp plugin install wp-graphql --activate --allow-root
wp plugin install advanced-custom-fields --activate --allow-root
wp plugin install https://github.com/wp-graphql/wp-graphql-acf/archive/master.zip --activate --allow-root
wp plugin install seo-by-rank-math --activate --allow-root

# Update WordPress core and plugins
wp core update --allow-root
wp plugin update --all --allow-root
```

## Step 8: Add Custom Post Types via SSH

```bash
# Create functions.php additions
cat > /tmp/tbgs-functions.php << 'EOF'
<?php
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

// Auto-revalidation webhook
function trigger_nextjs_revalidation($post_id) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish') return;
    
    $revalidate_url = 'https://www.tbgs.nl/api/revalidate';
    $secret = 'tbgs-secret-2024';
    
    $paths = [];
    $country = get_field('country', $post_id);
    $city = get_field('city', $post_id);
    $specialist = get_field('specialist', $post_id);
    
    if ($country && $city) {
        $city_slug = sanitize_title($city);
        if ($country === 'nl') {
            $paths[] = "/nl/{$city_slug}";
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
?>
EOF

# Add to active theme's functions.php
THEME_DIR=$(wp theme path --allow-root)
ACTIVE_THEME=$(wp theme list --status=active --field=name --allow-root)
cat /tmp/tbgs-functions.php >> "${THEME_DIR}/${ACTIVE_THEME}/functions.php"

# Clean up
rm /tmp/tbgs-functions.php
```

## Step 9: Configure ACF Fields via WP-CLI

```bash
# Create ACF field groups via PHP
cat > /tmp/acf-fields.php << 'EOF'
<?php
// ACF Location Fields
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
    'key' => 'group_locations',
    'title' => 'Location Fields',
    'fields' => array(
        array(
            'key' => 'field_country',
            'label' => 'Country',
            'name' => 'country',
            'type' => 'select',
            'choices' => array(
                'nl' => 'Netherlands',
                'be' => 'Belgium',
            ),
            'required' => 1,
        ),
        array(
            'key' => 'field_city',
            'label' => 'City',
            'name' => 'city',
            'type' => 'text',
            'required' => 1,
        ),
        array(
            'key' => 'field_specialist',
            'label' => 'Specialist Type',
            'name' => 'specialist',
            'type' => 'select',
            'choices' => array(
                'totaal-dak-specialist' => 'Totaal Dak Specialist (TDS)',
                'totaal-schoorsteen-specialist' => 'Totaal Schoorsteen Specialist (TSS)',
                'totaal-onderhoud-specialist' => 'Totaal Onderhoud Specialist (TOS)',
                'totaal-bouw-specialist' => 'Totaal Bouw Specialist (TBS)',
            ),
        ),
        array(
            'key' => 'field_intro',
            'label' => 'Introduction Text',
            'name' => 'intro',
            'type' => 'textarea',
        ),
        array(
            'key' => 'field_latitude',
            'label' => 'Latitude',
            'name' => 'latitude',
            'type' => 'number',
            'step' => 'any',
        ),
        array(
            'key' => 'field_longitude',
            'label' => 'Longitude',
            'name' => 'longitude',
            'type' => 'number',
            'step' => 'any',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'locations',
            ),
        ),
    ),
));

endif;
?>
EOF

# Add ACF fields to functions.php
THEME_DIR=$(wp theme path --allow-root)
ACTIVE_THEME=$(wp theme list --status=active --field=name --allow-root)
cat /tmp/acf-fields.php >> "${THEME_DIR}/${ACTIVE_THEME}/functions.php"

rm /tmp/acf-fields.php
```

## Step 10: Test GraphQL Endpoint

```bash
# Test GraphQL endpoint
curl -X POST https://cms.tbgs.nl/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { generalSettings { title url } }"}' | jq

# Should return WordPress site info
```

## Step 11: Create Sample Content via WP-CLI

```bash
# Create sample location
wp post create --post_type=locations --post_status=publish --post_title="Test TBGS Eindhoven" --post_content="This is test content from SSH setup" --allow-root

# Get the post ID
POST_ID=$(wp post list --post_type=locations --format=ids --allow-root | head -1)

# Add ACF meta fields
wp post meta add $POST_ID country "nl" --allow-root
wp post meta add $POST_ID city "eindhoven" --allow-root
wp post meta add $POST_ID intro "Test intro from SSH setup" --allow-root
wp post meta add $POST_ID latitude "51.4416" --allow-root
wp post meta add $POST_ID longitude "5.4697" --allow-root

echo "Sample content created with ID: $POST_ID"
```

## Step 12: Security Hardening

```bash
# Install security plugins
wp plugin install wordfence --activate --allow-root

# Hide WordPress version
echo "remove_action('wp_head', 'wp_generator');" >> "${THEME_DIR}/${ACTIVE_THEME}/functions.php"

# Disable file editing in WordPress admin
wp config set DISALLOW_FILE_EDIT true --allow-root

# Set proper file permissions
find /var/www/cms.tbgs.nl -type f -exec chmod 644 {} \;
find /var/www/cms.tbgs.nl -type d -exec chmod 755 {} \;
chmod 600 /var/www/cms.tbgs.nl/wp-config.php

# Create .htaccess security rules
cat > /var/www/cms.tbgs.nl/.htaccess << 'EOF'
# Security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"

# CORS for TBGS frontend
<IfModule mod_headers.c>
    SetEnvIf Origin "^https?://(www\.)?tbgs\.nl$" AccessControlAllowOrigin=$0
    Header add Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin
    Header merge Vary Origin
</IfModule>

# WordPress security
<Files wp-config.php>
    order allow,deny
    deny from all
</Files>

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
EOF
```

## Step 13: Setup Automated Backups

```bash
# Install backup script
cat > /usr/local/bin/backup-tbgs-wp.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/root/backups/wordpress"
DATE=$(date +"%Y%m%d_%H%M%S")
DB_NAME="tbgs_wordpress"
DB_USER="tbgs_wp"
DB_PASS="secure_password_here"

mkdir -p $BACKUP_DIR

# Backup database
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_DIR/database_$DATE.sql

# Backup files
tar -czf $BACKUP_DIR/files_$DATE.tar.gz /var/www/cms.tbgs.nl

# Keep only last 7 days of backups
find $BACKUP_DIR -type f -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /usr/local/bin/backup-tbgs-wp.sh

# Add to crontab (daily backup at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-tbgs-wp.sh") | crontab -
```

## Step 14: Environment Variables for Next.js

```bash
# Update your .env file with production settings
echo "WORDPRESS_API_URL=https://cms.tbgs.nl/graphql"
echo "REVALIDATE_SECRET=tbgs-secret-2024"
echo "ENABLE_WP_SYNC=true"
```

## Verification Commands

```bash
# Check all services
systemctl status apache2
systemctl status mysql

# Test WordPress installation
curl -I https://cms.tbgs.nl

# Test GraphQL endpoint
curl -X POST https://cms.tbgs.nl/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { posts { nodes { title } } }"}' | jq

# Check logs
tail -f /var/log/apache2/cms.tbgs.nl_error.log
```

## Admin Access

- **WordPress Admin**: https://cms.tbgs.nl/wp-admin/
- **GraphQL IDE**: https://cms.tbgs.nl/wp-admin/admin.php?page=graphiql-ide
- **Server SSH**: `ssh root@your-server-ip`

## Troubleshooting

```bash
# Restart services
systemctl restart apache2
systemctl restart mysql

# Check PHP errors
tail -f /var/log/apache2/error.log

# WordPress debug mode
wp config set WP_DEBUG true --allow-root
wp config set WP_DEBUG_LOG true --allow-root

# Fix permissions
chown -R www-data:www-data /var/www/cms.tbgs.nl
```

This SSH setup gives you complete command-line control over your WordPress headless CMS installation!