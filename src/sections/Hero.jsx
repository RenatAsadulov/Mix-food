import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="fw-bold display-4 mb-4"
        >
          {t("hero.title")}
        </motion.h2>
        <p className="mx-auto fs-5 mb-4" style={{ maxWidth: "40rem" }}>
          {t("hero.subtitle")}
        </p>
        <Button asChild size="lg">
          <a className="text-decoration-none text-light" href="#contact">
            {t("hero.cta")}
          </a>
        </Button>
      </div>
    </section>
  );
}
