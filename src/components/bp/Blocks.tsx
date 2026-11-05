/**
 * Wiederverwendbare Bausteine der Business-Performance-Seiten (Hubs, Lösungen, Referenzen, Startseite).
 * Bewusst schlicht: echte Links (crawlbar), FAQ als <details> (Antworten im vorgerenderten HTML), kein Glas/Glow.
 */
import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import Link from '../Link';
import { trackEvent } from '../../lib/analytics';
import { useContactModal } from '../../context/ContactModalContext';
import { SKILLS } from '../../data/skills';
import { RESOURCES_DATA } from '../../data/resources';
import { TESTIMONIALS_DATA } from '../home/ClientTestimonials';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
}: {
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
}) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      <Tag className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight text-balance">{title}</Tag>
      {intro && <p className="text-body text-slate-600 leading-relaxed">{intro}</p>}
    </div>
  );
}

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Seitenpfad" className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.href ? (
              <Link href={c.href} className="hover:text-[#686DF4] transition-colors">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-slate-700 font-semibold">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Kontakt-CTA: öffnet das Kontaktformular und meldet cta_click (GTM-Tag besteht seit v7). */
export function CtaButton({
  label,
  location,
  pageSlug,
  variant = 'dark',
  className = '',
}: {
  label: string;
  location: string;
  pageSlug?: string;
  variant?: 'dark' | 'accent' | 'light';
  className?: string;
}) {
  const { openContactModal } = useContactModal();
  const styles = {
    dark: 'bg-[#696EEF] hover:bg-[#5a5fe0] text-white',
    accent: 'bg-[#696EEF] hover:bg-[#5a5fe0] text-white',
    light: 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300',
  }[variant];
  return (
    <a
      href="/kontakt"
      data-cta={location}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        trackEvent('cta_click', { cta_location: location, cta_target: 'kontakt', page_slug: pageSlug });
        openContactModal();
      }}
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 font-display font-semibold px-7 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#696EEF]/40 ${styles} ${className}`}
    >
      {label} <ArrowRight className="w-5 h-5" aria-hidden="true" />
    </a>
  );
}

interface TeaserCardProps {
  href: string;
  title: string;
  desc?: string;
  linkText?: string;
  children?: React.ReactNode;
}

export const TeaserCard: React.FC<TeaserCardProps> = ({ href, title, desc, linkText = 'Mehr erfahren', children }) => {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-white border border-[#E0E0E0]/80 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-[#686DF4]/50 hover:shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30"
    >
      <h3 className="text-base sm:text-lg font-display font-semibold text-slate-900 group-hover:text-[#4f54d6] transition-colors leading-snug">
        {title}
      </h3>
      {desc && <p className="mt-2 text-body-sm text-slate-600 leading-relaxed">{desc}</p>}
      {children}
      <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#686DF4]">
        {linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
};

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-body-sm text-slate-700 leading-relaxed">
          <Check className="w-4.5 h-4.5 text-[#686DF4] shrink-0 mt-0.5" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** FAQ als native <details>: zugänglich, ohne JS bedienbar, Antworten stehen im HTML (FAQPage-Schema). */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl divide-y divide-slate-100 shadow-[var(--shadow-premium-sm)]">
      {items.map((f) => (
        <details key={f.q} className="group px-6 sm:px-8 py-5">
          <summary className="flex justify-between items-center gap-4 cursor-pointer list-none font-semibold text-slate-900 text-sm sm:text-base hover:text-[#686DF4] transition-colors [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-body-sm text-slate-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Passende Checks aus der Skill-Factory (Teaser auf /skills). */
export function ToolLinks({ ids }: { ids: string[] }) {
  const tools = ids.map((id) => SKILLS.find((s) => s.id === id)).filter((s): s is (typeof SKILLS)[number] => Boolean(s));
  if (!tools.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tools.map((t) => (
        <Link
          key={t.id}
          href="/skills"
          className="group flex items-start justify-between gap-4 bg-white border border-[#E0E0E0]/80 rounded-2xl px-5 py-4 hover:border-[#686DF4]/50 transition-colors"
        >
          <span>
            <span className="block text-sm font-semibold text-slate-900 group-hover:text-[#4f54d6]">{t.title}</span>
            <span className="block text-xs text-slate-500 mt-1 leading-relaxed">{t.description}</span>
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#686DF4] shrink-0 mt-0.5" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

/** Ratgeber-Teaser. */
export function ResourceLinks({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => RESOURCES_DATA.find((r) => r.slug === s)).filter((r): r is (typeof RESOURCES_DATA)[number] => Boolean(r));
  if (!items.length) return null;
  return (
    <ul className="space-y-3">
      {items.map((r) => (
        <li key={r.slug}>
          <Link href={`/ressourcen/${r.slug}`} className="group inline-flex items-start gap-2 text-sm font-semibold text-slate-800 hover:text-[#4f54d6]">
            <ArrowRight className="w-4 h-4 text-[#686DF4] mt-0.5 shrink-0" aria-hidden="true" />
            <span>{r.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Kurzzitat einer bestehenden Kundenstimme (wörtlich, gekürzt nur am Satzende). */
export function TestimonialQuote({ id, sentences = 2 }: { id: string; sentences?: number }) {
  const t = TESTIMONIALS_DATA.find((x) => x.id === id);
  if (!t) return null;
  const parts = t.quote.match(/[^.!?]+[.!?]+/g) ?? [t.quote];
  const text = parts.slice(0, sentences).join(' ').trim();
  return (
    <figure className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-9 shadow-[var(--shadow-premium-sm)]">
      <blockquote className="text-body text-slate-700 leading-relaxed">«{text}{parts.length > sentences ? ' …' : ''}»</blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm">
          <span className="font-semibold text-slate-900">{t.name}</span>
          <span className="text-slate-500">, {t.role}, {t.company}</span>
        </span>
        <Link href="/referenzen" className="text-xs font-bold text-[#686DF4] inline-flex items-center gap-1">
          Alle Referenzen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </figcaption>
    </figure>
  );
}

export function FinalCta({
  title,
  text,
  ctaLabel,
  location,
  pageSlug,
}: {
  title: string;
  text: string;
  ctaLabel: string;
  location: string;
  pageSlug?: string;
}) {
  return (
    <Container>
      <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-[var(--shadow-premium-lg)]">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">{title}</h2>
          <p className="text-body text-slate-300 leading-relaxed">{text}</p>
        </div>
        <CtaButton label={ctaLabel} location={location} pageSlug={pageSlug} variant="accent" className="shrink-0" />
      </div>
    </Container>
  );
}
