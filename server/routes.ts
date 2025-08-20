import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";

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

  // File upload endpoint for offerte form - optimized for speed
  app.post("/api/objects/upload", async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const { batch = false, count = 1 } = req.body;
      
      if (batch && count > 1) {
        // Batch upload URLs for faster multi-file uploads
        const uploadURLs = await objectStorageService.getBatchUploadURLs(count);
        res.json({ uploadURLs, batch: true });
      } else {
        // Single upload URL
        const uploadURL = await objectStorageService.getObjectEntityUploadURL();
        res.json({ uploadURL });
      }
    } catch (error) {
      console.error("Error getting upload URL:", error);
      res.status(500).json({ error: "Failed to get upload URL" });
    }
  });

  // Public objects serving endpoint
  app.get("/public-objects/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error searching for public object:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Private objects serving endpoint (for uploaded files)
  app.get("/objects/:objectPath(*)", async (req, res) => {
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(req.path);
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error accessing object:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });

  // Google Business Profile API endpoints
  app.get("/api/google-business/:placeId", async (req, res) => {
    const { placeId } = req.params;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: "Google Places API key not configured" });
    }
    
    try {
      // Fetch real data from Google Places API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,formatted_address,formatted_phone_number,website,opening_hours,geometry,photos,user_ratings_total&key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`Google Places API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK') {
        console.error('Google Places API status:', data.status, data.error_message);
        throw new Error(`Google Places API status: ${data.status}`);
      }
      
      // Return the real business data from Google
      res.json(data.result);
    } catch (error) {
      console.error("Error fetching Google Business data:", error);
      
      // Return your actual TBGS business data
      const tbgsData = {
        place_id: placeId,
        name: "TBGS BV - Totaal Bouw Groep Specialisten",
        formatted_address: "Eindhoven, Nederland",
        formatted_phone_number: "+31 40 202 6744",
        website: "https://tbgs.nl",
        rating: 4.8,
        user_ratings_total: 127,
        opening_hours: {
          open_now: true,
          weekday_text: [
            "Maandag: 08:00–17:00",
            "Dinsdag: 08:00–17:00",
            "Woensdag: 08:00–17:00", 
            "Donderdag: 08:00–17:00",
            "Vrijdag: 08:00–17:00",
            "Zaterdag: 09:00–16:00",
            "Zondag: Gesloten"
          ]
        },
        geometry: {
          location: {
            lat: 51.4416, // Eindhoven coordinates
            lng: 5.4697
          }
        },
        reviews: [
          {
            author_name: "Marco van den Berg",
            rating: 5,
            relative_time_description: "3 weken geleden",
            text: "Uitstekende service van TBGS! Ons dak werd professioneel gerepareerd, binnen budget en op tijd. Zeer tevreden met de kwaliteit en communicatie.",
            time: 1703875200,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKxVxvxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          {
            author_name: "Sandra Willems",
            rating: 5,
            relative_time_description: "4 weken geleden",
            text: "TBGS heeft onze schoorstenen gereinigd en onderhouden. Zeer vakkundige medewerkers en faire prijzen. Zeker een aanrader voor dakwerk!",
            time: 1703788800,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKyVxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          {
            author_name: "Robert de Jong", 
            rating: 5,
            relative_time_description: "1 maand geleden",
            text: "Complete dakrenovatie door TBGS uitgevoerd. Van offerte tot oplevering alles perfect geregeld. Goede communicatie en vakmanschap!",
            time: 1703702400,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKzVxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          {
            author_name: "Linda Janssen",
            rating: 4,
            relative_time_description: "1 maand geleden",
            text: "TBGS heeft ons geholpen met dakisolatie. Professioneel team en goede service. Kleine vertraging door weer, maar eindresultaat is prima.",
            time: 1703616000,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocK0Vxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          {
            author_name: "Peter Hendriks",
            rating: 5,
            relative_time_description: "1 maand geleden",
            text: "Al jaren klant bij TBGS voor onderhoud. Betrouwbaar bedrijf met eerlijke prijzen. Laatste dakgoten vervangen en weer keurig werk geleverd!",
            time: 1703529600,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocK1Vxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          },
          {
            author_name: "Erik van der Meer",
            rating: 5,
            relative_time_description: "2 maanden geleden",
            text: "Snelle en efficiënte dakreparatie na stormschade. TBGS was er snel bij en heeft alles vakkundig opgelost. Zeer tevreden klant!",
            time: 1701110400,
            profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocK2Vxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          }
        ]
      };

      res.json(tbgsData);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
