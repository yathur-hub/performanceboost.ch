import { ExtendedServiceContent } from '../types';

export const EXTENDED_SERVICES_DATA: ExtendedServiceContent[] = [
  {
    slug: 'ai-automation',
    hero: {
      headline: 'AI ist kein Experiment. Es ist ein Produktivitätshebel — wenn man es sinnvoll einsetzt.',
      subheadline: 'Wir implementieren AI-gestützte Workflows, die Recherche, Personalisierung, Content und Analyse beschleunigen. Nicht als Technologie-Gimmick, sondern mit direktem Einfluss auf dein Wachstum.',
      ctaText: 'AI-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'AI ist überall — aber die meisten Unternehmen nutzen es nicht strategisch.',
        'Einzelne Mitarbeiter nutzen ChatGPT für Texte. Aber keine Integration in Prozesse. Keine skalierbare Nutzung. Kein messbarer Impact.',
        'Oder das Gegenteil: Investitionen in AI-Tools, die niemand wirklich nutzt.',
        'Der Gap zwischen AI-Hype und AI-Nutzen ist gross. Wir überbrücken ihn.'
      ]
    },
    leistet: {
      title: 'WO AI WACHSTUM BESCHLEUNIGT',
      items: [
        {
          title: 'Personalisierung at Scale',
          desc: 'AI ermöglicht personalisierte Kommunikation mit Hunderten von Leads — ohne dass jemand jeden Kontakt manuell bearbeitet. Personalisierte E-Mail-Sequenzen, dynamische Website-Inhalte, massgeschneiderte Angebote.'
        },
        {
          title: 'Content-Produktion beschleunigen',
          desc: 'Nicht AI statt Menschen — sondern AI für die Arbeit, die keine Kreativität braucht. Research, Erstentwürfe, Varianten, Übersetzungen. Dein Team fokussiert auf Strategie und Qualitätssicherung.'
        },
        {
          title: 'Lead-Recherche und Enrichment',
          desc: 'AI-gestützte Tools, die Prospects automatisch recherchieren, qualifizieren und mit relevanten Informationen anreichen. Dein Sales-Team geht in Gespräche vorbereitet.'
        },
        {
          title: 'Chatbots und Conversational AI',
          desc: '24/7 Lead-Qualifizierung auf deiner Website. Nicht generische Chatbots — sondern spezifische Flows, die Interesse erkennen und qualifizieren.'
        },
        {
          title: 'Datenanalyse und Insights',
          desc: 'AI-gestützte Analyse von Verkaufsgesprächen, Customer Feedback, Markttrends. Erkenntnisse, die manuell Wochen dauern würden — in Minuten.'
        },
        {
          title: 'Workflow-Automation mit AI',
          desc: 'Repetitive Prozesse automatisieren: E-Mail-Klassifizierung, Datenbereinigung, Report-Generierung, Meeting-Nachbereitung. Zeit zurückgewinnen für was wirklich zählt.'
        }
      ]
    },
    approach: {
      title: 'WIE WIR VORGEHEN',
      items: [
        {
          title: 'Phase 1: AI-Readiness-Assessment',
          desc: 'Wo sind die grössten Zeitkiller in euren Prozessen? Wo würde Geschwindigkeit helfen? Welche Daten habt ihr, die AI nutzen kann?'
        },
        {
          title: 'Phase 2: Use-Case-Priorisierung',
          desc: 'Nicht alles gleichzeitig. Wir identifizieren die 3-5 AI-Anwendungsfälle mit dem grössten Impact für euer Wachstum.'
        },
        {
          title: 'Phase 3: Implementation',
          desc: 'Wir integrieren AI in bestehende Prozesse und Tools. Kein isoliertes Experiment — sondern eingebettet in euren Workflow.'
        },
        {
          title: 'Phase 4: Training und Adoption',
          desc: 'Dein Team muss die Tools wirklich nutzen. Wir begleiten die Adoption mit Training, Best Practices und laufender Unterstützung.'
        },
        {
          title: 'Phase 5: Messung und Iteration',
          desc: 'Zeitersparnis, Lead-Qualität, Conversion-Rates — wir messen, ob AI wirklich wirkt. Und optimieren laufend.'
        }
      ]
    },
    extraSections: [
      {
        title: 'TOOLS UND TECHNOLOGIEN',
        type: 'grid',
        subtitle: 'Wir sind tool-agnostisch und arbeiten mit dem, was Sinn macht.',
        items: [
          { title: 'Large Language Models', desc: 'GPT-4, Claude, Gemini — für Content, Research, Analyse.' },
          { title: 'AI-Enrichment', desc: 'Clay, Apollo, Clearbit — für Lead-Daten und Personalisierung.' },
          { title: 'Automation', desc: 'Make, Zapier, n8n — für workflow-basierte AI-Integration.' },
          { title: 'Conversational AI', desc: 'Intercom, Drift, Tidio — für Website-Chatbots.' },
          { title: 'Sales AI', desc: 'Gong, Chorus, Salesforce Einstein — für Gesprächsanalyse.' },
          { title: 'Content AI', desc: 'Jasper, Copy.ai, proprietäre Workflows — für Content-Beschleunigung.' }
        ]
      },
      {
        title: 'WAS AI NICHT ERSETZT',
        type: 'text',
        text: 'Transparenz ist uns wichtig. AI ersetzt keine Strategie. Kein menschliches Urteilsvermögen. Keine Beziehungen zu Kunden. AI beschleunigt Ausführung. Verbessert Personalisierung. Analysiert Daten schneller. Aber die strategischen Entscheidungen — was, warum, für wen — treffen Menschen. Wir helfen dir, AI dort einzusetzen, wo es Sinn macht. Nicht überall.'
      }
    ],
    faq: [
      {
        q: 'Brauchen wir technisches Know-how im Team?',
        a: 'Nicht zwingend. Viele AI-Implementierungen funktionieren mit No-Code-Tools und brauchen nur grundlegendes Verständnis. Wo Technik nötig ist, begleiten wir die Umsetzung.'
      },
      {
        q: 'Wie schnell sehen wir Ergebnisse?',
        a: 'Einfache Automations: 1-2 Wochen. Komplexere Integrationen: 4-8 Wochen bis vollständige Nutzung.'
      },
      {
        q: 'Was kostet AI-Tooling?',
        a: 'Die meisten AI-Tools sind günstig — oft unter CHF 200/Monat für das Tool-Licensing. Der Hauptinvestment ist in Setup und Training.'
      },
      {
        q: 'Wie stellt ihr sicher, dass AI-generierter Content Qualität hat?',
        a: 'Wir bauen Qualitätssicherungs-Prozesse ein. AI liefert Entwürfe — Menschen überprüfen und finalisieren. Das ist der Standard.'
      }
    ],
    cta: {
      headline: 'Produktivität steigern. Wachstum beschleunigen. Mit AI, die wirklich hilft.',
      subheadline: '30 Minuten. Wir besprechen, welche AI-Use-Cases für euer Unternehmen am meisten Sinn machen.',
      buttonText: 'AI-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'data-analytics',
    hero: {
      headline: 'Wachstum steuern, nicht hoffen. Mit Daten, die wirklich entscheiden.',
      subheadline: 'Wir bauen die Daten-Infrastruktur, die dir jederzeit zeigt, was funktioniert, was nicht — und wo Revenue verloren geht.',
      ctaText: 'Daten-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Die meisten Unternehmen haben genug Daten. Sie haben zu wenig Klarheit.',
        'Tools, die Daten sammeln — aber kein Reporting, das Entscheidungen unterstützt. Metriken, die niemand versteht oder nutzt. Dashboards, die Aktivität zeigen, aber nicht Revenue. Attribution-Chaos: Niemand weiss, welcher Kanal wirklich funktioniert.',
        'Das Resultat: Entscheidungen auf Basis von Bauchgefühl. Und Budget, das in die falsche Richtung fliesst.'
      ]
    },
    leistet: {
      title: 'WAS DATA & ANALYTICS LEISTET',
      items: [
        {
          title: 'Tracking-Infrastruktur aufbauen',
          desc: 'Was wird gemessen? Was sollte gemessen werden? Wir implementieren ein sauberes Tracking-Fundament — Google Analytics 4, Event-Tracking, Conversion-Tracking, CRM-Integration.'
        },
        {
          title: 'Attribution-Modelle implementieren',
          desc: 'Welcher Kanal, welcher Touchpoint hat zum Abschluss beigetragen? Wir implementieren Attribution-Modelle, die realistisch und entscheidungsrelevant sind.'
        },
        {
          title: 'Dashboard-Aufbau',
          desc: 'Ein Dashboard, das in 5 Minuten die wichtigsten Fragen beantwortet. Keine Daten-Friedhöfe — sondern Entscheidungsgrundlagen. Wöchentlich, monatlich, pro Initiative.'
        },
        {
          title: 'Funnel-Analyse',
          desc: 'Wo verlierst du Leads? Wo bricht der Sales-Zyklus ab? Funnel-Analyse, die genau zeigt, wo Revenue entgeht — und welche Hebel am stärksten wirken.'
        },
        {
          title: 'ROI-Messung',
          desc: 'Marketing-ROI transparent machen. Welche Kampagne, welcher Kanal, welche Massnahme — und was bringt sie wirklich? In CHF, nicht in Klicks.'
        },
        {
          title: 'A/B-Testing-Infrastruktur',
          desc: 'Hypothesenbasiertes Testen. Nicht zufällige Änderungen — sondern strukturiertes Testing mit statistisch validen Ergebnissen.'
        },
        {
          title: 'Regelmässiges Reporting',
          desc: 'Monatliche und quartalsweise Reports, die deinem Führungsteam zeigen, wo das Unternehmen steht und was die nächste Priorität ist.'
        }
      ]
    },
    approach: {
      title: 'UNSER VORGEHEN',
      items: [
        {
          title: 'Phase 1: Daten-Audit',
          desc: 'Was wird heute gemessen? Was fehlt? Wo sind Datenlücken oder -fehler? Wir prüfen Tracking, CRM-Daten, Reporting-Strukturen.'
        },
        {
          title: 'Phase 2: Metriken-Architektur',
          desc: 'Welche Metriken sind für euer Wachstumsziel relevant? Nicht alles messen — sondern das Richtige. North Star Metric, Leading Indicators, Lagging Indicators.'
        },
        {
          title: 'Phase 3: Infrastruktur-Aufbau',
          desc: 'Tracking implementieren, Datenquellen verbinden, Dashboards bauen. Technisch sauber, für Menschen verständlich.'
        },
        {
          title: 'Phase 4: Adoption und Interpretation',
          desc: 'Das beste Dashboard bringt nichts, wenn es niemand liest. Wir trainieren dein Team, Daten zu interpretieren und Entscheidungen darauf zu stützen.'
        },
        {
          title: 'Phase 5: Laufende Analyse',
          desc: 'Monatliche Analysen, die Trends erkennen, Anomalien aufdecken und Optimierungsempfehlungen liefern.'
        }
      ]
    },
    extraSections: [
      {
        title: 'TOOLS, MIT DENEN WIR ARBEITEN',
        type: 'grid',
        items: [
          { title: 'Analytics', desc: 'Google Analytics 4, Mixpanel, Heap' },
          { title: 'Dashboards', desc: 'Looker Studio, Tableau, Power BI, HubSpot Dashboards' },
          { title: 'Attribution', desc: 'Triple Whale, Northbeam, Google Analytics Attribution' },
          { title: 'Tracking', desc: 'Google Tag Manager, Segment' },
          { title: 'CRM-Analytics', desc: 'HubSpot, Salesforce Reports, Pipedrive Insights' },
          { title: 'Testing', desc: 'Google Optimize, VWO, Optimizely' }
        ]
      }
    ],
    faq: [
      {
        q: 'Brauchen wir einen Daten-Spezialisten im Team?',
        a: 'Nicht unbedingt. Wir bauen Systeme, die ein Marketing-Manager ohne Daten-Background bedienen kann. Für komplexere Anforderungen begleiten wir laufend.'
      },
      {
        q: 'Unsere Daten sind ein Chaos — kann man das reparieren?',
        a: 'Ja, aber es braucht Zeit. Daten-Bereinigung ist kein Glamour-Projekt, aber der Grundstein für alles andere. Wir starten dort — systematisch.'
      },
      {
        q: 'Wie oft sollen wir auf Daten schauen?',
        a: 'Taktisch: täglich oder wöchentlich für operative Entscheidungen. Strategisch: monatlich und quartalsweise. Wir helfen, den richtigen Rhythmus zu etablieren.'
      },
      {
        q: 'Was wenn wir noch kein Tracking haben?',
        a: 'Dann starten wir dort. Kein Fundament, kein Wachstum steuern. Ein sauberes Tracking-Setup ist die erste Priorität.'
      }
    ],
    cta: {
      headline: 'Entscheidungen auf Basis von Fakten — nicht von Hoffnung.',
      subheadline: '30 Minuten. Wir schauen auf eure aktuelle Daten-Situation und zeigen, was möglich ist.',
      buttonText: 'Daten-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'demand-generation',
    hero: {
      headline: 'Dein Vertrieb wartet auf Leads. Wir liefern sie — systematisch.',
      subheadline: 'Demand Generation, die nicht auf Hoffnung basiert. Wir erzeugen qualifizierte Nachfrage über mehrere Kanäle — koordiniert, messbar, skalierbar.',
      ctaText: 'Pipeline-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Die meisten B2B-Unternehmen haben dasselbe Problem:',
        'Der Vertrieb verbringt zu viel Zeit damit, Pipeline aufzubauen — statt zu verkaufen. Marketing schaltet Kampagnen, die Klicks bringen, aber keine qualifizierten Leads. Niemand weiss genau, welcher Kanal wirklich funktioniert.',
        'Das ist kein Kanal-Problem. Das ist ein System-Problem. Demand Generation löst das — wenn sie strategisch aufgebaut wird.'
      ]
    },
    leistet: {
      title: 'WAS DEMAND GENERATION LEISTET',
      items: [
        {
          title: 'Zielgruppen-Schärfung',
          desc: 'Wen wollen wir wirklich erreichen? Welche Unternehmen? Welche Entscheider? In welcher Phase ihrer Kaufentscheidung? Präzises Targeting schlägt breite Reichweite.'
        },
        {
          title: 'Multi-Channel-Koordination',
          desc: 'LinkedIn Ads, Google Ads, Paid Social, Content, Email, SEO — nicht als Inseln, sondern als koordiniertes System. Jeder Kanal hat eine Rolle im Funnel.'
        },
        {
          title: 'Funnel-Aufbau',
          desc: 'Awareness, Consideration, Decision. Wir begleiten potenzielle Kunden durch alle Phasen — mit den richtigen Botschaften zur richtigen Zeit.'
        },
        {
          title: 'Creative-Testing',
          desc: 'Nicht eine Botschaft für alle. Wir testen Hypothesen: Welche Botschaft, welches Format, welcher Hook funktioniert für deine Zielgruppe? Daten entscheiden, nicht Bauchgefühl.'
        },
        {
          title: 'Paid Media Management',
          desc: 'Google Search, LinkedIn Ads, Meta Ads — professionell verwaltet, täglich optimiert. Budget wird auf das gelenkt, was wirklich konvertiert.'
        },
        {
          title: 'Kontinuierliche Optimierung',
          desc: 'Wöchentliche Analyse. Monatliche Reportings. Was funktioniert, skalieren wir. Was nicht, stoppen wir.'
        }
      ]
    },
    approach: {
      title: 'UNSER ANSATZ: KLAR',
      items: [
        {
          title: 'K — Kontext verstehen',
          desc: 'Wir analysieren dein Geschäft, deine Zielgruppe und deine bestehende Pipeline. Wo kommen Leads heute her? Wo verlierst du Potential?'
        },
        {
          title: 'L — Lücken identifizieren',
          desc: 'Welche Kanäle sind ungenutzt? Welche Zielgruppen werden nicht erreicht? Wo bricht der Funnel ab?'
        },
        {
          title: 'A — Ansatz definieren',
          desc: 'Welche Kanäle, welche Budgets, welche Prioritäten? Nicht Standard-Pakete — sondern was für dein spezifisches Wachstumsziel Sinn macht.'
        },
        {
          title: 'R — Resultate messen',
          desc: 'Cost-per-Lead, Conversion Rate, Pipeline-Volumen, ROAS. Du siehst jederzeit, was dein Investment bringt.'
        }
      ]
    },
    extraSections: [
      {
        title: 'KANÄLE, DIE WIR EINSETZEN',
        type: 'grid',
        subtitle: 'Wir wählen Kanäle nach Eignung — nicht nach Präferenz.',
        items: [
          { title: 'LinkedIn Ads', desc: 'Der effektivste B2B-Kanal für präzises Targeting nach Unternehmensgrösse, Rolle und Branche. Ideal für mittlere und längere Sales-Zyklen.' },
          { title: 'Google Search Ads', desc: 'Für kaufbereite Zielgruppen, die aktiv nach Lösungen suchen. Höchste Conversion Intent. Ideal als Boden-des-Funnels-Kanal.' },
          { title: 'Meta Ads (Facebook & Instagram)', desc: 'Für Awareness, Retargeting und Zielgruppen, die noch nicht aktiv suchen. Günstigere Reichweite, die mit anderen Kanälen koordiniert wird.' },
          { title: 'Google Display & Programmatic', desc: 'Für Wiedererkennung und Retargeting. Deine Marke bleibt sichtbar, während potenzielle Kunden recherchieren.' },
          { title: 'Content & SEO', desc: 'Langfristiger Demand-Aufbau über organische Sichtbarkeit. Content, der kaufbereite Besucher anzieht.' },
          { title: 'Email & Newsletter', desc: 'Nurturing bestehender Leads und Aufbau einer eigenen Audience. Direkter Kanal ohne Algorithmus-Abhängigkeit.' }
        ]
      },

      {
        title: 'INVESTITION',
        type: 'investment',
        subtitle: 'Demand Generation ist kein Kostenpunkt. Es ist eine Investition mit messbarem Return.',
        items: [
          { title: 'Einstieg', desc: 'Ab CHF 2\'000/Monat', extra: 'Für: Erste Pipeline-Aufbau, 1-2 Kanäle, klarer Fokus.' },
          { title: 'Ausbau', desc: 'CHF 4\'000-8\'000/Monat', extra: 'Für: Multi-Channel, kontinuierliche Optimierung, skalierbare Pipeline.' },
          { title: 'Skalierung', desc: 'CHF 8\'000+/Monat', extra: 'Für: Vollständige Demand Generation Infrastruktur, mehrere Märkte oder Zielgruppen.' }
        ],
        text: 'Ad-Budget und Management-Fee transparent getrennt — du weisst immer, was wohin fliesst.'
      }
    ],
    faq: [
      {
        q: 'Wann sehen wir erste Resultate?',
        a: 'Bei Paid Media: Erste Daten in 1-2 Wochen, optimierte Ergebnisse ab Woche 4-6. Organische Kanäle brauchen 3-6 Monate. Wir kombinieren beides — schnelle Leads jetzt, nachhaltige Pipeline langfristig.'
      },
      {
        q: 'Welche Kanäle sind für uns richtig?',
        a: 'Das hängt von deiner Zielgruppe und deinem Sales-Zyklus ab. Wir analysieren das im Erstgespräch und empfehlen, was für dich Sinn macht — nicht was gerade im Trend ist.'
      },
      {
        q: 'Brauchen wir ein grosses Budget?',
        a: 'Nein. Mit fokussiertem Budget und richtiger Strategie kann man schon ab CHF 500/Monat qualifizierte Leads generieren. Der Schlüssel ist Präzision, nicht Volumen.'
      },
      {
        q: 'Was unterscheidet euch von einer Werbeagentur?',
        a: 'Wir denken in Pipeline und Revenue — nicht in Klicks und Impressionen. Wir messen, was deinen Vertrieb wirklich bewegt. Und wir verbinden Demand Generation mit deinen Sales-Prozessen.'
      }
    ],
    cta: {
      headline: 'Dein Vertrieb verdient eine konstante Pipeline.',
      subheadline: '30 Minuten. Wir analysieren deine aktuelle Situation und zeigen dir, wie eine Demand Generation Strategie für dein Unternehmen aussehen würde.',
      buttonText: 'Pipeline-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'growth-strategy',
    hero: {
      headline: 'Wachstum braucht eine Richtung. Ohne Strategie ist jede Massnahme Zufall.',
      subheadline: 'Wir entwickeln deine Go-to-Market-Strategie — mit klaren Prioritäten, definierten Zielgruppen und einem Wachstumsplan, den dein Team umsetzen kann.',
      ctaText: 'Strategiegespräch buchen (kostenlos)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Die meisten Unternehmen wachsen reaktiv.',
        'Ein Kanal funktioniert zufällig. Eine Kampagne bringt Leads. Aber kein System dahinter.',
        'Das Resultat: Wachstum ist nicht planbar. Nicht skalierbar. Nicht wiederholbar.',
        'Wenn du nicht weisst, woher dein Wachstum kommt — kannst du es nicht steuern.'
      ]
    },
    leistet: {
      title: 'WAS GROWTH STRATEGY LEISTET',
      items: [
        {
          title: 'Zielgruppen-Definition (ICP)',
          desc: 'Wer sind deine idealen Kunden wirklich? Nicht demografisch — sondern: Wer hat das Problem, das du löst? Wer ist kaufbereit? Wo stehen sie im Entscheidungsprozess?'
        },
        {
          title: 'Positionierung',
          desc: 'Warum sollte jemand dich wählen und nicht den Wettbewerb? Wir schärfen deine Positionierung auf ein klares Differenzierungsargument — das dein Team versteht und kommunizieren kann.'
        },
        {
          title: 'Go-to-Market-Plan',
          desc: 'Welche Kanäle? Welche Botschaften? Welche Prioritäten? Ein realistischer Plan mit Meilensteinen — kein 50-seitiger Strategiebericht, der in der Schublade landet.'
        },
        {
          title: 'Wachstumshebel priorisieren',
          desc: '80% des Wachstums kommen von 20% der Massnahmen. Wir identifizieren, welche 20% das für dich sind — und wo du dein Budget und deine Zeit einsetzen solltest.'
        },
        {
          title: 'Metriken definieren',
          desc: 'Was messen wir? Worauf optimieren wir? Wachstum braucht klare KPIs. Wir definieren, was Erfolg für dein Unternehmen bedeutet.'
        }
      ]
    },
    approach: {
      title: 'UNSER VORGEHEN',
      items: [
        {
          title: 'Phase 1: Diagnose (Woche 1-2)',
          desc: 'Wir analysieren deine aktuelle Situation. Markt, Wettbewerb, bestehende Kunden, Pipeline-Daten. Wo wächst du schon? Wo verlierst du Potential?'
        },
        {
          title: 'Phase 2: Strategie-Workshop (Woche 2-3)',
          desc: 'Gemeinsam erarbeiten wir ICP, Positionierung und Prioritäten. Das ist kein Monolog von uns — dein Team bringt das Kontextwissen, wir bringen die Struktur.'
        },
        {
          title: 'Phase 3: Wachstumsplan (Woche 3-4)',
          desc: 'Das Ergebnis: Ein klarer, umsetzbarer Plan. Mit Prioritäten, Zeitplan und Metriken. Kein abstraktes Strategiepapier — sondern eine Roadmap, die dein Team direkt nutzt.'
        },
        {
          title: 'Phase 4: Umsetzungsbegleitung (laufend)',
          desc: 'Strategie ohne Umsetzung ist wertlos. Wir begleiten die Umsetzung, helfen bei der Priorisierung und passen den Plan an, wenn sich die Realität ändert.'
        }
      ]
    },
    extraSections: [
      {
        title: 'ERGEBNIS',
        type: 'list',
        subtitle: 'Nach einer Growth Strategy Zusammenarbeit weisst du:',
        bullets: [
          'Wer dein idealer Kunde is — präzise, nicht vage',
          'Was dich vom Wettbewerb unterscheidet — klar kommunizierbar',
          'Welche Kanäle und Massnahmen priorisiert werden',
          'Welche Metriken Wachstum messen',
          'Was der nächste konkrete Schritt ist'
        ],
        text: 'Das ist der Unterschied zwischen reaktivem Wachstum und gesteuertem Wachstum.'
      }
    ],
    faq: [
      {
        q: 'Brauchen wir wirklich eine Strategie, bevor wir Massnahmen umsetzen?',
        a: 'Ja — wenn du planbar wachsen willst. Massnahmen ohne Strategie können zufällig funktionieren. Aber nicht systematisch skalieren. Eine klare Strategie macht jede Folgemassnahme effektiver.'
      },
      {
        q: 'Wie lang dauert eine Growth Strategy?',
        a: 'Der initiale Strategie-Sprint dauert 3-4 Wochen. Die Umsetzungsbegleitung ist laufend — je nach Bedarf monatlich oder quartalsweise.'
      },
      {
        q: 'Was ist der Unterschied zu einem klassischen Strategieberater?',
        a: 'Wir entwickeln Strategie und begleiten die Umsetzung. Keine Theorie ohne Praxis. Kein Bericht ohne Konsequenz. Wir bleiben im Spiel, bis die Strategie wirkt.'
      },
      {
        q: 'Wie viel kostet eine Growth Strategy?',
        a: 'Das besprechen wir im Erstgespräch. Abhängig von Umfang und Komplexität — transparent, ohne Überraschungen.'
      }
    ],
    cta: {
      headline: 'Wachstum planbar machen — mit einem klaren Plan.',
      subheadline: '30 Minuten. Wir besprechen deine aktuelle Situation und ob eine Growth Strategy der richtige nächste Schritt ist.',
      buttonText: 'Strategiegespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'lead-generation',
    hero: {
      headline: 'Aus anonymen Besuchern werden qualifizierte Interessenten.',
      subheadline: 'Wir bauen Lead-Generierungs-Systeme, die organisch und bezahlt funktionieren — mit Content, SEO und strukturierten Conversion-Pfaden, die Leads erfassen, bewerten und entwickeln.',
      ctaText: 'Lead-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Viele Unternehmen haben Traffic. Aber kaum Leads. Oder Leads, die nicht qualifiziert sind. Oder kein System, um Interesse in konkrete Anfragen zu verwandeln.',
        'Content wird produziert. Aber er rankt nicht. Konvertiert nicht. Bringt keine messbaren Ergebnisse.',
        'Lead Generation braucht mehr als gute Inhalte. Es braucht ein System.'
      ]
    },
    leistet: {
      title: 'WAS LEAD GENERATION LEISTET',
      items: [
        {
          title: 'Organische Sichtbarkeit aufbauen',
          desc: 'Content-Strategien und SEO, die für kaufbereite Zielgruppen sichtbar machen — nicht für Algorithmen. Keywords, die Absicht signalisieren, nicht nur Volumen haben.'
        },
        {
          title: 'Conversion-Pfade strukturieren',
          desc: 'Landing Pages, Lead-Magnete und Call-to-Actions, die aus Besuchern Leads machen. Nicht "Kontakt aufnehmen" als einzige Option — sondern ein gestuftes System für jede Kaufphase.'
        },
        {
          title: 'Lead-Magnete entwickeln',
          desc: 'Inhalte, die Leads erfassen, weil sie echten Wert liefern. Guides, Assessments, Tools, Checklisten — entwickelt für deine spezifische Zielgruppe.'
        },
        {
          title: 'Lead-Scoring implementieren',
          desc: 'Nicht jeder Lead is gleich wertvoll. Wir implementieren Scoring-Systeme, die Qualität priorisieren — damit dein Vertrieb Zeit in die richtigen Gespräche investiert.'
        },
        {
          title: 'SEO-Infrastruktur aufbauen',
          desc: 'Technisches SEO, Keyword-Strategie, Content-Cluster — eine organische Sichtbarkeit, die langfristig Leads bringt, ohne für jeden Klick zu zahlen.'
        },
        {
          title: 'Content-System strukturieren',
          desc: 'Nicht einzelne Blogposts. Ein Content-System, das Zielgruppen durch den Funnel begleitet — von Awareness bis Decision.'
        }
      ]
    },
    approach: {
      title: 'UNSER ANSATZ',
      items: [
        {
          title: '1. Zielgruppen-Analyse',
          desc: 'Wer ist dein ICP? Welche Probleme suchen sie zu lösen? Welche Keywords nutzen sie? Welche Inhalte helfen ihnen wirklich weiter?'
        },
        {
          title: '2. Content-Audit',
          desc: 'Was besteht bereits? Was rankt? Was konvertiert? Was fehlt? Wir bauen auf bestehender Arbeit auf — nicht von null.'
        },
        {
          title: '3. Keyword- und Content-Strategie',
          desc: 'Welche Themen? Welche Keywords? Welche Formate? Ein priorisierter Plan, der Ranking-Chancen mit Conversion-Absicht verbindet.'
        },
        {
          title: '4. Content-Produktion und Optimierung',
          desc: 'Inhalte, die für Menschen geschrieben sind — und für Suchmaschinen optimiert. SEO-Grundlagen: Struktur, interne Verlinkung, technische Qualität.'
        },
        {
          title: '5. Conversion-Optimierung',
          desc: 'Landing Pages testen. CTAs optimieren. Lead-Magnete evaluieren. Was bringt Leads, was nicht?'
        },
        {
          title: '6. Reporting',
          desc: 'Monatlich: Welche Inhalte ranken? Welche bringen Leads? Wo sind Lücken? Daten steuern die nächste Priorität.'
        }
      ]
    },
    extraSections: [

      {
        title: 'INVESTITION',
        type: 'investment',
        subtitle: 'Transparente Pakete für Content & SEO.',
        items: [
          { title: 'Content & SEO Starter', desc: 'CHF 1\'500/Monat', extra: '2 Artikel/Monat + technisches SEO + Reporting. Für: Erste Sichtbarkeit aufbauen.' },
          { title: 'Content & SEO Pro', desc: 'CHF 2\'500/Monat', extra: '4 Artikel/Monat + SEO-Infrastruktur + Conversion-Optimierung + Lead-Magnete. Für: Systematische Lead Generation.' },
          { title: 'Content & SEO Premium', desc: 'CHF 4\'000/Monat', extra: '8+ Artikel/Monat + vollständige Content-Strategie + Automation-Integration + Wöchentliche Optimierung. Für: Aggressives organisches Wachstum.' }
        ],
        text: 'Timeline: Erste Rankings: 3-6 Monate. Messbare Lead-Steigerung: 6-9 Monate. Ehrlich: Organisch braucht Zeit. Wir kombinieren es daher mit Demand Generation für sofortige Ergebnisse.'
      }
    ],
    faq: [
      {
        q: 'Wie lange bis erste Leads organisch kommen?',
        a: '3-4 Monate bis erste Rankings. 6-9 Monate bis messbare Lead-Steigerung. Das ist ehrlich — nicht schneller, aber dafür nachhaltig. Wir empfehlen, parallel Paid Demand Generation zu nutzen für sofortige Leads.'
      },
      {
        q: 'Was wenn meine Branche zu nischig ist?',
        a: 'Je nischiger, desto besser. Weniger Konkurrenz bedeutet schnellere Rankings. B2B-Nischen-Content rankt oft schneller als breite Keywords.'
      },
      {
        q: 'Kann ich das nicht selbst machen?',
        a: 'Ja. Du brauchst 15-20 Stunden pro Monat dafür. Das ist die ehrliche Rechnung. Wenn du diese Zeit lieber ins Kerngeschäft investierst — sind wir die richtige Unterstützung.'
      },
      {
        q: 'Brauchen wir auch Paid Media?',
        a: 'Nicht zwingend. Aber kombiniert ist es effektiver: Paid bringt sofortige Leads, Content baut langfristige Infrastruktur auf. Zusammen: schnell und nachhaltig.'
      }
    ],
    cta: {
      headline: 'Leads, die kommen — nicht nur Besucher, die gehen.',
      subheadline: '30 Minuten. Wir analysieren deine aktuelle Sichtbarkeit und zeigen, was möglich ist.',
      buttonText: 'Lead-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'marketing-automation',
    hero: {
      headline: 'Leads automatisiert entwickeln — ohne manuelle Prozesse.',
      subheadline: 'Marketing Automation und CRM-Strukturen, die dein Team entlasten, Leads nurturan und kaufbereite Interessenten an den Vertrieb übergeben. Skalierbar. Messbar. Ohne Chaos.',
      ctaText: 'Automation-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Leads kommen rein — und verschwinden dann. Kein Follow-up. Kein Nurturing. Kein System.',
        'Oder: Manuelle Prozesse, die viel Zeit kosten und fehleranfällig sind. Zu viele Tools, die nicht miteinander reden. CRM-Daten, die veraltet oder unvollständig sind.',
        'Das Resultat: Revenue-Potential, das ungenutzt bleibt.'
      ]
    },
    leistet: {
      title: 'WAS MARKETING AUTOMATION & CRM LEISTET',
      items: [
        {
          title: 'Lead-Nurturing automatisieren',
          desc: 'Automatische E-Mail-Sequenzen, die Leads mit relevanten Inhalten begleiten — basierend auf Verhalten, Interesse und Phase im Kaufprozess. Nicht Massen-Emails. Personalisiertes Nurturing.'
        },
        {
          title: 'Lead-Qualifizierung skalieren',
          desc: 'Scoring-Modelle, die automatisch bewerten, welche Leads kaufbereit sind. Dein Vertrieb bekommt die richtigen Leads zur richtigen Zeit.'
        },
        {
          title: 'CRM-Struktur aufbauen oder optimieren',
          desc: 'Ein CRM, das dein Team wirklich nutzt. Saubere Daten-Struktur, klare Pipeline-Stages, automatische Datenpflege. Kein Chaos, sondern Überblick.'
        },
        {
          title: 'Übergabeprozesse strukturieren',
          desc: 'Klare Kriterien, wann ein Lead vom Marketing an den Vertrieb übergeben wird. Keine verlorenen Leads mehr. Kein "Wir haben davon nichts gewusst."'
        },
        {
          title: 'Tool-Integration',
          desc: 'Deine bestehenden Tools — HubSpot, Salesforce, Pipedrive, Mailchimp, Intercom — werden verbunden. Daten fliessen automatisch. Keine manuelle Synchronisation.'
        },
        {
          title: 'Reporting-Automation',
          desc: 'Automatische Dashboards, die dir täglich oder wöchentlich zeigen, wie die Automation-Performance aussieht. Kein manuelles Reporting.'
        }
      ]
    },
    approach: {
      title: 'UNSER VORGEHEN',
      items: [
        {
          title: 'Phase 1: Audit (Woche 1)',
          desc: 'Was hast du heute? Welche Tools? Welche Prozesse? Wo verlierst du Leads? Was ist manuell, was sollte automatisch sein?'
        },
        {
          title: 'Phase 2: Architektur (Woche 2)',
          desc: 'Wir designen die Automation-Architektur: Welche Workflows? Welche Nurturing-Sequenzen? Welche CRM-Struktur? Was sind die Scoring-Kriterien?'
        },
        {
          title: 'Phase 3: Implementation (Woche 3-6)',
          desc: 'Aufbau der Workflows, Integration der Tools, Einrichtung des CRM. Mit Testing in jeder Phase — nicht live gehen, wenn etwas nicht funktioniert.'
        },
        {
          title: 'Phase 4: Übergabe und Training (Woche 6-8)',
          desc: 'Dein Team lernt das System. Dokumentation. Feedback-Runden. Sicherstellung, dass das Team das System versteht und nutzt.'
        },
        {
          title: 'Phase 5: Optimierung (laufend)',
          desc: 'Was funktioniert? Was nicht? Wir optimieren Workflows, testen Nurturing-Sequenzen und passen Scoring-Kriterien an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'TOOLS, MIT DENEN WIR ARBEITEN',
        type: 'grid',
        items: [
          { title: 'HubSpot', desc: 'Vollständige Marketing- und Sales-Automation. Ideal für Mid-Market.' },
          { title: 'Salesforce', desc: 'Enterprise CRM, wenn Komplexität es erfordert.' },
          { title: 'Pipedrive', desc: 'Schlankes CRM für agile Sales-Teams.' },
          { title: 'ActiveCampaign', desc: 'Starke Marketing Automation mit gutem Preis-Leistungs-Verhältnis.' },
          { title: 'Make (Integromat) / Zapier', desc: 'No-Code-Integration für Cross-Tool-Automation.' },
          { title: 'Brevo / Mailchimp', desc: 'Email-Marketing für einfachere Setups.' }
        ],
        text: 'Wir bauen in deiner Infrastruktur. Kein erzwungener Tool-Wechsel.'
      },
      {
        title: 'ERGEBNISSE, DIE DAS BRINGT',
        type: 'list',
        bullets: [
          'Mehr qualifizierte Leads an den Vertrieb — automatisch.',
          'Kürzere Sales-Zyklen durch besseres Nurturing.',
          'Weniger manuelle Arbeit für dein Marketing-Team.',
          'Bessere CRM-Datenqualität für fundierte Entscheidungen.',
          'Skalierbarkeit: Mehr Leads ohne mehr Personal.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wir haben bereits ein CRM — kann man das integrieren?',
        a: 'Ja. Wir arbeiten mit deinem bestehenden System. Ziel ist es, das, was vorhanden ist, besser zu nutzen — nicht alles zu ersetzen.'
      },
      {
        q: 'Wie komplex ist Marketing Automation?',
        a: 'Das hängt von deiner Ausgangssituation ab. Wir starten einfach und bauen Komplexität nur dort auf, wo sie Wert schafft. Komplexität um ihrer selbst willen hilft niemandem.'
      },
      {
        q: 'Brauchen wir ein grosses Team, um das zu betreiben?',
        a: 'Nein. Das Ziel von Automation ist genau das Gegenteil: mit kleinem Team mehr leisten. Wir bauen Systeme, die funktionieren, auch wenn nicht täglich jemand daran arbeitet.'
      },
      {
        q: 'Wie lange bis das System produktiv ist?',
        a: 'Grundstruktur ist in 4-6 Wochen operational. Vollständige Optimierung braucht 3-6 Monate iterativer Verbesserung.'
      }
    ],
    cta: {
      headline: 'Leads, die automatisch entwickelt werden — nicht manuell verloren gehen.',
      subheadline: '30 Minuten. Wir zeigen, wie eine Automation-Infrastruktur für dein Unternehmen aussehen würde.',
      buttonText: 'Automation-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'revenue-operations',
    hero: {
      headline: 'Revenue Operations: Das Betriebssystem für dein Wachstum.',
      subheadline: 'Wenn Marketing, Sales und Customer Success nicht als System funktionieren, verlierst du Revenue. Wir bauen die operative Infrastruktur, die alle Teams verbindet — Prozesse, Daten, Tools, Metriken.',
      ctaText: 'RevOps-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Viele Wachstumsprobleme sind keine Marketing- oder Sales-Probleme. Sie sind Operationsprobleme.',
        'Teams arbeiten in Silos. Daten sind fragmentiert. Handover-Prozesse fehlen. Marketing misst Leads, Sales misst Deals, Customer Success misst Churn — aber niemand misst Revenue als Ganzes.',
        'Das Resultat: Ineffizienz, verlorene Opportunities, schwer vorhersagbares Wachstum.',
        'Revenue Operations löst das.'
      ]
    },
    leistet: {
      title: 'WAS REVENUE OPERATIONS LEISTET',
      items: [
        {
          title: 'Gemeinsame Revenue-Metriken',
          desc: 'Was misst ihr als Unternehmen wirklich? MQL, SQL, Pipeline-Velocity, Customer Acquisition Cost, Customer Lifetime Value — wir implementieren die Metriken, die Wachstum steuerbar machen.'
        },
        {
          title: 'Prozess-Harmonisierung',
          desc: 'Marketing, Sales und Customer Success werden auf einheitliche Prozesse ausgerichtet. Übergaben funktionieren. Niemand fällt durchs Raster.'
        },
        {
          title: 'Tech-Stack-Optimierung',
          desc: 'Welche Tools nutzt ihr wirklich? Welche doppeln sich? Welche fehlen? Wir auditieren euren Tech-Stack und bauen eine Architektur, die sauber integriert ist und keine Daten-Silos schafft.'
        },
        {
          title: 'Daten-Architektur',
          desc: 'Saubere Daten sind die Grundlage jeder Entscheidung. Wir strukturieren eure Daten-Infrastruktur: Tracking, CRM-Datenqualität, Attribution.'
        },
        {
          title: 'Forecasting und Pipeline-Management',
          desc: 'Revenue vorhersagen statt hoffen. Wir implementieren Forecasting-Modelle und Pipeline-Review-Prozesse, die realistisch und belastbar sind.'
        },
        {
          title: 'Reporting-Infrastruktur',
          desc: 'Ein Dashboard, das jede Woche die Fragen beantwortet, die zählen: Wie ist die Pipeline? Wo stehen wir gegen Ziele? Was muss priorisiert werden?'
        }
      ]
    },
    approach: {
      title: 'UNSER VORGEHEN',
      items: [
        {
          title: 'Phase 1: RevOps-Audit (Woche 1-2)',
          desc: 'Prozess-Analyse, Tech-Stack-Review, Daten-Qualitäts-Check. Wir dokumentieren den IST-Zustand und identifizieren die grössten Lücken.'
        },
        {
          title: 'Phase 2: Architektur-Design (Woche 2-4)',
          desc: 'Wie soll das System aussehen? Prozesse, Tool-Integrationen, Metriken, Reporting. Ein Blueprint, den dein Team versteht.'
        },
        {
          title: 'Phase 3: Implementation (Woche 4-12)',
          desc: 'Schrittweise Umsetzung — beginnend mit den Bereichen mit grösstem Impact. Keine Big-Bang-Implementation, die alles auf einmal ändert.'
        },
        {
          title: 'Phase 4: Adoption und Training (laufend)',
          desc: 'Das beste System bringt nichts, wenn niemand es nutzt. Wir begleiten die Adoption — mit Training, Dokumentation und regelmässigen Check-ins.'
        },
        {
          title: 'Phase 5: Continuous Improvement',
          desc: 'RevOps ist kein Einmalprojekt. Wir optimieren laufend — basierend auf Daten, Feedback und sich ändernden Anforderungen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'WARUM REVENUE OPERATIONS JETZT?',
        type: 'text',
        text: 'Unternehmen, die Revenue Operations früh implementieren, wachsen schneller. Nicht weil RevOps magisch ist — sondern weil koordinierte Teams mit sauberen Daten bessere Entscheidungen treffen. Schneller. Öfter. Wer wartet, bis das Problem kritisch wird, repariert es teurer.'
      },
      {
        title: 'TECH-STACK, MIT DEM WIR ARBEITEN',
        type: 'grid',
        items: [
          { title: 'CRM', desc: 'HubSpot, Salesforce, Pipedrive' },
          { title: 'Marketing Automation', desc: 'HubSpot, ActiveCampaign, Marketo' },
          { title: 'Analytics', desc: 'Google Analytics 4, Looker Studio, Tableau' },
          { title: 'Integration', desc: 'Make (Integromat), Zapier, native Integrationen' },
          { title: 'Reporting', desc: 'Looker Studio, HubSpot Reports, Salesforce Reports' },
          { title: 'Weitere', desc: 'je nach bestehendem Stack' }
        ]
      }
    ],
    faq: [
      {
        q: 'Für welche Unternehmensgrösse ist RevOps relevant?',
        a: 'Ab dem Moment, wo Marketing, Sales und Customer Success als separate Funktionen existieren. Das kann bei 5 Personen sein. Je früher die Grundlagen gelegt werden, desto besser.'
      },
      {
        q: 'Wie lange dauert eine RevOps-Implementation?',
        a: 'Grundstruktur in 8-12 Wochen. Vollständige Reife braucht 6-12 Monate kontinuierlicher Optimierung.'
      },
      {
        q: 'Brauchen wir dafür neue Tools?',
        a: 'Oft nicht. Meistens werden bestehende Tools besser genutzt. Wenn neue Tools nötig sind, empfehlen wir das auf Basis deiner spezifischen Anforderungen — nicht auf Basis von Partnerprogrammen.'
      },
      {
        q: 'Was ist der Unterschied zu einem klassischen IT-Projekt?',
        a: 'RevOps ist kein IT-Projekt. Es ist ein Business-Projekt. Die technische Implementierung ist das Mittel — das Ziel ist Revenue-Wachstum.'
      }
    ],
    cta: {
      headline: 'Wachstum als System, nicht als Zufall.',
      subheadline: '30 Minuten. Wir analysieren eure aktuelle Revenue-Infrastruktur und zeigen, wo die grössten Lücken sind.',
      buttonText: 'RevOps-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'sales-enablement',
    hero: {
      headline: 'Dein Vertrieb schliesse schneller — wenn Marketing ihn wirklich unterstützt.',
      subheadline: 'Sales Enablement, das Marketing und Vertrieb verbindet. Gemeinsame Prozesse, relevanter Content und Übergabestrukturen, die deinen Sales-Zyklus verkürzen.',
      ctaText: 'Sales-Gespräch buchen (kostenlos, 30 Min)'
    },
    problem: {
      title: 'DAS PROBLEM',
      paragraphs: [
        'Marketing und Sales arbeiten in den meisten Unternehmen aneinander vorbei.',
        'Marketing produziert Inhalte, die der Vertrieb nicht nutzt. Der Vertrieb klagt über schlechte Lead-Qualität. Marketing klagt, dass Leads nicht bearbeitet werden. Keiner weiss genau, wie der Übergabeprozess aussieht.',
        'Das Resultat: Längere Sales-Zyklen. Verlorene Opportunities. Frustration auf beiden Seiten.'
      ]
    },
    leistet: {
      title: 'WAS SALES ENABLEMENT LEISTET',
      items: [
        {
          title: 'Alignment zwischen Marketing und Sales',
          desc: 'Gemeinsame Definition: Was ist ein qualifizierter Lead? Wann ist ein Lead übergabebereit? Welche Metriken zählen für beide Teams?'
        },
        {
          title: 'Sales Content entwickeln',
          desc: 'Case Studies, Battle Cards, Proposal-Templates, Einwand-Handling-Guides — Inhalte, die der Vertrieb in echten Gesprächen nutzt. Nicht Marketing-Material, das in der Schublade landet.'
        },
        {
          title: 'Übergabeprozesse strukturieren',
          desc: 'Klare Service Level Agreements (SLAs) zwischen Marketing und Sales. Wann, wie und mit welchen Informationen werden Leads übergeben?'
        },
        {
          title: 'Sales-Zyklus analysieren und optimieren',
          desc: 'Wo verlierst du Deals? In welcher Phase? Warum? Wir analysieren den Sales-Funnel und identifizieren, wo Marketing besser unterstützen kann.'
        },
        {
          title: 'Onboarding und Training-Material',
          desc: 'Neue Sales-Mitarbeiter müssen schnell produktiv sein. Wir strukturieren das Material, das das ermöglicht — Produkt-Guides, Zielgruppen-Briefings, Einwand-Handling.'
        },
        {
          title: 'Win/Loss-Analyse',
          desc: 'Warum werden Deals gewonnen? Warum verloren? Diese Erkenntnisse fliessen direkt in Messaging, Positioning und Sales-Strategien zurück.'
        }
      ]
    },
    approach: {
      title: 'UNSER VORGEHEN',
      items: [
        {
          title: 'Phase 1: Diagnose (Woche 1-2)',
          desc: 'Wir analysieren den aktuellen Sales-Funnel. Interviews mit Marketing und Sales. Wo sind die Reibungspunkte? Wo geht Revenue verloren?'
        },
        {
          title: 'Phase 2: Alignment-Workshop (Woche 2-3)',
          desc: 'Marketing und Sales definieren gemeinsam: Zielgruppen, Lead-Kriterien, Übergabeprozesse, gemeinsame Metriken. Das ist keine Overhead-Diskussion — es ist die Grundlage für effektives Wachstum.'
        },
        {
          title: 'Phase 3: Content-Entwicklung (Woche 3-8)',
          desc: 'Prioritärer Sales-Content wird entwickelt. Kein generisches Material — sondern was den Vertrieb bei seinen spezifischen Herausforderungen unterstützt.'
        },
        {
          title: 'Phase 4: Prozess-Implementation (laufend)',
          desc: 'Übergabeprozesse werden dokumentiert und implementiert. CRM-Felder angepasst. Handover-Routinen etabliert.'
        },
        {
          title: 'Phase 5: Messung und Iteration',
          desc: 'Messen: Werden Leads bearbeitet? Wie schnell? Mit welchem Resultat? Wir optimieren Prozesse auf Basis echter Daten.'
        }
      ]
    },
    extraSections: [
      {
        title: 'WAS SICH ÄNDERT',
        type: 'list',
        bullets: [
          'Dein Vertrieb hat Klarheit, welche Leads prioritär sind.',
          'Sales-Zyklen werden kürzer, weil Leads besser vorbereitet ankommen.',
          'Marketing weiss, was Sales wirklich braucht.',
          'Win-Rates verbessern sich durch besseres Enablement-Material.',
          'Neues Sales-Personal wird schneller produktiv.'
        ]
      }
    ],
    faq: [
      {
        q: 'Was wenn Marketing und Sales grundsätzlich nicht zusammenarbeiten wollen?',
        a: 'Das ist ein kulturelles Problem — und das lösen wir nicht mit Prozessen. Aber wir schaffen die strukturellen Voraussetzungen: klare Rollen, gemeinsame Metriken, Transparenz. Oft hilft das, auch kulturell.'
      },
      {
        q: 'Brauchen wir ein grosses Sales-Team dafür?',
        a: 'Nein. Sales Enablement ist auch für kleinere Teams mit 2-5 Sales-Mitarbeitern relevant. Je kleiner das Team, desto grösser die Auswirkung von gut funktionierenden Prozessen.'
      },
      {
        q: 'Wie ist Sales Enablement von Revenue Operations abzugrenzen?',
        a: 'Sales Enablement fokussiert auf Content, Training und Prozesse für das Sales-Team. Revenue Operations baut die technische und operative Infrastruktur darunter. Beides zusammen ist die vollständige Lösung.'
      }
    ],
    cta: {
      headline: 'Marketing und Sales als Team — nicht als Silos.',
      subheadline: '30 Minuten. Wir besprechen, wo bei euch die grössten Reibungspunkte liegen.',
      buttonText: 'Sales-Gespräch buchen (kostenlos)'
    }
  },
  {
    slug: 'ecommerce-performance',
    hero: {
      headline: 'Dein Shop hat Besucher. Er braucht Käufer.',
      subheadline: 'Wir optimieren, was zwischen Traffic und Umsatz liegt: Conversion-Rate, Retention, Paid-Effizienz und die Daten, die dir zeigen, wo du Geld lässt. Keine Agentur-Kosmetik — sondern strukturiertes Wachstum.',
      ctaText: 'Shop-Gespräch buchen'
    },
    problem: {
      title: 'Die meisten Shops wachsen nicht — sie lecken.',
      paragraphs: [
        'Der durchschnittliche E-Commerce-Shop konvertiert zwischen 1% und 3% seines Traffics. Das bedeutet: Für jede 100 Personen, die du bezahlt oder organisch in deinen Shop holst, kaufen 97 bis 99 nichts. Das ist kein Algorithmus-Problem. Das ist kein Traffic-Problem. Es ist ein System-Problem.',
        'Zu viele Shops investieren fast ihr gesamtes Budget in Traffic-Generierung — Google Ads, Meta, Influencer — und lassen den eigentlichen Hebel unangetastet: Was passiert, wenn jemand ankommt? Warum verlassen 80% den Warenkorb? Warum kauft ein Kunde einmal und verschwindet? Warum ist der Paid ROAS unter Druck, obwohl der Traffic stimmt?',
        'E-Commerce-Wachstum, das hält, kommt nicht aus mehr Budget. Es kommt aus besseren Systemen: Conversion-Optimierung, die auf Daten basiert. Retention, die Bestandskunden aktiviert. Attribution, die zeigt, welcher Kanal wirklich rentiert. Und Paid-Strategien, die mit Marge — nicht mit Hoffnung — arbeiten.'
      ]
    },
    leistet: {
      title: 'WAS WIR FÜR DICH BAUEN',
      items: [
        {
          title: 'Conversion-Rate-Optimierung (CRO)',
          desc: 'Wir analysieren deinen Shop systematisch: Heatmaps, Session-Recordings, Funnel-Analyse und qualitative Nutzerbefragungen. Daraus entstehen priorisierte Hypothesen, die wir testen — A/B-Tests auf Produktseiten, Checkout-Optimierung, mobile UX, Vertrauenselemente und Seitenstruktur.'
        },
        {
          title: 'Retention & E-Mail-Marketing',
          desc: 'Wiederholungskäufer sind dein profitabelstes Marketing. Wir bauen automatisierte Flows: Welcome-Serie, Post-Purchase-Sequenzen, Win-Back-Kampagnen, Loyalty-Trigger und segmentierte Newsletter für höheren Customer Lifetime Value.'
        },
        {
          title: 'Paid Media — Performance mit Marge',
          desc: 'Kampagnensteuerung für Google Shopping, Meta und Performance Max. Wir optimieren auf echten Deckungsbeitrag, strukturieren Kampagnen nach Produktmargen und skalieren nur, was wirklich rentiert.'
        },
        {
          title: 'Shop-Analytics & Attribution',
          desc: 'Welcher Kanal bringt profitable Kunden? Wo springt der Funnel ab? Wir bauen das Analytics-Fundament: GA4-Setup, Server-Side-Tracking, Attribution-Modell, COGS-Integration und verständliche Daten-Dashboards.'
        },
        {
          title: 'Produktfeed- & Katalog-Optimierung',
          desc: 'Optimierung von Titeln, Beschreibungen, Kategorisierung und Feed-Struktur für das Google Merchant Center und den Meta Catalog, um maximale Sichtbarkeit bei hoher Kaufbereitschaft zu sichern.'
        },
        {
          title: 'Technische Shop-Optimierung',
          desc: 'Ladezeit entscheidet über deine Conversion-Rate. Wir analysieren und verbessern Core Web Vitals, Mobile Performance, Checkout-Flow-Technik und strukturierte Daten für technische Höchstleistung.'
        }
      ]
    },
    approach: {
      title: 'VORGEHEN IN 4 PHASEN',
      items: [
        {
          title: 'Phase 01 — Diagnose & Audit (Dauer: 1–2 Wochen)',
          desc: 'Umfassender Check von Conversion-Schwächen, Paid-Performance, Tracking-Lücken und Funnel-Absprüngen für einen priorisierten Massnahmenplan.'
        },
        {
          title: 'Phase 02 — Fundament legen (Dauer: 2–4 Wochen)',
          desc: 'Reparatur der Analytics-Infrastruktur, Bereinigung der Produktfeeds und Aufsetzen essenzieller Retention-Flows (Warenkorb-Abbrecher, Welcome).'
        },
        {
          title: 'Phase 03 — Testen & Optimieren (Dauer: laufend, ab Woche 5)',
          desc: 'Systematische A/B-Tests auf Produktseiten/Checkout, monatliche Iteration der Flows und Kampagnen-Steuerung auf echten Deckungsbeitrag.'
        },
        {
          title: 'Phase 04 — Skalieren & Vertiefen (Dauer: ab Monat 3)',
          desc: 'Nachhaltiges Hochskalieren profitabler Kanäle, Erschliessung neuer Segmente oder internationaler Märkte mit voll optimiertem Fundament.'
        }
      ]
    },
    extraSections: [
      {
        title: 'WAS SICH ÄNDERT',
        type: 'list',
        bullets: [
          'Dein Shop konvertiert mehr Besucher zu Käufern — bei gleichem Mediabudget.',
          'Deine Kundenbindungsrate (Retention Rate) steigt messbar an.',
          'Deine Attributions- und Umsatzdaten sind 100 % vertrauenswürdig.',
          'Deine Ladezeiten und Core Web Vitals liegen im grünen Bereich.',
          'Deine Performance-Kampagnen laufen margen- statt hoffnungsgesteuert.'
        ]
      }
    ],
    faq: [
      {
        q: 'Arbeitet ihr nur mit bestimmten Shop-Systemen?',
        a: 'Wir arbeiten mit Shopify, WooCommerce, Shopware und anderen gängigen Systemen. Der grösste Teil unserer Arbeit ist system-unabhängig — Analytics, Paid, Retention und CRO-Strategie funktionieren auf jeder Plattform. Für technische Umsetzungen direkt im Shop-Backend arbeiten wir mit verifizierten Entwicklern zusammen.'
      },
      {
        q: 'Übernehmt ihr das Paid-Management komplett, oder macht ihr nur Strategie?',
        a: 'Beides ist möglich. Wir können Kampagnen vollständig übernehmen und operativ führen, oder wir auditieren und coachen euer internes Team bzw. eure bestehende Agentur.'
      },
      {
        q: 'Was ist ein realistischer Zeitrahmen bis zu ersten Ergebnissen?',
        a: 'Erste messbare Verbesserungen durch Quick-Wins im Checkout oder erste E-Mail-Automationen sind oft schon nach 4–6 Wochen sichtbar. Strukturelle A/B-Tests für verifizierbare CRO-Steigerungen beanspruchen meist 2–3 Monate.'
      }
    ],
    cta: {
      headline: 'Dein Shop hat Potenzial. Wir holen es raus.',
      subheadline: '30 Minuten — wir schauen gemeinsam auf deine Zahlen und zeigen dir, wo der grösste Hebel liegt.',
      buttonText: 'Shop-Gespräch buchen'
    }
  },
  {
    slug: 'dtc-growth-acquisition',
    hero: {
      headline: 'Dein Produkt ist gut. Deine Kundengewinnung noch nicht.',
      subheadline: 'Viele Schweizer Online-Brands haben ein starkes Produkt – aber ein brüchiges Acquisition-System. Zu viel Budget in Meta ohne Struktur, kein Funnel-Denken, organisch fast null. Wir ändern das: systematisch, messbar, profitabel.',
      ctaText: 'Wachstumspotenzial jetzt berechnen'
    },
    problem: {
      title: 'Was die meisten D2C-Brands bremst – bevor sie je richtig skalieren.',
      paragraphs: [
        'Das Problem ist selten das Produkt. Schweizer D2C-Brands mit CHF 200k–3M Umsatz kommen meistens über Mundpropaganda, einen glücklichen Viral-Post oder die ersten Meta-Kampagnen zu ersten Kunden. Aber wenn das Wachstum abflacht, liegt es fast immer an derselben Ursache: Es gibt kein System. Jeder Franken Ad-Budget landet ohne klare Attribution, ohne Funnel-Logik, ohne LTV-Grundlage in einem Black Box namens "Meta-Ads".',
        'Der Customer Acquisition Cost klettert unbemerkt nach oben – weil niemand ihn sauber misst. Du weisst, was ein Neukunde kostet. Aber weisst du, was er über 12 Monate wert ist? Ohne LTV-Denken kaufst du Neukunden zu Preisen, die auf den ersten Blick funktionieren, aber auf den zweiten Blick deine Marge vernichten. Gleichzeitig wird der organische Kanal stiefmütterlich behandelt: kein SEO, kein strukturiertes Content-System, keine E-Mail-Strategie, die aus Erstkäufern echte Stammkunden macht.',
        'Die Abhängigkeit von einem einzigen Kanal ist das grösste strukturelle Risiko für jede D2C-Brand. Eine iOS-Update, ein Meta-Algo-Shift, ein kurzes Ad-Account-Sperr-Ereignis – und der Umsatz bricht ein. Wir sehen das regelmässig bei Schweizer Brands, die seit Jahren profitabel liefen und dann über Nacht 40% Umsatz verlieren, weil ihr gesamtes Acquisition-System aus einem einzigen Schalter bestand. Unser Job: diesen Schalter ersetzen durch eine mehrspurige, attributierte, skalierbare Maschine.'
      ]
    },
    leistet: {
      title: 'WAS WIR FÜR DICH BAUEN',
      items: [
        {
          title: 'Paid Acquisition Architektur',
          desc: 'Wir strukturieren dein Paid-Setup von Grund auf: saubere Kampagnenarchitektur, getrennte Awareness- und Conversion-Layer, Frequency-Management, Creative-Rotation-System. Meta bleibt ein Kanal – aber er ist nicht mehr dein einziger Lebensnerv. Wir testen systematisch, was funktioniert, und skalieren nur, was sich rechnet.'
        },
        {
          title: 'CAC/LTV-Steuerung',
          desc: 'Jede Acquisition-Entscheidung basiert auf Zahlen, die du tatsächlich kennst. Wir implementieren ein einfaches, aber robustes Tracking-Framework: CAC nach Kanal und Kampagne, LTV nach Kohorte, Break-even-Punkt nach Produkt. Du siehst auf einen Blick, wo du Geld verdienst – und wo du es verbrennst.'
        },
        {
          title: 'Funnel-Architektur & CRO',
          desc: 'Clicks allein bringen keinen Umsatz. Wir analysieren deinen gesamten Funnel – Landing Pages, Produktseiten, Checkout – und identifizieren, wo Interessenten abspringen. Durch gezielte CRO-Massnahmen senken wir die Kosten pro Conversion, ohne das Ad-Budget zu erhöhen. Eine Verbesserung der Conversion Rate von 1% auf 2% halbiert deinen effektiven CAC.'
        },
        {
          title: 'Organic & SEO-System',
          desc: 'Paid bringt Volumen. Organic bringt Marge. Wir entwickeln eine SEO-Strategie, die auf echte Kaufabsicht ausgerichtet ist: nicht generische Blog-Posts, sondern Content, der Menschen abholt, die nach deinem Produkt oder deiner Kategorie suchen. Mittelfristig senkst du damit deinen Gesamt-CAC strukturell.'
        },
        {
          title: 'E-Mail & Retention-Mechanik',
          desc: 'Der günstigste Neukunde ist der, den du bereits hast. Wir bauen Flows, die aus Erstkäufern Wiederkäufer machen: Welcome Series, Post-Purchase-Sequenzen, Win-back-Kampagnen. Wiederkaufrate ist nicht Zufall – sie ist Ergebnis von Infrastruktur. Jeder Prozentpunkt mehr Wiederkaufrate erhöht deinen LTV und senkt deinen relativen CAC.'
        },
        {
          title: 'Kanal-Diversifikation & Test-Roadmap',
          desc: 'Kein Brand sollte 80% seines Acquisition-Budgets in einen einzigen Kanal investieren. Wir entwickeln eine priorisierte Test-Roadmap für Zusatzkanäle: Google Shopping, Pinterest, TikTok Ads, Influencer mit Performance-Komponente, SEA – je nach Produkt, Kategorie und Zielgruppe.'
        }
      ]
    },
    approach: {
      title: 'VORGEHEN IN 4 PHASEN',
      items: [
        {
          title: 'Phase 01 – Diagnose & Datengrundlage',
          desc: 'Bevor wir einen Franken Budget bewegen, verstehen wir, was bereits vorhanden ist. Wir analysieren deine bestehenden Kampagnen, dein Tracking-Setup, deinen Funnel und deine Kundendaten. Dabei geht es nicht um Aktivismus, sondern um Klarheit: Was ist dein echter CAC nach Kanal? Was ist deine Wiederkaufrate? Wo verlierst du Kunden im Funnel?'
        },
        {
          title: 'Phase 02 – Fundament legen',
          desc: 'Tracking-Infrastruktur, saubere Kampagnenstruktur, erste CRO-Massnahmen, E-Mail-Flows aufsetzen oder reparieren. Diese Phase fühlt sich manchmal weniger spektakulär an als "einfach mehr Ads schalten" – aber sie ist die Voraussetzung dafür, dass Skalierung später tatsächlich funktioniert.'
        },
        {
          title: 'Phase 03 – Testen & Validieren',
          desc: 'Systematisches Creative-Testing, Kanal-Tests, Funnel-Varianten. Kein Bauchgefühl, sondern strukturierte Experimente mit definierten Metriken und Entscheidungsregeln. Wir testen günstig, lernen schnell, und skalieren nur, was den vordefinierten Schwellenwert überschreitet.'
        },
        {
          title: 'Phase 04 – Skalieren & Optimieren',
          desc: 'Was validiert ist, wird skaliert. Was nicht funktioniert, wird abgeschaltet. Monatliches Reporting mit klaren KPIs, regelmässige Strategiemeetings, und ein System, das sich selbst verbessert: Jede neue Kohorte liefert Daten, die die nächste Entscheidung besser machen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'PRAXIS-CASE STUDY',
        type: 'text',
        text: 'Für ein Schweizer E-Commerce Brand (Consumer Goods) gelang uns über eine Neuausrichtung der Kampagnenarchitektur und Funnel-Checkout-Optimierung ein Sprung der Conversion-Rate von 0.9% auf 2.2% und ein um 61% gesteigerter ROAS. Durch den parallelen Aufbau automatisierter CRM-E-Mail-Flows sank der CAC nach 90 Tagen um 34% bei gleichzeitig 28% gesteigerter Wiederkaufrate.'
      }
    ],
    faq: [
      {
        q: 'Wir machen bereits Meta-Ads. Was macht ihr anders?',
        a: 'Wir bringen Struktur ins Setup, implementieren ein kanalübergreifendes Tracking, das Meta nicht selbst kontrolliert, und bauen ein Creative-Testing-System, das kontinuierlich neue Gewinner produziert. Das Ziel ist nicht, mehr Budget in Meta zu stecken, sondern aus jedem eingesetzten Franken mehr herauszuholen.'
      },
      {
        q: 'Wie lange dauert es, bis wir Resultate sehen?',
        a: 'Erste Verbesserungen auf Conversion-Rate-Ebene sind oft innerhalb von 4–6 Wochen sichtbar, wenn strukturelle Probleme im Funnel behoben werden. Paid-Optimierungen brauchen typischerweise 6–10 Wochen bis zur Stabilisierung. Organische Kanäle wie SEO entfalten nachhaltige Wirkung über 6–12 Monate.'
      },
      {
        q: 'Wir haben ein kleines Team und wenig Zeit. Passt das überhaupt zu uns?',
        a: 'Ja, wir übernehmen die operative Ausführung, das Monitoring und die Optimierungszyklen komplett. Du erhältst regelmässige Reportings und klare Entscheidungsvorlagen.'
      }
    ],
    cta: {
      headline: 'Dein nächstes Wachstumskapitel beginnt mit den richtigen Zahlen.',
      subheadline: 'Die meisten Brands, die zu uns kommen, haben nie sauber gemessen, was ein Neukunde wirklich kostet – und was er wirklich wert ist. Das ändern wir im ersten Gespräch. Kein Pitch, kein Deck.',
      buttonText: 'Kostenloses Erstgespräch buchen'
    }
  },
  {
    slug: 'customer-retention',
    hero: {
      headline: 'Dein teuerster Fehler: Kunden einmal kaufen lassen.',
      subheadline: 'Ein Neukunde kostet 5 bis 7 Mal mehr als ein Bestandskunde. Trotzdem haben die meisten Unternehmen kein System, das Bestandskunden aktiviert, reaktiviert oder systematisch entwickelt. Wir bauen diese Infrastruktur — für E-Commerce-Shops, SaaS-Anbieter und B2B-Dienstleister.',
      ctaText: 'Retention-Potenzial berechnen'
    },
    problem: {
      title: 'Wachstum durch Neukundengewinnung ist das teuerste Modell, das es gibt.',
      paragraphs: [
        'Die meisten Unternehmen kennen ihre Cost per Acquisition auf den Franken genau. Aber sie haben keine Ahnung, was ein Bestandskunde über zwei, drei oder fünf Jahre tatsächlich wert ist — weil sie ihn nie systematisch entwickelt haben. Der Lifetime Value ist eine Theorie, keine Messgrösse.',
        'Im E-Commerce bedeutet das: Ein Kunde kauft einmal, verschwindet, und das nächste Mal kostet es erneut CHF 40 bis 120, ihn über Paid Media zurückzuholen — wenn er überhaupt zurückkommt. Die Wiederkaufrate liegt bei vielen Shops unter 25%. Das ist kein Akzeptanzproblem, kein Produkt-Problem. Es ist ein Retention-Problem: keine Post-Purchase-Kommunikation, kein Anlass für den zweiten Kauf, kein System, das den Kunden im richtigen Moment zur richtigen Botschaft führt.',
        'Im B2B ist das Muster dasselbe, nur teurer: Ein Kunde wird gewonnen, wird onboarded, und dann passiert — nichts. Kein strukturiertes Upsell. Kein Review-Gespräch. Kein Loyalty-Programm. Kein Warnsignal, bevor er abwandert. Churn wird erst sichtbar, wenn die Rechnung ausbleibt. Win-Back ist aufwendiger und teurer als Retention es je wäre.'
      ]
    },
    leistet: {
      title: 'WAS WIR FÜR DICH BAUEN',
      items: [
        {
          title: 'Post-Purchase & Onboarding Flows',
          desc: 'Der Moment nach dem Kauf ist der wichtigste im gesamten Lifecycle — und wird am häufigsten verschwendet. Wir bauen E-Mail- und SMS-Sequenzen, die nach dem Erstkauf aktivieren: Nutzungsanleitungen, Cross-Sells, Review-Anfragen und Onboarding.'
        },
        {
          title: 'Win-Back-Kampagnen & Churn-Prävention',
          desc: 'Abgewanderte Kunden sind kein verlorenes Spiel. Wir bauen Win-Back-Sequenzen, die inaktive Kunden reaktivieren. Für B2B ergänzen wir dies um Frühwarn-Systeme: verhaltensbasierte Signale, die Churn-Risiko anzeigen, bevor der Kunde kündigt.'
        },
        {
          title: 'Loyalty- & Repeat-Purchase-Systeme',
          desc: 'Loyalität entsteht durch systematische Erlebnisse. Wir konzipieren Loyalty-Programme, die zu deinem Geschäftsmodell passen: punkte- oder stufenbasiert für E-Commerce, Referral-Mechaniken für B2B oder VIP-Segmente für beste Sonderkonditionen.'
        },
        {
          title: 'Upsell- & Cross-Sell-Automatisierung',
          desc: 'Der einfachste Weg, den Kundenwert zu steigern, ist nicht ein Neukunde — es ist das richtige Angebot an den richtigen Bestandskunden zur richtigen Zeit. Wir bauen Upsell-Trigger auf Basis von Kaufhistorie, Nutzungsverhalten und Segmenten.'
        },
        {
          title: 'LTV-Messung & Retention-Analytics',
          desc: 'Wir bauen das Analytics-Fundament, das Retention sichtbar macht: Cohort-Analyse nach Kaufdatum, LTV-Berechnung nach Segment, Churn-Rate-Tracking und Wiederkaufrate. Zum ersten Mal siehst du, welche Kunden wirklich profitabel sind.'
        },
        {
          title: 'E-Mail & CRM-Infrastruktur',
          desc: 'Retention ist nur so gut wie die technische Basis, auf der sie läuft. Wir auditieren und verbessern eure E-Mail-Infrastruktur: Deliverability, Listsegmentierung, Automatisierungsarchitektur, CRM-Integration und Datenhygiene.'
        }
      ]
    },
    approach: {
      title: 'WIE WIR VORGEHEN (4 PHASEN)',
      items: [
        {
          title: 'Phase 01 — Retention-Audit & LTV-Analyse',
          desc: 'Vollständige Analyse deiner Kundenbasis nach Kauffrequenz, LTV, Churn-Rate und Wiederkaufverhalten. Audit der bestehenden E-Mail-Kommunikation und Automationen.'
        },
        {
          title: 'Phase 02 — Infrastruktur & Basis-Flows',
          desc: 'Aufbau der Retention-Infrastruktur: CRM- und E-Mail-System konfigurieren, Segmentierungslogik implementieren, Analytics-Dashboard einrichten. Kern-Flows wie Welcome- und Post-Purchase-Szenarien aktivieren.'
        },
        {
          title: 'Phase 03 — Optimierung & Lifecycle-Ausbau',
          desc: 'Monatliche Iteration der bestehenden Flows auf Basis von Öffnungsraten, Klickraten und Conversion-Daten. Aufbau des Loyalty-Systems und der Upsell-Automatisierungen.'
        },
        {
          title: 'Phase 04 — LTV-Skalierung & Kanalintegration',
          desc: 'Wenn die Basis steht: Ausweitung auf weitere Kanäle und Touchpoints (z. B. WhatsApp oder SMS). Paid Retargeting auf Basis der LTV-Segmente. Quarterly-Reviews mit konkreten Retention-KPIs.'
        }
      ]
    },
    extraSections: [
      {
        title: 'E-COMMERCE RETENTION ERFOLG',
        type: 'text',
        text: 'Für ein Schweizer Handelsunternehmen im Haushalts-Bereich bauten wir auf Basis einer LTV-Cohort-Analyse eine Post-Purchase-Sequenz, eine 60/90/180-Tage-Win-Back-Kampagne und einen VIP-Zuteilungsfluss auf. Die Wiederkaufrate stieg von 9% auf 38%, was zu CHF 34\'000 monatlichem Mehrumsatz führte bei einer LTV-Erhöhung um das 2.8-fache.'
      }
    ],
    faq: [
      {
        q: 'Für wen ist Retention Marketing relevant — ab welcher Kundenzahl lohnt es sich?',
        a: 'Im E-Commerce empfehlen wir den Aufbau ab einer aktiven Kundenbasis von 500 bis 1\'000 Käufern. Im B2B ist die Schwelle niedriger: Bereits ab 30 bis 50 aktiven Kunden macht eine strukturierte Lifecycle-Kommunikation einen messbaren Unterschied, weil der Einzelwert pro Kunde hoch ist.'
      },
      {
        q: 'Arbeitet ihr mit unserem bestehenden E-Mail-Tool, oder müssen wir wechseln?',
        a: 'Wir arbeiten mit dem, was ihr habt. Die meisten Probleme entstehen nicht durch das falsche Tool, sondern durch fehlende Struktur und Segmentierung. Wir arbeiten produktiv mit Klaviyo, HubSpot, ActiveCampaign, Mailchimp und vergleichbaren Systemen.'
      },
      {
        q: 'Was ist realistisch — welche Zahlen können wir erwarten?',
        a: 'Bei Unternehmen ohne jegliche Retention-Infrastruktur sind Steigerungen der Wiederkaufrate von 10 bis 25 Prozentpunkten in den ersten sechs Monaten realistisch und dokumentiert — sofern Produktqualität und Grundzufriedenheit stimmen.'
      }
    ],
    cta: {
      headline: 'Deine Bestandskunden sind dein grösster ungenutzter Hebel.',
      subheadline: 'In 30 Minuten berechnen wir gemeinsam, wie viel Umsatz in deiner bestehenden Kundenbasis liegt — und was es braucht, ihn zu aktivieren.',
      buttonText: 'Retention-Potenzial besprechen'
    }
  },
  {
    slug: 'paid-social-ecommerce',
    hero: {
      headline: 'Dein ROAS sieht gut aus. Deine Marge nicht.',
      subheadline: 'Die meisten E-Commerce-Shops optimieren ihre Meta- und TikTok-Kampagnen auf ROAS. Das Problem: ROAS berücksichtigt weder Produktmarge noch Versandkosten noch Rücksendungen. Wir optimieren auf echten Deckungsbeitrag — damit Paid Social nicht nur Traffic bringt, sondern Profit.',
      ctaText: 'Kostenlosen Ads-Audit buchen'
    },
    problem: {
      title: 'Ein ROAS von 4x kann dich trotzdem Geld kosten.',
      paragraphs: [
        'Stell dir vor: Du gibst CHF 10\'000 pro Monat für Meta Ads aus. Dein gemeldeter ROAS liegt bei 4x. Der Algorithmus gratuliert dir, deine Agentur schickt eine PowerPoint mit steigenden Balken — und trotzdem schaut am Monatsende weniger heraus als erwartet. Das ist kein Zufall. Das ist ein Messproblem.',
        'ROAS misst Umsatz pro ausgegebenem Franken. Was ROAS nicht misst: wie hoch deine Produktmarge ist, was Versand und Rücksendungen kosten, was der Algorithmus bevorzugt — nämlich günstige Produkte mit hohem Durchklickverhalten, nicht deine margenstarken Artikel. Bei einer Produktmarge von 30% brauchst du allein schon einen ROAS von 3.3x, um den Ad-Spend zu decken — ohne Versand, ohne Retourenquote, ohne Fulfillment. Bei 20% Marge liegt der Break-Even bei 5x. Die meisten Shops wissen das nicht.',
        'Dazu kommt das Skalierungsproblem: Was bei CHF 2\'000 Spend funktioniert, kollabiert bei CHF 10\'000, weil Meta in der Skalierung teurere Zielgruppen anspricht und der CPA steigt — aber nicht gleichmässig. Wer das nicht antizipiert, skaliert sich in die Unrentabilität. Und wer auf TikTok setzt ohne ein klares Creative-System, verbrennt Budget für Views, die nie konvertieren.'
      ]
    },
    leistet: {
      title: 'WAS WIR FÜR DICH BAUEN',
      items: [
        {
          title: 'Marge-zentrierte Kampagnenstruktur',
          desc: 'Bevor wir eine Kampagne aufsetzen, analysieren wir deine Produktmargen. Hochmargen-Produkte werden bevorzugt beworben, Kampagnen nach Margensegmenten getrennt, Budget nach Deckungsbeitragspotenzial alloziert.'
        },
        {
          title: 'Meta Ads Aufbau & Management',
          desc: 'Vollständiger Kampagnen-Aufbau auf Meta (Facebook & Instagram): Prospecting, Retargeting und Retention getrennt strukturiert. Kampagnenziele nach Funnel-Position gewählt. Creative-Tests systematisch geplant.'
        },
        {
          title: 'TikTok Ads & Creative-Strategie',
          desc: 'TikTok funktioniert nur mit dem richtigen Creative — nativer, authentischer Content, der nicht wie Werbung aussieht. Wir entwickeln Creative-Briefings, die für TikTok nativ sind, testen Hooks und Formate.'
        },
        {
          title: 'Tracking & Attribution',
          desc: 'Server-Side-Tracking über Meta Conversions API und TikTok Events API. Ziel: maximale Datenpräzision auch nach iOS-Tracking-Einschränkungen. Wir konfigurieren deine Datenströme optimal.'
        },
        {
          title: 'Creative Testing System',
          desc: 'Nicht jedes Creative funktioniert — und kein Creative funktioniert für immer. Wir bauen ein strukturiertes Testing-System: Klare Hypothesen, saubere Test-Setups, regelmässige Iterationen.'
        },
        {
          title: 'Monatliche Profitabilitätsanalyse',
          desc: 'Kein ROAS-Only-Reporting. Jeder Monat wird ausgewertet nach: Deckungsbeitrag pro Kampagne, echtem Profit nach Marge und Versandkosten, Break-Even-ROAS vs. erreichtem ROAS.'
        }
      ]
    },
    approach: {
      title: 'WIE WIR VORGEHEN (4 PHASEN)',
      items: [
        {
          title: 'Phase 01 — Audit & Profitabilitätsanalyse',
          desc: 'Wir prüfen bestehende Kampagnen auf Marge und echte Profitabilität. Tracking-Audit und Produktmargen-Analyse, um sofortige Potenziale aufzudecken.'
        },
        {
          title: 'Phase 02 — Struktur & Tracking-Fundament',
          desc: 'Neuaufbau oder Umbau der Kampagnenstruktur nach Marge und Funnel-Position. Server-Side-Tracking via Meta Conversions API und TikTok Events API implementieren oder reparieren.'
        },
        {
          title: 'Phase 03 — Launch & erste Iteration',
          desc: 'Kampagnen live schalten mit Initial-Budget. Erste Creative-Tests aufsetzen. Wöchentliche Analyse und Budget-Allokation nach Deckungsbeitrags-Mittelwert.'
        },
        {
          title: 'Phase 04 — Skalierung & Optimierung',
          desc: 'Wenn Kampagnen profitabel laufen und das Tracking zuverlässig ist: kontrollierte Skalierung. Neue Creatives auf Basis gewonnener Erkenntnisse kontinuierlich einspielen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'ECHTES ERGEBNIS-PROFITBEISPIEL',
        type: 'text',
        text: 'Ein Schweizer Handelsunternehmen bewarb bevorzugt Produkte mit hoher Klickrate aber niedriger Marge. Nach Umstrukturierung der Kampagnen auf Deckungsbeitrag (Fokus auf Artikel mit über 45% Marge) und CAPI Setup stieg der effektive Deckungsbeitrags-ROAS von unprofitabel auf 4.8x. Der monatliche Netto-Profit verbesserte sich um CHF 34\'000.'
      }
    ],
    faq: [
      {
        q: 'Was ist der Unterschied zwischen eurem Ansatz und dem einer klassischen Performance-Agentur?',
        a: 'Klassische Performance-Agenturen optimieren auf ROAS, weil das einfach zu berichten ist. Wir berücksichtigen deine Produktmargen und optimieren auf echten Deckungsbeitrag in den Werbekampagnen.'
      },
      {
        q: 'Müssen wir bestehende Kampagnen komplett neu aufbauen, oder können wir aufbauen?',
        a: 'Das hängt vom Audit ab. Manchmal optimieren wir funktionierende Setups. Wenn die historische Ausrichtung jedoch falsche Signale aufweist, ist ein sauberer, strategischer Neuaufbau oft wirksamer.'
      },
      {
        q: 'Wie lange dauert es, bis Paid Social profitabel ist — und was kostet es?',
        a: 'In den ersten 4-8 Wochen sammeln wir Daten, testen Creatives und optimieren Algorithmen (oft auf Break-Even-Niveau). Profitables Skalieren greift ab Woche 8-12. Wir empfehlen ab CHF 3\'000–5\'000 Spend pro Monat.'
      }
    ],
    cta: {
      headline: 'Wie profitabel sind deine Ads wirklich?',
      subheadline: 'Wir analysieren deine Kampagnen kostenlos auf echte Profitabilität — inklusive Deckungsbeitrag. 30 Minuten, keine Verkaufsshow.',
      buttonText: 'Kostenlosen Ads-Audit buchen'
    }
  }
];
