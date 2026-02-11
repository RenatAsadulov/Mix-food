import Hero from "@/sections/Hero";
import About from "@/sections/About";
import NewsSection from "@/sections/NewsSection";
import Contact from "@/sections/Contact";
import SEO from "../components/seo/SEO";
import { useI18n } from "../i18n/i18n";

export default function Home() {
  const { t, lang } = useI18n();

  const faqItems = t("faq.items");
  const faqData = Array.isArray(faqItems)
    ? faqItems.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))
    : [];

  return (
    <>
      <SEO
        title={t("seo.homeTitle")}
        description={t("seo.homeDescription")}
        path="/"
        lang={lang}
        faq={faqData}
        speakable={["#hero-title", "#hero-subtitle", "#about-title"]}
      />
      <Hero />
      <About />
      <NewsSection />
      <Contact />
    </>
  );
}
