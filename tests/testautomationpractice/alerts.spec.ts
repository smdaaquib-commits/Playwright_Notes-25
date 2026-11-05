import { expect, test } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test.describe('Test Automation Practice alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('handles the simple alert', async ({ page }) => {
    const dialogPromise = page.waitForEvent('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toContain('I am an alert box');
      await dialog.accept();
      return true;
    });

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await dialogPromise;

    await expect(page.getByRole('button', { name: 'Simple Alert' })).toBeVisible();
  });

  test('handles the prompt alert and submits a custom value', async ({ page }) => {
    const promptValue = 'Playwright User';
    const promptResult = page.locator('#demo');
    const dialogPromise = page.waitForEvent('dialog', async (dialog) => {
      expect(dialog.type()).toBe('prompt');
      expect(dialog.message()).toContain('Please enter your name');
      expect(dialog.defaultValue()).toBe('Harry Potter');
      await dialog.accept(promptValue);
      return true;
    });

    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    await dialogPromise;

    await expect(promptResult).toHaveText(`Hello ${promptValue}! How are you today?`);
  });
});