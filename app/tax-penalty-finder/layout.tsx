import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Tax Savings Estimator 2026 — Federal Planning Tool',
  description: 'Explore a simplified federal tax illustration for gig workers. See how selected deductions may change estimated tax; results are not a penalty calculation or tax advice.',
  alternates: { canonical: 'https://www.gigwisetax.com/tax-penalty-finder' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
