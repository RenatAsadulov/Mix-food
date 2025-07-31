import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../i18n.jsx";

export default function NewsSection() {
  const { t, lang } = useI18n();
  const newsData = t("news.items");
  return (
    <section id="news" className="bg-light py-5">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h3 fw-bold text-center mb-4"
      >
        {t("news.heading")}
      </motion.h3>
      <div className="container">
        <div className="row g-4">
          {newsData.map((item) => (
            <motion.div
              key={item.title}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-100">
                <CardContent className="d-flex flex-column h-100">
                  <h4 className="h5 fw-semibold mb-2 flex-grow-1">
                    {item.title}
                  </h4>
                  <time className="text-body-secondary mb-2">
                    {new Date(item.date).toLocaleDateString(
                      lang === "en" ? "en-GB" : lang,
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </time>
                  <p className="text-body flex-grow-1">{item.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
