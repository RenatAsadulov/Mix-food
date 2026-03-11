import { Helmet } from "react-helmet-async";

const SITE_URL = "https://mixfood.in.ua";
const LANGUAGES = ["uk", "pl", "en"];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MixFood",
  url: SITE_URL,
  description:
    "MixFood - українська компанія з постачання харчових ароматизаторів та інгредієнтів",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "MixFood",
  url: SITE_URL,
  description:
    "MixFood - постачальник харчових ароматизаторів та інгредієнтів для харчової промисловості",
  image: `${SITE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Садова, 1",
    addressLocality: "Київ",
    addressRegion: "Київська область",
    postalCode: "01001",
    addressCountry: "UA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.4501,
    longitude: 30.5234,
  },
  telephone: "+380-44-123-4567",
  email: "info@mixfood.in.ua",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function SEO({
  title,
  description,
  path = "/",
  lang = "uk",
  breadcrumbs = null,
  article = null,
  faq = null,
  speakable = null,
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  const structuredData = [organizationSchema, localBusinessSchema];

  if (breadcrumbs) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    });
  }

  if (article) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      publisher: {
        "@type": "Organization",
        name: "MixFood",
        url: SITE_URL,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
    });
  }

  if (faq && faq.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (speakable && speakable.length > 0) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: speakable,
      },
      url: canonicalUrl,
    });
  }

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
      <meta property="og:locale" content={lang} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

      {LANGUAGES.map((lng) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={`${SITE_URL}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />

      <script type="application/ld+json">
        {JSON.stringify(
          structuredData.length === 1 ? structuredData[0] : structuredData
        )}
      </script>
    </Helmet>
  );
}
