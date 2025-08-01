import { useState } from "react";
import { Menu } from "lucide-react";
import { useI18n } from "../../i18n/i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  const navLinks = [
    { href: "/#about", label: t("nav.about") },
    { href: "/news", label: t("nav.news") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-primary">MixFood</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors"
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
          className="ml-4 border rounded p-1 text-sm"
        >
          <option value="en">🇬🇧 EN</option>
          <option value="pl">🇵🇱 PL</option>
          <option value="uk">🇺🇦 UA</option>
        </select>
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
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-gray-700 hover:text-primary py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="border rounded p-1 text-sm w-full"
            >
              <option value="en">🇬🇧 EN</option>
              <option value="pl">🇵🇱 PL</option>
              <option value="uk">🇺🇦 UA</option>
            </select>
          </li>
        </ul>
      )}
    </header>
  );
}
