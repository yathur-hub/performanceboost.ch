/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-650" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-200">
          {/* Logo Column */}
          <div className="space-y-4">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img 
                src="https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/perfromanceboost_logo_transparent-removebg-preview.png" 
                alt="performanceboost Logo" 
                className="h-[78px] w-auto object-contain -mt-3 transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-medium">
              Die führende Schweizer Boutique-Beratung für B2B Lead Generation, Demand Gen, KI-Automation und datengestütztes Revenue Operations.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-200/60 w-fit shadow-[var(--shadow-premium-sm)]">
              <ShieldCheck className="w-4 h-4 text-[#686DF4]" />
              <span className="font-semibold text-[10px]">Schweizer Qualität & Datenschutz</span>
            </div>
          </div>

          {/* Quick Links Sitemaps */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 font-display">Navigationsübersicht</h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-semibold">
              <li>
                <a href="/" onClick={(e) => handleLinkClick('/', e)} className="hover:text-[#686DF4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/loesungen" onClick={(e) => handleLinkClick('/loesungen', e)} className="hover:text-[#686DF4] transition-colors">
                  Themen
                </a>
              </li>
              <li>
                <a href="/leistungen" onClick={(e) => handleLinkClick('/leistungen', e)} className="hover:text-[#686DF4] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/ueber-uns" onClick={(e) => handleLinkClick('/ueber-uns', e)} className="hover:text-[#686DF4] transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/kontakt" onClick={(e) => handleLinkClick('/kontakt', e)} className="hover:text-[#686DF4] transition-colors">
                  Erstgespräch buchen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 font-display">Direktkontakt</h4>
            <ul className="space-y-3.5 text-xs text-slate-505 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#686DF4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  performanceboost<br/>
                  Patschär 4<br/>
                  7306 Fläsch
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#686DF4] shrink-0" />
                <a href="mailto:hallo@performanceboost.ch" className="text-slate-650 hover:text-[#686DF4] transition-colors font-semibold">
                  hallo@performanceboost.ch
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
              Datenschutzerklärung (DSG)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
