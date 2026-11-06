# 01 – Copywriting-Audit performanceboost.ch

Stand: 06.11.2026 · Branch `copy/natural-language`

## Umfang

Geprüft wurden alle deutschsprachigen Texte, die auf der Website tatsächlich angezeigt werden: 37 Dateien in `src/data`, `src/views` und `src/components`, dazu die Meta-Texte in `SEOHead.tsx`. Die Liste stammt aus dem Import-Graphen ab `main.tsx`, nicht aus einer angenommenen Sitemap.

Nicht geprüft wurden 29 Komponenten, die nirgends mehr eingebunden sind (alte Rechner und Checks in `src/components/*Check.tsx`, `*Rechner.tsx` und `hero-tools/`). Sie erscheinen auf keiner Seite.

## Einordnung der Texte

| Kategorie | Behandlung |
|---|---|
| Redaktionelle Texte (Hero, Fliesstexte, Leistungen, Branchen, FAQ, Teaser) | überarbeitet |
| Funktionale UI-Labels (Menü, Buttons, Formularschritte) | nur bei klarer Verbesserung, Länge maximal wie bisher |
| SEO-Metadaten (Titles, Descriptions, JSON-LD-Beschreibung) | Descriptions dort, wo sie künstlich klangen; Titles unverändert |
| Rechtliche Texte (Impressum, Datenschutz, Einwilligungen in `qualifierLead.ts`) | unverändert |
| Kundenzitate und Referenzangaben | unverändert |
| Technische Strings (IDs, Slugs, Payload-Werte, Tracking-Namen) | unverändert |

## Gesamtbefund

Die Website war nach der Repositionierung schon deutlich sachlicher als typischer KI-Content. Messung vor der Überarbeitung, nur auf den angezeigten Texten:

- Sie-Form durchgehend (314 «Sie», 0 «du»), kein «ß», keine falsche Markenschreibweise.
- Kaum Gedankenstriche (1 im Fliesstext).
- Aber viele Füllwörter: «gezielt» 36×, «Potenzial» 31×, «nicht nur … sondern» 17×, «von … über … bis …» 9×.
- Wiederkehrende Muster: dramaturgische Doppelpunkte («Die Folge: …»), Slogan-Ketten aus Satzfragmenten, Substantivstil in Ablaufschritten, unerklärter Jargon (ROAS, Pipeline, Go-to-Market, serverseitiges Tagging, Core Web Vitals).

**Hinweis zur Ansprache:** Das Briefing nennt eine «bestehende Du-Ansprache». Die Website ist aber durchgehend in der Sie-Form geschrieben, und das ist eine Entscheidung des Inhabers. Die bestehende Ansprache, also «Sie», wurde beibehalten.

## Detailbefunde nach Bereich

## Audit A – src/data/servicesExtendedData.ts (12 Leistungsseiten /leistungen/*)

Ausgangslage: Die Texte waren bereits einmal überarbeitet (Sie-Form, ss, «», klein geschriebene Marke korrekt). Was blieb, sind typische KI- und Agenturmuster, vor allem in Problem-Absätzen und Ablauf-Schritten.

### Wiederkehrende Probleme

1. **Dramaturgischer Doppelpunkt «Die Folge: …»** (4×: data-analytics, marketing-automation, revenue-operations, sales-enablement), dazu «Dazu kommt: …», «Monatlich: …», «Oder: …».
   - «Die Folge: Entscheidungen nach Bauchgefühl und Budget, das in die falsche Richtung fliesst.»
2. **Stakkato-Ketten aus Satzfragmenten** (ca. 15×), v. a. in Problem-Absätzen und Ablaufschritten.
   - «Kennzahlen, die niemand versteht. Dashboards, die Klicks zeigen, aber keinen Umsatz.»
   - «Kein Nachfassen, keine weitere Information, kein klarer Ablauf.»
   - «Tracking umsetzen, Datenquellen verbinden, Dashboards bauen. Technisch sauber und für Ihr Team verständlich.»
3. **Substantivstil / Passiv statt «wir»** (ca. 15×), vor allem in «So gehen wir vor».
   - «Analyse der Abläufe, Prüfung der Tools und der Datenqualität.»
   - «Übergaben werden dokumentiert und eingeführt, CRM-Felder angepasst, feste Routinen etabliert.»
