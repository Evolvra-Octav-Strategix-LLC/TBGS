#!/bin/bash

# TBGS WordPress Headless Setup - Automated SSH Script
# Usage: bash SSH-AUTOMATED-SETUP.sh [domain] [db_password]

set -e

# Configuration
DOMAIN=${1:-"cms.tbgs.nl"}
DB_PASSWORD=${2:-"$(openssl rand -base64 32)"}
WP_ADMIN_USER="admin"
WP_ADMIN_PASS="$(openssl rand -base64 16)"
WP_ADMIN_EMAIL="admin@tbgs.nl"

echo "================================================"
echo "TBGS WordPress Headless Setup"
echo "================================================"
echo "Domain: $DOMAIN"
echo "Admin User: $WP_ADMIN_USER"
echo "Admin Pass: $WP_ADMIN_PASS"
echo "Database Password: $DB_PASSWORD"
echo "================================================"

# Update system
echo "Updating system packages..."
apt update && apt upgrade -y

# Install LAMP stack
echo "Installing Apache, MySQL, PHP..."
apt install -y apache2 mysql-server software-properties-common

# Add PHP 8.1 repository
add-apt-repository ppa:ondrej/php -y
apt update

# Install PHP and extensions
apt install -y php8.1 php8.1-mysql php8.1-curl php8.1-gd php8.1-mbstring \
  php8.1-xml php8.1-zip php8.1-soap php8.1-intl php8.1-bcmath libapache2-mod-php8.1

# Enable Apache modules
a2enmod rewrite headers ssl

# Start services
systemctl enable apache2 mysql
systemctl start apache2 mysql

# Secure MySQL installation (automated)
echo "Securing MySQL installation..."
mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '$DB_PASSWORD';"
mysql -u root -p"$DB_PASSWORD" -e "DELETE FROM mysql.user WHERE User='';"
mysql -u root -p"$DB_PASSWORD" -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');"
mysql -u root -p"$DB_PASSWORD" -e "DROP DATABASE IF EXISTS test;"
mysql -u root -p"$DB_PASSWORD" -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';"
mysql -u root -p"$DB_PASSWORD" -e "FLUSH PRIVILEGES;"

# Create WordPress database and user
echo "Creating WordPress database..."
mysql -u root -p"$DB_PASSWORD" -e "CREATE DATABASE tbgs_wordpress;"
mysql -u root -p"$DB_PASSWORD" -e "CREATE USER 'tbgs_wp'@'localhost' IDENTIFIED BY '$DB_PASSWORD';"
mysql -u root -p"$DB_PASSWORD" -e "GRANT ALL PRIVILEGES ON tbgs_wordpress.* TO 'tbgs_wp'@'localhost';"
mysql -u root -p"$DB_PASSWORD" -e "FLUSH PRIVILEGES;"

# Create Apache virtual host
echo "Configuring Apache virtual host..."
cat > /etc/apache2/sites-available/$DOMAIN.conf << EOF
<VirtualHost *:80>
    ServerName $DOMAIN
    DocumentRoot /var/www/$DOMAIN
    
    <Directory /var/www/$DOMAIN>
        AllowOverride All
        Require all granted
    </Directory>
    
    # CORS headers for TBGS frontend
    Header add Access-Control-Allow-Origin "https://www.tbgs.nl"
    Header add Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header add Access-Control-Allow-Headers "Content-Type"
    
    ErrorLog \${APACHE_LOG_DIR}/${DOMAIN}_error.log
    CustomLog \${APACHE_LOG_DIR}/${DOMAIN}_access.log combined
</VirtualHost>
EOF

# Enable site
a2ensite $DOMAIN.conf
a2dissite 000-default.conf
systemctl reload apache2

# Create WordPress directory
echo "Setting up WordPress..."
mkdir -p /var/www/$DOMAIN
cd /var/www/$DOMAIN

# Download and extract WordPress
wget -q https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz --strip-components=1
rm latest.tar.gz

# Generate WordPress salts
SALTS=$(curl -s https://api.wordpress.org/secret-key/1.1/salt/)

# Create wp-config.php
cat > wp-config.php << EOF
<?php
define('DB_NAME', 'tbgs_wordpress');
define('DB_USER', 'tbgs_wp');
define('DB_PASSWORD', '$DB_PASSWORD');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8mb4');
define('DB_COLLATE', '');

$SALTS

\$table_prefix = 'tbgs_';

define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);
define('DISALLOW_FILE_EDIT', true);
define('WP_POST_REVISIONS', 5);

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
EOF

# Set permissions
chown -R www-data:www-data /var/www/$DOMAIN
find /var/www/$DOMAIN -type d -exec chmod 755 {} \;
find /var/www/$DOMAIN -type f -exec chmod 644 {} \;
chmod 600 /var/www/$DOMAIN/wp-config.php

# Install Certbot for SSL
echo "Installing SSL certificate..."
apt install -y certbot python3-certbot-apache

