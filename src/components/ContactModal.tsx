/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle ESC key press and focus management
  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore focus on close
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Lock body scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus the modal container
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;

      // Restore previous focus
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-x-hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Box */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden z-[10000] outline-none"
          >
            {/* Top Modal Bar / Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-20 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#686DF4] animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#686DF4]">
                  Wachstumsgespräch & Audit
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Schliessen"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#686DF4]"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto flex-1 space-y-8">
              
              {/* Main 2-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                
                {/* LEFT COLUMN: Contact Form */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2 border-b border-slate-100 pb-4">
                    <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-slate-950 tracking-tight flex items-center gap-2.5">
                      <MessageSquare className="w-6 h-6 text-[#686DF4] shrink-0" />
                      Wachstumsgespräch buchen
                    </h2>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      Lass uns in 30 Minuten deine B2B-Pipeline, Lead-Gen & Marketing-Prozesse analysieren. Unverbindlich, kostenlos &amp; direkt mit Inhaber Yathur Nathan.
                    </p>
                  </div>

                  <ContactForm 
                    formName="Overlay Modal Formular" 
                    source="Wachstumsgespräch Overlay"
                    submitButtonText="Wachstumsgespräch jetzt anfragen"
                    onSuccess={() => {
                      // Keep modal open so user sees success message
                    }}
                  />
                </div>

                {/* RIGHT COLUMN: Person Info */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-slate-950 text-white border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#686DF4]/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center gap-4">
                      <img 
                        src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg"
                        alt="Yathur Nathan"
                        className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl object-cover border-2 border-white/20 shadow-lg shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#686DF4] bg-[#686DF4]/15 px-2.5 py-1 rounded-full">
                          <Sparkles className="w-2.5 h-2.5" /> Dein Ansprechpartner
                        </span>
                        <h3 className="text-xl font-display font-bold text-white pt-1">Yathur Nathan</h3>
                        <p className="text-xs font-mono font-bold text-slate-400">Gründer &amp; Inhaber</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed italic border-t border-slate-800/80 pt-4 font-medium text-center sm:text-left lg:text-center">
                      «Ich unterstütze Schweizer B2B-Unternehmen dabei, bestehende Wachstumspotenziale sichtbar zu machen und in ein verlässliches, automatisierte Kundengewinnungssystem zu übersetzen.»
                    </p>

                    {/* Contact details */}
                    <div className="space-y-3 pt-2 border-t border-slate-800/80">
                      <a 
                        href="mailto:yathur@performanceboost.ch"
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800/80 hover:border-[#686DF4]/40 text-xs font-medium text-slate-200 hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#686DF4]/20 text-[#686DF4] flex items-center justify-center shrink-0 group-hover:bg-[#686DF4] group-hover:text-white transition-all">
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0 text-left">
                          <span className="text-[8px] font-mono font-bold text-slate-400 uppercase">Direkte E-Mail</span>
                          <span className="font-semibold text-xs truncate">yathur@performanceboost.ch</span>
                        </div>
                      </a>

                      <a 
                        href="tel:+41786754097"
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800/80 hover:border-[#686DF4]/40 text-xs font-medium text-slate-200 hover:text-white transition-all group cursor-pointer"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#686DF4]/20 text-[#686DF4] flex items-center justify-center shrink-0 group-hover:bg-[#686DF4] group-hover:text-white transition-all">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0 text-left">
                          <span className="text-[8px] font-mono font-bold text-slate-400 uppercase">Telefonische Rückfrage</span>
                          <span className="font-semibold text-xs">+41 78 675 4097</span>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs font-medium text-slate-200">
                        <div className="w-7 h-7 rounded-lg bg-[#686DF4]/20 text-[#686DF4] flex items-center justify-center shrink-0">
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col min-w-0 text-left">
                          <span className="text-[8px] font-mono font-bold text-slate-400 uppercase">Standort Schweiz</span>
                          <span className="font-semibold text-xs">Patschär 4 • 7306 Fläsch (Graubünden)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
