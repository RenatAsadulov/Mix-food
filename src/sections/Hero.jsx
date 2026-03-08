import { motion } from "framer-motion";
import { useI18n } from "../i18n/i18n";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="hero" className="hero-section position-relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="hero-bg position-absolute w-100 h-100"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/images/fruit-molecules-1.jpg"
          alt="Food flavoring molecules"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="hero-gradient position-absolute top-0 start-0 w-100 h-100"></div>
      </motion.div>

      {/* Content */}
      <div className="hero-overlay position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-badge mb-4 d-inline-block"
              >
                <span className="badge bg-white bg-opacity-25 text-white px-4 py-2 rounded-pill backdrop-blur">
                  Official JAR Representative in Ukraine
                </span>
              </motion.div>

              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="fw-bold display-3 mb-4 text-white hero-title"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t("hero.title")}
              </motion.h1>

              <motion.p
                id="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto fs-4 mb-5 text-white hero-subtitle"
                style={{ maxWidth: "45rem", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
              >
                {t("hero.subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a
                  href="#contact"
                  className="btn btn-light btn-lg px-5 py-3 rounded-pill hero-cta shadow-lg"
                >
                  <span className="me-2">{t("hero.cta")}</span>
                  <ArrowRight size={20} className="d-inline" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-bg {
          z-index: 0;
        }

        .hero-gradient {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.85) 0%,
            rgba(118, 75, 162, 0.85) 100%
          );
        }

        .hero-overlay {
          z-index: 1;
          padding: 8rem 0;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
        }

        .hero-subtitle {
          opacity: 0.95;
        }

        .hero-cta {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .hero-overlay {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
}
