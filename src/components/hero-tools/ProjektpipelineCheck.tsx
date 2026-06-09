/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Inbox, CircleDollarSign, ChevronUp, ChevronDown } from 'lucide-react';

interface Inputs {
  anfragen: number;
  win_rate: number;
  projektvolumen: number;
  top3_anteil: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function ProjektpipelineCheck() {
  const [inputs, setInputs] = useState<Inputs>({
    anfragen: 22,
    win_rate: 38,
    projektvolumen: 85000,
    top3_anteil: 65,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [disziplin, setDisziplin] = useState('Bauingenieur / Tragwerksplanung');
  const [formSubmitted, setFormSubbed] = useState(false);

  const formatCHF = (value: number): string => {
    if (value >= 1000000) {
      const mio = value / 1000000;
      return `CHF ${mio.toFixed(1).replace(".", "'")} Mio.`;
    }
    if (value >= 10000) {
      const gerundet = Math.round(value / 1000) * 1000;
      return "CHF " + gerundet.toLocaleString("de-CH");
    }
    if (value >= 1000) {
      return "CHF " + Math.round(value).toLocaleString("de-CH");
    }
    return "CHF " + Math.round(value);
  };

  const results = useMemo(() => {
    const { anfragen, win_rate, projektvolumen, top3_anteil } = inputs;
    if (anfragen < 1 || projektvolumen < 5000) return null;

    const auftraege_jahr = anfragen * (win_rate / 100);
    const aktueller_umsatz = auftraege_jahr * projektvolumen;

    const benchmark_auftraege = anfragen * 0.45;
    const benchmark_umsatz = benchmark_auftraege * projektvolumen;
    const umsatz_gap = Math.max(0, benchmark_umsatz - aktueller_umsatz);

    const klumpen_score: 'hoch' | 'mittel' | 'tief' =
      top3_anteil > 60 ? 'hoch' : top3_anteil > 40 ? 'mittel' : 'tief';

    const potenzial_winrate =
      anfragen * (Math.min(90, win_rate + 10) / 100) * projektvolumen - aktueller_umsatz;

    const win_score = Math.min(60, (win_rate / 45) * 60);
    const klumpen_punkte = top3_anteil > 60 ? 0 : top3_anteil > 40 ? 20 : 40;
    const score = Math.round(win_score + klumpen_punkte);

    let score_stufe: 'rot' | 'orange' | 'gruen' | 'primary';
    if (score <= 35) score_stufe = 'rot';
    else if (score <= 60) score_stufe = 'orange';
    else if (score <= 80) score_stufe = 'gruen';
    else score_stufe = 'primary';

    return {
      auftraege_jahr,
      aktueller_umsatz,
      benchmark_auftraege,
      benchmark_umsatz,
      umsatz_gap,
      klumpen_score,
      potenzial_winrate,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'ingenieur-planungsbuero', tool: 'projektpipeline-check' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'ingenieur-planungsbuero',
          tool: 'projektpipeline-check',
          aktueller_umsatz: results.aktueller_umsatz,
          potenzial_winrate: results.potenzial_winrate,
          umsatz_gap: results.umsatz_gap,
          klumpen_score: results.klumpen_score,
          score: results.score,
          score_stufe: results.score_stufe,
        });
      }
      return next;
    });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub || !nameSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'ingenieur-planungsbuero',
      potenzial_winrate: results?.potenzial_winrate,
      klumpen_score: results?.klumpen_score,
      score: results?.score,
      score_stufe: results?.score_stufe,
      disziplin: disziplin,
    });
  };

  const stufeConfigs = {
    rot: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Hohes Optimierungspotenzial',
      desc: 'Deine Projektpipeline zeigt zwei kritische Signale: Die Win-Rate liegt unter dem Branchendurchschnitt (45%) — und das Klumpenrisiko ist erheblich. Beides ist lösbar: mit gezielter Sichtbarkeit kommen qualifiziertere Anfragen rein, und mit einer strukturierten Akquise-Strategie wächst die Auftraggeberbasis.',
      rec: 'LinkedIn-Positionierung, Google-Sichtbarkeit und CRM-Aufbau als erste Priorität.',
    },
    orange: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Solide Basis, klares Potenzial',
      desc: 'Deine Pipeline ist funktional — aber es liegt signifikantes Umsatz- und Stabilitätspotenzial brach. Entweder liegt die Win-Rate unter dem Richtwert, oder das Klumpenrisiko ist noch zu hoch. Gezielte Massnahmen bringen dich ganz nach oben.',
      rec: 'Fokus auf den schwächeren Wert: Win-Rate steigern oder die Auftraggeberbasis diversifizieren.',
    },
    gruen: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Deine Projektpipeline liegt über dem Branchendurchschnitt — sowohl bei der Win-Rate als auch beim Klumpenrisiko. Das ist eine solide Ausgangslage. Das nächste Wachstumspotenzial liegt in mehr Volumen.',
      rec: 'Sichtbarkeit skalieren (mehr Anfragen), Bestandskunden-Reaktivierung und neue Zielgruppensegmentierung.',
    },
    primary: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Top-Performer',
      desc: 'Deine Pipeline ist ausgezeichnet aufgestellt: hohe Win-Rate, breite Auftraggeberbasis. Das nächste Wachstumskapitel heisst Volumen — mehr Anfragen in die Maschine füttern, die du zuverlässig aufbaust.',
      rec: 'Lead Generation und LinkedIn-Skalierung, um noch mehr Wunschauftraggeber direkt anzusprechen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.orange;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">PLANER CHECK</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Projektpipeline-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Ermitteln Sie die Stabilität Ihres Auftragsbestands und das Wachstumspotenzial bei höherer Win-Rate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Projektanfragen pro Jahr</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1}
                max={200}
                value={inputs.anfragen}
                onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Inbox className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Ausschreibungseinladungen und Direktkontakte pro Jahr</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Win-Rate</span>
              <span className="text-[#686DF4] font-semibold">{inputs.win_rate}%</span>
            </label>
            <input
              type="range"
              min={5}
              max={90}
              step={1}
              value={inputs.win_rate}
              onChange={(e) => handleInputChange('win_rate', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Anteil gewonnene Projekte / Gesamt-Anfragen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Projektvolumen (Honorar)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.projektvolumen)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={500}
                max={2000000}
                step={5000}
                value={inputs.projektvolumen}
                onChange={(e) => handleInputChange('projektvolumen', parseInt(e.target.value) || 5000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anteil Top-3-Auftraggeber</span>
              <span className="text-[#686DF4] font-semibold">{inputs.top3_anteil}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.top3_anteil}
              onChange={(e) => handleInputChange('top3_anteil', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Wie viel Umsatz hängt an den Top-3-Bauherren/GUs?</p>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score card Header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    PIPELINE STABILITÄTS-SCORE
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-150 rounded-xl p-4 space-y-1">
                  <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Umsatzhebel bei +10% Win-Rate</span>
                  <h4 className="text-base font-black text-green-700 mt-1">+{formatCHF(results.potenzial_winrate)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Erhöhung der Abschluss-Win-Rate von {inputs.win_rate}% auf {inputs.win_rate + 10}%
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Abstand zu Richtwert (45% CR)</span>
                  <h4 className="text-base font-black text-slate-950 mt-1">
                    {results.umsatz_gap > 0 ? `${formatCHF(results.umsatz_gap)}` : 'Über Benchmark'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Ihr aktueller Jahresumsatz: {formatCHF(results.aktueller_umsatz)}
                  </p>
                </div>

                <div className={`sm:col-span-2 border rounded-xl p-4 flex items-center justify-between ${results.klumpen_score === 'hoch' ? 'bg-red-50 border-red-150 text-red-700' : 'bg-green-50 border-green-150 text-green-700'}`}>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase">Klumpenrisiko-Einschätzung</span>
                    <p className="text-[10px] text-slate-500 pt-0.5">Top-3-Auftraggeber machen {inputs.top3_anteil}% Ihres Gesamtumsatzes aus</p>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-wider">{results.klumpen_score === 'hoch' ? '🍳 Hoch' : results.klumpen_score === 'mittel' ? 'Mittel' : '✓ Tief'}</h4>
                </div>
              </div>

              {/* Status Diagnostic */}
              <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1.5`}>
                <p className="text-xs font-semibold leading-relaxed text-slate-800">
                  {currentStufe.desc}
                </p>
                <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
                  Am wichtigsten: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Geben Sie gültige Werte ein (Projektvolumen mind. CHF 5'000).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Wie abhängig ist Ihr Büro von 3 Hauptbauherrn?</strong> In 30 Minuten decken wir strategisch Lücken auf und skizzieren Optionen für stabilere Auftraggeberbasis.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'ingenieur-planungsbuero',
                cta_type: 'primary',
                potenzial_winrate: results.potenzial_winrate,
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Wachstumsplanung buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'ingenieur-planungsbuero',
                  klumpen_score: results.klumpen_score,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Projektpipeline-Analyse per E-Mail erhalten →</span>
              {accordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-440" />}
            </button>

            {accordionOpen && (
              <div className="p-4 border-t border-slate-150 bg-white space-y-4 animate-fadeIn">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmitLead} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">E-Mail Adresse *</label>
                      <input
                        type="email"
                        required
                        value={emailSub}
                        onChange={(e) => setEmailSub(e.target.value)}
                        placeholder="ingenieur@büro.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Vorname *</label>
                      <input
                        type="text"
                        required
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="Vorname"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Unternehmensname</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Inhaber / Partner AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Spezialisierung / Fachrichtung</label>
                      <select
                        value={disziplin}
                        onChange={(e) => setDisziplin(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Bauingenieur / Tragwerksplanung</option>
                        <option>Elektroplaner / MSRL</option>
                        <option>HLKS-Planer</option>
                        <option>Architektur / Generalplanung</option>
                        <option>Andere</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Büro-Analyse anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Keine Werbe-Kampagnen. Einmaliger, personalisierter Report samt Schweizer Planungsbenchmarks.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Vielen Dank! Ihre Projekt-Analyse wird zusammengestellt und ist in Kürze in Ihrem Posteingang.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
