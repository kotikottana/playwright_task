import { chromium, Browser, Page } from "playwright";
import { LoginPage } from '../pages/loginPage';
import { MessagingPage } from '../pages/messagePage';


(async () => {
    //launch browser
    const browser: Browser = await chromium.launch({ headless: false});
    const page: Page = await browser.newPage()

    // Instantiate page objects
    const loginPage = new LoginPage(page);
    const messagePage = new MessagingPage(page);

    //Define variables
    const instagramUrl = 'https://www.instagram.com';
    const username = 'koti47712@gmail.com';
    const password = 'randomPassword';
    const friendName = 'Mohan Prudvi Raja Konathala';
    const nickName = 'iam_naanii';
    const message = 'Hii man, how are you';

    try {
        await loginPage.goTo(instagramUrl);
        await loginPage.login(username, password);
        
        await page.waitForSelector('svg[aria-label="Instagram"]');

        await messagePage.searchFriend(friendName, nickName);
        await messagePage.typeAndSendMessage(message);
        // await page.waitForSelector('div[role="button"]:has-text("Send")');
        // await page.click('div[role="button"]:has-text("Send")');


    } catch (error) {
        console.log('Error:', error);
    } finally {
        await browser.close();
    }
})();