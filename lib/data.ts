export const PLATFORMS = [
  { slug: 'doordash',    name: 'DoorDash',    emoji: '🚗', searches: '400K/mo', naics: '492000', badge: null },
  { slug: 'uber',        name: 'Uber',        emoji: '🚕', searches: '300K/mo', naics: '485300', badge: null },
  { slug: 'etsy',        name: 'Etsy',        emoji: '🛍️', searches: '200K/mo', naics: '454110', badge: null },
  { slug: 'onlyfans',    name: 'OnlyFans',    emoji: '⭐', searches: '150K/mo', naics: '711510', badge: 'USA #1' },
  { slug: 'instacart',   name: 'Instacart',   emoji: '🛒', searches: '150K/mo', naics: '492000', badge: null },
  { slug: 'airbnb',      name: 'Airbnb',      emoji: '🏠', searches: '120K/mo', naics: '721199', badge: null },
  { slug: 'amazon-flex', name: 'Amazon Flex', emoji: '📦', searches: '80K/mo',  naics: '492000', badge: null },
  { slug: 'lyft',        name: 'Lyft',        emoji: '🚖', searches: '70K/mo',  naics: '485300', badge: null },
]

export const STATES = [
  { slug: 'alabama',        name: 'Alabama',        abbr: 'AL', rate: 0.05,   hasLocalTax: false },
  { slug: 'alaska',         name: 'Alaska',         abbr: 'AK', rate: 0,      hasLocalTax: false },
  { slug: 'arizona',        name: 'Arizona',        abbr: 'AZ', rate: 0.025,  hasLocalTax: false },
  { slug: 'arkansas',       name: 'Arkansas',       abbr: 'AR', rate: 0.047,  hasLocalTax: false },
  { slug: 'california',     name: 'California',     abbr: 'CA', rate: 0.093,  hasLocalTax: false },
  { slug: 'colorado',       name: 'Colorado',       abbr: 'CO', rate: 0.044,  hasLocalTax: false },
  { slug: 'connecticut',    name: 'Connecticut',    abbr: 'CT', rate: 0.065,  hasLocalTax: false },
  { slug: 'delaware',       name: 'Delaware',       abbr: 'DE', rate: 0.066,  hasLocalTax: false },
  { slug: 'florida',        name: 'Florida',        abbr: 'FL', rate: 0,      hasLocalTax: false },
  { slug: 'georgia',        name: 'Georgia',        abbr: 'GA', rate: 0.055,  hasLocalTax: false },
  { slug: 'hawaii',         name: 'Hawaii',         abbr: 'HI', rate: 0.11,   hasLocalTax: false },
  { slug: 'idaho',          name: 'Idaho',          abbr: 'ID', rate: 0.058,  hasLocalTax: false },
  { slug: 'illinois',       name: 'Illinois',       abbr: 'IL', rate: 0.0495, hasLocalTax: false },
  { slug: 'indiana',        name: 'Indiana',        abbr: 'IN', rate: 0.03,   hasLocalTax: false },
  { slug: 'iowa',           name: 'Iowa',           abbr: 'IA', rate: 0.057,  hasLocalTax: false },
  { slug: 'kansas',         name: 'Kansas',         abbr: 'KS', rate: 0.057,  hasLocalTax: false },
  { slug: 'kentucky',       name: 'Kentucky',       abbr: 'KY', rate: 0.045,  hasLocalTax: false },
  { slug: 'louisiana',      name: 'Louisiana',      abbr: 'LA', rate: 0.03,   hasLocalTax: false },
  { slug: 'maine',          name: 'Maine',          abbr: 'ME', rate: 0.075,  hasLocalTax: false },
  { slug: 'maryland',       name: 'Maryland',       abbr: 'MD', rate: 0.0575, hasLocalTax: true  },
  { slug: 'massachusetts',  name: 'Massachusetts',  abbr: 'MA', rate: 0.05,   hasLocalTax: false },
  { slug: 'michigan',       name: 'Michigan',       abbr: 'MI', rate: 0.0425, hasLocalTax: false },
  { slug: 'minnesota',      name: 'Minnesota',      abbr: 'MN', rate: 0.0985, hasLocalTax: false },
  { slug: 'mississippi',    name: 'Mississippi',    abbr: 'MS', rate: 0.047,  hasLocalTax: false },
  { slug: 'missouri',       name: 'Missouri',       abbr: 'MO', rate: 0.048,  hasLocalTax: false },
  { slug: 'montana',        name: 'Montana',        abbr: 'MT', rate: 0.059,  hasLocalTax: false },
  { slug: 'nebraska',       name: 'Nebraska',       abbr: 'NE', rate: 0.0664, hasLocalTax: false },
  { slug: 'nevada',         name: 'Nevada',         abbr: 'NV', rate: 0,      hasLocalTax: false },
  { slug: 'new-hampshire',  name: 'New Hampshire',  abbr: 'NH', rate: 0,      hasLocalTax: false },
  { slug: 'new-jersey',     name: 'New Jersey',     abbr: 'NJ', rate: 0.1075, hasLocalTax: false },
  { slug: 'new-mexico',     name: 'New Mexico',     abbr: 'NM', rate: 0.059,  hasLocalTax: false },
  { slug: 'new-york',       name: 'New York',       abbr: 'NY', rate: 0.0685, hasLocalTax: true  },
  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', rate: 0.0525, hasLocalTax: false },
  { slug: 'north-dakota',   name: 'North Dakota',   abbr: 'ND', rate: 0.029,  hasLocalTax: false },
  { slug: 'ohio',           name: 'Ohio',           abbr: 'OH', rate: 0.04,   hasLocalTax: true  },
  { slug: 'oklahoma',       name: 'Oklahoma',       abbr: 'OK', rate: 0.0475, hasLocalTax: false },
  { slug: 'oregon',         name: 'Oregon',         abbr: 'OR', rate: 0.099,  hasLocalTax: false },
  { slug: 'pennsylvania',   name: 'Pennsylvania',   abbr: 'PA', rate: 0.0307, hasLocalTax: true  },
  { slug: 'rhode-island',   name: 'Rhode Island',   abbr: 'RI', rate: 0.0599, hasLocalTax: false },
  { slug: 'south-carolina', name: 'South Carolina', abbr: 'SC', rate: 0.064,  hasLocalTax: false },
  { slug: 'south-dakota',   name: 'South Dakota',   abbr: 'SD', rate: 0,      hasLocalTax: false },
  { slug: 'tennessee',      name: 'Tennessee',      abbr: 'TN', rate: 0,      hasLocalTax: false },
  { slug: 'texas',          name: 'Texas',          abbr: 'TX', rate: 0,      hasLocalTax: false },
  { slug: 'utah',           name: 'Utah',           abbr: 'UT', rate: 0.0465, hasLocalTax: false },
  { slug: 'vermont',        name: 'Vermont',        abbr: 'VT', rate: 0.0875, hasLocalTax: false },
  { slug: 'virginia',       name: 'Virginia',       abbr: 'VA', rate: 0.0575, hasLocalTax: false },
  { slug: 'washington',     name: 'Washington',     abbr: 'WA', rate: 0,      hasLocalTax: false },
  { slug: 'west-virginia',  name: 'West Virginia',  abbr: 'WV', rate: 0.065,  hasLocalTax: false },
  { slug: 'wisconsin',      name: 'Wisconsin',      abbr: 'WI', rate: 0.0765, hasLocalTax: false },
  { slug: 'wyoming',        name: 'Wyoming',        abbr: 'WY', rate: 0,      hasLocalTax: false },
  { slug: 'washington-dc',  name: 'Washington D.C.', abbr: 'DC', rate: 0.0895, hasLocalTax: false },
]

