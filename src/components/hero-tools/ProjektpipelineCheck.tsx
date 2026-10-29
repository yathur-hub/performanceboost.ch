/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Inbox, CircleDollarSign, ChevronUp, ChevronDown } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  anfragen: number;
  win_rate: number;
  projektvolumen: number;
  top3_anteil: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

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
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben gibt es zwei Warnsignale: Die Zuschlagsquote liegt unter dem angenommenen Richtwert von 45%, und ein grosser Teil des Umsatzes hängt an wenigen Auftraggebern. Beides lässt sich angehen: Mit gezielter Sichtbarkeit kommen passendere Anfragen, und mit einer geplanten Akquise wird die Auftraggeberbasis breiter.',
      rec: 'Zuerst die Positionierung auf LinkedIn, die Sichtbarkeit bei Google und ein CRM aufbauen.',
    },
    orange: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihr Auftragseingang funktioniert, bei Umsatz und Stabilität ist aber noch Potenzial vorhanden. Entweder liegt die Zuschlagsquote unter dem angenommenen Richtwert, oder zu viel Umsatz hängt an wenigen Auftraggebern.',
      rec: 'Beim schwächeren Wert ansetzen: Zuschlagsquote verbessern oder die Auftraggeberbasis verbreitern.',
    },
    gruen: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Zuschlagsquote und die Verteilung auf Ihre Auftraggeber sehen nach Ihren Angaben gut aus. Das ist eine solide Ausgangslage. Weiteres Wachstum kommt vor allem über mehr passende Anfragen.',
      rec: 'Sichtbarkeit ausbauen, frühere Auftraggeber wieder ansprechen und neue Zielgruppen definieren.',
    },
    primary: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Ihr Büro ist nach Ihren Angaben sehr gut aufgestellt, mit hoher Zuschlagsquote und breiter Auftraggeberbasis. Weiteres Wachstum kommt jetzt vor allem über mehr Anfragen.',
      rec: 'Mehr Anfragen gewinnen und auf LinkedIn gezielt Wunschauftraggeber ansprechen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.orange;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Planungsbüros</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Auftragseingangs-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie stabil Ihr Auftragseingang ist und was eine höhere Zuschlagsquote bringen könnte. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
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
            <p className="text-[11px] text-slate-400 font-medium">Einladungen zu Ausschreibungen und direkte Anfragen pro Jahr</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Zuschlagsquote</span>
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
            <p className="text-[11px] text-slate-400 font-medium">Anteil gewonnener Projekte an allen Anfragen</p>
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
            <p className="text-[11px] text-slate-400 font-medium">Wie viel Umsatz hängt an Ihren 3 grössten Bauherren bzw. GU?</p>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score card Header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    Stabilitäts-Wert
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-150 rounded-xl p-4 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich bei 10 Prozentpunkten mehr Zuschlag</span>
                  <h4 className="text-base font-black text-green-700 mt-1">+{formatCHF(results.potenzial_winrate)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Grobe Schätzung bei einer Zuschlagsquote von {inputs.win_rate + 10}% statt {inputs.win_rate}%
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 space-y-1">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Abstand zum Richtwert (Annahme: 45%)</span>
                  <h4 className="text-base font-black text-slate-950 mt-1">
                    {results.umsatz_gap > 0 ? `${formatCHF(results.umsatz_gap)}` : 'Auf oder über Richtwert'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Ihr Jahresumsatz heute: {formatCHF(results.aktueller_umsatz)}
                  </p>
                </div>

                <div className={`sm:col-span-2 border rounded-xl p-4 flex items-center justify-between ${results.klumpen_score === 'hoch' ? 'bg-red-50 border-red-150 text-red-700' : 'bg-green-50 border-green-150 text-green-700'}`}>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Klumpenrisiko</span>
                    <p className="text-[11px] text-slate-500 pt-0.5">Ihre 3 grössten Auftraggeber machen {inputs.top3_anteil}% Ihres Umsatzes aus</p>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-wider">{results.klumpen_score === 'hoch' ? 'Hoch' : results.klumpen_score === 'mittel' ? 'Mittel' : '✓ Tief'}</h4>
                </div>
              </div>

              {/* Status Diagnostic */}
              <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1.5`}>
                <p className="text-xs font-semibold leading-relaxed text-slate-800">
                  {currentStufe.desc}
                </p>
                <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
                  Empfehlung: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte geben Sie mindestens 1 Anfrage und ein Projektvolumen ab CHF 5'000 ein.
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[11px] leading-relaxed max-w-sm">
              <strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                track('hero_tool_cta_clicked', {
                  page: 'ingenieur-planungsbuero',
                  cta_type: 'primary',
                  potenzial_winrate: results.potenzial_winrate,
                });
                window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer border-0"
            >
              Ergebnis besprechen
            </button>
          </div>


        </div>
      )}
    </div>
  );
}
