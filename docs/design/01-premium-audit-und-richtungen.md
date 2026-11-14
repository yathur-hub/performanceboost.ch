# Premium-Design: Referenzanalyse, Audit und zwei Richtungen

Stand 14.11.2026. Branch `design/premium-directions` (abgeleitet von `feat/agentic-positioning`, PR #21). Nicht veröffentlicht.
Prototypen im Browser: `/design/light` (Richtung A) und `/design/dark` (Richtung B), nicht indexiert und nicht in der Sitemap. Ein Umschalter unten in der Mitte wechselt zwischen den Richtungen.

Hinweis zur Positionierung: Im Auftrag steht «Business Performance Partner». Seit dem 14.11.2026 gilt «AI-First-Scaling-Partner». Die Prototypen verwenden den aktuellen Stand, die Texte sind sonst unverändert.

## 1. Referenzanalyse linear.app
Methode: Chrome (Playwright) bei 1440 × 900 und 390 × 844 (iPhone-Agent). Vom Laden gibt es 10 Einzelbilder (0–2,4 s), vom Scrollen 19 (Desktop) und 12 (Mobile). Dazu kamen eine Auswertung der laufenden Animationen (`document.getAnimations()`), der CSS-Regeln und der berechneten Stile.

### Verifiziert (gemessen oder auf den Einzelbildern sichtbar)
| Beobachtung | Befund |
|---|---|
| Fläche | Hintergrund `#08090A`, Text `#F7F8F8`. Sekundärtext `#8A8F98`, tertiär `#62666D`. Flächen nur leicht abgestuft (`#0F1011`, `#161718`, Weiss mit 1–8 % Deckkraft). Ein einziger heller Farbblock, die Kundenzitate in Lavendel und Gelbgrün |
| Schrift | Eine Familie («Inter Variable») für alles, dazu eine Monospace-Schrift («Berkeley Mono») für Labels. H1 64 px (Mobile 38 px), H2 48 px, alle Überschriften in Gewicht 510 und Laufweite −0,022 em. Fliesstext 14–15 px in Grau |
| Statement-Headlines | Zweifarbig: erster Satz hell, Rest grau (H2 in `#8A8F98` mit hellem Anfang) |
| Laden | Header sofort da. Headline wird nach rund 0,5 s von unscharf zu scharf eingeblendet, danach die Unterzeile. Das Produkt-Interface taucht in rund 1–2 s aus dem Dunkeln auf, zuletzt ein Badge («New»). Eine zusammenhängende Sequenz, keine gleichzeitigen Fade-ins |
| Produkt-Visuals | Echte Benutzeroberflächen in dunklen Fenstern statt Illustrationen. Feine Strichzeichnungen (isometrisch) mit Nummern im Stil «FIG 0.1» |
| Lebendige Details | Animierte Punktraster (SVG, 2,8 s linear, endlos), Keyframes für Shimmer-Sweep, Cursor-Blinken, Agent-Rahmen-Sweep, Puls im Hero |
| Seitenaufbau | Titel links und Text rechts in zwei Spalten, darunter ein grosses Visual. Sektionen rund 1220 px hoch, Logo-Leiste, Changelog als Zeitstrahl, zentrierter Schluss-CTA |
| Interaktionen | Buttons 160 ms für Rahmen, Hintergrund und Farbe, Easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Nav-Links 100 ms. Menüs und Overlays 180 ms. Pillenform, Höhe 32 und 44 px |
| Easing-Kurven | u. a. `cubic-bezier(0.32, 0.72, 0, 1)`, `(0.16, 1, 0.3, 1)`, `(0.66, 0, 0, 1)` |
| Reduzierte Bewegung | `prefers-reduced-motion` wird respektiert (Smooth Scroll, Menüs, View Transitions) |
| Seitenwechsel | View-Transition-Regeln vorhanden, für den Wurzelknoten neutralisiert |
| Mobile | Gleiche Komposition einspaltig, Dokumenthöhe rund 6000 px statt 10'000 px am Desktop |

### Vermutet (nicht eindeutig nachweisbar)
- **Scroll-Reveals:** wahrscheinlich über Klassen beim Eintritt in den Viewport (Klassennamen mit `inView`), also per Intersection Observer. Eine CSS-Regel mit `animation-timeline` existiert, ist aber leer. Echte scrollgebundene CSS-Animationen sind deshalb **nicht belegt**.
- **Implementierung:** Next.js mit CSS-Modulen und Radix-/Vaul-Komponenten, abgeleitet aus Klassen- und Keyframe-Namen.

### Was Linear hochwertig macht (übertragbare Prinzipien)
1. **Eine dominante Fläche, wenige Töne.** Kontrast entsteht über Helligkeit, nicht über Farbe.
2. **Ein Schriftsystem in einem Gewicht** für alle Überschriften, mit enger Laufweite. Die Hierarchie entsteht über Grösse und Farbe.
3. **Das Produkt ist das Visual.** Keine Stock-Grafik, keine Icons in Kreisen.
4. **Eine Choreografie beim Laden** statt mehrerer unabhängiger Effekte.
5. **Kurze Reaktionen** (100–180 ms), längere Bewegung nur bei Auftritten.
6. **Lebendige, aber leise Details** (Punktraster, Sweep), die das System «arbeiten» lassen.
7. **Hairlines statt Karten.** Struktur über 1-px-Linien und Raster.

## 2. Audit der aktuellen Website
| Dimension | Aktueller Zustand | Linear-Referenz | Empfohlene Verbesserung |
|---|---|---|---|
| Art Direction | Hellgrau `#f6f6f6`, viele weisse Karten mit runden Ecken, 3D-Renderings, Rakete, WebP-Infografiken und Icons in farbigen Kacheln gleichzeitig | eine Fläche, ein Visual-Typ (Produkt-UI), Strichgrafik | Ein Visual-Typ für die Marke: die «System-Konsole» (Abläufe mit Regel, KI, Agent, Freigabe). 3D-Renderings und Infografiken nur noch gezielt |
| Hero | Claim, Text, zwei Buttons, Rakete rechts. Gleichzeitige Einblendung | Headline unscharf → scharf, dann Text, dann Produkt | Claim über die volle Breite, darunter Text und Konsole. Eine Sequenz von rund 1,8 s |
| Typografie | Plus Jakarta Sans 600, Inter, Serif-Kursiv im Claim. Viele Grössen und Gewichte (Badges in 10 px fett, Mono-Labels, Display-H3) | eine Familie, ein Gewicht, enge Laufweite | Display-Schrift in einem Gewicht mit −0,03 em. Serif-Kursiv bleibt als Markenakzent, nur im Claim. Mono nur für Labels |
| Scroll Experience | Jede Sektion mit derselben Masken-, Fade- oder Scale-Einblendung (`useScrollReveal`) | Auftritte an den Inhalt gebunden, Produkt-UI wird lebendig | Unterschiedliche Übergänge je Inhalt: Statement mit Wort-Aufhellung, Vergleich mit fortschreitenden Zeilen, Konsole mit eigener Sequenz |
| Motion Design | Tokens vorhanden, aber überall gleich angewendet, dazu Float-Animationen (Rakete, 3D) | wenige, präzise Bewegungen | Neue Tokens (Abschnitt 4), Float und Dauer-Animationen entfernen ausser beim Live-Indikator |
| Section Transitions | Hintergrundwechsel weiss / grau / dunkel ohne Übergang | Helligkeitsstufen, Hairlines | Hairline-Trenner. In Richtung B ein weicher Übergang von dunkel zu hell |
| Micro-Interactions | Hover-Schatten und -Rahmen auf Karten, Pfeil verschiebt sich | 100–160 ms, Farbe und Hintergrund | Unterstreichung, die von links wächst, Pfeil 3 px, Buttons 160 ms. Kein Scale auf Karten |
| Visual Depth | Weiche Schatten auf vielen Karten | Tiefe über Flächenstufen und ein dunkles Produktfenster | Ein Element mit echter Tiefe pro Sektion (Konsole), sonst flach mit Hairlines |
| Mobile UX | Desktop-Layout verkleinert, viele Karten untereinander, Vergleich +1600 px | gleiche Komposition einspaltig | Konsole auf Mobile ohne Unterzeilen, Vergleich als Zeilen mit Hairlines statt Karten |

### Ursachen des Template-Eindrucks
1. **Zu viele Visual-Typen gleichzeitig:** 3D-Renderings, Rakete, Infografiken, Lucide-Icons in Kacheln.
2. **Das Card-Raster als Universallösung:** «drei Karten» auf fast jeder Sektion.
3. **Eine einzige Reveal-Mechanik** für alle Inhalte, dazu endlose Float-Animationen.
4. **Viele kleine Badges und Labels** in Grossbuchstaben, die um Aufmerksamkeit konkurrieren.
5. **Hellgrauer Grund mit weissen Karten und Schatten:** die typische Elementor-Optik.
6. **Kein «Produkt»:** Die Website zeigt nicht, was performanceboost tatsächlich baut.

## 3. Zwei Richtungen
Beide teilen dieselbe Komposition, damit nur die Fläche verglichen wird:
- **Hero:** Claim über die volle Breite, darunter Text, CTA und Konsole.
- **Statement:** Die Wörter hellen beim Scrollen auf.
- **Vergleich:** fixierte Überschrift links, rechts Zeilen, die beim Erreichen der Bildmitte aktiv werden. Die AI-First-Spalte wird hell, eine Linie zeichnet sich.

**Die Konsole** zeigt einen Beispielablauf einer Website-Anfrage: Regel, KI, Agent, Mensch mit Freigabe. Sie ist als «Beispiel» gekennzeichnet und folgt der eigenen Praxis (`research/07`). Damit wird das Produkt sichtbar und die Stufenlogik gleichzeitig erklärt. Sie ersetzt im Prototyp die Rakete. Die Rakete ist ein verbreitetes Start-up-Motiv und erklärt nichts über die Leistung. Als Markenmotiv kann sie im Schluss-CTA bleiben.

### Richtung A: Refined Light
- **Flächen:** Grund `#FBFBFC`, Headline `#16171D`, Text `#4F4F4F`, Labels `#6E6F7A`, Hairlines `#E0E0E0`.
- **Akzent:** `#686CFA` im Claim, Button `#5B5FF0`. Die Konsole ist als einziges dunkles Element (`#14151C`) der Kontrastpunkt.
- **Hintergrund:** feines Punktraster hinter dem Hero, zur Konsole hin sichtbar.
- **Wirkung:** ruhig, klar, nahe an der heutigen CI. Die Konsole trägt die Tiefe.
- **Kontraste:** Headline 17,3:1, Text 7,9:1, Labels 4,8:1, Akzent im Claim 4,0:1 (Grossschrift, AA erfüllt).

### Richtung B: Premium Dark / Hybrid
- **Dunkle Zone:** Hero und Statement auf `#101116`, Konsole auf `#181923`, Hairlines Weiss mit 8 % Deckkraft. Dahinter ein zurückhaltendes Licht in `#686CFA` (22 % Deckkraft).
- **Akzent:** im Claim aufgehellt auf `#9A9DFF` für den Kontrast.
- **Helle Zone:** Der Vergleich wechselt nach einem weichen Übergang auf hell. Der Header schaltet über der hellen Fläche automatisch auf hell.
- **Wirkung:** technologischer, eigenständiger, näher am Qualitätsniveau der Referenz, durch den Wechsel trotzdem nicht «nur dunkel».
- **Kontraste:** Headline 17,2:1, Text 11,5:1, Labels 5,7:1, Akzent 7,8:1.
- **Logo:** Es hat eine helle Fläche und steht auf Dunkel wie ein Etikett. Das funktioniert, eine Logovariante für dunkle Flächen wäre aber sauberer. Eine solche Datei ist im Bestand nicht vorhanden.

### Bewertung
| Kriterium | A Refined Light | B Dark / Hybrid |
|---|---|---|
| Eigenständige Markenwirkung | mittel bis hoch | hoch |
| Abstand zum Template-Eindruck | deutlich | sehr deutlich |
| Lesbarkeit langer Texte (Leistungsseiten, Wissen) | sehr gut | gut, sofern lange Texte auf hellen Flächen stehen |
| Wirkung der bestehenden Visuals (3D, Infografiken) | passt | 3D-Renderings auf dunkel gut, helle Infografiken nur auf hellen Flächen |
| Logo | passt | funktioniert, Variante für dunkel empfohlen |
| Mobile | sehr gut | sehr gut, dunkle Flächen wirken auf OLED hochwertig |
| Wartbarkeit | einfach | mittel (zwei Flächen-Kontexte, Komponenten brauchen beide Zustände) |

**Empfehlung:** Richtung B als Hybrid.
- **Dunkle Flächen** für Startseite, Bereichs-Heros, Systemgrafik und Schluss-CTAs. Diese Momente tragen die Marke.
- **Helle Flächen** für Inhalt mit viel Text: Leistungsdetails, Wissen, FAQ, Formulare.
- **Warum Hybrid:** So entsteht die stärkste eigenständige Wirkung, ohne die Lesbarkeit langer Seiten zu opfern. Volles Dark Mode wird nicht empfohlen.

## 4. Motion-Spezifikation (beide Richtungen)
| Token | Wert | Einsatz |
|---|---|---|
| `--pbx-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | alle Auftritte |
| `--pbx-ease-ui` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Hover, Zustände |
| `--pbx-ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` | Linien, Fortschritt, Häkchen |
| `--pbx-t-ui` | 160 ms | Buttons, Links, Tabs |
| `--pbx-t-reveal` | 900 ms | Textauftritte |
| `--pbx-t-line` | 1100 ms | Linien zeichnen |
| `--pbx-stagger` | 120 ms (Text), 240 ms (Konsolenschritte) | Abfolge |
| `--pbx-rise` | 14 px (Mobile 10 px) | Distanz |
| `--pbx-blur` | 10 px (Mobile 6 px) | Unschärfe beim Auftritt |
| Scroll-Fortschritt | Wort-Aufhellung 0 → 1 zwischen 85 % und 30 % der Bildhöhe. Vergleichszeilen aktiv bei 55 % | rAF und Intersection Observer, nur Farbe, Deckkraft und Transform |
| Reduzierte Bewegung | alle Auftritte und Dauer-Animationen aus, Endzustand sofort sichtbar | `prefers-reduced-motion: reduce` |

**Hero-Sequenz (eine Zeitachse):**
- 80 / 200 / 320 ms: Claimzeilen entmasken von unscharf zu scharf.
- 520 ms: Text. 640 ms: CTAs. 560 ms: Konsole hebt sich (1100 ms).
- 840 ms: Verbindungslinie zeichnet sich.
- 860–1580 ms: vier Schritte im Abstand von 240 ms. Häkchen zeichnen sich 380 ms nach jedem Schritt, der Agentenschritt mit Lichtstreifen. Der Freigabeschritt pulsiert, bis ein Mensch entscheidet.
- **Gesamtdauer:** rund 1,8 s bis zur vollständigen Szene.

**Unterschiede der Richtungen:**
- **A:** Die Konsole ist der einzige dunkle Moment, kein Licht.
- **B:** zusätzlich das Licht hinter der Konsole, der weiche Übergang von dunkel zu hell und der Header-Wechsel über heller Fläche (300 ms).

**Mobile:**
- Kürzere Distanzen und weniger Unschärfe.
- Die Konsole zeigt keine Unterzeilen.
- Der Vergleich steht einspaltig mit Labels.
- Keine fixierte Überschrift.

## 5. Technik
- Keine neuen Abhängigkeiten. CSS-Keyframes, `requestAnimationFrame` und Intersection Observer, gekapselt unter `.pbx` in `src/styles/prototype.css`.
- Nur GPU-freundliche Eigenschaften (Transform, Opacity, Filter), keine Layoutänderungen beim Scrollen.
- Routen `/design/light` und `/design/dark` setzen `noindex` und sind nicht in der Sitemap. Die übrige Website ist unverändert.

## 6. Nächster Schritt
Freigabe der bevorzugten Richtung. Danach folgt Phase 3:
- Designsystem umsetzen (Flächen, Typografie, Motion-Tokens, Komponenten).
- Startseite und Unterseiten umbauen, Systemgrafik neu inszenieren.
- Mega-Menü visuell integrieren, ohne Architektur und Funktion zu ändern.
