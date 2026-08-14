import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etsy Tax Calculator 2026 — Seller Self-Employment Tax | GigWiseTax',
  description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 50 states + DC. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/etsy' },
  openGraph: {
    title: 'Etsy Tax Calculator 2026 — Free, All 50 States + DC | GigWiseTax',
    description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 50 states + DC. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
            {children}
    </>
  )
}
