import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/contact' },
  title: 'Contact GigWiseTax — Questions and Corrections',
  description: 'Email the GigWiseTax team with a question, feedback, or a correction to a tax figure, deadline or link. We cannot give personal tax advice.',
}

const EMAIL = 'kalkulator018@gmail.com'

const h2 = { fontSize: 20, fontWeight: 800, color: '#fff', margin: '36px 0 10px' } as const
const p = { fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', margin: '0 0 12px' } as const
const li = { fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 6 } as const
const linkStyle = {
  display: 'inline-flex', alignItems: 'center', minHeight: 44, color: '#a5b4fc',
  fontSize: 16, fontWeight: 600, textDecoration: 'underline',
} as const

export default function ContactPage() {
  return (
    <main style={{ padding: '48px 20px 64px', maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>Contact GigWiseTax</h1>
      <p style={p}>
        GigWiseTax.com offers free estimators for self-employment tax, federal income tax and quarterly estimated
        payments for gig workers and freelancers in the United States. The tools give estimates, not tax advice.
      </p>

      <a
        href={'mailto:' + EMAIL + '?subject=GigWiseTax'}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          minHeight: 48, maxWidth: 420, margin: '20px 0 8px', padding: '12px 18px', borderRadius: 8,
          background: '#e8b84b', color: '#07111F', fontWeight: 800, fontSize: 16, textDecoration: 'none',
        }}
      >
        Email us: {EMAIL}
      </a>

      <h2 style={h2}>Report a correction</h2>
      <p style={p}>
        Spotted a wrong number, an outdated deadline or a broken link? Email us. We review correction reports
        against official IRS and state tax agency sources and update the page when a figure is wrong.
      </p>
      <p style={p}>Please include:</p>
      <ul style={{ paddingLeft: 22, margin: '0 0 12px' }}>
        <li style={li}>the page address (URL) where you saw the problem</li>
        <li style={li}>what looks wrong, and what you expected to see</li>
        <li style={li}>a link to the IRS or state source that shows the correct figure, if you have one</li>
      </ul>
      <p style={p}>
        Please do not send Social Security numbers, tax returns, bank details or other sensitive documents.
      </p>

      <h2 style={h2}>What we cannot do</h2>
      <p style={p}>
        We are not a CPA, enrolled agent or tax preparer, so we cannot prepare returns or advise on your personal
        situation. For that, talk to a licensed tax professional or check IRS.gov.
      </p>

      <h2 style={h2}>About this site</h2>
      <nav aria-label="About GigWiseTax" style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/how-we-calculate-gig-taxes" style={linkStyle}>How we calculate gig worker taxes</Link>
        <Link href="/about" style={linkStyle}>About GigWiseTax</Link>
        <Link href="/privacy" style={linkStyle}>Privacy policy</Link>
        <Link href="/terms" style={linkStyle}>Terms of use</Link>
      </nav>
    </main>
  )
}
