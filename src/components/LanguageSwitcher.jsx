import { useI18n } from "../i18n.jsx";

const languages = [
  { code: "en", label: "EN", emoji: "\uD83C\uDDEC\uD83C\uDDE7" }, // UK flag
  { code: "uk", label: "UA", emoji: "\uD83C\uDDFA\uD83C\uDDE6" },
  { code: "pl", label: "PL", emoji: "\uD83C\uDDF5\uD83C\uDDF1" },
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
      className={`border border-gray-300 rounded px-2 py-1 text-sm ${className}`}
    >
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.emoji} {lng.label}
        </option>
      ))}
    </select>
  );
}
