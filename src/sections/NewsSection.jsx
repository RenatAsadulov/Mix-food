import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/i18n";
import { getNewsItems, formatNewsDate } from "../utils/news";

export default function NewsSection() {
  const { t, lang } = useI18n();
  const newsData = getNewsItems(t("news.items"));
  const locale = lang === "pl" ? "pl-PL" : lang === "uk" ? "uk-UA" : "en-GB";
  const readMoreLabel =
    lang === "pl" ? "Czytaj więcej" : lang === "uk" ? "Детальніше" : "Read more";
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
            <div key={item.slug} className="col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-100 position-relative">
                  <CardContent className="d-flex flex-column h-100 p-4">
                    <h4 className="fs-4 fw-semibold mb-2 flex-grow-1">
                      {item.title}
                    </h4>
                    <time className="text-muted mb-3 d-block">
                      {formatNewsDate(item.date, locale)}
                    </time>
                    <p className="text-secondary flex-grow-1">{item.excerpt}</p>
                    <Link
                      to={`/news/${item.slug}`}
                      className="stretched-link mt-3 text-decoration-none fw-semibold text-primary"
                    >
                      {readMoreLabel}
                    </Link>
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
