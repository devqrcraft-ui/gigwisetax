const reviews = [
  { initials: 'MR', name: 'Marcus R.', location: 'Texas', platform: 'DoorDash', rating: 5, date: 'April 14, 2026', text: 'Used this before filing my 2025 return. Calculator was spot on — my CPA confirmed the SE tax number. Way better than TaxAct which tried to charge me $90 just to see my estimate.' },
  { initials: 'JL', name: 'Jamie L.', location: 'California', platform: 'Uber Eats', rating: 5, date: 'March 28, 2026', text: 'Finally a calculator that actually breaks down SE tax, federal AND state. No sign-up, no email required, just got my number in 30 seconds.' },
  { initials: 'ST', name: 'Sarah T.', location: 'Florida', platform: 'Instacart', rating: 5, date: 'February 9, 2026', text: 'First year doing gig taxes and I was terrified. This calculator explained everything — SE tax, mileage deduction, quarterly deadlines. Set aside 27% and had exactly enough when Q1 was due.' },
  { initials: 'DK', name: 'Derek K.', location: 'New York', platform: 'Amazon Flex', rating: 4, date: 'January 22, 2026', text: 'Solid tool, completely free which is rare. I checked against TurboTax and the numbers matched. Would love a PDF export but for a free tool this is excellent.' },
  { initials: 'AC', name: 'Ashley C.', location: 'Illinois', platform: 'DoorDash + Lyft', rating: 5, date: 'May 3, 2026', text: 'I work two gig platforms and this was the only free calculator that let me combine income. No hidden upgrade, no premium plan required.' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= count ? '#e8b84b' : 'rgba(255,255,255,0.2)', fontSize: 14 }}>★</span>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 6px' }}>What Gig Workers Say</h2>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: '0 0 20px' }}>No sign-up required. No hidden fees. Ever.</p>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
        {reviews.map((r) => (
          <div key={r.name} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, background: 'rgba(232,184,75,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#e8b84b' }}>{r.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC' }}>{r.name}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>·</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{r.location}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>·</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#e8b84b', background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 4, padding: '1px 7px' }}>{r.platform}</span>
                </div>
                <StarRating count={r.rating} />
                <p style={{ margin: '0 0 8px', fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)' }}>{r.text}</p>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: '12px 18px', background: 'rgba(76,175,80,0.06)', border: '1px solid rgba(76,175,80,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' as const }}>
        <span style={{ color: '#4CAF50', fontSize: 16 }}>✓</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>GigWiseTax is 100% free · No account required · Calculations stay in your browser · No credit card · No surprises</span>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" style={{ marginBottom: 36 }}>
      <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 12 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#C8D8EC', marginBottom: 4 }}>Questions about your tax estimate?</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>We read every message — usually reply within 24 hours.</div>
        </div>
        <a href="mailto:kalkulator018@gmail.com" style={{ display: 'inline-block', background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.25)', color: '#e8b84b', fontWeight: 700, fontSize: 13, padding: '9px 20px', borderRadius: 7, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>kalkulator018@gmail.com</a>
      </div>
    </section>
  )
}
