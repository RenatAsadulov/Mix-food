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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-primary">MixFood</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-white shadow-inner flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block text-gray-700 hover:text-primary py-2"
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
