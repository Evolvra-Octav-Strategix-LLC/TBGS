# Robust multi-stage build for TBGS on Dokploy
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install ALL dependencies (needed for building)
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build frontend and server with proper bundling
RUN npx vite build && \
    npx esbuild server/production.ts \
        --platform=node \
        --bundle \
        --format=esm \
        --packages=external \
        --outfile=dist/index.js

# Production stage
FROM node:20-alpine AS production

# Install curl for health checks and tini for process management
RUN apk add --no-cache curl tini

# Create user for security
RUN addgroup -g 1001 -S tbgs && \
    adduser -S tbgs -u 1001

# Set working directory
WORKDIR /app

# Copy package files and install production dependencies + drizzle-kit
COPY package*.json ./
RUN npm ci --only=production && \
    npm install drizzle-kit && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/shared ./shared
COPY --from=builder /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=builder /app/attached_assets ./attached_assets

# Create uploads directory and set permissions
RUN mkdir -p uploads && chown -R tbgs:tbgs /app

# Switch to non-root user
USER tbgs

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Robust health check using curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application  
CMD ["node", "dist/index.js"]