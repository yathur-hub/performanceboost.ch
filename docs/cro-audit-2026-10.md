# CRO-Audit & Umsetzung performanceboost.ch (Oktober 2026)

Branch `feat/website-cro-optimization`. Stand 29.10.2026.
Kennzeichnung: **[V]** verifizierter Messwert · **[I]** plausible Interpretation · **[H]** Hypothese ohne ausreichende Daten.

---

## A. Audit-Report

### A1. Executive Summary
1. **Website-Leads gingen verloren [V].** Der aktive n8n-Workflow `uVCYvvXS2uo2UCHD` antwortete mit `200 {"success":true}`, speicherte und meldete aber nichts. Dazu kamen 12 Branchenrechner mit E-Mail-Formularen, die gar nichts übermittelten. GA4 zeigt seit dem 18.8. **0** `form_submit_attempt` und **0** `generate_lead` [V]: Im Messzeitraum ging nachweislich keine Formularanfrage verloren, davor ist es nicht prüfbar (keine Ausführungen gespeichert).
2. **Die Website war für Google gesperrt [V].** Das ausgelieferte HTML enthielt seit dem 14.6. `noindex, nofollow`. Es gab keine Sitemap, und jede unbekannte URL lieferte die Startseite mit Status 200.
3. **Positionierung und Sprache passten nicht zur Zielgruppe [I].** Die Texte waren durchgehend in Du-Form, voller englischem RevOps- und SaaS-Jargon und enthielten zahlreiche unbelegte Kennzahlen («+40% ROI», «3.4x Pipeline», «35+ KMU», erfundene Fallbeispiele).
4. **Conversion-Führung [V]:** Auf der Startseite gab es im ersten Bildschirm keinen Kontakt-CTA. Der erste Gesprächs-CTA im Seiteninhalt stand mobil bei rund 14'000 px. Auf dem Desktop gab es nur ein Hamburger-Menü.
5. **Tracking [V]:** 14 Rechner riefen ein nicht vorhandenes `gtag()` auf, ihre Events gingen verloren. Der Parameter `source` überschrieb die GA4-Sitzungsquelle (36 Sitzungen = 21 % als «Unassigned»). Es gab keine UTM- oder Click-ID-Erfassung für Leads.

### A2. URL-Inventar (42 Routen, aus Code und Live-Crawl)
| Typ | URLs | Bemerkung |
|---|---|---|
| Startseite | `/` | 135 von 169 Sitzungen landen hier [V] |
| Leistungen | `/leistungen` + 12 × `/leistungen/<slug>` | `marketing-automation` und `revenue-operations` bewusst nicht in der Navigation (unverändert) |
| Branchen | `/loesungen` + 14 × `/loesungen/<slug>` | Übersicht zeigte bisher keine Branchen. Neu: Raster mit allen 14 |
| Ratgeber | `/ressourcen`, `/ressourcen/blog`, `/ressourcen/guides`, 4 Artikel | **Artikel waren defekt** (zeigten nur die Übersicht). Behoben |
| Selbst-Checks | `/skills` | 36 Checks, 3 Links auf fehlende Dateien im Skill-Repo (ausgeblendet) |
| Über uns, Kontakt | `/ueber-uns`, `/kontakt` | `/kontakt` öffnet bei interner Navigation das Modal |
| Rechtliches | `/impressum`, `/datenschutz` | Datenschutz unvollständig (siehe `datenschutz-ergaenzung-entwurf.md`) |
| Alt/erraten | `/about`, `/team`, `/contact`, `/wp-sitemap.xml` u.a. | In GA4 beobachtet [V]. Neu: 301 via `public/_redirects` bzw. 404 mit `noindex` |

Unveränderte Live-Screenshots aller Routen (390 und 1440 px) liegen lokal vor (nicht im Repo).

### A3. Seitenbewertung (Kurzfassung)
| Seite | Wichtigste Schwächen (vorher) | Massnahme |
|---|---|---|
| Startseite | Kein Kontakt-CTA im Hero, Tools als einzige CTAs, Slogans («Substanz statt Lärm»), Tippfehler | Neuer Hero mit Nutzenversprechen, primärem CTA «Erstgespräch vereinbaren», Trust-Zeile mit echten Kundennamen; FAQ beantwortet Einwände |
| Leistungsseiten | Unbelegte Kennzahlen, erfundene Fallbeispiele, Jargon | Kennzahlen entfernt, Fallbeispiele als «Typische Ausgangslage», Klartext |
| Branchenseiten | H1 voller Jargon, absolute Compliance-Aussagen («100% FIDLEG-konform») | Klare H1 pro Branche, Compliance-Formulierungen entschärft |
| Über uns | «Team aus Spezialisten», «35+ KMU», «3.4x Pipeline», «unser CFO» | Ehrliche Darstellung als inhabergeführte Beratung |
| Kontakt | «LET'S CONVERT», unklare nächste Schritte, LinkedIn-Firmenlink ungeprüft | Drei klare Schritte, Telefon, E-Mail, Adresse |
| Rechner | E-Mail-Formulare ohne Versand, Benchmarks als Fakten | Formulare entfernt, CTA öffnet das zentrale Formular, Annahmen gekennzeichnet |

