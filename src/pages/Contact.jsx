import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "../i18n/i18n";
import { useRef, useState } from "react";

export const ContactForm = () => {
  const { t } = useI18n();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    setForm((s) => ({ ...s, [name]: value }));
    if (name === "email") {
      setEmailError("");
    }
    if (name === "phone") {
      setPhoneError("");
    }
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());

  const isValidPhone = (phone) => {
    if (typeof phone !== "string") return false;

    const cleaned = phone.trim().replace(/[\s().-]/g, "");

    if (!/^\+?\d+$/.test(cleaned)) return false;

    if (cleaned.startsWith("+")) {
      return /^\+[1-9]\d{6,14}$/.test(cleaned);
    }

    return /^\d{7,12}$/.test(cleaned);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // валидация email
    if (!isValidEmail(form.email)) {
      setEmailError(t("contact.emailInvalid", "Некоректний email"));
      emailRef.current?.focus();
      return;
    }

    // валидация phone
    if (!isValidPhone(form.phone)) {
      setPhoneError(t("contact.phoneInvalid"));
      phoneRef?.current?.focus();
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-4">
      <div className="container my-2">
        <div className="w-75 col-12 col-md-10 col-lg-6 mx-auto d-flex flex-column align-items-center">
          <header className="w-100 text-center mb-3">
            <h1 id="contact-title" className="h2 m-0">
              {t("contact.title")}
            </h1>
            <p className="w-75 mx-auto text-secondary mt-2 mb-0">
              {t(
                "contact.lead",
                "Заповніть форму або скористайтеся контактними даними — ми відповімо впродовж робочого дня."
              )}
            </p>
          </header>
          {submitted ? (
            <div className="mt-4 shadow border-0 p-5 rounded">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <h4 className="fs-4 fw-semibold mb-2">
                  {t("contact.successTitle")}
                </h4>
                <p className="text-secondary mb-0">
                  {t("contact.successMessage")}
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-lg-8 mb-6">
                <Card className="w-100 shadow border-0">
                  <CardContent className="p-4">
                    <form
                      noValidate
                      onSubmit={handleSubmit}
                      aria-describedby="contact-help"
                    >
                      {/* скрытый honeypot (простой антиспам, не влияет на функциональность) */}
                      <input
                        type="text"
                        name="_hp"
                        tabIndex="-1"
                        autoComplete="off"
                        className="position-absolute opacity-0"
                        aria-hidden="true"
                      />

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
                          className="form-control"
                          autoComplete="name"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          {t("contact.email")}
                        </label>
                        <input
                          ref={emailRef}
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`form-control${
                            emailError ? " is-invalid" : ""
                          }`}
                          autoComplete="email"
                          inputMode="email"
                          aria-invalid={emailError ? "true" : "false"}
                          aria-describedby={
                            emailError ? "emailError" : undefined
                          }
                        />
                        {emailError && (
                          <div
                            id="emailError"
                            className="invalid-feedback d-block"
                          >
                            {emailError}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          {t("contact.phone")}
                        </label>
                        <input
                          ref={phoneRef}
                          type="tel"
                          id="phone"
                          name="phone"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          value={form.phone}
                          onChange={handleChange}
                          className={`form-control${
                            phoneError ? " is-invalid" : ""
                          }`}
                          autoComplete="tel-national"
                          aria-invalid={phoneError ? "true" : "false"}
                          aria-describedby={
                            phoneError ? "phoneError" : undefined
                          }
                        />
                        {phoneError && (
                          <div
                            id="phoneError"
                            className="invalid-feedback d-block"
                          >
                            {phoneError}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          {t("contact.message")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className="form-control"
                          autoComplete="off"
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
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
