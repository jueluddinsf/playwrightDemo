import { test, expect } from '@playwright/test';
import { runAxeScan } from '../utils/axeHelper';

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://www.troweprice.com/');

    const { violations, failureMessage } = await runAxeScan(page, testInfo);

    // Fail the test if there are any violations and provide the detailed failure message
    expect(violations.length === 0, failureMessage).toBe(true);
  });
});
