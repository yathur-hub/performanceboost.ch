import { trackEvent } from "../lib/analytics";
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

// Unified tracking function — pushes to the GTM dataLayer (GTM-PJ9FBZ4V is loaded in index.html).
// Never pass PII (email, name, phone, company, free-text) in props — GA4 prohibits it.
export function track(event: string, props: Record<string, any>) {
  trackEvent(event, props);
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
  pageId,
}: LeadCaptureFormProps) {
  // Früher ein eigenes Mini-Formular ohne Versand (Leads gingen verloren).
  // Jetzt: öffnet das zentrale Kontaktformular, das an n8n übermittelt und erst nach Bestätigung zählt.
  const openContact = () => {
    track("hero_tool_lead_form_opened", { page: pageId });
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  return (
    <div className="w-full max-w-lg mx-auto pt-6 border-t border-slate-100 mt-6 text-center space-y-2" id={`lead-capture-${pageId}`}>
      <button
        type="button"
        onClick={openContact}
        className="text-sm text-slate-700 hover:text-[#4f54d6] inline-flex items-center justify-center gap-1.5 mx-auto bg-transparent border-none min-h-11 px-2 cursor-pointer font-semibold transition-colors"
      >
        {secondaryCTAText} <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </button>
      {danachText && <p className="text-xs text-slate-500">{danachText}</p>}
    </div>
  );
}
