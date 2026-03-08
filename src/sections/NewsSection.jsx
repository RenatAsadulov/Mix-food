import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "../i18n/i18n";
import { getNewsItems, formatNewsDate } from "../utils/news";

export default function NewsSection() {
  const { t, lang } = useI18n();
  const newsData = getNewsItems(t("news.items"));
  const locale = lang === "pl" ? "pl-PL" : lang === "uk" ? "uk-UA" : "en-GB";

  return (
    <section id="news" className="container py-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="fs-2 fw-bold mb-5 text-center"
      >
        {t("news.title")}
      </motion.h2>
      <div className="row g-4">
        {newsData.map((item) => (
          <div key={item.slug} className="col-md-6 col-lg-4 d-flex">
            <motion.div
              className="w-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-100">
                <CardContent className="d-flex flex-column h-100 p-4">
                  <h3 className="fs-5 fw-semibold mb-2">{item.title}</h3>
                  <time className="text-muted small mb-3 d-block">
                    {formatNewsDate(item.date, locale)}
                  </time>
                  <p className="text-secondary mb-0">{item.excerpt}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
