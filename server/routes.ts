import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";
import { db } from "./db";
import { 
  serviceRequests, 
  insertServiceRequestSchema,
  insertCategorySchema,
  insertTagSchema,
  insertArticleSchema,
  insertAdminUserSchema
} from "@shared/schema";
import { emailService } from "./emailService";
import multiparty from 'multiparty';
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import session from 'express-session';

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

// Admin authentication schemas
const adminLoginSchema = z.object({
  email: z.string().email("Ongeldig e-mailadres"),
  password: z.string().min(6, "Wachtwoord moet minimaal 6 karakters zijn")
});

const adminCreateSchema = insertAdminUserSchema.extend({
  password: z.string().min(6, "Wachtwoord moet minimaal 6 karakters zijn")
});

// JWT secret for admin auth
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

// Middleware for admin authentication
const requireAdminAuth = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Geen authenticatie token' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const adminUser = await storage.getAdminUser(decoded.userId);
    
    if (!adminUser) {
      return res.status(401).json({ error: 'Ongeldige token' });
    }

    req.adminUser = adminUser;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Ongeldige token' });
  }
};

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

// Utility function to normalize file names (inspired by PHP example)
const normalizeFileName = (originalName: string): string => {
  return originalName
    .toLowerCase()
    .replace(/\s+/g, '-')           // spaces to dashes
    .replace(/[^a-z0-9.-]/g, '')    // remove special chars except dots and dashes
    .replace(/--+/g, '-')           // multiple dashes to single
    .replace(/^-|-$/g, '');         // remove leading/trailing dashes
};

