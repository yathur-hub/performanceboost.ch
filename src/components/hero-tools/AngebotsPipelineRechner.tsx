/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Gauge, ChevronUp, ChevronDown, Inbox, CircleDollarSign } from 'lucide-react';

interface Inputs {
  anfragen: number;
  angebotsquote: number;
  abschlussquote: number;
  auftragswert: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function AngebotsPipelineRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    anfragen: 25,
    angebotsquote: 60,
    abschlussquote: 28,
    auftragswert: 35000,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [branche, setBranche] = useState('Metallbau / Maschinenbau');
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
    const { anfragen, angebotsquote, abschlussquote, auftragswert } = inputs;

    const angebote_monat = anfragen * (angebotsquote / 100);
    const abschluesse_monat = angebote_monat * (abschlussquote / 100);
    const revenue_monat = abschluesse_monat * auftragswert;
    const revenue_jahr = revenue_monat * 12;

    const BENCH_ANGEBOTSQUOTE = 0.70;
    const BENCH_ABSCHLUSSQUOTE = 0.35;

    const benchmark_angebote = anfragen * BENCH_ANGEBOTSQUOTE;
    const benchmark_abschluesse = benchmark_angebote * BENCH_ABSCHLUSSQUOTE;
    const benchmark_revenue_monat = benchmark_abschluesse * auftragswert;
    const benchmark_revenue_jahr = benchmark_revenue_monat * 12;

    const leck_monat = Math.max(0, benchmark_revenue_monat - revenue_monat);
    const leck_jahr = leck_monat * 12;

    const optimiert_abschluesse = angebote_monat * ((abschlussquote + 10) / 100);
    const optimiert_revenue_jahr = optimiert_abschluesse * auftragswert * 12;
    const follow_up_potenzial = Math.max(0, optimiert_revenue_jahr - revenue_jahr);

    const angebots_score = Math.min(50, (angebotsquote / 70) * 50);
    const abschluss_score = Math.min(50, (abschlussquote / 35) * 50);
    const effizienz_score = Math.round(angebots_score + abschluss_score);

    let score_stufe: 'kritisch' | 'potenzial' | 'gut' | 'top';
    if (effizienz_score <= 40) score_stufe = 'kritisch';
    else if (effizienz_score <= 65) score_stufe = 'potenzial';
    else if (effizienz_score <= 85) score_stufe = 'gut';
    else score_stufe = 'top';

