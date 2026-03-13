# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start Next.js dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
```

## Architecture Overview

This is a Next.js 14+ App Router application for MixFood, a Ukrainian food flavorings company. Built with SSR/SSG for SEO optimization.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Bootstrap 5 (via CDN) + custom CSS
- **i18n**: next-intl with URL-based routing (/uk/, /en/, /pl/)
- **Animations**: framer-motion
- **Icons**: lucide-react

### Routing Structure
- Uses App Router with `[locale]` dynamic segment
- Routes: `/[locale]` (home), `/[locale]/news`, `/[locale]/news/[slug]`
- Middleware handles locale detection and redirects

### Internationalization
- **Library**: next-intl
- **Languages**: Ukrainian (uk - default), English (en), Polish (pl)
- **Translations**: JSON files in `i18n/messages/`
- **Routing**: URL prefixes for each language
- `useTranslations()` hook for client components
- `getTranslations()` for server components

### Path Aliases (configured in jsconfig.json)
- `@/*` → root
- `@/components/*` → `components/*`
- `@/sections/*` → `components/sections/*`
- `@/lib/*` → `lib/*`
- `@/i18n/*` → `i18n/*`

### Component Organization
- `app/[locale]/` - Route-level pages
- `components/layout/` - Header, Footer
- `components/sections/` - Hero, About, Contact
- `components/ui/` - Button, Card
- `lib/` - Utility functions
- `i18n/` - Internationalization config and translations

### Key Files
- `middleware.js` - Locale routing middleware
- `i18n/routing.js` - Locale configuration
- `i18n/request.js` - Server-side i18n config
- `app/sitemap.js` - Dynamic sitemap generation
- `app/robots.js` - Robots.txt generation

### SEO Features
- Server-side rendered HTML for crawlers
- `generateMetadata()` for each page
- JSON-LD structured data (Organization, LocalBusiness, FAQ)
- Hreflang alternates for all languages
- Dynamic sitemap with all routes
