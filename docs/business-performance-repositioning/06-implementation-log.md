# 06 – Implementation Log

Branch: `feature/business-performance-repositioning` (ab `main` 908a6e6) · Stand: 05.11.2026

## Entscheide (Freigabe 05.11.2026)

| Thema | Entscheid |
|---|---|
| Konzept 01–05 | freigegeben, umsetzen |
| Ansprache | Sie-Form bleibt (Masterprompt nannte Du, Website nutzt seit 29.10.2026 Sie) |
| Header | Minimal-Header bleibt, Navigation über das neu gegliederte Mega-Menü |
| KI-Crawler | erlauben; Umsetzung im Cloudflare-Dashboard (siehe offene Punkte) |

## Commits

| Commit | Inhalt |
|---|---|
| `566bfc8` | Dokumentation 01–05 (Audit, Messaging, Sitemap, UX/CRO, SEO) |
| `41f8904` | Leistungsfeld-Hubs, Lösungsseiten, Referenzen, Teaser-Daten, SEO-Schema, Prerendering der Startseite |
| `c94ee5e` | Neue Startseite, Mega-Menü und Footer nach Leistungsfeldern |
| `f803270` | Leistungsübersicht nach Feldern, Lösungs-Hub mit Herausforderungen, Über uns/Kontakt, CTA, Tests |
| `b9f9e54` | Markenname nie in Grossbuchstaben, Mega-Menü breiter, Ratgeber-Karten als Links |

## Neue Dateien

| Datei | Zweck |
|---|---|
| `src/data/serviceAreas.ts` | Zentrale Definition der 4 Leistungsfelder (Texte, Leistungen, Themen, Checks, Ratgeber, FAQ), `primaryAreaOf`, `relatedServices`, `PILLARS` |
| `src/data/challenges.ts` | 6 Herausforderungen (Karten) + 2 Lösungsseiten |
| `src/data/skills.ts` | Daten der 36 Selbst-Checks, aus `SkillsDirectory.tsx` herausgelöst, damit Hubs sie teasern können |
| `src/components/bp/Blocks.tsx` | Bausteine: `Container`, `Eyebrow`, `SectionHeading`, `Breadcrumb`, `CtaButton` (öffnet Modal, meldet `cta_click`), `TeaserCard`, `CheckList`, `FaqList` (`<details>`), `ToolLinks`, `ResourceLinks`, `TestimonialQuote`, `FinalCta` |
| `src/views/ServiceAreaView.tsx` | Hub-Template für `/leistungen/{strategie,technologie-automation,wachstum-marketing,sales-revenue-operations}` |
| `src/views/ChallengeView.tsx` | `/loesungen/prozessautomatisierung`, `/loesungen/vertrieb-optimieren` |
| `src/views/ReferencesView.tsx` | `/referenzen` |
| `src/lib/__tests__/serviceAreas.test.ts` | Integritätstests: jede Leistung hat ein Feld, alle Verweise existieren, Routen sind indexierbar |

## Geänderte Dateien

| Datei | Änderung |
|---|---|
| `src/lib/routes.ts` | Views `leistungsfeld`, `loesung_herausforderung`, `referenzen`; neue Pfade in `indexablePaths()` (Sitemap, Prerender) |
| `src/App.tsx` | Lazy-Imports und Rendering der drei neuen Views |
| `src/components/SEOHead.tsx` | Organisation: neue Beschreibung, `slogan`, `knowsAbout`, `sameAs`; Hubs: CollectionPage + ItemList + Breadcrumb + FAQPage; Leistungsseiten: Service + Breadcrumb + FAQPage; Lösungsseiten: WebPage + Breadcrumb + FAQPage; neue Titles/Descriptions für Start, Leistungen, Lösungen, Über uns, Skills, Ratgeber |
| `scripts/prerender.mjs` | Startseite wird zuletzt in `dist/index.html` vorgerendert und ist Pflichtseite (Build bricht sonst ab) |
| `index.html` | Fallback-Title/Description an Positionierung angepasst |
| `src/views/HomeView.tsx` | Neu aufgebaut, 7 Abschnitte (Hero, Herausforderungen, Ansatz + Säulen, Leistungsfelder, Vorgehen, Referenzen + Über uns, FAQ + CTA). Umsatzrechner auf Growth-Hub verschoben |
| `src/views/ServicesView.tsx` | Übersicht gegliedert nach Leistungsfeldern, Karten als Links; Detailseiten mit Breadcrumb, Feld-Label und «Passende Leistungen»; Branchenkarten als Links; Inhabertext |
| `src/views/SolutionsView.tsx` | Neuer Hero, Abschnitt «Nach Herausforderung», «Nach Branche» |
| `src/views/AboutView.tsx` | Positionierung, Inhabertext (ERP-Projekt aus Kundenstimme CarlaCares), Grundsätze |
| `src/views/ContactView.tsx`, `src/components/ContactModal.tsx` | Einleitungstexte breiter formuliert |
| `src/views/ResourcesView.tsx` | Artikelkarten als echte Links auf `/ressourcen/<slug>` |
| `src/components/Navbar.tsx` | Mega-Menü nach Leistungsfeldern (alle 12 Leistungen, vorher fehlten 2), Lösungen + Referenzen im Schnellzugriff, CTA «Potenzial besprechen», Markenname nicht mehr in Grossbuchstaben |
| `src/components/Footer.tsx` | Spalte Leistungsfelder, alle 8 B2B-Leistungen (inkl. `marketing-automation`, `revenue-operations`), Referenzen |
| `src/views/SolutionDetailView.tsx`, `SkillsDirectory.tsx` | CTA-Text, Markenname |
| `public/_redirects` | `/references`, `/referenz` → `/referenzen`; `/solutions` → `/loesungen` (301) |

