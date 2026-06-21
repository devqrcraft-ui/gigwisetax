import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'IRS Tax Penalty Calculator 2026 — Find & Fix Underpayment Penalties Free',
  description: 'Find out if you owe IRS underpayment penalties in 2026. Free calculator for gig workers — DoorDash, Uber, Instacart, Amazon Flex. Takes 60 seconds.',
  alternates: { canonical: 'https://www.gigwisetax.com/tax-penalty-finder' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
