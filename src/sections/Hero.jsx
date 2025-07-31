import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n.jsx";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      className="bg-hero-pattern bg-cover bg-center min-h-screen py-24 sm:py-32 text-center text-white"
      id="hero"
    >
      <div className="backdrop-brightness-75 py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          {t("hero.heading")}
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          {t("hero.text")}
        </p>
        <Button asChild size="lg">
          <a href="#contact">{t("hero.button")}</a>
        </Button>
      </div>
    </section>
  );
}
