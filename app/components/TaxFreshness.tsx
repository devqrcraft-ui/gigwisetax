import { TAX_RULES_2026 } from '@/lib/tax-rules'

/** Видима свіжість і джерела (E-E-A-T для YMYL). Дата береться з lib/tax-rules.ts, тому оновлюється разом із правилами. */
export default function TaxFreshness() {
  const label = new Date(TAX_RULES_2026.verifiedOn + 'T00:00:00Z').toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  })
  const a = { color: '#e8b84b', textDecoration: 'underline' } as const
  return (
    <div className="tax-freshness" style={{ margin: '24px 0 0', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
      <strong style={{ color: '#fff' }}>Tax inputs last verified: {label}.</strong>{' '}
      Sources:{' '}
      <a style={a} href={TAX_RULES_2026.sources.brackets} target="_blank" rel="noopener noreferrer">IRS 2026 brackets and standard deduction</a>,{' '}
      <a style={a} href={TAX_RULES_2026.sources.mileage} target="_blank" rel="noopener noreferrer">IRS standard mileage rates</a>,{' '}
      <a style={a} href={TAX_RULES_2026.sources.ssWageBase} target="_blank" rel="noopener noreferrer">SSA wage base</a>.{' '}
      Results are simplified planning estimates, not a tax return or tax advice. State tax uses a flat-rate simplification. See our{' '}
      <a style={a} href="/how-we-calculate-gig-taxes">methodology</a>. Not affiliated with the IRS.
    </div>
  )
}
