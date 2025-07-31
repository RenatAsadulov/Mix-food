import { useState } from "react";
import { Menu } from "lucide-react";
import { useI18n } from "../../i18n.jsx";
import LanguageSwitcher from "../LanguageSwitcher.jsx";

const navLinks = [
  { id: "about", label: "nav.about" },
  { id: "news", label: "nav.news" },
  { id: "contact", label: "nav.contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="header-main sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <h1 className="h4 m-0 text-primary fw-bold">MixFood</h1>
        <nav className="d-none d-md-block">
          <ul className="nav align-items-center">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a href={`#${link.id}`} className="nav-link text-dark">
                  {t(link.label)}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
        <button
          className="btn btn-outline-secondary d-md-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
      </div>
      {open && (
        <ul className="d-md-none list-unstyled bg-white shadow-sm m-0 p-3">
          {navLinks.map((link) => (
            <li key={link.id} className="mb-2">
              <a
                href={`#${link.id}`}
                className="text-dark"
                onClick={() => setOpen(false)}
              >
                {t(link.label)}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher onSelect={() => setOpen(false)} />
          </li>
        </ul>
      )}
    </header>
  );
}
