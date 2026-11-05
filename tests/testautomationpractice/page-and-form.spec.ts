import { expect, test } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test.describe('Test Automation Practice page and form basics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('loads the page and shows the primary form controls', async ({ page }) => {
    await expect(page).toHaveURL(/testautomationpractice\.blogspot\.com/);
    await expect(page).toHaveTitle(/automation testing practice|sdet-qa blog/i);
    await expect(page.getByRole('heading', { name: /automation testing practice/i })).toBeVisible();
    await expect(page.getByPlaceholder('Enter Name')).toBeVisible();
    await expect(page.locator('#country')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Simple Alert' })).toBeVisible();
  });

  test('accepts text input in the name field', async ({ page }) => {
    const nameInput = page.getByPlaceholder('Enter Name');

    await nameInput.fill('Playwright User');

    await expect(nameInput).toHaveValue('Playwright User');
  });
});