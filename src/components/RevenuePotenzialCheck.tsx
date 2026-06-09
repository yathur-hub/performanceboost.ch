/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ArrowRight, ArrowLeft, Target, TrendingUp, Zap, BarChart3, 
  Users, Building, HelpCircle, Check, ArrowUpRight, Scale 
} from 'lucide-react';
import { formatCHF, track, LeadCaptureForm } from './heroUtils';
import { PREMIUM_EASE, DURATIONS, buttonPressProps } from '../lib/motion';

interface RevenuePotenzialCheckProps {
  onClose: () => void;
  onNavigate?: (path: string) => void;
}

interface CheckState {
  step: 1 | 2 | 3 | 4 | 'result';
  ziel: 'mehr_leads' | 'besser_konvertieren' | 'mehr_effizienz' | 'skalieren' | null;
  auftragswert: { id: string; label: string; value: number } | null;
  aktuelleNeukunden: number;
  bremsen: string[];
  groesse: 'size_micro' | 'size_small' | 'size_mid' | 'size_growth' | null;
}

// 1. Custom hook for count-up animation
function useCountUp(target: number, duration = 1200, active = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTimestamp: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - (1 - progress) * (1 - progress); // easeOutQuad
      const currentValue = Math.floor(easeOut * (target - startValue) + startValue);

      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, active]);

  return count;
}

// 2. Data Definitions
const ZIEL_OPTIONS = [
  { id: 'mehr_leads', label: 'Mehr qualifizierte Leads gewinnen', icon: Target },
  { id: 'besser_konvertieren', label: 'Bestehende Leads besser konvertieren', icon: TrendingUp },
  { id: 'mehr_effizienz', label: 'Marketing & Sales effizienter machen', icon: Zap },
  { id: 'skalieren', label: 'Revenue planbar und skalierbar machen', icon: BarChart3 }
] as const;

const DEAL_OPTIONS = [
  { id: 'deal_s', label: 'Unter CHF 2\'000', value: 1500 },
  { id: 'deal_m', label: 'CHF 2\'000 – 10\'000', value: 6000 },
  { id: 'deal_l', label: 'CHF 10\'000 – 30\'000', value: 20000 },
  { id: 'deal_xl', label: 'CHF 30\'000 – 100\'000', value: 65000 },
  { id: 'deal_xxl', label: 'Über CHF 100\'000', value: 150000 }
] as const;

const BREMSEN_OPTIONS = [
  { id: 'bremse_leads', label: 'Zu wenig Leads' },
  { id: 'bremse_conversion', label: 'Schlechte Conversion' },
  { id: 'bremse_prozesse', label: 'Fehlende Prozesse / Automation' },
  { id: 'bremse_strategie', label: 'Kein klarer Plan' },
  { id: 'bremse_alignment', label: 'Marketing & Sales nicht aligned' }
] as const;

const GROESSE_OPTIONS = [
  { id: 'size_micro', label: 'Solo / Micro', subtext: '1–5 Personen', icon: Users },
  { id: 'size_small', label: 'Klein', subtext: '6–25 Personen', icon: Users },
  { id: 'size_mid', label: 'Mittel', subtext: '26–100 Personen', icon: Building },
  { id: 'size_growth', label: 'Wachsend', subtext: '100+ Personen', icon: Building }
] as const;

