import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.gigwisetax.com';
const now = new Date();

const PLATFORMS = [
  'doordash','uber','etsy','onlyfans','instacart',
  'airbnb','amazon-flex','lyft','grubhub','walmart-spark','turo'
];

const STATES = [
  'alabama','alaska','arizona','arkansas','california','colorado',
  'connecticut','delaware','florida','georgia','hawaii','idaho',
  'illinois','indiana','iowa','kansas','kentucky','louisiana',
  'maine','maryland','massachusetts','michigan','minnesota',
  'mississippi','missouri','montana','nebraska','nevada',
  'new-hampshire','new-jersey','new-mexico','new-york',
  'north-carolina','north-dakota','ohio','oklahoma','oregon',
  'pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington',
  'west-virginia','wisconsin','wyoming','washington-dc'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    { url: BASE_URL,                                      lastModified: now, changeFrequency: 'weekly'  as const, priority: 1.0 },
    { url: `${BASE_URL}/calculators`,                    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/deadlines`,                      lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/deductions`,                     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`,                           lastModified: now, changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE_URL}/tax-penalty-finder`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/s-corp-calculator`,              lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/quarterly-reminder`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/gig-worker-taxes-2026`,          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/1099-tax-calculator-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/multi-app-gig-taxes-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/safe-harbor-quarterly-taxes`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/how-we-calculate-gig-taxes`,     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                        lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`,                          lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.3 },
  ];

  const platforms = PLATFORMS.map(p => ({
    url: `${BASE_URL}/${p}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const platformStates = PLATFORMS.flatMap(p =>
    STATES.map(s => ({
      url: `${BASE_URL}/${p}/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  );

  return [...core, ...platforms, ...platformStates];
}
