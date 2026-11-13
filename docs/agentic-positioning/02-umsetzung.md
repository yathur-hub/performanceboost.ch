# Phase 2: Umsetzung und QA

**Positionierung:** «Boost your performance through agentic marketing, sales & processes.»
Stand 13.11.2026. Branch `feat/agentic-positioning`, aufgebaut auf PR #20 (`feat/martech-wissen-labor`). **Nicht veröffentlicht.**

Freigabe Phase 1 durch den Inhaber am 13.11.2026, mit Präzisierungen. Die Umsetzung folgt `01-phase1-analyse-architektur.md`. Abweichungen sind unten begründet.

---

## 1. Was sich geändert hat

### Struktur und Navigation
- **Drei Kompetenzbereiche:** `/leistungen/marketing`, `/leistungen/sales` und `/leistungen/prozesse` (Label «Processes»).
- **Agentic AI:** `/leistungen/ki-im-unternehmen` ist die übergreifende Seite für Agentic AI (`kind: 'capability'`). Die URL bleibt.
- **Neue Seite `/ansatz`:** die vier Phasen, die Grundsätze, die drei Arbeitsformen und Fragen zum Vorgehen.
- **Header ab 1024 px:** Marketing · Sales · Processes · Ansatz · Wissen, dazu der CTA «Gespräch anfragen».
  - Die drei Bereiche haben je ein kompaktes Panel, das bei Hover und bei Tastaturfokus aufgeht (`:focus-within`, ohne zusätzliches JavaScript). Es zeigt die 3–4 Kernleistungen mit Kurzbeschreibung und den Link «Alles zu …».
  - Damit sind die 14 Leistungen erreichbar, und der Header bleibt bei fünf Wörtern. Die Bereiche dominieren, die Leistungen sind untergeordnet.
  - Escape schliesst das Panel.
- **Overlay-Menü (☰), auf Mobile die Hauptnavigation:**
  - drei Bereichskarten, mobil als Akkordeon
  - Ansatz und Agentic AI als eigene Zeile
  - Wissen und Unternehmen als Listen
  - Kontaktkarte
- **Footer:** Claim, dazu die Spalten Leistungen (3 Bereiche, Ansatz, Agentic AI, Lösungen), Wissen und Unternehmen.
- **Shop-Leistungen:** Die 4 Seiten stehen nicht in Navigation und Startseite. Sie bleiben auf dem Marketing-Hub (Gruppe «Für Onlineshops»), auf `/leistungen` und in den Querverweisen.

### Leistungsarchitektur: kritische Prüfung der 14 Seiten
| Leistung | Bereich | Entscheid | Begründung |
|---|---|---|---|
| growth-strategy | Marketing | Titel neu: «Marketing- & Wachstumsstrategie» | Strategie ist Phase 1 und kein Bereich. Inhaltlich ist die Seite Marketingstrategie und Go-to-Market. Das Keyword «Wachstumsstrategie» bleibt im Titel. |
| demand-generation | Marketing | Titel neu: «Performance Marketing & Online-Werbung» | Sichert die SEO-Relevanz für «Performance Marketing», die sonst mit der Neupositionierung schwächer würde. |
| lead-generation | Marketing | unverändert | Klare eigene Suchintention (SEO, Content, Direktansprache) und abgegrenzt von bezahlter Werbung. |
| data-analytics | Marketing | Titel neu: «Tracking, Attribution & Reporting» | Attribution ist das Bindeglied Marketing → Umsatz. Die Seite ist bewusst mit Sales verlinkt. |
| marketing-automation | Sales | Titel neu: «CRM & Marketing Automation» | Der Kern der Seite ist CRM und Pipeline. Hauptbereich ist Sales, Marketing Automation steht auf dem Marketing-Hub als Kompetenzfeld. |
| revenue-operations | Sales | unverändert | Kern von Sales. Überschneidung mit marketing-automation über die Querverweise sauber getrennt (RevOps = Zusammenspiel, CRM-Seite = System). |
| sales-enablement | Sales | Kurzbeschreibung um Gesprächsvorbereitung mit Agent ergänzt | Die schwächste Passung zur Positionierung, aber eine legitime Vertriebsleistung. Der Bezug zu Agenten (Recherche vor dem Gespräch) ist im eigenen Betrieb belegt. |
| ki-agenten | Processes | unverändert | Bereits stark auf agentische Abläufe mit Freigabe ausgerichtet. Kern von «KI-Agenten & Orchestrierung». |
| martech-stack | Processes | unverändert | Systemintegration und Tool-Architektur. |
| ai-automation | Processes | unverändert | KI-Einführung, Schulung und Regeln, also Governance und Enablement. Auch auf der Agentic-AI-Seite. |
| 4 × E-Commerce | Marketing (Gruppe Onlineshops) | unverändert, nicht in der Navigation | Starke Überschneidungen untereinander. **Empfehlung:** Nach der Search-Console-Prüfung auf 1–2 Seiten mit 301 zusammenlegen. Ohne Rankingdaten nicht jetzt. |

