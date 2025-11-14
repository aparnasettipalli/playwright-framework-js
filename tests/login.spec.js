const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { validUser, lockedOutUser } = require('../utils/testData');

test.describe('SauceDemo Login Tests', () => {

  test('Valid login should succeed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);

    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Locked out user should show error', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(lockedOutUser.username, lockedOutUser.password);

    const errorText = await loginPage.getErrorMessage();
    await expect(errorText).toContain('locked out');

  });

});
