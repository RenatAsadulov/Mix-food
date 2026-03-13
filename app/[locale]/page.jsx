import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

const SITE_URL = 'https://mixfood.in.ua';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/`,
      languages: {
        'uk': `${SITE_URL}/uk/`,
        'en': `${SITE_URL}/en/`,
        'pl': `${SITE_URL}/pl/`,
        'x-default': `${SITE_URL}/uk/`,
      },
    },
    openGraph: {
      title: t('homeTitle'),
      description: t('homeDescription'),
      url: `${SITE_URL}/${locale}/`,
      siteName: 'MixFood',
      images: [{ url: `${SITE_URL}/images/fruit-molecules-1.jpg` }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('homeDescription'),
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'faq' });

  const faqItems = t.raw('items');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MixFood",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+380987654321",
      "contactType": "sales",
      "availableLanguage": ["Ukrainian", "Polish", "English"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MixFood",
    "image": `${SITE_URL}/images/fruit-molecules-1.jpg`,
    "url": SITE_URL,
    "telephone": "+380987654321",
    "email": "office.mixfood@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <Contact />
    </>
  );
}