4. **Füllwörter**: «gezielt» 7×, «spürbar» 3×, «Potenzial» 3×, «Nachhaltiges Wachstum» 1×, «Hebel» 1×.
   - «Gezielte Ansprache bringt mehr als breite Reichweite.»
   - «Wo bleibt Potenzial liegen?»
5. **«Nicht nur X, sondern Y» / «nicht … sondern»** als Stilmittel (4×), z. B. «Nicht nur «Kontakt aufnehmen», sondern passende Schritte …».
6. **Schlagwort-Abschlüsse**: «Die Daten entscheiden.», «Genau dort setzen wir an.», «Nicht alles gleichzeitig.», «Persönlich statt Massenversand.»
7. **Redundanz**: Drei Textblöcke beginnen mit «Typische Ausgangslage: …», obwohl die Überschrift genau so heisst.
8. **Unerklärter Fachjargon**: «Core Web Vitals», «No-Code-Tools», «Segmentierung».

### Prioritäten

1. Problem-Absätze (erste Leseeindrücke, die meisten Muster): marketing-automation, data-analytics, revenue-operations, lead-generation.
2. Ablaufschritte «So gehen wir vor» in Wir-Form bringen (alle Seiten).
3. E-Commerce-Cluster (ecommerce-performance, dtc-growth-acquisition, customer-retention, paid-social-ecommerce): lange verschachtelte Sätze entwirren, Jargon erklären.

