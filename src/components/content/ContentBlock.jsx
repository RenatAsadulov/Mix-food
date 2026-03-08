import { motion } from "framer-motion";

/**
 * ContentBlock - Alternating image/text section component
 * @param {string} title - Section title
 * @param {string} text - Main paragraph text
 * @param {string[]} bullets - Optional bullet points
 * @param {string} image - Image URL
 * @param {string} imageAlt - Image alt text
 * @param {boolean} reverse - If true, image on right; otherwise image on left
 * @param {string} id - Section ID for anchor links
 * @param {boolean} bgLight - If true, use light background
 */
export default function ContentBlock({
  title,
  text,
  bullets = [],
  image,
  imageAlt = "",
  reverse = false,
  id,
  bgLight = false,
}) {
  return (
    <section
      id={id}
      className="py-5"
      style={bgLight ? { backgroundColor: "var(--color-bg-light)" } : {}}
    >
      <div className="container">
        <div
          className={`row align-items-center g-4 ${reverse ? "flex-row-reverse" : ""}`}
        >
          {/* Image Column */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="img-fluid rounded shadow-sm"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }}
              />
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="fs-2 fw-bold mb-3">{title}</h2>
              {text && (
                <p className="fs-5 lh-lg text-secondary mb-3">{text}</p>
              )}
              {bullets.length > 0 && (
                <ul className="list-unstyled">
                  {bullets.map((item, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <span
                        className="me-2 text-primary fw-bold"
                        style={{ minWidth: "1.25rem" }}
                      >
                        •
                      </span>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
