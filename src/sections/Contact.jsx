import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="container contact-section section-padding">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h3 fw-bold text-center mb-4"
      >
        {t("contact.heading")}
      </motion.h3>
      <div className="row g-4">
        <div className="col-md-6">
          <p className="d-flex align-items-center gap-2 text-body">
            <Mail size={20} /> info@mixfood.com
          </p>
          <p className="d-flex align-items-center gap-2 text-body">
            <Phone size={20} /> +380 (44) 123-45-67
          </p>
          <p className="d-flex align-items-center gap-2 text-body">
            <MapPin size={20} /> Kyiv, Khreshchatyk 1
          </p>
        </div>

        <div className="col-md-6">
          <Card>
            <CardContent>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
              >
                <h4 className="text-xl font-semibold mb-2">{t("contact.thankTitle")}</h4>
                <p className="text-gray-700">{t("contact.thankText")}</p>
              </motion.div>
            ) : (
              <form className="vstack gap-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="form-label">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <Button type="submit" className="w-100">
                  {t("contact.send")}
                </Button>
              </form>
            )}
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
