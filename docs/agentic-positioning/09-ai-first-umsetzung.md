# AI-First-Transformation der Inhalte

Stand 13.11.2026, Branch `feat/agentic-positioning` (PR #21). Nicht veröffentlicht.
Grundlage: `08-ai-first-leitfaden.md` (Rahmen, Begriffe, Glaubwürdigkeit) und `docs/copywriting-optimization/03-editorial-guidelines.md`.
CI, Design, Navigation, Informationsarchitektur, Layouts, Animationen, Routing und URLs sind unverändert. Geändert wurden nur Texte, bei Listen innerhalb von Rastern ohne Änderung der Spaltenzahl.

## Phase 1: Audit (Ausgangslage vor der Überarbeitung)
Reifegrad AI First: 1 = klassische Dienstleistung, KI fehlt oder ist angehängt · 2 = KI erwähnt, Perspektive klassisch · 3 = KI teilweise in die Abläufe integriert · 4 = durchgehend als System mit Daten, Stufen und Freigaben gedacht.

| Seite | Aktuelles Leistungsversprechen | Reifegrad | Schwächen | Empfehlung | Priorität |
|---|---|---|---|---|---|
| Startseite | Marketing, Vertrieb und Abläufe als ein System, Agenten übernehmen Teilaufgaben | 3 | Hero und Bereiche sagen «Agenten arbeiten mit», nicht dass die Architektur von Anfang an dafür geplant ist. Datenbasis als Voraussetzung für Agenten fehlt. FAQ unterscheidet Automatisierung und Agent nicht | Hero-Unterzeile, Bereichs-Intro, Engpass-Text, Stufen-Intro und FAQ AI-first, neue FAQ «Automatisierung oder Agent» | hoch |
| Agentic Marketing | Nachfrage bis zum Auftrag gemessen, Agenten überwachen und bereiten vor | 3 | Definition beginnt mit Agenten statt mit dem System. Kein Bezug zwischen Messlücke und Agenten. Phasen klassisch | Definition als System (Daten, Kanäle, Agenten, Freigaben), Messlücke mit Agenten verknüpfen, Phasen mit Tests und Agenten-Regeln, FAQ zum Agenten im Marketing | hoch |
| Agentic Sales | CRM, Lead-Management, Agenten für Vorqualifizierung | 3 | CRM nicht als Datenbasis für Agenten beschrieben. Rollen von Regel und Agent vermischt | CRM als Datenschicht, Regeln für Zuweisung und Erinnerungen, Agenten für Vorarbeit, FAQ «Ersetzt ein Agent den Vertrieb?» | hoch |
| Agentic Processes | Systeme verbinden, Regeln, KI und Agenten | 3 | Beispielkarten zeigten nicht alle Stufen (keine KI-unterstützte Dokumentverarbeitung). Messung des Nutzens eines Agenten fehlte | Karten nach Stufen (Regel, KI, Agent), Phasen mit Protokollen und Kosten pro Fall, FAQ «Woran messen Sie, ob sich ein Agent lohnt?» | hoch |
| Governance | Rechte, Freigaben, Regeln, Schulung | 3 | Tests mit echten Fällen, Protokolle, Monitoring und Kosten fehlten als eigene Themen. Agent-Definition ohne Abgrenzung zum Workflow | Definition um Protokolle, Tests, Monitoring ergänzen, zwei neue Themen, Agent-Definition mit Werkzeugen und Abgrenzung | hoch |
| Ansatz (vier Phasen) | Analyse, Umsetzung, Befähigung, Optimierung | 2 | Phasen beschrieben klassische Beratung. Datenprüfung, Systemarchitektur, Stufenwahl, Evaluation und Iteration von Agenten fehlten | Alle vier Phasen AI-first (Datenlage, Architektur pro Schritt, Tests mit echten Fällen, Prüfen von Vorschlägen, Iteration von Regeln und Agenten), neue FAQ zur Prüfung eines Agenten | hoch |
| Leistungsübersicht | Drei Bereiche als System | 2 | Ergebnispakete ohne Bezug zu Agenten und Datenbasis | Hero-Text und drei Pakete AI-first | mittel |
| 14 Leistungsseiten | Klassische Leistungen, auf sieben Seiten ein angehängter Block «Wo KI mitarbeitet» | 1–2 | KI als Anhang statt als Perspektive, Agenten-Aussagen teils ohne Stufe, Diagramme klassisch | Jede Seite neu aus der AI-First-Perspektive, angehängte Blöcke in die Seitenlogik integriert, Diagramme angepasst | hoch |
| 14 Branchenseiten | Kundengewinnung je Branche mit Rechner | 1 | Kaum KI, keine branchenspezifischen Anwendungsfälle | Ein bis zwei plausible Beispiele pro Branche, als Beispiel gekennzeichnet | mittel |
| Lösungen Prozessautomatisierung / Vertrieb optimieren | Automatisierung und Vertrieb verbessern | 2 | Kein klarer Unterschied zwischen Workflow und agentischem Prozess | Unterschied mit konkreten Aufgaben erklären, Vertrieb mit CRM als Datenschicht | hoch |
| Kampagnen-Landingpages (Finanz, Immobilien) | Anfragen und Termine für Berater, Vermieter und Makler | 2 | Systembeschreibung ohne Stufen, keine Aussage, was KI tut und was nicht | Behutsam ergänzt, H1, Formulare und Botschaft unverändert | mittel |
| Über uns | Marketer, der die Technik selbst baut | 2 | «KI-Agenten, die ganze Abläufe übernehmen» widerspricht der Freigaberegel | Formulierung auf begrenzte Rechte korrigiert, Grundsatz «Technik, die mitarbeitet» AI-first | mittel |
| Meta Descriptions, strukturierte Daten | Startseite, Ansatz, Organisation | 2 | Klassische Formulierung | AI-first, Keywords erhalten | mittel |
| MarTech-Wissen, Labor, Ratgeber | Fachartikel | 3 | Bereits sachlich und differenziert | Nur Konsistenz geprüft, keine Änderung | tief |

## Phase 2: Umsetzung
### Startseite (`HomeView.tsx`, `RevenueSystemGraphic.tsx`)
- **Hero-Unterzeile:** «Wir gestalten Ihr Marketing, Ihren Vertrieb und die Abläufe dahinter als ein System, in dem Automatisierung und KI-Agenten von Anfang an mitgedacht sind. Agenten übernehmen klar umrissene Aufgaben, die Entscheidungen bleiben bei Ihrem Team.» Der Claim bleibt unverändert.
- **Herausforderungen:** Erst wenn Ablauf und Daten stimmen, lohnt sich Automatisierung oder ein Agent.
- **Drei Bereiche:** gemeinsame Datenbasis, auf der Regeln, KI und Agenten mit begrenzten Rechten arbeiten.
- **Stufen:** Pro Schritt wird festgelegt, ob Regel, Modell oder Agent, welche Rechte und wo eine Freigabe.
- **Inhaber-Abschnitt:** nennt die belegte eigene Praxis (geprüfte Website-Anfragen, Agent für Erstgespräche).
- **FAQ:** Antworten AI-first, neue Frage «Was ist der Unterschied zwischen Automatisierung und einem KI-Agenten?».
- **Systemgrafik:** Processes nennt jetzt Regel, Dokumenteinordnung und Übergabe unklarer Fälle an eine Person.

### Bereiche und Governance (`serviceAreas.ts`)
- **Rollen und Definitionen:** Sie beschreiben das System von Daten bis Freigabe, nicht nur die Agenten. Marketing sagt ausdrücklich, dass Performance Marketing, SEO, GEO und Marketing Automation weiterhin umgesetzt werden.
- **Agenten-Karten:** Processes zeigt die drei Stufen (Daten übertragen per Regel, Dokumente einordnen per KI, Ausnahmen bearbeiten per Agent).
- **Phasen pro Bereich:** mit Datenklärung, Tests mit echten Fällen, Prüfen von Vorschlägen und Kosten pro Fall.
- **Neue Themen:** Berichte und Auswertungen (Processes), Rechte und Freigaben, Tests, Protokolle und Monitoring (Governance).
- **Neue FAQ:** Agent im Marketing, Agent im Vertrieb, Nutzen eines Agenten messen, Nachvollziehbarkeit. Die Agent-Definition grenzt jetzt vom Workflow ab.
- **Stufen (`AGENTIC_LEVELS`):** Stufe 3 heisst «Agentische Workflows», die menschliche Steuerung umfasst Tests mit echten Fällen.
- **Doppelpunkt-Konstruktionen:** zwei in FAQ-Antworten entfernt.

### Ansatz (`approach.ts`, `ApproachView.tsx`)
| Phase | Neu |
|---|---|
| Architecture & Setup | Datenlage prüfen, Ablauf so entwerfen, wie er mit Automatisierung und KI von Anfang an aussähe, pro Schritt Regel, KI oder Agent, Rechte und Freigaben festlegen |
| Roll-out & Hypercare | Workflows und Agenten bauen, mit echten Fällen prüfen, Protokolle, Fehlermeldungen und Eskalation an Menschen einrichten |
| Enablement | Ihr Team lernt, Vorschläge zu prüfen und freizugeben, schriftliche Regeln für Daten und Tools |
| Iteration & Optimization | Qualität der Vorschläge und Kosten pro Fall auswerten, Regeln, Anweisungen und Datenquellen anpassen, mehr Spielraum erst nach nachweislich stabiler Leistung |

Die Grundsätze bleiben vier (Raster), ergänzt um Kosten pro korrekt erledigtem Fall, «Daten und Ablauf vor dem Agenten» und Protokolle. Neue FAQ zur Prüfung eines Agenten vor dem Start.

### Weitere Seiten
- **Leistungsübersicht:** Hero-Text und die drei Ergebnispakete (Rechte und Freigaben, Schnittstellen für Agenten, automatische Vorqualifizierung).
- **Über uns:** Agenten übernehmen Schritte mit klaren Rechten statt «ganze Abläufe».
- **Meta:** Startseite (`index.html` und `SEOHead`), Ansatz, Beschreibung der Organisation in den strukturierten Daten.
- **Kampagnen-Landingpages:** Anfrageweg mit automatischer Übergabe ins CRM, Zusammenfassung, Recherche vor dem Erstgespräch, Entwürfe mit Freigabe. Neue FAQ zu KI (Finanz-Übersicht, Erstvermietung, Makler). FIDLEG-Hinweise, H1, Formulare und Optionen sind unverändert.

### Branchen- und Problemseiten (`solutionsData.ts`, `challenges.ts`, `SolutionsView.tsx`, `SolutionDetailView.tsx`)
- **14 Branchenseiten:**
  - Der Hero beschreibt den ganzen Weg von der Anfrage bis zum Auftrag.
  - Der dritte Schritt ist meist ein branchenspezifischer Anwendungsfall, gekennzeichnet mit «Ein Beispiel». Beispiele: Treuhand (Belege vorsortiert), Handwerk (Zusammenfassung und Offertentwurf), Personalvermittlung (Matching-Vorschläge), Ingenieurbüros (Ausschreibungen und Baugesuche sichten).
  - Jede Seite hat eine neue FAQ dazu, was KI tut, was Menschen entscheiden und was das DSG oder das Berufsgeheimnis verlangt.
  - Bei Finanz, Gesundheit und Recht bleiben alle regulatorischen Hinweise.
  - Drei Probleme und drei Schritte bleiben, wie die Seite sie darstellt.
- **Prozessautomatisierung:**
  - Die Seite erklärt den Unterschied zwischen festem Workflow und agentischem Prozess.
  - Die sechs Beispiele tragen ihre Stufe im Titel («Fester Workflow …», «KI-Vorschlag …», «Agentischer Ablauf …»).
  - Neue FAQs: «Workflow oder agentischer Prozess» (eine Integration ist kein Agent) und «Was darf ein Agent selbst tun?».
- **Vertrieb optimieren:** Das CRM ist die Datenschicht. Regeln übernehmen Zuweisung und Erinnerungen, KI bereitet Gespräche und Nachfass-Entwürfe vor, versendet wird nach Freigabe.
- **Lösungsübersicht:** neue FAQ «Setzen Sie in jedem Projekt KI ein?».
- **Entschärft nach Review:** Personalvermittlung (die Kriterien legt der Kunde fest, keine Zusage zu Verzerrungsprüfungen), Gesundheit (kein Sprachmodell ohne geklärten Verarbeitungsort, Zugriff und Vertrag), IT-Dienstleister (Ticketdaten nur auf Wunsch).

### Leistungsseiten und Diagramme (`servicesExtendedData.ts`, `services.ts`, `diagrams.ts`, Karten in `ServicesView.tsx`)
- **Neu aufgebaut:** Alle 14 Seiten sind über Hero, Problem, Leistungskarten, Vorgehen, Zusatzabschnitte, FAQ und Abschluss neu aus der AI-First-Perspektive geschrieben.
- **Angehängte KI-Blöcke integriert:** Die Blöcke «Wo KI mitarbeitet» sind entfernt. Ihr Inhalt steht jetzt in den Karten und Schritten und in einer Liste «Wer was entscheidet» (Regel, KI-Vorschlag, Agent, Freigabe).
- **Beispiele:** Hypothetische Abläufe beginnen mit «Ein Beispiel: …».
- **Unverändert:** Titel, Slugs, Zahlen und Zeiträume.
- **Diagramme:** Die Texte sind angepasst, Typen und Icons unverändert.
- **Karten der Leistungsübersicht:** Die Kurztexte (`servicesCopyOverride`) sind ebenfalls AI-first. «Ganze Abläufe laufen» heisst jetzt «Agenten übernehmen Schritte, Ihr Team gibt frei».

## Phase 3: Qualitätsprüfung
- **AI First als Denkweise:** Startseite, Bereiche, Ansatz und Leistungsseiten beschreiben Abläufe von Daten über Stufen bis zur Freigabe. KI ist kein angehängter Absatz mehr.
- **Stufen fachlich korrekt:** Regel, KI-unterstützte Verarbeitung, agentischer Workflow, begrenzte Rechte und Freigabe werden unterschieden. Integrationen heissen nirgends Agent.
- **Leistungen bleiben konkret:** Performance Marketing, SEO/GEO, CRM, Tracking und Shop-Leistungen werden weiterhin umgesetzt.
- **Governance:** Rechte, DSG, Protokolle, Tests mit echten Fällen, Kosten pro Fall und Eskalation stehen auf Governance, Ansatz, Processes und den Leistungsseiten.
- **Glaubwürdigkeit:** Als Praxis genannt ist nur der belegte eigene Betrieb. Alles Weitere ist Leistung oder Beispiel. Keine erfundenen Zahlen, keine vollständige Autonomie.
- **SEO/GEO:** Titel-Tags, Slugs und Haupt-Keywords sind erhalten, die Meta Descriptions von Startseite und Ansatz sind AI-first.
- **Sprache:** kein «ß», keine Telefonnummer, keine Preise, kein Arbeitgeber, Kundenzitate unverändert. Ein Doppelpunkt-Einstieg auf dem Ansatz ist nach dem Scan korrigiert.
- **Layout:**
  - Audit über 26 Seiten × 9 Breiten: kein Überlauf, keine Konsolenfehler.
  - Eingabefelder und Textgrössen gleich wie vorher, Touch-Ziele unter 44 px: 636 (vorher 842).
  - Seiten mit mehr Inhalt sind länger, auf Mobile bis rund 1800 px (Performance Marketing, KI-Agenten).
- **Technik:** Typecheck, 36/36 Tests und Build (73 Seiten) laufen durch.

## Zu prüfen durch den Inhaber
- **Rückspielen von CRM-Daten:** Conversions aus dem CRM an Google, Meta, LinkedIn und TikTok (Offline-Conversions, Conversions API), Margenwerte und das Signal «Neukunde» sind auf mehreren Seiten jetzt zentral.
- **Kleine automatische Korrekturen:** Ein Agent korrigiert innerhalb fester Grenzen selbst, etwa beim Ausschliessen von Suchbegriffen.
- **Prüfprozesse:** GEO-Prüfung mit festem Fragenset und tägliche Hinweise auf Abweichungen.
- **Branchenbeispiele:** Ausschreibungen und Baugesuche sichten, Ticketdaten auswerten, Antworten mit Verfügbarkeit aus dem PMS, Dokumentextraktion (Treuhand, Gesundheit, Logistik, Mieterdossiers), Matching in der Personalvermittlung.
- **Automatische Antworten auf den Landingpages:** Eingangsbestätigungen, Terminvorschläge und Absagen laufen mit Vorlagen, die der Kunde einmal freigibt. Die einzelne Nachricht wird nicht freigegeben.
- **Entfernte Branchenvorteile:** Einzelne Vorteile sind durch Anwendungsfälle ersetzt, zum Beispiel «Entlastung des Aussendiensts» (Industrie) und «Mehr Umsatz pro Aufenthalt» (Hotellerie).
- **Werkzeugnamen:** n8n und Windmill stehen jetzt auf einigen Seiten.
