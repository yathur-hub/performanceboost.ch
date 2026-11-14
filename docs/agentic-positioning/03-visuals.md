# Eigene Visuals auf der Website

Stand 13.11.2026, Branch `feat/agentic-positioning`. Nicht veröffentlicht.

## Bestand und Eignung
**Quelle:** `~/Documents/performanceboost/Personal Brand/Web-Bilder/`, 140 WebP-Dateien. Alle wurden für die Personal-Brand-Serien von performanceboost selbst produziert (laut Projektdateien mit gpt-image-2.6-flare, Herkunft je Bild in `Bildverzeichnis.csv`).

Die Originale wurden nur gelesen und nicht verändert, verschoben oder gelöscht.

| Serie | Anzahl | Format | Bildsprache | Eignung für die Website |
|---|---|---|---|---|
| Critical-Thinking (ct-001 bis ct-050) | 50 | 1080×1350 | Szenische 3D-Illustrationen in CI-Lila und Grau, fast ohne Text | Gut: passt zur bestehenden 3D-Bildsprache (Visual3D, Rakete) und wirkt nicht wie Stock oder KI-Agentur. Viele Motive sind aber an ein Denkthema gebunden (Anker, Bias, Teufelsadvokat) und hätten auf einer Angebotsseite eine falsche Lesart. |
| KI-und-Wirkung (post-01 bis post-30) | 30 | 1080×1350 | Infografiken: Matrizen, Entscheidungsbäume, Checklisten, oft mit Studienzahlen | Gut, wenn die Grafik ein Prinzip zeigt, das die Website ohnehin vertritt. Ungeeignet, wenn sie eine einzelne Studienzahl trägt. |
| Agentic-Marketing (am-01 bis am-30) | 30 | 1080×1350 | Infografiken zu Studien und Agenten im Marketing | Meist post-spezifisch (Prozentwerte, «Sandbox», «Modellrechnung»). Nur das Prinzipbild am-29 eignet sich. |
| LeadGen (lg-01 bis lg-30) | 30 | 1080×1080 und 1080×1350 | Infografiken und Zitattafeln zu Leads und Messung | Zwei Prinzipbilder eignen sich (lg-15, lg-22). Viele sind Pointen oder Rechenbeispiele für den Feed. |

Alle Dateien haben LinkedIn-Formate (1:1 und 4:5). Sie funktionieren deshalb nur als Bild **neben** einem Text, nicht als breite Bühne oder als Hintergrund. Eingebettete Texte bleiben ab rund 340 px Breite lesbar, also auch auf dem Handy.

## Eingesetzte Visuals (9)
Die optimierten Kopien liegen in `public/images/visuals/<id>-480.webp` und `-800.webp`. Daten und Alt-Texte stehen in `src/data/visuals.ts`, die Komponente in `src/components/BrandVisual.tsx`.

| Website-Ort | Visual (Kopie) | Original | Warum |
|---|---|---|---|
| Startseite, «Wo KMU heute Umsatz und Zeit verlieren» (ab Desktop) | `ursachen-unter-der-oberflaeche` | ct-032 | Das Symptom an der Oberfläche, darunter die vernetzten Ursachen (Zahnrad, Dokument, Uhr). Das stützt die Engpass-Logik. Dazu ein neuer Absatz zu Symptom und Ursache. |
| /ansatz, Hero (ab Desktop) | `route-zum-ziel` | ct-011 | Menschen wählen am Modell einen Weg zum Ziel, das entspricht Architecture & Setup. Ersetzt das allgemeine 3D-Objekt «steps», weil es Zielbild und Weg konkret zeigt. |
| /ansatz, neue Sektion «Damit es nach dem Start hält» | `kosten-nach-dem-go-live` | post-04 | Macht Hypercare greifbar: Überwachung, Zugänge, Änderungen, Kontrolle, Übergabe. |
| /ansatz, gleiche Sektion | `vier-namen-vor-dem-start` | post-29 | Macht Enablement und Governance greifbar: «Kein Name, kein Go-live». |
| Marketing, neue Einordnung nach den Zielen | `messluecke-performance-marketing` (auf den Inhalt zugeschnitten, 1080×780) | lg-15 | Zeigt die Kernaussage «gemessen bis zum Auftrag»: Anzeige und Klick sind gemessen, der Kauf bleibt offen. |
| Sales, «Wo Agenten im Vertrieb mitarbeiten» | `reihenfolge-erst-dann-ki` | lg-22 | Kriterien, Regel, Durchsicht, erst dann KI. Belegt, dass Agentic AI kein Selbstzweck ist. |
| Processes, neue Einordnung | `was-zuerst-automatisieren` | post-06 | Die Matrix Häufigkeit × Fehlerkosten beantwortet die häufigste Frage «Wo fangen wir an?». |
| Processes, «Regel, KI oder Agent» | `agent-oder-workflow` | post-19 | Entscheidungsbaum Workflow oder Agent, die fachliche Begründung des Abschnitts. |
| Agentic AI, «Von der Regel bis zum Agenten» | `autonomie-als-treppe` | am-29 | Autonomie als Treppe (lesen, vorschlagen, mit Freigabe schreiben, im Limit handeln). Ergänzt die vier Stufen um die Frage, was die nächste Stufe rechtfertigt. |

