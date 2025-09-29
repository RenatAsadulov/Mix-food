import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";
import { detectMobile } from "../utils/detectMobile";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isMobile = detectMobile();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="container py-5">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="fs-2 fw-bold mb-4 text-center"
      >
        {t("contact.title")}
      </motion.h3>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="d-flex flex-column gap-2">
            <p className="d-flex align-items-center gap-2 text-secondary">
              <Mail size={20} className="me-2" /> info@mixfood.com
            </p>
            <p className="d-flex align-items-center gap-2 text-secondary">
              <Phone size={20} className="me-2" /> +380 (44) 123-45-67
            </p>
            <p className="d-flex align-items-center gap-2 text-secondary">
              <MapPin size={20} className="me-2" /> Kyiv, Khreshchatyk 1
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <Card className="shadow border-0">
            <CardContent className="p-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <h4 className="fs-4 fw-semibold mb-2">
                    {t("contact.successTitle")}
                  </h4>
                  <p className="text-secondary">
                    {t("contact.successMessage")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
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
                  <div className="mb-3">
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
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      style={{ height: "200px" }}
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
