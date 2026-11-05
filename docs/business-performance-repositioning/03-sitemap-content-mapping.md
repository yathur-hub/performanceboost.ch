# 03 – Sitemap & Content Mapping

Stand: 05.11.2026 · Status: **freigegeben am 05.11.2026, umgesetzt**

## 1. Grundsätze

- Jede bestehende URL bleibt erreichbar und indexierbar. Keine Löschung, keine Umbenennung.
- Neue Pfade nur für neue Funktionen (Leistungsfeld-Hubs, Referenzen, ausgewählte Herausforderungen).
- Hauptnavigation zeigt Leistungsfelder, nicht Einzelleistungen. Einzelleistungen werden über Hubs, Teaser, Footer und Querlinks erreicht.
- Teaser sind kontextbezogen und kommen aus einer zentralen Datenquelle (siehe 04, Teaser-System).

## 2. Zielsitemap

```
/                                         Startseite (neu aufgebaut)
/leistungen                               Übersicht, gegliedert nach 4 Leistungsfeldern
  /leistungen/strategie                   NEU  Hub Strategy & Consulting
    /leistungen/growth-strategy                 bestehend
  /leistungen/technologie-automation      NEU  Hub Technology & Automation
    /leistungen/ai-automation                   bestehend
    /leistungen/marketing-automation            bestehend (auch im Sales-Hub)
    /leistungen/data-analytics                  bestehend
  /leistungen/wachstum-marketing          NEU  Hub Growth & Marketing
    /leistungen/demand-generation               bestehend
    /leistungen/lead-generation                 bestehend
    E-Commerce-Cluster:
    /leistungen/ecommerce-performance           bestehend
    /leistungen/dtc-growth-acquisition          bestehend
    /leistungen/paid-social-ecommerce           bestehend
    /leistungen/customer-retention              bestehend
  /leistungen/sales-revenue-operations    NEU  Hub Sales & Revenue Operations
    /leistungen/revenue-operations              bestehend
    /leistungen/sales-enablement                bestehend
    /leistungen/marketing-automation            (Querverweis)
/loesungen                                Hub: «Nach Herausforderung» + «Nach Branche»
  Nach Herausforderung:
  /loesungen/prozessautomatisierung       NEU  (Geschäftsprozesse automatisieren)
  /loesungen/vertrieb-optimieren          NEU  (Vertriebsprozesse optimieren)
  (weitere Herausforderungen verlinken auf bestehende Seiten, siehe 3.2)
  Nach Branche (alle bestehend):
  /loesungen/finanzdienstleister (+ hypothekarberatung, vorsorgeberatung, versicherungsbroker)
  /loesungen/saas-software … /loesungen/hospitality  (13 Seiten)
/referenzen                               NEU
/ueber-uns                                bestehend, überarbeitet
/kontakt                                  bestehend, Texte angepasst
/skills                                   bestehend (Selbst-Checks & Rechner)
/ressourcen (+ 4 Artikel)                 bestehend
/impressum, /datenschutz                  bestehend
```

Neue URLs: 4 Hubs + 2 Lösungsseiten + 1 Referenzen = **7**. Bestehende URLs: **41**, alle erhalten.

### Warum nur zwei neue Lösungsseiten?

| Vorgeschlagene Herausforderung | Bestehende Seite mit gleicher Suchintention | Entscheid |
|---|---|---|
| Mehr Kunden gewinnen | Growth-Hub, `demand-generation`, `lead-generation`, 18 Branchenseiten | **keine neue Seite** – Karte führt auf Growth-Hub. Eigene Seite würde mit Hub und Branchenseiten konkurrieren. |
| Vertriebsprozesse optimieren | teilweise `sales-enablement`, `revenue-operations` | **neue Seite** `/loesungen/vertrieb-optimieren`: problemorientiert, bündelt CRM, Lead-Management, Nachfassen, Leitfäden. Unterschied zum Sales-Hub: startet beim Symptom (verlorene Anfragen, lange Reaktionszeit), nicht bei der Disziplin. |
| Geschäftsprozesse automatisieren | keine (`ai-automation` und `marketing-automation` sind auf Marketing/Vertrieb beschränkt) | **neue Seite** `/loesungen/prozessautomatisierung` – nur mit belegbaren Einsatzbeispielen (Freigabe Inhalte nötig). |
| KI sinnvoll einsetzen | `ai-automation`, Artikel `ai-automation-b2b-sales` | **keine neue Seite** – `ai-automation` wird inhaltlich erweitert. Später neu prüfen. |
| Daten und Reporting verbessern | `data-analytics` | **keine neue Seite** – Karte führt auf `data-analytics`. |
| Marketing und Vertrieb verbinden | `revenue-operations` | **keine neue Seite** – Karte führt auf `revenue-operations`. |

