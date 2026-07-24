import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./BasePage.ts";
import { HomePageLocators } from "../locators/HomePageLocators.ts";
import { Config } from "../utils/Config.ts";

export class HomePage extends BasePage {
	private readonly locators = new HomePageLocators();

	constructor(driver: WebDriver) {
		super(driver);
	}

	public async openWebsite(): Promise<void> {
		await this.navigateTo(Config.baseUrl);
	}

	public async verifyHomePageVisible(): Promise<boolean> {
		return this.isDisplayed(this.locators.homePageBanner);
	}

	public async clickContactUs(): Promise<void> {
		await this.click(this.locators.contactUsButton);
	}

	public async clickHome(): Promise<void> {
		await this.click(this.locators.homeButton);
	}
}
