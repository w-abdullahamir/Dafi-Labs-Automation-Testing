import fs from "fs/promises";
import path from "path";
import { WebDriver } from "selenium-webdriver";

export class ScreenshotUtil {
	public static async takeScreenshot(
		driver: WebDriver,
		fileName: string,
	): Promise<string> {
		const screenshotDirectory = path.resolve("screenshots");
		await fs.mkdir(screenshotDirectory, { recursive: true });

		const filePath = path.join(screenshotDirectory, fileName);
		const image = await driver.takeScreenshot();
		await fs.writeFile(filePath, image, "base64");

		return filePath;
	}
}
