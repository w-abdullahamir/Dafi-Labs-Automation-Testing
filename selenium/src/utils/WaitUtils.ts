import { WebDriver, By, until, WebElement } from "selenium-webdriver";
import { Config } from "./Config.ts";

export class WaitUtils {
	public static async waitForPresence(
		driver: WebDriver,
		locator: By,
		timeout = Config.timeouts.explicit,
	): Promise<WebElement> {
		return driver.wait(
			until.elementLocated(locator),
			timeout,
			`Element not present: ${locator}`,
		);
	}

	public static async waitForVisibility(
		driver: WebDriver,
		locator: By,
		timeout = Config.timeouts.explicit,
	): Promise<WebElement> {
		const element = await this.waitForPresence(driver, locator, timeout);
		return driver.wait(
			until.elementIsVisible(element),
			timeout,
			`Element not visible: ${locator}`,
		);
	}

	public static async waitForClickable(
		driver: WebDriver,
		locator: By,
		timeout = Config.timeouts.explicit,
	): Promise<WebElement> {
		const element = await this.waitForVisibility(driver, locator, timeout);
		return driver.wait(
			until.elementIsEnabled(element),
			timeout,
			`Element not clickable: ${locator}`,
		);
	}

	public static async waitForText(
		driver: WebDriver,
		locator: By,
		expectedText: string,
		timeout = Config.timeouts.explicit,
	): Promise<boolean> {
		await this.waitForVisibility(driver, locator, timeout);
		return driver.wait(
			async () => {
				const element = await driver.findElement(locator);
				const text = await element.getText();
				return text.trim().includes(expectedText);
			},
			timeout,
			`Expected text not present for locator: ${locator}`,
		);
	}
}
