// spec: specs/orangehrm-dashboard-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('Successful login with valid credentials reaches Dashboard', async ({ page }) => {
    // 1. Assume fresh/blank state: navigate to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login with no existing session/cookies.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByText('Username : Admin')).toBeVisible();
    await expect(page.getByText('Password : admin123')).toBeVisible();

    // 2. Enter 'Admin' into the Username field.
    const usernameField = page.getByRole('textbox', { name: 'Username' });
    await usernameField.fill('Admin');
    await expect(usernameField).toHaveValue('Admin');

    // 3. Enter 'admin123' into the Password field.
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await passwordField.fill('admin123');
    await expect(passwordField).toHaveAttribute('type', 'password');

    // 4. Click the 'Login' button.
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index$/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Sidepanel' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upgrade' })).toBeVisible();
    await expect(page.getByText('Time at Work')).toBeVisible();
  });
});
