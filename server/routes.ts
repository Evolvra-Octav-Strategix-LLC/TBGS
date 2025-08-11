import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "Voornaam is verplicht"),
  lastName: z.string().min(1, "Achternaam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(1, "Telefoonnummer is verplicht"),
  location: z.string().min(1, "Locatie is verplicht"),
  serviceType: z.string().min(1, "Type werkzaamheden is verplicht"),
  description: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, "Akkoord met privacyverklaring is verplicht")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in production, you'd save to database or send email)
      console.log("Contact form submission:", {
        timestamp: new Date().toISOString(),
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        location: validatedData.location,
        serviceType: validatedData.serviceType,
        description: validatedData.description || "Geen beschrijving opgegeven"
      });

      // In a production environment, you would:
      // 1. Save to database
      // 2. Send email notification to company
      // 3. Send confirmation email to customer
      // 4. Integrate with CRM system

      res.status(200).json({ 
        success: true, 
        message: "Uw aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op." 
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        res.status(400).json({
          success: false,
          message: "Controleer uw invoer en probeer opnieuw.",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      } else {
        // Other errors
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Er is een fout opgetreden bij het versturen van uw bericht. Probeer het opnieuw of neem telefonisch contact op."
        });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      service: "TBGS Contact API"
    });
  });

  // Service areas endpoint (for future Google Maps integration)
  app.get("/api/service-areas", (req, res) => {
    const serviceAreas = {
      netherlands: [
        { name: "Eindhoven", lat: 51.4416, lng: 5.4697 },
        { name: "Nuenen", lat: 51.4703, lng: 5.5531 },
        { name: "Veldhoven", lat: 51.4200, lng: 5.4047 },
        { name: "Best", lat: 51.5067, lng: 5.3900 },
        { name: "Geldrop", lat: 51.4217, lng: 5.5597 },
        { name: "Son en Breugel", lat: 51.5150, lng: 5.4950 },
        { name: "Valkenswaard", lat: 51.3500, lng: 5.4500 }
      ],
      belgium: [
        { name: "Hamont-Achel", lat: 51.2500, lng: 5.3167 },
        { name: "Lommel", lat: 51.2308, lng: 5.3119 },
        { name: "Pelt", lat: 51.2167, lng: 5.4167 }
      ]
    };

    res.status(200).json(serviceAreas);
  });

  const httpServer = createServer(app);
  return httpServer;
}
