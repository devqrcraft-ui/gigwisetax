import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Turo Tax Calculator 2026 | Host Income & Expense Estimate',
  description: 'Estimate 2026 taxes on Turo host income with rental days, vehicle expenses, filing status, and state. The calculator clearly states its active Schedule C assumption.',
  keywords: 'turo tax calculator, turo host self employment tax 2026, turo quarterly taxes, turo 1099 taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/turo' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
