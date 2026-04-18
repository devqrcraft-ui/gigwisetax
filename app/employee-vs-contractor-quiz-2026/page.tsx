import type { Metadata } from 'next';
import EmployeeContractorQuiz from './EmployeeContractorQuiz';

export const metadata: Metadata = {
  title: 'Employee or Independent Contractor? 2026 Educational Quiz | GigWiseTax',
  description: 'Take this free 7-question educational quiz to understand whether your gig work situation resembles employee or independent contractor status. Not legal advice.',
  alternates: { canonical: 'https://www.gigwisetax.com/employee-vs-contractor-quiz-2026' },
  openGraph: {
    title: 'Employee vs Contractor Quiz 2026 — Gig Worker Guide',
    description: '7 quick questions to help gig workers understand their worker classification. Educational only.',
    url: 'https://www.gigwisetax.com/employee-vs-contractor-quiz-2026',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the difference between an employee and an independent contractor for gig workers?', acceptedAnswer: { '@type': 'Answer', text: 'Employees have taxes withheld and receive W-2 forms. Independent contractors receive 1099 forms, pay SE tax (15.3%), set their own hours, and use their own tools.' } },
    { '@type': 'Question', name: 'Do gig workers (DoorDash, Uber, Instacart) count as employees or independent contractors?', acceptedAnswer: { '@type': 'Answer', text: 'Most gig platform workers are classified as independent contractors. They receive a 1099-NEC, owe SE tax on net earnings, and can deduct business expenses like mileage.' } },
    { '@type': 'Question', name: 'How do I know if I owe self-employment tax?', acceptedAnswer: { '@type': 'Answer', text: 'If your net self-employment income is $400 or more in a year, the IRS requires you to pay SE tax of 15.3% on 92.35% of your net earnings.' } },
    { '@type': 'Question', name: 'What is the ABC test for worker classification?', acceptedAnswer: { '@type': 'Answer', text: 'The ABC test presumes a worker is an employee unless the company proves: (A) the worker is free from control, (B) the work is outside the usual business, and (C) the worker has an independently established business.' } },
  ],
};

export default function EmployeeContractorQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EmployeeContractorQuiz />
    </>
  );
}
