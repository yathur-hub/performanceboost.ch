# Phase 1: Analyse und Architektur

**Positionierung:** «Boost your performance through agentic marketing, sales & processes.»
Stand 13.11.2026. Basis ist der Code auf `feat/martech-wissen-labor` (main + PR #20). Es ist nichts umgesetzt.

---

## 1. Ist-Analyse

### Navigation
- **Header:** Logo und Menü-Button. Es gibt keine sichtbaren Links und keinen CTA (Entscheid PR #7).
- **Mega-Menü** (`Navbar.tsx`):
  - 5 Leistungsfelder aus `serviceAreas.ts`: KI im Unternehmen (hervorgehoben), Strategie & Beratung, MarTech & Automatisierung, Wachstum & Marketing, Vertrieb & Revenue Operations
  - darunter 7 Unternehmenslinks: MarTech-Wissen, Labor, Lösungen, Referenzen, Über uns, Skill-Factory, Ratgeber
- **Footer:** Leistungsfelder, Unternehmen (9 Links), Kontakt.

### Seitenbestand (73 Seiten nach PR #20)
| Ebene | Seiten |
|---|---|
| Leistungsfelder (Hubs) | `/leistungen/{ki-im-unternehmen, strategie, technologie-automation, wachstum-marketing, sales-revenue-operations}` |
| Leistungen (14) | growth-strategy, demand-generation, lead-generation, marketing-automation, sales-enablement, revenue-operations, ai-automation, ki-agenten, martech-stack, data-analytics und 4 E-Commerce-Seiten (ecommerce-performance, dtc-growth-acquisition, customer-retention, paid-social-ecommerce) |
| Lösungen | 14 Branchen, 2 Herausforderungen (prozessautomatisierung, vertrieb-optimieren), 4 Finanz- und 2 Immobilien-Landingpages |
| Wissen | /martech + 10 Fachthemen, /werkzeuge, /labor, /ressourcen (inkl. /ressourcen/martech), /skills |
| Unternehmen | /ueber-uns, /referenzen, /kontakt, Rechtliches |

### Startseite (`HomeView.tsx`)
1. **Hero:** «Mehr Performance für Ihr Unternehmen. *Strategie, Technologie und Wachstum.*», Rakete, CTAs «Potenzial besprechen» und «Welches Problem möchten Sie lösen?»
2. **Herausforderungen:** 6 Karten, «Wo KMU heute Umsatz und Zeit verlieren»
3. **Engpass-Text und Ablaufdiagramm,** darunter 3 Säulen Strategy/Technology/Growth
4. **Fünf Leistungsfelder** als Kartenraster
5. **MarTech-Wissen** (PR #20)
6. **Vorgehen:** Performance-Analyse → 90-Tage-Plan → Umsetzung → Begleitung
7. **Kundenstimmen** (3 echte Zitate), Inhaber-Block
8. **FAQ** (7 Fragen) und Abschluss-CTA

### Ablaufdiagramm (`RevenueSystemGraphic.tsx`)
- **Knoten:** 01 Gefunden werden → 02 Anfragen gewinnen → 03 Aufträge abschliessen / 04 Abwickeln und betreuen → 05 Steuern, dazu eine gestrichelte Rückkopplung 05 → 01.
- **Technik:** Desktop mit absolut positionierten Karten, SVG-Linien, Hover und Skalierung. Mobil eine eigene vertikale Liste. Das Diagramm ist `aria-hidden` und hat keine Textalternative.
- **Bewertung:** Es zeigt einen linearen Funnel. Prozesse kommen nur als Anhängsel vor («Abwickeln», «Steuern»). Agenten, Daten und menschliche Freigabe fehlen ganz.

### Beobachtungen im Code
- **CI-Farben:** Der Code nutzt `#686DF4` / `#696EEF` / `#CACCFB` (587 Stellen), der Brief nennt `#686CFA` / `#CBCBFC`. Die Abweichung ist visuell kaum sichtbar. Empfehlung: in Phase 2 auf die Brief-Werte vereinheitlichen, als reine Suchen-und-Ersetzen-Aufgabe ohne Designänderung.
- **Redaktionsleitfaden** (`docs/copywriting-optimization/03`): Er legt als feste Markenbegriffe «Business Performance Partner» und «We boost business performance.» fest. Der Claim kommt an 5 Stellen vor (SEOHead-Slogan, Footer, Über uns, Startseite, index.html).
- **Search-Console-Daten:** Nicht abrufbar, der ADC-Login ist abgelaufen. Die Rankingprüfung ist ein Vorbehalt vor dem Go-live (siehe Kapitel 7).

---

## 2. Strategische Bewertung

| Element | Passt? | Begründung |
|---|---|---|
| Business Performance Partner, Engpass-Logik, Messung bis zum Auftrag | ✅ behalten | Das ist der Kern der neuen Positionierung. Diese Inhalte tragen weiter. |
| Säulen Strategy · Technology · Growth | ❌ ersetzen | Sie konkurrieren mit Marketing · Sales · Processes. «Strategy» ist eine Arbeitsphase, kein Bereich. «Technology» ist das Mittel, nicht das Ergebnis. |
| 5 Leistungsfelder | ❌ neu ordnen | Sie mischen die drei Ebenen. «Strategie» ist eine Methode, «KI» ist ein Mittel, «MarTech» ist Technik. Die Kundin sieht fünf gleichrangige Türen ohne Logik. |
| «KI im Unternehmen» als hervorgehobenes 1. Feld | ⚠️ umdeuten | Es wirkt wie ein KI-Anbieter, also genau das, was vermieden werden soll. Der Inhalt (Regeln, Freigaben, eigene Praxis) ist aber stark und passt zur Agentic-Botschaft. |
| 14 Leistungsseiten | ✅ behalten, neu zuordnen | Es braucht keine neuen Leistungsseiten, alle 14 lassen sich einem der drei Bereiche zuordnen. Das verhindert Portfolio-Aufblähung. |
| Vorgehen in 4 Schritten | ⚠️ weiterentwickeln | Es deckt sich weitgehend mit den 4 Phasen. Enablement fehlt, und die Darstellung ist linear. |
| Ablaufdiagramm | ⚠️ umbauen | Die Komponente bleibt, das Modell wird neu (Kapitel 6). |
| Herausforderungen, Kundenstimmen, Inhaber, FAQ | ✅ behalten | Inhaltlich leicht anpassen, Kundenzitate bleiben unverändert. |
| MarTech-Wissen, Labor, Werkzeuge | ✅ behalten | Sie belegen die technische Tiefe. Auf der Startseite bleibt das nachrangig. |
| Branchen- und Landingpages | ✅ unverändert | Sie haben eigene Suchintentionen und laufende Kampagnen (Finanz, Immobilien). |

**Drei Konflikte mit früheren Entscheiden.** Diese brauchen deine Bestätigung:
1. **Claim:** «Boost your performance through agentic marketing, sales & processes.» ersetzt «We boost business performance.» als Markenclaim. «Business Performance Partner» bleibt als Kategorie. Der Redaktionsleitfaden wird nachgeführt.
2. **Hero-H1:** Du hattest beim Trifox-Benchmark eine neue H1 abgelehnt. Der Brief verlangt jetzt den englischen Claim im Hero, ich setze ihn so um.
3. **Header:** In PR #7 hast du sichtbare Navigationslinks entfernt. Ich empfehle, sie zurückzubringen (Kapitel 3), weil die drei Bereiche sonst unsichtbar bleiben.

---

## 3. Informationsarchitektur

### Drei Ebenen, strikt getrennt
| Ebene | Frage | Ort |
|---|---|---|
| **Was wir verbessern** | Marketing, Sales, Processes | Header, Startseite, 3 Hubs |
| **Was wir konkret leisten** | Leistungen und Lösungen | Unter dem jeweiligen Hub, Branchen unter /loesungen |
| **Wie wir vorgehen** | 4 Phasen | Eine Seite «Ansatz», eine Startseiten-Sektion, ein Block pro Hub |

Agentic AI ist **keine** vierte Ebene. Sie ist der Enabler in allen drei Bereichen und wird auf der Ansatz-Ebene erklärt.

### Sitemap
```
/                                   Startseite
/leistungen                         Übersicht: 3 Bereiche + Phasen-Hinweis
├── /leistungen/marketing           Hub Marketing          (neu, 301 von wachstum-marketing)
│   ├── growth-strategy             → «Marketingstrategie & Go-to-Market»
│   ├── lead-generation
│   ├── demand-generation
│   ├── data-analytics              (Tracking, Attribution, Reporting)
│   └── Gruppe «Für Onlineshops»: ecommerce-performance, dtc-growth-acquisition,
│       customer-retention, paid-social-ecommerce (erreichbar, nicht im Menü)
├── /leistungen/sales               Hub Sales              (neu, 301 von sales-revenue-operations)
│   ├── marketing-automation        → «CRM & Marketing Automation» (auch im Hub Marketing verlinkt)
│   ├── revenue-operations
│   └── sales-enablement
├── /leistungen/prozesse            Hub Processes          (neu, 301 von technologie-automation)
│   ├── martech-stack
│   ├── ki-agenten
│   └── ai-automation               («KI-Einführung & Schulung»)
/ansatz                             Unser Ansatz: 4 Phasen, Einstieg, Zusammenarbeitsformen (neu)
/leistungen/ki-im-unternehmen       «Agentic AI im Unternehmen»: übergreifend, URL bleibt
/loesungen                          Branchen + Herausforderungen (unverändert)
/martech, /labor, /werkzeuge, /ressourcen, /skills    Wissen (unverändert)
/ueber-uns, /referenzen, /kontakt
```
`/leistungen/strategie` → 301 auf `/ansatz`. Strategie ist Phase 1 und kommt in jedem Hub als Kompetenzfeld «… Strategy & Architecture» vor.

**Warum die Hubs unter /leistungen bleiben:**
- Die Struktur `/leistungen/<x>` ist etabliert.
- Die 14 Detail-URLs bleiben unverändert.
- Neue Bereiche lassen sich später ohne Umbau ergänzen.

**Warum `prozesse` statt `processes`:** Das Label bleibt «Processes», passend zum Claim. Der Slug folgt der deutschen Suche («Prozessautomatisierung», «Prozesse automatisieren»).

### Navigation
**Desktop-Header:**
```
[Logo]   Marketing   Sales   Processes   Ansatz   Wissen     [Gespräch anfragen]  [☰]
```
**Mobil:** Logo, CTA-Icon und ☰.

- Die drei Bereiche sind direkte Links auf die Hubs, ohne Dropdown. Hover-Dropdowns braucht es bei 3–4 Leistungen pro Bereich nicht.
- «Wissen» verlinkt auf /martech.
- Das ☰-Overlay bleibt, aber schlanker:

| Spalte | Inhalt |
|---|---|
| Marketing | Hub-Link und 4 Leistungen |
| Sales | Hub-Link und 3 Leistungen |
| Processes | Hub-Link und 3 Leistungen und «Prozesse automatisieren» (Lösung) |
| Zeile darunter | Ansatz · Agentic AI · Lösungen nach Branche · Wissen (MarTech, Labor, Werkzeuge, Ratgeber, Skill-Factory) · Über uns · Referenzen · Kontakt |

**Begründung:** Ein Menü, das man erst öffnen muss, versteckt die Positionierung. Drei sichtbare Wörter erklären das Angebot schneller als jeder Text. Das Overlay bleibt für Tiefe und für Mobile. Eine echte Mega-Navigation mit Hover-Panels braucht es nicht.

**Footer:**
- Spalte «Leistungen»: Marketing, Sales, Processes, Ansatz, Agentic AI
- Spalte «Wissen»: MarTech, Labor, Werkzeuge, Ratgeber, Skill-Factory
- Spalte «Unternehmen»: Über uns, Referenzen, Lösungen, Kontakt
- Claim neu

---

## 4. Leistungsmodell

### Drei Bereiche, als System gedacht
| | **Marketing** | **Sales** | **Processes** |
|---|---|---|---|
| Rolle im System | Nachfrage erzeugen und entwickeln | Nachfrage qualifizieren und in Aufträge verwandeln | Marketing und Sales verbinden, automatisieren und steuern |
| Kompetenzfelder | Marketingstrategie & Go-to-Market · Performance Marketing & SEO · Marketing Automation · Tracking & Attribution · Conversion-Optimierung · Agentic Marketing | CRM & Sales Operations · Lead-Management & Qualifizierung · Vertriebsautomatisierung · Revenue Operations · Reporting & Forecast · Agentic Sales | Prozessarchitektur · Workflow-Automatisierung · Systemintegration & MarTech-Stack · KI-Agenten & Orchestrierung · Datenflüsse & Governance |
| Business Outcome | Mehr passende Anfragen zu Kosten, die Sie kennen | Kürzere Reaktionszeiten und eine Pipeline, auf die Verlass ist | Weniger Handarbeit, Daten nur einmal erfasst, Abläufe, die nicht an einzelnen Personen hängen |

- Die Kompetenzfelder sind Themenblöcke auf dem Hub (wie die heutigen `topics`), keine eigenen Seiten. Neue Seiten entstehen nur, wenn ein Thema eine eigene Suchintention und eigenen Inhalt hat.
- «Agentic Marketing» und «Agentic Sales» sind Abschnitte auf den Hubs mit konkreten Agentenaufgaben. Sie verlinken auf `ki-agenten` und auf die Agentic-AI-Seite.

### Vier Phasen = Delivery-Framework, keine Leistungen
**Entscheid:** Die Phasen sind **kein** eigenes Angebot und keine Menükategorie. Sie werden an drei Orten gezeigt:
1. auf der Seite `/ansatz`, ausführlich
2. auf der Startseite, als eigene Sektion
3. auf jedem Hub als Block «So gehen wir in diesem Bereich vor», mit bereichsspezifischen Beispielen pro Phase

**Begründung:** Eine Kundin kauft «ein CRM, das genutzt wird», nicht «Enablement». Wären die Phasen Leistungen, gäbe es 3 × 4 = 12 scheinbare Produkte.

**Nicht linear:** 01 → 02 ist ein Projekt, 03 ↔ 04 ist ein Kreislauf. Der Einstieg ist in jeder Phase möglich, zum Beispiel mit einem bestehenden CRM direkt in Phase 04. Visuell sind 01 und 02 Pfeile, 03 und 04 ein Ring, mit dem Hinweis «Einstieg dort, wo Sie stehen».

Die Phasen tragen englische Framework-Namen, passend zum Claim, und deutsche Titel, die eine Geschäftsleitung versteht. «Hypercare» wird im Text erklärt.

| Phase | Titel | Text | Ergebnis |
|---|---|---|---|
| 01 Architecture & Setup | Ausgangslage klären, Zielbild festlegen | Wir analysieren Zahlen, Abläufe und Systeme und sprechen mit den Personen, die täglich damit arbeiten. Daraus entstehen ein Zielbild, die Auswahl der Werkzeuge und die nötigen Grundlagen. Der Einstieg ist meist eine Performance-Analyse von zwei bis drei Wochen. | Ein Zielbild mit Prioritäten, Aufwand und wenigen klaren Kennzahlen. |
| 02 Roll-out & Hypercare | Umsetzen und stabil in Betrieb nehmen | Wir setzen um, verbinden Systeme, übernehmen bestehende Daten und testen mit echten Fällen. Nach dem Start begleiten wir den Betrieb eng (Hypercare), bis alles im Alltag verlässlich läuft. | Die Lösung läuft produktiv und ist dokumentiert. |
| 03 Enablement | Ihr Team befähigen | Ihr Team lernt mit eigenen Fällen, wie die neuen Abläufe und Werkzeuge funktionieren. Dazu gehören eine verständliche Dokumentation und eine klare Regel, wer bei Fehlern was tut. | Ihr Team arbeitet selbständig mit der Lösung. |
| 04 Iteration & Optimization | Laufend verbessern | Einmal im Monat schauen wir gemeinsam auf die vereinbarten Kennzahlen und auf die Nutzung. Was wirkt, bauen wir aus. Was nicht wirkt, ändern oder stoppen wir. | Das System wird Schritt für Schritt besser, gemessen an Ihren Zahlen. |

Die Analyse bleibt ein eigener, abgeschlossener Auftrag. Dieser Satz und die Arbeitsformen von /leistungen wandern auf `/ansatz`.

### Agentic AI richtig einordnen
Die Seite `/leistungen/ki-im-unternehmen` wird zu **«Agentic AI im Unternehmen»**. Die URL bleibt, damit die Seite ihr Keyword behält. Sie ist im Menü unter «Ansatz» eingeordnet und kein viertes Feld mehr.

Kernstück ist eine Stufenleiter, die auch auf der Startseite (kompakt) und in jedem Hub vorkommt:

| Stufe | Was passiert | Beispiel | Wer entscheidet |
|---|---|---|---|
| 1 Regelbasierte Automatisierung | Wenn A, dann B. Immer gleich, voll nachvollziehbar. | Anfrage landet mit Quelle im CRM, Aufgabe wird angelegt | Die Regel |
| 2 KI-unterstützte Abläufe | KI fasst zusammen, ordnet ein, entwirft. | Anfrage wird zusammengefasst und einer Kategorie zugeordnet | Ein Mensch prüft jedes Ergebnis |
| 3 Agenten mit Handlungsspielraum | Ein Agent erledigt eine Aufgabe über mehrere Schritte, nur mit den Rechten, die er braucht. | Firma recherchieren, im CRM ergänzen, Antwortentwurf vorbereiten | Der Agent innerhalb festgelegter Grenzen |
| 4 Menschliche Steuerung | Freigaben, Protokolle, Grenzen. | Nichts geht ohne Freigabe nach aussen, kostet Geld oder löscht Daten | Ihr Team |

Grundsatz für die Seite: «Wir wählen pro Ablauf die einfachste Lösung, die verlässlich funktioniert. Oft ist das eine Regel und kein Agent.» Als Beleg dient der eigene Betrieb (bestehender Block «So arbeiten wir selbst», vom Inhaber bestätigt). Es gibt keine Autonomieversprechen.

---

## 5. Startseiten-Konzept

| # | Sektion | Entscheid | Herkunft |
|---|---|---|---|
| 1 | Hero | Überarbeiten | Text neu, Rakete bleibt |
| 2 | Wo KMU Umsatz und Zeit verlieren | Behalten, leicht überarbeiten | Karten mit Bereichs-Tag |
| 3 | Drei Bereiche, ein System | Neu (ersetzt Säulen + 5 Felder) | Säulen und Leistungsfelder zusammengeführt |
| 4 | Wie das zusammenspielt | Neu positioniert | Engpass-Text + neues Diagramm |
| 5 | Agenten arbeiten, Ihr Team entscheidet | Neu | Stufenleiter kompakt |
| 6 | Wie wir vorgehen | Überarbeiten | Bisheriges «Vorgehen» → 4 Phasen |
| 7 | Kundenstimmen | Behalten | Unverändert |
| 8 | Inhaber + Wissen | Zusammenführen | Inhaber-Block + MarTech-Sektion als Linkzeile |
| 9 | FAQ | Überarbeiten | 7 Fragen, 3 neu |
| 10 | Abschluss-CTA | Überarbeiten | Text neu |

Die eigene MarTech-Sektion entfällt. Die Teaser (Fachthemen, Werkzeuge, Labor) gehen als Linkzeile in den Inhaber-Block, weil sie die Person belegen und auf der Startseite sonst eine Sekundärzielgruppe bedienen. Die Startseite wird damit kürzer als heute (bisher 9 Inhaltssektionen, neu 8 plus FAQ und CTA, ohne doppelte Leistungsdarstellung).

### Texte

**1 Hero**
- Oberzeile: Business Performance Partner für Schweizer KMU
- H1 (`lang="en"`): **Boost your performance** *through agentic marketing, sales & processes.* Der zweite Teil steht kursiv in Serif und Akzentfarbe, wie heute.
- Subheadline: Wir verbinden Ihr Marketing, Ihren Vertrieb und die Abläufe dahinter zu einem System. Das bringt mehr passende Anfragen, schnellere Aufträge und weniger Handarbeit. KI-Agenten übernehmen dabei klar umrissene Aufgaben, die Entscheidungen bleiben bei Ihrem Team.
- Zielgruppenzeile (klein): Für Unternehmen ab rund CHF 1 Mio. Umsatz. Ihr Ansprechpartner ist Inhaber Yathur Nathan.
- CTA primär: **Ausgangslage besprechen**. CTA sekundär: **Welches Problem möchten Sie lösen?** (Problem-Finder bleibt)

**2 Herausforderungen.** Titel und Intro bleiben. Die 6 Karten bekommen ein kleines Label (Marketing / Sales / Processes) und verlinken auf den passenden Hub oder die passende Lösung.

**3 Drei Bereiche, ein System**
- H2: Drei Bereiche, ein System
- Intro: Marketing gewinnt Nachfrage, der Vertrieb macht daraus Aufträge, und die Abläufe dahinter verbinden beides. Wir verbessern die drei Bereiche gemeinsam, weil ein Engpass in einem Bereich auch die anderen bremst.
- Je Karte: Titel, Nutzensatz, 4–5 Kompetenzfelder, eine Zeile «Ergebnis», ein Link. Die Visuals kommen aus dem bestehenden Visual3D-Set.

| Karte | Titel | Nutzensatz | Ergebnis | Link |
|---|---|---|---|---|
| Marketing | Nachfrage, die zu Ihrem Angebot passt | Wir sorgen dafür, dass die richtigen Unternehmen Sie finden, Ihr Angebot verstehen und anfragen. Gemessen wird bis zum Auftrag, nicht bis zum Klick. | Mehr passende Anfragen zu Kosten, die Sie kennen. | Zu Marketing → |
| Sales | Aus Anfragen werden Aufträge | Wir richten CRM, Lead-Management und Vertriebsabläufe so ein, dass keine Anfrage liegen bleibt und Ihr Vertrieb weiss, wen er zuerst anruft. | Kürzere Reaktionszeiten und eine Pipeline, auf die Verlass ist. | Zu Sales → |
| Processes | Abläufe, die ohne Handarbeit laufen | Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI-Agenten dort ein, wo sie verlässlich arbeiten. Mit klaren Regeln für Daten und Freigaben. | Weniger Handarbeit, weniger Fehler, Daten nur einmal erfasst. | Zu Processes → |

**4 Wie das zusammenspielt**
- H2: Zuerst der Engpass, dann das nächste Tool (bewährte Headline bleibt)
- Text: Der bestehende Engpass-Absatz, um einen Satz zur Prozessebene ergänzt.
- Dazu das neue Systemdiagramm (Kapitel 6).

**5 Agentic AI**
- H2: Agenten arbeiten, Ihr Team entscheidet
- Intro: Nicht jede Aufgabe braucht KI. Wir wählen pro Ablauf die einfachste Lösung, die verlässlich funktioniert, und legen fest, wo ein Mensch freigibt.
- 4 kompakte Stufen (Kapitel 4), Link «Wie wir Agentic AI einsetzen →»

**6 Wie wir vorgehen**
- H2: Wie wir vorgehen
- Intro: Vier Phasen, die sich wiederholen. Sie steigen dort ein, wo Ihr Unternehmen heute steht.
- 4 Phasen-Karten (Kapitel 4), 01–02 als Pfeil, 03–04 als Ring
- Hinweis zur Analyse, Link «Mehr zum Ansatz →»

**8 Inhaber**
- H2 bleibt: «Ein Partner, der Strategie auch selbst umsetzt.»
- Text ergänzt um Marketing, Vertrieb und Prozesse.
- Linkzeile: MarTech-Wissen · Werkzeuge · Labor · Über uns · Referenzen

**9 FAQ (neu und angepasst)**
- **Was heisst «agentic marketing, sales & processes»?** Marketing, Vertrieb und die Abläufe dahinter arbeiten als ein System. Dort, wo es verlässlich funktioniert, übernehmen KI-Agenten Teilaufgaben, zum Beispiel recherchieren, vorqualifizieren oder Entwürfe vorbereiten. Ihr Team gibt frei und entscheidet.
- **Sind Sie eine KI-Agentur?** Nein. Wir verbessern Marketing, Vertrieb und Abläufe. KI und Automatisierung setzen wir ein, wenn sie dafür das beste Mittel sind, oft reicht eine einfache Regel.
- **Was kann ein KI-Agent heute verlässlich, und was nicht?** Klar umrissene Aufgaben mit festen Regeln und geprüften Daten kann er gut. Entscheidungen mit rechtlicher, finanzieller oder Kundenwirkung trifft weiterhin ein Mensch.
- Beibehalten und angepasst: Für welche Unternehmen? · Müssen wir alle Bereiche beziehen? · Aufwand als Kunde · Was kostet es? (ohne Preise, wie heute)

**10 Abschluss-CTA**
- H2: Wo verliert Ihr Unternehmen heute am meisten?
- Text: 30 Minuten, kostenlos. Sie schildern Ihre Ausgangslage in Marketing, Vertrieb oder Abläufen. Wir sagen Ihnen offen, wo wir ansetzen würden und ob wir der richtige Partner sind.
- Button: **Erstgespräch vereinbaren**

### CTA-Matrix (nach Absicht statt überall gleich)
Alle CTAs öffnen weiter das Overlay mit `LeadFunnel`, die Strecke passt zur Seite.

| Ort | CTA | Formularstrecke |
|---|---|---|
| Header | Gespräch anfragen | qualifier |
| Home Hero | Ausgangslage besprechen | qualifier |
| Home Ende | Erstgespräch vereinbaren | qualifier |
| Hub Marketing | Marketing besprechen | qualifier (Ziel vorbelegt) |
| Hub Sales | Vertriebsprozess besprechen | qualifier |
| Hub Processes | Abläufe besprechen | stack |
| Agentic AI | KI-Einsatz prüfen lassen | ai |
| /ansatz | Mit einer Performance-Analyse starten | qualifier |
| Leistungsseiten | bestehende `ctaLabel` je Leistung, bleiben | wie heute |

Der Leitfaden-Satz «Ein Seitentyp nutzt denselben Haupt-CTA» bleibt erfüllt: Gleich ist es innerhalb eines Seitentyps, nicht über die ganze Website.

---

## 6. Diagramm-Konzept

**Empfehlung: ein Kreislauf über einer Prozessebene.** Ein reiner Funnel macht Processes zur dritten Stufe. Ein freies Netzwerk ist für eine Geschäftsleitung schwer lesbar. Der Kreislauf zeigt beides: die Reihenfolge, in der Kunden entstehen, und die Ebene, die alles trägt.

```
        ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
        │  MARKETING   │ ──▶ │    SALES     │ ──▶ │   ERGEBNIS   │
        │ Nachfrage    │     │ Qualifizieren│     │ Aufträge,    │
        │ gewinnen     │     │ & abschliessen│    │ Umsatz, Kunden│
        │ [Agent] ✎    │     │ [Agent] ✎    │     │              │
        └──────┬───────┘     └──────┬───────┘     └──────┬───────┘
               │                    │                    │
   ════════════╪════════════════════╪════════════════════╪═══════════
   PROCESSES   Systeme · Daten · Automatisierung · Agenten · Freigaben
   ════════════╪════════════════════╪════════════════════╪═══════════
               ▲                                         │
               └──────── Daten & Feedback: messen und verbessern ◀┘
```

**Inhalt**
- **Obere Reihe:**
  - Marketing (Nachfrage gewinnen), mit Unterzeile «Gefunden werden · Anfragen gewinnen»
  - Sales (qualifizieren & abschliessen), mit Unterzeile «Vorqualifizieren · Offerte · Abschluss»
  - Ergebnis (Aufträge, Umsatz, Kundenbindung)
  - Die bisherigen Knoten 01–04 gehen in diesen drei Stufen auf.
- **Prozessebene** über die ganze Breite. Senkrechte Verbindungen zu jeder Stufe zeigen: Processes ist das Fundament jeder Stufe, keine Stufe danach.
- **Agentenmarker** auf jeder Stufe (kleines Abzeichen). Beim Hover oder Antippen zeigt er eine Beispielaufgabe und wer freigibt:
  - Marketing: Inhalte entwerfen, Kampagnen überwachen, Freigabe durch das Team
  - Sales: Firma recherchieren, Anfrage vorqualifizieren, Antwortentwurf
  - Processes: Daten übertragen, Fehler melden, Berichte erstellen
- **Rückkopplung:** Die bestehende gestrichelte Schleife führt vom Ergebnis zurück zu Marketing, beschriftet mit «Daten & Feedback».
- Die bisherige Stufe «Steuern» wird zu dieser Schleife.

**Technik**
- Die Komponente `RevenueSystemGraphic` wird überarbeitet: Datenmodell, Positionen, SVG-Pfade und Hover-Logik. Skalierung, Motion und Farbwerte bleiben.
- Es kommt keine neue Bibliothek dazu.
- **Mobil:** Die Stufen stehen untereinander, die Prozessebene ist eine durchgehende linke Schiene mit Abzweigen. Die Agentenaufgaben sind aufklappbar statt per Hover.
- **Barrierefreiheit:** Das `aria-hidden` entfällt. Das Diagramm wird eine `figure` mit `figcaption` und einer Textliste für Screenreader.
- **Farben:**
  - Stufen weiss mit Rand `#E0E0E0`
  - Prozessebene `#CBCBFC` (hell)
  - Agentenmarker und Pfeile `#686CFA`
  - Text `#4F4F4F`
- Die Ergebnisstufe ist hervorgehoben wie die bisherige Stufe 05.

---

## 7. SEO- und Migrationskonzept

### 301-Weiterleitungen (`public/_redirects`)
```
/leistungen/wachstum-marketing        /leistungen/marketing   301
/leistungen/sales-revenue-operations  /leistungen/sales       301
/leistungen/technologie-automation    /leistungen/prozesse    301
/leistungen/strategie                 /ansatz                 301
```
Das Risiko ist gering:
- Die Hubs sind seit dem 06.11. live, «MarTech & Automatisierung» erst seit dem 13.11. Sie haben noch kaum gewachsenes Ranking.
- Alle 14 Leistungs-URLs, alle Lösungsseiten und `/leistungen/ki-im-unternehmen` bleiben unverändert.

**Vor dem Go-live:** Mit Search Console die Klicks und Impressionen der vier alten Hub-URLs und der Performance-Marketing-Seiten prüfen. Dafür braucht es `! gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/cloud-platform`, der Login ist derzeit abgelaufen.

### Pflichten bei der Migration
- 13 interne Links auf die alten Hubs (grep) umstellen.
- `AREA_IDS`, `indexablePaths()`, Prerender und Sitemap aktualisieren. Die Sitemap hat danach 73 − 4 + 4 = 73 URLs (3 Hubs + /ansatz ersetzen 4 Hubs).
- Canonicals werden automatisch aus SEOHead gesetzt, Breadcrumbs (`area.shortLabel`) passen sich an.
- `pageType`-Werte für GA4 bleiben (`leistungsfeld`, neu `ansatz`).
- Sitemap in der Search Console neu einreichen.

### Titel und Beschreibungen (Entwurf)
| Seite | Title | Meta Description |
|---|---|---|
| / | performanceboost: Marketing, Vertrieb & Prozesse mit KI-Agenten für KMU | Wir verbinden Marketing, Vertrieb und Abläufe von Schweizer KMU zu einem System: mehr passende Anfragen, schnellere Aufträge, weniger Handarbeit. Mit KI-Agenten und klaren Freigaben. |
| /leistungen/marketing | Marketing für KMU: Performance Marketing, SEO & Automation \| performanceboost | Performance Marketing, SEO, Marketing Automation und Tracking für Schweizer KMU, gemessen bis zum Auftrag statt bis zum Klick. |
| /leistungen/sales | Sales & CRM für KMU: Lead-Management und Revenue Operations \| performanceboost | CRM, Lead-Management, Vertriebsautomatisierung und Revenue Operations, damit aus Anfragen planbar Aufträge werden. |
| /leistungen/prozesse | Prozessautomatisierung & Systemintegration für KMU \| performanceboost | Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI-Agenten mit klaren Regeln ein. Für Schweizer KMU. |
| /ansatz | Unser Ansatz: von der Analyse zur laufenden Optimierung \| performanceboost | Architecture & Setup, Roll-out & Hypercare, Enablement und Iteration: so verbessern wir Marketing, Vertrieb und Prozesse Schritt für Schritt. |
| /leistungen/ki-im-unternehmen | Agentic AI im Unternehmen: KI-Agenten mit klaren Regeln \| performanceboost | Wann eine Regel reicht, wann KI hilft und wann ein Agent arbeitet. Einführung, Schulung und Governance für Schweizer KMU. |

**Semantische Abgrenzung**
- Jede Hub-Seite hat genau ein H1 und eine zitierbare Definition (wie heute).
- Performance-Marketing-Begriffe gehören nur zu Marketing, CRM und Pipeline zu Sales, Automatisierung und Integration zu Processes.
- Agentic AI ist auf jedem Hub mit einem eigenen H2 verankert, die Tiefe liegt auf der Agentic-AI-Seite. Das hilft klassischer Suche und KI-Suche (klare Entitäten, keine Überschneidung).
- Strukturierte Daten: `Service` pro Hub, `FAQPage` wie heute.

**Performance-Marketing-Relevanz bleibt erhalten**
- demand-generation, lead-generation und die 4 E-Commerce-Seiten bleiben URL-gleich.
- Der Marketing-Hub trägt «Performance Marketing» in Titel und H2.
- Die Branchen-Landingpages bleiben unverändert.

---

## 8. Umsetzungsplan (Phase 2)

**Branch:** `feat/agentic-positioning`. Er baut auf PR #20 auf, weil Menü und Footer auf /martech, /labor und /werkzeuge verweisen. **Empfehlung:** zuerst PR #20 mergen, dann ab main abzweigen.

| Prio | Paket | Dateien |
|---|---|---|
| P1 | Datenmodell: 3 Bereiche + Capability «Agentic AI», Leistungen neu zugeordnet, PILLARS entfernt, PHASES neu | `src/data/serviceAreas.ts`, neu `src/data/approach.ts`, `src/data/services.ts` (2 Titel), `src/data/challenges.ts` |
| P1 | Routing, Redirects, Sitemap, Prerender | `src/lib/routes.ts`, `public/_redirects`, `scripts/generate-sitemap.ts`, `src/entry-prerender.tsx`, `App.tsx` |
| P1 | Navigation und Footer | `src/components/Navbar.tsx`, `src/components/Footer.tsx` |
| P1 | Startseite | `src/views/HomeView.tsx` |
| P1 | Diagramm | `src/components/home/RevenueSystemGraphic.tsx` |
| P2 | Hub-Seiten mit Blöcken «Agentic» und «So gehen wir vor» | `src/views/ServiceAreaView.tsx` |
| P2 | Seite /ansatz (Phasen, Einstieg, Zusammenarbeitsformen aus /leistungen) | neu `src/views/ApproachView.tsx` |
| P2 | Agentic-AI-Seite umbauen (Stufenleiter, Governance) | `serviceAreas.ts` (Eintrag ki-im-unternehmen), `ServiceAreaView.tsx` |
| P2 | /leistungen-Übersicht nach 3 Bereichen | `src/views/ServicesView.tsx` |
| P2 | SEO-Metadaten, Claim, Organisation-Schema | `src/components/SEOHead.tsx`, `index.html`, `AboutView.tsx` |
| P3 | CI-Farbwerte vereinheitlichen | `src/index.css` und Klassen (#686DF4 → #686CFA, #CACCFB → #CBCBFC) |
| P3 | Redaktionsleitfaden nachführen (Claim, Bereichsnamen, Phasennamen) | `docs/copywriting-optimization/03-editorial-guidelines.md` |
| P3 | Doku: Änderungsprotokoll und QA | `docs/agentic-positioning/02-umsetzung.md` |

**Prüfung**
- `npm run lint`, `npm test`, `npm run build`
- Screenshots Desktop und Mobile (Startseite, 3 Hubs, /ansatz, Agentic AI, Menü offen)
- Redirect-Test auf dem Preview-Worker
- keine Konsolenfehler, kein horizontales Scrollen

**Nicht Teil von Phase 2:** n8n, GTM, Cockpit, Formularfelder. `formId` und die Strecken bleiben unverändert. Es wird nichts veröffentlicht, das Ergebnis ist ein PR mit Preview-URL.

---

## Entscheide für die Freigabe
1. Neuer Claim ersetzt «We boost business performance.» (Business Performance Partner bleibt).
2. Sichtbare Header-Navigation «Marketing · Sales · Processes · Ansatz · Wissen» mit CTA, entgegen PR #7.
3. Hubs `/leistungen/marketing | sales | prozesse` mit 301 von den alten Hubs. «Strategie» wird zu `/ansatz`.
4. «KI im Unternehmen» wird die übergreifende Seite «Agentic AI», URL bleibt, kein viertes Feld.
5. Phasen als Delivery-Framework (Startseite, /ansatz, Block pro Hub), nicht als Leistungen.
6. PR #20 vor Phase 2 mergen.
