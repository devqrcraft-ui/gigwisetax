const fs = require('fs');
const platforms = {
  'doordash':    { driver: true,  rental: false, creator: false },
  'uber':        { driver: true,  rental: false, creator: false },
  'lyft':        { driver: true,  rental: false, creator: false },
  'instacart':   { driver: true,  rental: false, creator: false },
  'amazon-flex': { driver: true,  rental: false, creator: false },
  'airbnb':      { driver: false, rental: true,  creator: false },
  'etsy':        { driver: false, rental: false, creator: true  },
  'onlyfans':    { driver: false, rental: false, creator: true  },
};
Object.entries(platforms).forEach(([slug, flags]) => {
  const f = `app/${slug}/page.tsx`;
  try {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/const isPlatformDriver = .+/g, `const isPlatformDriver = ${flags.driver}`);
    c = c.replace(/const isRental = .+/g, `const isRental = ${flags.rental}`);
    c = c.replace(/const isCreator = .+/g, `const isCreator = ${flags.creator}`);
    fs.writeFileSync(f, c);
    console.log('fixed:', f);
  } catch(e) { console.log('skip:', f); }
});
