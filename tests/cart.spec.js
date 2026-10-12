import { test, expect } from '../fixtures/sauce-demo.fixture.js';
import { products, users } from '../utils/testData.js';

async function loginAsStandard({ loginPage }) {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);
}

test('TC-06: user can add a single item to cart', async ({ loginPage, inventoryPage, cartPage }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.addToCart(products.backpack);

  await expect(inventoryPage.cartButton).toContainText('1');
  await inventoryPage.openCart();
  await expect(cartPage.itemInCart(products.backpack)).toBeVisible();
});

test('TC-07: user can add multiple items to cart', async ({ loginPage, inventoryPage }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.addToCart(products.backpack);
  await inventoryPage.addToCart(products.bikeLight);

  expect(await inventoryPage.getCartBadgeCount()).toBe(2);
});

test('TC-08: user can remove an item from the cart', async ({ loginPage, inventoryPage, cartPage, page }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.addToCart(products.backpack);
  await inventoryPage.openCart();
  await cartPage.removeItem(products.backpack);

  await expect(cartPage.itemInCart(products.backpack)).toHaveCount(0);
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});
