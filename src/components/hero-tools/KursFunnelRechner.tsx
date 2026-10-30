/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Eye, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  visits: number;
  info_conversion: number;
  booking_rate: number;
  kursgebuehr: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function KursFunnelRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    visits: 2500,
    info_conversion: 3.5,
    booking_rate: 22,
    kursgebuehr: 3800,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [institution, setInstitution] = useState('Hochschule / Fachhochschule');
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
    const { visits, info_conversion, booking_rate, kursgebuehr } = inputs;
    if (visits < 100 || kursgebuehr < 200) return null;

    const leads_monat = visits * (info_conversion / 100);
    const buchung_monat = leads_monat * (booking_rate / 100);
    const revenue_monat = buchung_monat * kursgebuehr;
    const revenue_jahr = revenue_monat * 12;

    const BENCH_VISIT_CONVERSION = 4.5;
    const BENCH_BOOKING_RATE = 30;

    const benchmark_leads = visits * (BENCH_VISIT_CONVERSION / 100);
    const benchmark_buchungen = benchmark_leads * (BENCH_BOOKING_RATE / 100);
    const benchmark_revenue_jahr = benchmark_buchungen * kursgebuehr * 12;

    const leck_jahr = Math.max(0, benchmark_revenue_jahr - revenue_jahr);

    const optimiert_buchung = leads_monat * ((booking_rate + 8) / 100);
    const potenzial_jahr = Math.max(0, (optimiert_buchung - buchung_monat) * kursgebuehr * 12);

    const traffic_score = Math.min(30, (visits / 5000) * 30);
    const conversion_score = Math.min(40, (info_conversion / 4.5) * 40);
    const close_score = Math.min(30, (booking_rate / 30) * 30);
    const score = Math.round(traffic_score + conversion_score + close_score);

    let score_stufe: "rot" | "orange" | "gruen" | "primary";
    if (score <= 35) score_stufe = "rot";
    else if (score <= 60) score_stufe = "orange";
    else if (score <= 80) score_stufe = "gruen";
    else score_stufe = "primary";

    return {
      leads_monat,
      buchung_monat,
      revenue_monat,
      revenue_jahr,
      benchmark_leads,
      benchmark_buchungen,
      leck_jahr,
      potenzial_jahr,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'bildung-weiterbildung', tool: 'kurs-funnel-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'bildung-weiterbildung',
          tool: 'kurs-funnel-rechner',
          revenue_jahr: results.revenue_jahr,
          leck_jahr: results.leck_jahr,
          potenzial_jahr: results.potenzial_jahr,
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
      page: 'bildung-weiterbildung',
      score_stufe: results?.score_stufe,
      institution: institution,
      leck_jahr: results?.leck_jahr,
    });
  };

  const stufeConfigs = {
    rot: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben fragen nur wenige Besucher Infos an, oder die Buchungsquote liegt deutlich unter dem angenommenen Richtwert von 30%. Zusammen kostet das Ihre Institution spürbar Umsatz. Eine Website, die Interessenten klar zur Anfrage führt, ist hier meist der erste Ansatzpunkt.',
      rec: 'Den Weg zur Anfrage auf der Website vereinfachen, klarere Handlungsaufforderungen einsetzen und Interessenten vor dem Infoabend weiterbegleiten.',
    },
    orange: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihr Anfrageprozess funktioniert, unterwegs gehen aber Interessenten verloren. Häufige Ursache: Wer eine Beratung oder Infos angefragt hat, wird danach nicht konsequent weiterbegleitet.',
      rec: 'Nachfassen systematisch regeln: Teilnehmende des Infoabends innert 48 Stunden kontaktieren und mit einer E-Mail-Serie weiterbegleiten.',
    },
    gruen: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Website bringt gute Anfragen, und Ihre Buchungsquote liegt nahe am angenommenen Richtwert. Sie holen bereits viel aus Ihren Besuchern heraus. Als Nächstes geht es um mehr passende Besucher.',
      rec: 'Mehr passende Besucher gewinnen: bessere Auffindbarkeit bei Google für Ihre Lehrgänge und LinkedIn-Kampagnen für Fachkräfte und HR.',
    },
    primary: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Ihr Anfrageprozess läuft nach Ihren Angaben sehr gut, mit hohen Quoten bei Anfragen und Buchungen. Jetzt kann es sich lohnen, das Budget gezielt in die Kanäle zu lenken, die sich bereits bewährt haben.',
      rec: 'Kampagnenbudget schrittweise erhöhen, neue Zielgruppen ansprechen und die Marke Ihrer Institution stärken.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.orange;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Bildung</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Kursbuchungs-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viele Interessenten zwischen Website-Besuch und Kursbuchung verloren gehen. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Website-Besucher / Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.visits.toLocaleString('de-CH')}</span>
            </label>
            <div className="relative">
              <input aria-label="Website-Besucher / Monat"
                type="number"
                min={100}
                max={50000}
                step={100}
                value={inputs.visits}
                onChange={(e) => handleInputChange('visits', parseInt(e.target.value) || 100)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Eye className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium font-mono">Monatliche Besucher der Kursunterseiten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anfragequote (Info / Beratung)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.info_conversion}%</span>
            </label>
            <input aria-label="Anfragequote (Info / Beratung)"
              type="range"
              min={0.5}
              max={15}
              step={0.1}
              value={inputs.info_conversion}
              onChange={(e) => handleInputChange('info_conversion', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Richtwert (Annahme): 4.5% fragen Infos an, laden ein Dossier herunter o.ä.</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Buchungsquote (von Anfrage zu Buchung)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.booking_rate}%</span>
            </label>
            <input aria-label="Buchungsquote (von Anfrage zu Buchung)"
              type="range"
              min={5}
              max={70}
              step={1}
              value={inputs.booking_rate}
              onChange={(e) => handleInputChange('booking_rate', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Richtwert (Annahme): 30% der Interessenten buchen den Kurs</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Kursgebühr pro Person</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.kursgebuehr)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø Kursgebühr pro Person"
                type="number"
                min={200}
                max={50000}
                step={200}
                value={inputs.kursgebuehr}
                onChange={(e) => handleInputChange('kursgebuehr', parseInt(e.target.value) || 200)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
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
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Jahresumsatz heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.revenue_jahr)}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    ({Math.round(results.leads_monat)} Beratungskontakte & {results.buchung_monat.toFixed(1)} Buchungen / Monat)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-700 mt-1">
                    {results.leck_jahr > 0 ? `-${formatCHF(results.leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 4.5% Anfragequote / 30% Buchungsquote
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich bei 8 Prozentpunkten mehr Buchungen</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Grobe Schätzung, z.B. durch konsequentes Weiterbegleiten vor der Buchung</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.potenzial_jahr)} / J.</h4>
                </div>
              </div>

              {/* Diagnostic Box */}
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
              Bitte geben Sie mindestens 100 Besucher und eine Kursgebühr ab CHF 200 ein.
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
                  page: 'bildung-weiterbildung',
                  cta_type: 'primary',
                  leck_jahr: results.leck_jahr
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
