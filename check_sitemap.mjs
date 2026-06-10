import { readFileSync, readdirSync } from 'fs';
const content = readFileSync('app/sitemap.ts','utf8');
const match = content.match(/const blogPosts = \[([\s\S]*?)\]/);
const inSitemap = new Set([...match[1].matchAll(/'([^']+)'/g)].map(m=>m[1]));
const inFs = readdirSync('app/blog').filter(f => f !== 'page.tsx');
const missing = inFs.filter(f => inSitemap.has(f) === false);
console.log('MISSING from sitemap:', missing);
console.log('Total in FS:', inFs.length, '| In sitemap:', inSitemap.size);
