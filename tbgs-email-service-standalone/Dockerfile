# Multi-stage build for TBGS Email Service Enhanced
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --omit=dev && npm cache clean --force

# Copy application files
COPY . .

# Production stage
FROM node:20-alpine AS production

# Install system dependencies including ffmpeg for file processing
RUN apk add --no-cache \
    curl \
    tini \
    ffmpeg \
    imagemagick \
    imagemagick-dev \
    libwebp-tools \
    && rm -rf /var/cache/apk/*

# Verify ffmpeg installation
RUN ffmpeg -version

# Create user for security
RUN addgroup -g 1001 -S tbgs && \
    adduser -S tbgs -u 1001

# Set working directory
WORKDIR /app

# Create required directories
RUN mkdir -p uploads processed templates && \
    chown -R tbgs:tbgs /app

# Copy built application from builder stage
COPY --from=builder --chown=tbgs:tbgs /app .

# Create .env template for environment variables
RUN echo "# TBGS Email Service Enhanced - Environment Variables" > .env.example && \
    echo "PORT=3000" >> .env.example && \
    echo "SMTP_HOST=smtp.gmail.com" >> .env.example && \
    echo "SMTP_PORT=587" >> .env.example && \
    echo "SMTP_USER=your-email@gmail.com" >> .env.example && \
    echo "SMTP_PASS=your-app-password" >> .env.example && \
    echo "CONTACT_RECEIVER=admin@tbgs.nl" >> .env.example && \
    echo "CORS_ORIGINS=https://tbgs.nl,https://api.evolvra.ai" >> .env.example && \
    echo "FFMPEG_PATH=/usr/bin/ffmpeg" >> .env.example && \
    chown tbgs:tbgs .env.example

# Switch to non-root user
USER tbgs

# Expose port
EXPOSE 3000

# Enhanced health check that verifies ffmpeg availability
HEALTHCHECK --interval=30s --timeout=15s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application
CMD ["npm", "start"]

# Labels for better container management
LABEL maintainer="TBGS B.V. <info@tbgs.nl>"
LABEL version="2.0.0"
LABEL description="TBGS Email Service Enhanced with ffmpeg processing"
LABEL org.opencontainers.image.title="TBGS Email Service Enhanced"
LABEL org.opencontainers.image.description="Standalone email service with multipart upload and ffmpeg file processing"
LABEL org.opencontainers.image.version="2.0.0"
LABEL org.opencontainers.image.vendor="TBGS B.V."
LABEL org.opencontainers.image.authors="TBGS Development Team"