import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const newsData = [
  {
    title: "New line of natural flavorings introduced",
    date: "2025-07-15",
    excerpt:
      "We expand our portfolio with flavors developed together with JAR.",
  },
  {
    title: "Direct deliveries from Poland established",
    date: "2025-06-20",
    excerpt:
      "Our logistics hub ensures even faster shipping to Ukrainian clients.",
  },
  {
    title: "Collaboration with market leaders",
    date: "2025-05-10",
    excerpt:
      'Companies like "\u041b\u0435\u0432" and "\u041b\u0430\u0441\u0443\u043d\u043a\u0430" trust MixFood with their ingredient supply.',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-gray-50 py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        News
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
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
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
