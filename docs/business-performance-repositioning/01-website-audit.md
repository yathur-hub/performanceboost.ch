# 01 – Website Audit performanceboost.ch

Stand: 05.11.2026 · Branch `feature/business-performance-repositioning` (ab `main` 908a6e6) · Grundlage: Live-Site, lokaler Build mit Prerendering (`npm run build`), Codebasis, Google Search Console (UI), frühere Projektdokumente in `docs/`.

## 1. Kurzfazit

1. Die Website ist inhaltlich deutlich reicher, als die Startseite vermuten lässt: 12 Leistungsseiten mit je 750–1'100 Wörtern, FAQ und Prozess, 14 Branchenseiten, 4 ausgebaute Finanz-Landingpages, 4 Fachartikel, 30 Selbst-Checks und Rechner. Diese Substanz trägt die neue Positionierung bereits zu grossen Teilen (Automation, CRM, RevOps, KI, Daten).
2. Die **Wahrnehmung** ist dagegen eng: Title, Meta-Description, Hero, Leistungsübersicht und Über-uns sprechen fast ausschliesslich von «Kundenanfragen über Google, Meta und LinkedIn».
3. **Organische Sichtbarkeit ist noch kaum vorhanden** (Search Console seit 29.10.2026: 0 Klicks, 32 Impressionen, Ø-Position 75,7). Das Ranking-Risiko einer Umstrukturierung ist deshalb gering; die bestehenden URLs bleiben trotzdem erhalten (Backlinks, Kampagnen, Problem-Finder, bereits eingereichte Sitemap).
4. Es gibt mehrere **technische SEO-Lücken**, die unabhängig von der Neupositionierung behoben werden sollten (siehe Abschnitt 6): Startseite ohne vorgerendertes HTML, Leistungskarten ohne echte Links, zwei verwaiste Leistungsseiten, KI-Crawler per Cloudflare blockiert.

## 2. Technische Bestandsaufnahme

| Bereich | Befund |
|---|---|
| Framework | Vite 6 + React 19 SPA, TypeScript 5.8, Tailwind CSS 4, `motion` für Animationen, `lucide-react` Icons. Kein Next.js (Masterprompt nennt Next.js; es wird **nicht** migriert). |
| Routing | Eigenes Routing in `src/lib/routes.ts` (`parseRoute`, `indexablePaths`) + `App.tsx` (History API, Event `navigation-change`). `/kontakt`-Klicks öffnen ein Modal. |
| Content | Typisierte Datendateien: `src/data/services.ts` (12 Leistungen), `servicesExtendedData.ts` (Detailinhalte inkl. FAQ), `solutionsData.ts` (14 Branchen), `financeLanding.ts` (4 Finanzseiten), `resources.ts` (4 Artikel), `problemFinder.ts`. Gute Grundlage für ein datengetriebenes Teaser-System. |
| SEO | `SEOHead.tsx` (`buildHeadTags()` für Browser und Prerender), Canonicals, JSON-LD (Service, CollectionPage, FAQPage nur Finanzseiten, Article, AboutPage, ContactPage). Sitemap via `scripts/generate-sitemap.ts` aus `indexablePaths()` (42 URLs lokal; 40 live). |
| Prerendering | `entry-prerender.tsx` + `scripts/prerender.mjs` → 41 statische HTML-Dateien. **`/` wird nicht vorgerendert** (index.html = SPA-Shell, 8 Wörter, kein H1). |
| Hosting | Cloudflare Workers Static Assets (`wrangler.jsonc`, SPA-Fallback). Redirects in `public/_redirects` (5 Einträge, alle 301, keine Ketten). Branch-Builds als Preview möglich. |
| Formulare | `ContactForm.tsx`/`ContactModal.tsx` → n8n `performanceboost/contact-v3` (Payload v3, `docs/lead-payload-v3.md`), `FinanceLeadForm.tsx` (formId `finance`). n8n → Data Table → Cockpit-ERP → Mail. Attribution (UTM, Click-IDs, first_touch) in `src/lib/attribution.ts`. |
| Tracking | GTM-PJ9FBZ4V, GA4 G-G51WC7X2LM. Events in `src/lib/analytics.ts`: form_start/form_submit/form_error/generate_lead (nur bei `{success:true}`), cta_click, phone_click, tool_*, virtual_page_view. Kein Consent-Banner (bewusster Entscheid vom 30.10.2026). |
| Tests | `vitest`: `lead.test.ts`, `problemFinder.test.ts`. Typecheck via `npm run lint` (`tsc --noEmit`). |
| Git | `main` sauber (nur `CLAUDE_LOG.md` untracked). Offene Remote-Branches sind gemergt. Konto `yathur-hub` mit `repo`-Scope verifiziert. |

