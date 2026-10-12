import { test, expect } from '../fixtures/sauce-demo.fixture.js';
import { products, users } from '../utils/testData.js';

async function loginAsStandard({ loginPage }) {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);
}

test('TC-03: user can log out from the hamburger menu', async ({ loginPage, page }) => {
  await loginAsStandard({ loginPage });

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(page).toHaveURL(/.*\/$/);
});

test('TC-04: products can be sorted by price from low to high', async ({ loginPage, inventoryPage }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.sortBy('lohi');

  const prices = await inventoryPage.getInventoryPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});

test('TC-05: user can open a product details page', async ({ loginPage, inventoryPage, page }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.openProduct(products.backpack);

  await expect(page).toHaveURL(/.*\/inventory-item\.html/);
  await expect(page.locator('.inventory_details_name')).toHaveText(products.backpack);
});
