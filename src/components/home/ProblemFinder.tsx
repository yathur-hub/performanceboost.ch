import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';
import { SERVICES } from '../../data/services';
import {
  MODEL_OPTIONS,
  PROBLEM_OPTIONS,
  SETUP_OPTIONS,
  recommend,
  rememberResult,
  type FinderAnswers,
} from '../../data/problemFinder';

interface ProblemFinderProps {
  onClose: () => void;
  onNavigate: (path: string) => void;
}

const TOOL = 'problem_finder';
const TOTAL_STEPS = 3;

const optionClass =
  'w-full min-h-14 text-left px-5 py-4 rounded-2xl border border-slate-200 bg-white hover:border-[#686DF4] hover:bg-[#686DF4]/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30 transition-colors cursor-pointer';

export default function ProblemFinder({ onClose, onNavigate }: ProblemFinderProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>({});
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackEvent('tool_view', { tool_name: TOOL });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // Fokus auf die erste Option bzw. das Ergebnis jedes Schritts, für Tastatur und Screenreader.
  useEffect(() => {
    const target = contentRef.current?.querySelector<HTMLElement>('[data-autofocus]');
    target?.focus();
  }, [step]);

  const answer = (patch: FinderAnswers, stepId: string, value: string) => {
    const next = { ...answers, ...patch };
    setAnswers(next);
    trackEvent('tool_step', { tool_name: TOOL, step: step + 1, step_id: stepId, value });
    const nextStep = step + 1;
    setStep(nextStep);
    if (nextStep === TOTAL_STEPS) {
      const result = recommend(next);
      if (result) trackEvent('tool_complete', { tool_name: TOOL, result_label: result.serviceSlug });
    }
  };

  const result = step === TOTAL_STEPS ? recommend(answers) : null;
  const service = result ? SERVICES.find((s) => s.slug === result.serviceSlug) : undefined;

  const goToService = () => {
    if (!result) return;
    rememberResult(result);
    trackEvent('tool_cta_click', { tool_name: TOOL, cta_label: result.serviceSlug });
    onClose();
    onNavigate(`/leistungen/${result.serviceSlug}`);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="problem-finder-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full sm:max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl"
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur px-6 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-600">
              {step < TOTAL_STEPS ? `Frage ${step + 1} von ${TOTAL_STEPS}` : 'Unsere Empfehlung'}
            </p>
            <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden" aria-hidden="true">
              <div
                className="h-full bg-[#686DF4] transition-all duration-300"
                style={{ width: `${(Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schliessen"
            className="w-11 h-11 shrink-0 inline-flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div ref={contentRef} className="px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {step === 0 && (
                <>
                  <h2 id="problem-finder-title" className="text-xl sm:text-2xl font-display font-semibold text-slate-950">
                    Wie gewinnen Sie Ihre Kunden?
                  </h2>
                  <div className="space-y-3">
                    {MODEL_OPTIONS.map((o, i) => (
                      <button
                        key={o.id}
                        type="button"
                        data-autofocus={i === 0 ? '' : undefined}
                        className={optionClass}
                        onClick={() => answer({ model: o.id }, 'geschaeftsmodell', o.id)}
                      >
                        <span className="block font-semibold text-slate-950">{o.label}</span>
                        <span className="block text-sm text-slate-600 mt-0.5">{o.hint}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && answers.model && (
                <>
                  <h2 id="problem-finder-title" className="text-xl sm:text-2xl font-display font-semibold text-slate-950">
                    Wo hakt es am meisten?
                  </h2>
                  <div className="space-y-3">
                    {PROBLEM_OPTIONS[answers.model].map((o, i) => (
                      <button
                        key={o.id}
                        type="button"
                        data-autofocus={i === 0 ? '' : undefined}
                        className={optionClass}
                        onClick={() => answer({ problemId: o.id }, 'problem', o.id)}
                      >
                        <span className="font-semibold text-slate-950">{o.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 id="problem-finder-title" className="text-xl sm:text-2xl font-display font-semibold text-slate-950">
                    Wie setzen Sie Marketing heute um?
                  </h2>
                  <div className="space-y-3">
                    {SETUP_OPTIONS.map((o, i) => (
                      <button
                        key={o.id}
                        type="button"
                        data-autofocus={i === 0 ? '' : undefined}
                        className={optionClass}
                        onClick={() => answer({ setup: o.id }, 'umsetzung', o.id)}
                      >
                        <span className="font-semibold text-slate-950">{o.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === TOTAL_STEPS && result && service && (
                <>
                  <h2 id="problem-finder-title" className="text-xl sm:text-2xl font-display font-semibold text-slate-950">
                    Das passt zu Ihrer Situation
                  </h2>
                  <p className="text-sm text-slate-600">
                    Ihre Angabe: <span className="font-semibold text-slate-900">«{result.problemLabel}»</span>
                  </p>
                  <div className="rounded-2xl border border-[#686DF4]/30 bg-[#686DF4]/5 p-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#4f54d6]">Empfohlene Leistung</p>
                    <h3 className="text-lg font-display font-semibold text-slate-950">{service.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{result.reason}</p>
                    <button
                      type="button"
                      data-autofocus=""
                      onClick={goToService}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-slate-950 hover:bg-[#4f54d6] text-white font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40"
                    >
                      Zur Lösung <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={restart}
                    className="text-sm text-slate-600 underline underline-offset-2 hover:text-slate-900 cursor-pointer bg-transparent border-0 p-0"
                  >
                    Andere Antworten wählen
                  </button>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {step > 0 && step < TOTAL_STEPS && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 cursor-pointer bg-transparent border-0 p-0"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Zurück
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