### A4. GA4-Analyse (Property 550634782, G-G51WC7X2LM, seit 18.8.2026)
| Kennzahl | Wert |
|---|---|
| Sitzungen 18.8.–28.10. [V] | 169 (Aug 29, Sep 66, Okt 74) |
| Engagement Rate [V] | 37.9 % (Aug), 30.3 % (Sep), 13.5 % (Okt) |
| Kanäle [V] | Direct 114, «Unassigned/Wachstumsgespräch Overlay» 36 (Messfehler), Organic Search 14, Social 2, Referral 2 |
| Geräte [V] | Desktop ca. 92 %, Mobile 11 Sitzungen |
| Paid Traffic [V] | keiner |
| Formular [V] | `form_view` 14, `form_field_complete` 1, `form_submit_attempt` 0, `generate_lead` 0 |
| Key Events [V] | `generate_lead` (custom), `purchase` (Standard, irrelevant) |
| Seitenaufrufe pro Sitzung [V] | 1.2 (200 `page_view` / 167 `session_start`) |

**Datenqualität:** Die Stichprobe ist zu klein für statistische Aussagen über Kanäle, Landingpages oder Geräte [V]. Wegen `noindex` gibt es kaum organischen Traffic. Die sinkende Engagement Rate ist bei n=74 nicht belastbar [H]. SPA-Seitenaufrufe werden erfasst (verschiedene `pagePath`-Werte vorhanden) [V]. Ein Lokal-Hostname ist vorhanden (1 Sitzung, vernachlässigbar). Entscheidungen beruhen deshalb vor allem auf UX-Heuristiken und technischen Befunden, nicht auf Verhaltensdaten.

### A5. Conversion-Funnel
Besuch → `form_view` (14) → Feldinteraktion (1) → Absenden (0). Mit n=14 ist keine Abbruchanalyse möglich [V]. Strukturelle Hürden [I]: Kontakt nur über Modal ohne sichtbaren Einstieg, 7 Pflichtfelder inkl. Telefon und Anrede, kein Firmenfeld, Du-Ansprache für die Zielgruppe Geschäftsleitung.

### A6–A8. Copywriting, UX/UI, Mobile
- Copy: verbindlicher Leitfaden `docs/copy-guidelines.md`. Rund 15'000 Zeilen Text überarbeitet. Sitewide-Prüfung: 0 Du-Formen, 0 ß.
- UX/UI: Persistente Navigation (Desktop), Header-CTA auf allen Viewports. Fake-Elemente entfernt: Verknappung «Heute verfügbar», «PRO-LEVEL v4.0», «Kumulierter Mittelwert Exzellenz». Englischer Infostreifen entfernt. Schriftgrössen unter 11 px (580 Stellen) auf 11 px angehoben.
- Mobile: Hero mit CTA im ersten Viewport (390 px). Header-CTA in 5 Viewports auf 42 Seiten sichtbar [V, QA]. Kein horizontaler Overflow [V, QA]. Formularfelder mit 16 px (kein iOS-Zoom). Touch-Targets ≥ 44 px bei den neuen Elementen. Ein zusätzlicher mobiler Sticky-CTA ist nicht nötig, weil der Header-CTA fix sichtbar ist.

### A9. Formular & n8n
| | Vorher | Nachher |
|---|---|---|
| Felder | Anrede*, Vorname*, Nachname*, E-Mail*, Telefon*, Umsatz*, Nachricht* | Vorname*, Nachname*, **Unternehmen***, E-Mail*, Telefon (optional), Umsatz*, Anliegen* |
| Spam-Schutz | keiner | Honeypot `hp_url` + Time-to-Submit (< 3 s) in n8n |
| Erfolg | jede 2xx-Antwort | nur `{"success":true}` nach Speicherung |
| Attribution | keine | First/Last Touch, UTM, gclid/gbraid/wbraid/fbclid/msclkid, Einstiegsseite, Referrer-Domain |
| Workflow | v1: 2 Nodes, verwirft Daten | v3 `0TjAQdx4l3mD9dKT`: Data Table → Twenty CRM → E-Mail → Antwort |

