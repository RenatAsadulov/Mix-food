import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Canonical URLs, hreflang alternates and sitemap.xml are all written with a
  // trailing slash. Without this the app served /uk and 308-redirected /uk/,
  // so every canonical pointed at a redirect instead of at itself.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // The Polish locale was dropped, but /pl/* stayed in Google's index and only
  // 404s, which tells Google the page is gone without naming a replacement.
  // A permanent redirect passes the accumulated signals on to the Ukrainian
  // version and clears the stale results far faster. Each locale is a single
  // page, so a deeper /pl/ path has no /uk/ counterpart to land on and
  // everything collapses onto the home page instead of one 404 to another.
  async redirects() {
    return [
      { source: '/pl/:path*', destination: '/uk/', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
