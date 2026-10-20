// Запуск: npx tsx scripts/verify-tax.ts   (падає з кодом 1, якщо щось розійшлось з еталоном)
import { estimateTax, TAX_RULES_2026 } from '../lib/tax-rules'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
type Row = [string, number, number, Partial<ReturnType<typeof estimateTax>>]
const cases: Row[] = [
  ['30K single no state', 30000, 0, { se: 4239, federal: 1178, total: 5417 }],
  ['35K single no state', 35000, 0, { se: 4945, federal: 1723, total: 6669, quarterly: 1667 }],
  ['40K single no state', 40000, 0, { se: 5652, federal: 2281, total: 7933, quarterly: 1983 }],
  ['50K single no state', 50000, 0, { se: 7065, federal: 3396, total: 10461, quarterly: 2615 }],
  ['60K single no state', 60000, 0, { se: 8478, federal: 4511, total: 12989, quarterly: 3247 }],
  ['35K CA 9.3%', 35000, 0.093, { state: 1528, total: 8196, quarterly: 2049 }],
  ['40K CA 9.3%', 40000, 0.093, { state: 1960, total: 9893, takeHome: 30107 }],
  ['60K FL', 60000, 0, { takeHome: 47011 }],
]
let bad = 0
for (const [name, g, r, exp] of cases) {
  const got = estimateTax(g, r)
  for (const k of Object.keys(exp) as (keyof typeof got)[]) {
    if (got[k] !== exp[k]) { bad++; console.log('FAIL', name, k, 'got', got[k], 'expected', exp[k]) }
  }
}
// SS-стеля: при доході вище неї SE не росте лінійно
const hi = estimateTax(250000, 0).se, lo = estimateTax(200000, 0).se
if (!(hi - lo < 50000 * 0.9235 * 0.153)) { bad++; console.log('FAIL SS cap') }
// --- STALE-SCAN: numbers from 2024/2025 that must not appear in live code
const STALE = ['11925','48475','103350','197300','250525','626350','23850','96950','206700','394600','501050','751600','64850','250500','15750','31500','23625','14600','29200','47150','100525','191950','243725','609350','94300','201050','383900','487450','731200','168600','176100']
const SKIP_LINE = /\b2025\b|\b2024\b|up from/i // lines that deliberately compare with previous years
const withComma = (n: string) => n.replace(/(\d)(?=(\d{3})+$)/g, '$1,?')
const staleRe = new RegExp('(?<![\\d.,])(' + STALE.map(withComma).join('|') + ')(?!\\d)')
function walk(d: string, out: string[] = []): string[] {
  for (const f of readdirSync(d)) {
    if (f === 'node_modules' || f === '.next' || f.startsWith('.')) continue
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.(ts|tsx)$/.test(f)) out.push(p)
  }
  return out
}
for (const base of ['app', 'lib']) {
  for (const f of walk(base)) {
    readFileSync(f, 'utf8').split('\n').forEach((ln, i) => {
      if (SKIP_LINE.test(ln)) return
      const m = ln.match(staleRe)
      if (m) { bad++; console.log('STALE', f.replace(/\\/g, '/') + ':' + (i + 1), m[1]) }
    })
  }
}
// --- FRESHNESS
const ageDays = (Date.now() - new Date(TAX_RULES_2026.verifiedOn).getTime()) / 86400000
if (ageDays > 120) { bad++; console.log('FAIL rules older than 120 days:', TAX_RULES_2026.verifiedOn) }
if (new Date() >= new Date('2027-01-15')) { bad++; console.log('FAIL: 2027 rules not loaded (Rev. Proc., Pub 15-T, mileage, SSA wage base)') }
console.log(bad ? `${bad} FAIL` : `OK (${cases.length} cases, rules verified ${TAX_RULES_2026.verifiedOn})`)
process.exit(bad ? 1 : 0)
