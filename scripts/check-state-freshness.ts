import { STATE_RATE_SOURCES } from '../lib/state-rate-sources'

const MAX_DAYS = 100
const today = new Date()
const rows = Object.entries(STATE_RATE_SOURCES)
const stale: string[] = []
const unverified: string[] = []
const secondary: string[] = []
let primary = 0

for (const [slug, s] of rows) {
  if (s.level === 'primary') primary++
  if (s.level === 'secondary') secondary.push(slug)
  if (s.level === 'unverified') unverified.push(slug)
  if (s.checkedOn) {
    const days = Math.floor((today.getTime() - new Date(s.checkedOn).getTime()) / 86400000)
    if (days > MAX_DAYS) stale.push(slug + ' (' + days + ' days)')
  }
}

console.log('states in register:', rows.length)
console.log('primary:', primary, '| secondary:', secondary.length, '| unverified:', unverified.length)
console.log('older than ' + MAX_DAYS + ' days:', stale.length ? stale.join(', ') : 'none')
console.log('secondary only:', secondary.join(', ') || 'none')
console.log('unverified:', unverified.join(', ') || 'none')

import { writeFileSync } from 'node:fs'
if (process.env.REPORT_FILE) {
  const L = [
    'Monthly review of state income tax rates (lib/data.ts vs lib/state-rate-sources.ts).',
    '',
    'primary: ' + primary + ' | secondary: ' + secondary.length + ' | unverified: ' + unverified.length,
    'older than ' + MAX_DAYS + ' days: ' + (stale.length ? stale.join(', ') : 'none'),
    '',
    'secondary only: ' + (secondary.join(', ') || 'none'),
    '',
    'unverified: ' + (unverified.join(', ') || 'none'),
    '',
    'How to close: compare each rate with the state tax authority (primary source), fix lib/data.ts if needed, then update checkedOn, level and sourceUrl in lib/state-rate-sources.ts. Do not change checkedOn without a real check.',
    'Known open items: Maryland, Washington DC, Missouri (vote 2026-11-03).',
  ]
  writeFileSync(process.env.REPORT_FILE, L.join('\n') + '\n')
}
