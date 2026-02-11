import fs from "node:fs";
import path from "node:path";

const BASE = "https://mixfood.in.ua";
const routes = [
  "/",
  "/news/",
  "/news/news-1/",
  "/news/news-2/",
  "/news/news-3/",
  "/contact/",
];

// ISO-дата обновления (можно улучшить под ваши коммиты/CI)
const lastmod = new Date().toISOString();

const urls = routes
  .map((p) => {
    const loc = `${BASE}${p}`;
    const changefreq = p === "/" ? "weekly" : "monthly";
    let priority = "0.8";
    if (p === "/") priority = "1.0";
    else if (p.startsWith("/news/news-")) priority = "0.6";
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  })
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outDir = path.resolve("dist");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
console.log("✓ sitemap.xml generated");
