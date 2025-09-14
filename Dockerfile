# Multi-stage build for TBGS application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev deps for building)
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build the application - Split frontend and backend builds
RUN npx vite build && \
    mkdir -p dist && \
    cp -r server shared dist/ && \
    npx esbuild server/production.ts \
        --platform=node \
        --format=esm \
        --outdir=dist/server \
        --out-extension:.js=.js

# Production stage
FROM node:20-alpine AS production

# Install tini and create user
RUN apk add --no-cache tini && \
    addgroup -g 1001 -S tbgs && \
    adduser -S tbgs -u 1001

# Set working directory
WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/shared ./shared

# Create uploads directory and set permissions
RUN mkdir -p uploads && chown -R tbgs:tbgs /app

# Switch to non-root user
USER tbgs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Start the application
CMD ["node", "dist/server/production.js"]