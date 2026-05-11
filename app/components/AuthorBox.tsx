// AUTHOR-BOX:START
export default function AuthorBox() {
  return (
    <div style={{ maxWidth: 860, margin: '32px auto 0', padding: '0 24px 24px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 10, padding: '20px 24px' }}>
        <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: '#e8b84b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#07111F', letterSpacing: 1 }}>EB</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(200,216,236,0.6)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 4 }}>Written & reviewed by</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#e8b84b', marginBottom: 2 }}>Ethan Blake</div>
          <div style={{ fontSize: 13, color: '#C8D8EC', marginBottom: 8 }}>Small Business Tax & Compliance Expert</div>
          <div style={{ fontSize: 13, color: 'rgba(200,216,236,0.8)', lineHeight: 1.65, marginBottom: 10 }}>Tax compliance specialist since 2017. Helped 5,000+ freelancers and self-employed workers navigate IRS requirements and gig economy tax rules.</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: 12, color: 'rgba(200,216,236,0.5)' }}>Last reviewed: <time dateTime="2026-05-01">May 2026</time></span>
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#e8b84b', textDecoration: 'none' }}>IRS Self-Employed Tax Center →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
// AUTHOR-BOX:END
