# 04 – QA-Bericht

Stand: 06.11.2026 · Branch `copy/natural-language`

## Geänderte Dateien (28 Dateien, 243 Zeilen ersetzt)

- `src/components/FinanceGrowthCheck.tsx`
- `src/components/FinanceLeadForm.tsx`
- `src/components/Footer.tsx`
- `src/components/Navbar.tsx`
- `src/components/SEOHead.tsx`
- `src/components/bp/Conversion.tsx`
- `src/components/home/ClientTestimonials.tsx`
- `src/components/skills/SkillsDirectory.tsx`
- `src/data/challenges.ts`
- `src/data/diagrams.ts`
- `src/data/financeLanding.ts`
- `src/data/leadFlows.ts`
- `src/data/problemFinder.ts`
- `src/data/resources.ts`
- `src/data/serviceAreas.ts`
- `src/data/services.ts`
- `src/data/servicesExtendedData.ts`
- `src/data/skills.ts`
- `src/data/solutionsData.ts`
- `src/views/AboutView.tsx`
- `src/views/FinanceLandingView.tsx`
- `src/views/HomeView.tsx`
- `src/views/NotFoundView.tsx`
- `src/views/ReferencesView.tsx`
- `src/views/ResourcesView.tsx`
- `src/views/ServicesView.tsx`
- `src/views/SolutionDetailView.tsx`
- `src/views/SolutionsView.tsx`

Zusätzlich: `docs/copywriting-optimization/01–04`.

## Technische Prüfung

| Prüfung | Ergebnis |
|---|---|
| Nur Textänderungen | Automatischer Vergleich aller 28 Dateien mit `main`: Der Code ist identisch, sobald String-Literale und JSX-Textknoten ausgeblendet werden. Keine Änderung an Klassen, Props, Keys, Slugs, Struktur oder Logik. |
| TypeScript (`tsc --noEmit`) | ohne Fehler |
| Build (`npm run build` inkl. Prerender) | erfolgreich, 49 Seiten vorgerendert |
| Tests (`vitest run`) | 32/32 bestanden |
| Markenschreibweise | 0 Treffer für «Performance Boost», «PerformanceBoost», «Performance-Boost» |
| Schweizer Rechtschreibung | 0 × «ß» in den geänderten Dateien |
| Gedankenstriche | 0 Gedankenstriche « – » / « — » in den geänderten Dateien |
| Zeichenkodierung / Sonderzeichen | UTF-8, «» und Umlaute korrekt im Build |

## Visuelle Prüfung

Vergleich der Live-Seite (Stand `main`) mit dem neuen Build, gleiche Viewports (1440 px und 390 px), 18 Seiten, also 36 Messungen:

- Startseite, /leistungen, /leistungen/strategie, /leistungen/technologie-automation, /leistungen/lead-generation, /leistungen/ai-automation, /leistungen/ecommerce-performance, /leistungen/revenue-operations, /loesungen, /loesungen/handwerk, /loesungen/prozessautomatisierung, /ueber-uns, /referenzen, /kontakt, /ressourcen, /skills (plus zwei ungültige Pfade als Kontrolle)

| Kriterium | Ergebnis |
|---|---|
| Horizontaler Überlauf | in keinem Fall |
| Zeilenzahl der H1 | auf allen Seiten und Viewports identisch |
| Umbrechende Buttons und Chips | Anzahl identisch zu vorher |
| Seitenhöhe | Abweichung höchstens ±0.8 % (z.B. Startseite Desktop 8'432 → 8'415 px, /leistungen Mobil 14'086 → 14'151 px), nur durch Fliesstext-Zeilen |

Zusätzlich wurden die Startseite und /ueber-uns per Screenshot gesichtet: Hero-Layout, Raketen-Visual und Abstände unverändert.

## Bewusst nicht bearbeitet

- **Rechtliche Texte:** Impressum, Datenschutz und die Einwilligungstexte im Formular (`src/lib/qualifierLead.ts`). Sie brauchen eine gesonderte Prüfung.
- **Kundenzitate** samt Namen, Rollen und Firmen: Das sind echte Aussagen.
- **Zahlen, Rechenbeispiele, Fristen** und Referenzangaben.
- **Leistungsnamen, Menü-Labels und Haupt-CTA** «Potenzial besprechen»: Sie sind in Navigation und SEO verankert und klingen bereits natürlich.
- **Marken- und Säulenbegriffe** «Business Performance Partner», «We boost business performance.», «Strategy · Technology · Growth» und die Leistungsfeld-Labels.
- **Werte, die an das Backend gehen** (Formularname, Auswahlwerte der Finanzformulare) und Paketnamen, die in der Logik verwendet werden.
- **29 nicht mehr eingebundene Rechner-Komponenten:** Sie werden nirgends angezeigt.

## Mögliche Restpunkte

- Ein interner Entwicklerhinweis im Seitentext der Finanzdienstleister-Daten wurde entfernt. Er war nicht sichtbar, hätte aber bei künftiger Verwendung als Meta-Description erscheinen können.
- Die Seitentexte der Branchenseiten dienen gleichzeitig als Meta-Description. Ihre Überarbeitung wirkt also auch in den Suchergebnissen.
- Die Referenz-Chips «MarTech» und «Ad-Visuals» bleiben englisch, weil eine deutsche Fassung die verfügbare Breite sprengt.
