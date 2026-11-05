# 04 – UX/UI & CRO Concept

Stand: 05.11.2026 · Status: **Konzept, wartet auf Freigabe**

## 1. Designleitlinie

Weiterentwicklung, kein Rebranding. Erhalten bleiben:

- Logo (`performanceboost-brandassets`), Akzentfarbe `#686DF4` / `#696EEF`, Grautöne `#f6f6f6` / `#505050`, Kombination aus Display-Sans und kursiver Serifen-Akzentzeile im Hero.
- Karten mit weichen Radien, dezente Linien-Grafiken (`RevenueSystemGraphic`, `HeroGrowthLayer`).
- Ruhige, helle Grundstimmung.

Weiterentwickelt wird:

| Element | Heute | Neu |
|---|---|---|
| Header | nur Logo + Menü-Button | Desktop: sichtbare Navigation (Leistungen ▾, Lösungen ▾, Referenzen, Über uns) + CTA-Button. Sticky, beim Scrollen kompakter. Mobile unverändert schlank + CTA. |
| Hero | Leadgen-Aussage, Linien-Grafik | Neue Aussage, gleiche Komposition. Unter den CTAs eine ruhige Zeile mit den drei Säulen «Strategy · Technology · Growth». |
| Säulen-Darstellung | – | Neue Komponente: drei grosse Karten mit nummerierter Kopfzeile, je 1 Satz Kernbotschaft + 3 konkrete Themen + Link. Auf Desktop nebeneinander, auf Mobile gestapelt. Ohne Glas/Glow; feine Rahmenlinie, Akzent nur bei Hover. |
| Leistungskarten | Buttons, teils verschachtelte Hover-Panels | Einheitliche `TeaserCard` (Titel, 1 Satz, Pfeil-Link), echte Links, sichtbarer Fokus. |
| Typografie | sehr viele Grössen/Gewichte | Hierarchie straffen: H1, H2, Eyebrow, Lead, Body; Eyebrows in Grossbuchstaben bleiben. |
| Visuals | Linien-Grafiken | Bestehende Grafiken weiterverwenden; neues schlichtes Diagramm «Strategie → Technologie → Wachstum» für den Business-Impact-Abschnitt (SVG, kein Stock, keine KI-Personenbilder). |

## 2. Startseite (neu)

Die neun Informationsziele werden in **sieben Abschnitte** zusammengefasst. Kürzer als heute (12 Abschnitte); der ausführliche Umsatzrechner zieht auf den Growth-Hub um, der Problem-Finder bleibt.

```
┌─────────────────────────────────────────────────────────────┐
│ 1 HERO                                                       │
│   BUSINESS PERFORMANCE PARTNER                               │
│   Mehr Performance für Ihr Unternehmen.                      │
│   (Akzentzeile kursiv) Strategie, Technologie, Wachstum.     │
│   Supporting Copy (2 Sätze)                                  │
│   [Potenzial besprechen]  [Welches Problem möchten Sie lösen?]│
│   Strategy · Technology · Growth  ·  Persönlich: Inhaber     │
├─────────────────────────────────────────────────────────────┤
│ 2 HERAUSFORDERUNGEN  (Business Challenges)                   │
│   «Kommt Ihnen das bekannt vor?» 5 Aussagen, jede verlinkt   │
│   auf die passende Lösung/Leistung                           │
├─────────────────────────────────────────────────────────────┤
│ 3 DREI SÄULEN + WARUM IM ZUSAMMENSPIEL  (Sektion 3 + 4)      │
│   Kurzer Einleitungsabsatz: Warum isolierte Kampagnen, Tools │
│   oder Strategiepapiere oft nicht reichen.                   │
│   [Strategy]   [Technology]   [Growth]   – je 3 Themen + Link│
│   Diagramm-Band: Anzeige → Website → CRM → Vertrieb → Zahlen │
├─────────────────────────────────────────────────────────────┤
│ 4 LEISTUNGSFELDER  (Sektion 5)                               │
│   4 Karten (inkl. Sales & RevOps) mit je 2–3 Detail-Links    │
│   «Alle Leistungen»                                          │
├─────────────────────────────────────────────────────────────┤
│ 5 VORGEHEN  (Sektion 6) – 4 Schritte, horizontal             │
├─────────────────────────────────────────────────────────────┤
│ 6 REFERENZEN + ÜBER performanceboost  (Sektion 7 + 8)        │
│   Kundenstimmen-Slider (bestehend) | Inhaberporträt + 3      │
│   Unterschiede · Links: Alle Referenzen, Über uns            │
├─────────────────────────────────────────────────────────────┤
│ 7 FAQ + ABSCHLUSS-CTA  (Sektion 9)                           │
│   FAQ (bestehend, angepasst) · CTA «Potenzial besprechen»    │
│   + Telefon                                                  │
└─────────────────────────────────────────────────────────────┘
```

Begründung Kombinationen: Säulen und Business-Impact sagen dasselbe aus zwei Richtungen (Was / Warum zusammen) und wirken zusammen stärker. Referenzen und «Über uns» beantworten beide die Vertrauensfrage; bei einem Inhaber-Unternehmen gehören Person und Kundenstimmen zusammen.

## 3. Leistungsfeld-Hubs (Template, 1 Komponente für alle 4)

