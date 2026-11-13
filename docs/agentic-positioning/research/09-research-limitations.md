# 09 Einschränkungen, Konflikte und Freigabeliste

Stand 14.11.2026.

## 1. Grenzen der Quellenanalyse
- **Fünf Kapitel des Sammelbands nur teilweise gelesen** (Green Marketing, Neuromarketing, Marketing Education, Retail Spaces, Virtual Influencers). Sie sind für Marketing, Sales und Processes von tiefer Relevanz. Die genauen Seiten stehen in `01-source-inventory.md`.
- **Literaturverzeichnisse** wurden überflogen, nicht systematisch geprüft. Ausnahme: das Sales-Force-Kapitel, dessen Quellen hinter den Zahlen gezielt geprüft wurden.
- **Grafiken** (BCG-Exhibits, AIB-Abbildungen, einzelne Figuren im Sammelband) sind im Textextrakt nicht enthalten.
- **Seitenangaben** sind PDF-Seiten der Dateien. Bei den Sammelband-Kapiteln entspricht das nicht der gedruckten Seitenzählung des Bandes.
- **Sekundärzitate** (z. B. Lambrecht & Tucker 2019, Ali et al. 2019, MIT NANDA 2025, Gonzalez/Habel/Hunter 2026) wurden nicht im Original gelesen. Vor einer öffentlichen Nennung ist das Original zu prüfen.

## 2. Evidenzqualität
- **Keine Quelle liefert Feldevidenz zur Wirkung von LLM-Agenten in Marketing oder Vertrieb von KMU.**
- **Anbieter- und Beratungspublikationen** (PwC, BCG, Omnibound) stützen sich auf eigene Umfragen grosser Unternehmen ohne offengelegte Methodik. Die Werte sind nicht auf Schweizer KMU übertragbar.
- **Simulationsergebnisse** (Mehta et al.) beruhen auf synthetischen Daten und sind als Beleg unbrauchbar.
- **Praxisbuch Funke:** keine Literaturangaben, alle Zahlen illustrativ, teils widersprüchlich (Amortisation 12–18 Monate vs. 2 Jahre im eigenen Beispiel).
- **Sammelband:** kein Kapitel mit eigener Primärempirie. Mehrere Kapitel denken KI noch vor den Sprachmodellen.

## 3. Begriffskonflikte und gewählte Lösung
| Konflikt | Quellen | Entscheid performanceboost |
|---|---|---|
| Was ist ein Agent? | MMA sehr breit, Mehta RL-Policy, Thapa LLM mit Werkzeugschleife | Thapa: Wahrnehmen, Abwägen, Handeln, Ergebnis prüfen. Integration ist kein Agent |
| Augmentation | Thapa unterste Stufe, Omnibound Ziel | Begriff nicht verwenden |
| Orchestrierung | MMA doppelt, PwC Steuerschicht, BCG «Schwarm» | Workflow-Orchestrierung und Agenten-Orchestrierung strikt trennen |
| AEO | BCG «Agentic Engine Optimization», sonst «Answer Engine Optimization» | nur GEO verwenden |
| Autonomiestufen | 3, 5 oder eigene Stufen, kein Standard | eigene fünf Stufen (Regel, KI, agentischer Workflow, begrenzter Spielraum, Freigabe) |
| Human-on-the-Loop | in keiner Quelle | eigene Definition, nur in FAQ/Fachartikel |
| Handelt oder empfiehlt der Agent? | Omnibound widersprüchlich, AIB «handelt im Namen der Marke» | Stufe pro Aufgabe explizit benennen |
| Rechtslage EU AI Act | Sammelband uneinheitlich, teils fehlerhaft (Green: Marketing-KI «high-risk»; Neuromarketing: Entwurf 2021) | keine Rechtsaussagen aus den Quellen, DSG massgeblich, keine Rechtsberatung |

