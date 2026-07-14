import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Grubhub Tax Calculator 2026 — $35K Income = $7,750 Tax Owed',
  description: 'Grubhub drivers: $35K net = $4,944 SE tax + federal. Mileage deduction 72.5¢/mile saves $2,538+. Free 2026 calculator, all 50 states + DC, no signup.',
  keywords: 'grubhub tax calculator, grubhub self employment tax 2026, grubhub quarterly taxes, grubhub 1099 taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/grubhub' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
