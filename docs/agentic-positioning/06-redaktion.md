# Redaktionelle Überarbeitung

Stand 13.11.2026, Branch `feat/agentic-positioning` (PR #21). Nicht veröffentlicht.
Grundlage ist der Redaktionsleitfaden `docs/copywriting-optimization/03-editorial-guidelines.md`, der verbindlich bleibt. Geändert wurde nur, wo ein klarer Qualitätsgewinn entsteht. Positionierung, Struktur, Fachaussagen, Zahlen, URLs, Titel-Keywords und Kundenzitate sind unverändert.

## 1. Befund (Audit)
Die Texte waren nach dem Redaktionsdurchgang vom 6.11. bereits sachlich. Der Musterscan über alle Daten-, View- und Komponenten-Dateien und die Lektüre im Seitenkontext zeigten diese Schwächen:

| Problem | Beispiele | Wo |
|---|---|---|
| Gleiche Sätze auf vielen Seiten | «In 30 Minuten schauen wir …» als Abschluss auf allen 14 Leistungsseiten, «Erstgespräch vereinbaren (30 Min., kostenlos)», «statt Klicks und Reichweite» dreimal, «Strategie und Umsetzung aus einer Hand» auf Startseite und Über uns | Leistungsseiten, Startseite, Über uns, Ansatz |
| Floskeln in eigenen Kurztexten | «Ganzheitliche Leadgenerierung», «nahtlos vereint», «massgeschneiderte Prozess- und ERP-Lösungen», «Datengetriebene Shop-Skalierung» | Kurzzeilen über den Kundenzitaten |
| Fragen-Dreiergruppen und Stakkato als Stilmittel | «Was gibt es bereits? Was wird gefunden? Was fehlt?», «Kein Verkaufsdruck, keine Verpflichtung.» | Leistungsseiten, CTA-Blöcke |
| Künstliche Gegenüberstellungen | «Gute Inhalte allein reichen nicht. Es braucht …», «scheitern nicht beim Bauen, sondern im Betrieb», «Die Frage ist nicht …, sondern …» | Leistungsseiten, Ansatz, Ratgeber |
| Doppelpunkt-Konstruktionen | «Grundsatz 1: Erst verstehen, dann handeln», «Ob Kampagnen, CRM oder ein KI-Agent: …», «Ob es um Wachstum … geht: Schildern Sie …» | Über uns, Ansatz, Kontakt |
| Generische Headlines und CTAs | «Kommt Ihnen das bekannt vor?», «Lassen Sie uns über Ihre Ziele sprechen.», «Potenzial besprechen» als Standard | Bereichsseiten, Lead-Block, Buttons |
| «Potenzial» in fast jedem Ergebnistext | Rechner und Checks | Skill-Factory, Branchenrechner |
| Selbstlob statt Belege | «Marketer mit sehr tiefem technischem Können» | Über uns |
| Dreiergruppen-Rhythmus in eigenen Texten | «Mehr passende Anfragen · Schneller vom Erstkontakt zum Auftrag · Weniger Handarbeit», Meta Description der Startseite | Startseite |

Ohne Befund blieben unter anderem: Rechtschreibung (kein «ß»), Sie-Form, Superlative, Dramatisierungen wie «verlieren den Anschluss» und erfundene Ergebnisse.

## 2. Überarbeitung (Auswahl)
Die vollständige Änderung steht im Diff des Commits.

**Startseite**
- **Ergebniszeilen im Hero:** Aus «Mehr passende Anfragen · Schneller vom Erstkontakt zum Auftrag · Weniger Handarbeit …» wurde «Anfragen, die zu Ihrem Angebot passen · Kürzere Wege vom Erstkontakt zur Offerte · Weniger Abtippen und Nachfassen von Hand».
- **Unterscheidung:** Aus «Strategie und Umsetzung aus einer Hand / Kein Konzept, das in der Schublade landet …» wurde «Wer plant, setzt auch um / Die Person, die mit Ihnen die Prioritäten festlegt, baut danach auch Kampagnen, CRM und Automatisierungen.»
- **Meta Description:** ohne Doppelpunkt und Dreiergruppe.

**Über uns**
- Aus «Ich bin Marketer mit sehr tiefem technischem Können.» wurde «Ich bin Marketer und baue die Technik dahinter selbst.», danach folgt der Werdegang in normalen Sätzen.
- «Grundsatz 1: Erst verstehen, dann handeln» heisst jetzt «Zuerst das Geschäft verstehen, dann Werkzeuge wählen».
- Die doppelte Formulierung «aus einer Hand» ist ersetzt durch eine konkrete Aussage (bei einer Person, ohne Übergaben).

**Bereichsseiten, Ansatz, Kontakt**
- «Kommt Ihnen das bekannt vor?» heisst jetzt «Typische Ausgangslagen».
- «Die besten Ergebnisse entstehen, wenn …» wurde zu «Am meisten bringt es, wenn man sie zusammen betrachtet und den grössten Engpass zuerst angeht.»
- Die Doppelpunkt-Einstiege «Ob …:» auf Ansatz und Kontakt sind zu normalen Sätzen umgestellt.
- Das Grundprinzip «Gemessen an Geschäftszahlen» sagt jetzt, dass die Kennzahlen zu Beginn vereinbart werden, statt den Satz von der Startseite zu wiederholen.

**Bausteine**
- Der Standardtitel des Lead-Blocks heisst jetzt «Sprechen wir über Ihre Ausgangslage.», der Standard-Button «Erstgespräch vereinbaren».
- Kundenstimmen: Die Kurzzeilen sind sachlich («Website und eigenes ERP-System» statt «Webauftritt & massgeschneiderte Prozess- und ERP-Lösungen»). Die Überschrift heisst «Stimmen aus der Zusammenarbeit», sie kollidiert so nicht mehr mit der H1 der Referenzseite. Die Zitate sind unverändert.

**Wissen (bewusst behutsam, rund 20 Sätze)**
- Rhetorische «nicht …, sondern»-Konstruktionen, wo der Kontrast nichts erklärt
- Stakkato wie «Drei Ansätze, drei Fragen, drei Arten von Daten.»
- unklare Sätze («Solange nur eines ein Feld beschreibt» wurde zu «Solange nur ein System ein Feld schreibt»)
- zwei zu weitgehende Autonomie-Formulierungen

Fakten, Quellen, Preise, Daten und die Ich-Perspektive im Labor sind unverändert.

**Leistungsseiten (14 Seiten, rund 90 Stellen)**
- **Fragen-Ketten als Stilmittel:** rund 30 sind zu normalen Sätzen umgestellt. Aus «Was gibt es bereits? Was wird gefunden, was bringt Anfragen, was fehlt?» wurde «Wir prüfen, welche Inhalte es bereits gibt, welche gefunden werden und welche Anfragen bringen.»
- **Abschlusszeile:** Sie beginnt nicht mehr überall mit «In 30 Minuten …», sondern nennt das Thema der Seite. Beispiel KI-Agenten: «Bringen Sie einen Ablauf mit, der heute viel Handarbeit kostet. Wir prüfen gemeinsam, was ein Agent davon übernehmen kann und wo weiterhin ein Mensch entscheidet.» Fünf Seiten nennen weiterhin «30 Minuten, kostenlos».
- **Fachbegriffe:** «Lead-Scoring» und «Attribution» werden verwendet und kurz erklärt, Server-Side Tagging steht dort, wo es zutrifft. Agenten übernehmen «die Schritte dazwischen, mit klar begrenzten Rechten» und nicht mehr «den ganzen Ablauf».
- **Widersprüche:** Ein Widerspruch auf der D2C-Seite und doppelte Schlussabsätze auf der Strategieseite sind bereinigt.

**Branchen- und Landingpages**
- **Einstieg der Branchenseiten:** 11 von 14 begannen mit «Wir helfen …». Jetzt beginnt jede anders und mit branchenspezifischen Details. Treuhand: Umsatz, Mitarbeiterzahl und Buchhaltungssoftware vor dem Erstgespräch. Ingenieurbüros: Bauingenieure, Zeichnerinnen und Projektleiter als Zielgruppe für Stellen.
- **Allgemeine Formel ersetzt:** «Werbevorschriften Ihrer Branche berücksichtigen» (4×) ist durch die konkrete Regel ersetzt, etwa «Anzeigentexte ohne Rendite- oder Garantieversprechen».
- **Pauschale Aussage abgeschwächt:** «suchen zunehmend online» heisst jetzt «Viele Einkäufer … informieren sich online, lange bevor sie eine Offerte anfragen».
- **Abschluss-Titel:** «Mehr passende Anfragen für Hospitality?» ist durch einen Titel ersetzt, der für jede Branche passt.
- **Fehler korrigiert:** Die Branchengrafik nannte «per Formular oder Telefon» als Anfrageweg. Die Website bietet bewusst keine Telefonnummer an, deshalb steht jetzt «per Formular oder E-Mail».
- **Bewusst belassen:** Die H1 der Kampagnen-Landingpage Erstvermietung («Planbar statt abwarten.») bleibt. Eine Änderung hätte die Headline verlängert und die Aussage einer Seite verändert, auf die Werbung läuft.

**Rechner und Formulare**
- **Ergebnis-Badges:** «Grosses Potenzial» und «Potenzial vorhanden» in 13 Rechnern sind durch konkrete Zustände ersetzt, etwa «Umsatz bleibt liegen», «Auslastung ausbaufähig» oder «Interessenten gehen verloren». Aus «Mögliches Umsatzpotenzial» wurde «Umsatz, der heute fehlt».
- **Füllwörter:** «gezielt», «konsequent» und «spürbar» sind rund 45-mal gestrichen oder ersetzt.
- **Schätzungen:** Sie sind klar als Schätzungen formuliert.

## 3. Final Review
- **Gerenderter Text:** Gelesen habe ich Startseite, Lead-Generierung, Treuhand und weitere Seiten. Dabei sind zwei übriggebliebene Doppelpunkt-Konstruktionen und der Telefon-Fehler aufgefallen und korrigiert.
- **Musterscan nachher:** «gezielt» ist von 32 auf 4 Treffer gesunken, «Potenzial» von 71 auf 23 (Rest meist in Rechnernamen und Code-Bezeichnern), «aus einer Hand» von 10 auf 1, «ganzheitlich», «nahtlos» und «spürbar» auf 0. Die übrigen «nicht nur …»-Stellen tragen eine echte Information.
- **Unverändert:** Kundenzitate, Slugs, Links, Formularwerte, `seoTitle`, Leistungstitel (Title-Tags) und strukturierte Daten.
- **Layout:** Der Audit über 26 Seiten × 9 Breiten zeigt keinen Überlauf und keine Konsolenfehler. Es gibt keine Höhenänderung über 150 px.
- **Technik:** Typecheck, 36/36 Tests und Build laufen durch.

## 4. Offene Entscheide
- **Titel der Formularstrecken** (`leadFlows.ts`, zum Beispiel «Potenzial besprechen»): Sie gehen als Formularname an GA4 (`form_name`) und ins CRM. Sie sind bewusst unverändert, damit Tracking und Auswertungen durchgängig bleiben. Der Branchen-Button «Potenzial besprechen» bleibt deshalb ebenfalls, passend zum Titel des Overlays. Eine Umbenennung sollte zusammen mit GTM und Cockpit geplant werden.
- **Neue Beispieldetails zum Prüfen:** Kriterien für Lead-Scoring («etwa Branche, Firmengrösse oder Verhalten») und Beispiel-Kennzahlen («Anfragen pro Monat, Kosten pro Neukunde»). Sie sind als Beispiele formuliert, nicht als Leistungsversprechen.
