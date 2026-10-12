import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  itemInCart(productName) {
    return this.page
      .locator('.cart_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });
  }

  async open() {
    await super.open('/cart.html');
  }

  async removeItem(productName) {
    await this.itemInCart(productName).getByRole('button', { name: /remove/i }).click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
