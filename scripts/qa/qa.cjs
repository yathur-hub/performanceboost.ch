// Browser-QA gegen einen lokalen Preview-Server (npm run build && npx vite preview --port 4173).
// Nutzung: node scripts/qa/qa.cjs http://localhost:4173 <outDir>
// Erwartet <outDir>/routes.json (Liste der Pfade). Benötigt playwright + System-Chrome (PW_PATH optional).
const { chromium } = require(process.env.PW_PATH || 'playwright');
const fs = require('fs');
const [, , base = 'http://localhost:4173', out = './qa-out'] = process.argv;
fs.mkdirSync(out, { recursive: true });

const VIEWPORTS = [
  { n: 'm375', w: 375, h: 812 }, { n: 'm390', w: 390, h: 844 }, { n: 't768', w: 768, h: 1024 },
  { n: 'l1024', w: 1024, h: 768 }, { n: 'd1440', w: 1440, h: 900 },
];

(async () => {
  const routes = JSON.parse(fs.readFileSync(`${out}/routes.json`, 'utf8'));
  const browser = await chromium.launch({ channel: 'chrome' });
  const report = { pages: [], form: [] };

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();
    // Keine echten Requests an GTM/n8n während des Crawls
    await page.route(/googletagmanager|n8n\.performanceboost/, (r) => r.abort());
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error' && !/ERR_FAILED|net::/.test(m.text())) errors.push(m.text()); });
    for (const route of routes) {
      errors.length = 0;
      await page.goto(base + route, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const d = await page.evaluate(() => {
        const cta = document.getElementById('nav-toggle-button');
        const r = cta?.getBoundingClientRect();
        const main = document.querySelector('main')?.innerText || '';
        return {
          title: document.title,
          robots: document.querySelector('meta[name=robots]')?.getAttribute('content'),
          canonical: document.querySelector('link[rel=canonical]')?.getAttribute('href') || null,
          h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim().replace(/\s+/g, ' ')),
          overflowX: document.documentElement.scrollWidth - window.innerWidth,
          menuButtonVisible: !!r && r.width > 0 && r.top >= 0 && r.bottom <= window.innerHeight,
          internalLinks: document.querySelectorAll('a[href^="/"]').length,
          duForms: (main.match(/\b(du|dein|deine|deinen|deinem|dich|dir)\b/gi) || []).slice(0, 5),
          eszett: (main.match(/\S*ß\S*/g) || []).slice(0, 5),
        };
      });
      report.pages.push({ vp: vp.n, route, errors: [...errors], ...d });
      if (['m390', 'd1440', 't768'].includes(vp.n)) {
        await page.screenshot({ path: `${out}/${vp.n}${route.replace(/\//g, '_') || '_home'}.png` });
      }
    }
    await ctx.close();
  }

  // Formular-Tests (Modal über Header-CTA) mit simulierten n8n-Antworten
  const scenarios = [
    { name: 'success', status: 200, body: { success: true, leadId: 'qa-1' }, expectLead: true },
    { name: 'http500', status: 500, body: { success: false, error: 'storage' }, expectLead: false },
    { name: '200-ohne-success', status: 200, body: { ok: true }, expectLead: false },
  ];
  for (const sc of scenarios) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.route(/googletagmanager/, (r) => r.abort());
    let captured = null;
    await page.route(/n8n\.performanceboost\.ch/, async (r) => {
      captured = JSON.parse(r.request().postData());
      await r.fulfill({ status: sc.status, contentType: 'application/json', body: JSON.stringify(sc.body), headers: { 'access-control-allow-origin': '*' } });
    });
    await page.goto(`${base}/leistungen?utm_source=google&utm_medium=cpc&utm_campaign=qa&gclid=TESTGCLID`, { waitUntil: 'networkidle' });
    // Interne Navigation: Attribution muss erhalten bleiben
    await page.evaluate(() => window.dispatchEvent(new CustomEvent('navigation-change', { detail: '/ueber-uns' })));
    await page.waitForTimeout(300);
    await page.evaluate(() => window.dispatchEvent(new Event('open-contact-modal')));
    await page.waitForSelector('#form-firstName');
    // Leeres Absenden: Validierung, kein Request
    await page.click('form button[type=submit]');
    const validationErrors = await page.locator('[id$="-error"]').count();
    const requestAfterEmptySubmit = captured !== null;
    await page.fill('#form-firstName', 'Test');
    await page.fill('#form-lastName', 'Claude-QA');
    await page.fill('#form-company', 'TEST QA GmbH');
    await page.selectOption('#form-annualRevenue', '1m_5m');
    await page.fill('#form-email', 'testlead+qa@example.com');
    await page.fill('#form-message', 'Synthetischer QA-Test, bitte ignorieren.');
    await page.click('form button[type=submit]');
    await page.waitForTimeout(800);
    const dl = await page.evaluate(() => (window.dataLayer || []).filter((e) => e.event && !String(e.event).startsWith('gtm.')));
    const events = dl.map((e) => e.event);
    const leadEvent = dl.find((e) => e.event === 'generate_lead');
    const piiInDataLayer = JSON.stringify(dl).match(/example\.com|Claude-QA|TEST QA/g);
    const success = await page.locator('#form-feedback-success').count();
    const error = await page.locator('#form-feedback-error').count();
    report.form.push({
      scenario: sc.name, validationErrors, requestAfterEmptySubmit, events, leadFired: !!leadEvent, expectLead: sc.expectLead,
      pass: !!leadEvent === sc.expectLead && (sc.expectLead ? success === 1 : error === 1) && !piiInDataLayer && !requestAfterEmptySubmit,
      successShown: success, errorShown: error, piiInDataLayer,
      payloadKeys: captured && Object.keys(captured).sort(),
      payloadAttribution: captured && {
        utm_source: captured.utm_source, utm_campaign: captured.utm_campaign, gclid: captured.gclid,
        formLocation: captured.formLocation, pageType: captured.pageType, conversionPath: captured.conversionPath,
        firstTouchLanding: captured.attribution?.firstTouch?.landingPage,
      },
    });
    if (sc.name === 'success') await page.screenshot({ path: `${out}/form_success_m390.png` });
    if (sc.name === 'http500') await page.screenshot({ path: `${out}/form_error_m390.png` });
    await ctx.close();
  }
  fs.writeFileSync(`${out}/qa-report.json`, JSON.stringify(report, null, 1));
  await browser.close();
  console.log('QA fertig:', report.pages.length, 'Seitenprüfungen,', report.form.length, 'Formular-Szenarien');
})();
