import { By, WebDriver, WebElement } from "selenium-webdriver";
import { WaitUtils } from "../utils/WaitUtils.ts";
import { ScreenshotUtil } from "../utils/ScreenshotUtil.ts";

export class BasePage {
	protected driver: WebDriver;

	constructor(driver: WebDriver) {
		this.driver = driver;
	}

	public async navigateTo(url: string): Promise<void> {
		await this.driver.get(url);
	}

	public async click(locator: By): Promise<void> {
		const element = await WaitUtils.waitForClickable(this.driver, locator);
		await element.click();
	}

	public async type(locator: By, text: string): Promise<void> {
		const element = await WaitUtils.waitForVisibility(this.driver, locator);
		await element.clear();
		await element.sendKeys(text);
	}

	public async getText(locator: By): Promise<string> {
		const element = await WaitUtils.waitForVisibility(this.driver, locator);
		return element.getText();
	}

	public async isDisplayed(locator: By): Promise<boolean> {
		try {
			const element = await WaitUtils.waitForVisibility(
				this.driver,
				locator,
			);
			return await element.isDisplayed();
		} catch {
			return false;
		}
	}

	public async uploadFile(locator: By, filePath: string): Promise<void> {
		const element = await WaitUtils.waitForPresence(this.driver, locator);
		await element.sendKeys(filePath);
	}

	public async waitForElement(
		locator: By,
		timeout?: number,
	): Promise<WebElement> {
		return WaitUtils.waitForVisibility(this.driver, locator, timeout);
	}

	public async takeScreenshot(fileName: string): Promise<string> {
		return ScreenshotUtil.takeScreenshot(this.driver, fileName);
	}

	public async acceptAlert(): Promise<void> {
		const alert = await this.driver.switchTo().alert();
		await alert.accept();
	}

	public async scrollIntoView(locator: By): Promise<void> {
		const element = await WaitUtils.waitForPresence(this.driver, locator);
		await this.driver.executeScript(
			'arguments[0].scrollIntoView({ behavior: "smooth", block: "center" });',
			element,
		);
	}
}
