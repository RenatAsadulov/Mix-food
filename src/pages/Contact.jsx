import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";
import { useState } from "react";

export const ContactForm = () => {
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
    <div className="col-md-6 flex justify-center">
      <CardContent className="shadow border-0">
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
              <p className="text-secondary">{t("contact.successMessage")}</p>
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
      </CardContent>
    </div>
  );
};
