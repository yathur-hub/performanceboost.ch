// Erzeugt public/sitemap.xml aus den Routen der App. Läuft automatisch vor jedem Build (npm run build).
import { writeFileSync } from 'node:fs';
import { indexablePaths } from '../src/lib/routes';
import { SITE } from '../src/config/site';

const urls = indexablePaths()
  .filter((p) => p !== '/impressum' && p !== '/datenschutz')
  .map((p) => `  <url><loc>${SITE.baseUrl}${p === '/' ? '/' : p}</loc></url>`)
  .join('\n');

writeFileSync(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${indexablePaths().length - 2} URLs`);
