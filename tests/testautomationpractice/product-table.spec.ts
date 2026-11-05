import { expect, test } from '@playwright/test';

const url = 'https://testautomationpractice.blogspot.com/';

test.describe('Test Automation Practice product table', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('verifies the paginated product table', async ({ page }) => {
    const productTable = page.locator('#productTable');
    const pageOneRows = productTable.locator('tbody tr');

    await expect(productTable).toBeVisible();
    await expect(productTable.locator('thead th')).toHaveText(['ID', 'Name', 'Price', 'Select']);
    await expect(pageOneRows).toHaveCount(5);

    const firstPageFirstProduct = (await pageOneRows.first().locator('td').nth(1).textContent())?.trim();
    expect(firstPageFirstProduct).toBeTruthy();

    await page.locator('.pagination').getByRole('link', { name: '2', exact: true }).click();

    const pageTwoRows = productTable.locator('tbody tr');
    await expect(pageTwoRows).toHaveCount(5);

    const secondPageFirstProduct = (await pageTwoRows.first().locator('td').nth(1).textContent())?.trim();
    expect(secondPageFirstProduct).toBeTruthy();
    expect(secondPageFirstProduct).not.toBe(firstPageFirstProduct);
  });
});