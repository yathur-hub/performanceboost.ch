// Schreibt nach dem Build für jede indexierbare Route eine eigene HTML-Datei (dist/<pfad>.html)
// mit Title, Meta, Canonical, JSON-LD und dem gerenderten Seiteninhalt im Roh-HTML.
// Cloudflare liefert /loesungen/x aus dist/loesungen/x.html aus; unbekannte Pfade fallen weiter auf
// dist/index.html zurück (SPA). Im Browser ersetzt createRoot den Inhalt von #root vollständig.
//
// Die Startseite wird bewusst nicht vorgerendert: dist/index.html ist zugleich die Rückfallseite für
// alle anderen Pfade und darf deshalb weder Startseiten-Inhalt noch Canonical enthalten.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

// Minimales window für den ersten Render (Effekte laufen beim Prerendern nicht).
const location = { pathname: '/', search: '', hash: '', href: '' };
globalThis.window = {
  location,
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {},
  matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  innerWidth: 1280,
  innerHeight: 800,
  dataLayer: [],
};

const { render, buildHeadTags, indexablePaths, parseRoute } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-prerender.js')).href
);

const escapeAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const template = readFileSync(resolve(distDir, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> fehlt in dist/index.html');

function withHead(html, head) {
  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeText(head.title)}</title>`);
  const extra = [];
  for (const m of head.metas) {
    const tag = `<meta ${m.attr}="${m.key}" content="${escapeAttr(m.content)}" />`;
    const existing = new RegExp(`<meta ${m.attr}="${m.key.replace(/[.:]/g, '\\$&')}" content="[^"]*" ?/?>`);
    if (existing.test(out)) out = out.replace(existing, tag);
    else extra.push(tag);
  }
  if (head.canonical) extra.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" />`);
  if (head.schema) {
    const json = JSON.stringify(head.schema).replace(/</g, '\\u003c');
    extra.push(`<script id="perf-boost-jsonld" type="application/ld+json">${json}</script>`);
  }
  return out.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
}

const failed = [];
let written = 0;
for (const path of indexablePaths()) {
  if (path === '/') continue;
  location.pathname = path;
  location.href = `https://performanceboost.ch${path}`;
  try {
    const body = await render();
    if (!/<h1[\s>]/.test(body)) throw new Error('kein <h1> im Ergebnis');
    const html = withHead(template, buildHeadTags(parseRoute(path))).replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>`,
    );
    const file = resolve(distDir, `.${path}.html`);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    written++;
  } catch (err) {
    failed.push(path);
    console.warn(`prerender: ${path} übersprungen (${err.message})`);
  }
}

rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerender: ${written} Seiten geschrieben, ${failed.length} übersprungen`);

// Die Finanz-Landingpages müssen vorgerendert sein (SEO-Vorgabe S2); alles andere ist Bonus.
const required = failed.filter((p) => /^\/loesungen\/(finanzdienstleister|hypothekarberatung|vorsorgeberatung|versicherungsbroker)$/.test(p));
if (required.length) {
  console.error(`prerender: Pflichtseiten fehlgeschlagen: ${required.join(', ')}`);
  process.exit(1);
}
