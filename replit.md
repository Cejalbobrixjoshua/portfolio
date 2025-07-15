# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Express.js. The application showcases Brix Joshua A. Cejalbo's professional experience, skills, and educational background through a clean, dark-themed interface with green gradient accents, smooth animations and professional interactive elements. Features updated work experience including GoHighLevel specialization and marketing automation expertise.

## Recent Changes

### Interactive Features Implementation (July 15, 2025)
- Added typing animation for Hero section with rotating titles
- Implemented smooth hover effects (hover-lift, hover-scale, magnetic-effect)
- Added gradient borders and pulse glow effects throughout the site
- Created floating animations for profile image and decorative elements
- Enhanced navigation with interactive hover states and gradient backgrounds
- Added smooth scroll reveal animations using intersection observer
- Implemented advanced CSS animations (float, pulseGlow, interactive cards)
- Enhanced form inputs with focus shadows and smooth transitions
- Added professional button interactions with scale and glow effects

## User Preferences

Preferred communication style: Simple, everyday language.
Color scheme: Green accent colors instead of gold/yellow, with dark gradient backgrounds incorporating green tones.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for development and production builds
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **Database**: Drizzle ORM with PostgreSQL (Neon Database)
- **Session Management**: In-memory storage with fallback to PostgreSQL
- **API Design**: RESTful API with JSON responses

### Build System
- **Development**: Vite dev server with HMR
- **Production**: Vite build + esbuild for server bundling
- **TypeScript**: Strict mode with path aliases
- **CSS**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Landing area with profile image and call-to-action buttons
- **About Section**: Personal information and professional summary
- **Experience Section**: Timeline-based work history display
- **Education Section**: Academic background with visual cards
- **Skills Section**: Animated progress bars for technical and professional skills
- **Contact Form**: Form with validation and API integration

### Backend Components
- **Routes**: Contact form submission and contact retrieval endpoints
- **Storage**: Dual storage system (memory for development, PostgreSQL for production)
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: ID, username, password (for future authentication)
- **Contacts Table**: ID, name, email, subject, message, timestamp

## Data Flow

1. **Form Submission**: Contact form data is validated client-side, then sent to `/api/contact`
2. **Server Processing**: Express server validates data with Zod schemas and stores in database
3. **Response Handling**: Success/error responses are displayed via toast notifications
4. **Data Retrieval**: Admin endpoint `/api/contacts` returns all contact submissions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with React DOM
- **Styling**: Tailwind CSS, shadcn/ui components, Radix UI primitives
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React icons
- **Animations**: CSS transitions and transforms

### Backend Dependencies
- **Database**: Drizzle ORM with Neon PostgreSQL driver
- **Validation**: Zod for schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, nodemon equivalent

### Build Dependencies
- **Bundling**: Vite for client, esbuild for server
- **TypeScript**: Full TypeScript support with strict mode
- **Development Tools**: Replit-specific plugins for development environment

## Deployment Strategy

### Development
- **Client**: Vite dev server with HMR on port 5173
- **Server**: tsx with auto-restart on file changes
- **Database**: Drizzle migrations with `npm run db:push`

### Production
- **Build Process**: 
  1. `vite build` generates static client files
  2. `esbuild` bundles server code with external dependencies
- **Server**: Express serves static files and API routes
- **Database**: PostgreSQL with connection pooling via Neon
- **Environment**: Requires `DATABASE_URL` environment variable

### File Structure
- `client/`: React frontend application
- `server/`: Express backend with API routes
- `shared/`: Common schema definitions and types
- `dist/`: Production build output
- `migrations/`: Database migration files

The application follows a modern full-stack architecture with clear separation of concerns, type safety throughout, and production-ready deployment configuration.