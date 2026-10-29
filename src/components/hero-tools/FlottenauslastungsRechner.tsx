/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Truck, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  flottengroesse: number;
  umsatz_fahrzeug: number;
  auslastung: number;
  betriebskosten: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function FlottenauslastungsRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    flottengroesse: 15,
    umsatz_fahrzeug: 12500,
    auslastung: 78,
    betriebskosten: 38,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [logistikTyp, setLogistikTyp] = useState('Strassentransport / Fracht (national)');
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
    const { flottengroesse, umsatz_fahrzeug, auslastung, betriebskosten } = inputs;
    if (flottengroesse < 1 || umsatz_fahrzeug < 500) return null;

    const voll_potenzial_jahr = flottengroesse * umsatz_fahrzeug * 12;
    const aktueller_umsatz_jahr = voll_potenzial_jahr * (auslastung / 100);
    const leerstands_verlust_jahr = voll_potenzial_jahr - aktueller_umsatz_jahr;

    const BENCH_AUSLASTUNG = 85; // 85% is high solid benchmark
    const benchmark_umsatz_jahr = voll_potenzial_jahr * (BENCH_AUSLASTUNG / 100);
    const optimierungs_marge_jahr = Math.max(0, benchmark_umsatz_jahr - aktueller_umsatz_jahr);

    const kosten_pro_jahr = aktueller_umsatz_jahr * (betriebskosten / 100);
    const gewinn_jahr = aktueller_umsatz_jahr - kosten_pro_jahr;

    const target_increased_utilization = Math.min(95, auslastung + 5);
    const plus_5_umsatz = voll_potenzial_jahr * (target_increased_utilization / 100) - aktueller_umsatz_jahr;

    const utilization_score = Math.min(70, (auslastung / 88) * 70);
    const cost_score = Math.max(0, 30 - ((betriebskosten - 30) * 1.5));
    const score = Math.round(utilization_score + cost_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 40) score_stufe = "kritisch";
    else if (score <= 65) score_stufe = "potenzial";
    else if (score <= 85) score_stufe = "gut";
    else score_stufe = "top";

    return {
      voll_potenzial_jahr,
      aktueller_umsatz_jahr,
      leerstands_verlust_jahr,
      optimierungs_marge_jahr,
      kosten_pro_jahr,
      gewinn_jahr,
      plus_5_umsatz,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'logistik-transport', tool: 'flottenauslastungs-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'logistik-transport',
          tool: 'flottenauslastungs-rechner',
          aktueller_umsatz_jahr: results.aktueller_umsatz_jahr,
          leerstands_verlust_jahr: results.leerstands_verlust_jahr,
          optimierungs_marge_jahr: results.optimierungs_marge_jahr,
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
      page: 'logistik-transport',
      score_stufe: results?.score_stufe,
      logistiktyp: logistikTyp,
      optimierungs_marge_jahr: results?.optimierungs_marge_jahr,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Tiefe Auslastung',
      desc: 'Ihre Auslastung liegt spürbar unter dem angenommenen Richtwert von 85%. Das heisst: Fahrzeuge verursachen Fixkosten, ohne genug Deckungsbeitrag zu bringen. Mit gezielter digitaler Neukundengewinnung, etwa für Teilladungen oder direkte Geschäftskunden, lässt sich hier ansetzen.',
      rec: 'Einen digitalen Kanal für Direktkunden aufbauen, um Leerfahrten und die Abhängigkeit vom Spotmarkt zu senken.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihre Flotte läuft ordentlich, es bleibt aber Umsatz liegen. Was schon 5 Prozentpunkte mehr Auslastung bringen könnten, sehen Sie oben in der Schätzung.',
      rec: 'Bei bestehenden Kunden präsent bleiben und freie Kapazitäten regelmässig direkt bei Geschäftskunden anbieten.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Solide Auslastung',
      desc: 'Ihre Werte liegen nahe an den angenommenen Richtwerten. Das ist eine gesunde Basis. Weiteres Potenzial liegt bei den Betriebskosten oder einem höheren Frachtsatz pro Kilometer durch eine bessere Tourenplanung.',
      rec: 'Mehr margenstarke Direktkunden gewinnen statt nur als Subunternehmer zu fahren.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Ihre Flotte ist nach Ihren Angaben sehr gut ausgelastet, mit wenig Leerlauf. Damit kann es sinnvoll sein, über zusätzliche Fahrzeuge nachzudenken, sofern genug neue Aufträge in Sicht sind.',
      rec: 'Gezielt Neukunden gewinnen, um eine grössere Flotte und neue Linienverkehre auszulasten.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Logistik</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Flottenauslastungs-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Umsatz durch ungenutzte Ladefläche und Leerfahrten in Ihrer Flotte verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Flottengrösse (Fahrzeuge)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.flottengroesse}</span>
            </label>
            <input aria-label="Flottengrösse (Fahrzeuge)"
              type="number"
              min={1}
              max={500}
              value={inputs.flottengroesse}
              onChange={(e) => handleInputChange('flottengroesse', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Anzahl Lkw, Lieferwagen oder Frachteinheiten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Umsatz pro Fahrzeug / Monat</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.umsatz_fahrzeug)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø Umsatz pro Fahrzeug / Monat"
                type="number"
                min={500}
                max={100000}
                step={500}
                value={inputs.umsatz_fahrzeug}
                onChange={(e) => handleInputChange('umsatz_fahrzeug', parseInt(e.target.value) || 500)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium font-mono">Durchschnittlicher Bruttoumsatz bei 100% Auslastung</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Aktuelle Flottenauslastung</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.auslastung}%</span>
            </label>
            <input aria-label="Aktuelle Flottenauslastung"
              type="range"
              min={40}
              max={100}
              step={1}
              value={inputs.auslastung}
              onChange={(e) => handleInputChange('auslastung', parseInt(e.target.value) || 40)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Genutztes Ladevolumen bzw. Tourenauslastung im Jahresdurchschnitt</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Variable Betriebs- & Dieselkosten</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.betriebskosten}%</span>
            </label>
            <input aria-label="Variable Betriebs- &amp; Dieselkosten"
              type="range"
              min={15}
              max={70}
              step={1}
              value={inputs.betriebskosten}
              onChange={(e) => handleInputChange('betriebskosten', parseInt(e.target.value) || 15)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Wert in % des Umsatzes</p>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    Effizienz-Wert
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Flottenumsatz heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.aktueller_umsatz_jahr)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    (Auslastungsverlust: {formatCHF(results.leerstands_verlust_jahr)} / Jahr)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-700 mt-1">
                    {results.optimierungs_marge_jahr > 0 ? `-${formatCHF(results.optimierungs_marge_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 85% Auslastung als Richtwert
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich bei 5 Prozentpunkten mehr Auslastung</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Grobe Schätzung, z.B. durch zusätzliche Direktkunden</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.plus_5_umsatz)} / J.</h4>
                </div>
              </div>

              {/* Diagnostic block */}
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
              Bitte geben Sie mindestens 1 Fahrzeug und einen Umsatz ab CHF 500 ein.
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
                  page: 'logistik-transport',
                  cta_type: 'primary',
                  optimierungs_marge_jahr: results.optimierungs_marge_jahr
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
