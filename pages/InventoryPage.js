import { BasePage } from './BasePage.js';

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageTitle = page.locator('.title');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartButton = page.locator('.shopping_cart_link');
    this.productNames = page.locator('.inventory_item_name');
    this.priceLabels = page.locator('.inventory_item_price');
  }

  productCard(productName) {
    return this.page
      .locator('.inventory_item')
      .filter({ has: this.page.locator('.inventory_item_name', { hasText: productName }) });
  }

  async open() {
    await super.open('/inventory.html');
  }

  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async addToCart(productName) {
    await this.productCard(productName).getByRole('button', { name: /add to cart/i }).click();
  }

  async removeFromCart(productName) {
    await this.productCard(productName).getByRole('button', { name: /remove/i }).click();
  }

  async getProductNames() {
    return await this.productNames.allTextContents();
  }

  async getInventoryPrices() {
    const prices = await this.priceLabels.allTextContents();
    return prices.map((priceText) => Number(priceText.replace('$', '')));
  }

  async openProduct(productName) {
    await this.productCard(productName).locator('.inventory_item_name').click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  async getCartBadgeCount() {
    const badge = this.page.locator('.shopping_cart_badge');
    if ((await badge.count()) === 0) {
      return 0;
    }

    return Number((await badge.textContent()).trim());
  }

  async logout() {
    await this.page.locator('#react-burger-menu-btn').click();
    await this.page.locator('#logout_sidebar_link').click();
  }
}