## Technische Entscheidungen

1. **Kein Framework-Wechsel.** Der Masterprompt nennt Next.js; die Website ist Vite + React mit eigenem Routing und Prerendering. Alles wurde in dieser Architektur umgesetzt.
2. **Hubs unter `/leistungen/<feld>`** im gleichen Pfadraum wie die Detailseiten; Kollisionen sind per Test ausgeschlossen.
3. **Datengetriebenes Teaser-System:** Eine neue Leistung braucht nur einen Eintrag in `services.ts` und die Zuordnung in `serviceAreas.ts`. Hub, Übersicht, Mega-Menü, Footer, «Passende Leistungen» und Sitemap übernehmen sie automatisch.
4. **FAQ als `<details>`:** Antworten stehen im vorgerenderten HTML (Voraussetzung für FAQPage-Schema und GEO).
5. **Startseite vorgerendert in `index.html`:** Unbekannte Pfade erhalten weiterhin die Startseiten-Datei als SPA-Fallback; React rendert sofort die 404-Ansicht und entfernt das Canonical (setzt `noindex`). Alle gültigen, verlinkten Routen haben eigene HTML-Dateien.
6. **`cta_click`** wird von den neuen CTAs mit `cta_location` (z. B. `home_hero`, `hub_<feld>_hero`, `challenge_<slug>_footer`, `referenzen_footer`) gemeldet. Der GTM-Tag existiert seit Version 7; keine GTM-Änderung nötig.

## Bewusst unverändert

- Kontaktformular, Finanzformular, Payload v3, n8n-Workflows, Data Table, Cockpit-Anbindung
- GTM-Container, GA4-Konfiguration, `generate_lead`-Logik, Attribution (UTM, Click-IDs, first_touch)
- Alle 41 bestehenden URLs, ihre Titles und H1 (ausser Kernseiten), die 4 Finanz-Landingpages komplett
- Inhalte der 12 Leistungsseiten, 14 Branchenseiten, 4 Artikel und 36 Selbst-Checks
- Logo, Farben, Schriften, Hero-Grafiken
- Problem-Finder (Startseite, sekundärer CTA)

## Offene Punkte

1. **Cloudflare robots.txt:** Im Cloudflare-Dashboard (Zone performanceboost.ch → AI Crawl Control / «Manage your robots.txt») die verwaltete robots.txt deaktivieren oder KI-Crawler erlauben. Das Repo-`robots.txt` erlaubt bereits alles.
2. **Search Console / GA4:** Nach Go-live Sitemap neu einreichen; URL-Prüfung für Startseite und 4 Hubs. GA4-Abfrage war in dieser Sitzung nicht möglich (`/ga-mcp-full:auth-login` nötig).
3. **Inhalte prüfen:** Alle neuen Texte in `serviceAreas.ts`, `challenges.ts`, Startseite, Über uns (insbesondere die Aussage zum ERP-Projekt) durch den Inhaber freigeben lassen.
4. **Referenzen ausbauen:** Mit Freigabe der Kunden kurze Fallbeschreibungen (Ausgangslage, Massnahmen, belegte Ergebnisse) ergänzen.
5. **Weitere Lösungsseiten** (z. B. «KI im Unternehmen») erst, wenn Search-Console-Daten Nachfrage zeigen.
6. **GA4-Dimension** `cta_location` ist registriert; Auswertung nach 2–4 Wochen.

## Überarbeitung 05.11.2026 (Feedback Inhaber)

