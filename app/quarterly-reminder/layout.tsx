import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quarterly Tax Reminder 2026 — Never Miss an IRS Deadline',
  description: 'Free quarterly estimated tax deadline reminders for gig workers in 2026. See all 4 payment dates and avoid IRS underpayment penalties.',
  alternates: { canonical: 'https://www.gigwisetax.com/quarterly-reminder' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
