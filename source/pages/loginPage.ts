import { Page } from 'playwright';

export class LoginPage{
    private page: Page;
    private usernameInput = 'input[aria-label="Phone number, username or email address"]';
    private passwordInput = 'input[aria-label="Password"]';
    private loginButton = 'button[type="submit"]';

    constructor(page: Page){
        this.page = page;
    }

    async goTo(url: string) {
        await this.page.goto(url);
    }

    async login(username: string, password: string){
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
