// This is a Vercel serverless function that wraps your Express app
import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

// Import your existing Express routes
import { registerRoutes } from '../server/routes.js';

const app = express();

// Register all your existing routes
await registerRoutes(app);

// Export the handler for Vercel
export default async function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}