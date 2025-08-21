# TBGS BV Website - Construction Business Website

## Overview

This project is a modern, SEO-optimized website for Totaal Bouw Groep Specialisten BV (TBGS BV), a construction company operating in the Netherlands and Belgium. The website showcases four specialized services: roof work (TDS), chimney services (TSS), maintenance (TOS), and general construction (TBS). Its primary purpose is lead generation through contact forms and conversion optimization. The business vision is to provide a robust digital presence that supports geographical targeting and enhances brand authority for each specialist service.

## User Preferences

Preferred communication style: Simple, everyday language.
Domain Strategy: User wants separate domain names pointing to each specialist page for stronger SEO positioning.
URL Standardization Requirement: All service URLs MUST use mandatory /nl/ and /be/ country prefixes (e.g., /nl/city/service).
SEO Focus: High-ranking priority for "daklekkage", "onderhoud" and other core services with conversion psychology.
Implementation Style: Execute comprehensive SEO strategy with urgency messaging and cost-saving psychology.

## System Architecture

### Frontend Architecture  
- **Framework**: React 18 with TypeScript (SPA)
- **Routing**: Wouter for client-side routing (80+ routes implemented)
- **Styling**: Tailwind CSS with shadcn/ui and Radix UI
- **Build Tool**: Vite
- **State Management**: TanStack React Query

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **API Design**: RESTful API (`/api/contact` endpoint)
- **Development Server**: Custom Vite integration with HMR
- **Error Handling**: Centralized error middleware

### Data Storage Solutions
- **Database**: PostgreSQL via Drizzle ORM
- **ORM**: Drizzle ORM (type-safe)
- **Connection**: Neon Database serverless driver
- **Migrations**: Drizzle Kit
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Development Storage**: In-memory storage for testing

### UI/UX Decisions and Features
- **Brand Colors**: Four distinct color themes per specialist service (Red for TDS, Blue for TSS, Green for TOS, Orange for TBS).
- **Dual Header System**: Main site header and individual specialist headers with branded logos and color-coordinated navigation. Specialist headers are independent for separate domain pointing.
- **Layout Components**: Conditional header rendering, specialist navigation bar, and comprehensive footer.
- **Modal System**: Contact form modal for lead generation.
- **Responsive Design**: Mobile-first approach with grid layouts and responsive navigation.
- **Review Slider**: Redesigned to match Google review style.
- **Modern Offerte Form**: Includes robust file upload capabilities with Multer middleware, supporting up to 8 files (12MB each) with secure mime-type validation and automatic cleanup.
- **Email Service**: Gmail SMTP integration with attachment support, retry logic with exponential backoff, and clean HTML templates.
- **Kennisbank Redesign**: Modernized with clean card design, "Meest Populair" section, colorful badges, and enhanced search functionality. New high-end SEO articles (groendaken, zonnepanelen) for improved GBP rankings.
- **Pricing**: All pricing information is explicitly removed from the website.
- **Terminology**: "Expert" is consistently changed to "specialist" throughout.
- **Phase 2 Complete**: Full service-location matrix implemented with 80+ URL combinations across Netherlands and core Belgian market coverage.

### System Design Choices
- **SEO Optimization**: Dynamic SEO head component, Schema.org LocalBusiness markup, Google Business Profile integration, and comprehensive local SEO schema (geo-coordinates, opening hours, service catalog).
- **Location-Specific Pages**: Dedicated landing pages for service cities with unique content, local keywords, geo-targeted schema, and city-specific contact information. URL structure uses mandatory `/nl/` and `/be/` country prefixes (e.g., `/nl/city/service`, `/be/city/service`).
- **Internationalization**: Dutch language content with proper locale settings for Netherlands and Belgium.
- **Performance**: Code splitting and lazy loading.
- **Internal Linking**: Strategic system connecting knowledge base articles.
- **NAP Consistency**: Consistent Name, Address, Phone blocks with Google Maps integration.

## External Dependencies

### Database and Backend Services
- `@neondatabase/serverless`
- `drizzle-orm`
- `connect-pg-simple`

### UI and Styling
- `@radix-ui/*`
- `tailwindcss`
- `class-variance-authority`
- `cmdk`

### Form Handling and Validation
- `@hookform/resolvers`
- `zod`
- `drizzle-zod`

### Development and Utility Libraries
- `@tanstack/react-query`
- `wouter`
- `date-fns`
- `embla-carousel-react`

### Replit-Specific Integrations
- `@replit/vite-plugin-runtime-error-modal`
- `@replit/vite-plugin-cartographer`