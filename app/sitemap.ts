import { PLATFORMS, STATES } from '../lib/data';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.gigwisetax.com';
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.7 },
  ];

  for (const p of PLATFORMS) {
    routes.push({ url: `${base}/${p.slug}`, lastModified: new Date(), priority: 0.9 });
    for (const s of Object.keys(STATES)) {
      routes.push({ url: `${base}/${p.slug}/${s}`, lastModified: new Date(), priority: 0.8 });
    }
  }

  return routes;
}
