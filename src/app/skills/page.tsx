// @ts-nocheck
import type { Metadata } from 'next'
import SkillsDirectory from '@/components/skills/SkillsDirectory'

export const metadata: Metadata = {
  title: 'Skill Factory – 36 Diagnose-Frameworks für B2B-Wachstum | Performanceboost',
  description:
    '36 kostenlose Diagnose-Frameworks für Revenue-Systeme — von GTM-Strategie bis AI-Automatisierung. Identifiziere Engpässe, bevor du optimierst.',
  openGraph: {
    title: 'Skill Factory – 36 Diagnose-Frameworks | Performanceboost',
    description:
      '36 kostenlose Diagnose-Frameworks für Revenue-Systeme — von GTM-Strategie bis AI-Automatisierung.',
    url: 'https://performanceboost.ch/skills',
  },
}

export default function SkillsPage() {
  return <SkillsDirectory />
}
