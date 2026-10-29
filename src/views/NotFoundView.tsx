import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (path: string) => void;
}

const LINKS = [
  { href: '/', label: 'Startseite' },
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/loesungen', label: 'Branchen' },
  { href: '/ueber-uns', label: 'Über uns' },
];

export default function NotFoundView({ onNavigate }: NotFoundViewProps) {
  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <section className="pt-36 pb-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-xs font-mono font-bold tracking-wider text-[#686DF4]">FEHLER 404</p>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-slate-950">
          Diese Seite gibt es nicht (mehr).
        </h1>
        <p className="text-slate-600 leading-relaxed">
          Vielleicht hat sich die Adresse geändert. Über die folgenden Seiten finden Sie weiter, oder Sie schreiben uns direkt.
        </p>
        <nav aria-label="Weiterführende Seiten" className="flex flex-wrap justify-center gap-3 pt-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className="inline-flex items-center gap-1.5 min-h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 hover:border-[#686DF4] hover:text-[#686DF4] transition-colors"
            >
              {l.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
