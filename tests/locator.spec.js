// @ts-check
const { test, expect } = require('@playwright/test');

test('locator and assertions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPass = page.locator('#password');
    await inputPass.fill('secret_sauce');
    await expect(inputPass).toHaveValue('secret_sauce');

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();

    const buttonAddBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
    await buttonAddBackpack.click();

    const buttonAddTshirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    await buttonAddTshirt.click();

    const buttonRemoveTshirt = page.locator('#remove-sauce-labs-bolt-t-shirt');
    await buttonRemoveTshirt.click();

    const buttonAddAgainTshirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    await buttonAddAgainTshirt.click();
    //await expect(buttonAddAgainTshirt).toHaveText('Remove')

    const buttonCart = page.locator('#shopping_cart_container > a');
    await buttonCart.click();

    const buttonRemoveCartTshirt = page.locator('#remove-sauce-labs-bolt-t-shirt');
    await buttonRemoveCartTshirt.click();

    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click();

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('Rahmat Deni');
    await expect(inputFirstName).toHaveValue('Rahmat Deni');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('Wijayanto');
    await expect(inputLastName).toHaveValue('Wijayanto');

    const inputZIP = page.locator('#postal-code');
    await inputZIP.fill('14420');
    await expect(inputZIP).toHaveValue('14420');

    const buttonContinueInformation = page.locator('#continue');
    await buttonContinueInformation.click();

    const buttonFinishOverview = page.locator('#finish');
    await buttonFinishOverview.click();

    const buttonBackHome = page.locator('#back-to-products');
    await buttonBackHome.click();
});