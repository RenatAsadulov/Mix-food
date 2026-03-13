"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "uk", label: "UA", flag: "🇺🇦" },
  { code: "pl", label: "PL", flag: "🇵🇱" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const langDropdownRef = useRef(null);
  const langDropdownMobileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target) &&
        langDropdownMobileRef.current &&
        !langDropdownMobileRef.current.contains(event.target)
      ) {
        setLangOpen(false);
      }
    };

    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langOpen]);

  const setUserLanguage = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <header
      className={`header-modern sticky-top ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3">
          {/* Logo */}
          <Link href="/" className="logo-wrapper d-flex align-items-center text-decoration-none">
            <img
              src="/favicon.svg"
              alt="MixFood Logo"
              className="logo-img me-2"
            />
            <span className="logo-text fw-bold">MixFood</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-modern text-decoration-none fw-medium position-relative"
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher - Desktop */}
            <div className="position-relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="lang-toggle d-flex align-items-center gap-2 btn btn-sm border-0 bg-transparent"
                aria-label="Select language"
              >
                <span className="lang-flag">{currentLang?.flag}</span>
                <span className="fw-medium">{currentLang?.label}</span>
                <ChevronDown size={16} className={langOpen ? "rotate-180" : ""} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="lang-dropdown position-absolute top-100 end-0 mt-2 bg-white rounded-3 shadow-lg overflow-hidden"
                    style={{ minWidth: "120px", zIndex: 1000 }}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => setUserLanguage(language.code)}
                        className={`lang-dropdown-item w-100 d-flex align-items-center gap-2 px-3 py-2 border-0 bg-transparent ${
                          locale === language.code ? "active" : ""
                        }`}
                      >
                        <span>{language.flag}</span>
                        <span className="fw-medium">{language.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="btn btn-primary btn-sm px-4 rounded-pill"
            >
              {t("hero.cta")}
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            {/* Language Switcher - Mobile */}
            <div className="position-relative" ref={langDropdownMobileRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="lang-toggle-mobile btn btn-sm btn-light rounded-circle p-2"
                aria-label="Select language"
              >
                <span>{currentLang?.flag}</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="lang-dropdown-mobile position-absolute top-100 end-0 mt-2 bg-white rounded-3 shadow-lg"
                    style={{ zIndex: 1000 }}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => setUserLanguage(language.code)}
                        className={`lang-dropdown-item-mobile btn btn-sm border-0 ${
                          locale === language.code ? "active" : ""
                        }`}
                      >
                        {language.flag}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="btn btn-light rounded-circle p-2"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu d-lg-none overflow-hidden"
          >
            <div className="container py-3">
              <ul className="list-unstyled mb-0">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="mb-2"
                  >
                    <a
                      href={link.href}
                      className="mobile-menu-link d-block px-3 py-3 text-decoration-none fw-medium rounded-3"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-3"
                >
                  <a
                    href="#contact"
                    className="btn btn-primary w-100 rounded-pill"
                    onClick={() => setOpen(false)}
                  >
                    {t("hero.cta")}
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
