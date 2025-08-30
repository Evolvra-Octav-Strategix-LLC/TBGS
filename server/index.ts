import express from "express";
import { registerRoutes } from "./routes";
import { log, setupVite } from "./vite";
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
    
    // Setup Vite development server
    await setupVite(app, server);

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