export const PLATFORMS = [
  { slug: 'doordash', name: 'DoorDash', emoji: '🍕', searches: '400k/mo', color: '#FF3008', description: 'DoorDash delivery driver' },
  { slug: 'uber', name: 'Uber', emoji: '🚗', searches: '300k/mo', color: '#000000', description: 'Uber & Uber Eats driver' },
  { slug: 'etsy', name: 'Etsy', emoji: '🛍️', searches: '200k/mo', color: '#F56400', description: 'Etsy seller' },
  { slug: 'onlyfans', name: 'OnlyFans', emoji: '💰', searches: '150k/mo', color: '#00AFF0', description: 'OnlyFans creator' },
  { slug: 'instacart', name: 'Instacart', emoji: '🛒', searches: '150k/mo', color: '#43B02A', description: 'Instacart shopper' },
  { slug: 'amazon-flex', name: 'Amazon Flex', emoji: '📦', searches: '80k/mo', color: '#FF9900', description: 'Amazon Flex driver' },
  { slug: 'airbnb', name: 'Airbnb', emoji: '🏠', searches: '120k/mo', color: '#FF5A5F', description: 'Airbnb host' },
  { slug: 'lyft', name: 'Lyft', emoji: '🩷', searches: '90k/mo', color: '#FF00BF', description: 'Lyft driver' },
];

export const STATES: Record<string, { name: string; rate: number; noTax?: boolean }> = {
  'alabama': { name: 'Alabama', rate: 0.05 },
  'alaska': { name: 'Alaska', rate: 0, noTax: true },
  'arizona': { name: 'Arizona', rate: 0.025 },
  'arkansas': { name: 'Arkansas', rate: 0.044 },
  'california': { name: 'California', rate: 0.093 },
  'colorado': { name: 'Colorado', rate: 0.044 },
  'connecticut': { name: 'Connecticut', rate: 0.0699 },
  'delaware': { name: 'Delaware', rate: 0.066 },
  'florida': { name: 'Florida', rate: 0, noTax: true },
  'georgia': { name: 'Georgia', rate: 0.055 },
  'hawaii': { name: 'Hawaii', rate: 0.11 },
  'idaho': { name: 'Idaho', rate: 0.058 },
  'illinois': { name: 'Illinois', rate: 0.0495 },
  'indiana': { name: 'Indiana', rate: 0.0305 },
  'iowa': { name: 'Iowa', rate: 0.057 },
  'kansas': { name: 'Kansas', rate: 0.057 },
  'kentucky': { name: 'Kentucky', rate: 0.045 },
  'louisiana': { name: 'Louisiana', rate: 0.0425 },
  'maine': { name: 'Maine', rate: 0.075 },
  'maryland': { name: 'Maryland', rate: 0.0575 },
  'massachusetts': { name: 'Massachusetts', rate: 0.05 },
  'michigan': { name: 'Michigan', rate: 0.0425 },
  'minnesota': { name: 'Minnesota', rate: 0.0985 },
  'mississippi': { name: 'Mississippi', rate: 0.05 },
  'missouri': { name: 'Missouri', rate: 0.047 },
  'montana': { name: 'Montana', rate: 0.069 },
  'nebraska': { name: 'Nebraska', rate: 0.0664 },
  'nevada': { name: 'Nevada', rate: 0, noTax: true },
  'new-hampshire': { name: 'New Hampshire', rate: 0, noTax: true },
  'new-jersey': { name: 'New Jersey', rate: 0.1075 },
  'new-mexico': { name: 'New Mexico', rate: 0.059 },
  'new-york': { name: 'New York', rate: 0.109 },
  'north-carolina': { name: 'North Carolina', rate: 0.045 },
  'north-dakota': { name: 'North Dakota', rate: 0.025 },
  'ohio': { name: 'Ohio', rate: 0.035 },
  'oklahoma': { name: 'Oklahoma', rate: 0.0475 },
  'oregon': { name: 'Oregon', rate: 0.099 },
  'pennsylvania': { name: 'Pennsylvania', rate: 0.0307 },
  'rhode-island': { name: 'Rhode Island', rate: 0.0599 },
  'south-carolina': { name: 'South Carolina', rate: 0.065 },
  'south-dakota': { name: 'South Dakota', rate: 0, noTax: true },
  'tennessee': { name: 'Tennessee', rate: 0, noTax: true },
  'texas': { name: 'Texas', rate: 0, noTax: true },
  'utah': { name: 'Utah', rate: 0.0485 },
  'vermont': { name: 'Vermont', rate: 0.0875 },
  'virginia': { name: 'Virginia', rate: 0.0575 },
  'washington': { name: 'Washington', rate: 0, noTax: true },
  'west-virginia': { name: 'West Virginia', rate: 0.065 },
  'wisconsin': { name: 'Wisconsin', rate: 0.0765 },
  'wyoming': { name: 'Wyoming', rate: 0, noTax: true },
  'dc': { name: 'Washington D.C.', rate: 0.1075 },
};

export const FEDERAL_BRACKETS_SINGLE = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11925, max: 48475, rate: 0.12 },
  { min: 48475, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250525, rate: 0.32 },
  { min: 250525, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 },
];

export const FEDERAL_BRACKETS_MARRIED = [
  { min: 0, max: 23850, rate: 0.10 },
  { min: 23850, max: 96950, rate: 0.12 },
  { min: 96950, max: 206700, rate: 0.22 },
  { min: 206700, max: 394600, rate: 0.24 },
  { min: 394600, max: 501050, rate: 0.32 },
  { min: 501050, max: 751600, rate: 0.35 },
  { min: 751600, max: Infinity, rate: 0.37 },
];

export const STD_DEDUCTION = { single: 14600, married: 29200 };

export function calcFederalTax(taxableIncome: number, status: 'single' | 'married'): number {
  const brackets = status === 'married' ? FEDERAL_BRACKETS_MARRIED : FEDERAL_BRACKETS_SINGLE;
  let tax = 0;
  for (const b of brackets) {
    if (taxableIncome <= b.min) break;
    tax += (Math.min(taxableIncome, b.max) - b.min) * b.rate;
  }
  return Math.max(0, tax);
}

export function calcSETax(netIncome: number) {
  const base = netIncome * 0.9235;
  const ssTax = Math.min(base, 176100) * 0.124;
  const medTax = base * 0.029;
  const addMed = base > 200000 ? (base - 200000) * 0.009 : 0;
  return { ssTax, medTax, addMed, total: ssTax + medTax + addMed, base };
}

export const QUARTERLY_DATES = [
  { period: 'Q1 2026', due: 'April 15, 2026', months: 'Jan–Mar' },
  { period: 'Q2 2026', due: 'June 16, 2026', months: 'Apr–May' },
  { period: 'Q3 2026', due: 'September 15, 2026', months: 'Jun–Aug' },
  { period: 'Q4 2026', due: 'January 15, 2027', months: 'Sep–Dec' },
];

export const MILEAGE_RATE = 0.70; // IRS 2025/2026 rate