- **Eyebrows entfernt** (kleine Grossbuchstaben-Labels über Überschriften), seitenweit inkl. Finanz-Landingpages; `Eyebrow`-Komponente gelöscht. Zwei Labels mit Inhalt bleiben als normaler Text: Kartentitel der Finanz-Referenzen, Kombinationsname auf `/loesungen`.
- **Buttonfarbe `#696EEF`** (Hover `#5a5fe0`) für alle Primär-Buttons und aktiven Zustände (55 Stellen inkl. Rechner und Formulare); `CtaButton` beide Varianten.
- **Mega-Menü neu:** keine wechselnde Vorschau pro Menüpunkt, keine Icons; links die 4 Leistungsfelder mit ihren Leistungen als Textlinks, rechts Lösungen, Referenzen, Über uns, Skill-Factory, Ratgeber, CTA, Telefon/E-Mail. Finanzdienstleister aus dem Menü entfernt (bleibt im Footer und unter Lösungen). Desktop und Mobile nutzen dieselbe Struktur. `Navbar.tsx` von 776 auf 285 Zeilen.
- **«Skill-Factory»** ersetzt «Selbst-Checks» in Menü, Footer, Hubs, H1 und Title von `/skills`.

## Mega-Menü Redesign (05.11.2026, zweite Runde)

- Die textlastige Listenansicht ersetzt durch vier **Leistungsfeld-Karten** (Icon, deutscher Feldname, Kurzbeschreibung, Leistungen als Linkzeilen mit Hover-Pfeil, «Zum Leistungsfeld»). Felder mit weniger als vier Leistungen werden mit ihren Themen ergänzt (Link auf den Hub), damit die Karten ausgewogen sind; «Marketing Automation & CRM» erscheint in Technologie und Vertrieb.
- Rechts: Navigationskarte (Lösungen, Referenzen, Über uns, Skill-Factory, Ratgeber) mit Markierung der aktuellen Seite und eine dunkle **Kontaktkarte** mit Porträt, CTA «Potenzial besprechen» (#696EEF), Telefon und E-Mail.
- Dezente gestaffelte Einblend-Animation, Hintergrund #f6f6f6, mobil alle Karten untereinander ohne horizontales Scrollen.

## Hero-Visual (05.11.2026)

- Startseiten-Hero zweispaltig: Text links, Raketen-Visual rechts in abgerundeter dunkler Karte; Tags Strategy / Technology / Growth als Bildunterschrift. Mobil unter den CTAs, quadratischer Ausschnitt.
- Bild als WebP in `public/images/hero-rakete-{640,1024}.webp` (35 KB / 76 KB) mit `srcset`, `fetchpriority="high"`, ohne Einblend-Animation (LCP).
- Progressionslinie (`HeroGrowthLayer.tsx`) entfernt und Datei gelöscht.
- Überarbeitung 06.11.2026: Rakete freigestellt (transparenter Hintergrund statt schwarz, Ränder des Rauchs weich ausgeblendet), ohne Karte und ohne Begriffe, vollständig sichtbar (`object-contain`) auf weissem Hero-Hintergrund. Dateien `hero-rakete-{560,900}.webp` (87 KB / 181 KB mit Alpha). Freistellungsskript liegt nicht im Repo; Quelle: `Downloads/performanceboost rakete.png`.
- Überarbeitung 06.11.2026 (2): Neues Raketenbild (`Intern/performanceboost rakete.png`, bereits transparent). In zwei Ebenen zerlegt: `hero-rocket-{400,650}.webp` (animiert) und `hero-smoke-{400,650}.webp` (statisch, unten weich ausgeblendet); Übergang liegt weich in den Flammen. Animation `rocketHover` in `src/index.css` (3,2 s, max. 8 px entlang der Flugachse), deaktiviert bei `prefers-reduced-motion`. Gesamtgewicht Desktop ca. 88 KB.

## Mobile-Optimierung (06.11.2026)

- Gemessen auf 390 px: Abstand Header → erster Inhalt war auf Startseite, Hubs, Lösungsseiten, Referenzen, Leistungsseiten, Finanz- und Artikelseiten 0–4 px; auf Skill-Factory und Impressum lag die Überschrift teilweise unter dem Header. Jetzt einheitlich 45–64 px auf allen 15 geprüften Seitentypen.
- Header mobil schlanker (Logo 72 px statt 84 px, Header 101 px statt 113 px), Desktop unverändert.
- Seitenkopf-Abstände vereinheitlicht (`pt-36 md:pt-40`), Hero-Bänder mobil `pt-12 pb-16`, Sektionsabstände mobil gestrafft (`py-16`, `space-y-16`), Desktop unverändert.
- Rakete auf Mobile/Tablet ausgeblendet (nur ab `lg`).
- Hero-Headline zwischen 1024 und 1280 px eine Stufe kleiner; Buttons ohne Zeilenumbruch im Text.
- Skill-Factory-Überschrift mit festem Zeilenumbruch.
