import { test, expect } from '../fixtures/sauce-demo.fixture.js';
import { customer, products, users } from '../utils/testData.js';

async function loginAsStandard({ loginPage }) {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);
}

test('TC-09: user can complete a purchase with valid information', async ({ loginPage, inventoryPage, cartPage, checkoutPage, completePage }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.addToCart(products.backpack);
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCustomerInfo({
    firstName: customer.firstName,
    lastName: customer.lastName,
    zipCode: customer.zipCode,
  });
  await checkoutPage.continue();
  await checkoutPage.finish();

  await completePage.waitForConfirmation();
  await expect(completePage.confirmationHeader).toHaveText(/thank you for your order/i);
});

test('TC-10: user cannot continue checkout without a first name', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
  await loginAsStandard({ loginPage });

  await inventoryPage.addToCart(products.bikeLight);
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCustomerInfo({
    lastName: customer.lastName,
    zipCode: customer.zipCode,
  });
  await checkoutPage.continue();

  await expect(checkoutPage.errorMessage).toContainText(/first name is required/i);
});
