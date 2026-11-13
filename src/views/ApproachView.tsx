/**
 * /ansatz: Vorgehensmodell (Delivery Framework) für alle drei Bereiche.
 * Die Phasen sind keine Leistungen. Sie sind modular: Einstieg je nach Ausgangslage, 03 und 04 wiederholen sich.
 * Daten: src/data/approach.ts. Ersetzt /leistungen/strategie (301).
 */
import React from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Breadcrumb, Container, CtaButton, FaqList, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { HeroTrust, LeadCtaSection } from '../components/bp/Conversion';
import { PHASES, PRINCIPLES, WORK_MODES } from '../data/approach';
import { AREAS } from '../data/serviceAreas';
import Link from '../components/Link';
import { Visual3D } from '../components/Visual3D';

const FAQ = [
  {
    q: 'Müssen wir alle vier Phasen durchlaufen?',
    a: 'Nein. Wer bereits ein klares Zielbild hat, startet mit der Umsetzung. Wer ein CRM hat, das kaum genutzt wird, beginnt beim Enablement. Und wenn alles läuft, aber besser werden soll, steigen wir direkt in die laufende Optimierung ein. Wir klären im Erstgespräch, welche Phase zu Ihrer Ausgangslage passt.',
  },
  {
    q: 'Was bedeutet Hypercare?',
    a: 'Die ersten Wochen nach dem Start einer neuen Lösung. In dieser Zeit beobachten wir Abläufe, Daten und Fehlermeldungen besonders eng, beheben Probleme schnell und passen an, was sich im Alltag anders zeigt als im Test.',
  },
  {
    q: 'Wie lange dauert ein Vorhaben?',
    a: 'Eine Performance-Analyse dauert meist zwei bis drei Wochen, ein Umsetzungsprojekt je nach Umfang einige Wochen bis wenige Monate. Die laufende Optimierung ist eine Begleitung ohne festes Ende, mit einer monatlichen Auswertung.',
  },
  {
    q: 'Was passiert, wenn wir nach einem Projekt selbst weitermachen?',
    a: 'Das ist ausdrücklich vorgesehen. Dafür gibt es das Enablement: Ihr Team erhält Dokumentation, Schulung mit eigenen Fällen und eine klare Regel, wer bei Fehlern was tut. Wir bleiben als Ansprechpartner erreichbar, wenn Sie es wünschen.',
  },
];