## 3. Content Mapping

### 3.1 Bestehende URLs

| Bestehende URL | Zukünftige URL | Status | Zugeordnete Seite / Bereich | SEO-Massnahme | Interne Teaser (wo wird die Seite künftig angeteasert?) |
|---|---|---|---|---|---|
| `/` | `/` | B | Startseite | Prerendering, neuer Title/Description, Organization-Schema | – |
| `/leistungen` | `/leistungen` | B | Leistungsübersicht | Title/Description neu, Karten als Links, ItemList | Header, Startseite, Footer |
| `/leistungen/growth-strategy` | unverändert | B | Strategy | FAQPage, Breadcrumb | Strategie-Hub (Hauptteaser), Startseite Säule Strategy, Lösung Vertrieb optimieren |
| `/leistungen/demand-generation` | unverändert | C | Growth | FAQPage, Breadcrumb | Growth-Hub, Startseite Säule Growth, Branchenseiten |
| `/leistungen/lead-generation` | unverändert | C | Growth | FAQPage, Breadcrumb | Growth-Hub, Artikel Formular-Leads |
| `/leistungen/marketing-automation` | unverändert | C | Technology + Sales | **Footer-Link ergänzen**, FAQPage, Breadcrumb | Technologie-Hub, Sales-Hub, Lösungen Vertrieb + Prozessautomatisierung |
| `/leistungen/sales-enablement` | unverändert | C | Sales | FAQPage, Breadcrumb | Sales-Hub, Lösung Vertrieb optimieren |
| `/leistungen/revenue-operations` | unverändert | C | Sales | **Footer-Link ergänzen**, FAQPage, Breadcrumb | Sales-Hub, Lösungs-Hub Karte «Marketing und Vertrieb verbinden», Startseite |
| `/leistungen/ai-automation` | unverändert | B | Technology | FAQPage, Breadcrumb, Description erweitern | Technologie-Hub, Lösungs-Hub Karte «KI einsetzen», Lösung Prozessautomatisierung, Startseite |
| `/leistungen/data-analytics` | unverändert | C | Technology | FAQPage, Breadcrumb | Technologie-Hub, Strategie-Hub, Lösungs-Hub Karte «Daten & Reporting» |
| `/leistungen/ecommerce-performance` | unverändert | C | Growth (E-Com) | Breadcrumb | Growth-Hub (E-Commerce-Block), Footer |
| `/leistungen/dtc-growth-acquisition` | unverändert | C | Growth (E-Com) | Breadcrumb | Growth-Hub (E-Commerce-Block), Footer |
| `/leistungen/paid-social-ecommerce` | unverändert | C | Growth (E-Com) | Breadcrumb | Growth-Hub (E-Commerce-Block), Footer |
| `/leistungen/customer-retention` | unverändert | C | Growth (E-Com) | Breadcrumb | Growth-Hub (E-Commerce-Block), Footer |
| `/loesungen` | unverändert | B | Lösungs-Hub | Title/Description neu («Lösungen für KMU nach Herausforderung und Branche») | Header, Startseite |
| `/loesungen/finanzdienstleister` + 3 Unterseiten | unverändert | A | Branche Finanz | keine | Lösungs-Hub, Footer (wie bisher) |
| 13 Branchenseiten | unverändert | A/C | Branche | Breadcrumb | Lösungs-Hub, Growth-Hub («Lösungen für Ihre Branche»), Footer-Link «Alle Branchen» |
| `/ueber-uns` | unverändert | B | Über uns | Title/Description neu, Person-Schema bleibt | Header, Startseite, Footer |
| `/kontakt` | unverändert | B | Kontakt | Description neu | überall (CTA) |
| `/skills` | unverändert | C | Selbst-Checks | Title/Description breiter | Hubs je passende Checks, Footer |
| `/ressourcen` + 4 Artikel | unverändert | A/C | Ratgeber | keine | Hubs und Leistungsseiten (siehe 01, 4.4) |
| `/impressum`, `/datenschutz` | unverändert | A | Recht | keine | Footer |

