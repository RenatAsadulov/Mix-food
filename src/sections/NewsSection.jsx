import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../i18n/i18n";

const baseDates = [
  "2025-07-15",
  "2025-06-20",
  "2025-05-10",
];

export default function NewsSection() {
  const { t, lang } = useI18n();
  const newsData = t("news.items").map((item, idx) => ({ ...item, date: baseDates[idx] }));
  return (
    <section id="news" className="bg-gray-50 py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        {t("news.title")}
      </motion.h3>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h4 className="text-xl font-semibold mb-2 flex-1">
                  {item.title}
                </h4>
                <time className="text-sm text-gray-500 mb-4 block">
                  {new Date(item.date).toLocaleDateString(
                    lang === "pl" ? "pl-PL" : lang === "uk" ? "uk-UA" : "en-GB",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </time>
                <p className="text-gray-700 flex-1">{item.excerpt}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
