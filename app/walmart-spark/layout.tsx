import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Walmart Spark Tax Calculator 2026 — $30K Income = ~$6,448 Tax Owed',
  description: 'Walmart Spark drivers: $30K net = ~$4,594 SE tax + federal. Mileage deduction 72.5¢/mile saves $2,175+. Free 2026 calculator, all 51 states, no signup.',
  keywords: 'walmart spark tax calculator, walmart spark self employment tax 2026, walmart spark quarterly taxes, spark driver 1099 taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/walmart-spark' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
