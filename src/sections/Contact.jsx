import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4 bg-gray-50">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        {t("contact.title")}
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5" /> info@mixfood.com
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5" /> +380 (44) 123-45-67
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5" /> Kyiv, Khreshchatyk 1
          </p>
        </div>

        <Card className="border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <h4 className="text-xl font-semibold mb-2">{t("contact.successTitle")}</h4>
                <p className="text-gray-700">{t("contact.successMessage")}</p>
              </motion.div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 p-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("contact.send")}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
