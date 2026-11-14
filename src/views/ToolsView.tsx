/** Werkzeuge, mit denen Yathur Nathan arbeitet (/werkzeuge). Daten: src/data/martechWissen.ts (WORK_TOOLS). */
import React from 'react';
import { Breadcrumb, Container, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { LeadCtaSection } from '../components/bp/Conversion';
import { MARTECH_LAYERS, WORK_TOOLS } from '../data/martechWissen';

export default function ToolsView() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800" id="werkzeuge">
      <section className="pt-36 md:pt-40 pb-4 bg-surface/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'MarTech-Wissen', href: '/martech' }, { label: 'Werkzeuge' }]} />
          <div className="max-w-4xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Werkzeuge, mit denen ich arbeite.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Statt einer Logo-Wand finden Sie hier die Werkzeuge, die ich selbst einsetze, geordnet nach den Schichten der MarTech-Landkarte und mit einem Satz dazu, wofür.
              Welche Werkzeuge in Ihrem Unternehmen passen, entscheiden Ihre Abläufe, nicht diese Liste. Ich bin an keinen Anbieter gebunden.
            </p>
            <p className="text-sm text-slate-500">Yathur Nathan, Inhaber von performanceboost</p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          {WORK_TOOLS.map((g) => {
            const layer = MARTECH_LAYERS.find((l) => l.id === g.layer);
            return (
              <div key={g.group} className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">
                  {layer ? `Schicht ${layer.nr} · ` : ''}{g.group}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {g.items.map((it) => (
                    <div key={it.name} className="bg-surface border border-line/80 rounded-2xl p-6 sm:p-7 space-y-2">
                      <h3 className="text-base sm:text-lg font-display font-semibold text-slate-900">{it.name}</h3>
                      <p className="text-body-sm text-slate-600 leading-relaxed">{it.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading title="Wie die Werkzeuge zusammenspielen" intro="Ein Werkzeug allein löst selten etwas. Entscheidend ist, welches System führend ist, wie Daten fliessen und wer die Verbindungen betreibt." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TeaserCard href="/martech" title="MarTech-Landkarte" desc="Die fünf Schichten eines Stacks und die Fachthemen dazu." linkText="Zur Landkarte" />
            <TeaserCard href="/labor" title="Labor" desc="Was ich mit diesen Werkzeugen selbst baue und ausprobiere." linkText="Zum Labor" />
            <TeaserCard href="/leistungen/martech-stack" title="MarTech-Stack aufräumen" desc="Stack-Check, Umbau und Betrieb für Ihr Unternehmen." linkText="Zur Leistung" />
          </div>
        </Container>
      </section>

      <LeadCtaSection formLocation="werkzeuge" />
    </div>
  );
}
