import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact — GigWiseTax',
  description: 'Contact the GigWiseTax team.',
}
export default function ContactPage() {
  return (
    <main style={{ padding: '60px 24px', maxWidth: 600, margin: '0 auto' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How can I contact GigWiseTax?","acceptedAnswer":{"@type":"Answer","text":"Use the contact form on this page to send questions, feedback, or partnership inquiries. We aim to respond within 1-2 business days. For urgent tax questions, consult a licensed CPA or tax professional."}},{"@type":"Question","name":"Does GigWiseTax offer personalized tax advice?","acceptedAnswer":{"@type":"Answer","text":"No. GigWiseTax provides educational tools and general information only. For personalized tax advice tailored to your situation, consult a licensed CPA or enrolled agent."}}]}' }} />
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Contact Us</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
        Have a question or feedback? Email us at{' '}
        <a href="mailto:hello@gigwisetax.com" style={{ color: '#a5b4fc' }}>hello@gigwisetax.com</a>
      </p>
    </main>
  )
}
