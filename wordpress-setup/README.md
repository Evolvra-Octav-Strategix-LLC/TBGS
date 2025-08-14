# WordPress Headless Setup for TBGS

## 1. WordPress Installation

### Option A: Quick Setup on Managed Hosting
1. **Kinsta/WP Engine/SiteGround**: Install WordPress on `cms.tbgs.nl`
2. **Cloudways**: WordPress + Cloudflare setup
3. **Local Development**: Use LocalWP or XAMPP

### Option B: Manual Installation
1. Download WordPress from wordpress.org
2. Upload to your hosting at `cms.tbgs.nl`
3. Create MySQL database
4. Run WordPress installation

## 2. Required Plugins

Install these plugins in WordPress admin:

```
1. WPGraphQL (Free) - GraphQL API endpoint
2. WPGraphQL for Advanced Custom Fields (Free) - ACF integration
3. Advanced Custom Fields Pro (Paid) - Custom fields management
4. RankMath or Yoast SEO (Free/Paid) - SEO optimization
5. WP Webhooks (Free) - Revalidation triggers
6. Disable XML-RPC (Free) - Security
```

## 3. WordPress Admin Access

After installation, access WordPress at:
- **Admin URL**: `https://cms.tbgs.nl/wp-admin/`
- **Username**: Create during installation
- **Password**: Create during installation

## 4. GraphQL Endpoint

After installing WPGraphQL plugin:
- **GraphQL URL**: `https://cms.tbgs.nl/graphql`
- **GraphiQL IDE**: `https://cms.tbgs.nl/wp-admin/admin.php?page=graphiql-ide`

## 5. Environment Variables

Add to your `.env` file:
```
WORDPRESS_API_URL=https://cms.tbgs.nl/graphql
REVALIDATE_SECRET=your-secret-key-here
```

## 6. Security Configuration

1. **Strong admin password**
2. **2FA plugin** (Wordfence or similar)
3. **Firewall rules** - Only allow your domains
4. **CORS headers** for `tbgs.nl` domain only
5. **Regular backups**

## 7. Content Migration Strategy

All existing page content will be migrated to WordPress custom post types with ACF fields for easy editing.