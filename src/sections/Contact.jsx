import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";
import { detectMobile } from "../utils/detectMobile";
import { div } from "framer-motion/client";

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

  const makeRequest = async () => {
    const response = await fetch("https://mixfood.in.ua/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "HUESOS",
        email: "HUESOS",
        phone: "PIDORAS",
      }),
    });
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

      {isMobile ? (
        <div>
          <div className="justify-self-center">
            <div className="d-flex align-items-center fle/x-column gap-2">
              <div>
                <p className="d-flex align-items-start gap-2 text-secondary">
                  <Mail size={20} className="me-2" />
                  <p className="m-0 p-0">
                    <a
                      href="mailto:office.mixfood@gmail.com"
                      className="text-decoration-none text-dark"
                    >
                      office.mixfood@gmail.com
                    </a>
                  </p>
                </p>
                <p className="d-flex align-items-start gap-2 text-secondary">
                  <Phone size={20} className="me-2" />{" "}
                  <a
                    href="tel:+380987654321"
                    className="text-decoration-none text-dark"
                  >
                    +38 (098) 765-43-21
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <Card className="shadow border-0">
              <CardContent className="p-4">
                {submitted ? (
                  <div style={{ height: "400px", width: "500px" }}>
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
                  </div>
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
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="mb-2">
              <p className="d-flex align-items-start gap-2 text-secondary">
                <Mail size={20} className="me-2" />
                <p className="m-0 p-0">
                  <a
                    href="mailto:office.mixfood@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    office.mixfood@gmail.com
                  </a>
                </p>
              </p>
              <p className="d-flex align-items-start gap-2 text-secondary">
                <Phone size={20} className="me-2" />{" "}
                <a
                  href="tel:+380987654321"
                  className="text-decoration-none text-dark"
                >
                  +38 (098) 765-43-21
                </a>
              </p>
            </div>
          </div>

          <div style={{ width: "50vw" }}>
            <Card className="shadow border-0">
              <CardContent className="p-4">
                {submitted ? (
                  <div style={{ height: "400px", width: "500px" }}>
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
                  </div>
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
                    <p id="contact-help" className="form-text mt-2 mb-0">
                      {t(
                        "contact.privacyNote",
                        "Надсилаючи форму, ви погоджуєтесь на обробку персональних даних для відповіді на запит."
                      )}
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
}
