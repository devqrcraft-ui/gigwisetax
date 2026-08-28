import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gig Worker Tax Deductions Checklist 2026 — Free',
  description: 'Every tax deduction gig workers qualify for in 2026: mileage, phone, supplies, home office and more. Free checklist, see your estimated savings.',
  alternates: { canonical: 'https://www.gigwisetax.com/deductions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