### A10. Technisches Repository-Audit
- Vite 6, React 19, Tailwind 4, `motion`. Eigenes Routing über `history.pushState`, kein Router-Paket. Hosting über Cloudflare (SPA-Fallback).
- Aus Google AI Studio exportiert: `@google/genai`, `express` und `dotenv` waren ungenutzte Abhängigkeiten (entfernt). Es gab tote Next.js-Dateien (`src/app`, entfernt) und eine Buchungs-Attrappe mit Fixdaten (entfernt).
- Technische Schulden [I]: viele 400–800-Zeilen-Komponenten mit duplizierter Rechner-Logik (14 nahezu gleiche Hero-Tools), Farben als Arbitrary Values statt Tokens, Theme mappt alle `slate-*` auf `#505050`.
- Es gab weder Tests noch CI. Neu: `vitest` mit 11 Tests und ein QA-Skript `scripts/qa/qa.cjs`.

### A11. SEO, Performance, Accessibility (Lighthouse mobil, Startseite)
| | live | neu (lokal, ohne CDN-Kompression) |
|---|---|---|
| Performance | 60 | 82 |
| LCP | 8.9 s | 4.4 s |
| Seitengewicht | 1'616 KB | 758 KB |
| Accessibility | 89 | 98 |
| SEO | 92 | 100 |

axe-core (WCAG 2.2 AA, 42 Routen): Fehler bei Labels und Select-Namen 79 → 0. Kontrastfehler 521 → Rest (dekorative Ziffern und Elemente mitten in der Einblend-Animation).

---

## B. Conversion-Optimierungskonzept (Startseite als Referenz)
| Element | Ist | Optimierung | Begründung | Prio |
|---|---|---|---|---|
| Headline | «Mehr qualifizierte Anfragen. Planbares Wachstum statt Zufall.» | «Mehr passende Kundenanfragen für Ihr KMU. Planbar statt zufällig.» | Zielgruppe benannt, Sie-Form [H] | P1 |
| Subline | «Kein Coaching. Kein Guru-Gehabe. …» + Slogan | Konkrete Leistungen (Google/Meta/LinkedIn, Landingpages, Tracking) + «persönlich umgesetzt von Inhaber Yathur Nathan» | Was, für wen, wer setzt um [H] | P1 |
| Primär-CTA | Potenzial-Check / Revenue Navigator | «Erstgespräch vereinbaren» + sekundär Potenzial-Check | Direkter Weg zur primären Conversion [H] | P1 |
| Trust | Kundenstimmen erst nach dem 2. Abschnitt | Trust-Zeile im Hero mit echten Kundennamen | Glaubwürdigkeit im ersten Viewport [H] | P1 |
| Formular | 7 Pflichtfelder, kein Unternehmen | Unternehmen Pflicht, Telefon optional, Anrede entfernt | Bessere Qualifizierung bei weniger Reibung [H] | P1 |
| FAQ | 4 Fragen, «Sind das Marketing- oder Vertriebsleistungen?» | 6 Einwände: Eignung, Unterschied zur Agentur, Zeit, Messung, Aufwand, Kosten | Einwandbehandlung [H] | P2 |
Vollständige Texte aller Seiten: siehe Diff im PR (Quelle der Wahrheit: der Code).

---

## C. Technischer Implementierungsplan (umgesetzt)
| Bereich | Dateien |
|---|---|
| Routing/404 | `src/lib/routes.ts`, `src/views/NotFoundView.tsx`, `src/App.tsx` |
| SEO | `src/components/SEOHead.tsx`, `index.html`, `scripts/generate-sitemap.ts`, `public/robots.txt`, `public/_redirects` |
| Formular/Lead | `src/components/ContactForm.tsx`, `src/lib/leadPayload.ts`, `src/lib/attribution.ts`, `src/config/site.ts`, `docs/lead-payload-v3.md` |
| Tracking | `src/lib/analytics.ts`, `src/components/heroUtils.tsx`, `src/components/hero-tools/*` |
| Navigation | `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/Link.tsx` |
| Performance | Lazy Loading in `App.tsx`/`HomeView.tsx`, Fonts in `index.html`, `loading="lazy"` |
| A11y | `src/index.css` (Kontrast), aria-labels in Rechnern |
| Tests | `src/lib/__tests__/lead.test.ts`, `scripts/qa/qa.cjs` |

### Event-Schema (dataLayer → GTM → GA4)
| Event | Auslöser | Parameter |
|---|---|---|
| `form_start` | erster Fokus im Formular | form_id, form_name, form_location, page_type |
| `form_submit` | Absenden nach erfolgreicher Client-Validierung | + annual_revenue |
| `form_error` | Validierungsfehler oder Übermittlungsfehler | + error_type (`validation`/`submit`), error_fields |
| `generate_lead` | **erst nach `{"success":true}` von n8n** (= Lead gespeichert) | + annual_revenue |
| `hero_tool_*`, `tool_*` | Rechner-Interaktionen (jetzt tatsächlich im dataLayer) | page, Ergebnisstufen (keine PII) |

