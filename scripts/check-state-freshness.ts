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
