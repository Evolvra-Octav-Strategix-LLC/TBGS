#!/bin/sh
# PostgreSQL initialization script for TBGS Docker setup
# Creates separate databases and users for TBGS and Nextcloud
# This script properly handles environment variable expansion

set -e  # Exit on any error

echo "🚀 Starting PostgreSQL database initialization..."

# Validate required environment variables
if [ -z "$NEXTCLOUD_DB_USER" ]; then
    echo "❌ Error: NEXTCLOUD_DB_USER environment variable is not set"
    exit 1
fi

if [ -z "$NEXTCLOUD_DB_PASSWORD" ]; then
    echo "❌ Error: NEXTCLOUD_DB_PASSWORD environment variable is not set"
    exit 1
fi

if [ -z "$POSTGRES_DB" ]; then
    echo "❌ Error: POSTGRES_DB environment variable is not set"
    exit 1
fi

echo "✅ Environment variables validated"

# Function to run SQL commands with proper error handling
run_sql() {
    sql_command="$1"
    description="$2"
    
    echo "📝 $description"
    
    if psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "$sql_command"; then
        echo "✅ $description completed successfully"
    else
        echo "❌ $description failed"
        exit 1
    fi
}

# Create nextcloud user if it doesn't exist
echo "🔍 Checking if Nextcloud user exists..."
USER_EXISTS=$(psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -tAc "SELECT 1 FROM pg_catalog.pg_roles WHERE rolname='$NEXTCLOUD_DB_USER';" || echo "")

if [ -z "$USER_EXISTS" ]; then
    run_sql "CREATE USER \"$NEXTCLOUD_DB_USER\" WITH PASSWORD '$NEXTCLOUD_DB_PASSWORD';" "Creating Nextcloud user"
else
    echo "✅ Nextcloud user already exists, skipping creation"
fi

# Create nextcloud database if it doesn't exist
echo "🔍 Checking if Nextcloud database exists..."
DB_EXISTS=$(psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -tAc "SELECT 1 FROM pg_database WHERE datname='nextcloud';" || echo "")

if [ -z "$DB_EXISTS" ]; then
    run_sql "CREATE DATABASE nextcloud OWNER \"$NEXTCLOUD_DB_USER\";" "Creating Nextcloud database"
else
    echo "✅ Nextcloud database already exists, skipping creation"
fi

# Grant all privileges on the nextcloud database
run_sql "GRANT ALL PRIVILEGES ON DATABASE nextcloud TO \"$NEXTCLOUD_DB_USER\";" "Granting privileges on Nextcloud database"

# Connect to nextcloud database and grant schema permissions
echo "📝 Setting up Nextcloud database schema permissions..."
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "nextcloud" << EOF
GRANT ALL ON SCHEMA public TO "$NEXTCLOUD_DB_USER";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "$NEXTCLOUD_DB_USER";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "$NEXTCLOUD_DB_USER";
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO "$NEXTCLOUD_DB_USER";
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO "$NEXTCLOUD_DB_USER";
EOF

echo "✅ Nextcloud database schema permissions configured"

echo "🎉 PostgreSQL initialization completed successfully!"
echo "📊 Database summary:"
echo "   - Main database: $POSTGRES_DB"
echo "   - Nextcloud database: nextcloud"
echo "   - Nextcloud user: $NEXTCLOUD_DB_USER"