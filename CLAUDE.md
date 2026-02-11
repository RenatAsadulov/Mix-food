# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build (outputs to dist/, auto-generates sitemap)
npm run preview   # Preview production build locally
```

## Architecture Overview

This is a React 18 single-page application for MixFood, a Ukrainian food flavorings company. Built with Vite and styled using Bootstrap 5 (loaded via CDN).

### Routing Structure
- Uses `react-router-dom` v7 with `createBrowserRouter`
- Routes: `/` (home), `/news`, `/news/:slug`, `/contact`
- Layout wrapper in `Router.jsx` provides Header/Footer around all pages

### Internationalization
- Custom i18n implementation in `src/i18n/i18n.jsx`
- Three languages: English (en), Polish (pl), Ukrainian (uk)
- All translations are inline in the i18n file (not external JSON)
- `useI18n()` hook provides `t()` function, `lang`, and `setLang`
- Language detection from browser, persisted to localStorage

### Path Aliases (configured in vite.config.js)
- `@/components` → `src/components`
- `@/sections` → `src/sections`

### Component Organization
- `src/pages/` - Route-level components (Home, News, NewsDetail, Contact)
- `src/sections/` - Page sections used on Home (Hero, About, NewsSection, Contact)
- `src/components/layout/` - Header, Footer
- `src/components/ui/` - Reusable UI primitives (button, card)
- `src/components/features/` - Feature-specific components
- `src/utils/` - Utility functions (browser detection, news helpers)

### Key Dependencies
- `framer-motion` - Animations
- `lucide-react` - Icons
- `react-helmet-async` - Document head management
