# TBGS BV Website - Construction Business Website

## Overview

This is a modern, SEO-optimized website for Totaal Bouw Groep Specialisten BV (TBGS BV), a construction company based in the Netherlands and Belgium. The website serves as a digital showcase for their four specialized services: roof work (TDS), chimney services (TSS), maintenance (TOS), and general construction (TBS). The site is built with a focus on lead generation through contact forms and conversion optimization.

**Recent Architecture Update (Aug 17, 2025):** 
- **Complete Kennisbank Redesign**: Modernized kennisbank section with cleaner card design, featuring "Meest Populair" section highlighting important content and improved grid layout for better user experience.
- **SEO Knowledge Base Articles**: Created 5 comprehensive SEO-optimized articles: PatioDak, TerrasDak, SchuinDak, PlatDak, and Schilderwerken with high-end technical content designed for top search rankings.
- **Duplicate Content Removal**: Removed VlakDak article to eliminate overlap with PlatDak, ensuring unique content and better SEO performance.
- **Onderhoudsabonnement Integration**: Updated all knowledge base articles to emphasize maintenance subscriptions (onderhoudsabonnementen) as preferred service model.
- **Modern Card Design**: Implemented two-tier card system - featured cards with detailed descriptions and reading time, plus compact overview cards with hover effects and modern styling.
- **Enhanced Search Functionality**: Updated search dropdown to include all new knowledge base articles with proper categorization and SEO-friendly excerpts.

