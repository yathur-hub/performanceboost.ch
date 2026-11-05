/**
 * Footer (reduziert, 06.11.2026): Marke · Leistungsfelder · Unternehmen · Kontakt.
 * Einzelleistungen, E-Commerce und Finanzdienstleister sind bewusst nicht mehr im Footer;
 * sie sind über die Leistungsfeld-Hubs, /leistungen und /loesungen verlinkt.
 */
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '../config/site';
import { SERVICE_AREAS } from '../data/serviceAreas';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const COMPANY_LINKS = [
  { href: '/loesungen', label: 'Lösungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/skills', label: 'Skill-Factory' },
  { href: '/ressourcen', label: 'Ratgeber' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const go = (path: string, e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    onNavigate(path);
    if (path !== '/kontakt') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass = 'text-sm text-slate-600 hover:text-[#4f54d6] transition-colors';
  const headingClass = 'text-sm font-display font-semibold text-slate-900';

  return (
    <footer className="bg-white border-t border-slate-200 pt-14 pb-10" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 pb-10 border-b border-slate-200">
          <div className="col-span-2 lg:col-span-4 space-y-4">
            <a href="/" onClick={(e) => go('/', e)} className="inline-block" aria-label="performanceboost Startseite">
              <img
                loading="lazy"
                decoding="async"
                src={SITE.logoUrl}
                alt="performanceboost Logo"
                className="h-[64px] w-auto object-contain -mt-3 -ml-1"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Business Performance Partner für Schweizer KMU. Strategie, Technologie und Wachstum aus einer Hand, inhabergeführt aus Graubünden.
            </p>
          </div>

          <nav aria-label="Leistungsfelder" className="lg:col-span-3 space-y-3">
            <p className={headingClass}>Leistungen</p>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a.id}>
                  <a href={`/leistungen/${a.id}`} onClick={(e) => go(`/leistungen/${a.id}`, e)} className={linkClass}>
                    {a.shortLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Unternehmen" className="lg:col-span-2 space-y-3">
            <p className={headingClass}>Unternehmen</p>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => go(l.href, e)} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3 space-y-3">
            <p className={headingClass}>Kontakt</p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#696EEF] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {SITE.street}, {SITE.postalCode} {SITE.locality}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#696EEF] shrink-0" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#696EEF] shrink-0" aria-hidden="true" />
                <a href={SITE.phoneHref} className={linkClass}>{SITE.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} performanceboost</p>
          <div className="flex gap-5">
            <a href="/impressum" onClick={(e) => go('/impressum', e)} className="hover:text-[#4f54d6] transition-colors">Impressum</a>
            <a href="/datenschutz" onClick={(e) => go('/datenschutz', e)} className="hover:text-[#4f54d6] transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
