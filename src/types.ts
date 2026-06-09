export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  slug: string; // e.g. "growth-strategy"
  benefits: string[];
  deliverables: string[];
  iconName: string;
  metrics: { label: string; value: string }[];
  processSteps: { title: string; desc: string }[];
}

export interface ExtendedServiceContent {
  slug: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  problem: {
    title: string;
    paragraphs: string[];
  };
  leistet: {
    title: string;
    items: { title: string; desc: string }[];
  };
  approach: {
    title: string;
    items: { title: string; desc: string }[];
  };
  extraSections?: {
    title: string;
    type: 'list' | 'text' | 'grid' | 'cases' | 'investment';
    subtitle?: string;
    text?: string;
    items?: { title: string; desc: string; extra?: string }[];
    bullets?: string[];
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
}

export interface SolutionArea {
  id: string;
  title: string;
  tagline: string;
  targetGroup: string;
  description: string;
  idealFor: string[];
  includedServices: string[]; // references of ServiceDetail.slug
  recommendedCombo: string;
  resultMetric: { label: string; value: string };
}

export interface ResourceItem {
  id: string;
  type: 'blog' | 'case-study' | 'guide';
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[];
  readTime: string;
  publishDate: string;
  author: string;
  stat?: { label: string; value: string }; // e.g. "+145% Leads" for case study
}