Neue Leistungsseiten gibt es keine. «Workflow-Automatisierung», «Prozessarchitektur» und «Datenflüsse & Governance» sind Kompetenzfelder auf dem Processes-Hub. Die Lösungsseite `/loesungen/prozessautomatisierung` deckt die Suchintention ab.

### Startseite
1. Hero mit Claim (H1, `lang="en"`) und deutscher Subheadline
   - drei konkrete Ergebnisse: mehr passende Anfragen, schneller zum Auftrag, weniger Handarbeit
   - CTAs «Ausgangslage besprechen» und Problem-Finder
   - Zielgruppenzeile
   - Die Rakete bleibt.
2. Herausforderungen, mit Bereichs-Label auf jeder Karte
3. Drei Bereiche, ein System. Jede Karte hat Titel, Nutzen, Kompetenzfelder, Ergebnis und einen Link. Ersetzt die Säulen und die fünf Leistungsfelder.
4. Zusammenspiel: Engpass-Text mit dem neuen Systemdiagramm, darunter die Stufen der Automatisierung (Regel, KI-unterstützt, Agent, menschliche Steuerung). Die eigene Agentic-Sektion aus dem Konzept ist hier integriert, das spart einen Abschnitt.
5. Vorgehen: vier Phasen, je mit «Einstieg, wenn …». 03 und 04 sind als wiederkehrend markiert.
6. Kundenstimmen, unverändert
7. Inhaber, mit Links zu MarTech-Wissen und Labor (ersetzt die eigene MarTech-Sektion)
8. FAQ mit 6 Fragen, davon 3 neu: agentic, keine KI-Agentur, nicht alle Phasen nötig
9. Abschluss-CTA «Erstgespräch vereinbaren»

Von 10 geplanten Sektionen sind es 9 geworden, ohne doppelte Leistungsdarstellung.

### Systemdiagramm (`src/components/home/RevenueSystemGraphic.tsx`)
- **Kein Funnel mehr:**
  - Marketing → Sales → Ergebnis bilden einen Kreislauf.
  - Dazu kommen die Rückmeldung Sales → Marketing («was zu Aufträgen wird») und «Daten & Feedback» vom Ergebnis zurück ins Marketing.
- **Processes ist der Kern:** Systeme, Daten und Automatisierung sind über animierte Datenflüsse mit allen drei Stationen verbunden.
- **Agentic AI:** eine Umlaufbahn um den Kern mit je einem Agenten auf jeder Verbindung.
- **Interaktion:** Ein Klick oder Fokus auf einen Knoten zeigt darunter, was dort passiert, was Agenten übernehmen und wer entscheidet. Das Detailfeld ist zugleich die Textalternative (`figcaption`, `aria-live`).
- **Mobil:** gestapelte Karten mit einer durchgehenden Processes-Schiene.
- **Technik:** Bei `prefers-reduced-motion` gibt es keine Animation. Es kommen keine neuen Abhängigkeiten dazu.

