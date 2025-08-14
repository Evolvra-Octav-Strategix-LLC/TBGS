# Content Migration Strategy

## 1. Current Static Content to Migrate

### NL Location Pages
- Eindhoven - city hub + specialist pages
- Nuenen - city hub + specialist pages  
- Veldhoven - city hub + specialist pages
- Best - city hub + specialist pages
- Geldrop - city hub + specialist pages
- Mierlo - city hub + specialist pages
- Waalre - city hub + specialist pages

### BE Location Pages  
- Lommel - city hub + specialist pages
- Hamont-Achel - city hub + specialist pages
- Pelt - city hub + specialist pages
- Retie - city hub + specialist pages

### Service Pages
- Totaal Dak Specialist (TDS)
- Totaal Schoorsteen Specialist (TSS) 
- Totaal Onderhoud Specialist (TOS)
- Totaal Bouw Specialist (TBS)

## 2. Migration Process

### Step 1: Create WordPress Location Posts
For each city, create a new "Location" post with:
- **Title**: "TBGS [City Name]"
- **Country**: NL or BE
- **City**: City name
- **Intro**: Hero section text
- **Body**: Main content
- **Images**: Local images and hero images
- **Coordinates**: Lat/lng for schema markup
- **Schema Type**: LocalBusiness

### Step 2: Create Specialist × Location Posts  
For each specialist in each city:
- **Title**: "[Specialist Name] [City Name]"
- **Country**: NL or BE
- **City**: City name
- **Specialist**: Specialist type slug
- **Intro**: Specialist-specific intro
- **Body**: Specialist content
- **FAQ**: Service-specific questions
- **Schema Type**: RoofingContractor, ChimneySweep, etc.

### Step 3: Create Knowledge Base Posts
Convert existing content into blog posts:
- **Category**: Dakonderhoud, Schoorsteenonderhoud, Bouwadvies
- **Tags**: Relevant keywords
- **Content**: Educational articles
- **FAQ**: Common questions per topic
- **Images**: Instructional images

### Step 4: Create Service Pages
General service descriptions:
- **Dakwerkzaamheden**: General roofing services
- **Schoorsteenservice**: Chimney maintenance
- **Onderhoud**: General maintenance  
- **Bouwprojecten**: Construction services

## 3. WordPress Content Structure

```
wp-admin/
├── Posts (Knowledge Base)
│   ├── "Daklekkage Herkennen en Oplossen"
│   ├── "Schoorsteenonderhoud Checklist"
│   └── "Energiebesparing Door Dakrenovatie"
│
├── Locations (Custom Post Type)
│   ├── "TBGS Eindhoven" (country: nl, city: eindhoven)
│   ├── "TBGS Lommel" (country: be, city: lommel)
│   └── "Dakdekker Eindhoven" (specialist: totaal-dak-specialist)
│
└── Services (Custom Post Type)
    ├── "Dakwerkzaamheden"
    ├── "Schoorsteenservice" 
    └── "Onderhoud & Reparatie"
```

## 4. Image Migration

All images from `attached_assets/` should be uploaded to WordPress Media Library:
- Specialist logos (TDS, TSS, TOS, TBS)
- Location photos
- Service images
- Before/after project photos

## 5. SEO Migration

Each WordPress post should have:
- **SEO Title**: Optimized for local search
- **Meta Description**: Compelling descriptions
- **Focus Keywords**: Location + service combinations
- **OpenGraph Images**: Social media images

## 6. Testing Phase

After migration:
1. Test all `/nl/[city]` routes load from WordPress
2. Test all `/be/locaties/[city]` routes
3. Test specialist pages `/nl/[dienst]/[city]` 
4. Test knowledge base `/kennisbank/[slug]`
5. Test revalidation webhook works
6. Test fallback to static content if WordPress unavailable

## 7. Go-Live Process

1. WordPress setup complete
2. Content migrated and reviewed
3. Webhook revalidation tested
4. DNS pointing to headless frontend
5. WordPress admin access secured
6. Regular backup schedule setup