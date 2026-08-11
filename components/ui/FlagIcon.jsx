/*
  Inline SVG flags.

  Emoji flags (🇺🇦 / 🇬🇧) are not rendered by every desktop browser/OS —
  where the font has no glyph they fall back to the bare regional-indicator
  letters, which is why the switcher used to read "UA UA" / "GB EN".
  Drawing them as SVG makes them render the same everywhere.

  Both flags use a 3:2 viewBox so they line up in the same row.
*/

const FLAGS = {
  ua: (
    <>
      <rect width="60" height="20" fill="#0057B7" />
      <rect y="20" width="60" height="20" fill="#FFD700" />
    </>
  ),
  gb: (
    <>
      <rect width="60" height="40" fill="#012169" />
      {/* Saltire of St Andrew, then St Patrick's red diagonals */}
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFF" strokeWidth="7" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
      {/* Cross of St George with its white fimbriation */}
      <path d="M30,0 V40 M0,20 H60" stroke="#FFF" strokeWidth="13" />
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8" />
    </>
  ),
};

export default function FlagIcon({ code, className = "" }) {
  const flag = FLAGS[code];
  if (!flag) return null;

  return (
    <svg
      viewBox="0 0 60 40"
      className={`lang-flag ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      {flag}
    </svg>
  );
}