    return {
      angebote_monat,
      abschluesse_monat,
      revenue_monat,
      revenue_jahr,
      benchmark_angebote,
      benchmark_abschluesse,
      benchmark_revenue_monat,
      benchmark_revenue_jahr,
      leck_monat,
      leck_jahr,
      optimiert_abschluesse,
      optimiert_revenue_jahr,
      follow_up_potenzial,
      effizienz_score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'b2b-industrie-kmu', tool: 'angebots-pipeline-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      track('hero_tool_output_shown', {
        page: 'b2b-industrie-kmu',
        tool: 'angebots-pipeline-rechner',
        revenue_jahr: results.revenue_jahr,
        leck_jahr: results.leck_jahr,
        follow_up_potenzial: results.follow_up_potenzial,
        effizienz_score: results.effizienz_score,
        score_stufe: results.score_stufe,
      });
      return next;
    });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub || !nameSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'b2b-industrie-kmu',
      element_id: 'angebots-pipeline-rechner',
      score_stufe: results.score_stufe,
      branche: branche,
    });
  };

  const stufenConfig = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosse Verbesserungsmöglichkeit',
      desc: 'Deine Angebots-Pipeline verliert deutlich mehr Revenue als nötig. Schon einfache Massnahmen — systematisches Follow-up, ein klarer Angebotsprozess — würden einen messbaren Unterschied machen. Der grösste Hebel ist meistens nicht ein besseres Angebot, sondern dass das Angebot überhaupt nachgefasst wird.',
      rec: `CRM einrichten, Follow-up-Prozess definieren, Abschlussquote schrittweise von ${inputs.abschlussquote}% Richtung 35% steigern.`,
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Du hast eine funktionierende Pipeline — aber es liegt noch signifikantes Revenue-Potenzial brach. Wahrscheinlich gibt es Lücken im Follow-up oder in der Erst-Qualifizierung von Anfragen. Gezielte Optimierung bringt dich in die Top-Performer-Kategorie.',
      rec: 'Follow-up-Prozess systematisieren, Nurturing für lange Entscheidungszeiten aufbauen, CRM-Nutzung konsequenter machen.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/60',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut, aber ausbaufähig',
      desc: 'Deine Pipeline-Effizienz liegt über dem Branchendurchschnitt. Das ist eine solide Basis. Jetzt geht es darum, die Anzahl eingehender Anfragen zu steigern und die letzten Prozentpunkte bei der Abschlussquote herauszuholen.',
      rec: 'Lead Generation skalieren (mehr qualifizierte Anfragen), ABM für Wunschkunden aufbauen, Nurturing weiter optimieren.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Top-Performer',
      desc: 'Deine Angebots-Pipeline ist ausgezeichnet aufgestellt. Du nutzt deine Anfragen nahezu optimal. Das nächste Wachstumspotenzial liegt jetzt im Volumen: mehr qualifizierte Anfragen bei gleicher Effizienz.',
      rec: 'Fokus auf Lead Generation und ABM: mehr Wunschkunden in die Pipeline bringen, die du dann zuverlässig abschliesst.',
    },
  };

  const currentStufe = stufenConfig[results.score_stufe];

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">INDUSTRIE SIMULATOR</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Angebots-Pipeline-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Ermitteln Sie das verdeckte Revenue-Potenzial in Ihren Vertriebs- und Angebotsprozessen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Column Fields */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anfragen pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1}
                max={500}
                value={inputs.anfragen}
                onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Inbox className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Alle eingehenden Vertriebskontakte und Enquiries</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Angebotsquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.angebotsquote}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.angebotsquote}
              onChange={(e) => handleInputChange('angebotsquote', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Richtwert: 70% der Anfragen werden zu Offerten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Abschlussquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.abschlussquote}%</span>
            </label>
            <input
              type="range"
              min={5}
              max={80}
              step={1}
              value={inputs.abschlussquote}
              onChange={(e) => handleInputChange('abschlussquote', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Richtwert: 35% der Offerten führen zum Auftrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Auftragswert (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.auftragswert)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1000}
                max={2000000}
                step={1000}
                value={inputs.auftragswert}
                onChange={(e) => handleInputChange('auftragswert', parseInt(e.target.value) || 1000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium font-mono">Gewichteter Auftragswert in CHF</p>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                EFFIZIENZ SCORE
              </span>
              <div className="text-2xl font-black text-slate-905">{results.effizienz_score} / 100</div>
            </div>
            <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
              {currentStufe.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
              <span className="text-[9.5px] font-mono font-bold text-slate-400 block uppercase">Pipeline-Jahresumsatz aktuell</span>
              <h4 className="text-lg font-black text-slate-900 mt-1">{formatCHF(results.revenue_jahr)}</h4>
              <p className="text-[10px] text-slate-450 leading-relaxed font-semibold">
                {results.abschluesse_monat.toFixed(1)} Abschlüsse/Mt à {formatCHF(inputs.auftragswert)}
              </p>
            </div>

            <div className={`border rounded-xl p-4 ${results.leck_jahr > 0 ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-150'}`}>
              <span className="text-[9.5px] font-mono font-bold text-slate-400 block uppercase">Bestands-Marge-Leck vs Richtwert</span>
              <h4 className={`text-lg font-black mt-1 ${results.leck_jahr > 0 ? 'text-red-600' : 'text-green-700'}`}>
                {results.leck_jahr > 0 ? `-${formatCHF(results.leck_jahr)} / J.` : 'Hervorragend, über Soll'}
              </h4>
              <p className="text-[10px] text-slate-450 font-semibold leading-relaxed">
                Basis Richtwerte: 70% Offerten- / 35% Abschlussquote
              </p>
            </div>

            <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9.5px] font-mono font-bold text-green-700 block uppercase">Hebel durch aktives Follow-up</span>
                <p className="text-[10px] text-slate-450 font-semibold">Umsatzzuwachs bei Erhöhung der Quote um 10 Prozentpunkte</p>
              </div>
              <h4 className="text-lg font-black text-green-700 ml-4">+{formatCHF(results.follow_up_potenzial)} / J.</h4>
            </div>
          </div>

          {/* Diagnostic Text */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${currentStufe.color} space-y-2`}>
            <p className="text-xs font-semibold leading-relaxed text-slate-800">
              {currentStufe.desc}
            </p>
            <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
              Empfehlung: {currentStufe.rec}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box and collapsible Email */}
      <div className="border-t border-slate-100 pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="text-left font-semibold text-slate-500 text-[10.5px] leading-relaxed max-w-md">
            <strong>Wie viel Umsatz liegt in deiner Angebots-Pipeline gerade brach?</strong> In 30 Minuten zeigen wir, welcher Hebel bei dir den grössten Impact erzielt. Ohne Standardpitch.
          </div>
          <a
            href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('hero_tool_cta_clicked', {
              page: 'b2b-industrie-kmu',
              cta_type: 'primary',
              leck_jahr: results.leck_jahr
            })}
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
          >
            Pipeline-Gespräch buchen
          </a>
        </div>

        {/* Lead Capture */}
        <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
          <button
            onClick={() => {
              setAccordionOpen(!accordionOpen);
              track('hero_tool_lead_form_opened', {
                page: 'b2b-industrie-kmu',
                leck_jahr: results.leck_jahr,
                effizienz_score: results.effizienz_score
              });
            }}
            className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-850 hover:bg-slate-50 transition-colors"
          >
            <span>Detaillierte Pipeline-Analyse per E-Mail erhalten →</span>
            {accordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-450" />}
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
                      placeholder="name@firma.ch"
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
                    <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Unternehmen</label>
                    <input
                      type="text"
                      value={companySub}
                      onChange={(e) => setCompanySub(e.target.value)}
                      placeholder="GmbH / AG"
                      className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Industrie-Sektor</label>
                    <select
                      value={branche}
                      onChange={(e) => setBranche(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                    >
                      <option>Metallbau / Maschinenbau</option>
                      <option>Elektrotechnik / Kunststofftechnik</option>
                      <option>Grosshandel / Distribution</option>
                      <option>Industrieservice / Wartung</option>
                      <option>Andere</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                  >
                    Analyse kostenlos anfordern
                  </button>
                  <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                    Keine Werbemails. Einmalige, detaillierte PDF-Analyse passend zu deinen Werten.
                  </p>
                </form>
              ) : (
                <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                  Vielen Dank! Deine personalisierte Pipeline-Analyse wird generiert und ist in Kürze in deinem Posteingang.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