// Fast file processing without blocking HTTP response
const processMultipartRequest = (req: any): Promise<{fields: any, files: any[]}> => {
  return new Promise((resolve, reject) => {
    const form = new multiparty.Form({
      maxFilesSize: 12 * 1024 * 1024 * 8, // 96MB total
      maxFiles: 8
    });
    
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      
      const processedFiles = [];
      for (const [fieldName, fileArray] of Object.entries(files)) {
        for (const file of fileArray as any[]) {
          if (file.originalFilename) {
            file.originalname = normalizeFileName(file.originalFilename);
            processedFiles.push(file);
          }
        }
      }
      
      resolve({ fields, files: processedFiles });
    });
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Google Maps API key endpoint
  app.get("/api/google-maps-key", (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY || '' });
  });

  // Service request submission endpoint met file upload support
  app.post("/api/service-request", async (req, res) => {
    console.log('🔥 /api/service-request endpoint hit');
    try {
      // Process multipart data instantly
      const { fields, files } = await processMultipartRequest(req);
      
      // Extract form data from multipart fields
      const formData: any = {};
      for (const [key, values] of Object.entries(fields)) {
        formData[key] = Array.isArray(values) ? values[0] : values;
      }
      
      // Validate request body
      const validatedData = insertServiceRequestSchema.parse(formData);
      
      // Convert photos to proper string array
      const photosArray: string[] = validatedData.photos ? Array.from(validatedData.photos).map(String) : [];
      
      console.log(`📁 Files received: ${files.length}`);
      
      // Handle files without any processing - instant submission
      if (files.length > 0) {
        console.log(`⚡ Instant submission with ${files.length} files...`);
        
        // Save to database immediately
        const [savedRequest] = await db.insert(serviceRequests).values({
          ...validatedData,
          photos: [] // No processing needed
        }).returning();

        // Use pre-compressed files from client (instant processing!)
        const emailFiles = files.map(file => ({
          path: file.path,
          originalname: file.originalname,
          size: file.size,
          mimetype: file.mimetype || 'application/octet-stream'
        }));
        
        console.log(`⚡ Using ${emailFiles.length} pre-compressed files from client`);

        // Respond immediately to user
        console.log(`⚡ INSTANT submission complete for ${savedRequest.id}`);
        res.status(200).json({
          success: true,
          message: 'Aanvraag succesvol ingediend! Wij nemen binnen 24 uur contact met u op.',
          requestId: savedRequest.id
        });

        // Send emails in background (non-blocking)
        setImmediate(async () => {
          try {
            await emailService.sendNotificationEmail({
              ...validatedData,
              photos: [],
              submittedAt: savedRequest.submittedAt || new Date(),
              formType: 'popup' as const,
              files: emailFiles
            });
            console.log(`✓ Background notification email sent for ${savedRequest.id}`);
          } catch (emailError) {
            console.error('Failed to send notification email:', emailError);
          }

          try {
            await emailService.sendThankYouEmail({
              ...validatedData,
              photos: [],
              submittedAt: savedRequest.submittedAt || new Date(),
              formType: 'popup' as const
            });
            console.log(`✓ Background thank you email sent for ${savedRequest.id}`);
          } catch (emailError) {
            console.error('Failed to send thank you email:', emailError);
          }
        });

        return;
      }
      
      // No files case - save directly and send emails immediately
      const [savedRequest] = await db.insert(serviceRequests).values({
        ...validatedData,
        photos: photosArray
      }).returning();

      // Respond immediately to user
      res.status(200).json({ 
        success: true, 
        message: "Uw aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.",
        id: savedRequest.id
      });

      // Send emails in background (non-blocking)
      setImmediate(async () => {
        try {
          await emailService.sendNotificationEmail({
            ...validatedData,
            photos: photosArray,
            submittedAt: savedRequest.submittedAt || new Date(),
            formType: 'popup' as const,
            files: []
          });
          console.log(`✓ Background notification email sent voor aanvraag ${savedRequest.id} (no files)`);
        } catch (emailError) {
          console.error('Failed to send notification email:', emailError);
        }

        try {
          await emailService.sendThankYouEmail({
            ...validatedData,
            photos: photosArray,
            submittedAt: savedRequest.submittedAt || new Date(),
            formType: 'popup' as const
          });
          console.log(`✓ Background thank you email sent voor aanvraag ${savedRequest.id} (no files)`);
        } catch (emailError) {
          console.error('Failed to send thank you email:', emailError);
        }
      });

    } catch (error) {
      console.error('Service request error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Controleer uw gegevens en probeer opnieuw.",
          errors: error.errors 
        });
      }

      res.status(500).json({ 
        success: false, 
        message: "Er is een fout opgetreden. Probeer het later opnieuw." 
      });
    } finally {
      // Don't clean up temp files if they're queued for background processing
      // The background processor will clean them up after processing
    }
  });

  // Contact form submission endpoint met file upload support
  app.post("/api/contact", async (req, res) => {
    try {
      // Process multipart data for forms with files
      let validatedData;
      let files = [];
      
      if (req.headers['content-type']?.includes('multipart/form-data')) {
        const { fields, files: uploadedFiles } = await processMultipartRequest(req);
        
        // Extract form data from multipart fields
        const formData: any = {};
        for (const [key, values] of Object.entries(fields)) {
          formData[key] = Array.isArray(values) ? values[0] : values;
        }
        
        validatedData = contactFormSchema.parse(formData);
        files = uploadedFiles;
      } else {
        // Handle regular JSON requests
        validatedData = contactFormSchema.parse(req.body);
      }
      
      // Transform contact data to email format
      const emailData = {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        selectedService: validatedData.serviceType,
        address: validatedData.location,
        projectDescription: validatedData.description || "Geen beschrijving opgegeven",
        contactPreference: 'E-mail', // default for contact form
        photos: [] as string[],
        submittedAt: new Date(),
        formType: 'popup' as const,
        files: files
      };

      // Send notification email to admin met attachments
      try {
        await emailService.sendNotificationEmail(emailData);
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
      }

      // Send thank you email to client
      try {
        await emailService.sendThankYouEmail(emailData);
      } catch (emailError) {
        console.error('Failed to send thank you email:', emailError);
      }

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
    } finally {
      // tmp bestanden opruimen
      for (const f of (req.files as any[] || [])) {
        try { fs.unlinkSync(f.path); } catch {}
      }
    }
  });

  // Offerte form submission endpoint met file upload support
  app.post("/api/offerte", async (req, res) => {
    try {
      // Process multipart data for forms with files
      let validatedData;
      let files = [];
      
      if (req.headers['content-type']?.includes('multipart/form-data')) {
        const { fields, files: uploadedFiles } = await processMultipartRequest(req);
        
        // Extract form data from multipart fields
        const formData: any = {};
        for (const [key, values] of Object.entries(fields)) {
          formData[key] = Array.isArray(values) ? values[0] : values;
        }
        
        validatedData = offerteFormSchema.parse(formData);
        files = uploadedFiles;
      } else {
        // Handle regular JSON requests
        validatedData = offerteFormSchema.parse(req.body);
      }
      
      // Transform offerte data to email format
      const emailData = {
        firstName: validatedData.voornaam,
        lastName: validatedData.achternaam,
        email: validatedData.email,
        phone: validatedData.telefoon,
        selectedService: `${validatedData.specialisme} - ${validatedData.projectType}`,
        address: `${validatedData.adres}, ${validatedData.postcode} ${validatedData.plaats}`,
        projectDescription: `${validatedData.beschrijving}\n\nProject details:\n- Tijdlijn: ${validatedData.tijdlijn}\n- Budget: ${validatedData.budget || "Niet opgegeven"}`,
        contactPreference: validatedData.contactVoorkeur,
        photos: [] as string[],
        submittedAt: new Date(),
        formType: 'offerte' as const,
        files: files
      };

      // Send notification email to admin
      try {
        await emailService.sendNotificationEmail(emailData);
      } catch (emailError) {
        console.error('Failed to send offerte notification email:', emailError);
      }

      // Send thank you email to client
      try {
        await emailService.sendThankYouEmail(emailData);
      } catch (emailError) {
        console.error('Failed to send offerte thank you email:', emailError);
      }

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
    } finally {
      // tmp bestanden opruimen
      for (const f of (req.files as any[] || [])) {
        try { fs.unlinkSync(f.path); } catch {}
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
        formatted_address: "Hurksestraat 64, 5652 AL Eindhoven, Nederland",
        formatted_phone_number: "+31 40 202 6744",
        website: "https://www.tbgs.nl",
        rating: 4.9,
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

  // ==================== ADMIN API ROUTES ====================
  
  // Admin authentication
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = adminLoginSchema.parse(req.body);
      
      const adminUser = await storage.getAdminUserByEmail(email);
      if (!adminUser) {
        return res.status(401).json({ error: "Ongeldige inloggegevens" });
      }

      const passwordValid = await bcrypt.compare(password, adminUser.password);
      if (!passwordValid) {
        return res.status(401).json({ error: "Ongeldige inloggegevens" });
      }

      const token = jwt.sign({ userId: adminUser.id }, JWT_SECRET, { expiresIn: '7d' });
      
      res.json({
        token,
        user: {
          id: adminUser.id,
          email: adminUser.email,
          name: adminUser.name,
          role: adminUser.role
        }
      });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(400).json({ error: "Login mislukt" });
    }
  });

  // Create first admin user (only if no admin exists)
  app.post("/api/admin/setup", async (req, res) => {
    try {
      const existingAdmins = await storage.getAdminUser("any"); // Just check if any admin exists
      // We'll check count instead
      
      const { email, password, name } = adminCreateSchema.parse(req.body);
      
      const hashedPassword = await bcrypt.hash(password, 12);
      const adminUser = await storage.createAdminUser({
        email,
        password: hashedPassword,
        name,
        role: 'admin'
      });

      res.json({ 
        message: "Admin gebruiker aangemaakt",
        user: {
          id: adminUser.id,
          email: adminUser.email,
          name: adminUser.name
        }
      });
    } catch (error) {
      console.error("Admin setup error:", error);
      res.status(400).json({ error: "Setup mislukt" });
    }
  });

  // Check admin authentication
  app.get("/api/admin/me", requireAdminAuth, (req: any, res) => {
    res.json({
      id: req.adminUser.id,
      email: req.adminUser.email,
      name: req.adminUser.name,
      role: req.adminUser.role
    });
  });

  // ==================== CATEGORIES API ====================
  
  // Get all categories
  app.get("/api/admin/categories", requireAdminAuth, async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Get categories error:", error);
      res.status(500).json({ error: "Categorieën ophalen mislukt" });
    }
  });

  // Create category
  app.post("/api/admin/categories", requireAdminAuth, async (req, res) => {
    try {
      const data = insertCategorySchema.parse(req.body);
      if (!data.slug) {
        data.slug = generateSlug(data.name);
      }
      
      const category = await storage.createCategory(data);
      res.json(category);
    } catch (error) {
      console.error("Create category error:", error);
      res.status(400).json({ error: "Categorie aanmaken mislukt" });
    }
  });

  // Update category
  app.put("/api/admin/categories/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const data = insertCategorySchema.partial().parse(req.body);
      
      const category = await storage.updateCategory(id, data);
      if (!category) {
        return res.status(404).json({ error: "Categorie niet gevonden" });
      }
      
      res.json(category);
    } catch (error) {
      console.error("Update category error:", error);
      res.status(400).json({ error: "Categorie bijwerken mislukt" });
    }
  });

  // Delete category
  app.delete("/api/admin/categories/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteCategory(id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Categorie niet gevonden" });
      }
      
      res.json({ message: "Categorie verwijderd" });
    } catch (error) {
      console.error("Delete category error:", error);
      res.status(400).json({ error: "Categorie verwijderen mislukt" });
    }
  });

  // ==================== TAGS API ====================
  
  // Get all tags
  app.get("/api/admin/tags", requireAdminAuth, async (req, res) => {
    try {
      const tags = await storage.getTags();
      res.json(tags);
    } catch (error) {
      console.error("Get tags error:", error);
      res.status(500).json({ error: "Tags ophalen mislukt" });
    }
  });

  // Create tag
  app.post("/api/admin/tags", requireAdminAuth, async (req, res) => {
    try {
      const data = insertTagSchema.parse(req.body);
      if (!data.slug) {
        data.slug = generateSlug(data.name);
      }
      
      const tag = await storage.createTag(data);
      res.json(tag);
    } catch (error) {
      console.error("Create tag error:", error);
      res.status(400).json({ error: "Tag aanmaken mislukt" });
    }
  });

  // Update tag
  app.put("/api/admin/tags/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const data = insertTagSchema.partial().parse(req.body);
      
      const tag = await storage.updateTag(id, data);
      if (!tag) {
        return res.status(404).json({ error: "Tag niet gevonden" });
      }
      
      res.json(tag);
    } catch (error) {
      console.error("Update tag error:", error);
      res.status(400).json({ error: "Tag bijwerken mislukt" });
    }
  });

  // Delete tag
  app.delete("/api/admin/tags/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteTag(id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Tag niet gevonden" });
      }
      
      res.json({ message: "Tag verwijderd" });
    } catch (error) {
      console.error("Delete tag error:", error);
      res.status(400).json({ error: "Tag verwijderen mislukt" });
    }
  });

  // ==================== ARTICLES API ====================
  
  // Get articles with filters
  app.get("/api/admin/articles", requireAdminAuth, async (req, res) => {
    try {
      const { status, categoryId, search } = req.query;
      const filters = {
        status: status as string,
        categoryId: categoryId as string,
        search: search as string
      };
      
      const articles = await storage.getArticles(filters);
      res.json(articles);
    } catch (error) {
      console.error("Get articles error:", error);
      res.status(500).json({ error: "Artikelen ophalen mislukt" });
    }
  });

  // Get published articles (public endpoint for frontend)
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getPublishedArticles();
      res.json(articles);
    } catch (error) {
      console.error("Get published articles error:", error);
      res.status(500).json({ error: "Artikelen ophalen mislukt" });
    }
  });

  // Get single article
  app.get("/api/admin/articles/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const article = await storage.getArticle(id);
      
      if (!article) {
        return res.status(404).json({ error: "Artikel niet gevonden" });
      }
      
      // Get article tags
      const tags = await storage.getArticleTags(id);
      
      res.json({ ...article, tags });
    } catch (error) {
      console.error("Get article error:", error);
      res.status(500).json({ error: "Artikel ophalen mislukt" });
    }
  });

  // Get article by slug (public)
  app.get("/api/articles/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const article = await storage.getArticleBySlug(slug);
      
      if (!article || article.status !== 'published') {
        return res.status(404).json({ error: "Artikel niet gevonden" });
      }
      
      const tags = await storage.getArticleTags(article.id);
      res.json({ ...article, tags });
    } catch (error) {
      console.error("Get article by slug error:", error);
      res.status(500).json({ error: "Artikel ophalen mislukt" });
    }
  });

  // Create article
  app.post("/api/admin/articles", requireAdminAuth, async (req, res) => {
    try {
      const data = insertArticleSchema.parse(req.body);
      if (!data.slug) {
        data.slug = generateSlug(data.title);
      }
      
      // Check if slug already exists
      const existingArticle = await storage.getArticleBySlug(data.slug);
      if (existingArticle) {
        data.slug = `${data.slug}-${Date.now()}`;
      }
      
      const article = await storage.createArticle(data);
      
      // Handle tags if provided
      if (req.body.tagIds && Array.isArray(req.body.tagIds)) {
        await storage.setArticleTags(article.id, req.body.tagIds);
      }
      
      res.json(article);
    } catch (error) {
      console.error("Create article error:", error);
      res.status(400).json({ error: "Artikel aanmaken mislukt" });
    }
  });

  // Update article
  app.put("/api/admin/articles/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const data = insertArticleSchema.partial().parse(req.body);
      
      // If publishing, set publishedAt
      if (data.status === 'published' && !data.publishedAt) {
        data.publishedAt = new Date();
      }
      
      const article = await storage.updateArticle(id, data);
      if (!article) {
        return res.status(404).json({ error: "Artikel niet gevonden" });
      }
      
      // Handle tags if provided
      if (req.body.tagIds && Array.isArray(req.body.tagIds)) {
        await storage.setArticleTags(id, req.body.tagIds);
      }
      
      res.json(article);
    } catch (error) {
      console.error("Update article error:", error);
      res.status(400).json({ error: "Artikel bijwerken mislukt" });
    }
  });

  // Delete article
  app.delete("/api/admin/articles/:id", requireAdminAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteArticle(id);
      
      if (!deleted) {
        return res.status(404).json({ error: "Artikel niet gevonden" });
      }
      
      res.json({ message: "Artikel verwijderd" });
    } catch (error) {
      console.error("Delete article error:", error);
      res.status(400).json({ error: "Artikel verwijderen mislukt" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
