import { Builder, type WebDriver } from "selenium-webdriver";
import { Config } from "./Config.ts";

export class DriverFactory {
	public static async createDriver(): Promise<WebDriver> {
		// Optional Chrome arguments (e.g., start-maximized via browser options)
		// chromeOptions.addArguments('--start-maximized');

		const driver = await new Builder()
			.forBrowser(Config.browserName)
			.build();

		await driver.manage().window().maximize();
		await driver.manage().setTimeouts({
			implicit: 0,
			pageLoad: Config.timeouts.pageLoad,
			script: Config.timeouts.script,
		});

		return driver;
	}

	public static async quitDriver(driver?: WebDriver | null): Promise<void> {
		if (driver) {
			await driver.quit();
		}
	}
}
