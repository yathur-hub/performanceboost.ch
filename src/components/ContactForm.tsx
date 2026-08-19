/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREMIUM_EASE, DURATIONS, buttonPressProps } from '../lib/motion';
import { trackEvent } from '../lib/analytics';

interface ContactFormProps {
  onSuccess?: () => void;
  formName?: string;
  source?: string;
  submitButtonText?: string;
  className?: string;
}

export default function ContactForm({
  onSuccess,
  formName = "Kontaktformular",
  source = "Website",
  submitButtonText = "Nachricht absenden",
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    annualRevenue: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    trackEvent('form_view', { form_name: formName, source });
  }, [formName, source]);

  const touchedFieldsRef = useRef<Set<string>>(new Set());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (touchedFieldsRef.current.has(name)) return;
    touchedFieldsRef.current.add(name);
    // Never log the raw value for free-text/PII fields — only completion + non-PII selects.
    const isPii = ['firstName', 'lastName', 'email', 'phone', 'message'].includes(name);
    trackEvent('form_field_complete', {
      form_name: formName,
      field: name,
      value: isPii ? (value !== '' ? 'filled' : 'empty') : value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);
    trackEvent('form_submit_attempt', { form_name: formName, source, annual_revenue: formData.annualRevenue });

    const payload = {
      salutation: formData.salutation,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || "",
      annualRevenue: formData.annualRevenue,
      message: formData.message,
      source: source,
      website: "performanceboost.ch",
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      formName: formName,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch("https://n8n.performanceboost.ch/webhook/performanceboost/contact", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(payload)
      });

      const responseText = await response.text();

      console.log("n8n response status:", response.status);
      console.log("n8n response text:", responseText);

      if (!response.ok) {
        throw new Error(`n8n webhook failed with status ${response.status}`);
      }

      trackEvent('generate_lead', {
        form_name: formName,
        source,
        annual_revenue: payload.annualRevenue,
        salutation: payload.salutation,
      });

      setShowSuccess(true);
      // Reset form fields
      setFormData({
        salutation: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        annualRevenue: '',
        message: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Form submission failed error details:", err);
      trackEvent('form_submit_error', { form_name: formName, source });
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={`space-y-4 sm:space-y-5 ${className}`}>
      {/* ROW 1: Anrede & Vorname */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Anrede */}
        <div className="space-y-1.5">
          <label htmlFor="form-salutation" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>Anrede</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="form-salutation"
              name="salutation"
              required
              value={formData.salutation}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              className={`w-full appearance-none bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 px-3.5 pr-10 text-xs sm:text-sm font-medium transition-all cursor-pointer outline-none ${
                formData.salutation ? 'text-slate-900' : 'text-slate-400 font-normal'
              }`}
            >
              <option value="" disabled>Bitte wählen...</option>
              <option value="Herr" className="text-slate-900 font-medium">Herr</option>
              <option value="Frau" className="text-slate-900 font-medium">Frau</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Vorname */}
        <div className="space-y-1.5">
          <label htmlFor="form-firstName" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>Vorname</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative group">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#686DF4] transition-colors pointer-events-none" />
            <input 
              id="form-firstName"
              type="text" 
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="z.B. Sven"
              className="w-full bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 pl-10 pr-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400/80 placeholder:font-normal font-medium transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* ROW 2: Nachname & E-Mail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nachname */}
        <div className="space-y-1.5">
          <label htmlFor="form-lastName" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>Nachname</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative group">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#686DF4] transition-colors pointer-events-none" />
            <input 
              id="form-lastName"
              type="text" 
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="z.B. Meier"
              className="w-full bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 pl-10 pr-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400/80 placeholder:font-normal font-medium transition-all outline-none"
            />
          </div>
        </div>

        {/* E-Mail */}
        <div className="space-y-1.5">
          <label htmlFor="form-email" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>E-Mail-Adresse</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative group">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#686DF4] transition-colors pointer-events-none" />
            <input 
              id="form-email"
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="sven.meier@unternehmen.ch"
              className="w-full bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 pl-10 pr-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400/80 placeholder:font-normal font-medium transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* ROW 3: Telefonnummer & Jahresumsatz */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Telefonnummer (Pflichtfeld) */}
        <div className="space-y-1.5">
          <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>Telefonnummer</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative group">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-[#686DF4] transition-colors pointer-events-none" />
            <input 
              id="form-phone"
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              placeholder="+41 79 123 45 67"
              className="w-full bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 pl-10 pr-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400/80 placeholder:font-normal font-medium transition-all outline-none"
            />
          </div>
        </div>

        {/* Jahresumsatz */}
        <div className="space-y-1.5">
          <label htmlFor="form-revenue" className="block text-xs font-semibold text-slate-800 tracking-tight">
            <span>Jährlicher Umsatz</span>
            <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="form-revenue"
              name="annualRevenue"
              required
              value={formData.annualRevenue}
              onChange={handleInputChange}
              onBlur={handleFieldBlur}
              className={`w-full appearance-none bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-2.5 sm:py-3 px-3.5 pr-10 text-xs sm:text-sm font-medium transition-all cursor-pointer outline-none ${
                formData.annualRevenue ? 'text-slate-900' : 'text-slate-400 font-normal'
              }`}
            >
              <option value="" disabled>Grössenordnung wählen...</option>
              <option value="under_1m" className="text-slate-900 font-medium">Unter CHF 1 Mio.</option>
              <option value="1m_5m" className="text-slate-900 font-medium">CHF 1 Mio. – CHF 5 Mio.</option>
              <option value="5m_20m" className="text-slate-900 font-medium">CHF 5 Mio. – CHF 20 Mio.</option>
              <option value="over_20m" className="text-slate-900 font-medium">Über CHF 20 Mio.</option>
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ROW 4: Nachricht */}
      <div className="space-y-1.5">
        <label htmlFor="form-message" className="block text-xs font-semibold text-slate-800 tracking-tight">
          <span>Deine Nachricht</span>
          <span className="text-[#686DF4] ml-1 font-bold" aria-hidden="true">*</span>
        </label>
        <textarea 
          id="form-message"
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleFieldBlur}
          placeholder="Skizziere kurz euer Anliegen oder die größte Hürde (z.B. Lead-Generierung, Sales Pipeline oder Marketing-Automation)..."
          className="w-full bg-slate-50/80 hover:bg-slate-50/95 focus:bg-white border border-slate-200/90 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/12 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400/80 placeholder:font-normal font-medium transition-all outline-none resize-y min-h-[95px]"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-2">
        <motion.button 
          type="submit"
          {...buttonPressProps}
          disabled={isSubmitting}
          className="w-full bg-slate-950 text-white font-bold text-xs sm:text-sm py-3.5 sm:py-4 px-6 rounded-xl tracking-wider uppercase hover:bg-[#686DF4] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></div>
              <span>Wird übermittelt...</span>
            </>
          ) : (
            <>
              <span>{submitButtonText}</span> 
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>

      {/* Form alerts nested inside AnimatePresence */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
            className="bg-[#686DF4]/8 border border-[#686DF4]/25 rounded-xl p-4 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-3"
            id="form-feedback-success"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#686DF4]" />
            <div className="space-y-1">
              <h5 className="font-bold text-slate-950 font-display">Vielen Dank. Deine Anfrage wurde erfolgreich übermittelt.</h5>
              <p className="text-slate-600 text-xs leading-relaxed">Yathur wird sich innerhalb der nächsten 24 Stunden persönlich bei dir zur Hebel-Diagnose melden.</p>
            </div>
          </motion.div>
        )}

        {showError && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-red-900 font-medium flex items-start gap-3"
            id="form-feedback-error"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
            <div className="space-y-1">
              <h5 className="font-bold text-red-950 font-display">Die Anfrage konnte nicht übermittelt werden.</h5>
              <p className="text-red-700 text-xs leading-relaxed">Bitte prüfe deine Eingaben oder kontaktiere uns direkt via hallo@performanceboost.ch.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