```
Breadcrumb  Leistungen › Technology & Automation
Eyebrow     TECHNOLOGY & AUTOMATION
H1          Intelligente Technologien. Effizientere Prozesse.
Lead        Definitionsabsatz (2–3 Sätze, zitierbar)
CTA         [Prozesse besprechen]  (feldspezifisch)
─ Typische Ausgangslagen (3–4 Symptome)
─ Was wir übernehmen: Karten der Detailleistungen (bestehende Seiten) + Themen ohne eigene Seite als Liste
─ Ergebnisse, auf die wir hinarbeiten (mögliche Ergebnisse, klar als Ziel formuliert, keine Zahlen)
─ Passende Selbst-Checks (2–3 aus /skills)
─ Lösungen / Branchen / Ratgeber (kontextuell, 2–3)
─ FAQ (4–5)
─ Andere Leistungsfelder (3 kleine Karten)
─ CTA-Abschluss
```

Inhalte kommen aus `src/data/serviceAreas.ts` (neu). Growth-Hub erhält zusätzlich den Umsatzrechner und einen E-Commerce-Block.

## 4. Teaser-System (datengetrieben)

Neue Datei `src/data/serviceAreas.ts`:

```ts
export type AreaId = 'strategie' | 'technologie-automation' | 'wachstum-marketing' | 'sales-revenue-operations';

export interface ServiceArea {
  id: AreaId;            // = URL-Slug unter /leistungen
  pillar: 'strategy' | 'technology' | 'growth';
  label: string;         // «Strategy & Consulting»
  headline: string; definition: string; ctaLabel: string;
  services: string[];    // Slugs aus SERVICES (Detailseiten)
  topics: string[];      // Themen ohne eigene Seite
  challenges: string[]; outcomes: string[];
  tools: string[];       // Check-IDs aus /skills
  resources: string[];   // Artikel-Slugs
  solutions: string[];   // Lösungs-Slugs
  faq: { q: string; a: string }[];
}
```

Zusätzlich eine Zuordnung `SERVICE_AREA_OF: Record<serviceSlug, AreaId[]>` und `relatedServices(slug)` (gleiches Feld zuerst, dann explizite Querverweise). Komponenten:

- `TeaserCard` – eine Karte, ein Link.
- `RelatedServices` – auf jeder Leistungsseite, 3 Einträge, berechnet aus der Zuordnung (keine identischen Teaser auf allen Seiten).
- `AreaTeaserGrid` – Startseite und `/leistungen`.
- `ContextLinks` – Checks / Ratgeber / Lösungen pro Hub.

Neue Leistungen werden künftig nur in `services.ts` + Zuordnung in `serviceAreas.ts` ergänzt; Hubs, Footer, Mega-Menü, Teaser und Sitemap übernehmen sie automatisch.

## 5. CTA-Architektur

| Ebene | CTA | Ziel |
|---|---|---|
| Global (Header, Startseite, Abschluss) | **Potenzial besprechen** | Kontakt-Modal |
| Sekundär Startseite | Welches Problem möchten Sie lösen? | Problem-Finder (bestehend) |
| Strategie-Hub | Strategie besprechen | Kontakt-Modal |
| Technologie-Hub | Prozesse besprechen | Kontakt-Modal |
| Growth-Hub | Wachstumspotenzial prüfen | Kontakt-Modal |
| Sales-Hub | Vertrieb besprechen | Kontakt-Modal |
| Leistungsseiten | bestehende `ctaText` aus `servicesExtendedData` | unverändert |
| Finanzseiten | eigenes Formular | unverändert |

Tracking: bestehendes `cta_click` mit `cta_location` / `cta_target` (GTM v7) – neue Positionen bekommen eindeutige `cta_location`-Werte (`header`, `home_hero`, `hub_<id>_hero`, `hub_<id>_footer` …). Kein neues Event, keine GTM-Änderung nötig.

**Formular:** keine Feldänderung, Payload v3 bleibt, keine n8n-Anpassung. Damit sichtbar wird, aus welchem Kontext eine Anfrage kommt, wird die bereits mitgesendete `landing_page_url` / `page_type` genutzt; neue Seitentypen (`leistungsfeld`, `referenzen`) werden in `routes.ts` gesetzt.

## 6. Responsive-Verhalten

- Breakpoints wie bisher (Tailwind `sm/md/lg`).
- Header: ab `lg` sichtbare Navigation; darunter Menü-Button + kompakter CTA.
- Säulen und Leistungsfelder: 3/4 Spalten → 2 → 1.
- Touch-Ziele ≥ 44 px, Dropdowns per Tastatur bedienbar (`aria-expanded`, Escape schliesst).
- Animationen respektieren `prefers-reduced-motion` (bestehende `motion`-Varianten).

## 7. CRO-Massnahmen

1. Klarer Primär-CTA auf jeder Seite, sekundärer Einstieg (Problem-Finder / Checks) für Nutzer ohne konkreten Bedarf.
2. Problemorientierte Herausforderungen auf der Startseite, jeweils verlinkt: Nutzer muss sich nicht zuerst für eine Technologie entscheiden.
3. Vertrauenssignale näher an die CTAs: Inhaberbetreuung, Kundenstimmen, Telefonnummer.
4. Leistungsseiten ohne Sackgassen (Related Services, Breadcrumb).
5. Kontaktformular: Länge unverändert (bereits in PR #1 optimiert); nur Überschrift/Intro an die breitere Positionierung anpassen.
