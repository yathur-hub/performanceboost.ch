import { ExtendedServiceContent } from '../types';

export const EXTENDED_SERVICES_DATA: ExtendedServiceContent[] = [
  {
    slug: 'ai-automation',
    hero: {
      headline: 'KI, die Ihrem Team im Alltag Zeit spart.',
      subheadline: 'Wir bauen KI-gestützte Abläufe für Recherche, Personalisierung, Texte und Auswertungen, eingebettet in Ihre bestehenden Tools. Wir setzen KI dort ein, wo sie Ihrem Vertrieb und Marketing nachweisbar Arbeit abnimmt.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'KI wird genutzt, aber selten dort, wo sie etwas bewirkt',
      paragraphs: [
        'In vielen Unternehmen nutzen einzelne Mitarbeitende ChatGPT für Texte. In die eigentlichen Abläufe ist KI aber nicht eingebunden, und niemand weiss, ob sie Zeit spart.',
        'Oder es wurden KI-Tools gekauft, die kaum jemand verwendet.',
        'Zwischen dem, was über KI erzählt wird, und dem, was sie im Alltag bringt, liegt oft eine grosse Lücke. Wir helfen, diese Lücke mit konkreten, überprüfbaren Anwendungen zu schliessen.'
      ]
    },
    leistet: {
      title: 'Wo KI in Marketing und Vertrieb hilft',
      items: [
        {
          title: 'Persönliche Ansprache für viele Kontakte',
          desc: 'KI hilft, Hunderte Kontakte persönlich anzusprechen, ohne jeden einzeln von Hand zu bearbeiten: personalisierte E-Mail-Sequenzen, angepasste Website-Inhalte, passende Angebote.'
        },
        {
          title: 'Schneller zu Texten und Inhalten',
          desc: 'KI übernimmt Recherche, Erstentwürfe, Varianten und Übersetzungen. Ihr Team konzentriert sich auf Inhalt, Strategie und die Qualitätskontrolle.'
        },
        {
          title: 'Recherche und Anreicherung von Kontakten',
          desc: 'KI-gestützte Tools recherchieren Zielfirmen, ergänzen fehlende Informationen und bereiten sie auf. Ihr Vertrieb geht vorbereitet ins Gespräch.'
        },
        {
          title: 'Chatbots auf der Website',
          desc: 'Erste Fragen von Interessenten beantworten und Anfragen vorqualifizieren, auch ausserhalb der Bürozeiten. Mit Abläufen, die auf Ihr Angebot zugeschnitten sind.'
        },
        {
          title: 'Auswertungen und Erkenntnisse',
          desc: 'KI-gestützte Auswertung von Verkaufsgesprächen, Kundenfeedback und Marktinformationen. Was von Hand Tage dauert, liegt deutlich schneller vor.'
        },
        {
          title: 'Abläufe automatisieren',
          desc: 'Wiederkehrende Aufgaben wie E-Mails sortieren, Daten bereinigen, Berichte erstellen oder Meetings nachbereiten werden automatisiert. Die gewonnene Zeit fliesst in Kundengespräche.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Bestandsaufnahme',
          desc: 'Wo verliert Ihr Team am meisten Zeit? Wo würde mehr Tempo helfen? Welche Daten sind vorhanden, mit denen KI arbeiten kann?'
        },
        {
          title: 'Einsatzbereiche priorisieren',
          desc: 'Nicht alles gleichzeitig. Wir wählen die drei bis fünf Anwendungen aus, die für Ihr Unternehmen am meisten bringen.'
        },
        {
          title: 'Umsetzung',
          desc: 'Wir binden KI in Ihre bestehenden Abläufe und Tools ein, damit sie im Alltag tatsächlich genutzt wird.'
        },
        {
          title: 'Schulung und Einführung',
          desc: 'Ihr Team muss die Tools auch verwenden. Wir begleiten die Einführung mit Schulung, klaren Anleitungen und Unterstützung bei Fragen.'
        },
        {
          title: 'Messen und verbessern',
          desc: 'Eingesparte Zeit, Qualität der Anfragen, Abschlussquoten: Wir prüfen, ob die KI-Abläufe wirken, und passen sie laufend an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Tools und Technologien',
        type: 'grid',
        subtitle: 'Wir sind an kein Tool gebunden und arbeiten mit dem, was zu Ihnen passt.',
        items: [
          { title: 'Sprachmodelle', desc: 'GPT, Claude, Gemini für Texte, Recherche und Auswertungen.' },
          { title: 'Datenanreicherung', desc: 'Clay, Apollo, Clearbit für Kontaktdaten und Personalisierung.' },
          { title: 'Automatisierung', desc: 'Make, Zapier, n8n, um KI in Abläufe einzubinden.' },
          { title: 'Chatbots', desc: 'Intercom, Drift, Tidio für die Website.' },
          { title: 'Vertrieb', desc: 'Gong, Chorus, Salesforce Einstein für die Auswertung von Gesprächen.' },
          { title: 'Texte', desc: 'Jasper, Copy.ai oder eigene Abläufe für die Erstellung von Inhalten.' }
        ]
      },
      {
        title: 'Was KI nicht ersetzt',
        type: 'text',
        text: 'KI ersetzt weder Ihre Strategie noch das Urteil Ihrer Mitarbeitenden noch die Beziehung zu Ihren Kunden. Sie hilft, Aufgaben schneller zu erledigen, Ansprache persönlicher zu machen und Daten rascher auszuwerten. Die Entscheidungen, was Sie wem und warum anbieten, treffen weiterhin Menschen. Wir setzen KI dort ein, wo sie sich lohnt, und raten ab, wo sie nichts bringt.'
      }
    ],
    faq: [
      {
        q: 'Brauchen wir technisches Know-how im Team?',
        a: 'Nicht zwingend. Viele KI-Anwendungen lassen sich mit No-Code-Tools umsetzen und brauchen nur ein Grundverständnis. Wo es technischer wird, übernehmen wir die Umsetzung und dokumentieren sie.'
      },
      {
        q: 'Wie schnell ist eine Automatisierung im Einsatz?',
        a: 'Einfache Abläufe sind oft innert ein bis zwei Wochen eingerichtet. Komplexere Integrationen brauchen meist vier bis acht Wochen, bis sie im Alltag stabil laufen. Ob sich der Aufwand lohnt, zeigt sich meist erst nach einigen Wochen Nutzung, wenn die eingesparte Zeit messbar wird.'
      },
      {
        q: 'Was kosten KI-Tools?',
        a: 'Die Lizenzen sind meist überschaubar, als Richtwert oft unter CHF 200 pro Monat je Tool. Der grössere Aufwand liegt in Einrichtung, Tests und Schulung. Diesen schätzen wir nach dem Erstgespräch konkret für Ihren Fall.'
      },
      {
        q: 'Wie stellen Sie sicher, dass KI-generierte Inhalte gut sind?',
        a: 'Wir bauen eine Prüfung in jeden Ablauf ein. Die KI liefert Entwürfe, Menschen prüfen und geben frei. Bei Kundendaten achten wir darauf, welche Daten überhaupt an ein KI-Modell gehen dürfen.'
      }
    ],
    cta: {
      headline: 'Wo kann KI Ihrem Team Arbeit abnehmen?',
      subheadline: 'In 30 Minuten besprechen wir, welche Anwendungen für Ihr Unternehmen sinnvoll sind und welche nicht.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'data-analytics',
    hero: {
      headline: 'Sehen, welche Kanäle Ihnen Kunden bringen.',
      subheadline: 'Wir richten Tracking und Berichte so ein, dass Sie jederzeit sehen, was funktioniert, was nicht und wo Budget verloren geht.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Viele Daten, wenig Klarheit',
      paragraphs: [
        'Die meisten Unternehmen haben genug Daten. Was fehlt, ist ein klares Bild.',
        'Tools sammeln Daten, aber es gibt keine Berichte, die bei Entscheidungen helfen. Kennzahlen, die niemand versteht. Dashboards, die Klicks zeigen, aber keinen Umsatz. Und niemand weiss genau, welcher Kanal tatsächlich Kunden bringt.',
        'Die Folge: Entscheidungen nach Bauchgefühl und Budget, das in die falsche Richtung fliesst.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Sauberes Tracking',
          desc: 'Was wird heute gemessen, was sollte gemessen werden? Wir richten eine verlässliche Grundlage ein: Google Analytics 4, Ereignis- und Conversion-Tracking, Anbindung an Ihr CRM.'
        },
        {
          title: 'Zuordnung zu Kanälen',
          desc: 'Welcher Kanal und welcher Kontaktpunkt hat zum Abschluss beigetragen? Wir richten eine Zuordnung ein, die realistisch ist und bei Budgetentscheiden hilft.'
        },
        {
          title: 'Dashboards',
          desc: 'Ein Dashboard, das die wichtigsten Fragen in wenigen Minuten beantwortet. Wöchentlich, monatlich oder pro Kampagne.'
        },
        {
          title: 'Analyse des Anfrageprozesses',
          desc: 'Wo springen Interessenten ab? Wo bleiben Verkaufschancen stecken? Wir zeigen, an welcher Stelle Umsatz verloren geht und wo sich Verbesserungen am meisten lohnen.'
        },
        {
          title: 'Wirkung des Marketings messen',
          desc: 'Welche Kampagne, welcher Kanal, welche Massnahme bringt was? Ausgewiesen in Franken, nicht nur in Klicks.'
        },
        {
          title: 'A/B-Tests',
          desc: 'Änderungen werden gezielt getestet, mit klarer Annahme vorab und genug Daten, damit das Ergebnis aussagekräftig ist.'
        },
        {
          title: 'Regelmässige Berichte',
          desc: 'Monats- und Quartalsberichte, die Ihrer Geschäftsleitung zeigen, wo Sie stehen und was als Nächstes Priorität hat.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Prüfung der bestehenden Daten',
          desc: 'Was wird heute gemessen? Was fehlt? Wo gibt es Lücken oder Fehler? Wir prüfen Tracking, CRM-Daten und bestehende Berichte.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Welche Kennzahlen sind für Ihre Ziele wirklich wichtig? Wir messen nicht alles, sondern das, was für Ihre Entscheidungen zählt.'
        },
        {
          title: 'Einrichtung',
          desc: 'Tracking umsetzen, Datenquellen verbinden, Dashboards bauen. Technisch sauber und für Ihr Team verständlich.'
        },
        {
          title: 'Einführung im Team',
          desc: 'Ein Dashboard nützt nur, wenn es gelesen wird. Wir zeigen Ihrem Team, wie es die Zahlen liest und daraus Entscheidungen ableitet.'
        },
        {
          title: 'Laufende Auswertung',
          desc: 'Monatliche Auswertungen, die Veränderungen und Auffälligkeiten zeigen und konkrete Empfehlungen enthalten.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'Webanalyse', desc: 'Google Analytics 4, Matomo, Mixpanel' },
          { title: 'Dashboards', desc: 'Looker Studio, Power BI, HubSpot Dashboards' },
          { title: 'Zuordnung zu Kanälen', desc: 'Google Analytics, Triple Whale, Northbeam' },
          { title: 'Tracking', desc: 'Google Tag Manager (auch serverseitig), Segment' },
          { title: 'CRM-Auswertungen', desc: 'HubSpot, Salesforce Reports, Pipedrive Insights' },
          { title: 'Testing', desc: 'VWO, Optimizely' }
        ]
      }
    ],
    faq: [
      {
        q: 'Brauchen wir eine Datenspezialistin oder einen Datenspezialisten im Team?',
        a: 'Nicht unbedingt. Wir richten die Berichte so ein, dass sie auch ohne Datenhintergrund verständlich sind. Bei komplexeren Fragen begleiten wir Sie weiter.'
      },
      {
        q: 'Unsere Daten sind ein Durcheinander. Lässt sich das beheben?',
        a: 'Ja, aber es braucht Zeit. Ein sauberes Tracking-Setup steht oft innert zwei bis vier Wochen. Bis genug saubere Daten für verlässliche Aussagen gesammelt sind, vergehen meist weitere Wochen, je nach Besucherzahl und Anzahl Anfragen.'
      },
      {
        q: 'Wie oft sollten wir die Zahlen anschauen?',
        a: 'Für laufende Kampagnen wöchentlich, für strategische Entscheide monatlich und pro Quartal. Wir helfen, einen Rhythmus festzulegen, der zu Ihrem Team passt.'
      },
      {
        q: 'Was, wenn wir noch gar kein Tracking haben?',
        a: 'Dann beginnen wir dort. Ohne verlässliche Messung lässt sich Marketing nicht sinnvoll steuern, deshalb hat ein sauberes Tracking-Setup Vorrang vor neuen Kampagnen.'
      }
    ],
    cta: {
      headline: 'Entscheiden Sie auf Basis von Zahlen, nicht von Vermutungen.',
      subheadline: 'In 30 Minuten schauen wir auf Ihre aktuelle Datenlage und zeigen, was sich verbessern lässt.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'demand-generation',
    hero: {
      headline: 'Regelmässig qualifizierte Anfragen für Ihren Vertrieb.',
      subheadline: 'Wir planen und betreuen Ihre Kampagnen auf Google, LinkedIn und Meta, abgestimmt auf Ihre Zielgruppe, mit sauberer Messung und laufender Optimierung.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Viele Klicks, zu wenig passende Anfragen',
      paragraphs: [
        'Viele B2B-Unternehmen kennen dieselbe Situation:',
        'Der Vertrieb verbringt viel Zeit damit, neue Kontakte zu suchen, statt zu verkaufen. Kampagnen bringen Klicks, aber kaum qualifizierte Anfragen. Und niemand weiss genau, welcher Kanal tatsächlich funktioniert.',
        'Selten liegt das an einem einzelnen Kanal. Meist fehlt die Abstimmung: Zielgruppe, Botschaft, Landingpage und Messung passen nicht zusammen. Genau dort setzen wir an.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie übernehmen',
      items: [
        {
          title: 'Zielgruppe schärfen',
          desc: 'Wen wollen Sie erreichen? Welche Unternehmen, welche Entscheider, in welcher Phase ihrer Kaufentscheidung? Gezielte Ansprache bringt mehr als breite Reichweite.'
        },
        {
          title: 'Kanäle aufeinander abstimmen',
          desc: 'LinkedIn Ads, Google Ads, Meta, Inhalte, E-Mail und SEO laufen nicht nebeneinander her, sondern haben jeweils eine klare Aufgabe.'
        },
        {
          title: 'Den Weg zur Anfrage gestalten',
          desc: 'Vom ersten Kontakt mit Ihrer Marke bis zur Anfrage: Wir sorgen dafür, dass Interessenten in jeder Phase die passende Botschaft sehen.'
        },
        {
          title: 'Anzeigen testen',
          desc: 'Wir testen verschiedene Botschaften und Formate und schauen, was bei Ihrer Zielgruppe funktioniert. Die Daten entscheiden.'
        },
        {
          title: 'Kampagnenbetreuung',
          desc: 'Google Ads, LinkedIn Ads und Meta Ads werden laufend betreut und optimiert. Das Budget fliesst dorthin, wo Anfragen entstehen.'
        },
        {
          title: 'Laufende Optimierung',
          desc: 'Wöchentliche Auswertung, monatlicher Bericht. Was funktioniert, bauen wir aus. Was nicht funktioniert, stoppen wir.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Ausgangslage verstehen',
          desc: 'Wir schauen uns Ihr Geschäft, Ihre Zielgruppe und Ihre heutigen Anfragen an. Woher kommen sie? Wo geht Potenzial verloren?'
        },
        {
          title: 'Lücken finden',
          desc: 'Welche Kanäle sind ungenutzt? Welche Zielgruppen werden nicht erreicht? Wo springen Interessenten ab?'
        },
        {
          title: 'Plan festlegen',
          desc: 'Welche Kanäle, welches Budget, welche Prioritäten? Kein Standardpaket, sondern was für Ihr Ziel sinnvoll ist.'
        },
        {
          title: 'Ergebnisse messen',
          desc: 'Kosten pro Anfrage, Anfragequote, Verkaufschancen, Werbeumsatz. Sie sehen jederzeit, was Ihr Budget bringt.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Kanäle, die wir einsetzen',
        type: 'grid',
        subtitle: 'Wir wählen die Kanäle danach, was zu Ihrer Zielgruppe passt.',
        items: [
          { title: 'LinkedIn Ads', desc: 'Für B2B gut geeignet, weil sich nach Unternehmensgrösse, Funktion und Branche eingrenzen lässt. Sinnvoll bei mittleren und längeren Verkaufszyklen.' },
          { title: 'Google Search Ads', desc: 'Für Interessenten, die bereits aktiv nach einer Lösung suchen. Oft der Kanal mit der höchsten Kaufabsicht.' },
          { title: 'Meta Ads (Facebook & Instagram)', desc: 'Für Bekanntheit, Retargeting und Zielgruppen, die noch nicht aktiv suchen. Meist günstigere Reichweite, abgestimmt mit den anderen Kanälen.' },
          { title: 'Google Display', desc: 'Für Wiedererkennung und Retargeting. Ihre Marke bleibt sichtbar, während Interessenten Angebote vergleichen.' },
          { title: 'Inhalte & SEO', desc: 'Langfristige Sichtbarkeit bei Google mit Inhalten, die passende Besucher anziehen.' },
          { title: 'E-Mail & Newsletter', desc: 'Bestehende Kontakte weiterbegleiten und eine eigene Leserschaft aufbauen, unabhängig von Plattform-Algorithmen.' }
        ]
      },

      {
        title: 'Investition',
        type: 'investment',
        subtitle: 'Richtwerte für die Betreuung, Werbebudget separat.',
        items: [
          { title: 'Einstieg', desc: 'ab CHF 2\'000 / Monat', extra: 'Richtwert für ein bis zwei Kanäle mit klarem Fokus.' },
          { title: 'Ausbau', desc: 'Richtwert CHF 4\'000–8\'000 / Monat', extra: 'Für mehrere Kanäle und laufende Optimierung.' },
          { title: 'Mehrere Märkte', desc: 'ab CHF 8\'000 / Monat', extra: 'Richtwert für mehrere Märkte, Sprachen oder Zielgruppen.' }
        ],
        text: 'Werbebudget und Betreuungshonorar weisen wir getrennt aus. Sie sehen jederzeit, was wohin fliesst.'
      }
    ],
    faq: [
      {
        q: 'Wann sehen wir erste Resultate?',
        a: 'Bei Google Ads sehen Sie die ersten Klicks und Anfragen meist innert Tagen. Belastbare Daten, auf die man Entscheidungen stützen kann, liegen in der Regel nach 4–8 Wochen vor. Bei LinkedIn und längeren Verkaufszyklen kann es länger dauern. SEO und Inhalte brauchen mehrere Monate, bis sie spürbar Anfragen bringen.'
      },
      {
        q: 'Welche Kanäle sind für uns richtig?',
        a: 'Das hängt von Ihrer Zielgruppe und Ihrem Verkaufszyklus ab. Suchen Ihre Kunden aktiv nach Ihrem Angebot, ist Google meist der erste Kanal. Müssen Sie bestimmte Funktionen in bestimmten Firmen erreichen, eher LinkedIn. Wir besprechen das im Erstgespräch.'
      },
      {
        q: 'Brauchen wir ein grosses Budget?',
        a: 'Nein, aber ein passendes. Das Werbebudget muss genug Klicks ermöglichen, damit nach einigen Wochen aussagekräftige Daten vorliegen. Was das bei Ihnen bedeutet, hängt von den Klickpreisen in Ihrer Branche ab. Das rechnen wir im Erstgespräch gemeinsam durch, bevor Sie etwas ausgeben.'
      },
      {
        q: 'Was unterscheidet Sie von einer Werbeagentur?',
        a: 'Wir messen den Erfolg an Anfragen und Verkaufschancen, nicht an Klicks und Impressionen. Kampagnen, Landingpages, Tracking und die Übergabe an Ihren Vertrieb kommen aus einer Hand, umgesetzt persönlich von Yathur Nathan.'
      }
    ],
    cta: {
      headline: 'Mehr passende Anfragen für Ihren Vertrieb.',
      subheadline: 'In 30 Minuten schauen wir auf Ihre aktuelle Situation und skizzieren, welche Kanäle und welches Budget für Sie sinnvoll wären.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'growth-strategy',
    hero: {
      headline: 'Ein klarer Plan, wie Sie neue Kunden gewinnen.',
      subheadline: 'Wir legen mit Ihnen fest, wen Sie ansprechen, womit Sie überzeugen und über welche Kanäle Sie Ihre Wunschkunden erreichen. Mit einem Plan, den Ihr Team umsetzen kann.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Wachstum, das eher zufällig entsteht',
      paragraphs: [
        'Viele Unternehmen wachsen, ohne genau zu wissen, warum.',
        'Ein Kanal funktioniert, eine Kampagne bringt Anfragen, aber es steht kein Plan dahinter.',
        'Dadurch lässt sich Wachstum schlecht planen und kaum wiederholen.',
        'Wer nicht weiss, woher die Kunden kommen, kann auch nicht gezielt mehr davon gewinnen.'
      ]
    },
    leistet: {
      title: 'Was die Strategiearbeit umfasst',
      items: [
        {
          title: 'Wunschkunden festlegen',
          desc: 'Wer sind Ihre besten Kunden? Nicht nur nach Branche und Grösse, sondern: Wer hat das Problem, das Sie lösen, und wer ist bereit, dafür zu bezahlen?'
        },
        {
          title: 'Positionierung',
          desc: 'Warum sollte jemand Sie wählen und nicht die Konkurrenz? Wir arbeiten ein klares Unterscheidungsmerkmal heraus, das Ihr Team versteht und weitergeben kann.'
        },
        {
          title: 'Vermarktungsplan',
          desc: 'Welche Kanäle, welche Botschaften, welche Reihenfolge? Ein realistischer Plan mit Meilensteinen statt eines langen Berichts, der in der Schublade landet.'
        },
        {
          title: 'Prioritäten setzen',
          desc: 'Nicht jede Massnahme bringt gleich viel. Wir zeigen, wo Ihr Budget und Ihre Zeit am meisten bewirken.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Woran messen wir Erfolg? Wir definieren wenige, klare Kennzahlen, die für Ihr Unternehmen zählen.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Wir schauen uns Ihre Situation an: Markt, Mitbewerber, bestehende Kunden, bisherige Anfragen. Wo wachsen Sie schon? Wo bleibt Potenzial liegen?'
        },
        {
          title: 'Strategie-Workshop (Woche 2–3)',
          desc: 'Gemeinsam erarbeiten wir Zielkunden, Positionierung und Prioritäten. Ihr Team bringt das Wissen über Markt und Kunden ein, wir die Struktur.'
        },
        {
          title: 'Wachstumsplan (Woche 3–4)',
          desc: 'Sie erhalten einen klaren, umsetzbaren Plan mit Prioritäten, Zeitplan und Kennzahlen, mit dem Ihr Team direkt arbeiten kann.'
        },
        {
          title: 'Begleitung der Umsetzung (laufend)',
          desc: 'Wir begleiten die Umsetzung, helfen beim Priorisieren und passen den Plan an, wenn sich Ihre Situation ändert.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was Sie danach wissen',
        type: 'list',
        subtitle: 'Nach der Strategiearbeit wissen Sie:',
        bullets: [
          'Wer Ihr Wunschkunde ist, klar beschrieben',
          'Was Sie von Mitbewerbern unterscheidet, in einfachen Worten',
          'Welche Kanäle und Massnahmen Vorrang haben',
          'An welchen Kennzahlen Sie Fortschritt messen',
          'Was der nächste konkrete Schritt ist'
        ],
        text: 'So wird aus zufälligem Wachstum ein Plan, den Sie steuern können.'
      }
    ],
    faq: [
      {
        q: 'Brauchen wir wirklich eine Strategie, bevor wir Massnahmen umsetzen?',
        a: 'Wenn Sie planbar wachsen wollen, ja. Einzelne Massnahmen können auch ohne Strategie funktionieren, lassen sich aber schwer wiederholen und ausbauen. Mit einem klaren Plan wird jede weitere Massnahme gezielter.'
      },
      {
        q: 'Wie lange dauert die Strategiearbeit?',
        a: 'Die erste Phase bis zum fertigen Plan dauert in der Regel drei bis vier Wochen. Auf Ihrer Seite rechnen Sie mit einem Workshop und einigen kürzeren Abstimmungen. Die Begleitung danach richtet sich nach Ihrem Bedarf, monatlich oder pro Quartal.'
      },
      {
        q: 'Was ist der Unterschied zu einer klassischen Strategieberatung?',
        a: 'Wir erarbeiten die Strategie und setzen sie auch um, von Kampagnen über Landingpages bis zum Tracking. Sie erhalten keinen Bericht, mit dem Sie danach allein bleiben.'
      },
      {
        q: 'Was kostet die Strategiearbeit?',
        a: 'Das hängt vom Umfang ab, zum Beispiel davon, wie viele Märkte, Angebote oder Zielgruppen einbezogen werden. Nach dem Erstgespräch erhalten Sie ein Angebot mit Festpreis für die erste Phase.'
      }
    ],
    cta: {
      headline: 'Machen Sie Ihre Neukundengewinnung planbar.',
      subheadline: 'In 30 Minuten besprechen wir Ihre aktuelle Situation und ob eine Strategiephase der richtige nächste Schritt ist.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'lead-generation',
    hero: {
      headline: 'Aus Website-Besuchern werden Anfragen.',
      subheadline: 'Wir bauen Wege, über die Interessenten zu Ihnen finden und sich melden: mit Inhalten, SEO und Landingpages, die Anfragen erfassen und bewerten. Bezahlt und organisch.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Besucher ja, Anfragen kaum',
      paragraphs: [
        'Viele Unternehmen haben Besucher auf der Website, aber kaum Anfragen. Oder Anfragen, die nicht passen. Oder es fehlt ein Weg, aus Interesse eine konkrete Anfrage zu machen.',
        'Inhalte werden erstellt, aber sie werden bei Google nicht gefunden und bringen keine messbaren Ergebnisse.',
        'Gute Inhalte allein reichen nicht. Es braucht einen klaren Weg vom ersten Besuch bis zur Anfrage.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Sichtbarkeit bei Google',
          desc: 'Inhalte und SEO, die Sie bei passenden Suchanfragen sichtbar machen. Wir setzen auf Suchbegriffe, hinter denen eine echte Absicht steht, nicht nur auf grosses Suchvolumen.'
        },
        {
          title: 'Wege zur Anfrage',
          desc: 'Landingpages, nützliche Angebote und klare Handlungsaufforderungen. Nicht nur «Kontakt aufnehmen», sondern passende Schritte für jede Phase der Entscheidung.'
        },
        {
          title: 'Nützliche Angebote',
          desc: 'Leitfäden, Checklisten, Rechner oder Selbsttests, die für Ihre Zielgruppe echten Nutzen haben und gegen Kontaktangaben heruntergeladen werden.'
        },
        {
          title: 'Anfragen bewerten',
          desc: 'Nicht jede Anfrage ist gleich wertvoll. Wir richten eine Bewertung ein, damit Ihr Vertrieb seine Zeit in die richtigen Gespräche steckt.'
        },
        {
          title: 'SEO-Grundlagen',
          desc: 'Technisches SEO, Keyword-Planung und thematisch verknüpfte Inhalte. So entsteht Sichtbarkeit, die langfristig Anfragen bringt, ohne für jeden Klick zu bezahlen.'
        },
        {
          title: 'Inhalte mit Plan',
          desc: 'Statt einzelner Blogartikel entsteht ein Themenplan, der Interessenten vom ersten Kontakt bis zur Entscheidung begleitet.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Zielgruppe verstehen',
          desc: 'Wer sind Ihre Wunschkunden? Welche Probleme wollen sie lösen, wonach suchen sie, welche Inhalte helfen ihnen weiter?'
        },
        {
          title: 'Bestehende Inhalte prüfen',
          desc: 'Was gibt es bereits? Was wird gefunden, was bringt Anfragen, was fehlt? Wir bauen auf dem auf, was vorhanden ist.'
        },
        {
          title: 'Keyword- und Themenplan',
          desc: 'Welche Themen, welche Suchbegriffe, welche Formate? Ein priorisierter Plan, der Chancen bei Google mit echter Kaufabsicht verbindet.'
        },
        {
          title: 'Inhalte erstellen und optimieren',
          desc: 'Inhalte, die für Menschen geschrieben und für Suchmaschinen aufbereitet sind: klare Struktur, interne Verlinkung, saubere Technik.'
        },
        {
          title: 'Anfragequote verbessern',
          desc: 'Landingpages testen, Handlungsaufforderungen verbessern, Angebote auswerten. Was bringt Anfragen, was nicht?'
        },
        {
          title: 'Bericht',
          desc: 'Monatlich: Welche Inhalte werden gefunden? Welche bringen Anfragen? Wo gibt es Lücken? Die Zahlen bestimmen die nächsten Schritte.'
        }
      ]
    },
    extraSections: [

      {
        title: 'Investition',
        type: 'investment',
        subtitle: 'Richtwerte für Inhalte und SEO. Der genaue Umfang richtet sich nach Ihrem Markt.',
        items: [
          { title: 'Einstieg', desc: 'ab CHF 1\'500 / Monat', extra: 'Richtwert: z. B. zwei Artikel pro Monat, technisches SEO und Bericht. Für den Aufbau erster Sichtbarkeit.' },
          { title: 'Ausbau', desc: 'ab CHF 2\'500 / Monat', extra: 'Richtwert: z. B. vier Artikel pro Monat, SEO-Grundlagen, Landingpage-Optimierung und Download-Angebote.' },
          { title: 'Intensiv', desc: 'ab CHF 4\'000 / Monat', extra: 'Richtwert: z. B. acht Artikel pro Monat, vollständiger Themenplan, Anbindung an Automatisierung und laufende Optimierung.' }
        ],
        text: 'Zeitrahmen: Erste Platzierungen bei Google meist nach drei bis sechs Monaten, spürbar mehr Anfragen eher nach sechs bis neun Monaten. Organische Sichtbarkeit braucht Zeit. Wer schneller Anfragen braucht, ergänzt SEO mit Google Ads.'
      }
    ],
    faq: [
      {
        q: 'Wie lange dauert es, bis über Google organisch Anfragen kommen?',
        a: 'Erste Platzierungen sehen Sie meist nach drei bis sechs Monaten, spürbar mehr Anfragen eher nach sechs bis neun Monaten. Das hängt stark davon ab, wie umkämpft Ihre Suchbegriffe sind und wie stark Ihre Website heute schon ist. Wer früher Anfragen braucht, setzt parallel auf Google Ads.'
      },
      {
        q: 'Was, wenn unsere Branche sehr spezialisiert ist?',
        a: 'Das ist oft ein Vorteil. In spezialisierten Nischen gibt es weniger Konkurrenz, und Fachinhalte werden häufig schneller gefunden als Inhalte zu breiten Suchbegriffen. Dafür ist das Suchvolumen kleiner, was wir bei der Planung berücksichtigen.'
      },
      {
        q: 'Können wir das nicht selbst machen?',
        a: 'Doch. Rechnen Sie aber mit mehreren Stunden pro Woche für Planung, Schreiben, Technik und Auswertung, und zwar über Monate. Wenn Sie diese Zeit lieber in Ihr Kerngeschäft stecken, übernehmen wir das.'
      },
      {
        q: 'Brauchen wir zusätzlich bezahlte Werbung?',
        a: 'Nicht zwingend. Kombiniert funktioniert es aber meist besser: Werbung bringt Anfragen ab den ersten Wochen, Inhalte und SEO bauen langfristig Sichtbarkeit auf.'
      }
    ],
    cta: {
      headline: 'Mehr Anfragen aus Ihrer Website.',
      subheadline: 'In 30 Minuten schauen wir auf Ihre heutige Sichtbarkeit und zeigen, wo Sie ansetzen können.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'marketing-automation',
    hero: {
      headline: 'Keine Anfrage mehr, die im Posteingang liegen bleibt.',
      subheadline: 'Wir richten Marketing Automation und CRM so ein, dass Interessenten automatisch weiterbegleitet werden und Ihr Vertrieb sieht, wer bereit für ein Gespräch ist.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Anfragen kommen rein und versanden',
      paragraphs: [
        'Anfragen kommen herein und dann passiert nichts. Kein Nachfassen, keine weitere Information, kein klarer Ablauf.',
        'Oder: Vieles läuft von Hand, kostet Zeit und ist fehleranfällig. Zu viele Tools, die nicht miteinander verbunden sind. CRM-Daten, die veraltet oder unvollständig sind.',
        'Die Folge: Interessenten, die eigentlich kaufen würden, gehen verloren.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie einrichten',
      items: [
        {
          title: 'Interessenten automatisch weiterbegleiten',
          desc: 'Automatische E-Mail-Abläufe, die Kontakten passende Inhalte schicken, je nach Verhalten, Interesse und Stand der Entscheidung. Persönlich statt Massenversand.'
        },
        {
          title: 'Kontakte bewerten',
          desc: 'Eine Bewertung im CRM zeigt, welche Kontakte bereit für ein Gespräch sind. Ihr Vertrieb meldet sich zur richtigen Zeit bei den richtigen Leuten.'
        },
        {
          title: 'CRM aufbauen oder aufräumen',
          desc: 'Ein CRM, das Ihr Team gerne nutzt: saubere Struktur, klare Verkaufsphasen, automatische Datenpflege.'
        },
        {
          title: 'Übergabe an den Vertrieb',
          desc: 'Klare Regeln, wann eine Anfrage vom Marketing an den Vertrieb geht. So geht keine Anfrage mehr unter.'
        },
        {
          title: 'Tools verbinden',
          desc: 'Ihre bestehenden Tools wie HubSpot, Salesforce, Pipedrive, Mailchimp oder Intercom werden verbunden. Daten fliessen automatisch, ohne Abtippen.'
        },
        {
          title: 'Automatische Berichte',
          desc: 'Dashboards, die Ihnen regelmässig zeigen, wie die automatisierten Abläufe laufen. Ohne manuelles Zusammensuchen.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Bestandsaufnahme (Woche 1)',
          desc: 'Welche Tools und Abläufe gibt es heute? Wo gehen Anfragen verloren? Was läuft von Hand, was sollte automatisch laufen?'
        },
        {
          title: 'Konzept (Woche 2)',
          desc: 'Wir planen die Abläufe: Welche E-Mail-Strecken, welche CRM-Struktur, nach welchen Kriterien werden Kontakte bewertet?'
        },
        {
          title: 'Umsetzung (Woche 3–6)',
          desc: 'Abläufe aufbauen, Tools verbinden, CRM einrichten. Alles wird getestet, bevor es live geht.'
        },
        {
          title: 'Übergabe und Schulung (Woche 6–8)',
          desc: 'Ihr Team lernt das System kennen. Mit Dokumentation und Feedback-Runden, damit es im Alltag auch genutzt wird.'
        },
        {
          title: 'Optimierung (laufend)',
          desc: 'Was funktioniert, was nicht? Wir passen Abläufe an, testen E-Mail-Strecken und schärfen die Bewertungskriterien nach.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'HubSpot', desc: 'Marketing- und Vertriebsautomatisierung in einem System, verbreitet bei KMU.' },
          { title: 'Salesforce', desc: 'Für Unternehmen mit komplexeren Vertriebsstrukturen.' },
          { title: 'Pipedrive', desc: 'Schlankes CRM für kleinere Vertriebsteams.' },
          { title: 'ActiveCampaign', desc: 'Marketing Automation mit gutem Preis-Leistungs-Verhältnis.' },
          { title: 'Make / Zapier', desc: 'Verbindungen zwischen Tools ohne Programmierung.' },
          { title: 'Brevo / Mailchimp', desc: 'E-Mail-Marketing für einfachere Anforderungen.' }
        ],
        text: 'Wir arbeiten mit Ihren bestehenden Tools. Ein Wechsel ist nur dann ein Thema, wenn er sich wirklich lohnt.'
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb erhält vorqualifizierte Anfragen, ohne nachfragen zu müssen.',
          'Interessenten werden regelmässig und passend weiterbegleitet.',
          'Ihr Marketing-Team hat weniger Handarbeit.',
          'Die Daten im CRM sind aktuell und verlässlich.',
          'Mehr Anfragen lassen sich bearbeiten, ohne dass der Aufwand im gleichen Mass steigt.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wir haben bereits ein CRM. Arbeiten Sie damit?',
        a: 'Ja. Wir bauen auf Ihrem bestehenden System auf. Ziel ist, das Vorhandene besser zu nutzen, nicht alles zu ersetzen.'
      },
      {
        q: 'Wie aufwendig ist Marketing Automation?',
        a: 'Das hängt von Ihrer Ausgangslage ab. Wir starten mit wenigen, einfachen Abläufen und bauen nur dort aus, wo es etwas bringt. Auf Ihrer Seite braucht es vor allem in der Konzeptphase Zeit für Abstimmungen und Freigaben.'
      },
      {
        q: 'Brauchen wir ein grosses Team, um das zu betreiben?',
        a: 'Nein. Automatisierung soll ja gerade einem kleinen Team helfen, mehr zu schaffen. Die Abläufe laufen auch dann, wenn nicht täglich jemand daran arbeitet. Einmal im Monat sollte aber jemand die Zahlen anschauen.'
      },
      {
        q: 'Wie lange dauert es, bis das System läuft?',
        a: 'Die Grundstruktur ist meist nach vier bis acht Wochen in Betrieb. Bis die Abläufe gut eingespielt sind und Sie verlässlich sehen, was sie bringen, vergehen in der Regel mehrere Monate, weil genug Kontakte die Abläufe durchlaufen müssen.'
      }
    ],
    cta: {
      headline: 'Interessenten automatisch weiterbegleiten, statt sie zu verlieren.',
      subheadline: 'In 30 Minuten zeigen wir, wie Automatisierung und CRM für Ihr Unternehmen aussehen könnten.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'revenue-operations',
    hero: {
      headline: 'Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Zahlen.',
      subheadline: 'Wenn Ihre Teams mit unterschiedlichen Daten und Tools arbeiten, gehen Anfragen und Umsatz verloren. Wir sorgen dafür, dass Abläufe, Daten, Tools und Kennzahlen zusammenpassen. Im Englischen heisst das Revenue Operations, kurz RevOps.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Jedes Team misst etwas anderes',
      paragraphs: [
        'Viele Wachstumsprobleme liegen weder im Marketing noch im Vertrieb, sondern in den Abläufen dazwischen.',
        'Teams arbeiten nebeneinander her. Daten liegen verstreut in verschiedenen Tools. Übergaben sind nicht geregelt. Das Marketing zählt Kontakte, der Vertrieb Abschlüsse, die Kundenbetreuung Kündigungen. Den Umsatz als Ganzes betrachtet niemand.',
        'Die Folge: Doppelspurigkeiten, verlorene Verkaufschancen und ein Wachstum, das sich kaum vorhersagen lässt.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Gemeinsame Kennzahlen',
          desc: 'Was messen Sie als Unternehmen? Qualifizierte Anfragen, Verkaufschancen, Kosten pro Neukunde, Kundenwert über die Zeit: Wir legen die Kennzahlen fest, mit denen sich Wachstum steuern lässt.'
        },
        {
          title: 'Einheitliche Abläufe',
          desc: 'Marketing, Vertrieb und Kundenbetreuung arbeiten nach abgestimmten Abläufen. Übergaben funktionieren, niemand fällt durchs Raster.'
        },
        {
          title: 'Tool-Landschaft aufräumen',
          desc: 'Welche Tools werden wirklich genutzt, welche doppeln sich, welche fehlen? Wir prüfen Ihre Tools und sorgen dafür, dass sie sauber verbunden sind.'
        },
        {
          title: 'Saubere Daten',
          desc: 'Gute Entscheidungen brauchen gute Daten. Wir bringen Tracking, CRM-Daten und die Zuordnung zu Kanälen in Ordnung.'
        },
        {
          title: 'Umsatzprognose und Verkaufschancen',
          desc: 'Wir richten Prognosen und regelmässige Durchsichten der offenen Verkaufschancen ein, die realistisch und belastbar sind.'
        },
        {
          title: 'Berichte',
          desc: 'Ein Dashboard, das jede Woche die wichtigen Fragen beantwortet: Wie viele Verkaufschancen sind offen? Wo stehen wir gegenüber den Zielen? Was hat Vorrang?'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Bestandsaufnahme (Woche 1–2)',
          desc: 'Analyse der Abläufe, Prüfung der Tools und der Datenqualität. Wir halten den heutigen Stand fest und zeigen die grössten Lücken.'
        },
        {
          title: 'Konzept (Woche 2–4)',
          desc: 'Wie soll es künftig laufen? Abläufe, Verbindungen zwischen Tools, Kennzahlen und Berichte, verständlich für Ihr Team.'
        },
        {
          title: 'Umsetzung (Woche 4–12)',
          desc: 'Schrittweise Umsetzung, beginnend mit den Bereichen, die am meisten bringen. Nicht alles auf einmal.'
        },
        {
          title: 'Einführung und Schulung (laufend)',
          desc: 'Wir begleiten die Einführung mit Schulung, Dokumentation und regelmässigen Abstimmungen, damit die neuen Abläufe genutzt werden.'
        },
        {
          title: 'Laufende Verbesserung',
          desc: 'Abläufe und Systeme werden regelmässig überprüft und auf Basis von Daten und Rückmeldungen angepasst.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Warum sich das früh lohnt',
        type: 'text',
        text: 'Je früher Marketing, Vertrieb und Kundenbetreuung mit denselben Daten und Abläufen arbeiten, desto einfacher ist die Umstellung. Mit wenigen Mitarbeitenden und wenigen Tools ist das in Wochen erledigt. Wer wartet, bis die Datenlage unübersichtlich geworden ist, braucht für das Aufräumen deutlich mehr Zeit und Geld.'
      },
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'CRM', desc: 'HubSpot, Salesforce, Pipedrive' },
          { title: 'Marketing Automation', desc: 'HubSpot, ActiveCampaign, Marketo' },
          { title: 'Analyse', desc: 'Google Analytics 4, Looker Studio, Tableau' },
          { title: 'Verbindungen', desc: 'Make, Zapier, native Schnittstellen' },
          { title: 'Berichte', desc: 'Looker Studio, HubSpot Reports, Salesforce Reports' },
          { title: 'Weitere', desc: 'je nach Ihren bestehenden Tools' }
        ]
      }
    ],
    faq: [
      {
        q: 'Ab welcher Unternehmensgrösse ist das sinnvoll?',
        a: 'Sobald Marketing, Vertrieb und Kundenbetreuung von unterschiedlichen Personen gemacht werden. Das kann schon bei fünf Mitarbeitenden der Fall sein. Je früher die Grundlagen stehen, desto einfacher.'
      },
      {
        q: 'Wie lange dauert die Umsetzung?',
        a: 'Die Grundstruktur steht in der Regel nach acht bis zwölf Wochen. Bis alle Abläufe eingespielt sind und die Zahlen verlässlich sind, vergehen meist mehrere Monate mit laufenden Anpassungen.'
      },
      {
        q: 'Brauchen wir dafür neue Tools?',
        a: 'Oft nicht. Meist lassen sich die bestehenden Tools besser nutzen. Wenn ein neues Tool nötig ist, empfehlen wir es aufgrund Ihrer Anforderungen. Wir erhalten keine Provisionen von Softwareanbietern.'
      },
      {
        q: 'Ist das nicht einfach ein IT-Projekt?',
        a: 'Nein. Die Technik ist nur das Mittel. Im Kern geht es darum, wie Marketing, Vertrieb und Kundenbetreuung zusammenarbeiten, damit mehr Anfragen zu Kunden werden.'
      }
    ],
    cta: {
      headline: 'Ein gemeinsames Bild für Marketing, Vertrieb und Geschäftsleitung.',
      subheadline: 'In 30 Minuten schauen wir auf Ihre heutigen Abläufe und Tools und zeigen, wo die grössten Lücken liegen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'sales-enablement',
    hero: {
      headline: 'Ihr Vertrieb geht besser vorbereitet in jedes Gespräch.',
      subheadline: 'Wir bringen Marketing und Vertrieb zusammen: mit gemeinsamen Abläufen, Unterlagen, die im Verkaufsgespräch tatsächlich helfen, und klaren Regeln für die Übergabe von Anfragen.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Marketing und Vertrieb arbeiten aneinander vorbei',
      paragraphs: [
        'In vielen Unternehmen arbeiten Marketing und Vertrieb nebeneinander her.',
        'Das Marketing erstellt Unterlagen, die der Vertrieb nicht nutzt. Der Vertrieb klagt über unpassende Anfragen, das Marketing darüber, dass Anfragen liegen bleiben. Wie die Übergabe genau laufen soll, weiss niemand.',
        'Die Folge: längere Verkaufszyklen, verlorene Verkaufschancen und Frust auf beiden Seiten.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie erarbeiten',
      items: [
        {
          title: 'Gemeinsames Verständnis',
          desc: 'Marketing und Vertrieb legen gemeinsam fest: Was ist eine qualifizierte Anfrage? Wann wird sie übergeben? Welche Kennzahlen zählen für beide?'
        },
        {
          title: 'Unterlagen für den Verkauf',
          desc: 'Referenzbeispiele, Vergleiche mit Mitbewerbern, Angebotsvorlagen, Antworten auf häufige Einwände. Unterlagen, die der Vertrieb in echten Gesprächen nutzt.'
        },
        {
          title: 'Klare Übergabe',
          desc: 'Verbindliche Abmachungen zwischen Marketing und Vertrieb: Wann, wie und mit welchen Informationen wird eine Anfrage übergeben, und wie schnell meldet sich der Vertrieb?'
        },
        {
          title: 'Verkaufsprozess analysieren',
          desc: 'Wo gehen Abschlüsse verloren, in welcher Phase und warum? Wir zeigen, wo das Marketing den Vertrieb besser unterstützen kann.'
        },
        {
          title: 'Einarbeitung neuer Mitarbeitender',
          desc: 'Wir stellen die Unterlagen zusammen, mit denen sich neue Verkäuferinnen und Verkäufer schneller einarbeiten: Produktübersichten, Zielgruppenbeschreibungen, Antworten auf Einwände.'
        },
        {
          title: 'Gewonnene und verlorene Abschlüsse auswerten',
          desc: 'Warum werden Aufträge gewonnen, warum verloren? Die Erkenntnisse fliessen in Botschaften, Positionierung und Verkaufsargumente zurück.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Wir schauen uns den heutigen Verkaufsprozess an und führen Gespräche mit Marketing und Vertrieb. Wo hakt es? Wo gehen Abschlüsse verloren?'
        },
        {
          title: 'Workshop (Woche 2–3)',
          desc: 'Marketing und Vertrieb legen gemeinsam Zielgruppen, Kriterien für Anfragen, Übergabe und Kennzahlen fest.'
        },
        {
          title: 'Unterlagen erstellen (Woche 3–8)',
          desc: 'Die wichtigsten Verkaufsunterlagen werden erarbeitet, abgestimmt auf die Situationen, in denen Ihr Vertrieb sie braucht.'
        },
        {
          title: 'Abläufe umsetzen (laufend)',
          desc: 'Übergaben werden dokumentiert und eingeführt, CRM-Felder angepasst, feste Routinen etabliert.'
        },
        {
          title: 'Messen und anpassen',
          desc: 'Werden Anfragen bearbeitet? Wie schnell? Mit welchem Ergebnis? Wir passen die Abläufe anhand dieser Zahlen an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb weiss, welche Anfragen Vorrang haben.',
          'Interessenten kommen besser informiert ins Gespräch.',
          'Das Marketing weiss, was der Vertrieb wirklich braucht.',
          'Verkaufsunterlagen sind aktuell und werden genutzt.',
          'Neue Mitarbeitende im Vertrieb finden sich schneller zurecht.'
        ]
      }
    ],
    faq: [
      {
        q: 'Was, wenn Marketing und Vertrieb grundsätzlich nicht zusammenarbeiten wollen?',
        a: 'Das ist eine Frage der Unternehmenskultur, die sich nicht allein mit Abläufen lösen lässt. Klare Rollen, gemeinsame Kennzahlen und Transparenz schaffen aber die Voraussetzungen, und das hilft oft auch beim Miteinander.'
      },
      {
        q: 'Brauchen wir dafür ein grosses Verkaufsteam?',
        a: 'Nein. Gerade kleine Teams mit zwei bis fünf Personen im Verkauf profitieren, weil jede verlorene Anfrage stärker ins Gewicht fällt.'
      },
      {
        q: 'Wie lange dauert es, und wie viel Zeit braucht es von uns?',
        a: 'Die Analyse und der Workshop dauern rund drei Wochen, die Unterlagen entstehen danach über einige Wochen. Von Ihrem Team brauchen wir vor allem Zeit für Gespräche und Feedback, meist einige Stunden pro Woche.'
      },
      {
        q: 'Wie unterscheidet sich das von der Arbeit an Abläufen und Daten (RevOps)?',
        a: 'Hier geht es um Unterlagen, Schulung und Abläufe für den Vertrieb. Bei RevOps geht es um die Systeme und Daten darunter, etwa CRM und Berichte. Beides ergänzt sich.'
      }
    ],
    cta: {
      headline: 'Marketing und Vertrieb als ein Team.',
      subheadline: 'In 30 Minuten besprechen wir, wo es bei Ihnen zwischen Marketing und Vertrieb am meisten hakt.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'ecommerce-performance',
    hero: {
      headline: 'Ihr Shop hat Besucher. Wir helfen, daraus Käufer zu machen.',
      subheadline: 'Wir verbessern, was zwischen Besuch und Kauf liegt: Kaufquote, Wiederkäufe, Werbeeffizienz und die Daten, die zeigen, wo Umsatz verloren geht.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Viele Shops verlieren Umsatz, den sie schon fast hatten',
      paragraphs: [
        'In den meisten Online-Shops kauft nur ein kleiner Teil der Besucher. Die übrigen gehen wieder, oft kurz vor dem Ziel. Das liegt selten am Algorithmus oder an zu wenig Besuchern, sondern am Ablauf im Shop.',
        'Viele Shops stecken fast ihr ganzes Budget in neue Besucher über Google, Meta oder Influencer. Was danach passiert, bleibt oft unbeachtet: Warum brechen so viele im Warenkorb ab? Warum kauft jemand einmal und nie wieder? Warum steht die Werbung unter Druck, obwohl genug Besucher kommen?',
        'Nachhaltiges Wachstum im E-Commerce entsteht selten durch mehr Budget allein. Es entsteht durch bessere Produktseiten und einen einfacheren Checkout, durch E-Mails, die Kunden zurückholen, durch Messung, die zeigt, welcher Kanal wirklich rentiert, und durch Werbung, die nach Marge gesteuert wird.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Kaufquote verbessern',
          desc: 'Wir analysieren Ihren Shop mit Heatmaps, Sitzungsaufzeichnungen, Auswertung der Kaufschritte und Kundenbefragungen. Daraus entstehen priorisierte Annahmen, die wir testen: Produktseiten, Checkout, mobile Darstellung, Vertrauenselemente und Seitenaufbau.'
        },
        {
          title: 'Wiederkäufe & E-Mail-Marketing',
          desc: 'Wiederkehrende Kunden sind meist die profitabelsten. Wir bauen automatische Abläufe: Begrüssung, E-Mails nach dem Kauf, Rückgewinnung, Treue-Anreize und Newsletter nach Kundengruppen.'
        },
        {
          title: 'Werbung mit Blick auf die Marge',
          desc: 'Betreuung von Google Shopping, Meta und Performance Max. Wir steuern nach Deckungsbeitrag, gliedern Kampagnen nach Produktmargen und bauen nur aus, was rentiert.'
        },
        {
          title: 'Shop-Analyse & Zuordnung',
          desc: 'Welcher Kanal bringt rentable Kunden? Wo springen Besucher ab? Wir bauen die Grundlage: GA4, serverseitiges Tracking, Zuordnung zu Kanälen, Einbezug der Warenkosten und verständliche Dashboards.'
        },
        {
          title: 'Produktfeed & Katalog',
          desc: 'Wir verbessern Titel, Beschreibungen, Kategorien und Feed-Struktur für das Google Merchant Center und den Meta-Katalog, damit Ihre Produkte bei passenden Suchen sichtbar sind.'
        },
        {
          title: 'Technische Shop-Optimierung',
          desc: 'Ladezeiten beeinflussen die Kaufquote. Wir analysieren und verbessern Core Web Vitals, mobile Ladezeiten, die Technik im Checkout und strukturierte Daten.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (1–2 Wochen)',
          desc: 'Wir prüfen Schwachstellen im Shop, Werbekampagnen, Lücken im Tracking und Abbrüche im Kaufprozess und erstellen einen priorisierten Massnahmenplan.'
        },
        {
          title: 'Grundlagen (2–4 Wochen)',
          desc: 'Tracking reparieren, Produktfeeds bereinigen und die wichtigsten E-Mail-Abläufe einrichten, etwa für Warenkorbabbrecher und neue Kunden.'
        },
        {
          title: 'Testen & verbessern (ab Woche 5, laufend)',
          desc: 'A/B-Tests auf Produktseiten und im Checkout, monatliche Überarbeitung der E-Mail-Abläufe und Kampagnensteuerung nach Deckungsbeitrag.'
        },
        {
          title: 'Ausbauen (ab Monat 3)',
          desc: 'Rentable Kanäle schrittweise ausbauen, neue Kundengruppen oder Märkte erschliessen, auf einer soliden Grundlage.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Sie wissen, an welchen Stellen Ihr Shop Käufer verliert.',
          'Änderungen am Shop werden getestet statt nach Gefühl umgesetzt.',
          'Ihre Umsatzdaten sind nachvollziehbar und verlässlicher.',
          'Ladezeiten und Core Web Vitals sind im Blick.',
          'Ihre Kampagnen werden nach Marge gesteuert, nicht nur nach Umsatz.'
        ]
      }
    ],
    faq: [
      {
        q: 'Arbeiten Sie nur mit bestimmten Shop-Systemen?',
        a: 'Wir arbeiten mit Shopify, WooCommerce, Shopware und anderen gängigen Systemen. Analyse, Werbung, E-Mail-Abläufe und die Optimierung der Kaufquote funktionieren auf jeder Plattform. Für tiefere Eingriffe im Shop-Backend arbeiten wir mit erfahrenen Entwicklern zusammen.'
      },
      {
        q: 'Übernehmen Sie die Kampagnen komplett oder nur die Strategie?',
        a: 'Beides ist möglich. Wir übernehmen die Kampagnen vollständig oder prüfen und begleiten Ihr internes Team bzw. Ihre bestehende Agentur.'
      },
      {
        q: 'Wann sehen wir erste Ergebnisse?',
        a: 'Schnelle Verbesserungen im Checkout oder erste E-Mail-Abläufe zeigen oft nach vier bis acht Wochen eine Wirkung. A/B-Tests brauchen genug Bestellungen, um aussagekräftig zu sein, und dauern deshalb meist zwei bis drei Monate, bei kleineren Shops auch länger.'
      }
    ],
    cta: {
      headline: 'Wo verliert Ihr Shop heute Umsatz?',
      subheadline: 'In 30 Minuten schauen wir gemeinsam auf Ihre Zahlen und zeigen, wo Sie am meisten erreichen können.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'dtc-growth-acquisition',
    hero: {
      headline: 'Ihr Produkt ist gut. Jetzt braucht es eine verlässliche Kundengewinnung.',
      subheadline: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine stabile Kundengewinnung. Viel Budget fliesst ohne Struktur in Meta, über Google und E-Mail kommt wenig. Wir bauen eine Kundengewinnung auf mehreren Kanälen auf, deren Kosten Sie kennen.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Was viele Online-Marken am Wachsen hindert',
      paragraphs: [
        'Am Produkt liegt es selten. Viele Schweizer Online-Marken gewinnen ihre ersten Kunden über Empfehlungen, einen erfolgreichen Social-Media-Beitrag oder die ersten Meta-Kampagnen. Wenn das Wachstum dann abflacht, fehlt meist ein System: Das Werbebudget fliesst ohne klare Zuordnung, ohne geplanten Weg zum Kauf und ohne Wissen über den Kundenwert in Meta-Kampagnen.',
        'Die Kosten pro Neukunde steigen oft unbemerkt, weil niemand sie sauber misst. Viele Marken wissen, was ein Neukunde kostet. Was er über zwölf Monate einbringt, wissen die wenigsten. Ohne diese Zahl kaufen Sie Kunden zu Preisen ein, die auf den ersten Blick aufgehen, die Marge aber auffressen. Gleichzeitig bleiben eigene Kanäle liegen: kein SEO, kein Plan für Inhalte, keine E-Mails, die aus Erstkäufern Stammkunden machen.',
        'Die Abhängigkeit von einem einzigen Kanal ist ein grosses Risiko. Eine Änderung bei Apple oder Meta, ein Algorithmus-Wechsel oder ein gesperrtes Werbekonto, und der Umsatz bricht ein. Unser Ziel ist eine Kundengewinnung, die auf mehreren Kanälen steht und deren Wirkung Sie messen können.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Struktur für bezahlte Werbung',
          desc: 'Wir ordnen Ihre Werbekonten neu: saubere Kampagnenstruktur, getrennte Kampagnen für Bekanntheit und Verkauf, kontrollierte Anzeigenhäufigkeit und regelmässig neue Anzeigen. Meta bleibt ein wichtiger Kanal, aber nicht mehr der einzige. Wir testen systematisch und bauen nur aus, was sich rechnet.'
        },
        {
          title: 'Kosten pro Kunde und Kundenwert',
          desc: 'Jede Entscheidung soll auf Zahlen beruhen, die Sie kennen. Wir richten eine einfache, robuste Auswertung ein: Kosten pro Neukunde nach Kanal und Kampagne, Kundenwert nach Kaufmonat, Gewinnschwelle nach Produkt. So sehen Sie, wo Sie Geld verdienen und wo nicht.'
        },
        {
          title: 'Weg zum Kauf & Shop-Optimierung',
          desc: 'Klicks allein bringen keinen Umsatz. Wir analysieren Landingpages, Produktseiten und Checkout und finden heraus, wo Interessenten abspringen. Gezielte Verbesserungen senken die Kosten pro Kauf, ohne dass Sie mehr Werbebudget brauchen. Rechenbeispiel: Steigt die Kaufquote von 1 auf 2 Prozent, halbieren sich bei gleichem Budget die Werbekosten pro Kauf.'
        },
        {
          title: 'SEO und eigene Kanäle',
          desc: 'Bezahlte Werbung bringt Reichweite, eigene Kanäle schonen die Marge. Wir entwickeln eine SEO-Strategie mit Fokus auf Kaufabsicht: Inhalte für Menschen, die nach Ihrem Produkt oder Ihrer Kategorie suchen. Mittelfristig senkt das Ihre durchschnittlichen Kosten pro Neukunde.'
        },
        {
          title: 'E-Mail & Wiederkäufe',
          desc: 'Der günstigste Kunde ist einer, den Sie schon haben. Wir bauen E-Mail-Abläufe, die aus Erstkäufern Wiederkäufer machen: Begrüssung, E-Mails nach dem Kauf, Rückgewinnung. Jeder zusätzliche Wiederkauf erhöht den Kundenwert und senkt die Kosten pro Kunde.'
        },
        {
          title: 'Weitere Kanäle & Testplan',
          desc: 'Einen Grossteil des Budgets in einen einzigen Kanal zu stecken, ist riskant. Wir erstellen einen Testplan für weitere Kanäle: Google Shopping, Pinterest, TikTok Ads, Influencer mit erfolgsabhängiger Vergütung oder Suchanzeigen, je nach Produkt und Zielgruppe.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse & Datengrundlage',
          desc: 'Bevor wir Budget verschieben, verstehen wir, was bereits da ist. Wir analysieren Kampagnen, Tracking, Shop und Kundendaten. Was kostet ein Neukunde je Kanal wirklich? Wie hoch ist Ihre Wiederkaufrate? Wo springen Interessenten ab?'
        },
        {
          title: 'Grundlagen schaffen',
          desc: 'Tracking, saubere Kampagnenstruktur, erste Shop-Optimierungen, E-Mail-Abläufe einrichten oder reparieren. Diese Phase ist weniger spektakulär als «einfach mehr Werbung», aber die Voraussetzung dafür, dass späteres Wachstum funktioniert.'
        },
        {
          title: 'Testen & prüfen',
          desc: 'Anzeigen, Kanäle und Varianten im Shop werden systematisch getestet, mit festgelegten Kennzahlen und klaren Regeln, ab wann etwas als bewährt gilt. Wir testen mit kleinem Budget und bauen nur aus, was diese Schwelle erreicht.'
        },
        {
          title: 'Ausbauen & optimieren',
          desc: 'Was sich bewährt, wird ausgebaut, was nicht funktioniert, wird abgeschaltet. Monatlicher Bericht mit klaren Kennzahlen, regelmässige Besprechungen, und jeder neue Kaufmonat liefert Daten für die nächste Entscheidung.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Typische Ausgangslage: Eine Schweizer Online-Marke steckt fast das ganze Werbebudget in Meta, die Kampagnen sind über die Jahre gewachsen und unübersichtlich, und niemand weiss genau, was ein Neukunde kostet. Erste Schritte sind dann meist, das Tracking zu reparieren, die Kampagnen neu zu ordnen, den Checkout zu vereinfachen und E-Mail-Abläufe für Wiederkäufe aufzubauen. Erst danach lohnt es sich, das Budget zu erhöhen oder neue Kanäle zu testen.'
      }
    ],
    faq: [
      {
        q: 'Wir schalten bereits Meta-Anzeigen. Was machen Sie anders?',
        a: 'Wir bringen Struktur in die Kampagnen, richten eine Messung ein, die nicht allein auf den Zahlen von Meta beruht, und bauen einen festen Ablauf für das Testen neuer Anzeigen auf. Ziel ist nicht mehr Budget in Meta, sondern mehr Ergebnis pro eingesetztem Franken.'
      },
      {
        q: 'Wie lange dauert es, bis wir Ergebnisse sehen?',
        a: 'Verbesserungen im Shop zeigen oft nach vier bis acht Wochen eine Wirkung, wenn klare Schwachstellen behoben werden. Neu aufgebaute Kampagnen brauchen meist sechs bis zehn Wochen, bis die Ergebnisse stabil sind. SEO und eigene Kanäle wirken über sechs bis zwölf Monate.'
      },
      {
        q: 'Wir haben ein kleines Team und wenig Zeit. Passt das zu uns?',
        a: 'Ja. Wir übernehmen Umsetzung, Überwachung und Optimierung. Sie erhalten regelmässige Berichte und klare Entscheidungsgrundlagen. Von Ihrer Seite braucht es vor allem Zugänge, Produktwissen und kurze Freigaben.'
      }
    ],
    cta: {
      headline: 'Der nächste Wachstumsschritt beginnt mit den richtigen Zahlen.',
      subheadline: 'Viele Online-Marken wissen nicht genau, was ein Neukunde kostet und was er einbringt. Im Erstgespräch schauen wir uns das gemeinsam an.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'customer-retention',
    hero: {
      headline: 'Machen Sie aus Erstkäufern Stammkunden.',
      subheadline: 'Einen bestehenden Kunden zu halten ist in der Regel deutlich günstiger, als einen neuen zu gewinnen. Trotzdem fehlt vielen Unternehmen ein System, das Bestandskunden gezielt anspricht und inaktive Kunden zurückholt. Wir bauen es auf, für Online-Shops, Software-Anbieter und B2B-Dienstleister.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Wachstum nur über Neukunden ist teuer',
      paragraphs: [
        'Viele Unternehmen kennen ihre Kosten pro Neukunde genau. Was ein Kunde über zwei, drei oder fünf Jahre wert ist, wissen sie nicht, weil sie ihn nie gezielt weiterentwickelt haben. Der Kundenwert bleibt eine Schätzung.',
        'Im E-Commerce heisst das: Ein Kunde kauft einmal, verschwindet, und ihn über Werbung zurückzuholen kostet erneut Geld, wenn er überhaupt zurückkommt. Oft fehlt einfach die Kommunikation nach dem Kauf: kein Anlass für den zweiten Kauf, keine Nachricht im richtigen Moment.',
        'Im B2B ist das Muster ähnlich, nur teurer: Ein Kunde wird gewonnen, eingeführt, und danach passiert wenig. Kein strukturiertes Zusatzangebot, kein regelmässiges Gespräch, kein Warnsignal vor der Kündigung. Abwanderung fällt erst auf, wenn die Rechnung ausbleibt. Einen verlorenen Kunden zurückzugewinnen ist aufwendiger, als ihn zu halten.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'E-Mails nach dem Kauf & Einführung',
          desc: 'Die Zeit direkt nach dem Kauf ist entscheidend und wird oft verschenkt. Wir bauen E-Mail- und SMS-Abläufe für die Zeit nach dem ersten Kauf: Anleitungen, passende Ergänzungsprodukte, Bitte um Bewertung, Einführung.'
        },
        {
          title: 'Rückgewinnung & Kündigungen vorbeugen',
          desc: 'Inaktive Kunden sind nicht verloren. Wir bauen E-Mail-Strecken, die sie gezielt wieder ansprechen. Im B2B ergänzen wir Frühwarnzeichen: Verhaltenssignale, die auf ein Kündigungsrisiko hinweisen, bevor der Kunde kündigt.'
        },
        {
          title: 'Treue- und Wiederkaufprogramme',
          desc: 'Treue entsteht durch gute Erfahrungen. Wir entwickeln Programme, die zu Ihrem Geschäftsmodell passen: Punkte oder Stufen im E-Commerce, Empfehlungsprogramme im B2B oder besondere Konditionen für Ihre besten Kunden.'
        },
        {
          title: 'Zusatzangebote automatisieren',
          desc: 'Der einfachste Weg zu mehr Umsatz ist oft das passende Angebot an einen bestehenden Kunden zur richtigen Zeit. Wir richten Auslöser ein, die auf Kaufhistorie, Nutzung und Kundengruppe beruhen.'
        },
        {
          title: 'Kundenwert & Wiederkäufe messen',
          desc: 'Wir bauen die Auswertung, die Kundenbindung sichtbar macht: Analyse nach Kaufmonat, Kundenwert je Gruppe, Abwanderung und Wiederkaufrate. So sehen Sie, welche Kunden wirklich rentabel sind.'
        },
        {
          title: 'E-Mail- und CRM-Grundlagen',
          desc: 'Kundenbindung ist nur so gut wie die Technik dahinter. Wir prüfen und verbessern Ihre E-Mail-Infrastruktur: Zustellbarkeit, Segmente, Aufbau der Automatisierungen, CRM-Anbindung und Datenpflege.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse der Kundenbasis',
          desc: 'Auswertung Ihrer Kunden nach Kaufhäufigkeit, Kundenwert, Abwanderung und Wiederkaufverhalten. Prüfung der bestehenden E-Mails und Automatisierungen.'
        },
        {
          title: 'Grundlagen & erste Abläufe',
          desc: 'CRM und E-Mail-System einrichten, Kundengruppen festlegen, Dashboard aufsetzen. Die ersten Abläufe für Begrüssung und die Zeit nach dem Kauf gehen live.'
        },
        {
          title: 'Optimierung & Ausbau',
          desc: 'Monatliche Überarbeitung der Abläufe anhand von Öffnungen, Klicks und Käufen. Aufbau von Treueprogramm und Zusatzangeboten.'
        },
        {
          title: 'Weitere Kanäle',
          desc: 'Wenn die Grundlage steht: Ausbau auf weitere Kanäle wie WhatsApp oder SMS, Retargeting für bestimmte Kundengruppen, Quartalsbesprechung mit klaren Kennzahlen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Typische Ausgangslage: Ein Schweizer Online-Shop hat eine solide Kundenbasis, verschickt aber ausser der Bestellbestätigung kaum E-Mails. Wiederkäufe passieren zufällig, und niemand weiss genau, wie viele Kunden ein zweites Mal bestellen. Wir beginnen dann mit einer Auswertung der Kundenbasis nach Kaufmonat, bauen E-Mails für die Zeit nach dem Kauf und eine Rückgewinnungsstrecke für inaktive Kunden auf und messen von Anfang an, wie sich die Wiederkaufrate entwickelt.'
      }
    ],
    faq: [
      {
        q: 'Ab welcher Kundenzahl lohnt sich das?',
        a: 'Als grobe Orientierung: Im E-Commerce lohnt sich der Aufbau meist ab einigen hundert aktiven Käufern. Im B2B kann es schon mit wenigen Dutzend Kunden sinnvoll sein, weil jeder einzelne Kunde mehr wert ist. Wir prüfen das im Erstgespräch für Ihren Fall.'
      },
      {
        q: 'Arbeiten Sie mit unserem bestehenden E-Mail-Tool oder müssen wir wechseln?',
        a: 'Wir arbeiten mit dem, was Sie haben. Die meisten Probleme liegen nicht am Tool, sondern an fehlender Struktur und Segmentierung. Wir arbeiten unter anderem mit Klaviyo, HubSpot, ActiveCampaign und Mailchimp.'
      },
      {
        q: 'Was ist realistisch, und wie schnell?',
        a: 'Die ersten Abläufe sind meist innert vier bis sechs Wochen live. Ob sie wirken, zeigt sich über mehrere Monate, weil Kunden erst einen Kaufzyklus durchlaufen müssen. Wie stark sich die Wiederkaufrate verbessert, hängt von Produkt, Kauffrequenz und Kundenzufriedenheit ab. Konkrete Prozentversprechen machen wir deshalb nicht.'
      }
    ],
    cta: {
      headline: 'Ihre Bestandskunden sind ein oft unterschätzter Hebel.',
      subheadline: 'In 30 Minuten schauen wir gemeinsam, wie viel Potenzial in Ihrer bestehenden Kundenbasis steckt und was es braucht, es zu nutzen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'paid-social-ecommerce',
    hero: {
      headline: 'Ihr ROAS sieht gut aus. Aber verdienen Sie auch daran?',
      subheadline: 'Viele Online-Shops steuern ihre Meta- und TikTok-Kampagnen nach ROAS, also Umsatz pro Werbefranken. Produktmarge, Versandkosten und Rücksendungen stecken darin nicht. Wir steuern nach Deckungsbeitrag, damit Ihre Werbung Gewinn bringt und nicht nur Umsatz.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Ein guter ROAS heisst noch nicht, dass Sie Geld verdienen',
      paragraphs: [
        'Ein Rechenbeispiel: Angenommen, Sie geben CHF 10\'000 pro Monat für Meta Ads aus und der gemeldete ROAS liegt bei 4. Die Berichte sehen gut aus, und trotzdem bleibt am Monatsende weniger übrig als erwartet. Das liegt meist nicht am Zufall, sondern daran, was gemessen wird.',
        'ROAS misst Umsatz pro Werbefranken. Er zeigt nicht, wie hoch Ihre Produktmarge ist, was Versand und Rücksendungen kosten, und dass der Algorithmus oft günstige Produkte mit vielen Klicks bevorzugt statt Ihrer margenstarken Artikel. Rechenbeispiel: Bei 30 Prozent Marge brauchen Sie einen ROAS von rund 3.3, nur um die Werbekosten zu decken, ohne Versand und Retouren. Bei 20 Prozent Marge liegt diese Schwelle bei 5.',
        'Dazu kommt: Was mit kleinem Budget funktioniert, muss mit grösserem Budget nicht genauso funktionieren. Meta zeigt die Anzeigen dann auch weniger passenden Zielgruppen, und die Kosten pro Kauf steigen. Wer das nicht einplant, baut Kampagnen aus, die sich nicht mehr rechnen. Und auf TikTok kostet Werbung ohne klares Konzept für die Anzeigen viel Geld für Aufrufe ohne Käufe.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Kampagnen nach Marge',
          desc: 'Bevor wir eine Kampagne aufsetzen, schauen wir uns Ihre Produktmargen an. Margenstarke Produkte werden bevorzugt beworben, Kampagnen nach Margengruppen getrennt und das Budget nach möglichem Deckungsbeitrag verteilt.'
        },
        {
          title: 'Meta Ads: Aufbau & Betreuung',
          desc: 'Kampagnenaufbau auf Facebook und Instagram, getrennt nach Neukunden, Retargeting und Bestandskunden. Kampagnenziele je nach Phase gewählt, Anzeigentests geplant.'
        },
        {
          title: 'TikTok Ads & Anzeigenkonzept',
          desc: 'TikTok funktioniert nur mit passenden Anzeigen: natürlich wirkende Inhalte, die nicht nach Werbung aussehen. Wir erstellen Briefings für TikTok-gerechte Anzeigen und testen Einstiege und Formate.'
        },
        {
          title: 'Tracking & Zuordnung',
          desc: 'Serverseitiges Tracking über die Meta Conversions API und die TikTok Events API, damit auch nach den Tracking-Einschränkungen von Apple möglichst vollständige Daten ankommen.'
        },
        {
          title: 'Anzeigen systematisch testen',
          desc: 'Nicht jede Anzeige funktioniert, und keine funktioniert für immer. Wir bauen einen festen Testablauf: klare Annahmen, saubere Tests, regelmässig neue Varianten.'
        },
        {
          title: 'Monatliche Gewinnauswertung',
          desc: 'Kein Bericht, der nur den ROAS zeigt. Jeden Monat werten wir aus: Deckungsbeitrag pro Kampagne, Gewinn nach Marge und Versandkosten, kostendeckender ROAS im Vergleich zum erreichten.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Prüfung & Margenanalyse',
          desc: 'Wir prüfen bestehende Kampagnen auf Marge und tatsächlichen Gewinn, ausserdem Tracking und Produktmargen, um rasch umsetzbare Verbesserungen zu finden.'
        },
        {
          title: 'Struktur & Tracking',
          desc: 'Kampagnen werden nach Marge und Phase neu aufgebaut oder umgebaut. Serverseitiges Tracking über die Meta Conversions API und die TikTok Events API wird eingerichtet oder repariert.'
        },
        {
          title: 'Start & erste Tests',
          desc: 'Kampagnen gehen mit einem Startbudget live, erste Anzeigentests laufen. Wöchentliche Auswertung und Verteilung des Budgets nach Deckungsbeitrag.'
        },
        {
          title: 'Ausbau & Optimierung',
          desc: 'Wenn die Kampagnen rentabel laufen und das Tracking verlässlich ist, erhöhen wir das Budget kontrolliert und bringen laufend neue Anzeigen auf Basis der Erkenntnisse.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Typische Ausgangslage: Ein Online-Shop bewirbt vor allem Produkte, die viele Klicks bringen, aber wenig Marge haben. Der ROAS im Werbekonto wirkt ordentlich, der Gewinn nach Warenkosten, Versand und Retouren ist es nicht. Wir rechnen dann zuerst für jede Produktgruppe aus, ab welchem ROAS sie kostendeckend ist, richten serverseitiges Tracking ein und bauen die Kampagnen so um, dass margenstarke Produkte mehr Budget erhalten.'
      }
    ],
    faq: [
      {
        q: 'Was machen Sie anders als eine klassische Performance-Agentur?',
        a: 'Viele Agenturen berichten vor allem über den ROAS, weil er einfach zu messen ist. Wir beziehen Ihre Produktmargen ein und steuern die Kampagnen nach Deckungsbeitrag.'
      },
      {
        q: 'Müssen wir bestehende Kampagnen komplett neu aufbauen?',
        a: 'Das zeigt die Prüfung. Oft lassen sich funktionierende Kampagnen verbessern. Wenn die bisherige Ausrichtung aber falsche Signale an den Algorithmus sendet, ist ein sauberer Neuaufbau meist wirksamer.'
      },
      {
        q: 'Wie lange dauert es, bis Paid Social rentabel ist, und was kostet es?',
        a: 'In den ersten vier bis acht Wochen sammeln wir Daten, testen Anzeigen und lassen die Algorithmen lernen. In dieser Zeit liegen die Kampagnen oft erst etwa bei der Gewinnschwelle. Ein rentabler Ausbau ist meist ab Woche acht bis zwölf realistisch. Als Richtwert empfehlen wir ein Werbebudget ab CHF 3\'000 bis 5\'000 pro Monat, damit genug Daten zusammenkommen. Das Betreuungshonorar offerieren wir separat nach dem Erstgespräch.'
      }
    ],
    cta: {
      headline: 'Wie rentabel sind Ihre Anzeigen wirklich?',
      subheadline: 'Im Erstgespräch schauen wir auf Ihre Kampagnen und rechnen gemeinsam aus, ab welchem ROAS sie sich lohnen. 30 Minuten, kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  }
];
