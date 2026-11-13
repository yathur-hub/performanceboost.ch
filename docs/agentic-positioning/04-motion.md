# Motion-System

Stand 13.11.2026, Branch `feat/agentic-positioning` (PR #21). Nicht veröffentlicht.

## 1. Audit (Ausgangslage)
| Bereich | Vorher | Problem |
|---|---|---|
| Hero | CSS-Stagger (`.hero-enter`), Rakete mit Einflug und Dauerschweben | H1 nur Fade, kein eigener Auftritt |
| Scroll-Reveals | Zwei Systeme parallel: CSS (`useScrollReveal`) und 27 Framer-Motion-`whileInView`-Stellen mit eigenen Distanzen (15–30 px, auch seitlich) | Uneinheitlich, Abschnitte mit Framer wurden vom CSS-System ausgelassen |
| Seitenwechsel | `AnimatePresence mode="wait"`: Exit 0.2 s, dann Enter 0.45 s | Jeder Klick wartete auf die Exit-Animation |
| Scroll | `scroll-behavior: smooth` immer, keine Scroll-Wiederherstellung, Views scrollten selbst nach oben | Zurück-Navigation landete oben, Smooth Scroll auch bei reduzierter Bewegung |
| Layout | `createRoot` ersetzt das vorgerenderte HTML, lazy Seiten zeigten kurz einen Platzhalter | CLS 0.2 auf allen Unterseiten (Footer sprang ins Bild) |
| Menü | Container-Fade, Icon-Tausch | Gruppen ohne Staffel, Icon wechselte hart |
| Dauerbewegungen | Schwebende 3D-Visuals, dauerhafte Datenflüsse und Pulse im Diagramm | Unruhe ohne Funktion |
| Micro-Interactions | Tailwind-Standard 150 ms linear-ähnlich, uneinheitliche Hover | Keine gemeinsame Kurve |

## 2. Technische Entscheide
- **Keine neue Dependency.** CSS für Reveals und Micro-Interactions, IntersectionObserver für Auslöser, `motion/react` nur dort, wo es schon war (Menü, Modal, Formulare).
- **Kein Lenis, natives Scrolling.**
  - Smooth-Scroll-Bibliotheken übernehmen das Scrollen per JavaScript. Das verzögert die Eingabe, kollidiert mit Touch-Scrolling und Tastatur und erschwert Ankerlinks und Scroll-Wiederherstellung.
  - Natives Scrolling ist auf allen Geräten flüssiger. `scroll-behavior: smooth` gilt nur ohne reduzierte Bewegung.
  - Scroll-Positionen werden pro History-Eintrag gemerkt (`sessionStorage`) und bei Zurück/Vor wiederhergestellt.
- **Seitenübergänge über die View Transitions API** (Chrome, Edge, Safari 18+):
  - Der alte Inhalt blendet in 180 ms aus, der neue gleitet in 380 ms ein. Der Header ist ausgenommen und bleibt stehen.
  - Ohne API läuft eine CSS-Einblendung (`.page-enter`).
  - Es gibt keine Exit-Wartezeit mehr: Der Inhalt wechselt sofort.
- **Kein Layoutsprung beim Laden:**
  - `lazyView()` ersetzt `React.lazy` und lädt den Code der aktuellen Seite vor dem ersten Render (`main.tsx`) und vor jedem Seitenwechsel.
  - Im Leerlauf werden alle Seiten vorgeladen.
  - Das vorgerenderte HTML bleibt stehen, bis React es identisch ersetzt.
- **Ohne JavaScript ist alles sichtbar:** Die Reveal-Klassen setzt erst der Browser. Nach dem Reveal werden sie entfernt, damit Hover-Übergänge wieder ohne Verzögerung greifen.
- **Parallax** nur für die Hero-Rakete, per CSS-Scroll-Timeline. Sie läuft ohne Scroll-Handler, nur ab 1024 px und nur ohne reduzierte Bewegung. Browser ohne Unterstützung zeigen sie statisch.

## 3. Motion Tokens
Definiert in `src/index.css` (`:root`, Abschnitt MOTION-SYSTEM) und gespiegelt in `src/lib/motion.ts`.

| Token | Wert | Einsatz |
|---|---|---|
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Reveals, Öffnen, Hover (Hauptkurve) |
| `--ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Schliessen, Ausblenden |
| `--ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Schweben der Rakete |
| `--dur-press` | 120 ms | Press-Feedback |
| `--dur-button` | 200 ms | Button-Hover und Fokus |
| `--dur-link` | 240 ms | Textlinks, Unterstrich, Pfeile |
| `--dur-card` | 300 ms | Karten-Hover, Inhaltswechsel |
| `--dur-accordion` | 340 ms | FAQ, Akkordeons |
| `--dur-menu` / `--dur-menu-exit` | 460 ms / 300 ms | Mega-Menü (Panel 420 ms, Gruppen 460 ms) |
| `--dur-page-out` / `--dur-page-in` | 180 ms / 380 ms | Seitenwechsel |
| `--dur-reveal` | 720 ms | Scroll-Reveals |
| `--dur-hero` | 1000 ms | Hero-Headline |
| `--stagger` | 80 ms (mobil 60 ms) | Versatz in Rastern |
| `--dist-reveal` / `--dist-item` / `--dist-hero` | 24 / 16 / 28 px (mobil 16 / 12 / 18 px) | Bewegungsdistanzen |
| `--scale-in` | 0.97 | Scale-Reveal |

Tailwind: `--default-transition-duration: 220ms` und `--default-transition-timing-function` mit der Hauptkurve. Damit folgen alle bestehenden `transition-*`-Klassen derselben Sprache.

## 4. Implementierte Animationen
**Hero (alle Seiten mit `.hero-enter`):**
- Oberzeile ab 0 ms, H1 maskiert von unten (1000 ms). Auf der Startseite gleiten die zwei Zeilen einzeln aus einer festen Maske (60 und 170 ms).
- Danach folgen Subheadline, Ergebnisse, CTAs und Zusatzzeile im Abstand von 80 ms ab 300 ms. Die Inhalte sind nach rund einer Sekunde vollständig da.
- Die Rakete fliegt mit Fade, Versatz und leichtem Scale in 1.3 s ein, der Rauch folgt. Danach schwebt sie sehr ruhig (4.8 s pro Zyklus, Start nach 1.5 s). Dazu kommt die Parallax beim Wegscrollen.

**Scroll-Reveals (`useScrollReveal`, alle Seiten und der Footer):** Fünf Varianten, nach Inhalt automatisch vergeben:
- Abschnittsüberschrift: maskierter Reveal (`.rv-mask`), Intro 90 ms später
- Karten und Listen: gestaffelt (`.rv-item`, maximal 8 Stufen)
- Bilder: Masken-Reveal mit leichtem Scale-out (`.rv-image`)
- Dunkle CTA-Flächen: Scale-in (`.rv-scale`)
- Sonst: Fade-up (`.rv-fade`), Texte und Buttons 180 ms nach der Überschrift

Bereits sichtbare Abschnitte werden nicht nachträglich animiert, das verhindert Flackern. Alle 27 Framer-`whileInView`-Stellen sind entfernt, das System gilt überall.

**Mega-Menü:**
- Das Panel gleitet ein und öffnet sich über eine Maske (420 ms), der Hintergrund blendet weich ein (360 ms).
- Die Gruppen erscheinen gestaffelt (60 ms, ab 100 ms): drei Bereiche, dann Vorgehen, Wissen und Kontakt.
- Schliessen läuft kürzer und ohne Staffel (300 ms).
- Das Hamburger-Icon verwandelt sich in ein X (drei Linien, 460 ms).
- Textlinks haben einen Unterstrich-Reveal. Die Bereichs-Icons füllen sich beim Hover.

**Micro-Interactions:**
- Pfeil-Icons in allen Links und Buttons rücken beim Hover und Fokus 3 px nach (Ausnahme: diagonale Pfeile, 2 px nach rechts oben).
- CTAs haben Press-Feedback (Scale 0.98) und einen weichen Schatten beim Hover.
- Footer- und Menülinks haben den Unterstrich-Reveal, der Fokusring blendet weich ein.

**Karten:** Hover mit einheitlich 300 ms und der Hauptkurve, für alle bestehenden `transition-all`-Karten.

**Bilder:** Masken-Reveal beim Scrollen. Szenische Illustrationen zoomen beim Hover dezent (1.025, 900 ms), Infografiken nicht, damit der Text ruhig bleibt.

**Systemdiagramm:**
- Beim ersten Sichtkontakt erscheinen nacheinander der Kern, die Bereiche, die Umlaufbahn der Agenten, die Verbindungen (sie zeichnen sich) und die Beschriftungen.
- Der Datenfluss läuft nur auf den Verbindungen des gewählten Knotens. Der Agent darauf pulsiert beim Wechsel zweimal und kommt dann zur Ruhe.
- Das Detailfeld blendet seinen Inhalt beim Wechsel weich um.

**FAQ:** Öffnen und Schliessen mit Höhenanimation (340 ms, wo der Browser `interpolate-size` kann), sonst ein Fade-up des Inhalts. Der Pfeil dreht sich.

**Modal (Formular):** Hintergrund 320 ms, Panel mit Fade, Versatz und Scale (460 ms), Schliessen 220 ms.

**Entfernte Dauerbewegungen:** Schweben der 3D-Objekte auf den Bereichs- und Referenzseiten, permanenter Datenfluss und Dauerpuls im Diagramm.

## 5. Reduzierte Bewegung
Bei `prefers-reduced-motion: reduce` gilt:
- keine Reveal-Klassen, alle Inhalte sofort da
- keine Hero-, Parallax-, Seitenübergangs- und Diagramm-Bewegung
- kein Smooth Scroll, kein Press-Scale
- Das Menü blendet nur über (120 ms).
- Farb- und Zustandswechsel bleiben sichtbar.

## 6. Prüfung
- **Chrome, 19 Seiten auf Desktop (1440) und Mobile (390):**
  - keine Konsolenfehler, kein horizontaler Überlauf
  - CLS höchstens 0.01 (vorher 0.2 auf allen Unterseiten)
  - Nach den Reveals bleibt nichts unsichtbar. Einzige Ausnahme ist ein bewusst unsichtbarer Hover-Glow auf Über uns.
- **WebKit (Safari-Engine) auf Desktop und Mobile:** Startseite, Processes, Ansatz und Agentic AI ohne Fehler und ohne Überlauf, View Transitions verfügbar, Escape schliesst das Menü.
- **Navigation:**
  - Ein Seitenwechsel landet oben auf der neuen Seite.
  - Zurück stellt die Position exakt wieder her (2400 px → 2400 px), Vor ebenfalls.
- **Reduzierte Bewegung:** 0 Reveal-Klassen, H1 ohne Animation, nichts verborgen.
- **Ohne JavaScript:** vorgerenderte Inhalte vollständig sichtbar.
- **Einzelbilder** von Hero, Menü und Reveals geprüft. Danach nachjustiert: Headline-Zeilen aus fester Maske, Menügruppen parallel statt nach dem Panel.
- Typecheck, 36/36 Tests und Build (73 Seiten) laufen durch.

**Offen:** Sichtprüfung auf einem echten iPhone (Safari) und einem durchschnittlichen Android-Gerät. Playwright-WebKit ersetzt kein echtes Gerät.