// 3. Map for Engpass Info
const ENGPASS_MAP: Record<string, { title: string; desc: string; lossDesc: string }> = {
  bremse_strategie: {
    title: 'Fehlende Strategie',
    desc: 'Ohne klare ICP-Definition und Go-to-Market-Plan fliesst Budget in die falschen Kanäle — und jede Taktik kämpft ohne Richtung.',
    lossDesc: 'Unternehmen ohne definierten GTM-Plan wachsen 40% langsamer als der Durchschnitt ihrer Branche.'
  },
  bremse_leads: {
    title: 'Zu wenig qualifizierte Leads',
    desc: 'Die Pipeline ist dünn oder gefüllt mit den falschen Kontakten. Der Vertrieb kämpft — ohne ausreichend Material.',
    lossDesc: 'Ohne systematische Demand Generation fehlt die Basis. Vertriebszeit wird für Leads verschwendet, die nie kaufen werden.'
  },
  bremse_conversion: {
    title: 'Schlechte Conversion-Rate',
    desc: 'Traffic und Leads kommen — aber zu wenige werden zu Kunden. Das deutet auf Schwächen im Content, im Nurturing oder im Sales-Prozess hin.',
    lossDesc: 'Eine Verbesserung der Conversion um 2 Prozentpunkte verdoppelt bei vielen KMU die Neukundenrate — ohne ein einziges neues Lead.'
  },
  bremse_alignment: {
    title: 'Marketing & Sales nicht aligned',
    desc: 'Leads werden übergeben, aber nicht bearbeitet. Oder sie kommen qualifiziert an und werden vom Sales-Team ignoriert, weil die Definition nicht stimmt.',
    lossDesc: 'Unternehmen mit starkem Marketing-Sales-Alignment erzielen 67% mehr Abschlüsse aus denselben Leads.'
  },
  bremse_prozesse: {
    title: 'Fehlende Automation',
    desc: 'Manuelle Prozesse bremsen Geschwindigkeit und Skalierbarkeit. Jede Stunde, die manuell in Follow-ups, Reporting oder Datenmanagement fliesst, fehlt für Wachstum.',
    lossDesc: 'B2B-Unternehmen mit Automatisierung in Marketing und Sales bearbeiten 3x so viele Leads mit dem gleichen Team.'
  }
};

// 4. Hebel Library
const HEBEL_LIB: Record<string, { title: string; text: string }> = {
  icp_schaerfen: { 
    title: 'ICP schärfen', 
    text: 'Klare Definition, wer kauft und warum — damit keine Ressource mehr an den falschen Kontakten verschwendet wird.' 
  },
  gtm_plan: { 
    title: 'Go-to-Market-Plan', 
    text: 'Strukturierter Plan mit Kanälen, Botschaften und Prioritäten — statt reaktiver Einzelmassnahmen.' 
  },
  demand_aufbauen: { 
    title: 'Demand-System aufbauen', 
    text: 'Multi-Channel-Ansatz für kontinuierliche Leadzufuhr — unabhängig von Empfehlungen und Referrals.' 
  },
  content_maschine: { 
    title: 'Content-Maschine starten', 
    text: 'Systematischer Content-Aufbau, der rankt, konvertiert und Vertrauen aufbaut — vor dem ersten Gespräch.' 
  },
  nurturing_aufbauen: { 
    title: 'Nurturing-System bauen', 
    text: 'Leads, die noch nicht bereit sind, regelmässig mit Wert versorgen — bis sie kaufbereit sind.' 
  },
  sales_alignment: { 
    title: 'Sales-Alignment herstellen', 
    text: 'Gemeinsame Lead-Definition, SLAs und Übergabeprozesse — damit kein Lead mehr in der Pipeline verloren geht.' 
  },
  automation_basics: { 
    title: 'Automation-Grundstruktur', 
    text: 'CRM-Setup, automatisiertes Follow-up und Lead-Scoring — damit das Team sich auf Abschlüsse konzentriert.' 
  },
  conversion_optimieren: { 
    title: 'Conversion-Rate optimieren', 
    text: 'Landingpages, CTAs und Formulare auf Konversion testen — mehr Abschlüsse aus demselben Traffic.' 
  },
  revops_setup: { 
    title: 'Revenue-Operations-Basis', 
    text: 'Einheitliche Daten, Prozesse und Forecasting — damit alle Teams auf dasselbe Ziel hinarbeiten.' 
  },
  analytics_setup: { 
    title: 'Analytics & Attribution', 
    text: 'Klares Tracking, welcher Kanal welchen Lead und welchen Auftrag gebracht hat — für bessere Budget-Entscheidungen.' 
  }
};

