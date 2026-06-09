/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Scale, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  anwaelte: number;
  billable_stunden: number;
  stundensatz: number;
  admin_stunden: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

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
      label: 'Hohes Entlastungspotenzial',
      desc: 'Dein Kanzlei-Alltag ist blockiert durch hohe administrative Aufgaben (admin_stunden) oder zu tiefe abrechenbare Zeiten pro Woche. Dieses Ungleichgewicht kostet dich spürbaren Honorarumsatz. Mit strukturierten Kanzlei-Prozessen (z.B. digitaler Vor-Qualifizierung von Mandaten) lässt sich viel Zeit freischaufeln.',
      rec: 'Automatisierung der Mandats-Aufnahme, standardisiertes Mandanten-Onboarding & Zeiterfassung optimieren.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Verbesserbares Gefüge',
      desc: 'Du leistest bereits wertvolle Arbeit — doch administrative Reibungsverluste binden kostbare juristische Ressourcen. Wenn du administrative Arbeiten um nur 30-40% reduzierst, gewinnst du Dutzende billable Stunden für wertsteigerndes Mandats-Wachstum.',
      rec: 'Einsatz von Dokumentenvorlagen strukturieren, digitale Fristenkontrolle, Sekretariats-Prozesse automatisieren.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Optimierte Auslastung',
      desc: 'Deine quantifizierbaren Werte liegen nahe an Schweizer Kanzlei-Richtwerten. Ein gutes Fundament. Um weiter organisch zu wachsen, solltest du den Stundensatz durch gezieltere Spezialisierung erhöhen und lukrative Mandate anziehen.',
      rec: 'Fokus auf Positionierung & digitales Kanzlei-Marketing auf LinkedIn für exklusivere Wirtschaftsmandanten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Spitzen-Effizienz',
      desc: 'Deine Kanzlei-Struktur ist beispielhaft hoch optimiert — exzellente Verhältnisse bei Zeiteinteilung und Overhead. Das nächste Wachstum kommt aus der Skalierung: zusätzliche Anwälte / Partner einbinden, um das überzählige Mandatsvolumen abzuarbeiten.',
      rec: 'Active Recruiting für juristische Fachkräfte & systematischer Ausbau der Kanzlei-Grösse.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">LEGAL EFFICIENCY</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Kanzlei-Auslastungs-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Analysiere administrative Zeitverluste und kalkuliere das ungenutzte Honorar-Potenzial in deiner Kanzlei.
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
            <p className="text-[9px] text-slate-400 font-medium">Anzahl Volljuristen, die Mandate abrechnen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Billable Stunden / Woche</span>
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
            <p className="text-[9px] text-slate-400 font-medium font-mono">Richtwert: 32 h / Woche abrechenbare Mandatszeit pro Jurist</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Admin-Stunden / Woche</span>
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
            <p className="text-[9px] text-slate-400 font-medium font-mono">Nicht abrechenbare Büroarbeiten, Akquise & Organisation</p>
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
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    EFFIZIENZ SCORE JURISTEN
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Honorargewinn aktuell</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.umsatz_jahr_aktuell)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    (Basis: {results.billable_jahr_kanzlei.toLocaleString('de-CH')} abrechenbare Stunden / Jahr kanzleibeitrag)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-655 block uppercase">Kapazitäts-Umsatzlücke</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.umsatz_gap > 0 ? `-${formatCHF(results.umsatz_gap)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Soll-Benchmark-Vergleich (32h billable / Woche)
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Wachstumspotenzial bei 40% Admin-Entlastung</span>
                    <p className="text-[10px] text-slate-500 font-semibold">Durch digitale Werkzeuge und Prozesse wiederverwertete Mandatszeit</p>
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
                  Dringlichstes Kanzleiziel: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Gib gültige Werte ein (mind. 1 Jurist).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Möchtest du Zeit für strategische Fälle gewinnen?</strong> In einem 30-minütigen Gespräch zeigen wir konkrete Optionen zur Kanzlei-Automatisierung.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'rechtsanwaelte',
                cta_type: 'primary',
                umsatz_gap: results.umsatz_gap
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Kanzlei-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'rechtsanwaelte',
                  umsatz_gap: results.umsatz_gap,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Detaillierten Kanzlei-Report per E-Mail anfordern →</span>
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
                        placeholder="kanzlei@advokat.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Dein Name *</label>
                      <input
                        type="text"
                        required
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="Dr. iur. Name"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Kanzleiname</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Müller & Partner Advokatur"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Ausrichtung</label>
                      <select
                        value={kanzleiTyp}
                        onChange={(e) => setKanzleiTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Wirtschafts-/Unternehmensrecht</option>
                        <option>Anwaltskanzlei (Allgemeinpraxis)</option>
                        <option>Strafrecht / Zivilprozessrecht</option>
                        <option>Notariat & Grundeigentum</option>
                        <option>Andere Spezialgebiete</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Kalkulation anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Streng vertraulich. Einmalige, personalisierte PDF-Auswertung samt Kanzleiphasen-Einschätzung.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Vielen Dank! Die PDF-Auswertung ist in Kürze in Ihrem Posteingang.
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
