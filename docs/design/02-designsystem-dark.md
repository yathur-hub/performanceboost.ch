# Dunkles Designsystem (Richtung B, überall dunkel)

Stand 14.11.2026, Branch `design/premium-directions`. Freigabe des Inhabers: «B als Hybrid umsetzen, aber überall die dunkle Hintergrundfarbe, auch Mega-Menü.» Der helle Abschnitt aus dem Prototyp entfällt deshalb. Grundlage ist `01-premium-audit-und-richtungen.md`.

## Flächen und Farben (src/index.css, @theme)
| Token | Wert | Einsatz |
|---|---|---|
| `canvas` | `#101116` | Seitenhintergrund, Header, Footer |
| `surface` | `#14151C` | Karten, Panels, Mega-Menü, Formulare (ersetzt `bg-white`) |
| `surface-2` | `#181923` | erhöhte Elemente, Konsole, Hover von Karten |
| `deep` | `#1C1D2A` | ehemals dunkle Kontrastboxen (CTA, Inhaber, Kontakt) |
| `line` / `line-strong` | `#262733` / `#34354A` | Hairlines und Rahmen (ersetzt `#E0E0E0`) |
| `accent-strong` | `#A0A3F9` | Akzent als Textfarbe (7,6:1) |
| `#686CFA` | unverändert | Flächen, Linien, Icons, Glow. Als Textfarbe automatisch `#A0A3F9` |
| Buttons | `#5458E0`, Hover `#5A5FE0` | weisse Schrift 5,4:1 |

- **Neutrale Skala:** Sie ist für Dunkel neu belegt. Die Stufen 50–250 sind Flächen und Linien, 300–950 Text, von `#9A9BB0` (Hilfstext, 5,7:1) bis `#F6F6FA` (Überschriften).
- **Farbpaletten** (Rot, Grün, Amber usw.): Die Stufen 50–200 sind dunkle Tönungen, die Stufen 300 und höher helle Schrift. Badges und Statusfarben bleiben so lesbar.
- **Umstellung im Code:** Rund 440 fest codierte Farbklassen sind auf diese Tokens umgestellt. Halbtransparentes Weiss (`bg-white/5` bis `/30`) bleibt als Overlay erhalten.

## Typografie
- **Überschriften:** Plus Jakarta Sans in einem Gewicht (600) mit einer Laufweite von −0,025 em. Der Claim nutzt die Hero-Typografie aus `system.css` (bis 4,9 rem, −0,035 em), die Kursive mit Serifen bleibt als Markenakzent.
- **Fliesstext** in Inter, Labels in JetBrains Mono.

## Motion (src/index.css, Abschnitt MOTION-SYSTEM)
- **Überschriften** erscheinen von unscharf zu scharf, 800 ms, 8 px Unschärfe. Masken-Wipes gibt es nicht mehr.
- **Inhalte, Karten und Listen** blenden nur über die Deckkraft ein, mit 6 px Bewegung, 560 ms und einer Staffel von 55 ms. Lange Slide-ups gibt es nicht mehr.
- **Bilder** erscheinen weich über Deckkraft und Unschärfe, ohne Clip und ohne Scale.
- **Weg fallen:** Hover-Anheben der Karten, das Schweben der Rakete und dauernde Float-Animationen. Karten reagieren über Fläche und Rahmen.
- **Reaktionszeiten:** 160 ms für Buttons und Links, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Auftritte mit `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Reduzierte Bewegung:** Bei `prefers-reduced-motion` erscheint alles sofort.

## Premium-Bausteine (src/styles/system.css, src/components/system/SystemBlocks.tsx)
- **SystemConsole:** Beispielablauf einer Website-Anfrage (Regel, KI, Agent, Freigabe) als Produkt-Visual im Hero. Eine Choreografie von rund 1,8 s.
- **ScrollStatement:** Die Wörter hellen mit dem Scrollfortschritt auf (rAF, nur Farbe).
- **ComparisonRows:** Die Vergleichszeilen werden bei 55 % der Bildhöhe aktiv. Die Überschrift ist auf Desktop fixiert.
- **pbx-link und pbx-btn:** Die Unterstreichung wächst von links, der Pfeil bewegt sich 3 px.
- **Reveal-System:** Bereiche mit eigener Animation sind mit `data-rv-skip` markiert und werden vom automatischen System ausgelassen.

## Startseite
Reihenfolge:
1. Hero (Claim über die volle Breite, Text, CTAs, Konsole)
2. Statement
3. Herausforderungen
4. Vergleich «Klassisch wachsen oder AI First»
5. Drei Bereiche
6. Systemgrafik und Stufen
7. Vorgehen
8. Kundenstimmen
9. Inhaber
10. FAQ
11. Abschluss

Die Rakete ist aus dem Hero entfernt, im Schluss-CTA bleibt das 3D-Motiv.

## Systemgrafik
SVG-Farben für Dunkel:
- Knoten `#181923`, Kern mit Verlauf `#262848` → `#181923`
- Schrift `#F2F2F7` bzw. `#B9BACB`
- inaktive Verbindungen `#4A4DA8` bzw. `#3B3E86`, aktive in `#686CFA`

Die fachliche Logik und Interaktion sind unverändert.

## Mega-Menü
Gestaltung und Funktion sind unverändert. Über die Tokens erscheint es auf `surface` mit Hairlines `line`, der Akzent ist unverändert.

## Prüfung
- **Technik:** Typecheck, 36/36 Tests und Build (73 Seiten) laufen durch.
- **Kontrast:** Scan aller Textelemente auf 24 Seiten nach WCAG AA. Es bleibt keine Unterschreitung ausser einem deaktivierten Button, der von der Regel ausgenommen ist.
- **Layout:** Audit über 26 Seiten × 9 Breiten ohne Überlauf und ohne Konsolenfehler. Touch-Ziele und Eingabefelder sind unverändert. Die Startseite ist um das Statement länger (+0,8–1,1 Bildschirmhöhen).

## Offen
- **Logo für dunkle Flächen:** Die heutige Datei hat eine helle Fläche.
- **WebP-Infografiken** mit hellem Grund: Sie wirken auf Dunkel wie helle Tafeln. Einzeln ersetzen oder ausblenden, sobald dunkle Varianten vorliegen.
- **Weitere Seiten:** Die Unterseiten übernehmen das System über Tokens und Motion. Eigene Kompositionen (etwa Konsole oder Zeilen statt Karten) für Bereichs- und Leistungsseiten wären der nächste Schritt.
