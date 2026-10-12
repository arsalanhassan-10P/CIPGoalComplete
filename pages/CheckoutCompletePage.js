import { BasePage } from './BasePage.js';

export class CheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page);
    this.confirmationHeader = page.locator('.complete-header');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async waitForConfirmation() {
    await this.confirmationHeader.waitFor({ state: 'visible' });
  }
}
