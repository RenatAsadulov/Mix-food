import { motion } from "framer-motion";
import { useI18n } from "../i18n.jsx";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="container py-5">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h3 fw-bold text-center mb-4"
      >
        {t("about.heading")}
      </motion.h3>
      <p className="fs-5 text-body mb-3">
        {t("about.p1")}
      </p>
      <p className="fs-5 text-body">
        {t("about.p2")}
      </p>
    </section>
  );
}
