import { useI18n } from "../i18n.jsx";

const languages = [
  { code: "en", label: "English", emoji: "\uD83C\uDDEC\uD83C\uDDE7" },
  { code: "uk", label: "Українська", emoji: "\uD83C\uDDFA\uD83C\uDDE6" },
  { code: "pl", label: "Polski", emoji: "\uD83C\uDDF5\uD83C\uDDF1" },
];

export default function LanguageSwitcher({ className = "", onSelect }) {
  const { lang, setLang } = useI18n();

  const handleChange = (e) => {
    const code = e.target.value;
    setLang(code);
    if (onSelect) onSelect(code);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className={`form-select form-select-sm ${className}`}
      style={{ width: "auto", display: "inline-block" }}
    >
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.emoji} {lng.label}
        </option>
      ))}
    </select>
  );
}