### 3.2 Neue URLs

| Neue URL | Status | Inhalt | Speist sich aus (bestehende Inhalte) | Teaser auf |
|---|---|---|---|---|
| `/leistungen/strategie` | E | Strategy & Consulting: Orientierung, Potenzialanalyse, Prioritäten, Wachstums- und Digitalstrategie, Technologie- und Automationsstrategie | `growth-strategy`, Strategie-Checks auf `/skills`, Artikel Leitfaden | Header, `/leistungen`, Startseite |
| `/leistungen/technologie-automation` | E | KI, Automatisierung, Integration, CRM, Daten | `ai-automation`, `marketing-automation`, `data-analytics`, KI-/Prozess-Checks | Header, `/leistungen`, Startseite |
| `/leistungen/wachstum-marketing` | E | Performance Marketing, SEO/GEO, CRO, Landingpages, Leadgen, E-Commerce | `demand-generation`, `lead-generation`, 4 E-Com-Seiten, Umsatzrechner (von der Startseite hierher verschoben) | Header, `/leistungen`, Startseite |
| `/leistungen/sales-revenue-operations` | E | CRM-Strategie, Lead-Management, Scoring, Funnel, Alignment | `revenue-operations`, `sales-enablement`, `marketing-automation`, CRM-/Vertriebs-Checks | Header, `/leistungen`, Startseite |
| `/loesungen/prozessautomatisierung` | E | Herausforderung: manuelle Abläufe, Medienbrüche, doppelte Datenerfassung | `ai-automation`, `marketing-automation`, Check «Automatisierbare Abläufe finden» | Lösungs-Hub, Technologie-Hub |
| `/loesungen/vertrieb-optimieren` | E | Herausforderung: Anfragen bleiben liegen, kein Überblick über Pipeline | `sales-enablement`, `revenue-operations`, `marketing-automation` | Lösungs-Hub, Sales-Hub |
| `/referenzen` | E | 7 Kundenstimmen, Branchen/Aufgaben der Projekte (nur belegte Fakten) | `ClientTestimonials.tsx` | Header, Startseite, Über uns, Footer |

## 4. Navigation

**Entscheid 05.11.2026:** Der Minimal-Header (Logo + Menü-Button, PR #7) bleibt. Die Navigation liegt im Mega-Menü, das neu nach den vier Leistungsfeldern gegliedert ist:

- Spalte Leistungen: Strategy & Consulting · Technology & Automation · Growth & Marketing · Sales & Revenue Operations, je mit Link zum Hub und den Detailleistungen (jede Leistung nur in ihrem Hauptfeld).
- Schnellzugriff: CTA «Potenzial besprechen», Lösungen, Referenzen, Über uns, Selbst-Checks, Finanzdienstleister, Direktkontakt.
- Mobile: gleiche Gruppierung als Akkordeon, danach Lösungen, Finanzdienstleister, Referenzen, Ratgeber, Über uns, Selbst-Checks, Kontakt.

**Footer:** Spalten nach Leistungsfeldern (alle 12 Leistungen inkl. der bisher fehlenden zwei), Lösungen (Herausforderungen + «Alle Branchen» + Finanz), Unternehmen (Referenzen, Über uns, Ratgeber, Selbst-Checks, Kontakt), Recht.
