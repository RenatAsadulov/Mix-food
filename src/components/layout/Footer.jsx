import { useI18n } from "../../i18n/i18n";
import { detectMobile } from "../../utils/detectMobile.js";

export default function Footer() {
  const { t } = useI18n();
  const isMobide = detectMobile();

  console.log(isMobide);

  if (!isMobide) {
    return (
      <footer className="bg-dark text-light py-3 text-center fixed-bottom">
        <span className="me-3">
          <i className="fa-solid fa-phone text-white"></i>{" "}
          <a
            href="tel:+380987654321"
            className="text-decoration-none text-white"
          >
            +38 (098) 765-43-21
          </a>
        </span>
        <span>
          <i className="fa-solid fa-envelope text-white"></i>{" "}
          <a
            href="mailto:office.mixfood@gmail.com"
            className="text-decoration-none text-white"
          >
            office.mixfood@gmail.com
          </a>
        </span>
        <p className="mt-2">
          © {new Date().getFullYear()} MixFood. {t("footer.rights")}
        </p>
      </footer>
    );
  }

  return (
    <footer className="d-flex justify-content-around bg-dark text-light py-3 text-center fixed-bottom">
      <p>
        <i className="fa-solid fa-phone text-white me-2"></i>{" "}
        <a href="tel:+380987654321" className="text-decoration-none text-white">
          +38 (098) 765-43-21
        </a>
      </p>
      <p>
        © {new Date().getFullYear()} MixFood. {t("footer.rights")}
      </p>
      <p>
        <i className="fa-solid fa-envelope text-white me-2"></i>{" "}
        <a
          href="mailto:office.mixfood@gmail.com"
          className="text-decoration-none text-white"
        >
          office.mixfood@gmail.com
        </a>
      </p>
    </footer>
  );
}