Unverändert: Fakten, Zeitangaben, Zahlen/Rechenbeispiele (ROAS 3.3/5, CHF 10'000, 1 → 2 %), Tool-Listen, CTA-Buttons, FAQ-Fragen, Struktur.

## Audit B – Lösungen, Branchenseiten, Finanz-Landingpages

Umfang: `/loesungen`, 13 Branchenseiten `/loesungen/<slug>`, Finanz-Landingpages (`/loesungen/finanzdienstleister`, `/hypothekarberatung`, `/vorsorgeberatung`, `/versicherungsbroker`) inkl. Wachstumscheck und Anfrageformular.

Gesamteindruck: Die Texte sind schon weitgehend sachlich, in Sie-Form und branchenspezifisch. Die Probleme sind punktuell, wiederholen sich aber.

### Häufigste Muster

1. **Füllwort «gezielt»** (rund 10× auf den Branchenseiten), oft auch in Titeln und Nutzenpunkten.
   - «Gezielte Anfragen von Mandaten, die zu Ihrem Büro passen» (/loesungen/treuhand-unternehmensberatung)
   - «Wir schalten Anzeigen gezielt in den Regionen entlang Ihrer Stammstrecken» (/loesungen/logistik-transport)
   - «Gezielte Erinnerungswerbung» (/loesungen/bildung-weiterbildung)
2. **Satzfragmente als Slogan** am Ende von Hero-Texten, ohne Verb:
   - «Mit gezielten Kampagnen und einem einfachen Weg zur Anmeldung.» (/loesungen/bildung-weiterbildung)
   - «Gemessen bis zum Termin und, mit Ihrem CRM, bis zum Mandat. Auf Ihren eigenen Konten.» (/loesungen/finanzdienstleister)
   - «Entscheidungen auf Basis von Zahlen statt Bauchgefühl.» (/loesungen)
3. **Doppelpunkt-Dramaturgie und Stichwortreihen** statt Sätzen:
   - «… auf beiden Seiten zu gewinnen: Suchaufträge von Arbeitgebern und passende Kandidaten …» (/loesungen/personalvermittler-recruiting)
   - «Jede Anfrage trägt ihre Herkunft mit: Google, Meta, Empfehlung, Ihr eigener Newsletter.» (Finanzseiten)
   - Drei ICP-Karten auf /loesungen/finanzdienstleister mit identischem Bau «A, B, C: Themen, die …».
4. **Abstrakte Versprechen** ohne konkreten Nutzen, v. a. in den «Sondern»-Zeilen auf /loesungen: «Wir schaffen die Grundlage, auf der Ihr Umsatz planbar wachsen kann.», «Wir schaffen die Datengrundlage, mit der Sie Wachstum steuern können.»
5. **Floskel «Von der Analyse über die Strategie bis zur Umsetzung»** (/loesungen, Kombinationen).
6. **Kleinere Unstimmigkeiten:** «schriftlich und verbindlich, ohne Verpflichtung» (widersprüchlich), «die Rückfahrt erfolgt oft leer» (Nominalstil), «Leads» im Fliesstext.

### Prioritäten

1. Hero-Texte der Branchenseiten (werden auch als Meta-Description genutzt, SEOHead → `heroDesc`).
2. Finanz-Hub: Hero-Sub, Nutzen, ICP-Karten.
3. /loesungen: Hero, Leistungsbereiche («Sondern»-Zeilen), Kombinationen.

Bewusst nicht angefasst: Kundenzitate, Zahlen/Fristen, Datenschutz-/Consent-Text, Select-Optionen und Tracking-Werte (`FORM_NAME`, `toolContext`-Text an das Formular), Paketnamen (in Logik verwendet), Dev-Hinweis in `heroDesc` der Finanz-Sektor-Daten (wird nicht gerendert, Seite läuft über FinanceLandingView).

## Audit C – Leistungen, Leistungsfelder, Lösungsseiten, Grafiken, Formularstrecke

Geprüfte Dateien: src/data/services.ts, serviceAreas.ts, challenges.ts, diagrams.ts, leadFlows.ts, src/views/ServicesView.tsx, ServiceAreaView.tsx, ChallengeView.tsx.

Gesamteindruck: Die Texte sind bereits überwiegend konkret, in Sie-Form und mit Schweizer Schreibweise (kein ß gefunden). Die KI-typischen Muster konzentrieren sich auf Headlines der Leistungsfelder, Grafik-Einleitungen und Füllwörter in Nutzen-Listen.

### Häufigste Probleme

1. **Slogan-Headlines ohne Inhalt** (Priorität hoch, H1 der Hub-Seiten)
   - «Intelligente Technologien. Effizientere Prozesse.» (Zweier-Slogan-Kette)
   - «Gute Entscheidungen sind die Grundlage für bessere Ergebnisse.» (Allgemeinplatz)
   - «Gezieltes Wachstum statt einzelner Marketingmassnahmen.»
   - «Marketing, Vertrieb und Prozesse greifen ineinander.»
2. **Muster «nicht X, sondern Y» / «Es geht nicht um …»** (Priorität hoch, Grafik-Texte)
   - «Strategie ist bei uns kein Dokument, sondern der erste Schritt einer Umsetzung.»
   - «Wir optimieren nicht einzelne Kampagnen, sondern den gesamten Weg …»
   - «welcher Kanal nicht nur Klicks, sondern Anfragen und Aufträge bringt»
   - «damit Werbung nicht nur Umsatz bringt, sondern Gewinn»
3. **Füllwörter gezielt / spürbar / konsequent / Potenzial** (Priorität mittel, verteilt)
   - «die Ihre Zielgruppe gezielt erreichen», «Kundenstimmen und Referenzen gezielt einsetzen», «bringt KI noch keinen spürbaren Nutzen», «Wird konsequent nachgefasst?», «wo Ihr Unternehmen Potenzial liegen lässt» (3× in Strategie-Texten)
4. **Dramaturgische Doppelpunkte und Triplets** (Priorität mittel)
   - «Gefunden werden, überzeugen, anfragen: Alle Wege führen auf Ihre Website.»
   - «Kundenwert nach Kaufmonat: Sie sehen, …», «Geschärfte Positionierung: warum …»
5. **Substantivstil / Passiv in Prozessschritten** (Priorität niedrig)
   - «Abgleich nach Funktion …», «Entwicklung von Bild-, Video- und Textanzeigen.», «Verarbeitung der Daten im Rahmen von DSG und DSGVO.», «Klare Definition, wann …»
6. **Unerklärter Fachjargon** (Priorität mittel)
   - «serverseitiges Tagging», «Go-to-Market», «Pipeline», «Lead-Management», «Deckungsbeitrag», «Eine Pipeline, eine Wahrheit»

### Prioritäten
1. H1 der vier Leistungsfelder (sichtbar, SEO-relevant über Definition darunter) – erledigt.
2. Grafik-Einleitungen (stehen direkt im Hero der Leistungsseiten) – erledigt.
3. Füllwörter und Jargon in Nutzen-/Prozesslisten – erledigt.
4. Formularstrecke: kaum Handlungsbedarf, nur zwei Optionen leicht vereinfacht.

Bewusst nicht geändert: Leistungsnamen (Navigation/SEO), CTA-Labels («Potenzial besprechen», «Wachstumspotenzial prüfen» – laut Leitfaden zulässig und an Overlay-Titel gekoppelt), Rechnernamen, Zahlen, Kundenzitate, Markenlabels (Strategy & Consulting usw.).

## Audit D – Startseite, Über uns, Referenzen, Ratgeber, Kontakt, Skill-Factory, Navigation, Formulare, Meta

Stand 06.11.2026. Die Texte sind seit der Neupositionierung bereits sachlich und in Sie-Form. Es bleiben einige wiederkehrende Muster, die künstlich wirken.

### Häufigste Probleme

1. **Floskel-Kette «Strategie, Technologie und Wachstum / Umsetzung»** erscheint in Hero, FAQ, Über-uns-Block, Footer, Meta und Organisation-Schema, teils als Slogan ohne Verb.
   - «Mehr Performance für Ihr Unternehmen. Strategie, Technologie, Wachstum.» (Startseite H1)
   - «Ein Partner für Strategie, Technologie und Wachstum.» (Startseite)
   - «Strategie, Technologie und Wachstum aus einer Hand» (Footer, Meta), «Wachstum aus einer Hand» ist schief.
2. **«Von … über … bis …»-Konstruktionen** als Füllsatz, oft mit Doppelpunkt.
   - «Von der Analyse bis zur laufenden Optimierung, persönlich betreut …» (Hero)
   - «von der Strategie über Systeme und Abläufe bis zum Auftrag» (3-mal auf der Startseite, 1-mal Über uns)
   - «Von der Kampagne über den Onlineshop bis zum eigenen ERP-System: Stimmen von …» (Referenzen)
3. **«Nicht nur … sondern» und «nicht durch … sondern»**
   - «Wir optimieren nicht nur Kampagnen, sondern auch die Prozesse …» (Startseite)
   - «Gute Ergebnisse entstehen nicht durch eine einzelne Kampagne …, sondern wenn …» (Über uns)
4. **Füllwörter gezielt / spürbar** und Agentur-Pathos
   - «Erprobte Zusammenarbeit, spürbare operative Entlastung und messbares Wachstum — direkte Einblicke aus der Praxis.» (Kundenstimmen-Intro, dazu Gedankenstrich-Muster)
   - «gezielter Direktansprache», «gezielt verbessern», «gezielter Kommunikation» (Problem-Finder), «Erst prüfen, dann gezielt handeln.» (Skill-Factory)
5. **«Potenzial» gehäuft** direkt neben dem CTA «Potenzial besprechen»: «Wo liegt … das grösste Potenzial?», «Lassen Sie uns über Ihr Potenzial sprechen.», «… wo Ihr Unternehmen Potenzial hat?».
6. **Unerklärter Jargon / Englisch**: «ROAS», «Leads», «Deals», «Business Case», «Engpasstheorie», «Strategy · Technology · Growth».
7. **Kleinere Punkte**: Dramatischer Doppelpunkt in «Vier Leistungsfelder, ein Ziel: bessere Ergebnisse»; deutsche statt Schweizer Anführungszeichen („CRM“) in der Skill-Factory; Satzfragmente («Dokumentiert, damit …»).

### Prioritäten

1. Startseite Hero, Zusammenspiel-Abschnitt, FAQ und Abschluss (höchste Sichtbarkeit, viele Wiederholungen).
2. Kundenstimmen-Intro und Über-uns-Fliesstext (Glaubwürdigkeit).
3. Meta-Descriptions Startseite/Leistungen/Skills und Organisation-Schema.
4. Problem-Finder-Begründungen und Skill-Beschreibungen (Jargon, Füllwörter).
5. Footer, Mega-Menü-Text, 404, Ratgeber-Kleinigkeiten.

Bewusst unverändert: Kundenzitate, Einwilligungs- und Datenschutztexte, Validierungsmeldungen, Zahlen, CTA «Potenzial besprechen», Menü-Labels, Tags/Chips der Referenzen (Längenvorgabe), Ratgeber-Fliesstexte (bereits natürlich).
