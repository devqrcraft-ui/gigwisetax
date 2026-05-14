import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Quarterly Tax Calculator 2026 — How Much to Pay Each Quarter',
  description: 'Calculate your 2026 quarterly estimated taxes. Know exactly what to pay in April, June, September, and January. Free calculator for freelancers and gig workers.',
  keywords: 'quarterly tax calculator 2026, estimated quarterly taxes, self employment quarterly payments, 1099 quarterly taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/quarterly-tax-calculator-2026' },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
