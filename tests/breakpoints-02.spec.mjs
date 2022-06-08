import { test, expect } from '@playwright/test';

test('breakpoints should create a script (40% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.6;
  await expect(pass).toBe(true);
});
test('breakpoints should interact properly with debugger statements (50% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.5;
  await expect(pass).toBe(true);
});
test('breakpoints should work well with sourcemaps (60% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.4;
  await expect(pass).toBe(true);
});
