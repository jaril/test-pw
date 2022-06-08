import { test, expect } from '@playwright/test';

test('stepping should work as expected (90% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.1;
  await expect(pass).toBe(true);
});
test('stepping should work for simple stepping bugs (80% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.2;
  await expect(pass).toBe(true);
});
test('stepping past the beginning/end of a frame should act like a step out (50% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.5;
  await expect(pass).toBe(true);
});
test('stepping should work in blackboxed sources (20% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.8;
  await expect(pass).toBe(true);
});
test('stepping should work with pretty printed code (100% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(true).toBe(true);
});