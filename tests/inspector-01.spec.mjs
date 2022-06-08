import { test, expect } from '@playwright/test';

test('inspector should should contents when paused (10% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.9;
  await expect(pass).toBe(true);
});
test('inspector should work with the element picker (20% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.8;
  await expect(pass).toBe(true);
});
test('inspector styles should be viewable (30% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.7;
  await expect(pass).toBe(true);
});
test('inspector rule view should not bomb (40% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const pass = Math.random() > 0.6;
  await expect(pass).toBe(true);
});
test('inspector rule view should work with source mapped style sheets (0% pass)', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(false).toBe(true);
});
