import express from "express";
import { registerRoutes } from "./routes";
import { log, setupVite } from "./vite";
import { taskProcessor } from "./taskQueue";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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