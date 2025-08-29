# Overview

TBGS (Totaal Bouw Groep Specialisten) is a full-stack React application built with Node.js/Express serving as a business website for a Dutch/Belgian construction company. The application provides specialist services in roofing (TDS), chimney work (TSS), maintenance (TOS), and general construction (TBS). The platform features a modern responsive design with comprehensive service pages, a knowledge base, location-based content, contact forms, and an admin content management system for articles and service requests.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Wouter**: Lightweight client-side routing instead of React Router
- **shadcn/ui + Tailwind CSS**: Component library for consistent UI with custom TBGS brand colors
- **Vite**: Build tool and development server with hot module replacement
- **React Query**: Server state management for API calls and caching
- **React Hook Form + Zod**: Form handling with TypeScript-first schema validation
- **Multi-language support**: Dutch language focus with Belgium/Netherlands localization

## Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Session-based authentication**: Admin authentication with JWT tokens
- **File upload handling**: Multer for file processing with Google Cloud Storage integration
- **Email service**: Nodemailer with SMTP configuration for contact forms and notifications

## Database Design
- **PostgreSQL with Drizzle**: Modern ORM with type safety
- **Core entities**: Users, AdminUsers, ServiceRequests, Articles, Categories, Tags
- **Content management**: Full CMS capabilities for articles with markdown support
- **Service request tracking**: Customer inquiries and project requests with file attachments

## Key Features
- **Multi-specialist structure**: Four distinct service areas (TDS, TSS, TOS, TBS) with separate branding
- **Google Places integration**: Business listings, reviews, and location services
- **Contact forms**: Multi-step forms with file uploads and address autocomplete
- **Knowledge base**: Markdown-based articles with categorization and tagging
- **Location-based content**: City-specific service pages for Netherlands and Belgium
- **Admin dashboard**: Content management system for articles and service requests

## File Structure
- `/client`: React frontend application
- `/server`: Express.js backend API
- `/shared`: Shared TypeScript schemas and types
- `/scripts`: Database utilities and admin user creation

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **@radix-ui/react-***: UI component primitives
- **tailwindcss**: Utility-first CSS framework

## Google Services Integration
- **@google-cloud/storage**: File storage and object management
- **Google Places API**: Address autocomplete and business data
- **Google Maps integration**: Location services and mapping

## Email and Communication
- **@sendgrid/mail**: Email service for notifications
- **nodemailer**: SMTP email sending
- **vCard generation**: Business card creation utility

## File Processing
- **multer**: File upload middleware
- **@uppy/core**: Advanced file upload component
- **marked**: Markdown to HTML conversion
- **dompurify**: HTML sanitization

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety across the application
- **eslint + prettier**: Code formatting and linting
- **@replit/vite-plugin-***: Replit-specific development plugins