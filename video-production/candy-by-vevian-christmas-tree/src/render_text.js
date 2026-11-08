const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const W = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await p.goto('file://' + path.join(W, 'src/text.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  const ids = await p.$$eval('.layer', els => els.map(e => e.id));
  for (const id of ids) {
    const el = await p.$('#' + id);
    await el.screenshot({ path: path.join(W, 'text', id + '.png'), omitBackground: true });
  }
  const fams = await p.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight));
  console.log('rendered', ids.length, 'layers; loaded fonts:', [...new Set(fams)].join(', '));
  await b.close();
})();
