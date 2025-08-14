# Local WordPress Test Environment Setup

## Quick Local Setup with Docker

### Prerequisites
- Docker Desktop installed
- Basic terminal/command line knowledge

### 1. Start Local WordPress
```bash
# In your project root directory
docker-compose up -d
```

This starts:
- **WordPress**: http://localhost:8080
- **phpMyAdmin**: http://localhost:8081
- **MySQL Database**: Internal

### 2. WordPress Installation
1. **Open**: http://localhost:8080
2. **Language**: Choose Dutch or English
3. **Database Settings**:
   - Database Name: `wordpress`
   - Username: `wordpress`
   - Password: `wordpress_password`
   - Database Host: `mysql`
   - Table Prefix: `wp_`
4. **Site Info**:
   - Site Title: `TBGS CMS`
   - Username: `admin`
   - Password: `strong-password-here`
   - Email: `your-email@domain.com`
5. **Click**: Install WordPress

### 3. Login to WordPress Admin
- **URL**: http://localhost:8080/wp-admin/
- **Username**: `admin`
- **Password**: Your password from step 2

### 4. Install Required Plugins
Copy these plugin files to `./wordpress-plugins/` folder:

#### Download and Install:
1. **WPGraphQL**: wordpress.org/plugins/wp-graphql/
2. **Advanced Custom Fields**: wordpress.org/plugins/advanced-custom-fields/
3. **WPGraphQL for ACF**: github.com/wp-graphql/wp-graphql-acf

#### Or Install via Admin:
1. **Go to**: Plugins → Add New
2. **Search and Install**:
   - WPGraphQL
   - Advanced Custom Fields
   - WPGraphQL for Advanced Custom Fields
3. **Activate** all plugins

### 5. Add Custom Post Types
1. **Go to**: Appearance → Theme Editor
2. **Select**: functions.php
3. **Add** this code:

```php
// TBGS Custom Post Types for Local Testing
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
```

4. **Click**: Update File

### 6. Setup ACF Fields (Quick Method)
1. **Go to**: Custom Fields → Field Groups → Add New
2. **Title**: "Location Fields"
3. **Add Fields**:
   - `country` (Select: nl, be)
   - `city` (Text)
   - `specialist` (Select: totaal-dak-specialist, totaal-schoorsteen-specialist, etc.)
   - `intro` (Textarea)
   - `body` (WYSIWYG Editor)
4. **Location Rules**: Post Type equals "locations"
5. **Publish**

### 7. Test GraphQL
1. **Go to**: GraphQL → GraphiQL IDE
2. **Test Query**:
```graphql
query TestQuery {
  locations {
    nodes {
      title
      content
      acf {
        country
        city
        intro
      }
    }
  }
}
```

### 8. Update Environment Variables
In your `.env` file:
```
WORDPRESS_API_URL=http://localhost:8080/graphql
REVALIDATE_SECRET=local-test-secret
```

### 9. Create Test Content
1. **Go to**: Locations → Add New
2. **Title**: "Test Eindhoven"
3. **Content**: "This is a test location"
4. **ACF Fields**:
   - Country: nl
   - City: eindhoven
   - Intro: "Test intro text"
5. **Publish**

### 10. Test Next.js Connection
```bash
# Start your Next.js development server
npm run dev

# Visit test page
http://localhost:3000/nl/eindhoven
```

You should see WordPress content instead of static content.

## Managing Local Environment

### Stop WordPress:
```bash
docker-compose down
```

### Start WordPress:
```bash
docker-compose up -d
```

### View Logs:
```bash
docker-compose logs wordpress
```

### Reset Everything:
```bash
docker-compose down -v
docker-compose up -d
```

### Backup Local Data:
```bash
# Export WordPress data
docker exec tbgs-mysql mysqldump -u wordpress -pwordpress_password wordpress > backup.sql

# Restore data
docker exec -i tbgs-mysql mysql -u wordpress -pwordpress_password wordpress < backup.sql
```

## File Structure After Setup
```
project/
├── docker-compose.yml
├── wordpress-uploads/     # WordPress media files
├── wordpress-plugins/     # Custom plugins
├── wordpress-themes/      # Custom themes
├── .env                   # Environment variables
└── app/                   # Next.js app
```

## Troubleshooting

### WordPress Won't Start:
- Check Docker Desktop is running
- Ensure ports 8080, 8081 are available
- Run `docker-compose logs` for errors

### GraphQL Not Working:
- Check WPGraphQL plugin is activated
- Go to Settings → Permalinks → Save Changes
- Test at http://localhost:8080/graphql

### Connection Errors:
- Verify `WORDPRESS_API_URL` in `.env`
- Check firewall/antivirus blocking Docker
- Restart Docker Desktop

This local setup lets you test all WordPress features before going live!