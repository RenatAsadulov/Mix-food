import { motion } from "framer-motion";
import { useI18n } from "../i18n/i18n";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        {t("about.title")}
      </motion.h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        {t("about.text1")}
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        {t("about.text2")}
      </p>
    </section>
  );
}
