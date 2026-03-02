const fs = require('fs');
const platforms = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft'];
platforms.forEach(slug => {
  const f = `app/${slug}/[state]/page.tsx`;
  try {
    let c = fs.readFileSync(f, 'utf8');
    // Replace generateStaticParams that loops all platforms
    c = c.replace(
      /export async function generateStaticParams\(\)[^}]*\{[\s\S]*?return params\s*\}/,
      `export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}`
    );
    fs.writeFileSync(f, c);
    console.log('fixed:', f);
  } catch(e) { console.log('skip:', f, e.message); }
});
