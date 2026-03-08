import { motion } from "framer-motion";
import { useI18n } from "../i18n/i18n";
import { Users, Beaker, Truck, Globe, Target, Factory } from "lucide-react";

const sectionIcons = {
  whoWeAre: Factory,
  team: Users,
  production: Beaker,
  logistics: Truck,
  geography: Globe,
  approach: Target,
};

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="position-relative py-5 overflow-hidden">
      <div className="container py-4">
        <motion.h2
          id="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="display-4 fw-bold mb-5 text-center"
          style={{ letterSpacing: "-0.02em" }}
        >
          {t("about.title")}
        </motion.h2>

        {/* Bento Box Grid Layout */}
        <div className="row g-4 mb-5">
          {/* Large Hero Image Card - Top Left */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-card about-card-image h-100 position-relative overflow-hidden rounded-4">
              <img
                src="/images/fruit-molecules-6.jpg"
                alt="Food flavoring science"
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: "400px" }}
              />
              <div className="about-card-overlay position-absolute bottom-0 start-0 w-100 p-4">
                <div className="glass-card p-4 rounded-3">
                  <div className="d-flex align-items-center mb-2">
                    <Factory className="text-white me-2" size={28} />
                    <h3 className="h4 fw-bold mb-0 text-white">
                      {t("about.whoWeAre.title")}
                    </h3>
                  </div>
                  <p className="text-white mb-0 opacity-90">
                    {t("about.whoWeAre.text")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Card - Top Right */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-card h-100 p-4 rounded-4 bg-light">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="h4 fw-bold mb-0">{t("about.team.title")}</h3>
              </div>
              <ul className="list-unstyled mb-0">
                {t("about.team.items").map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="mb-3 d-flex"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-primary fw-bold me-2">→</span>
                    <span className="text-secondary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="row g-4 mb-5">
          {/* Production Card with Image - Middle Left */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-card h-100 rounded-4 overflow-hidden position-relative">
              <img
                src="/images/fruit-molecules-3.jpg"
                alt="Laboratory production"
                className="w-100 h-100 object-fit-cover position-absolute"
                style={{ minHeight: "350px" }}
              />
              <div className="position-relative p-4 h-100 d-flex flex-column justify-content-end">
                <div className="glass-card p-4 rounded-3">
                  <div className="d-flex align-items-center mb-2">
                    <Beaker className="text-white me-2" size={28} />
                    <h3 className="h4 fw-bold mb-0 text-white">
                      {t("about.production.title")}
                    </h3>
                  </div>
                  <p className="text-white mb-2 opacity-90">
                    {t("about.production.intro")}
                  </p>
                  <ul className="list-unstyled mb-2 small">
                    {t("about.production.items").map((item, idx) => (
                      <li key={idx} className="mb-1 text-white opacity-90">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logistics Card - Middle Center */}
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-card h-100 p-4 rounded-4 bg-white shadow-sm">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <Truck className="text-primary" size={32} />
                </div>
                <h3 className="h5 fw-bold mb-0">{t("about.logistics.title")}</h3>
              </div>
              <p className="text-secondary mb-3 small">
                {t("about.logistics.intro")}
              </p>
              <ul className="list-unstyled mb-0 small">
                {t("about.logistics.items").map((item, idx) => (
                  <li key={idx} className="mb-2 text-secondary">
                    <span className="text-primary">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Geography Card with Image - Middle Right */}
          <motion.div
            className="col-lg-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-card h-100 rounded-4 overflow-hidden position-relative">
              <img
                src="/images/fruit-molecules-4.jpg"
                alt="Global reach"
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: "350px" }}
              />
              <div className="about-card-overlay position-absolute bottom-0 start-0 w-100 p-3">
                <div className="glass-card p-3 rounded-3">
                  <div className="d-flex align-items-center mb-2">
                    <Globe className="text-white me-2" size={24} />
                    <h3 className="h6 fw-bold mb-0 text-white">
                      {t("about.geography.title")}
                    </h3>
                  </div>
                  <p className="text-white mb-0 small opacity-90">
                    {t("about.geography.text")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Approach Card - Full Width Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="about-card about-card-gradient p-5 rounded-4 text-center position-relative overflow-hidden">
            <div className="position-relative z-1">
              <Target className="text-white mb-3 mx-auto" size={48} />
              <h3 className="h3 fw-bold mb-3 text-white">
                {t("about.approach.title")}
              </h3>
              <p className="lead text-white mb-0 mx-auto" style={{ maxWidth: "800px" }}>
                {t("about.approach.text")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        .about-card-image img {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-card-image:hover img {
          transform: scale(1.05);
        }

        .about-card-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .about-card-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(var(--bs-primary-rgb), 0.1);
          border-radius: 12px;
        }

        .z-1 {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
