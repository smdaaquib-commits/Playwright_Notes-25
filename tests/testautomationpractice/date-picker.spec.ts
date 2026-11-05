import { expect, test } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test.describe('Test Automation Practice date picker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('selects a date from the calendar widget', async ({ page }) => {
    const dateInput = page.locator('#txtDate');

    await dateInput.click();

    const datePicker = page.locator('.ui-datepicker-calendar');
    await expect(datePicker).toBeVisible();

    await page.locator('.ui-datepicker-year').selectOption('2026');
    await page.locator('.ui-datepicker-month').selectOption({ label: 'Aug' });
    await datePicker.getByRole('link', { name: '13', exact: true }).click();

    await expect(dateInput).not.toHaveValue('');
    await expect(dateInput).toHaveValue(/2026/);
  });
});