export default function ApproachView() {
  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id="ansatz">
      {/* HERO */}
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'Ansatz' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="hero-enter lg:col-span-8 max-w-4xl space-y-6">
              <p className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-[#686CFA]">Unser Ansatz</p>
              <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
                Vier Phasen, die sich nach Ihrer Ausgangslage richten.
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
                Wir verbessern Marketing, Vertrieb und Prozesse nach einem klaren Vorgehen: Zielbild festlegen, umsetzen und stabil in Betrieb
                nehmen, Ihr Team befähigen und laufend optimieren. Nicht jedes Vorhaben braucht alle vier Phasen. Wir steigen dort ein, wo
                Ihr Unternehmen heute steht.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <CtaButton label="Mit einer Performance-Analyse starten" location="ansatz_hero" pageSlug="ansatz" />
              </div>
              <HeroTrust />
            </div>
            <div className="hidden lg:flex lg:col-span-4 justify-center rocket-in">
              <Visual3D id="steps" priority sizes="320px" className="max-h-72 w-auto max-w-full animate-float" />
            </div>
          </div>
        </Container>
      </section>

      {/* DIE VIER PHASEN: 01–02 als Projekt, 03–04 als wiederkehrender Kreislauf */}
      <section>
        <Container className="space-y-8">
          <SectionHeading
            title="Die vier Phasen"
            intro="Architecture & Setup und Roll-out & Hypercare bilden meist ein Projekt mit klarem Ende. Enablement und Iteration & Optimization wiederholen sich, solange wir zusammenarbeiten."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              { label: 'Projekt', note: 'Einmalig, mit vereinbartem Ergebnis', phases: [0, 1], loop: false },
              { label: 'Laufend', note: 'Wiederkehrend, monatlich ausgewertet', phases: [2, 3], loop: true },
            ].map((block) => (
              <div key={block.label} className={`rounded-[2rem] border p-5 sm:p-6 ${block.loop ? 'border-[#CBCBFC] bg-[#686CFA]/[0.04]' : 'border-[#E0E0E0]/80 bg-white/60'}`}>
                <p className="flex items-center gap-2 px-1 text-[11px] font-mono font-bold uppercase tracking-widest text-[#4f54d6]">
                  {block.loop ? <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> : <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                  {block.label} <span className="normal-case tracking-normal font-sans font-medium text-slate-500">· {block.note}</span>
                </p>
                <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {block.phases.map((i) => {
                    const p = PHASES[i];
                    return (
                      <li key={p.label} className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-6 flex flex-col">
                        <span className="text-[11px] font-bold font-mono text-[#686CFA]">0{i + 1}</span>
                        <p lang="en" className="mt-3 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{p.label}</p>
                        <h3 className="mt-1 font-display font-semibold text-slate-900 leading-snug">{p.title}</h3>
                        <p className="mt-3 text-body-sm text-slate-600 leading-relaxed">{p.desc}</p>
                        <p className="mt-4 text-body-sm text-slate-800 leading-relaxed">
                          <span className="font-bold text-[#686CFA]">Ergebnis:</span> {p.result}
                        </p>
                        <p className="mt-auto pt-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                          <span className="font-bold text-slate-700">Einstieg, wenn:</span> {p.entry}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GRUNDSÄTZE */}
      <section className="bg-white border-y border-[#E2E8F0]/40 py-16 md:py-24">
        <Container className="space-y-8">
          <SectionHeading title="Was in jeder Phase gilt" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map((pr) => (
              <li key={pr.title} className="border-t-2 border-[#686CFA] pt-5">
                <h3 className="font-display font-semibold text-slate-900 leading-snug">{pr.title}</h3>
                <p className="mt-2 text-body-sm text-slate-600 leading-relaxed">{pr.desc}</p>
              </li>
            ))}
          </ul>
          <Link href="/leistungen/ki-im-unternehmen" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-[#4f54d6]">
            Wie wir Agentic AI einsetzen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      {/* ARBEITSFORMEN */}
      <section id="zusammenarbeit" className="scroll-mt-28">
        <Container className="space-y-8">
          <SectionHeading title="So beginnt eine Zusammenarbeit" intro="Drei Arten, mit uns zu arbeiten. Die meisten Kunden starten mit der Analyse." />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WORK_MODES.map((m, idx) => (
              <li key={m.title} className="bg-white border border-[#E0E0E0]/80 p-7 sm:p-8 rounded-3xl flex flex-col gap-3">
                <span className="w-fit text-[11px] font-bold font-mono bg-[#686CFA]/5 text-[#686CFA] px-3 py-1 rounded-lg border border-[#CBCBFC]/40">0{idx + 1}</span>
                <h3 className="text-base font-bold text-slate-900 leading-tight">{m.title}</h3>
                <p className="text-body-sm text-[#4f54d6] font-semibold leading-relaxed">{m.forWhom}</p>
                <p className="text-body-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-body-sm text-slate-500 leading-relaxed max-w-3xl">
            Die Performance-Analyse ist ein eigener, abgeschlossener Auftrag. Ob Sie danach mit uns weiterarbeiten, entscheiden Sie auf Basis
            der Ergebnisse.
          </p>
        </Container>
      </section>

      {/* PHASEN IN DEN BEREICHEN */}
      <section>
        <Container className="space-y-8">
          <SectionHeading
            title="Dasselbe Vorgehen in jedem Bereich"
            intro="Ob Kampagnen, CRM oder ein KI-Agent: Die Phasen bleiben gleich, die Arbeit darin unterscheidet sich."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AREAS.map((a) => (
              <TeaserCard key={a.id} href={`/leistungen/${a.id}`} title={a.label} desc={`Zum Beispiel: ${a.phaseExamples?.[0] ?? a.teaser}`} linkText={`So gehen wir im Bereich ${a.label} vor`} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading title="Fragen zum Vorgehen" />
          <FaqList items={FAQ} />
        </Container>
      </section>

      <LeadCtaSection
        formLocation="ansatz"
        title="Wo steigen wir bei Ihnen ein?"
        intro="Schildern Sie kurz Ihre Ausgangslage. Wir sagen Ihnen im kostenlosen Erstgespräch, welche Phase zu Ihnen passt und was der erste sinnvolle Schritt ist."
        ctaLabel="Ausgangslage besprechen"
      />
    </div>
  );
}
