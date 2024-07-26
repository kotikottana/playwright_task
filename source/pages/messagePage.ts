import { Page } from 'playwright';

export class MessagingPage {
    private page: Page;
    // private messageIcon = 'a[aria-label="Direct messaging - 0 new notification link"]';
    // private sendMessageButton = '//*[text()="Send message"]';
    private searchQueryBox = '[placeholder="Search..."]';
    private textMessageArea = '[aria-label="Message"]';
    // private sendButton = '//div[@aria-describedby="Message"]//parent::div//parent::div//following-sibling::div[@role="button"]';

    constructor(page: Page) {
        this.page = page;
    }

    async searchFriend(friendName: string, nickName: string) {
        await this.page.click(`text="Messages"`);
        await this.page.click(`text="Send message"`);
        await this.page.waitForSelector('[aria-label="title text for omnipicker"]');
        await this.page.fill(this.searchQueryBox, friendName);
        await this.page.waitForSelector('[aria-label="title text for omnipicker"]');
        await this.page.waitForSelector(`text="${nickName}"`);
        await this.page.click(`text="${nickName}"`);
        await this.page.click(`text="Chat"`);
    }

    async typeAndSendMessage(message: string){
        await this.page.waitForSelector('[aria-label="Audio Call"]');
        await this.page.waitForSelector('[aria-describedby="Message"]');
        await this.page.click(this.textMessageArea);
        await this.page.fill(this.textMessageArea, message);
        await this.page.waitForSelector('[aria-label="Audio Call"]');
        await this.page.waitForSelector('[aria-label="Video Call"]');
        // await this.page.waitForSelector(`text="Send"`);
        // await this.page.click(`text()="Send"`);
        // await this.page.keyboard.press('Enter');
        // await this.page.waitForSelector('div[role="button"]:has-text("Send")');
        // await this.page.click('div[role="button"]:has-text("Send")');
        await this.page.waitForSelector('//div[@aria-describedby="Message"]//parent::div//parent::div//following-sibling::div[@role="button"]')
        await this.page.click('//div[@aria-describedby="Message"]//parent::div//parent::div//following-sibling::div[@role="button"]');

    }
}