### Bereichsseiten
Bestehende Blöcke bleiben. Neu sind:
- eine Oberzeile «Bereich · Unterzeile»
- die Rolle im System als Intro zu den Leistungen
- «Wo Agenten im … mitarbeiten» (3 Aufgaben, je mit Freigabe durch einen Menschen)
- «So gehen wir im Bereich … vor» (vier Phasen mit bereichsspezifischem Inhalt, Hinweis «nicht jedes Vorhaben braucht alle vier»)
- «Ein System, drei Bereiche» statt «Die anderen Leistungsfelder»
- die Bereichs-CTA auch am Seitenende

Die Agentic-AI-Seite zeigt die Stufenleiter, die eigene Praxis und Verweise auf die Agentenaufgaben je Bereich.

### SEO
- 301 in `public/_redirects`:
  - `/leistungen/wachstum-marketing` → `/leistungen/marketing`
  - `/leistungen/sales-revenue-operations` → `/leistungen/sales`
  - `/leistungen/technologie-automation` → `/leistungen/prozesse`
  - `/leistungen/strategie` → `/ansatz`
  - Ein Test prüft alle vier.
- Alle internen Links sind umgestellt (Daten, Ratgeber, MarTech-Themen, Labor, Lead-Strecken, Tests).
- Titel und Beschreibungen sind neu für Startseite, 3 Hubs, Agentic AI, /ansatz, /leistungen und index.html.
- Das Schema `ProfessionalService` hat den neuen Slogan, eine neue Beschreibung und `knowsAbout` ergänzt um KI-Agenten und Agentic AI. /ansatz hat WebPage und BreadcrumbList.
- Sitemap: 71 URLs, Prerender: 73 Seiten (wie vorher: 4 alte Hubs weg, 3 Hubs und /ansatz neu).
- Die Lead-Strecken sind den neuen Hubs zugeordnet: marketing → `marketing`, sales → `sales`, prozesse → `automation`. `formId` und Payload sind unverändert.

### CI und Leitfaden
- Akzentfarben sind auf die Brief-Werte vereinheitlicht (#686DF4/#696EEF → #686CFA, #CACCFB → #CBCBFC, Schriftfarbe #4F4F4F). Die visuelle Abweichung liegt unter 1 %.
- Der Redaktionsleitfaden (`docs/copywriting-optimization/03`) hat den neuen Claim, die Bereichs- und Phasennamen, Regeln für Agentic AI und die CTA-Matrix.

---

## 2. Prüfung
- `npm run lint` (tsc): ok
- `npm test`: 34/34. Neu geprüft werden genau 3 Bereiche, je Leistung genau ein Hauptbereich, Phasenbeispiele je Bereich und die 301-Weiterleitungen samt Zielen.
- `npm run build`: ok, 73 Seiten vorgerendert
- Screenshots Desktop (1440) und Mobile (390) für Startseite, 3 Hubs, Agentic AI, /ansatz, /leistungen und eine Leistungsseite:
  - keine Konsolenfehler
  - kein horizontales Scrollen (ein Überlauf im Footer bei 1440 px wurde behoben)
- Tastatur: Tab öffnet die Panels der Hauptnavigation, Escape schliesst sie. Die Knoten im Diagramm sind per Tab und Enter bedienbar.

## 3. Offen vor dem Go-live
1. **Search Console** vor dem Deployment prüfen: Klicks und Impressionen der 4 alten Hub-URLs und der Performance-Marketing-Seiten (letzte 3 Monate). Dafür braucht es `! gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/cloud-platform`.
2. **Reihenfolge beim Merge:**
   - Zuerst PR #20 nach `main`, dann diesen PR. Jeder Merge auf `main` geht sofort produktiv (Cloudflare Workers Builds).
   - Danach die Weiterleitungen live testen und die Sitemap in der Search Console neu einreichen.
3. **Sichtprüfung** auf echtem iPhone und in Safari, vor allem das Diagramm und die Panels.
4. **Später:** E-Commerce-Seiten konsolidieren (siehe oben) und GA4-Dimension `form_location` registrieren.
