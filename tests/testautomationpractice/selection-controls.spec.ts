import { expect, test } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test.describe('Test Automation Practice selection controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('selection controls are available before interaction', async ({ page }) => {
    await expect(page.locator('#male')).toBeVisible();
    await expect(page.locator('#female')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Sunday' })).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeVisible();
    await expect(page.locator('#country')).toBeVisible();
    await expect(page.locator('#country')).toBeEnabled();
  });

  test('selects a radio button', async ({ page }) => {
    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');

    await maleRadio.check();

    await expect(maleRadio).toBeChecked();
    await expect(femaleRadio).not.toBeChecked();
  });

  test('selects weekday checkboxes', async ({ page }) => {
    const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
    const mondayCheckbox = page.getByRole('checkbox', { name: 'Monday' });

    await sundayCheckbox.check();
    await mondayCheckbox.check();

    await expect(sundayCheckbox).toBeChecked();
    await expect(mondayCheckbox).toBeChecked();
  });

  test('selects a country from the dropdown', async ({ page }) => {
    const countrySelect = page.locator('#country');

    await countrySelect.selectOption({ label: 'Canada' });

    await expect(countrySelect.locator('option:checked')).toHaveText('Canada');
  });
});