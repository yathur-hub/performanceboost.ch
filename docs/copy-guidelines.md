# Textleitfaden performanceboost.ch

Gilt für alle Website-Texte. Zielleser: Geschäftsführer/in eines Schweizer KMU (ab ca. CHF 1 Mio. Umsatz), der/die digitale Neukundengewinnung professionalisieren will und wenig Zeit hat.

## Positionierung (in einem Satz)
performanceboost hilft Schweizer KMU, über Google, Meta, LinkedIn und die eigene Website planbar qualifizierte Kundenanfragen zu gewinnen: mit Kampagnen, Landingpages, sauberem Tracking und Automatisierung aus einer Hand, umgesetzt persönlich von Inhaber Yathur Nathan.

## Sprache
- **Sie-Form**, durchgehend. Keine Du-Ansprache (auch nicht in Tools, Buttons, Fehlermeldungen). Possessiva anpassen: «dein» → «Ihr», «deine Kunden» → «Ihre Kunden», Verben konjugieren («Erkennst du» → «Erkennen Sie»).
- **Schweizer Hochdeutsch**: immer «ss», nie «ß». «innert» statt «innerhalb» ist erlaubt. Zahlen: 1'000 (Apostroph), «CHF 5'000».
- Deutsch zuerst. Englische Begriffe nur, wenn sie im Schweizer KMU-Alltag üblich sind (Google Ads, Landingpage, Tracking, CRM, E-Mail, Leads). Ersetzen bzw. beim ersten Auftreten erklären:
  - Revenue → Umsatz; Pipeline → Anfragen/Verkaufschancen; Demand Generation → Nachfrage aufbauen; RevOps/Revenue Operations → Zusammenspiel von Marketing, Vertrieb und Daten; Go-to-Market → Markteintritt/Vermarktung; ICP → Wunschkunde/Zielkundenprofil; Funnel/Trichter → Anfrageprozess; Close Rate → Abschlussquote; Outbound/Prospecting → Direktansprache; Nurturing → Interessenten weiterbegleiten; Playbook → Leitfaden; Hebel → wo sinnvoll beibehalten, aber nicht in jedem Satz.
- Natürlich, ruhig, kompetent. Wie ein erfahrener Berater, der etwas am Tisch erklärt. Sätze dürfen unterschiedlich lang sein.

## Verboten
- Erfundene oder unbelegte Zahlen und Ergebnisse: z.B. «+40% ROI», «3.4x Pipeline», «−60% Ramp-up», «+35% Close Rate», «Reply-Quote 18%», «95% kaufen nicht». **Löschen** oder in eine ehrliche, nicht-numerische Aussage umformulieren. Branchenübliche Rechenbeispiele in Rechnern sind ok, wenn sie als Beispiel/Annahme gekennzeichnet sind.
- Erfundene Kundenfälle, Logos, Zertifizierungen, Garantien, «Track Record»-Behauptungen.
- Fake-Verknappung («Heute verfügbar», «nur 3 Plätze»), Pseudo-Versionsnummern («PRO-LEVEL v4.0»).
- KI-typische Muster: Dreier-Stakkato («Innovativ. Digital. Erfolgreich.»), «Kein X. Kein Y. Kein Z.», leere Superlative («messerscharf», «unschlagbar», «erstklassig», «exzellent», «makellos»), «auf das nächste Level», «nahtlos», «ganzheitlich» als Füllwort, Gedankenstrich-Ketten, rhetorische Fragen ohne Antwort, «Substanz statt Lärm»-Slogans, ALL-CAPS-Pseudolabels in Englisch («SYSTEMATIC GROWTH ARCHITECTURE»).
- Gedankenstriche (—) sparsam; lieber Punkt oder Komma.

## Gut
- Konkret: Was wird gemacht, für wen, mit welchem Ergebnis für den Kunden, woran misst man es.
- Kundennutzen vor Methode.
- Ehrliche Erwartungen: «Bei Google Ads sehen Sie meist nach 4–8 Wochen belastbare Daten.» statt Versprechen.
- CTAs: «Erstgespräch vereinbaren», «Anfrage senden», «Mehr zu …», «Rechner starten». Nicht: «Jetzt Wachstum entfesseln».

## Beispiel
Schlecht: «Wir entwickeln innovative, datengetriebene Marketingstrategien für nachhaltiges Wachstum.»
Gut: «Wir helfen Schweizer Unternehmen, über Google und Social Media neue Kunden zu gewinnen, mit klaren Zielen, sauberer Messung und laufender Optimierung.»

## Technisch
- Nur Texte ändern (Strings, JSX-Text, Labels, aria-labels, Platzhalter). Keine Logik, keine Props, keine Klassen, keine Event-Namen, keine Slugs/IDs/Keys ändern.
- Felder wie `metrics: [...]` in Datenobjekten: leeres Array `[]` setzen, wenn die Zahlen unbelegt sind (Typ bleibt gültig).
- Nach den Änderungen muss `npx tsc --noEmit` fehlerfrei laufen.
