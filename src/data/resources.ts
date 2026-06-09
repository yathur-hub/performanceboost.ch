import { ResourceItem } from '../types';

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'guide-b2b-playbook-2026',
    type: 'guide',
    title: 'The B2B Go-To-Market Playbook für die Schweiz & DACH',
    slug: 'b2b-gtm-playbook-dach',
    description: 'Das ultimative Handbuch für 2026: Wie du Marketing und Vertrieb verzahnst und ohne unrentablen Kaltakquise-Spam wächst.',
    tags: ['Go-To-Market', 'Growth Strategy', 'Playbook', 'Lead Gen'],
    readTime: '15 Min. Lesezeit',
    publishDate: '10. Juni 2026',
    author: 'Yathur Nathan',
    content: `## Vorwort
In einer digital übersättigten Welt funktioniert stumpfer "Spam-Outreach" nicht mehr. Schweizer Unternehmen suchen nach vertrauensvollen, nutzenstarken Interaktionen.

## Core Pillars des Playbooks
1. **Demand Generation vs Lead Gen**: Höre auf, wertlose E-Mail-Adressen für schlechte E-Books einzusammeln. Generiere stattdessen Nachfrage, sodass Interessenten aktiv Beratung buchen wollen.
2. **Unified Metrics (RevOps)**: Marketing zahlt auf Pipeline ein, nicht auf Klicks. Der Vertrieb muss MQLs innerhalb von 15 Minuten kontaktieren.
3. **AI-Driven Data Enrichment**: Qualifiziere Kontakte vollautomatisch vor, bevor dein Verkäufer überhaupt den Hörer abhebt.`
  },
  {
    id: 'guide-ai-automation-marketing',
    type: 'guide',
    title: 'AI & Automatisierung im B2B-Vertrieb: Schritt-für-Schritt',
    slug: 'ai-automation-b2b-sales',
    description: 'Wie KMUs modernste KI-Agenten in Make.com und HubSpot aufbauen, um administrative Routine um 80% zu senken.',
    tags: ['AI & Automation', 'Make.com', 'n8n', 'HubSpot'],
    readTime: '12 Min. Lesezeit',
    publishDate: '18. April 2026',
    author: 'Yathur Nathan',
    content: `## Einführung
Künstliche Intelligenz ist weit mehr als ChatGPT. In diesem Guide zeigen wir dir, wie du echte API-Verbindungen aufbauen kannst, um B2B-Verkaufschancen vollautomatisch zu bewerten und anzureichern.

## Automatisierungs-Workflow
- **Trigger**: Neuer Lead bucht Gespräch via Calendly.
- **Action 1**: AI sucht die Website des Leads ab und extrahiert Mitarbeiteranzahl, Umsatz und Tech-Stack.
- **Action 2**: LLM formuliert 3 personalisierte Eisbrecher-Sätze für das sales Deck.
- **Action 3**: E-Mail-Zustellung des fertigen "Briefing-Sheets" an den zuständigen Account Manager 10 Minuten vor dem Call.`
  },
  {
    id: 'blog-demand-gen-vs-lead-gen',
    type: 'blog',
    title: 'Warum klassische "Lead Generation" im B2B tot ist (und was jetzt funktioniert)',
    slug: 'why-b2b-lead-gen-is-dead',
    description: 'Wer heute noch Leads hinter geschlossenen PDF-Gattern versteckt, verliert wertvollen Traffic. Die Zukunft gehört der Demand Generation.',
    tags: ['Demand Generation', 'B2B Marketing', 'Strategy'],
    readTime: '5 Min. Lesezeit',
    publishDate: '29. Mai 2026',
    author: 'Yathur Nathan',
    content: `## Der Status Quo
Jeder kennt es: Du trägst deine Telefonnummer ein, um eine Checkliste herunterzuladen. Fünf Minuten später wirst du von einem übereifrigen Verkäufer angerufen, obwohl du eigentlich nur kurz nachdenken wolltest.

## Das Resultat
Frustrierte Nutzer, gefälschte Telefonnummern ("01234567") und verschwendete Vertriebszeit.

## Die Lösung: Demand Gen
Stelle deinen besten Content komplett kostenfrei zur Verfügung. Erkläre deine Lösungen detailliert auf LinkedIn, YouTube, in Blogs. Wenn Kunden die Tragweite begreifen, kommen sie von sich aus. Das Resultat sind hervorragende Abschlussquoten und Kunden, die dich bereits kennen und schätzen.`
  },
  {
    id: 'blog-swiss-data-tracking',
    type: 'blog',
    title: 'Neues Datenschutzgesetz (DSG) Schweiz: Compliance und Tracking vereint',
    slug: 'swiss-dsg-tracking-compliance',
    description: 'Wie du lückenloses Server-Side Webtracking aufbaust und gleichzeitig alle Vorgaben des Schweizer DSG und der DSGVO einhalten kannst.',
    tags: ['Data & Analytics', 'Tracking', 'DSGVO', 'Datenschutz'],
    readTime: '7 Min. Lesezeit',
    publishDate: '12. März 2026',
    author: 'Yathur Nathan',
    content: `## Die geänderte Gesetzeslage
Das neue Schweizer Datenschutzgesetz (DSG) verlangt umfassende Transparenz über die Datenverarbeitung. Einfache Drittschnittstellen (wie Client-Side Facebook Pixels) stehen rechtlich auf wackeligen Beinen.

## Die technische Rettung: Server-Side Tagging
Durch das Vorschalten eines eigenen Tracking-Webservers (z. B. auf Google Cloud Run im Schweizer Rechenzentrum) behältst du die volle Kontrolle über die Daten. Du entscheidest, welche IP-Adressen geschwärzt werden und welche Parameter an Google, Meta oder LinkedIn weitergegeben werden.`
  }
];
