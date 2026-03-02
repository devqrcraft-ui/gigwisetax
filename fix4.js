const fs = require('fs');
const platforms = ['doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft'];
platforms.forEach(slug => {
  const f = `app/${slug}/page.tsx`;
  try {
    let c = fs.readFileSync(f, 'utf8');
    // Fix the broken generateStaticParams with extra ))
    c = c.replace(
      /export async function generateStaticParams\(\) \{ return \[\{ platform: '[^']+' \}\] \}\)\)/g,
      `export async function generateStaticParams() { return [{ platform: '${slug}' }] }`
    );
    fs.writeFileSync(f, c);
    console.log('fixed:', f);
  } catch(e) { console.log('skip:', f); }
});
