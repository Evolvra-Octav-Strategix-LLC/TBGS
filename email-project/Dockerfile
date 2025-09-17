# Multi-stage build for TBGS Email Service
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

# Install curl for health checks and tini for process management
RUN apk add --no-cache curl tini

# Create user for security
RUN addgroup -g 1001 -S tbgs && \
    adduser -S tbgs -u 1001

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app .

# Set permissions
RUN chown -R tbgs:tbgs /app

# Switch to non-root user
USER tbgs

# Expose port
EXPOSE 3000

# Robust health check using curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application
CMD ["npm", "start"]