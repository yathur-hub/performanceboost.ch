# Mobile Design: Spacing, Typografie, Hierarchie

Stand 13.11.2026, Branch `feat/agentic-positioning` (PR #21). Nicht veröffentlicht.
Grundsatz: Die Änderungen greifen unter 1024 px (Abstände) bzw. 640 px (Schriftgrössen). Desktop bleibt unverändert.

## 1. Visual Audit (Ausgangslage bei 390 px)
Der im Auftrag erwähnte iPhone-Screenshot lag nicht bei. Als Ausgangspunkt dienten eigene Aufnahmen bei 320, 375, 390, 430 und 768 px. Sie zeigen die beschriebenen Schwächen.

| Bereich | Befund |
|---|---|
| Seitenrand | 16 px auf allen Seiten, dadurch wirken Texte und Karten gedrängt |
| Header und Hero | Auf der Startseite rund 20 px zwischen Header und Eyebrow, zu knapp |
| Hierarchie | Startseite zentriert: Eyebrow (zweizeilig), H1 34 px über fünf Zeilen, Fliesstext 16 px zentriert. Alle Gruppen mit gleichem Abstand (24 px), ohne Gruppierung |
| Fliesstext | Auf den Leistungsseiten rund 18 px (`text-body-lg`), fast so schwer wie die Überschrift |
| CTAs | Primär-Button 56 px hoch mit 17 px Schrift. Der sekundäre CTA ist ein gleich grosser umrandeter Button, also zwei gleichwertige Hauptaktionen |
| Vorteile | Drei Zeilen mit 10 px Abstand |
| Sektionen | Abstand zwischen grossen Sektionen 64 px |
| Unterseiten | H1 32 px über vier Zeilen, Definitionstext 16 px über acht Zeilen, Buttons 56 px. Kontakt: H1 36 px, Intro 14 px fett und zentriert |

## 2. Tokens und Regeln
Definiert in `src/index.css`, Abschnitt «MOBILE RHYTHMUS & TYPOGRAFIE».

| Token / Regel | Wert | Zweck |
|---|---|---|
| `--page-gutter` | clamp(20px, 6.4vw, 28px): 20 px bei 320, 24 bei 375, 25 bei 390, 28 bei 430 | Seitenrand für alle Seitencontainer und den Header (mit Safe Area) |
| `--hero-gap-eyebrow` | 18 px | Eyebrow zu H1 (zusammengehörig) |
| `--hero-gap-h1` | 26 px | H1 zu Subheadline |
| `--hero-gap-group` | 36 px | zwischen Gruppen: Text, Vorteile, CTA |
| `--hero-gap-tight` | 16 px | innerhalb einer Gruppe: CTA und Hinweis, CTA und Vertrauenszeile |
| Abstand zwischen Sektionen | 80 px (vorher 64) | ruhigere Übergänge, Kartenabstände bleiben |
| `--font-size-body` | clamp(15px, …, 18px): 15.3 px bei 390, ab 1060 px wie bisher 18 px | Fliesstext klar unter den Überschriften |
| `--font-size-body-lg` | clamp(16px, …, 20px) | Hero-Unterzeilen der Leistungsseiten |
| `html` | bisherige Skala (16–18 px) | Die rem-Basis bleibt, damit Abstände und 44-px-Touch-Ziele nicht mitschrumpfen |
| Hero-H1 (< 640 px) | clamp(28px, 7.7vw, 33.6px), Zeilenhöhe 1.12, Laufweite −0.02em | kraftvoll, ohne den ersten Bildschirm zu füllen |
| Hero-Subheadline (< 640 px) | 15.5 px, Zeilenhöhe 1.65, Grau 600 | deutlich leichter als die H1 |
| Eyebrow (< 640 px) | 11 px, Laufweite 0.16em, ausbalancierter Umbruch | keine einzelnen Wörter in der zweiten Zeile |
| Abschnitts-H2 (< 640 px) | 22.4 px | klare Stufe unter der H1 |
| Primär-Button (< 640 px) | 50 px hoch, 15 px Schrift, 16-px-Pfeil | dominant, aber nicht überdimensioniert |

## 3. Umsetzung
- **Startseiten-Hero:**
  - Linksbündig statt zentriert, wie auf Desktop, für eine ruhigere Lesekante.
  - Gruppen: Eyebrow und H1 eng, dann Text, Vorteile (14 px Zeilenabstand) und CTA-Gruppe mit 36 px Abstand.
  - Der sekundäre CTA ist auf dem Smartphone ein zurückhaltender Textlink mit Pfeil (44 px Touch-Höhe). Ab 640 px bleibt er ein umrandeter Button.
  - Die Rakete steht rechtsbündig unter den CTAs. Header-Abstand 132 px statt 112 px.
- **Unterseiten-Heros** (Bereiche, Agentic AI, Ansatz, Leistungen, Branchen, Referenzen) übernehmen über `.hero-enter` denselben Rhythmus und dieselbe Typografie, ohne Änderungen an den Komponenten.
- **Kontakt-Hero:** H1 auf Mobile 30–36 px statt 36 px, Intro 15 px in normalem Gewicht statt 14 px fett.
- **Seitenrand und Sektionsabstand** gelten für alle Seiten, inklusive Footer und Mega-Menü.

## 4. Visual QA
- **Screenshots** bei 320, 375, 390, 430 und 768 px (Startseite, Marketing, Ansatz) und bei 390 und 1440 px (zehn Seitentypen), dazu ganze Seiten bei 390 px:
  - Startseite bei 390 px: H1 30 statt 34 px, Hero 1099 statt 1124 px hoch.
  - Bei 768 px: Hero 1119 statt 1214 px.
- **Desktop 1440 px:** Seitenhöhen auf allen 26 Audit-Seiten unverändert, 17 von 20 Vergleichsbildern pixelgleich. Die drei Abweichungen sind ein externes Porträt, das beim Screenshot noch nicht geladen war, das Layout ist identisch. Eine echte Abweichung (3 px Zeilenhöhe im Hinweis unter dem CTA) ist gefunden und auf Mobile eingegrenzt. Zwischen 1024 und 1060 px ist der Fliesstext minimal kleiner (unter 0.2 px).
- **Audit 26 Seiten × 9 Breiten:**
  - kein Überlauf, keine Konsolenfehler (ausser dem Leadinfo-Tracker, der lokal per CORS blockiert)
  - Touch-Ziele unter 44 px: 419 (vorher 421)
  - Eingabefelder unter 16 px: 0 (Range-Slider ausgenommen)
  - Text unter 11 px: 0
- **Motion:**
  - Die Hero-Sequenz läuft auf Mobile mit dem neuen Rhythmus (Einzelbilder bei 180, 450 und 1300 ms).
  - Mega-Menü auf Desktop, Tablet und Mobile: kein Layoutsprung, die Fokus-Schleife hält, Escape schliesst das Menü.
  - Die Scroll-Reveals werden nicht berührt, die Regeln setzen nur Abstände und Schriftgrössen.
- **Technik:** Typecheck, 36/36 Tests und Build laufen durch.

## 5. Offen
- Sichtprüfung auf einem echten iPhone. Die Emulation entspricht der Breite, nicht exakt der iOS-Schriftdarstellung.
- Bei 768 px steht der Hero jetzt linksbündig mit der Rakete rechts darunter. Ein zweispaltiges Tablet-Layout bleibt eine mögliche spätere Designentscheidung.
