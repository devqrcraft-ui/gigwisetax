import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Turo Tax Calculator 2026 | Rental Income Estimate',
  description: 'Estimate 2026 Turo rental taxes using your filing status, rental days, vehicle expenses, and state. Includes clear assumptions and simplified state-rate estimates.',
  keywords: 'turo tax calculator, turo host self employment tax 2026, turo quarterly taxes, turo 1099 taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/turo' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
