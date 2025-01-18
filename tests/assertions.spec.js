const { test, expect } = require('@playwright/test');
const { default: newAction } = require('../tests/Actions/newAction');

test('PMO Weekedn', async ({ page }) => {
    const objAction = new newAction(page);
    await objAction.goto();
    await objAction.inputLogin();
    await objAction.addProduct();
    await objAction.removeProductandCheckout();
    await objAction.inputInformation();
    await objAction.finishCheckoutandBackHome();
})

