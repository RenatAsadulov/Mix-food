import { useI18n } from "../../i18n/i18n";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer-modern mt-auto">
      <div className="footer-content">
        <div className="container py-5">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/favicon.svg"
                  alt="MixFood"
                  className="footer-logo me-2"
                />
                <h5 className="mb-0 fw-bold text-white">MixFood</h5>
              </div>
              <p className="footer-text mb-3">
                {t("hero.subtitle")}
              </p>
              <div className="footer-contact">
                <a
                  href="mailto:office.mixfood@gmail.com"
                  className="footer-link d-flex align-items-center mb-2"
                >
                  <Mail size={18} className="me-2" />
                  <span>office.mixfood@gmail.com</span>
                </a>
                <a
                  href="tel:+380987654321"
                  className="footer-link d-flex align-items-center mb-2"
                >
                  <Phone size={18} className="me-2" />
                  <span>+38 (098) 765-43-21</span>
                </a>
                <div className="footer-link d-flex align-items-start">
                  <MapPin size={18} className="me-2 mt-1 flex-shrink-0" />
                  <span>Ukraine</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h6 className="footer-heading mb-3">{t("nav.about")}</h6>
              <ul className="list-unstyled footer-links">
                <li className="mb-2">
                  <a href="#about" className="footer-link">
                    {t("about.whoWeAre.title")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="footer-link">
                    {t("about.team.title")}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="footer-link">
                    {t("about.production.title")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="col-lg-3 col-md-6 ms-auto">
              <h6 className="footer-heading mb-3">{t("nav.contact")}</h6>
              <p className="footer-text mb-3">
                {t("footer.contactCta")}
              </p>
              <a
                href="#contact"
                className="btn btn-light btn-sm px-4 rounded-pill w-100"
              >
                {t("hero.cta")}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <span className="footer-text-sm">
                  © {new Date().getFullYear()} MixFood. {t("footer.rights")}
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <span className="footer-text-sm">
                  {t("footer.jarRepresentative")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-modern {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          position: relative;
          overflow: hidden;
        }

        .footer-modern::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }

        .footer-logo {
          height: 32px;
          width: 32px;
        }

        .footer-heading {
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-size: 0.875rem;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-text-sm {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-link:hover {
          color: #fff;
          transform: translateX(4px);
        }

        .footer-contact .footer-link:hover {
          color: var(--bs-primary);
        }

        .footer-links .footer-link {
          display: inline-block;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
        }

        .btn-light {
          background: #fff;
          border: none;
          color: #1a202c;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-light:hover {
          background: var(--bs-primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 164, 25, 0.3);
        }
      `}</style>
    </footer>
  );
}
