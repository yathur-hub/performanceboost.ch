/** /referenzen: bestehende Kundenstimmen, wörtlich. Keine Kennzahlen, keine erfundenen Fallstudien. */
import { Visual3D } from '../components/Visual3D';
import React from 'react';
import { TESTIMONIALS_DATA } from '../components/home/ClientTestimonials';
import { Breadcrumb, Container, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { SERVICE_AREAS } from '../data/serviceAreas';
import { LeadCtaSection } from '../components/bp/Conversion';

/** Schwerpunkte der Zusammenarbeit, abgeleitet aus dem Wortlaut der jeweiligen Kundenstimme. */
const FOCUS: Record<string, string[]> = {
  'simon-karrica': ['Kundengewinnung', 'Prozesse', 'Webentwicklung'],
  'janis-bloechliger': ['E-Commerce', 'Performance Marketing', 'Ad-Visuals'],
  'tiago-garcia': ['Strategie', 'Leadgenerierung', 'Technik'],
  'kathirsan-kathirgamanathan': ['MarTech', 'Webentwicklung', 'Content'],
  'sirac-akyol': ['Onlineshop', 'Customer Journey', 'Performance Marketing'],
  'ibrahim-akyol': ['Onlineshop', 'Datenanalyse', 'Performance Marketing'],
  'carla-carcaiso': ['Website', 'ERP-System', 'Prozesse'],
};

export default function ReferencesView() {
  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id="references-view">
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'Referenzen' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="hero-enter lg:col-span-8 max-w-3xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Was unsere Kundinnen und Kunden sagen.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Hier lesen Sie, was Unternehmen über die Zusammenarbeit mit performanceboost sagen, ob wir mit ihnen Kampagnen, einen
              Onlineshop oder ein eigenes ERP-System aufgebaut haben. Alle Aussagen sind unverändert und namentlich gezeichnet.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-4 justify-center rocket-in">
            <Visual3D id="trophy" priority sizes="220px" className="h-72 w-auto animate-float" />
          </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <li key={t.id} className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-9 flex flex-col gap-6 shadow-[var(--shadow-premium-sm)]">
                <div className="flex items-center gap-4">
                  {t.imageUrl ? (
                    <img
                      src={t.imageUrl}
                      alt={`Porträt ${t.name}`}
                      loading="lazy"
                      decoding="async"
                      width={56}
                      height={56}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <span className="w-14 h-14 rounded-full bg-[#686CFA]/10 text-[#4f54d6] font-display font-bold flex items-center justify-center" aria-hidden="true">
                      {t.name.split(' ').map((p) => p[0]).join('').slice(0, 2)}
                    </span>
                  )}
                  <div>
                    <h2 className="font-display font-semibold text-slate-900">{t.company}</h2>
                    <p className="text-xs text-slate-500">
                      {t.name}, {t.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-body-sm text-slate-700 leading-relaxed">«{t.quote}»</blockquote>
                <ul className="mt-auto flex flex-wrap gap-2" aria-label="Schwerpunkte der Zusammenarbeit">
                  {(FOCUS[t.id] ?? []).map((f) => (
                    <li key={f} className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading title="Was wir mit unseren Kunden aufbauen" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_AREAS.map((a) => (
              <TeaserCard key={a.id} href={`/leistungen/${a.id}`} title={a.label} desc={a.teaser} />
            ))}
          </div>
        </Container>
      </section>

      <LeadCtaSection formLocation="referenzen" title="Möchten Sie wissen, wo Ihr Unternehmen zulegen kann?" />
    </div>
  );
}
