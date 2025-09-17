# TBGS Email Service PHP - Docker Configuration
# Optimized for production deployment on Dokploy
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    git \
    unzip \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        gd \
        pdo \
        pdo_mysql \
        mysqli \
        zip \
        mbstring \
        xml \
        curl \
        fileinfo \
        exif \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configure Apache
RUN a2enmod rewrite headers
COPY .htaccess /var/www/html/.htaccess

# Set proper permissions for Apache
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Create necessary directories
RUN mkdir -p /var/www/html/uploads \
             /var/www/html/processed \
             /var/www/html/templates \
    && chown -R www-data:www-data /var/www/html/uploads \
                                   /var/www/html/processed \
                                   /var/www/html/templates \
    && chmod -R 775 /var/www/html/uploads \
                    /var/www/html/processed

# Copy application files
COPY composer.json composer.lock* ./
RUN composer install --no-dev --optimize-autoloader --no-interaction

COPY . .

# Set final permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 775 /var/www/html/uploads /var/www/html/processed

# Configure PHP for production
RUN echo "upload_max_filesize = 25M" > /usr/local/etc/php/conf.d/uploads.ini \
    && echo "post_max_size = 100M" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "max_execution_time = 300" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "memory_limit = 256M" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "display_errors = Off" >> /usr/local/etc/php/conf.d/uploads.ini \
    && echo "log_errors = On" >> /usr/local/etc/php/conf.d/uploads.ini

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/api/health || exit 1

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]