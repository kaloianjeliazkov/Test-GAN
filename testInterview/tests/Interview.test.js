const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');

const host = 'https://playjack.com/';

let browser;
let context;
let page;

let username = "kol" + Math.floor(Math.random() * 100000);
let email = "kol" + Math.floor(Math.random() * 100000) + "@gmail.com"
let password = "123aA!"


async function registerUser(page, username, email, password) {
    await page.goto(host)
    const acceptCookieBtnLocator = page.getByRole('button', { name: "Accept All Cookies" })
    const registerFormLocator = page.locator('//div[@class="lightbox"]')
    await acceptCookieBtnLocator.click()

    //press Register
    const registerBtnLocator = await page.locator('[data-qa="signup_btn"]')
    await registerBtnLocator.click()
    expect(registerFormLocator).toBeVisible()

    //fill Register fields
    const usernameFieldLocator = page.locator('[data-qa="signup_username"]')
    const emailFieldLocator = page.locator('[data-qa="signup_email"]')
    const passwordFieldLocator = page.locator('[data-qa="signup_password"]')

    const registerSubmitBtnLocator = page.locator('[data-qa="signup_submit_btn"]')
    const continueBtnLocator = page.getByRole('button', { name: 'Continue' })
    const acceptTermsBtnLocator = page.locator('[data-qa="signup_checkbox"]')

    await usernameFieldLocator.fill(username)
    await emailFieldLocator.fill(email)
    await passwordFieldLocator.fill(password)

    await registerSubmitBtnLocator.click()
    await acceptTermsBtnLocator.click()
    await continueBtnLocator.click()


    await page.waitForURL(host + '?registrationSuccess=true')
    expect(page.url()).toBe(host + '?registrationSuccess=true')
    await expect(page.getByText('Collect your welcome gift')).toBeVisible();
}

async function loginUser(page, username, password) {
    await page.goto(host)
    const acceptCookieBtnLocator = page.getByRole('button', { name: "Accept All Cookies" })
    const loginFormLocator = page.locator('//div[@class="lightbox"]')
    await acceptCookieBtnLocator.click()

    //press Login
    const loginBtnLocator = await page.locator('[data-qa="login_btn"]')
    await loginBtnLocator.click()
    expect(loginFormLocator).toBeVisible()

    //fill login fields
    const usernameLoginFieldLocator = page.locator('[data-qa="email"]')
    const passwordLoginFieldLocator = page.locator('[data-qa="login_password"]')

    const loginSubmitBtnLocator = page.locator('[data-qa="login_submit_btn"]')

    await usernameLoginFieldLocator.fill(username)
    await passwordLoginFieldLocator.fill(password)

    await loginSubmitBtnLocator.click()
}

describe("Interview tests", () => {
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });


    test('Successful Registration', async () => {
        await registerUser(page, username, email, password)
        console.log(username)
    })

    test('Successful Login', async () => {
        await loginUser(page, username, password)

        const burgerMenuLocator = page.locator('[data-qa="expand_account_menu"]')
        const logoutBtnLocator = page.locator('[data-qa="log_out"]')

        await expect(burgerMenuLocator).toBeVisible()
        await burgerMenuLocator.click()
        await expect(logoutBtnLocator).toBeVisible()
    })

    test('Bonus History Check', async () => {
        await loginUser(page, username, password)

        const burgerMenuLocator = page.locator('[data-qa="expand_account_menu"]')
        await expect(burgerMenuLocator).toBeVisible()
        await burgerMenuLocator.click()

        const accountHistoryBtnLocator = page.locator('[data-qa="account_history"]')
        const bonusBtnLocator = page.locator('[data-qa="bonus"]')
        const descriptionTextLocator = page.getByText('Welcome Aboard! Registration Bonus - 5000 chips')
        const winningsLocator = descriptionTextLocator.locator('xpath=ancestor::tr').locator('[data-qa="winnnings"]')

        await accountHistoryBtnLocator.click()

        await page.waitForURL(host + 'my-account/account-history')
        expect(page.url()).toBe(host + 'my-account/account-history')
        await expect(bonusBtnLocator).toBeVisible()

        await bonusBtnLocator.click()

        await expect(descriptionTextLocator).toBeVisible()
        await expect(winningsLocator).toBeVisible()
    })
});