// lib/examples.ts — ЄДИНЕ місце, де числа прикладів/title/meta рахуються з рушія.
// Правило №75: руками в тексті, title, meta чи JSON-LD податкових чисел не вписувати.
import { estimateTaxRaw, TAX_RULES_2026 } from './tax-rules'

export type ExFiling = 'single' | 'married' | 'hoh'

export const MILEAGE_H1 = TAX_RULES_2026.mileage.h1 // 1 Jan – 30 Jun 2026
export const MILEAGE_H2 = TAX_RULES_2026.mileage.h2 // 1 Jul – 31 Dec 2026

/** Дві періоди ставок: точний розрахунок. */
export function mileageDeduct(milesH1: number, milesH2: number): number {
  return (milesH1 || 0) * MILEAGE_H1 + (milesH2 || 0) * MILEAGE_H2
}

/** Для калькуляторів з ОДНИМ полем миль: припущення «милі порівну по півріччях».
 *  У UI обов'язково підписати: «assumes miles split evenly Jan–Jun / Jul–Dec». */
export function mileageDeductEvenSplit(miles: number): number {
  const m = miles || 0
  return mileageDeduct(m / 2, m / 2)
}

export const money = (n: number): string => '$' + Math.round(n).toLocaleString('en-US')

export interface ExampleInput {
  stateRate?: number
  filing?: ExFiling
  milesH1?: number
  milesH2?: number
  otherExpenses?: number
}

/** Приклад із рушія: повертає і числа, і готові рядки. */
export function example(gross: number, o: ExampleInput = {}) {
  const md = mileageDeduct(o.milesH1 ?? 0, o.milesH2 ?? 0)
  const r = estimateTaxRaw(gross, o.stateRate ?? 0, o.filing ?? 'single', md + (o.otherExpenses ?? 0))
  return {
    gross, mileageDeduction: md, ...r,
    text: {
      gross: money(gross), mileage: money(md), net: money(r.net), se: money(r.se),
      federal: money(r.federal), state: money(r.state), total: money(r.total), quarterly: money(r.quarterly),
    },
  }
}

/** Скорочення для title/meta: «$40K» */
export const kLabel = (n: number): string => '$' + Math.round(n / 1000) + 'K'

/** Готові фрагменти title/meta: єдина формула для всіх платформ. */
export function seTitleSnippet(netProfit: number): string {
  return `${kLabel(netProfit)} net = ${example(netProfit).text.se} SE tax`
}
export function totalTitleSnippet(netProfit: number): string {
  return `${kLabel(netProfit)} income = ${example(netProfit).text.total} tax owed`
}
