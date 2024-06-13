import { test } from '@playwright/test';
import { openEyes, checkWindow, closeEyes, abortEyes } from '../utils/applitoolsHelper';

test.describe('T. Rowe Price homepage visual tests', () => {
  test('visual comparison test for T. Rowe Price homepage', async ({ page }) => {
    const url = 'https://www.troweprice.com/';
    
    await openEyes(page, 'Homepage Visual Test', { width: 1920, height: 1080 });

    await page.goto(url);
    await checkWindow('T. Rowe Price Homepage');
    await closeEyes();
  });

  test.afterEach(async () => {
    await abortEyes();
  });
});
