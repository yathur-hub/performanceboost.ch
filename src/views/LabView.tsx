/** Labor: eigene Experimente mit KI und Automation, ehrlicher Reifegrad (/labor). Daten: src/data/martechWissen.ts (LAB_ITEMS). */
import React from 'react';
import { Breadcrumb, Container, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { LeadCtaSection } from '../components/bp/Conversion';
import { LAB_ITEMS, type LabStatus } from '../data/martechWissen';

const STATUS_STYLE: Record<LabStatus, string> = {
  'Im Einsatz': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Im Aufbau': 'bg-amber-50 text-amber-700 border-amber-200',
  Erkundung: 'bg-slate-50 text-slate-600 border-slate-200',
};

export default function LabView() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800" id="labor">
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'MarTech-Wissen', href: '/martech' }, { label: 'Labor' }]} />
          <div className="max-w-4xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Das Labor: was ich selbst baue.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Bevor ich Ihnen einen Agenten oder eine Automatisierung empfehle, habe ich sie meistens selbst gebaut und betrieben. Hier stehen die eigenen Experimente,
              mit ehrlichem Reifegrad: was im Einsatz ist, was im Aufbau ist und was ich erst erkunde. Dazu jeweils, was ich daraus gelernt habe.
            </p>
            <p className="text-sm text-slate-500">Yathur Nathan, Inhaber von performanceboost</p>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LAB_ITEMS.map((it) => (
              <article key={it.title} className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-8 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg sm:text-xl font-display font-semibold text-slate-900 leading-snug">{it.title}</h2>
                  <span className={`shrink-0 text-[11px] font-bold rounded-full border px-2.5 py-1 ${STATUS_STYLE[it.status]}`}>{it.status}</span>
                </div>
                <p className="text-body-sm text-slate-700 leading-relaxed">{it.desc}</p>
                <p className="text-body-sm text-slate-600 leading-relaxed border-l-2 border-[#686DF4] pl-4">
                  <span className="font-semibold text-slate-900">Gelernt: </span>
                  {it.learning}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                  {it.stack.map((s) => (
                    <li key={s} className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading title="Vom Labor in Ihr Unternehmen" intro="Was sich im eigenen Betrieb bewährt, biete ich als Leistung an, mit Festpreis und klar definiertem Ergebnis." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TeaserCard href="/leistungen/ki-agenten" title="KI-Agenten für Marketing & Vertrieb" desc="Agenten, die ganze Abläufe übernehmen, mit Freigabe durch Ihr Team." linkText="Zur Leistung" />
            <TeaserCard href="/leistungen/ki-im-unternehmen" title="KI im Unternehmen" desc="Standortbestimmung, Schulung, Regeln und Begleitung." linkText="Zum Leistungsfeld" />
            <TeaserCard href="/werkzeuge" title="Werkzeuge" desc="Womit ich arbeite, nach Schicht geordnet." linkText="Werkzeuge ansehen" />
          </div>
        </Container>
      </section>

      <LeadCtaSection formLocation="labor" />
    </div>
  );
}
