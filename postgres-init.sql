-- PostgreSQL initialization script for TBGS Docker setup
-- Creates separate databases and users for TBGS and Nextcloud

-- Create nextcloud user and database
CREATE USER nextcloud_user WITH PASSWORD 'NextcloudSecure2024!';
CREATE DATABASE nextcloud OWNER nextcloud_user;
GRANT ALL PRIVILEGES ON DATABASE nextcloud TO nextcloud_user;

-- Grant permissions for nextcloud user
\c nextcloud;
GRANT ALL ON SCHEMA public TO nextcloud_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO nextcloud_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO nextcloud_user;

-- Switch back to main database
\c tbgs_production;

-- Add any additional TBGS-specific setup here if needed
-- (Drizzle will handle table creation)