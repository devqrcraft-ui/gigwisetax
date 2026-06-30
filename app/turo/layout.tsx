import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Turo Tax Calculator 2026 — $50K Income = $11,565 Tax Owed',
  description: 'Turo hosts: $50K net = $7,065 SE tax + federal. Depreciation and mileage deductions can save $3,000+. Free 2026 calculator, all 50 states + DC, no signup.',
  keywords: 'turo tax calculator, turo host self employment tax 2026, turo quarterly taxes, turo 1099 taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/turo' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
