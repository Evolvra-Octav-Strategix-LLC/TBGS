import express from "express";
import { registerRoutes } from "./routes";
import { log } from "./vite";
import { taskProcessor } from "./taskQueue";

const app = express();

// Middleware with increased limits for webhook endpoints
app.use('/api/email-webhook', express.json({ limit: '50mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

async function startServer() {
  try {
    // Register API routes first
    const server = await registerRoutes(app);
    
    // Setup Vite development server or static serving based on environment
    if (process.env.NODE_ENV === 'production') {
      log('Running in production mode, serving static files');
      // Import and use static file serving for production
      const { serveStatic } = await import('./vite');
      serveStatic(app);
    } else {
      log('Running in development mode, setting up Vite');
      // Import and setup Vite only in development
      const { setupVite } = await import('./vite');
      await setupVite(app, server);
    }

    const port = process.env.PORT || 5000;
    server.listen(port, () => {
      log(`serving on port ${port}`);
      
      // Start background task processor
      taskProcessor.start();
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();