**Bewusst nicht ersetzt:** die Rakete im Hero, das Systemdiagramm, die 3D-Objekte in den Hub-Heros und die Kundenporträts.

## Darstellung und Performance
- Zwei Grössen pro Bild (480 und 800 px), WebP mit Qualität 82, insgesamt 456 KB für alle 18 Dateien. Ein Bild lädt je nach Breite 8 bis 50 KB.
- `srcset`/`sizes`, feste `width`/`height` (kein Layoutsprung), `loading="lazy"` und `decoding="async"`. Bilder, die nur ab Desktop sichtbar sind, werden auf Mobile nicht geladen (geprüft).
- Rahmen und Radius wie die bestehenden Karten (`rounded-3xl`, Rand #E0E0E0), Schatten aus dem Designsystem.
- Alt-Texte geben bei Infografiken den vollständigen Inhalt wieder, bei Szenen die Aussage des Bildes.
- Bildunterschriften nur dort, wo sie die Grafik einordnen (Ansatz). Sonst übernimmt der Sektionstext die Einordnung.
- Ein Test prüft, dass alle Dateien und Alt-Texte vorhanden sind und die Bereiche nur auf existierende Visuals verweisen.

## Sichtprüfung
- Desktop 1440 und Mobile 390 auf Startseite, Marketing, Sales, Processes, Agentic AI und /ansatz: alle Bilder geladen, kein horizontales Scrollen, keine Konsolenfehler. Texte in den Grafiken sind auf Mobile lesbar.
- Gesamtwirkung: Jede Bereichsseite hat jetzt ein eigenes, inhaltlich tragendes Bild. Die Startseite erhält ein ruhiges Bild, mehr nicht, damit Rakete und Systemdiagramm die Hauptbilder bleiben.

## Bewusst nicht verwendet
| Visual(s) | Grund |
|---|---|
| am-01 bis am-28, am-30 | Tragen einzelne Studien- oder Modellzahlen (zum Beispiel 39 %, «#3», +90 %, CHF 7'750). Ohne den Beitrag fehlt der Kontext, und der Redaktionsleitfaden verlangt Zahlen nur mit Beleg. Einige sind zudem sehr tool-spezifisch (am-08 «Container bearbeiten», am-20 API-Zugriff). |
| post-01, -03, -05, -07, -09, -14, -17, -18, -20 bis -23, -25, -26, -30 | Studienzahlen oder Modellrechnungen mit Franken- und Prozentwerten, nur im Beitrag erklärbar. |
| post-02, -08, -10, -11, -12, -13, -15, -16, -24, -27, -28 | Inhaltlich passend, aber schwächer als die gewählten Bilder oder doppelt zu ihnen (zum Beispiel post-24 «Hier lohnt sich Automatisierung selten» neben post-06). Kandidaten für Ratgeber-Artikel und MarTech-Themen. |
| lg-01 bis lg-14, lg-16 bis lg-21, lg-23 bis lg-30 | Pointen und Rechenbeispiele für den Feed («Gratis kostet eine E-Mail-Adresse», «+3'500 % von wie viel?»), Zitattafeln ohne Bild oder Modellzahlen. Auf einer Angebotsseite wirken sie wie Werbesprüche. lg-29 (Rückwärts gerechnet) ist ein Kandidat für den Ratgeber. |
| ct-001 bis ct-050 ausser ct-011 und ct-032 | Die Motive sind an ein Denkthema gebunden (Marionetten, Mob, Spiegel, Teufelsadvokat, Darts) und würden auf einer Angebotsseite falsch gelesen. Einige zeigen Preisschilder («−10 %», «−30 % Kosten», «+100 %»), die wie Versprechen wirken. Gute Reserve für Blog und Labor: ct-025 (Dokumente durch eine Maschine), ct-029 (Zahnrad unter der Plattform), ct-034 (Brückenmodell mit digitaler Ebene). |

## Offene Empfehlung
- Für Ratgeber und MarTech-Fachthemen eignen sich weitere Infografiken aus KI-und-Wirkung, jeweils zusammen mit dem Text, der die Zahl belegt.
- Für ein späteres Hero-Motiv auf /leistungen sollte ein eigenes Querformat produziert werden. Die vorhandenen Hochformate passen dafür nicht.