# Get SSL certificate (if domain is properly configured)
if certbot --apache -d $DOMAIN --non-interactive --agree-tos --email $WP_ADMIN_EMAIL; then
    echo "SSL certificate installed successfully"
else
    echo "SSL installation failed - continuing with HTTP"
fi

# Install WP-CLI
echo "Installing WP-CLI..."
curl -O https://raw.githubusercontent.com/wp-cli/wp-cli/main/phar/wp-cli.phar
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

# Install WordPress core
echo "Installing WordPress core..."
cd /var/www/$DOMAIN
wp core install --url="https://$DOMAIN" --title="TBGS CMS" --admin_user="$WP_ADMIN_USER" \
  --admin_password="$WP_ADMIN_PASS" --admin_email="$WP_ADMIN_EMAIL" --allow-root

# Install required plugins
echo "Installing WordPress plugins..."
wp plugin install wp-graphql --activate --allow-root
wp plugin install advanced-custom-fields --activate --allow-root
wp plugin install https://github.com/wp-graphql/wp-graphql-acf/archive/master.zip --activate --allow-root
wp plugin install seo-by-rank-math --activate --allow-root
wp plugin install wordfence --activate --allow-root

# Add custom post types and functions
echo "Adding custom post types..."
THEME_DIR=$(wp theme path --allow-root)
ACTIVE_THEME=$(wp theme list --status=active --field=name --allow-root)

cat >> "${THEME_DIR}/${ACTIVE_THEME}/functions.php" << 'EOF'

// TBGS Custom Post Types
function create_tbgs_post_types() {
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
            'choices' => array('nl' => 'Netherlands', 'be' => 'Belgium'),
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
EOF

# Create sample content
echo "Creating sample content..."
wp post create --post_type=locations --post_status=publish \
  --post_title="Test TBGS Eindhoven" \
  --post_content="<h2>Welkom bij TBGS Eindhoven</h2><p>Complete bouwdienstverlening in Eindhoven door lokale vakmannen.</p>" \
  --allow-root

POST_ID=$(wp post list --post_type=locations --format=ids --allow-root | head -1)
wp post meta add $POST_ID country "nl" --allow-root
wp post meta add $POST_ID city "eindhoven" --allow-root
wp post meta add $POST_ID intro "Complete bouwdienstverlening in Eindhoven door lokale vakmannen." --allow-root
wp post meta add $POST_ID latitude "51.4416" --allow-root
wp post meta add $POST_ID longitude "5.4697" --allow-root

# Setup automated backups
echo "Setting up automated backups..."
mkdir -p /root/backups/wordpress

cat > /usr/local/bin/backup-tbgs-wp.sh << EOF
#!/bin/bash
BACKUP_DIR="/root/backups/wordpress"
DATE=\$(date +"%Y%m%d_%H%M%S")
mysqldump -u tbgs_wp -p$DB_PASSWORD tbgs_wordpress > \$BACKUP_DIR/database_\$DATE.sql
tar -czf \$BACKUP_DIR/files_\$DATE.tar.gz /var/www/$DOMAIN
find \$BACKUP_DIR -type f -mtime +7 -delete
EOF

chmod +x /usr/local/bin/backup-tbgs-wp.sh
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-tbgs-wp.sh") | crontab -

# Create security .htaccess
cat > /var/www/$DOMAIN/.htaccess << 'EOF'
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

# Test GraphQL endpoint
echo "Testing GraphQL endpoint..."
sleep 5
if curl -s -X POST https://$DOMAIN/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"query { generalSettings { title url } }"}' | grep -q "TBGS CMS"; then
    echo "✅ GraphQL endpoint is working!"
else
    echo "⚠️  GraphQL endpoint test failed - check manually"
fi

echo "================================================"
echo "✅ TBGS WordPress Headless Setup Complete!"
echo "================================================"
echo "WordPress Admin: https://$DOMAIN/wp-admin/"
echo "Username: $WP_ADMIN_USER"
echo "Password: $WP_ADMIN_PASS"
echo "GraphQL Endpoint: https://$DOMAIN/graphql"
echo "GraphQL IDE: https://$DOMAIN/wp-admin/admin.php?page=graphiql-ide"
echo ""
echo "Next.js Environment Variables:"
echo "WORDPRESS_API_URL=https://$DOMAIN/graphql"
echo "REVALIDATE_SECRET=tbgs-secret-2024"
echo "ENABLE_WP_SYNC=true"
echo "================================================"

# Save credentials to file
cat > /root/tbgs-wordpress-credentials.txt << EOF
TBGS WordPress Setup - $(date)
Domain: $DOMAIN
WordPress Admin: https://$DOMAIN/wp-admin/
Username: $WP_ADMIN_USER
Password: $WP_ADMIN_PASS
Database Password: $DB_PASSWORD
GraphQL Endpoint: https://$DOMAIN/graphql
EOF

echo "Credentials saved to: /root/tbgs-wordpress-credentials.txt"