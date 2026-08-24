import { STATES, PLATFORMS } from '@/lib/data'

export default function PlatformStatesGrid({ platformSlug }: { platformSlug: string }) {
  const platform = PLATFORMS.find(p => p.slug === platformSlug)
  if (!platform) return null
  const top8 = ['california','new-york','texas','florida','illinois','washington','nevada','georgia']
  const topStates = top8.map(slug => STATES.find(s => s.slug === slug)).filter(Boolean) as typeof STATES

  return (
    <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden' as const }}>
      <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Top States</span>
      </div>
      {topStates.map(s => (
        <a key={s.slug} href={`/${platformSlug}/${s.slug}`} style={{ textDecoration: 'none' }}>
          <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{platform.name} in {s.name}</span>
            <span style={{ fontSize: 11, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 700 }}>{s.rate === 0 ? 'No Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/,'')}%`}</span>
          </div>
        </a>
      ))}
      <div style={{ padding: '10px 16px' }}>
        <a href={`/${platformSlug}#all-states`} style={{ fontSize: 12, color: '#e8b84b', textDecoration: 'none', fontWeight: 700 }}>View all 50 states →</a>
      </div>
      <div id="all-states" style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {STATES.map(s => (
          <a key={s.slug} href={`/${platformSlug}/${s.slug}`} style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{s.name}</a>
        ))}
      </div>
    </div>
  )
}
