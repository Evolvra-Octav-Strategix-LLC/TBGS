import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ObjectStorageService } from "./objectStorage";

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

// Offerte form schema
const offerteFormSchema = z.object({
  voornaam: z.string().min(2, "Voornaam moet minimaal 2 karakters zijn"),
  achternaam: z.string().min(2, "Achternaam moet minimaal 2 karakters zijn"),
  email: z.string().email("Voer een geldig e-mailadres in"),
  telefoon: z.string().min(10, "Voer een geldig telefoonnummer in"),
  adres: z.string().min(5, "Voer uw volledige adres in"),
  postcode: z.string().min(6, "Voer een geldige postcode in"),
  plaats: z.string().min(2, "Voer uw woonplaats in"),
  specialisme: z.string().min(1, "Kies een specialisme"),
  projectType: z.string().min(1, "Kies een projecttype"),
  projectOmvang: z.string().min(1, "Kies de projectomvang"),
  tijdlijn: z.string().min(1, "Kies de gewenste tijdlijn"),
  budget: z.string().optional(),
  beschrijving: z.string().min(20, "Beschrijf uw project in minimaal 20 karakters"),
  contactVoorkeur: z.string().min(1, "Kies uw contactvoorkeur"),
  privacyAkkoord: z.boolean().refine(val => val === true, "U moet akkoord gaan met de privacyverklaring"),
  nieuwsbrief: z.boolean().optional(),
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

  // Offerte form submission endpoint
  app.post("/api/offerte", async (req, res) => {
    try {
      // Validate request body
      const validatedData = offerteFormSchema.parse(req.body);
      
      // Log the offerte submission (in production, you'd save to database or send email)
      console.log("Offerte form submission:", {
        timestamp: new Date().toISOString(),
        name: `${validatedData.voornaam} ${validatedData.achternaam}`,
        email: validatedData.email,
        telefoon: validatedData.telefoon,
        adres: `${validatedData.adres}, ${validatedData.postcode} ${validatedData.plaats}`,
        specialisme: validatedData.specialisme,
        projectType: validatedData.projectType,
        projectOmvang: validatedData.projectOmvang,
        tijdlijn: validatedData.tijdlijn,
        budget: validatedData.budget || "Niet opgegeven",
        beschrijving: validatedData.beschrijving,
        contactVoorkeur: validatedData.contactVoorkeur,
        nieuwsbrief: validatedData.nieuwsbrief || false
      });

      // In a production environment, you would:
      // 1. Save to database
      // 2. Send email notification to company
      // 3. Send confirmation email to customer
      // 4. Integrate with CRM system
      // 5. Create lead in project management system

      res.status(200).json({ 
        success: true, 
        message: "Uw offerte aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op voor een afspraak." 
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
        console.error("Offerte form error:", error);
        res.status(500).json({
          success: false,
          message: "Er is een fout opgetreden bij het versturen van uw offerte aanvraag. Probeer het opnieuw of neem telefonisch contact op."
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

  // File upload endpoint for offerte form
  app.post("/api/objects/upload", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
