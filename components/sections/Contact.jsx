"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("Contact form error:", err);
      alert(t("errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  const contactChannels = [
    {
      icon: Phone,
      label: t("phone"),
      subtitle: "+38 (098) 765-43-21",
      href: "tel:+380987654321",
      color: "#00a419",
      gradient: "linear-gradient(135deg, #00a419 0%, #006b10 100%)",
    },
    {
      icon: Mail,
      label: t("email"),
      subtitle: "office.mixfood@gmail.com",
      href: "mailto:office.mixfood@gmail.com",
      color: "#00a419",
      gradient: "linear-gradient(135deg, #00a419 0%, #006b10 100%)",
    },
  ];

  return (
    <section id="contact" className="contact-modern position-relative py-5 overflow-hidden">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <h2 className="display-4 fw-bold mb-3">
                {t("title")}
              </h2>
              <p className="lead text-secondary mb-3" style={{ maxWidth: "600px", margin: "0 auto" }}>
                {t("lead")}
              </p>
              <div className="d-inline-flex align-items-center gap-2 text-secondary">
                <Clock size={18} />
                <span className="fw-medium">{t("workingDays")}: {t("workingTime")}</span>
              </div>
            </motion.div>

            {/* Instant Contact Channels */}
            <div className="row g-4 mb-5 justify-content-center">
              {contactChannels.map((channel, idx) => (
                <motion.div
                  key={channel.label}
                  className="col-sm-6 col-md-5 col-lg-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <a
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-channel text-decoration-none d-block h-100"
                  >
                    <div className="contact-channel-inner p-4 rounded-4 h-100 d-flex flex-column align-items-center text-center position-relative overflow-hidden">
                      <div
                        className="contact-channel-bg position-absolute top-0 start-0 w-100 h-100 opacity-0"
                        style={{ background: channel.gradient }}
                      ></div>
                      <div className="position-relative z-1 w-100">
                        <div
                          className="contact-icon mb-3 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "64px",
                            height: "64px",
                            background: `${channel.color}15`,
                          }}
                        >
                          <channel.icon size={28} style={{ color: channel.color }} />
                        </div>
                        <h3 className="h5 fw-bold mb-2 contact-channel-title">
                          {channel.label}
                        </h3>
                        <p className="small text-secondary mb-0 contact-channel-subtitle">
                          {channel.subtitle}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Optional Quick Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="btn btn-outline-primary px-5 py-3 rounded-pill"
                >
                  {t("sendQuickMessage")}
                </button>
              ) : (
                <div className="quick-form-wrapper mx-auto" style={{ maxWidth: "600px" }}>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="success-message p-5 rounded-4 bg-success bg-opacity-10"
                    >
                      <div className="mb-3 text-success">
                        <MessageCircle size={48} />
                      </div>
                      <h4 className="h4 fw-bold mb-2 text-success">
                        {t("successTitle")}
                      </h4>
                      <p className="text-secondary mb-0">
                        {t("successMessage")}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="quick-form p-4 rounded-4 bg-light"
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                          <label htmlFor="quick-name" className="form-label fw-semibold">
                            {t("yourName")}
                          </label>
                          <input
                            type="text"
                            id="quick-name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="form-control form-control-lg rounded-3"
                            placeholder={t("enterName")}
                          />
                        </div>
                        <div className="mb-3 text-start">
                          <label htmlFor="quick-email" className="form-label fw-semibold">
                            {t("yourEmail")}
                          </label>
                          <input
                            type="email"
                            id="quick-email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="form-control form-control-lg rounded-3"
                            placeholder={t("enterEmail")}
                          />
                        </div>
                        <div className="mb-3 text-start">
                          <label htmlFor="quick-phone" className="form-label fw-semibold">
                            {t("yourPhone")} <span className="fw-normal text-secondary">({t("optional")})</span>
                          </label>
                          <input
                            type="tel"
                            id="quick-phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="form-control form-control-lg rounded-3"
                            placeholder={t("enterPhone")}
                            autoComplete="tel"
                          />
                        </div>
                        <div className="mb-3 text-start">
                          <label htmlFor="quick-message" className="form-label fw-semibold">
                            {t("message")}
                          </label>
                          <textarea
                            id="quick-message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="form-control form-control-lg rounded-3"
                            placeholder={t("enterMessage")}
                          />
                        </div>
                        <div className="d-flex gap-2">
                          <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="btn btn-light px-4 py-2 rounded-pill"
                          >
                            {t("cancel")}
                          </button>
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="btn btn-primary px-5 py-2 rounded-pill flex-grow-1"
                          >
                            {isLoading ? t("sending") : t("sendMessage")}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-5 pt-4 border-top"
            >
              <p className="small text-secondary mb-0">
                {t("dataProtected")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
