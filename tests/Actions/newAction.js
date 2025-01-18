import loginLocator from "../Locators/loginLocator";
import { expect } from "@playwright/test";

export default class newAction {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.fieldUsername);
        this.inputPassword = page.locator(this.loginLocator.fieldpassword);
        this.clickButtonLogin = page.locator(this.loginLocator.buttonLogin);
        this.clickButtonAddBackpack = page.locator(this.loginLocator.buttonAddBackpack);
        this.clickButtonAddTshirt = page.locator(this.loginLocator.buttonAddTshirt);
        this.clickButtonCart = page.locator(this.loginLocator.buttonCart);
        this.clickButtonRemoveTshirt = page.locator(this.loginLocator.buttonRemoveTshirtCart);
        this.clickButtonCheckout = page.locator(this.loginLocator.buttonCheckout);
        this.inputFirstName = page.locator(this.loginLocator.fieldFirstName);
        this.inputLastName = page.locator(this.loginLocator.fieldLastName);
        this.inputZipCode = page.locator(this.loginLocator.fieldZipCode);
        this.clickButtonContinue = page.locator(this.loginLocator.buttonContinueInformation);
        this.clickButtonFinish = page.locator(this.loginLocator.buttonFinishOverview);
        this.clickButtonBackHome = page.locator(this.loginLocator.buttonBackHome);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButtonLogin.click();
    }

    async addProduct() {
        await this.clickButtonAddBackpack.click();
        await this.clickButtonAddTshirt.click();
        await this.clickButtonCart.click();
    }

    async removeProductandCheckout() {
        await this.clickButtonRemoveTshirt.click();
        await this.clickButtonCheckout.click();
    }

    async inputInformation() {
        await this.inputFirstName.fill('Rahmat Deni');
        await expect(this.inputFirstName).toHaveValue('Rahmat Deni');
        await this.inputLastName.fill('Wijayanto');
        await expect(this.inputLastName).toHaveValue('Wijayanto');
        await this.inputZipCode.fill('1234');
        await expect(this.inputZipCode).toHaveValue('1234');
        await this.clickButtonContinue.click();
    }

    async finishCheckoutandBackHome() {
        await this.clickButtonFinish.click();
        await this.clickButtonBackHome.click();
    }
}