Parameter `source`, `medium`, `campaign`, `term` und `content` werden automatisch als `ui_*` gesendet. Nach jedem Push werden die Parameter zurückgesetzt. Keine PII im dataLayer (per QA geprüft).

**GTM-Abhängigkeit (Container nicht lesbar, API-Kontingent erschöpft):** In GA4 kommen Events an, für die es keine eigenen Tags gibt (`tool_view`, `potenzial_check_step` u.a.). Der Container leitet also vermutlich alle dataLayer-Events generisch weiter [I]. Die neuen Events sollten damit ohne Änderung ankommen; vor dem Go-live in DebugView prüfen. Für `form_start`, `form_submit` und `form_error` braucht es GA4-Event-Tags auf Custom-Event-Triggern. Falls die alten Namen `form_submit_attempt` und `form_submit_error` als Trigger existieren, bitte umbenennen. `form_view` und `form_field_complete` entfallen.

### Risiken
- Das Frontend zeigt auf `contact-v3`. **v3 muss vor dem Merge aktiviert sein**, sonst schlägt jedes Absenden fehl (Fehlermeldung mit Telefon und E-Mail wird angezeigt).
- Die Zeitprüfung (< 3 s gilt als Spam) könnte sehr schnelles Autofill blockieren [H]. Das ist in n8n anpassbar.

---

## D. Implementierung
Siehe Pull Request. Offene Freigaben: siehe dort.

---

## E. Erfolgsmessung
| Kennzahl | Quelle | Verfügbar |
|---|---|---|
| Leads (bestätigt) | GA4 `generate_lead` = n8n Data Table `website_leads` (Abgleich!) | ab Go-live |
| Qualifizierte Leads | CRM: Status/Feld «qualifiziert» je Lead (manuell, nach Erstgespräch) | **neu einzuführen** |
| Qualifizierte Lead-Conversion-Rate | qualifizierte Leads / Sitzungen | nach Einführung Qualifizierung |
| Formular-Abschlussrate | `generate_lead` / `form_start` | ab Go-live |
| Landingpage-CR | `generate_lead` nach `landingPage` (GA4) bzw. `attribution.firstTouch.landingPage` (CRM) | ab Go-live |
| Leadqualität nach Kanal | CRM: Qualifizierung × `utm_source`/`gclid` | nach Einführung Qualifizierung |
| CR nach Gerät | GA4 `deviceCategory` | ab Go-live |
| Anteil korrekt attribuierter Leads | Leads mit `firstTouch.utm_source` oder `referrer` oder Click-ID / alle Leads | ab Go-live |

**Messlogik:** Die Basis vor dem Launch ist mit 169 Sitzungen und 0 Leads statistisch wertlos. Empfehlung: 8 Wochen nach Go-live als erste Referenzperiode festhalten, danach Monatsvergleiche. Bei < 1'000 Sitzungen pro Monat sind A/B-Tests nicht sinnvoll (keine Signifikanz erreichbar). Stattdessen qualitative Prüfung jedes Leads und Session-Recordings. A/B-Tests erst ab ausreichendem Paid-Traffic.

---

## Roadmap (ICE: Impact, Confidence, Ease, je 1–10)
| Prio | Massnahme | I | C | E | Status |
|---|---|---|---|---|---|
| P0 | Lead-Verarbeitung n8n v3 aktivieren | 10 | 10 | 9 | vorbereitet, **Freigabe offen** |
| P0 | noindex entfernen, Sitemap, 404 | 9 | 9 | 10 | umgesetzt |
| P0 | Tracking-Fehler (gtag, `source`, generate_lead) | 8 | 10 | 9 | umgesetzt |
| P0 | Datenschutzerklärung ergänzen + Consent-Entscheid | 7 | 8 | 6 | Entwurf, **rechtliche Prüfung offen** |
| P1 | Hero/CTA/Navigation/Formular | 8 | 7 | 8 | umgesetzt |
| P1 | Unbelegte Claims entfernen, Sie-Form | 7 | 8 | 6 | umgesetzt |
| P1 | GTM: Tags/Trigger auf neues Event-Schema | 7 | 9 | 8 | **offen** (GTM-API-Kontingent erschöpft) |
| P2 | Prerendering (statisches HTML pro Route) für LCP < 2.5 s und robustes SEO | 7 | 7 | 5 | offen |
| P2 | Echte Fallstudien mit Freigabe der Kunden (Mission13, CUIRA, Marigin …) | 8 | 6 | 5 | offen |
| P2 | 14 Hero-Rechner auf eine gemeinsame Komponente zusammenführen | 4 | 8 | 4 | offen |
| P3 | Terminbuchung (z.B. Cal.com) als zweiter Conversion-Pfad | 6 | 5 | 6 | offen |
| P3 | A/B-Tests Hero-Varianten, sobald Paid-Traffic vorhanden ist | 5 | 4 | 6 | offen |
