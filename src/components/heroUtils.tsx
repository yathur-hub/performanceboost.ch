import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, User, Building, Send, ChevronRight, Check } from 'lucide-react';

// Format currency as Swiss CHF
export function formatCHF(value: number): string {
  if (value >= 1000000) {
    const formatted = (value / 1000000).toFixed(1).replace('.', "'");
    return `CHF ${formatted} Mio.`;
  }
  // Guaranteeing Swiss German style thousand separators (e.g. 5'000)
  const rounded = Math.round(value);
  const parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  return `CHF ${parts.join('.')}`;
}

// Format numbers in Swiss format
export function formatNumber(value: number, decimals: number = 0): string {
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(value * factor) / factor;
  const parts = rounded.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  return parts.join('.');
}

// Unified tracking function with fallback logging
export function track(event: string, props: Record<string, any>) {
  if (typeof window !== "undefined") {
    const win = window as any;
    if (win.analytics && typeof win.analytics.track === "function") {
      win.analytics.track(event, props);
    }
  }
  console.log("[track]", event, props);
}

export interface AdditionalField {
  type: string;
  name: string;
  placeholder: string;
  options?: string[];
  required?: boolean;
}

interface LeadCaptureFormProps {
  secondaryCTAText: string;
  danachText: string;
  additionalFields?: AdditionalField[];
  pageId: string;
  onSubmitted?: (data: any) => void;
}

export function LeadCaptureForm({
  secondaryCTAText,
  danachText,
  additionalFields = [],
  pageId,
  onSubmitted
}: LeadCaptureFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({
    email: '',
    firstname: '',
    company: ''
  });

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tracking call based on capture
    track("hero_tool_lead_captured", {
      page: pageId,
      ...formData
    });

    // CRM Post Mock placeholder as specified in system instructions
    // TODO: POST to /api/lead-capture or connect to CRM (HubSpot/Mailchimp)
    
    if (onSubmitted) {
      onSubmitted(formData);
    }

    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-lg mx-auto pt-6 border-t border-slate-100 mt-6" id={`lead-capture-${pageId}`}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs text-slate-500 hover:text-[#686DF4] flex items-center justify-center gap-1.5 mx-auto bg-transparent border-none py-2 cursor-pointer font-bold tracking-wide uppercase transition-all"
        >
          {secondaryCTAText} <ChevronRight className="w-3.5 h-3.5" />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-slate-50 border border-slate-200/50 rounded-2xl p-6"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Kostenlose Analyse anfordern
                </h4>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] text-slate-400 hover:text-slate-900 border-none bg-transparent cursor-pointer font-bold uppercase font-mono"
                >
                  Schliessen ×
                </button>
              </div>

              {/* Standard Fields */}
              <div className="space-y-3">
                {/* Email (Required) */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Deine E-Mail *"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
                  />
                </div>

                {/* Vorname */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Vorname (optional)"
                    value={formData.firstname}
                    onChange={e => handleInputChange('firstname', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
                  />
                </div>

                {/* Unternehmen */}
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Unternehmen (optional)"
                    value={formData.company}
                    onChange={e => handleInputChange('company', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
                  />
                </div>

                {/* Additional custom page fields */}
                {additionalFields.map((field, idx) => {
                  const val = formData[field.name] || '';
                  if (field.type === 'select' && field.options) {
                    return (
                      <div key={idx} className="space-y-1.5">
                        <select
                          required={field.required}
                          value={val}
                          onChange={e => handleInputChange(field.name, e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-700 transition-colors appearance-none shadow-xs cursor-pointer"
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    );
                  } else if (field.type === 'checkbox-group' && field.options) {
                    // Handled internally in the caller or generic checkboxes
                    const currentSelected = (formData[field.name] as string[]) || [];
                    const toggleSelection = (option: string) => {
                      let next;
                      if (currentSelected.includes(option)) {
                        next = currentSelected.filter(item => item !== option);
                      } else {
                        next = [...currentSelected, option];
                      }
                      handleInputChange(field.name, next);
                    };

                    return (
                      <div key={idx} className="space-y-2 pt-1 border-t border-slate-100 mt-2">
                        <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          {field.placeholder}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-1">
                          {field.options.map((opt, oIdx) => (
                            <label key={oIdx} className="flex items-center gap-2 text-xs text-slate-650 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={currentSelected.includes(opt)}
                                onChange={() => toggleSelection(opt)}
                                className="rounded text-[#686DF4] bg-white border-slate-200 focus:ring-[#686DF4] h-4 w-4 shrink-0 cursor-pointer transition-all"
                              />
                              <span className="font-medium">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={idx} className="relative">
                        <input
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={val}
                          onChange={e => handleInputChange(field.name, e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
                        />
                      </div>
                    );
                  }
                })}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-6 py-3.5 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm mt-4 text-[#f6f6f6]"
              >
                Analyse senden <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="py-6 text-center space-y-3 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-705 text-slate-700 font-semibold leading-relaxed whitespace-pre-line">
                {danachText}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setIsOpen(false);
                }}
                className="text-[10px] text-[#686DF4] hover:underline bg-transparent border-none cursor-pointer font-bold uppercase tracking-wider font-mono pt-2"
              >
                Formular schliessen
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
