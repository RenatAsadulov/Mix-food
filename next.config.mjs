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
};

export default withNextIntl(nextConfig);
