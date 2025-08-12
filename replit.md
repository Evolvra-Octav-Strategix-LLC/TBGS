# TBGS BV Website - Construction Business Website

## Overview

This is a modern, SEO-optimized website for Totaal Bouw Groep Specialisten BV (TBGS BV), a construction company based in the Netherlands and Belgium. The website serves as a digital showcase for their four specialized services: roof work (TDS), chimney services (TSS), maintenance (TOS), and general construction (TBS). The site is built with a focus on lead generation through contact forms and conversion optimization.

**Recent Architecture Update (Aug 12, 2025):** 
- **Modern Locations Hub**: Created beautiful comprehensive locations page at `/locaties` displaying all 8 TBGS service areas across Netherlands and Belgium with search, filtering, and detailed contact information.
- **Navigation Enhancement**: Integrated "Locaties" into main navigation menu (desktop and mobile) for easy location discovery and improved user experience.
- **Google-Style Review Slider**: Redesigned review slider to match modern Google review design with circular colored profile avatars, proper name formatting (First L. style), and authentic Google branding.
- **Enhanced Location Coverage**: Added Geldrop, Mierlo, Waalre, and Hamont-Achel to service area coverage with complete location profiles including ratings, services, and contact details.
- The site now supports independent specialist mini-websites with unique headers and branding for each service, enabling separate domain pointing and improved SEO domain authority per specialist.
- Completely removed "Gratis Inspectie" from navigation menu and integrated inspection functionality into the modern offerte form.
- Implemented modern offerte form with file upload capabilities using Google Cloud object storage for attachments (images, documents, videos).
- **Google Business Profile Integration**: Connected Google Business Profile (https://share.google/egYatvuB3Rli6d2Jz) with complete review syncing, map display, opening hours, and contact information for maximum local SEO ranking.
- **Local SEO Schema Markup**: Implemented comprehensive LocalBusiness schema.org structured data for enhanced search engine visibility and local search rankings.

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