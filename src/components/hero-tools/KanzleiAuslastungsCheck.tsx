/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Scale, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  anwaelte: number;
  billable_stunden: number;
  stundensatz: number;
  admin_stunden: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function KanzleiAuslastungsCheck() {
  const [inputs, setInputs] = useState<Inputs>({
    anwaelte: 3,
    billable_stunden: 24,
    stundensatz: 320,
    admin_stunden: 12,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [kanzleiTyp, setKanzleiTyp] = useState('Anwaltskanzlei (Allgemeinpraxis)');
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
    const { anwaelte, billable_stunden, stundensatz, admin_stunden } = inputs;
    if (anwaelte < 1 || stundensatz < 100) return null;

    // Assumption: 44 working weeks per year
    // Active billable capacity
    const billable_jahr_kanzlei = anwaelte * billable_stunden * 44;
    const umsatz_jahr_aktuell = billable_jahr_kanzlei * stundensatz;

    const BENCH_BILLABLE_HOURS = 32;

    const soll_billable_jahr_kanzlei = anwaelte * BENCH_BILLABLE_HOURS * 44;
    const soll_umsatz_jahr = soll_billable_jahr_kanzlei * stundensatz;
    const umsatz_gap = Math.max(0, soll_umsatz_jahr - umsatz_jahr_aktuell);

    const admin_verlust_stunden_jahr = anwaelte * admin_stunden * 44;
    const admin_verlust_chf = admin_verlust_stunden_jahr * stundensatz;

    const entlastung_potenzial_chf = anwaelte * (admin_stunden * 0.4) * 44 * stundensatz;

    const capacity_score = Math.min(60, (billable_stunden / 32) * 60);
    const admin_score = Math.max(0, 40 - (admin_stunden * 2.5));
    const score = Math.round(capacity_score + admin_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 40) score_stufe = "kritisch";
    else if (score <= 65) score_stufe = "potenzial";
    else if (score <= 85) score_stufe = "gut";
    else score_stufe = "top";

    return {
      billable_jahr_kanzlei,
      umsatz_jahr_aktuell,
      soll_umsatz_jahr,
      umsatz_gap,
      admin_verlust_stunden_jahr,
      admin_verlust_chf,
      entlastung_potenzial_chf,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'rechtsanwaelte', tool: 'kanzlei-auslastungs-check' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'rechtsanwaelte',
          tool: 'kanzlei-auslastungs-check',
          umsatz_jahr_aktuell: results.umsatz_jahr_aktuell,
          umsatz_gap: results.umsatz_gap,
          admin_verlust_chf: results.admin_verlust_chf,
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
      page: 'rechtsanwaelte',
      score_stufe: results?.score_stufe,
      kanzleityp: kanzleiTyp,
      umsatz_gap: results?.umsatz_gap,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben binden administrative Aufgaben viel Zeit, oder die abrechenbaren Stunden pro Woche sind eher tief. Das kostet spürbar Honorarumsatz. Klare Abläufe, etwa eine digitale Vorabklärung neuer Mandate, können hier Zeit freimachen.',
      rec: 'Mandatsaufnahme automatisieren, den Start mit neuen Mandanten vereinheitlichen und die Zeiterfassung vereinfachen.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihre Kanzlei arbeitet solide, administrative Aufgaben binden aber noch juristische Kapazität. Wie viel eine Entlastung bei der Administration bringen könnte, sehen Sie oben in der Schätzung.',
      rec: 'Dokumentvorlagen ordnen, Fristen digital kontrollieren und wiederkehrende Sekretariatsarbeiten automatisieren.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Werte liegen nahe am angenommenen Richtwert. Das ist eine gute Basis. Weiteres Wachstum ist meist über eine klarere Spezialisierung möglich, die höhere Stundensätze und passendere Mandate ermöglicht.',
      rec: 'Positionierung schärfen und auf LinkedIn gezielt bei Wirtschaftsmandanten sichtbar werden.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Ihre Kanzlei ist nach Ihren Angaben sehr effizient organisiert, mit wenig administrativem Aufwand. Weiteres Wachstum kommt dann vor allem über zusätzliche Anwältinnen und Anwälte, sofern genug Mandate vorhanden sind.',
      rec: 'Juristische Fachkräfte gezielt ansprechen und die Kanzlei schrittweise vergrössern.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Kanzleien</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Kanzlei-Auslastungs-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Honorarumsatz durch administrative Arbeit in Ihrer Kanzlei verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Juristen / Partner (Vollzeit)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anwaelte}</span>
            </label>
            <input
              type="number"
              min={1}
              max={50}
              value={inputs.anwaelte}
              onChange={(e) => handleInputChange('anwaelte', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 font-medium">Anzahl Juristinnen und Juristen, die Mandate abrechnen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø abrechenbare Stunden / Woche</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.billable_stunden}h</span>
            </label>
            <input
              type="range"
              min={10}
              max={50}
              step={1}
              value={inputs.billable_stunden}
              onChange={(e) => handleInputChange('billable_stunden', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Richtwert (Annahme): 32 h abrechenbare Zeit pro Woche und Person</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Administration / Woche</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.admin_stunden}h</span>
            </label>
            <input
              type="range"
              min={2}
              max={25}
              step={1}
              value={inputs.admin_stunden}
              onChange={(e) => handleInputChange('admin_stunden', parseInt(e.target.value) || 2)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Nicht abrechenbare Büroarbeiten, Akquise & Organisation</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Stundensatz (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.stundensatz)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={150}
                max={600}
                step={10}
                value={inputs.stundensatz}
                onChange={(e) => handleInputChange('stundensatz', parseInt(e.target.value) || 150)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Scale className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-7 space-y-6">
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
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Honorarumsatz heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.umsatz_jahr_aktuell)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    (Basis: {results.billable_jahr_kanzlei.toLocaleString('de-CH')} abrechenbare Stunden pro Jahr, Annahme 44 Arbeitswochen)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.umsatz_gap > 0 ? `-${formatCHF(results.umsatz_gap)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 32 h abrechenbar pro Woche
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich bei 40% weniger Administration</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Grobe Schätzung, wenn frei gewordene Zeit abgerechnet wird</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.entlastung_potenzial_chf)} / J.</h4>
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
              Bitte geben Sie mindestens 1 Person und einen Stundensatz ab CHF 100 ein.
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
                  page: 'rechtsanwaelte',
                  cta_type: 'primary',
                  umsatz_gap: results.umsatz_gap
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
