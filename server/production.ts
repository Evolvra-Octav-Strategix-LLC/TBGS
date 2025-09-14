import express from "express";
import { registerRoutes } from "./routes";
import { taskProcessor } from "./taskQueue";
import path from "path";
import fs from "fs";

// Inline log function for production
function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit", 
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Production static file serving (no vite dependencies)
function serveStatic(app: express.Express) {
  const distPath = path.resolve(import.meta.dirname, "../public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

const app = express();

// Middleware with increased limits for webhook endpoints
app.use('/api/email-webhook', express.json({ limit: '50mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

async function startServer() {
  try {
    // Register API routes first
    const server = await registerRoutes(app);
    
    // Production mode - serve static files only
    log('Running in production mode, serving static files');
    serveStatic(app);

    const port = process.env.PORT || 3000;
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