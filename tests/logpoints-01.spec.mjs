import { test, expect } from '@playwright/test';

test('logpoints should generate messages that appear in the correct order (10% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.9;
  await expect(pass).toBe(true);
});
test('logpoints should allow time warping (20% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.8;
  await expect(pass).toBe(true);
});
test('logpoints should work with conditions (30% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.7;
  await expect(pass).toBe(true);
});
test('logpoints should work while replaying (40% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.6;
  await expect(pass).toBe(true);
});
test('logpoints should work on exceptions (0% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(false).toBe(true);
});
test('logpoints should have basic functionality (90% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const pass = Math.random() > 0.1;
  await expect(pass).toBe(true);
});
