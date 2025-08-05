import { motion } from "framer-motion";
import { useI18n } from "../i18n/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="container py-5">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="fs-2 fw-bold mb-4 text-center"
      >
        {t("about.title")}
      </motion.h3>
      <p className="fs-5 lh-lg text-secondary mb-3">
        {t("about.text1")}
      </p>
      <p className="fs-5 lh-lg text-secondary">
        {t("about.text2")}
      </p>
    </section>
  );
}
