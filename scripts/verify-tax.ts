// Запуск: npx tsx scripts/verify-tax.ts   (падає з кодом 1, якщо щось розійшлось з еталоном)
import { estimateTax, TAX_RULES_2026 } from '../lib/tax-rules'
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
console.log(bad ? `${bad} FAIL` : `OK (${cases.length} cases, rules verified ${TAX_RULES_2026.verifiedOn})`)
process.exit(bad ? 1 : 0)
