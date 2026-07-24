import { WebDriver } from "selenium-webdriver";
import { BasePage } from "./BasePage.ts";
import { ContactUsLocators } from "../locators/ContactUsLocators.ts";
import { Config } from "../utils/Config.ts";
import path from "path";

export class ContactUsPage extends BasePage {
	private readonly locators = new ContactUsLocators();

	constructor(driver: WebDriver) {
		super(driver);
	}

	public async verifyGetInTouchVisible(): Promise<boolean> {
		return this.isDisplayed(this.locators.getInTouchHeading);
	}

	public async enterName(name: string): Promise<void> {
		await this.type(this.locators.nameInput, name);
	}

	public async enterEmail(email: string): Promise<void> {
		await this.type(this.locators.emailInput, email);
	}

	public async enterSubject(subject: string): Promise<void> {
		await this.type(this.locators.subjectInput, subject);
	}

	public async enterMessage(message: string): Promise<void> {
		await this.type(this.locators.messageTextArea, message);
	}

	public async uploadAttachment(): Promise<void> {
		const absoluteFilePath = path.resolve(Config.uploadFilePath);
		await this.uploadFile(this.locators.uploadInput, absoluteFilePath);
	}

	public async submitForm(): Promise<void> {
		await this.click(this.locators.submitButton);
	}

	public async verifySuccessMessage(): Promise<string> {
		return this.getText(this.locators.successMessage);
	}
}
