// spec: specs/orangehrm-dashboard-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('Login fails with invalid username and password (negative test)', async ({ page }) => {
    // The demo environment can perform slow full-page reloads, so allow extra time overall.
    test.setTimeout(60000);

    // 1. Assume fresh/blank state: navigate to the Login page with no existing session/cookies.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // The demo environment can be slow to render the initial login form, so allow extra time here.
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 20000 });

    // 2. Enter 'InvalidUser' into the Username field.
    const usernameField = page.getByRole('textbox', { name: 'Username' });
    await usernameField.fill('InvalidUser');
    await expect(usernameField).toHaveValue('InvalidUser');

    // 3. Enter 'wrongpass' into the Password field.
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await passwordField.fill('wrongpass');
    await expect(passwordField).toHaveAttribute('type', 'password');

    // 4. Click the 'Login' button.
    await page.getByRole('button', { name: 'Login' }).click();
    // Submitting invalid credentials triggers a full page reload on this demo site, which can be
    // slow, and the "Invalid credentials" message is rendered inside a toast (role="alert") that
    // auto-dismisses after a few seconds, so assert on it first with a generous timeout.
    await expect(page.getByRole('alert')).toContainText('Invalid credentials', { timeout: 30000 });
    await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login$/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).not.toBeVisible();
  });
});
