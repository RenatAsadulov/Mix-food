import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['uk', 'en'],
  defaultLocale: 'uk',
  localePrefix: 'always',
  // Off on purpose. With detection on, `/` answered 307 to either /uk/ or /en/
  // depending on the visitor's Accept-Language, but the response carried no
  // `Vary: Accept-Language` — so nginx or any CDN in front is free to hand the
  // Ukrainian redirect to an English visitor and back. It also set a
  // NEXT_LOCALE cookie on every crawl. Google is told about the English
  // version through hreflang/x-default, so `/` can just be a fixed redirect
  // to the default locale.
  localeDetection: false,
  // Nothing reads it once detection is off, and dropping it keeps `/` a plain
  // cacheable redirect instead of a per-visitor response.
  localeCookie: false,
  // The middleware's automatic `Link:` header announced x-default as `/`,
  // while the hreflang tags in app/[locale]/layout.jsx announce it as `/uk/`.
  // Two different x-default URLs for one page is a conflicting annotation and
  // Google may drop the whole hreflang cluster over it. The HTML tags are the
  // explicit, self-consistent set, so the header goes.
  alternateLinks: false
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
