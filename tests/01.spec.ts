import { test, expect } from '@playwright/test';
 
test('React app renders successfully', async ({ page }) => {
  await page.goto('http://localhost:5173');  // ローカルサーバーURL
  await expect(page.locator('h1')).toHaveText('Vite + React');
});