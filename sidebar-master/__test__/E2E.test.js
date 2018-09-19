import puppeteer from 'puppeteer';

const pageUrl = 'http://127.0.0.1:7878/1';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`, '--no-sanbox', '–disable-setuid-sandbox'],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('End to end tests', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });
  test('should have correct reservation header', async () => {
    const title = await page.$eval('#header-title', e => e.innerHTML);
    expect(title).toBe('Make a Reservation');
  });
  // test('Check for reservation header', async () => {
  //   const date = '#date-container';
  //   await page.click(date);
  //   const title = await page.$eval('#calendar-header-title', e => e.textContent);
  //   expect(title).toBe('September 2018');
  //   await page.click('body');
  //   await page.$eval('#calendar-header-title');
  // });
  // test('can search', async () => {
  //   const selector = 'input.form-control[type=text]';
  //   await page.click(selector);
  //   await page.type(selector, 'cats');
  // });
});