// 5. Navigation Change Event Helper
const handleContactNavigation = (onNavigate?: (path: string) => void) => {
  if (onNavigate) {
    onNavigate('/kontakt');
  } else {
    window.dispatchEvent(new CustomEvent('navigation-change', { detail: '/kontakt' }));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function RevenuePotenzialCheck({ onClose, onNavigate }: RevenuePotenzialCheckProps) {
  const [state, setState] = useState<CheckState>({
    step: 1,
    ziel: null,
    auftragswert: null,
    aktuelleNeukunden: 3,
    bremsen: [],
    groesse: null
  });

  // Prevent body scrolling when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleNext = () => {
    if (state.step === 1) {
      track('potenzial_check_step', { step: 1, ziel: state.ziel });
      setState(prev => ({ ...prev, step: 2 }));
    } else if (state.step === 2) {
      track('potenzial_check_step', { step: 2, auftragswert: state.auftragswert?.id });
      setState(prev => ({ ...prev, step: 3 }));
    } else if (state.step === 3) {
      track('potenzial_check_step', { step: 3, aktuelleNeukunden: state.aktuelleNeukunden, bremsen: state.bremsen });
      setState(prev => ({ ...prev, step: 4 }));
    } else if (state.step === 4) {
      track('potenzial_check_step', { step: 4, groesse: state.groesse });
      
      // Calculate outputs for analytics tracking before transition
      const ergebnis = berechneErgebnis(state);
      track('potenzial_check_result', {
        monatlichesPotenzial: ergebnis.monatlichesPotenzial,
        engpass: ergebnis.engpass,
        ziel: state.ziel,
        groesse: state.groesse
      });
      
      setState(prev => ({ ...prev, step: 'result' }));
    }
  };

  const handleBack = () => {
    if (state.step === 2) setState(prev => ({ ...prev, step: 1 }));
    else if (state.step === 3) setState(prev => ({ ...prev, step: 2 }));
    else if (state.step === 4) setState(prev => ({ ...prev, step: 3 }));
    else if (state.step === 'result') setState(prev => ({ ...prev, step: 4 }));
  };

  const isNextDisabled = () => {
    if (state.step === 1) return !state.ziel;
    if (state.step === 2) return !state.auftragswert;
    if (state.step === 3) return state.bremsen.length === 0;
    if (state.step === 4) return !state.groesse;
    return false;
  };

  // 6. Calculation Logic Container
  function berechneErgebnis(st: CheckState) {
    const groesse = st.groesse || 'size_micro';
    const ziel = st.ziel || 'mehr_leads';
    const bremsen = st.bremsen;
    const auftragswert = st.auftragswert ? st.auftragswert.value : 6000;
    const aktuelleNeukunden = st.aktuelleNeukunden;

    // Benchmark multiplier
    const benchmarkFaktor = {
      size_micro: 1.8,
      size_small: 2.2,
      size_mid: 2.6,
      size_growth: 3.0
    };

    // Goal adjustment factor
    const zielFaktor = {
      mehr_leads: 1.0,
      besser_konvertieren: 0.7,
      mehr_effizienz: 0.5,
      skalieren: 1.2
    };

    // Treat 0 neukunden elegantly as ~0.8 to reflect a fair minimum benchmark target
    const baseNeukunden = aktuelleNeukunden === 0 ? 0.8 : aktuelleNeukunden;
    const potenzielleNeukunden = baseNeukunden * benchmarkFaktor[groesse];
    const mehrNeukunden = Math.max(0.6, potenzielleNeukunden - baseNeukunden);
    const monatlichesPotenzial = mehrNeukunden * auftragswert * zielFaktor[ziel];

    // Priority based engpass analysis
    let engpass = 'bremse_strategie';
    if (bremsen.includes('bremse_strategie')) engpass = 'bremse_strategie';
    else if (bremsen.includes('bremse_leads')) engpass = 'bremse_leads';
    else if (bremsen.includes('bremse_conversion')) engpass = 'bremse_conversion';
    else if (bremsen.includes('bremse_alignment')) engpass = 'bremse_alignment';
    else if (bremsen.includes('bremse_prozesse')) engpass = 'bremse_prozesse';

    // Hebel selection logic matrix
    let hebelKeys = ['icp_schaerfen', 'demand_aufbauen', 'analytics_setup']; // default fallback

    if (ziel === 'mehr_leads') {
      if (engpass === 'bremse_strategie') {
        hebelKeys = (groesse === 'size_micro' || groesse === 'size_small') 
          ? ['icp_schaerfen', 'gtm_plan', 'demand_aufbauen'] 
          : ['icp_schaerfen', 'gtm_plan', 'analytics_setup'];
      } else if (engpass === 'bremse_leads') {
        hebelKeys = ['demand_aufbauen', 'content_maschine', 'analytics_setup'];
      } else if (engpass === 'bremse_conversion') {
        hebelKeys = ['conversion_optimieren', 'nurturing_aufbauen', 'content_maschine'];
      } else if (engpass === 'bremse_alignment') {
        hebelKeys = ['sales_alignment', 'nurturing_aufbauen', 'demand_aufbauen'];
      } else if (engpass === 'bremse_prozesse') {
        hebelKeys = ['automation_basics', 'demand_aufbauen', 'analytics_setup'];
      }
    } else if (ziel === 'besser_konvertieren') {
      if (engpass === 'bremse_strategie') {
        hebelKeys = ['icp_schaerfen', 'conversion_optimieren', 'nurturing_aufbauen'];
      } else if (engpass === 'bremse_leads') {
        hebelKeys = ['demand_aufbauen', 'nurturing_aufbauen', 'conversion_optimieren'];
      } else if (engpass === 'bremse_conversion') {
        hebelKeys = ['conversion_optimieren', 'nurturing_aufbauen', 'sales_alignment'];
      } else if (engpass === 'bremse_alignment') {
        hebelKeys = ['sales_alignment', 'conversion_optimieren', 'automation_basics'];
      } else if (engpass === 'bremse_prozesse') {
        hebelKeys = ['automation_basics', 'nurturing_aufbauen', 'conversion_optimieren'];
      }
    } else if (ziel === 'mehr_effizienz') {
      if (engpass === 'bremse_strategie') {
        hebelKeys = ['gtm_plan', 'automation_basics', 'analytics_setup'];
      } else if (engpass === 'bremse_leads') {
        hebelKeys = ['demand_aufbauen', 'automation_basics', 'analytics_setup'];
      } else if (engpass === 'bremse_conversion') {
        hebelKeys = ['automation_basics', 'nurturing_aufbauen', 'analytics_setup'];
      } else if (engpass === 'bremse_alignment') {
        hebelKeys = ['sales_alignment', 'automation_basics', 'revops_setup'];
      } else if (engpass === 'bremse_prozesse') {
        hebelKeys = ['automation_basics', 'revops_setup', 'analytics_setup'];
      }
    } else if (ziel === 'skalieren') {
      if (engpass === 'bremse_strategie') {
        hebelKeys = ['gtm_plan', 'revops_setup', 'analytics_setup'];
      } else if (engpass === 'bremse_leads') {
        hebelKeys = ['demand_aufbauen', 'revops_setup', 'analytics_setup'];
      } else if (engpass === 'bremse_conversion') {
        hebelKeys = ['conversion_optimieren', 'revops_setup', 'analytics_setup'];
      } else if (engpass === 'bremse_alignment') {
        hebelKeys = ['sales_alignment', 'revops_setup', 'automation_basics'];
      } else if (engpass === 'bremse_prozesse') {
        hebelKeys = ['automation_basics', 'revops_setup', 'analytics_setup'];
      }
    }

    return {
      monatlichesPotenzial,
      engpass,
      hebelKeys
    };
  }

  // Get dynamic result parameters if step is on result screen
  const isResultScreen = state.step === 'result';
  const calculationResult = berechneErgebnis(state);
  const animatedPotenzial = useCountUp(calculationResult.monatlichesPotenzial, 1200, isResultScreen);

  const getStepHeader = () => {
    switch (state.step) {
      case 1:
        return {
          title: 'Was wollt ihr erreichen?',
          sub: '1 Frage — damit wir dein Potenzial auf dein Ziel kalibrieren.'
        };
      case 2:
        return {
          title: 'Was ist euer Auftragswert?',
          sub: 'Keine genaue Zahl nötig — eine Grössenordnung reicht.'
        };
      case 3:
        return {
          title: 'Wo steht ihr heute?',
          sub: 'Ehrlich geschätzt. Je genauer, desto aussagekräftiger das Ergebnis.'
        };
      case 4:
        return {
          title: 'Wie gross ist euer Team?',
          sub: 'Fast fertig — letzter Schritt.'
        };
      default:
        return { title: '', sub: '' };
    }
  };

  const renderStepContent = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="step-1-panel">
            {ZIEL_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isSelected = state.ziel === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setState(prev => ({ ...prev, ziel: opt.id }))}
                  className={`flex items-start text-left gap-4 p-5 sm:p-6 rounded-2xl border transition-all text-xs sm:text-sm font-semibold select-none cursor-pointer outline-none ${
                    isSelected 
                      ? 'border-[#686DF4] bg-[#686DF4]/5 ring-1 ring-[#686DF4] text-slate-900 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isSelected ? 'bg-[#686DF4]/10 text-[#686DF4]' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-850 font-display leading-tight">{opt.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4" id="step-2-panel">
            <div className="flex flex-col gap-3">
              {DEAL_OPTIONS.map((opt) => {
                const isSelected = state.auftragswert?.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setState(prev => ({ ...prev, auftragswert: opt }))}
                    className={`w-full flex items-center justify-between p-4 px-6 rounded-xl border transition-all text-sm font-semibold cursor-pointer outline-none select-none ${
                      isSelected
                        ? 'border-[#686DF4] bg-[#686DF4]/5 ring-1 ring-[#686DF4] text-slate-900 font-bold shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-750'
                    }`}
                  >
                    <span className="font-display">{opt.label}</span>
                    <div className={`w-4 border h-4 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'border-[#686DF4] bg-[#686DF4]' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8" id="step-3-panel">
            {/* Range Slider */}
            <div className="space-y-4 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>AKTUELLER STAND</span>
                <span className="text-[#686DF4] font-semibold text-sm">
                  {state.aktuelleNeukunden === 0 
                    ? '0 Neukunden' 
                    : state.aktuelleNeukunden === 20 
                      ? '20+ Neukunden' 
                      : `${state.aktuelleNeukunden} Neukunden`} / Monat
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={state.aktuelleNeukunden}
                onChange={(e) => setState(prev => ({ ...prev, aktuelleNeukunden: parseInt(e.target.value) }))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4] transition-all"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider px-1">
                <span>0</span>
                <span>3–5</span>
                <span>10–15</span>
                <span>20+</span>
              </div>
              <p className="text-[11px] text-slate-450 italic font-mono text-center">
                «Schätzung des monatlichen Durchschnitts ist ausreichend»
              </p>
            </div>

            {/* Selected Obstacle (Bremse) */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-slate-800 text-sm">
                Was ist eure grösste Wachstumsbremse? <span className="text-xs text-[#686DF4] font-medium font-mono">(Mehrfachauswahl erlaubt)</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {BREMSEN_OPTIONS.map((opt) => {
                  const isSelected = state.bremsen.includes(opt.id);
                  const handleToggle = () => {
                    setState(prev => {
                      const base = prev.bremsen;
                      if (base.includes(opt.id)) {
                        return { ...prev, bremsen: base.filter(x => x !== opt.id) };
                      } else {
                        return { ...prev, bremsen: [...base, opt.id] };
                      }
                    });
                  };
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={handleToggle}
                      className={`px-4 py-2.5 rounded-full border text-xs font-medium tracking-wide transition-all select-none cursor-pointer outline-none flex items-center gap-1.5 ${
                        isSelected
                          ? 'border-[#686DF4] bg-[#686DF4] text-white shadow-xs font-bold'
                          : 'border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="step-4-panel">
            {GROESSE_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              const isSelected = state.groesse === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setState(prev => ({ ...prev, groesse: opt.id }))}
                  className={`flex flex-col text-left justify-between p-5 rounded-2xl border transition-all select-none cursor-pointer outline-none ${
                    isSelected
                      ? 'border-[#686DF4] bg-[#686DF4]/5 ring-1 ring-[#686DF4] text-slate-900 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-[#686DF4]/10 text-[#686DF4]' : 'bg-slate-100 text-slate-400'}`}>
                      <Icon className="w-4.5 h-4.5 shrink-0" />
                    </div>
                    <div className={`w-3.5 h-3.5 border rounded-full flex items-center justify-center transition-all ${
                      isSelected ? 'border-[#686DF4] bg-[#686DF4]' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-1 h-1 bg-white rounded-full" />}
                    </div>
                  </div>
                  <div className="space-y-1 pt-6">
                    <span className="block text-slate-850 font-display font-bold leading-tight">{opt.label}</span>
                    <span className="block text-[11px] text-slate-400 font-semibold">{opt.subtext}</span>
                  </div>
                </button>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  const renderResultScreen = () => {
    const obstacleInfo = ENGPASS_MAP[calculationResult.engpass] || ENGPASS_MAP.bremse_strategie;
    const sizeLabel = GROESSE_OPTIONS.find(x => x.id === state.groesse)?.label || 'Micro';
    const dealLabel = state.auftragswert?.label || 'Unter CHF 2\'000';

    return (
      <div className="space-y-10 py-2 animate-fadeIn" id="result-panel">
        
        {/* Block 1: Monats-Uplift Display */}
        <div className="text-center rounded-3xl bg-slate-900 text-white p-8 relative overflow-hidden group shadow-[var(--shadow-premium-lg)] border border-slate-800">
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#686DF4]/20 to-transparent rounded-full blur-2xl group-hover:scale-130 transition-transform duration-500 pointer-events-none" />
          <p className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#686DF4]">
            DEIN MONATLICHES REVENUE-POTENZIAL
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mt-3 select-none">
            {formatCHF(animatedPotenzial)}
          </h2>
          <p className="text-xs text-[#686DF4] font-bold uppercase tracking-wider font-mono mt-1">
            monatlich erreichbar
          </p>
          <p className="text-[10.5px] text-slate-400 leading-relaxed font-semibold max-w-lg mx-auto mt-4 pt-4 border-t border-slate-800">
            Berechnet auf Basis von Branchen-Benchmarks für {sizeLabel}-Unternehmen mit einem Auftragswert von {dealLabel} — konservativ geschätzt.
          </p>
        </div>

        {/* Block 2: Grösster Engpass */}
        <div className="space-y-4">
          <h3 className="text-base font-display font-semibold text-slate-900 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-xs font-mono">
            Dein grösster Engpass gerade
          </h3>
          <div className="bg-white border-l-4 border-amber-505 border border-slate-150 border-l-amber-550 p-6 rounded-2xl space-y-3.5 shadow-xs">
            <h4 className="font-display font-bold text-slate-900 text-sm">
              🚨 {obstacleInfo.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              {obstacleInfo.desc}
            </p>
            <div className="bg-amber-50/50 rounded-xl p-3 text-[11.5px] italic text-amber-900/80 font-semibold border border-amber-100/50">
              «{obstacleInfo.lossDesc}»
            </div>
          </div>
        </div>

        {/* Block 3: Priorisierte Hebel */}
        <div className="space-y-4">
          <h3 className="text-base font-display font-semibold text-slate-900 border-l-4 border-[#686DF4] pl-3 uppercase tracking-wider text-xs font-mono">
            Die 3 Hebel, die bei dir den grössten Impact haben
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {calculationResult.hebelKeys.map((key, i) => {
              const item = HEBEL_LIB[key] || HEBEL_LIB.icp_schaerfen;
              return (
                <div 
                  key={key} 
                  className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs space-y-2 flex flex-col justify-between"
                  id={`hebel-card-${i}`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#686DF4]">0{i + 1}</span>
                    <h4 className="text-slate-900 font-display font-bold text-sm leading-snug">{item.title}</h4>
                    <p className="text-[11.5px] text-slate-500 font-semibold leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Block 4: CTA and Lead-Capture Optional */}
        <div className="pt-6 border-t border-slate-150 space-y-6">
          <div className="text-center space-y-2">
            <h4 className="text-sm font-display font-bold text-slate-800">
              Was jetzt? Wir schauen gemeinsam, wie viel davon in den nächsten 90 Tagen realistisch ist.
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                onClose();
                handleContactNavigation(onNavigate);
              }}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#686DF4] hover:bg-[#686DF4]/95 text-white font-display font-bold px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all text-xs select-none cursor-pointer outline-none"
            >
              Wachstumsgespräch buchen <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 font-display font-bold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all text-xs cursor-pointer outline-none select-none"
            >
              Fenster schliessen
            </button>
          </div>

          {/* Lead capture component - genuinely optional */}
          <LeadCaptureForm
            secondaryCTAText="Ergebnis per E-Mail erhalten (optional) →"
            danachText={`Danke — wir haben deine Analyse an deine E-Mail gesendet!\nWir kontaktieren dich nicht ungefragt. Nur deine Auswertung.`}
            pageId="revenue_potenzial_check"
          />
        </div>

      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10" id="potenzial-check-modal-wrapper"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 cursor-pointer" 
        id="potenzial-check-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.35, ease: PREMIUM_EASE }}
        className="relative bg-white w-full max-w-3xl rounded-[32px] shadow-[0_24px_60px_rgba(0,0,0,0.18)] border border-slate-200/85 overflow-hidden z-50 flex flex-col max-h-[90dvh]"
        id="potenzial-check-container"
      >
        
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 shrink-0 bg-slate-50/50">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono tracking-wider font-bold text-[#686DF4] uppercase">REVENUE POTENZIAL-CHECK</span>
            <h2 className="text-sm font-display font-bold text-slate-850">
              {isResultScreen ? 'Dein Revenue-Potenzial' : `Fragebogen (Schritt ${state.step} von 4)`}
            </h2>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 transition-colors bg-white rounded-full border border-slate-150 shadow-xs cursor-pointer outline-none"
            aria-label="Modal schliessen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stepper (Only visible on input steps) */}
        {!isResultScreen && (
          <div className="px-8 pt-6 pb-2 shrink-0 flex items-center gap-2" id="potenzial-check-stepper">
            {[1, 2, 3, 4].map((s) => {
              const isPast = state.step > s;
              const isCurrent = state.step === s;
              return (
                <div key={s} className="flex-1 flex items-center">
                  <div 
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                      isPast 
                        ? 'bg-[#686DF4]/40' 
                        : isCurrent 
                          ? 'bg-[#686DF4]' 
                          : 'bg-slate-200'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Dynamic Modal Content (Viewport Scrollable inside modal) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-800">
          <AnimatePresence mode="wait">
            {!isResultScreen ? (
              <motion.div 
                key={state.step}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.22, ease: PREMIUM_EASE }}
                className="space-y-6"
              >
                {/* Specific Step Custom Header */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-display font-semibold text-slate-900 tracking-tight leading-tight">
                    {getStepHeader().title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-semibold">
                    {getStepHeader().sub}
                  </p>
                </div>

                {/* Form Input fields */}
                <div className="pt-2">
                  {renderStepContent()}
                </div>
              </motion.div>
            ) : (
              renderResultScreen()
            )}
          </AnimatePresence>
        </div>

        {/* Action Button Footer (Not visible on result screen) */}
        {!isResultScreen && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center shrink-0">
            <div>
              {state.step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-450 hover:text-slate-800 cursor-pointer font-bold tracking-wide uppercase transition-colors outline-none border-none bg-transparent"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Zurück
                </button>
              )}
            </div>
            
            <button
              type="button"
              disabled={isNextDisabled()}
              onClick={handleNext}
              className={`inline-flex items-center gap-2 text-xs font-display font-bold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-all select-none cursor-pointer outline-none ${
                isNextDisabled()
                  ? 'bg-slate-100 text-slate-350 cursor-not-allowed border border-slate-200'
                  : 'bg-[#686DF4] hover:bg-[#686DF4]/95 text-white shadow-xs'
              }`}
            >
              {state.step === 4 ? 'Auswerten' : 'Weiter'} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