export const DEADLINES_2026 = [
  { q: 'Q1',  period: 'January 1 – March 31',    due: 'April 15, 2026',   form: '1040-ES', days: 45  },
  { q: 'Q2',  period: 'April 1 – May 31',        due: 'June 16, 2026',    form: '1040-ES', days: 107 },
  { q: 'Q3',  period: 'June 1 – August 31',      due: 'September 15, 2026', form: '1040-ES', days: 198 },
  { q: 'Q4',  period: 'September 1 – December 31', due: 'January 15, 2027', form: '1040-ES', days: 320 },
]

export const MILEAGE_RATE_2026 = 0.725 // $0.725 per mile

export const DEDUCTIONS = {
  doordash:    ['🚗 Mileage ($0.725/mile)', '📱 Phone bill (business %)', '🛡️ Insurance (business %)', '🧊 Insulated bags & equipment', '🅿️ Parking & tolls', '💼 Accounting software'],
  uber:        ['🚗 Mileage ($0.725/mile)', '📱 Phone bill (business %)', '🛡️ Insurance (business %)', '🚘 Car washes', '🅿️ Parking & tolls', '💺 Car accessories'],
  etsy:        ['📦 Shipping & packaging', '🖥️ Home office', '📸 Photography equipment', '🎨 Art/craft supplies', '💻 Listing fees paid to Etsy', '📦 Inventory costs'],
  onlyfans:    ['💻 Camera & equipment', '🖥️ Home office', '💄 Costumes & props', '📱 Phone & internet', '✂️ Hair, makeup (business use)', '🎬 Editing software'],
  instacart:   ['🚗 Mileage ($0.725/mile)', '📱 Phone bill (business %)', '🛡️ Insurance (business %)', '🧺 Insulated bags', '🅿️ Parking & tolls', '💼 Accounting software'],
  airbnb:      ['🏠 Mortgage interest (% of rental)', '🧹 Cleaning services', '🛋️ Furniture & supplies', '🔧 Repairs & maintenance', '📡 Internet & utilities (% of rental)', '💼 Management software'],
  'amazon-flex': ['🚗 Mileage ($0.725/mile)', '📱 Phone bill (business %)', '🛡️ Insurance (business %)', '🅿️ Parking & tolls', '📦 Equipment', '💼 Accounting software'],
  lyft:        ['🚗 Mileage ($0.725/mile)', '📱 Phone bill (business %)', '🛡️ Insurance (business %)', '🚘 Car washes', '🅿️ Parking & tolls', '💺 Car accessories'],
}

export function calcTax(net: number, stateRate: number, filing: 'single'|'married') {
  const seBase   = net * 0.9235
  const seTax    = seBase * 0.153
  const taxable  = net - seTax * 0.5
  const fedRate  = filing === 'single' ? 0.22 : 0.12
  const federal  = taxable * fedRate
  const stateTax = taxable * stateRate
  const total    = federal + seTax + stateTax
  return {
    seTax, federal, stateTax, total,
    quarterly: total / 4,
    rate: ((total / net) * 100).toFixed(1),
    saveRate: Math.min(Math.ceil((total / net) * 100) + 5, 35),
  }
}

export function fmt(n: number) {
  return '$' + Math.round(n || 0).toLocaleString('en-US')
}
