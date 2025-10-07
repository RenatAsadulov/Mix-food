import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../i18n/i18n";

const baseDates = ["2025-07-15", "2025-06-20", "2025-05-10"];

export default function NewsSection() {
  const { t, lang } = useI18n();
  const newsData = t("news.items").map((item, idx) => ({
    ...item,
    date: baseDates[idx],
  }));
  return (
    <section id="news" className="container py-3">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="fs-2 fw-bold mb-5 text-center"
      >
        {t("news.title")}
      </motion.h3>
      <div className="container">
        <div className="row g-4">
          {newsData.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-100">
                  <CardContent className="d-flex flex-column h-100 p-4">
                    <h4 className="fs-4 fw-semibold mb-2 flex-grow-1">
                      {item.title}
                    </h4>
                    <time className="text-muted mb-3 d-block">
                      {new Date(item.date).toLocaleDateString(
                        lang === "pl"
                          ? "pl-PL"
                          : lang === "uk"
                          ? "uk-UA"
                          : "en-GB",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </time>
                    <p className="text-secondary flex-grow-1">{item.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