## 4. Lücken in der Literatur (durch eigene Fachposition gefüllt, als solche kennzeichnen)
- Schweizer Datenschutzgesetz (DSG), Datenstandort Schweiz/EU.
- LLM-spezifische Betriebsrisiken: Prompt Injection, Datenabfluss an Modellanbieter, Modellwechsel.
- Kosten pro Fall und Gesamtkosten (TCO) von Agenten.
- KMU im B2B-Dienstleistungsbereich, Schweiz.
- Belastbare Evidenz zu GEO-Taktiken.
- Agentic Sales mit Sprachmodellen (in der Literatur nur Ausblick). Primärquelle zum Nachziehen: Gonzalez, Habel & Hunter (2026), Journal of Business Research.

## 5. Nicht verwendbare Aussagen (Auswahl)
Keine dieser Zahlen wird auf der Website als erwartbares Ergebnis oder als Fakt genannt:
- «40–60 % schneller», «Testkapazität verdoppelt», «Faktor 150 günstiger» (CMA, ohne Quelle).
- «3× ROI», «10× schnellere Kampagnenzyklen», «20–30 % Kosteneffizienz» (BCG-Projektbeobachtungen).
- «−30 % Servicekosten bis 2029» (PwC-Projektion), Agentic-Commerce-Prognosen.
- MAAMS-Werte (95,4 % Accuracy, CTR 11,5 %, ROI 7,2).
- Conversion 12–15 % → 18–22 %, Zyklus 45 → 30 Tage, Forecast 80–90 % (Sales Force, ohne Quelle).
- «+23 % Umsatz», «+17 % Markenbekanntheit», «+2390 % Leads» (Sammelband, Sekundärzitate).
- «80 % der Prozesszeit ist Wartezeit», «Amortisation in 12–18 Monaten», «Rechnungsprüfung von 3–4 Minuten auf 30 Sekunden» (Funke, illustrativ).
- Marktgrössenprognosen für AI Agents.

## 6. Freigabeliste für den Inhaber
Aussagen, deren Lieferfähigkeit vor der Veröffentlichung bestätigt werden muss. Status auf der Website nach dieser Überarbeitung in der letzten Spalte.

| # | Aussage | Wo | Einstufung | Website nach Überarbeitung |
|---|---|---|---|---|
| 1 | Aufträge und qualifizierte Anfragen aus dem CRM an Google, Meta, LinkedIn zurückspielen | Performance Marketing, Tracking, Lead-Generierung | technisch plausibel, je Plattform zu bestätigen | als Leistung «wo die Plattform es zulässt» |
| 2 | Margenwerte und Neukundensignal an Plattformen | E-Commerce, D2C, Paid Social | plausibel, abhängig von Shop/ERP-Daten | als Leistung mit Voraussetzung |
| 3 | TikTok-Anbindung | Paid Social | zu bestätigen | als Leistung mit Voraussetzung |
| 4 | Agent schliesst Suchbegriffe selbst aus (in Limits) | Performance Marketing | zu bestätigen | nur als Möglichkeit «nach einer Bewährungsphase» |
| 5 | GEO-Prüfung mit festem Fragenset | Lead-Generierung | plausibel | als Leistung, ohne Garantie |
| 6 | Tägliche Abweichungshinweise | Tracking, Performance | plausibel | als Leistung |
| 7 | Dokumenten-Agent | KI-Agenten | plausibel | als Leistung, Stufe genannt |
| 8 | Ausschreibungen und Baugesuche sichten | Ingenieurbüros | Datenquellen klären | als Beispiel |
| 9 | Ticketdaten auswerten | IT-Dienstleister | Zugriff klären | als Beispiel, auf Wunsch |
| 10 | Antworten mit PMS-Verfügbarkeit | Hotellerie | Schnittstelle klären | als Beispiel |
| 11 | Dokumentextraktion Treuhand, Gesundheit, Logistik, Mieterdossiers | Branchen | technisch plausibel, Datenschutz pro Fall | als Beispiel |
| 12 | Matching in der Personalvermittlung | Personalvermittlung | sensibel | als Beispiel, Kunde legt Kriterien fest |
| 13 | Automatische Eingangsbestätigungen, Terminvorschläge und Absagen mit einmal freigegebenen Vorlagen | Kampagnen-Landingpages | Entscheid zur Freigaberegel | so formuliert, Entscheid offen |
| 14 | Nennung von n8n und Windmill | mehrere Seiten | eigene Praxis belegt | belassen, als Beispiele für Plattformen |
