import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n.jsx";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="display-4 fw-bold mb-4"
            >
              {t("hero.heading")}
            </motion.h2>
            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: "40rem" }}>
              {t("hero.text")}
            </p>
            <Button asChild size="lg">
              <a href="#contact">{t("hero.button")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
