// Vercel serverless function for service requests
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import { serviceRequests } from '../shared/schema.js';
import { emailService } from '../server/emailService.js';

neonConfig.webSocketConstructor = ws;

// Database setup
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      selectedService,
      serviceType,
      specialist,
      projectType,
      urgencyLevel,
      photos = [],
      address,
      projectDescription,
      firstName,
      lastName,
      email,
      phone,
      contactPreference
    } = req.body;

    // Validate required fields
    if (!selectedService || !address || !firstName || !lastName || !email || !phone) {
      return res.status(400).json({ 
        error: 'Ontbrekende verplichte velden' 
      });
    }

    // Save to database
    const [savedRequest] = await db.insert(serviceRequests).values({
      selectedService,
      photos: Array.isArray(photos) ? photos : [],
      address,
      projectDescription: projectDescription || '',
      firstName,
      lastName,
      email,
      phone,
      contactPreference: contactPreference || 'phone'
    }).returning();

    // Send notification email to admin
    try {
      await emailService.sendNotificationEmail({
        selectedService,
        serviceType,
        specialist,
        projectType,
        urgencyLevel,
        photos: Array.isArray(photos) ? photos : [],
        address,
        projectDescription: projectDescription || '',
        firstName,
        lastName,
        email,
        phone,
        contactPreference: contactPreference || 'phone',
        submittedAt: savedRequest.submittedAt || new Date(),
        formType: 'popup'
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
    }

    // Send thank you email to client
    try {
      await emailService.sendThankYouEmail({
        selectedService,
        serviceType,
        specialist,
        projectType,
        urgencyLevel,
        photos: Array.isArray(photos) ? photos : [],
        address,
        projectDescription: projectDescription || '',
        firstName,
        lastName,
        email,
        phone,
        contactPreference: contactPreference || 'phone',
        submittedAt: savedRequest.submittedAt || new Date(),
        formType: 'popup'
      });
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Uw aanvraag is succesvol verzonden!' 
    });

  } catch (error) {
    console.error('Service request error:', error);
    return res.status(500).json({ 
      error: 'Er is een fout opgetreden. Probeer het opnieuw.' 
    });
  }
}