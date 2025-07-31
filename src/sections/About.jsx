import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        About us
      </motion.h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        MixFood is a Ukrainian company focused on supplying food flavorings and
        ingredients. We import high‑quality materials from our Polish partner
        JAR and work with market leaders such as «Лев» and «Ласунка».
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Our mission is to help manufacturers develop outstanding products by
        offering reliable deliveries, technical expertise and complete flavor
        solutions.
      </p>
    </section>
  );
}
