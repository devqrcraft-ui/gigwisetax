import type { Metadata } from 'next';
import MultiPlatformCalculator from './MultiPlatformCalculator';

export const metadata: Metadata = {
  title: 'Multi-App Gig Tax Calculator 2026 — DoorDash, Uber, Instacart & More | GigWiseTax',
  description:
    'Reconcile annual income from multiple gig apps, enter eligible expenses once, and review one combined 2026 estimate and quarterly schedule. State tax is simplified.',
  alternates: { canonical: 'https://www.gigwisetax.com/multi-platform-gig-tax-calculator-2026' },
  openGraph: {
    title: 'Multi-App Gig Tax Calculator 2026 — DoorDash, Uber, Instacart & More',
    description: 'Combine app-by-app annual income into one 2026 gig-tax estimate, enter eligible expenses once, and review a quarterly schedule.',
    url: 'https://www.gigwisetax.com/multi-platform-gig-tax-calculator-2026',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why enter income from each app separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Separate fields make it easier to reconcile platform statements. This estimator adds entered gross amounts, subtracts eligible business expenses entered once, and estimates a combined total. It is a planning tool, not tax-return preparation; do not count shared-trip miles twice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the self-employment tax rate for gig workers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The SE tax rate is 15.3% — 12.4% for Social Security (on earnings up to $184,500) and 2.9% for Medicare. It applies to 92.35% of your net self-employment income. You can deduct half of SE tax from your gross income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate quarterly taxes for multiple gig apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Add your total net income from all platforms, calculate your annual tax liability (SE + federal + state), then divide by 4. Pay by Apr 15, Jun 15, Sep 15 2026, and Jan 15 2027. If you expect to owe $1,000 or more, quarterly payments are required by the IRS.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I deduct expenses from multiple gig apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Common deductions include mileage (72.5 cents/mile for January–June, then 76 cents from July 1 in 2026 for DoorDash, Uber, Instacart deliveries), phone bills, insulated bags, and a portion of your car expenses. Each platform may have separate Schedule C filings or you can combine similar work.',
      },
    },
  ],
};

export default function MultiPlatformCalculatorPage() {
  return (
    <>
      
      <MultiPlatformCalculator />
    </>
  );
}
