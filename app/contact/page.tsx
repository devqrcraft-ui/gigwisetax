import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact — GigWiseTax',
  description: 'Contact the GigWiseTax team.',
}
export default function ContactPage() {
  return (
    <main style={{ padding: '60px 24px', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Contact Us</h1>
      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
        Have a question or feedback? Email us at{' '}
        <a href="mailto:hello@gigwisetax.com" style={{ color: '#a5b4fc' }}>hello@gigwisetax.com</a>
      </p>
    </main>
  )
}
