/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { SITE } from '../config/site';
import { SERVICES } from '../data/services';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const FINANCE_LINKS = [
  { href: '/loesungen/finanzdienstleister', label: 'Übersicht' },
  { href: '/loesungen/hypothekarberatung', label: 'Hypothekarberatung' },
  { href: '/loesungen/vorsorgeberatung', label: 'Vorsorgeberatung' },
  { href: '/loesungen/versicherungsbroker', label: 'Versicherungsbroker' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const b2bServices = SERVICES.filter((s) => 
    ['growth-strategy', 'demand-generation', 'lead-generation', 'sales-enablement', 'ai-automation', 'data-analytics'].includes(s.slug)
  );

  const ecommerceServices = SERVICES.filter((s) => 
    ['ecommerce-performance', 'dtc-growth-acquisition', 'customer-retention', 'paid-social-ecommerce'].includes(s.slug)
  );

  return (
    <footer className="bg-white border-t border-slate-250 pt-16 pb-12 text-slate-650" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-200" id="footer-top-grid">
          {/* Column 1: Logo & Agency mission */}
          <div className="space-y-4" id="footer-col-brand">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img loading="lazy" decoding="async" 
                src="https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/perfromanceboost_logo_transparent-removebg-preview.png" 
                alt="performanceboost Logo" 
                className="h-[74px] w-auto object-contain -mt-3 transition-transform duration-300 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[240px] font-medium animate-fade-in">
              Beratung und Umsetzung für digitale Neukundengewinnung: Kampagnen, Landingpages, Tracking und Automatisierung für Schweizer KMU.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-200/60 w-fit shadow-[var(--shadow-premium-sm)]">
              <ShieldCheck className="w-4 h-4 text-[#686DF4] shrink-0" />
              <span className="font-semibold text-[11px]">Inhabergeführt aus Graubünden</span>
            </div>
          </div>

          {/* Column 2: B2B & Dienstleistung (8 Hebel) */}
          <div className="space-y-4" id="footer-col-b2b">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-display">B2B & Dienstleistung</h4>
              <div className="h-0.5 w-6 bg-[#686DF4]/40 mt-1.5 rounded-full"></div>
            </div>
            <ul className="space-y-2 text-[11px] text-slate-500 font-semibold" id="footer-b2b-links">
              {b2bServices.map((s) => (
                <li key={s.slug}>
                  <a 
                    href={`/leistungen/${s.slug}`} 
                    onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)} 
                    className="hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item hover:text-[#686DF4]"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: E-Commerce & Corporate (4 Hebel + Company) */}
          <div className="space-y-6" id="footer-col-ecommerce-company">
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-display">E-Commerce</h4>
                <div className="h-0.5 w-6 bg-[#686DF4]/40 mt-1.5 rounded-full"></div>
              </div>
              <ul className="space-y-2 text-[11px] text-slate-500 font-semibold" id="footer-ecommerce-links">
                {ecommerceServices.map((s) => (
                  <li key={s.slug}>
                    <a 
                      href={`/leistungen/${s.slug}`} 
                      onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)} 
                      className="hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item hover:text-[#686DF4]"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                      <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-display">Finanzdienstleister</h4>
                <div className="h-0.5 w-6 bg-[#686DF4]/40 mt-1.5 rounded-full"></div>
              </div>
              <ul className="space-y-2 text-[11px] text-slate-500 font-semibold" id="footer-finance-links">
                {FINANCE_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleLinkClick(l.href, e)}
                      className="hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                      <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-display">Unternehmen</h4>
                <div className="h-0.5 w-6 bg-[#686DF4]/40 mt-1.5 rounded-full"></div>
              </div>
              <ul className="space-y-2 text-[11px] text-slate-500 font-bold" id="footer-company-links">
                <li>
                  <a 
                    href="/loesungen" 
                    onClick={(e) => handleLinkClick('/loesungen', e)} 
                    className="text-slate-600 hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">Branchen</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/ressourcen" 
                    onClick={(e) => handleLinkClick('/ressourcen', e)} 
                    className="text-slate-600 hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">Ratgeber</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/skills" 
                    onClick={(e) => handleLinkClick('/skills', e)} 
                    className="text-slate-600 hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">Selbst-Checks & Rechner</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/ueber-uns" 
                    onClick={(e) => handleLinkClick('/ueber-uns', e)} 
                    className="text-slate-600 hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">Über uns</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/kontakt" 
                    onClick={(e) => handleLinkClick('/kontakt', e)} 
                    className="text-slate-600 hover:text-[#686DF4] transition-all duration-200 flex items-center gap-2 py-0.5 group/f-item"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-400 group-hover/f-item:bg-[#686DF4] group-hover/f-item:scale-125 transition-all shrink-0"></span>
                    <span className="transition-transform duration-200 group-hover/f-item:translate-x-1">Kontakt & Erstgespräch</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Direktkontakt */}
          <div className="space-y-4" id="footer-col-contact">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-display">Direktkontakt</h4>
              <div className="h-0.5 w-6 bg-[#686DF4]/40 mt-1.5 rounded-full"></div>
            </div>
            <ul className="space-y-3.5 text-xs text-slate-500 font-medium" id="footer-contact-details">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#686DF4] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-600 font-semibold text-[11px]">
                  performanceboost<br/>
                  Patschär 4<br/>
                  7306 Fläsch / GR
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#686DF4] shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-slate-700 hover:text-[#686DF4] transition-colors font-bold text-[11px]">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#686DF4] shrink-0" />
                <a href={SITE.phoneHref} className="text-slate-700 hover:text-[#686DF4] transition-colors font-bold text-[11px]">
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower row: copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-semibold">
          <div>
            © {new Date().getFullYear()} performanceboost. Alle Rechte vorbehalten
          </div>
          <div className="flex gap-4 font-semibold text-slate-400">
            <a href="/impressum" onClick={(e) => handleLinkClick('/impressum', e)} className="hover:text-[#686DF4] transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" onClick={(e) => handleLinkClick('/datenschutz', e)} className="hover:text-[#686DF4] transition-colors">
              Datenschutz
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
