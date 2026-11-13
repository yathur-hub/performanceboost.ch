# Mobile-Optimierung

Stand 13.11.2026, Branch `feat/agentic-positioning` (PR #21). Nicht veröffentlicht.
Arbeitsprinzip: minimal-invasiv. Die Änderungen greifen nur bei kleinen Viewports oder Touch-Zeigern (`pointer: coarse`), Desktop mit Maus bleibt pixelgleich.

## 1. Baseline und identifizierte Probleme
Automatisierter Audit über 26 Seiten × 9 Breiten (320, 360, 375, 390, 402, 430, 768, 1024, 1440 px). Gemessen wurden Überlauf mit Verursacher, Touch-Ziele, Eingabefelder, Schriftgrössen, Hero-Höhe und Konsolenfehler. Dazu kamen Full-Page-Screenshots von 8 Seiten bei 320, 390, 768 und 1440 px und interaktive Zustände (Menü, Diagramm, Formular) bei 320 und 390 px.

| Prio | Problem | Wo |
|---|---|---|
| 1 | Menü-Button ragt über den rechten Rand (Logo, CTA-Lücke und Mindestbreite passen nicht in 288 px) | Header bei 320 px, alle Seiten |
| 1 | Knotentitel abgeschnitten («Offerte & Buchhaltu…»), unschöne Umbrüche («Website / & / Formulare») | Systemgrafik «hub» auf Processes bei 320 px |
| 1 | E-Mail-Adresse ragt aus der Karte | /kontakt bei 320 px |
| 2 | Menülinks 33 px hoch, «Alles zu …» 21 px, Schliessen-Button angeschnitten | Mega-Menü mobil |
| 3 | Rakete fehlt auf Mobile und Tablet, Hero bei 1024 px sehr hoch (H1 vierzeilig, CTAs unter dem Falz) | Startseite |
| 4 | FAQ-Zeilen nur 20–40 px antippbar (Abstand lag auf `details`, nicht auf `summary`) | alle FAQ |
| 4 | Footer-Links 16–20 px, Seitenpfad-Links 16 px, Textlinks («Mehr zum Ansatz →») 16 px, Slider-Punkte 8 px, Modal-Schliessen 36 px | sitewide |
| 5 | 35 Formularfelder unter 16 px: iOS zoomt beim Antippen hinein | Finanz-Landingpages, Rechner, Formular-Overlay |
| 5 | Mikro-Labels mit 10 px | Badges, Diagramm-Schiene |
| 6 | «Lieber per E-Mail?» bricht im Formular-Overlay dreizeilig um | Overlay mobil |

Ohne Befund: kein Dokument-Überlauf ausser durch den Header, keine Konsolenfehler, Diagramm-Knoten mobil 68–86 px hoch, Visuals ohne Verzerrung.

## 2. Anpassungen
- **Header:** Unter 380 px sind die Seitenabstände kleiner (16 px, Safe Area links und rechts berücksichtigt) und das Logo 60 statt 72 px hoch. Die Mindestbreite des Menü-Buttons gilt erst ab 640 px. Ab 380 px ist alles wie vorher.
- **Mega-Menü (nur unter 768 px):**
  - Alle Links sind mindestens 44 px hoch.
  - «Alles zu …» und der E-Mail-Link sind 44 px hoch.
  - Der untere Abstand berücksichtigt `env(safe-area-inset-bottom)`.
  - Desktop-Darstellung und Navigation sind unverändert. Es gibt weiterhin keine Links im Header.
- **Hero:**
  - Die Rakete ist auf Mobile und Tablet sichtbar: kompakt unter den CTAs, 132–190 px breit, mit derselben Einflug-Animation.
  - Der obere Abstand ist auf Mobile 112 statt 144 px.
  - Bei 1024–1279 px nimmt der Text 8 statt 7 Spalten ein, die H1 ist 44 statt 50 px gross und die Rakete 280 px breit. Die Hero-Höhe sinkt von 1128 auf 1008 px, die H1 von vier auf drei Zeilen.
  - Ab 1280 px ist alles unverändert.
- **Systemgrafik «hub» (mobil):** Die Satelliten zeigen das Icon über dem Titel, Titel umbrechen mit Silbentrennung statt abgeschnitten zu werden.
- **Kontakt:** Die E-Mail bricht vor dem «@» um und läuft nicht mehr aus der Karte.
- **Touch-Ziele (nur `pointer: coarse`):** mindestens 44 px Höhe für:
  - Textlinks, Chips und Buttons im Inhalt
  - Seitenpfad und Footer-Links (deren zusätzlicher Listenabstand fällt dafür weg)
  - FAQ-Zeilen (der Abstand liegt jetzt im `summary`, auf Desktop optisch gleich)

  Die Slider-Punkte haben eine unsichtbare Trefferfläche von 44 px Höhe und mehr Abstand auf Touch. Das Modal-Schliessen ist auf Mobile 44 px gross.
- **Formulare:** Eingabefelder auf Mobile und Touch mit 16 px, das verhindert den iOS-Zoom. Die Zeile «Lieber per E-Mail?» im Overlay bricht sauber um, der Overlay-Kopf berücksichtigt die Safe Area oben.
- **Typografie:** Mikro-Labels unter 640 px mit 11 statt 10 px.
- **Motion:** Das System bleibt vollständig aktiv. Distanzen und Staffel sind auf Mobile schon reduziert (16/12/18 px, 60 ms). Neu: Der Bild-Zoom per Hover ist auf Touch ausgeschaltet, damit nach dem Antippen kein Zustand «hängen» bleibt.
- **Performance:** Kein Prefetch aller Seiten bei Datensparmodus oder 2G. Die mobile Rakete nutzt `sizes` mit 150–190 px, geladen wird also die kleine Datei.

## 3. Getestete Viewports und Browser
- **Chrome (Playwright, Emulation mit Touch und DPR 2):** 26 Seiten × 9 Breiten (320–1440 px), dazu ein kontinuierlicher Sweep von 300 bis 1100 px in 10-px-Schritten auf 6 Seiten.
- **Interaktiv bei 320 und 390 px:** Menü öffnen, aufklappen und bis ans Ende scrollen, Diagramm-Knoten antippen, Formular-Overlay öffnen. Dazu Tablet-Hero bei 820 und 1024 px.
- **Safari/iOS:** Für diesen Durchgang nicht auf einem echten Gerät und nicht in Safari getestet. In der Motion-Phase lief Playwright-WebKit (Safari-Engine) auf vier Seiten ohne Fehler. Die mobilen Anpassungen hier sind nur in Chromium-Emulation geprüft.

## 4. Ergebnisse und Regressionen
| Messung | Baseline | Nachher |
|---|---|---|
| Elemente ausserhalb des Viewports | 26 (Header bei 320 px) | 0 |
| Überlauf im Sweep 300–1100 px | Header bei 300–330 px | keiner |
| Touch-Ziele unter 44 px (≤ 430 px, alle Seiten) | 1956 | 421 (überwiegend kurze Footer-Wörter, 44 px hoch, aber schmaler als 44 px) |
| Eingabefelder unter 16 px | 35 | 0 |
| Text unter 11 px (≤ 430 px) | 84 | 0 |
| Konsolenfehler | 0 | 0 |

**Desktop-Regression:**
- Seitenhöhen bei 1440 px auf allen 26 Seiten unverändert.
- Pixelvergleich der 8 Referenzseiten bei 1440 px: 7 identisch. Bei /ansatz unterschieden sich nur zwei Bildflächen, weil der Full-Page-Screenshot die Lazy-Bilder nicht gemalt hatte. Im Viewport werden beide korrekt dargestellt, das Layout ist identisch.
- Gewollte Änderung: Startseiten-Hero bei 1024–1279 px (siehe oben).

**Tests:** Typecheck, 36/36 Tests und Produktions-Build (73 Seiten) laufen durch.

## Mobile Performance (echte Cloudflare-Vorschau)
Messung mit 390 × 844 px und DPR 3, Netz gedrosselt (1.6 Mbit/s, 150 ms Latenz), CPU 4-fach verlangsamt. Gemessen wurde nach Laden, Menü öffnen und schliessen und Scrollen.

| Seite | LCP | CLS | blockierende Zeit | längste Interaktion |
|---|---|---|---|---|
| / | 2.64 s (vorher 2.77 s) | 0.002 | ≈ 46 ms | 56 ms |
| /leistungen/sales | 2.17 s | 0.000 | ≈ 45 ms | 56 ms |
| /ansatz | 1.77 s | 0.007 | ≈ 46 ms | 56 ms |

Die Hero-Staffel ist auf Mobile verkürzt: Subheadline ab 160 statt 300 ms, kürzere Dauern. Danach den Rest des LCP bestimmt das Laden der Google Fonts.

## 5. Einschränkungen und offene Punkte
- Echte Geräte (iPhone mit Safari, Android mit Chrome) sind nicht getestet. Emulation bildet die Bildschirmtastatur, Safe Areas mit Notch und das Scrollverhalten von iOS nur näherungsweise ab.
- Footer-Links mit kurzen Wörtern («Labor», «Sales») sind 44 px hoch, aber schmaler als 44 px. Sie erfüllen WCAG 2.5.8 (24 px), nicht die strengere 44-px-Empfehlung in der Breite.
- Der Startseiten-Hero ist auf Mobile durch die Rakete höher (320 px: 1172 statt 996 px). Der primäre CTA bleibt bei 390 × 844 px im ersten Bildschirm.
- LCP der Startseite liegt bei gedrosseltem Netz knapp über 2.5 s. Grösster Hebel wäre das Selbst-Hosten und Vorladen der Schriften (Inter, Plus Jakarta Sans). Das ist eine Infrastruktur-Entscheidung und hier nicht umgesetzt.
- Bei 768 px bleibt der Hero zentriert und einspaltig. Ein zweispaltiges Tablet-Layout wäre eine Designentscheidung, keine Fehlerbehebung.
