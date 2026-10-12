import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    await super.open('/checkout-step-one.html');
  }

  async fillCustomerInfo({ firstName = '', lastName = '', zipCode = '' }) {
    if (firstName) {
      await this.firstNameInput.fill(firstName);
    }

    if (lastName) {
      await this.lastNameInput.fill(lastName);
    }

    if (zipCode) {
      await this.postalCodeInput.fill(zipCode);
    }
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
