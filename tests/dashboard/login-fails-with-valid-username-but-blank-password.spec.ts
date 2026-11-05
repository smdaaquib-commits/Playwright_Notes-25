// spec: specs/orangehrm-dashboard-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('Login fails with valid username but blank password (negative test)', async ({ page }) => {
    // 1. Assume fresh/blank state: navigate to the Login page with no existing session/cookies.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    // 2. Enter 'Admin' into the Username field and leave the Password field empty.
    const usernameField = page.getByRole('textbox', { name: 'Username' });
    await usernameField.fill('Admin');
    await expect(usernameField).toHaveValue('Admin');
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();

    // 3. Click the 'Login' button.
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Required')).toBeVisible();
    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  });
});
