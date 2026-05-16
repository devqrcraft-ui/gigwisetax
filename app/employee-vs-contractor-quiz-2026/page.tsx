import type { Metadata } from 'next';
import EmployeeContractorQuiz from './EmployeeContractorQuiz';
import AuthorBox from '@/app/components/AuthorBox';

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
      {/* ANSWER-FIRST */}
      <div style={{maxWidth:860,margin:'0 auto',padding:'32px 20px 0'}}>
        <div style={{background:'rgba(232,184,75,0.07)',border:'1px solid rgba(232,184,75,0.2)',borderRadius:8,padding:'14px 18px',marginBottom:12,fontSize:14,color:'rgba(255,255,255,0.85)',lineHeight:1.8}}>
          Most gig platform workers — DoorDash, Uber, Instacart — are classified as <strong style={{color:'#e8b84b'}}>independent contractors</strong>. They receive a 1099-NEC, pay <strong style={{color:'#e8b84b'}}>15.3% SE tax</strong> on net earnings, and can deduct mileage at 72.5¢/mile. This quiz helps you understand your classification.
        </div>
        <div style={{fontSize:12,color:'rgba(255,255,255,0.45)',marginBottom:16}}>
          Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist
        </div>
        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:24}}>
          <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>Independent contractors pay <strong>15.3% SE tax</strong> — employees have FICA split with their employer</li>
            <li>Gig workers receive <strong>1099-NEC</strong> (not W-2) and must pay estimated taxes quarterly</li>
            <li>The IRS ABC test: free from control, outside usual business, independently established trade</li>
            <li>Net self-employment income of <strong>$400+</strong> triggers SE tax — no threshold exemption</li>
            <li>Contractors can deduct <strong>72.5¢/mile</strong>, phone, equipment — employees generally cannot post-2017</li>
          </ul>
        </div>
      </div>
      <EmployeeContractorQuiz />
      <div style={{maxWidth:860,margin:'0 auto',padding:'0 20px'}}>
        <AuthorBox />
      </div>
    </>
  );
}
