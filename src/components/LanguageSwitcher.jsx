import { useI18n } from "../i18n.jsx";

const languages = [
  { code: "en", label: "English", emoji: "\uD83C\uDDEC\uD83C\uDDE7" }, // UK flag emoji
  { code: "uk", label: "Українська", emoji: "\uD83C\uDDFA\uD83C\uDDE6" },
  { code: "pl", label: "Polski", emoji: "\uD83C\uDDF5\uD83C\uDDF1" },
];

export default function LanguageSwitcher({ className = "", onSelect }) {
  const { lang, setLang } = useI18n();

  const changeLanguage = (code) => {
    setLang(code);
    if (onSelect) onSelect(code);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`flex items-center gap-1 text-sm px-2 py-1 rounded transition-colors border border-gray-300 hover:bg-gray-100 ${
            lang === lng.code ? "bg-gray-200" : "bg-white"
          }`}
        >
          <span>{lng.emoji}</span>
          <span>{lng.label}</span>
        </button>
      ))}
    </div>
  );
}