**Previous Architecture Updates (Aug 14, 2025):** 
- **Complete Belgian Location Expansion**: Successfully expanded to comprehensive Belgian market coverage with new hoofdlocatie pages for Hamont and Pelt, plus detailed location-service pages for Sint-Huibrechts-Lille (Renovatie, Onderhoud) and Overpelt (Daklekkage).
- **Elite Dutch Location Pages**: Created premium hoofdlocatie pages for Waalre (elite luxury positioning), Geldrop, and Mierlo with high-end SEO optimization, local schema markup, and targeted luxury market messaging.
- **Advanced Local SEO Schema**: Implemented comprehensive LocalBusiness schema markup with geo-coordinates, Belgian/Dutch locale settings, and region-specific service catalogs for maximum local search rankings.
- **Multilingual Belgian Support**: Added proper Dutch-Belgian locale settings (nl_BE) and Belgian geographic targeting (BE-LI) for Limburg region optimization.
- **Complete Routing Architecture**: Updated App.tsx with full routing coverage for all 20+ hoofdlocatie pages and 50+ location-service pages across Netherlands and Belgium with proper TypeScript integration.
- **Location-Service SEO Pages**: Created comprehensive location-based service pages for daklekkage, renovatie, and onderhoud across all TBGS service areas with location-specific SEO optimization and unique content targeting local search queries.
- **Clean URL Structure**: Implemented clean URL patterns like `/eindhoven/daklekkage`, `/nuenen/renovatie`, `/best/onderhoud` for maximum SEO benefit and user experience.
- **Service Integration on Locaties**: Added service links (Daklekkage, Renovatie, Onderhoud) as clickable badges on location cards for easy navigation from locations overview to specific services.
- **Mobile-First Design**: Optimized all location-service pages for mobile with responsive text sizing, proper spacing, and touch-friendly buttons to prevent overlap issues on small screens.
- **Modern Locations Hub**: Created beautiful comprehensive locations page at `/locaties` displaying all 16 TBGS service areas across Netherlands and Belgium with search, filtering, and detailed contact information.
- **Navigation Enhancement**: Integrated "Locaties" into main navigation menu (desktop and mobile) for easy location discovery and improved user experience.
- **Google-Style Review Slider**: Redesigned review slider to match modern Google review design with circular colored profile avatars, proper name formatting (First L. style), and authentic Google branding.
- **Enhanced Location Coverage**: Added Geldrop, Mierlo, Waalre, and Hamont-Achel to service area coverage with complete location profiles including ratings, services, and contact details.
- The site now supports independent specialist mini-websites with unique headers and branding for each service, enabling separate domain pointing and improved SEO domain authority per specialist.
- Completely removed "Gratis Inspectie" from navigation menu and integrated inspection functionality into the modern offerte form.
- Implemented modern offerte form with file upload capabilities using Google Cloud object storage for attachments (images, documents, videos).
- **Google Business Profile Integration**: Connected Google Business Profile (https://share.google/egYatvuB3Rli6d2Jz) with complete review syncing, map display, opening hours, and contact information for maximum local SEO ranking.
- **Local SEO Schema Markup**: Implemented comprehensive LocalBusiness schema.org structured data for enhanced search engine visibility and local search rankings.
- **Complete Pricing Removal**: Removed ALL pricing information from entire website including costs, investments, subsidies, and budget options as per user requirement.
- **Fixed Duplicate Headers**: Completely resolved duplicate header issue on ALL pages (Gratis Offerte, Daklekkage, Energiebesparing, Schoorsteencontrole) by removing redundant Header components from individual pages.
- **Streamlined Homepage**: Removed Recent Projects section entirely and made contact section more compact for better mobile experience and reduced page length.
- **Real Specialist Logos**: Replaced all FontAwesome icons in service cards with authentic specialist logos (TSS, TDS, TOS, TBS) while maintaining color effects and 88% opacity transitions.
- **Mobile Text Optimization**: Fixed text size overlapping issues on small phone screens - specialist headers now use 12px text on mobile (text-xs) to prevent Offerte button overlap.
- **Terminology Consistency**: Changed all instances of "expert" to "specialist" throughout website for consistent branding and terminology.

## User Preferences

Preferred communication style: Simple, everyday language.
Domain Strategy: User wants separate domain names pointing to each specialist page for stronger SEO positioning.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a Single Page Application (SPA) architecture
- **Routing**: Wouter for client-side routing with dedicated pages for each specialist service
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Radix UI primitives for accessibility and interaction patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: TanStack React Query for server state management and API interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with dedicated contact form endpoint (`/api/contact`)
- **Development Server**: Custom Vite integration with hot module replacement
- **Error Handling**: Centralized error middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Connection**: Neon Database serverless driver for PostgreSQL
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Development Storage**: In-memory storage implementation for development/testing

### Component Structure
- **Brand Colors**: Four distinct color themes for each specialist service (Red for TDS, Blue for TSS, Green for TOS, Orange for TBS)
- **Dual Header System**: 
  - Main site header with specialist navigation bar for homepage and general pages
  - Individual specialist headers with branded logos and specialist-specific navigation for each service page
- **Specialist Headers**: Each specialist page now has its own dedicated header component with:
  - Specialist-specific logo and branding
  - Color-coordinated navigation matching specialist theme
  - Independent routing suitable for separate domain pointing
- **Layout Components**: Conditional header rendering, specialist navigation bar, and comprehensive footer
- **Modal System**: Contact form modal for lead generation across all pages
- **Responsive Design**: Mobile-first approach with grid layouts and responsive navigation

### SEO and Performance
- **Meta Management**: Dynamic SEO head component for title, description, and Open Graph tags
- **Structured Data**: Schema.org LocalBusiness markup for search engine optimization
- **Google Business Integration**: Complete Google Business Profile integration with review sync, map display, and local SEO optimization
- **Local SEO Schema**: Comprehensive LocalBusiness schema markup with geo-coordinates, opening hours, and service catalog
- **Location-Specific Pages**: Dedicated landing pages for all service cities with unique content, local keywords, geo-targeted schema markup, and city-specific contact information for maximum local search rankings
- **Internationalization**: Dutch language content with proper locale settings for Netherlands and Belgium markets
- **Performance**: Code splitting and lazy loading for optimal performance

## External Dependencies

### Database and Backend Services
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **drizzle-orm**: Type-safe ORM for database operations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command palette component for search functionality

### Form Handling and Validation
- **@hookform/resolvers**: Form validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe validation

### Development and Build Tools
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **wouter**: Minimalist routing library for React
- **date-fns**: Modern JavaScript date utility library
- **embla-carousel-react**: Lightweight carousel library for React

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **@replit/vite-plugin-cartographer**: Development tool integration for Replit IDE

The application uses a modern tech stack optimized for performance, maintainability, and developer experience, with strong emphasis on type safety through TypeScript and comprehensive UI component coverage through shadcn/ui and Radix UI.