## 3. Navigation

- **Header:** nur Logo + Menü-Button (bewusst reduziert in PR #7). Das Mega-Menü listet alle Leistungen, Über uns, Tools, Finanz-Landingpage, Kontakt. Es wird erst bei Klick gerendert, ist also für Crawler unsichtbar.
- **Footer:** Spalte «B2B & Dienstleistung» (6 Leistungen), «E-Commerce» (4), Finanzberatung (4 Links), Unternehmen (Lösungen, Ressourcen, Tools, Über uns, Kontakt), Recht.
- **Lücke:** `marketing-automation` und `revenue-operations` fehlen im Footer; im statischen HTML gibt es **keinen einzigen** Link auf diese Seiten. Ausgerechnet `/leistungen/marketing-automation` ist die einzige Seite mit nennenswerten Impressionen (30 von 32).
- **Lücke:** Die 13 Branchenseiten (ausser Finanz) sind nur von `/loesungen` verlinkt.
- **Lücke:** Leistungskarten auf `/leistungen` und Startseite sind Buttons mit `onClick`, keine `<a href>`. Crawler sehen die Verbindung Übersicht → Detail nicht.

## 4. Content-Inventar

Legende Klassifizierung: **A** unverändert erhalten · **B** inhaltlich optimieren · **C** neu einordnen (Teaser/Verlinkung) · **D** Konsolidierung prüfen · **E** neue Seite. Wörter = sichtbarer Text im vorgerenderten HTML inkl. Footer. SEO-Relevanz auf Basis Search Console (Daten erst ab 29.10.2026) und Suchintention.
Interne Links: «nur global» = nur Footer-Links; kontextuelle Links fehlen fast überall.

### 4.1 Kernseiten

| URL | Title | H1 | Funktion / Schwerpunkt | Bereich neu | Relevanz neu | SEO | Klasse | Empfehlung |
|---|---|---|---|---|---|---|---|---|
| `/` | Mehr qualifizierte Kundenanfragen für Schweizer KMU | (im HTML keine; live: «Mehr passende Kundenanfragen für Ihr KMU. Planbar statt zufällig.») | Startseite, Leadgen-Fokus, Referenzen, Problemliste, Leistungen (5), Umsatzrechner, Vorgehen (4), Unterschied, Inhaber, FAQ, CTA | alle | sehr hoch | hoch (Marke) | **B** | Neu aufbauen nach Business-Performance-Struktur; vorhandene Bausteine (Referenzen, Vorgehen, Inhaber, FAQ, Problem-Finder) weiterverwenden. Startseite vorrendern. |
| `/leistungen` | Leistungen: Performance Marketing, Tracking & Automation | Mehr Kundenanfragen über Google, Meta, LinkedIn und Ihre Website. | Übersicht 12 Leistungen, Kombinationen, Branchenteaser | alle | hoch | mittel | **B** | In vier Leistungsfelder gliedern (Strategy, Technology, Growth, Sales/RevOps), Karten als echte Links. |
| `/loesungen` | Neukundengewinnung nach Branche | Neue Kunden gewinnen, abgestimmt auf Ihre Branche | Branchen-Hub + Leistungsbereiche + FAQ | Lösungen | hoch | mittel | **B** | Zwei Einstiege: «Nach Herausforderung» (neu) und «Nach Branche» (bestehend). |
| `/ueber-uns` | Über uns: Yathur Nathan & performanceboost | Persönliche Beratung für digitale Neukundengewinnung. | Person, Unterschied, Vorgehen, Werte | Über uns | hoch | tief | **B** | Positionierung als Business Performance Partner, Kompetenzprofil (nur belegte Fakten). |
| `/kontakt` | Kontakt & Erstgespräch | Erzählen Sie uns, wo Sie stehen. | Formular v3 | Conversion | hoch | tief | **B** | Nur Texte/CTA anpassen. Formularfelder und Payload unverändert. |
| `/skills` | Selbst-Checks & Rechner für Ihre Neukundengewinnung | Erst prüfen, wo es hakt. Dann gezielt handeln. | 30 Checks und Rechner (Strategie, Prozesse, CRM, KI, Daten) | übergreifend | hoch | mittel | **C** | Title/Intro breiter fassen; Checks auf passenden Leistungs- und Lösungsseiten teasern (z. B. «Automatisierbare Abläufe finden» auf Technologie-Hub). |
| `/ressourcen` | Ratgeber & Fachbeiträge | Leitfäden und Beiträge | Artikelübersicht | Insights | mittel | mittel | **A/C** | URL und Name behalten, im Footer als «Ratgeber» verlinkt; Artikel auf Fachseiten teasern. |
| `/impressum`, `/datenschutz` | – | – | Recht | – | – | – | **A** | Unverändert. |

### 4.2 Leistungsseiten (`/leistungen/<slug>`)

| URL | Title | H1 | Schwerpunkt | Leistungsfeld neu | Relevanz | SEO | Klasse | Empfehlung |
|---|---|---|---|---|---|---|---|---|
| `growth-strategy` | Wachstumsstrategie & Beratung | Ein klarer Plan, wie Sie neue Kunden gewinnen. | Zielkunden, Positionierung, Kanal- und Budgetplan | Strategy & Consulting | sehr hoch | mittel | **B** | Behalten; Einleitung um Business-Perspektive (Prioritäten, Potenzialanalyse) ergänzen. Kerndetailseite des Strategie-Hubs. |
| `demand-generation` | Online-Werbung & Nachfrageaufbau | Regelmässig qualifizierte Anfragen für Ihren Vertrieb. | Google, Meta, LinkedIn Ads | Growth & Marketing | hoch | hoch | **C** | Unverändert, im Growth-Hub teasern. Eigenständiger kommerzieller Einstieg. |
| `lead-generation` | Lead-Generierung: SEO, Content & Direktansprache | Aus Website-Besuchern werden Anfragen. | SEO, Content, Outbound, Landingpages | Growth & Marketing | hoch | hoch | **C** | Unverändert, Growth-Hub; GEO-Aspekt im Hub erwähnen. |
| `marketing-automation` | Marketing Automation & CRM | Keine Anfrage mehr, die im Posteingang liegen bleibt. | CRM, Lead-Routing, Nurturing | Technology & Automation (+ Sales) | sehr hoch | **höchste (30 Impr.)** | **C** | Unverändert; dringend crawlbar verlinken (Footer, Hubs). |
| `sales-enablement` | Vertriebsunterstützung & Leitfäden | Ihr Vertrieb geht besser vorbereitet in jedes Gespräch. | Leitfäden, Unterlagen, Follow-up | Sales & Revenue Operations | hoch | mittel | **C** | Sales-Hub. |
| `revenue-operations` | Marketing, Vertrieb & Daten verbinden (RevOps) | Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Zahlen. | RevOps, Pipeline, gemeinsame Kennzahlen | Sales & Revenue Operations | sehr hoch | mittel | **C** | Sales-Hub; im statischen HTML verlinken. |
| `ai-automation` | KI & Automatisierung | KI, die Ihrem Team im Alltag Zeit spart. | KI in Marketing und Vertrieb | Technology & Automation | sehr hoch | hoch | **B** | Behalten; Einsatzfelder vorsichtig über Marketing/Vertrieb hinaus öffnen (Backoffice, Auswertungen), nur mit belegter Erfahrung. |
| `data-analytics` | Tracking, Analyse & Reporting | Sehen, welche Kanäle Ihnen Kunden bringen. | GA4, GTM, Dashboards | Technology & Automation | hoch | mittel | **C** | Technologie-Hub, Querverweis Strategy (Entscheidungsgrundlagen). |
| `ecommerce-performance` | E-Commerce Performance | Ihr Shop hat Besucher. Wir helfen, daraus Käufer zu machen. | Shop-CRO | Growth & Marketing (E-Commerce) | mittel | mittel | **C/D** | Behalten (Entscheid 30.10.: E-Commerce bleibt). Als E-Commerce-Cluster im Growth-Hub. |
| `dtc-growth-acquisition` | Kundengewinnung für Online-Marken (D2C) | Ihr Produkt ist gut. Jetzt braucht es eine verlässliche Kundengewinnung. | D2C-Akquise | Growth & Marketing (E-Commerce) | mittel | mittel | **C/D** | wie oben; Überschneidung mit `paid-social-ecommerce` beobachten, keine Zusammenlegung jetzt. |
| `paid-social-ecommerce` | Meta & TikTok Ads für Online-Shops | Ihr ROAS sieht gut aus. Aber verdienen Sie auch daran? | Paid Social Shops | Growth & Marketing (E-Commerce) | mittel | mittel | **C/D** | wie oben. |
| `customer-retention` | Kundenbindung & Wiederkäufe | Machen Sie aus Erstkäufern Stammkunden. | Retention, CLV | Growth & Marketing (E-Commerce) | mittel | tief | **C** | wie oben. |

Alle 12 Seiten haben Hero, Problem, Leistungsumfang, Vorgehen, FAQ, CTA und `Service`-Schema. Es fehlen: FAQPage-Schema, «Passende Leistungen»-Modul, Rückverweis auf das übergeordnete Leistungsfeld (Breadcrumb).

### 4.3 Lösungsseiten (`/loesungen/<slug>`)

| URL | H1 | Wörter | Klasse | Empfehlung |
|---|---|---|---|---|
| `finanzdienstleister` (+ `hypothekarberatung`, `vorsorgeberatung`, `versicherungsbroker`) | Mehr qualifizierte Erstgespräche für Ihre Finanzberatung / Eigene Anfragen … | 1'700–2'000 | **A** | Laufende GTM-Kampagnen-Landingpages mit eigenem Formular. Unverändert lassen. |
| `saas-software`, `immobilien`, `treuhand-unternehmensberatung`, `b2b-industrie-kmu`, `it-dienstleister-msps`, `ingenieur-planungsbuero`, `personalvermittler-recruiting`, `bildung-weiterbildung`, `gesundheitswesen`, `handwerk`, `rechtsanwaelte`, `logistik-transport`, `hospitality` | jeweils «Mehr … für …» | ~600 | **A/C** | Inhalt behalten (Entscheid 30.10.: alle Branchenseiten bleiben). Im Lösungs-Hub unter «Nach Branche», Querlinks auf passende Herausforderungen. Kein Umbau, da kein Traffic und keine Positionierungswirkung. |

### 4.4 Ratgeber (`/ressourcen/<slug>`)

| URL | Thema | Klasse | Teaser-Ziel |
|---|---|---|---|
| `b2b-gtm-playbook-dach` | Neukundengewinnung B2B-KMU | **C** | Strategie-Hub, Growth-Hub |
| `ai-automation-b2b-sales` | KI im B2B-Vertrieb | **C** | Technologie-Hub, `ai-automation`, Lösung KI |
| `why-b2b-lead-gen-is-dead` | Formular-Leads | **C** | Sales-Hub, `lead-generation` |
| `swiss-dsg-tracking-compliance` | DSG und Tracking | **C** | `data-analytics`, Lösung Daten & Reporting |

### 4.5 Fehlende Seiten (E)

| Seite | Begründung |
|---|---|
| 4 Leistungsfeld-Hubs unter `/leistungen/…` | Tragen die neue Positionierung, bündeln bestehende Detailseiten, eigene Suchintention (z. B. «Digitalstrategie KMU», «Prozessautomatisierung KMU»). |
| `/referenzen` | 7 Kundenstimmen existieren nur als Slider auf der Startseite. Eigene Seite stärkt Vertrauen und GEO (nachvollziehbare Erfahrung). |
| 1–2 Lösungsseiten (Herausforderungen) | Nur dort, wo keine bestehende Leistungsseite die Suchintention abdeckt (Detail siehe 03). |

## 5. UX- und CRO-Befunde

1. **Hero** kommuniziert eine Agentur für Neukundengewinnung. Positiv: klare Sprache, ein Primär-CTA, Problem-Finder als sekundärer Einstieg.
2. **Startseite ist lang** (12 Abschnitte inkl. ausführlichem Umsatzrechner). Der Rechner ist stark leadgen-spezifisch und dominiert die Seitenmitte.
3. **Header ohne sichtbare Navigation:** Für eine breitere Positionierung fehlt Orientierung (Was bietet ihr an?). Auf Desktop sollte das Leistungsangebot sichtbar sein.
4. **Referenzen:** 7 echte, namentlich gezeichnete Stimmen. Keine Kennzahlen, keine Case Studies. Gut: nichts Erfundenes. Die Stimmen bestätigen teils schon die breitere Rolle («verbindet Performance Marketing, Technologie und Webentwicklung … denkt über einzelne Kampagnen hinaus»).
5. **CTA-System:** «Erstgespräch vereinbaren» überall, Formular als Modal. Funktioniert, ist aber generisch. Leistungsseiten haben bereits eigene CTA-Texte in `servicesExtendedData`.
6. **Leistungsseiten:** gute Tiefe, aber Sackgassen (keine verwandten Leistungen, kein Weg zurück zum Leistungsfeld).
7. **Mobile:** Layout responsiv; Mega-Menü ist auf Mobile der einzige Navigationsweg (ok).

## 6. SEO-Risiken und technische Probleme

| # | Problem | Auswirkung | Massnahme |
|---|---|---|---|
| 1 | Startseite nicht vorgerendert: index.html ohne H1, ohne Inhalt | Google rendert zwar JS, aber KI-Crawler und viele Tools sehen eine leere Seite | `/` ins Prerendering aufnehmen; SPA-Fallback als separate Shell |
| 2 | Leistungskarten ohne `<a href>` | Übersicht → Detail für Crawler unverbunden | Karten als Links (`Link`-Komponente existiert) |
| 3 | `marketing-automation`, `revenue-operations` verwaist | Einzige Seite mit Impressionen ist kaum crawlbar | Footer + Hubs + Teaser |
| 4 | Branchenseiten nur von `/loesungen` verlinkt | schwache interne Signale | Lösungs-Hub, kontextuelle Querlinks |
| 5 | Cloudflare «Managed robots.txt» blockiert GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot u. a.; Content-Signal `ai-train=no` | Widerspricht dem GEO-Ziel teilweise (Suchbots wie OAI-SearchBot, PerplexityBot, Googlebot sind **nicht** blockiert) | Entscheid nötig (siehe 05) |
| 6 | FAQPage-Schema nur auf Finanzseiten | GEO-Potenzial ungenutzt | FAQ-Schema für Leistungsseiten und Hubs |
| 7 | Kein `Organization`/`ProfessionalService`-Schema auf der Startseite | Unternehmensidentität für Suchmaschinen/KI weniger eindeutig | Ergänzen (Name, Adresse, Kontakt, `sameAs` LinkedIn, `knowsAbout`) |
| 8 | Titles/Descriptions durchgehend leadgen-orientiert | Positionierung inkonsistent | Kernseiten neu, Detailseiten nur wo nötig |
| 9 | Mischung englischer Slugs (`growth-strategy`) und deutscher Pfade | kosmetisch | **Nicht ändern** (kein Nutzen, Risiko Kampagnen/Backlinks) |

## 7. Markenschreibweise

Code-Suche: Marke wird im sichtbaren Text als «performanceboost» geführt (`SITE.name`). Das Logo-Asset zeigt «performance**boost**» in zwei Farben, einteilig, klein – passt. Bei der Umsetzung wird jede Textänderung zusätzlich per `grep -i "performance boost\|performanceBoost\|performance-boost"` geprüft.

## 8. Wichtige Abweichung vom Masterprompt: Ansprache

Der Masterprompt verlangt die «bestehende Du-Ansprache». Die Website verwendet aber **durchgängig die Sie-Form** (Entscheid vom 29.10.2026, PR #1, `docs/copy-guidelines.md`). Ohne anderslautende Freigabe bleibt die Sie-Form; alle Textvorschläge in diesen Dokumenten sind in Sie-Form.

## 9. Empfohlene Massnahmen (Priorität)

1. Positionierung auf Startseite, Leistungen, Über uns, Meta-Daten.
2. Vier Leistungsfeld-Hubs + datengetriebenes Teaser-System (`src/data/serviceAreas.ts`).
3. Technische SEO-Fixes 1–4, 6, 7 (unabhängig von der Positionierung, geringes Risiko).
4. Lösungs-Hub mit Herausforderungen + Branchen.
5. Referenzen-Seite.
6. Sichtbare Desktop-Navigation mit CTA «Potenzial besprechen».
