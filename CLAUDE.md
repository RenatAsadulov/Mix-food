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
- **i18n**: next-intl with URL-based routing (/uk/, /en/)
- **Animations**: framer-motion
- **Icons**: lucide-react

### Routing Structure
- Uses App Router with `[locale]` dynamic segment
- Routes: `/[locale]` (the single home page) and `/api/contact` (form handler)
- `trailingSlash: true`, so every canonical URL ends in `/`
- Middleware prefixes the locale. Locale *detection* is deliberately off: `/` always
  redirects to `/uk/` regardless of `Accept-Language`, and no `NEXT_LOCALE` cookie is set.
  See the comments in `i18n/routing.js` before turning either back on.

### Internationalization
- **Library**: next-intl
- **Languages**: Ukrainian (uk - default), English (en). Polish was retired; `/pl/*`
  permanently redirects to `/uk/` via `next.config.mjs` to flush it from Google's index
- **Translations**: JSON files in `i18n/messages/`
- **Routing**: URL prefixes for each language
- `useTranslations()` hook for client components
- `getTranslations()` for server components

### Path Aliases (configured in jsconfig.json)
- `@/*` → root
- `@/components/*` → `components/*`
- `@/sections/*` → `components/sections/*`
- `@/i18n/*` → `i18n/*`

### Component Organization
- `app/[locale]/` - Route-level pages
- `components/layout/` - Header, Footer
- `components/sections/` - Hero, About, Contact
- `components/ui/` - Button, Card, FlagIcon
- `app/api/contact/` - contact form handler (Resend; needs `RESEND_API_KEY`)
- `i18n/` - Internationalization config and translations

### Key Files
- `middleware.js` - Locale routing middleware
- `i18n/routing.js` - Locale configuration
- `i18n/request.js` - Server-side i18n config
- `public/sitemap.xml` - sitemap, maintained by hand (two URLs: `/uk/`, `/en/`)
- `public/robots.txt` - robots.txt, maintained by hand
- `.github/workflows/deploy_client.yaml` - build + deploy to the VPS

### SEO Features
- Server-side rendered HTML for crawlers
- `generateMetadata()` for each page
- JSON-LD structured data (Organization, LocalBusiness, FAQ)
- Hreflang alternates (uk / en / x-default) written in `app/[locale]/layout.jsx`.
  next-intl's automatic `Link:` header is disabled so it cannot contradict them.
- Static sitemap; update `lastmod` by hand when page content actually changes

## Deployment

Push to `main` triggers `.github/workflows/deploy_client.yaml`: a `output: 'standalone'`
build is rsynced to `/var/www/mixfood/client` on the VPS and restarted under pm2.
There is no source checkout on the server, and each deploy runs `rsync --delete`, so
editing files on the server is always lost. Ship everything through this repo.
