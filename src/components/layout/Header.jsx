import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useI18n } from "../../i18n/i18n";
import { Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  useEffect(() => {}, [lang]);

  const navLinks = [
    { href: import.meta.env.BASE_URL, label: t("nav.about") },
    { href: "news", label: t("nav.news") },
    { href: "contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky-top bg-white shadow">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <h1 className="fs-2 fw-bold text-primary m-0">
          <Link to="/">MixFood</Link>
        </h1>
        <nav className="d-none d-md-block">
          <ul className="d-flex gap-4 list-unstyled mb-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-secondary nav-link-hover-primary text-decoration-none text-success fs-5 fw-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="form-select form-select-sm ms-3 w-auto"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="pl">🇵🇱 PL</option>
          <option value="uk">🇺🇦 UA</option>
        </select>
        <button
          className="btn btn-light d-md-none p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
      </div>
      {open && (
        <ul className="d-md-none bg-white shadow-sm list-unstyled d-flex flex-column gap-3 p-3 mb-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="d-block text-secondary nav-link-hover-primary py-2 text-decoration-none"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
