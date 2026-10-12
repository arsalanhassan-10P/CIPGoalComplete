import { test, expect } from '../fixtures/sauce-demo.fixture.js';
import { users } from '../utils/testData.js';

async function loginAsStandard({ loginPage }) {
  await loginPage.open();
  await loginPage.login(users.standard.username, users.standard.password);
}

test('TC-01: user can log in with valid credentials', async ({ page, loginPage, inventoryPage }) => {
  await loginAsStandard({ loginPage });

  await expect(page).toHaveURL(/.*\/inventory\.html/);
  await expect(inventoryPage.pageTitle).toHaveText('Products');
});

test('TC-02: locked out user sees an error message', async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.login(users.locked.username, users.locked.password);

  await expect(loginPage.errorMessage).toContainText(/sorry, this user has been locked out/i);
});
