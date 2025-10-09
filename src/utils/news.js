const baseDates = [
  "2025-07-15",
  "2025-06-20",
  "2025-05-10",
];

export function getNewsItems(translatedItems = []) {
  return translatedItems.map((item, idx) => ({
    ...item,
    date: baseDates[idx] ?? baseDates[baseDates.length - 1],
    slug: `news-${idx + 1}`,
    id: idx + 1,
  }));
}

export function formatNewsDate(dateString, locale = "en-GB") {
  return new Date(dateString).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
