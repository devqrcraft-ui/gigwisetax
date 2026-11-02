import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gig Worker Tax Deductions Checklist for 2026',
  description: 'Review common gig-worker deductions, eligibility limits, and recordkeeping. Select checklist items without treating deductions as guaranteed tax savings.',
  alternates: { canonical: 'https://www.gigwisetax.com/deductions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
