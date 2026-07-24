import assert from "node:assert";
import { describe, it, before, after } from "mocha";
import { DriverFactory } from "../utils/DriverFactory.ts";
import { HomePage } from "../pages/HomePage.ts";
import { ContactUsPage } from "../pages/ContactUsPage.ts";

describe("Contact Us Form", function () {
	this.timeout(60000);

	let driver: Awaited<ReturnType<typeof DriverFactory.createDriver>>;
	let homePage: HomePage;
	let contactUsPage: ContactUsPage;

	const name = "John Doe";
	const email = "john@example.com";
	const subject = "Automation Test";
	const message = "Testing Contact Us form.";
	const expectedSuccessText =
		"Success! Your details have been submitted successfully.";

	before(async () => {
		driver = await DriverFactory.createDriver();
		homePage = new HomePage(driver);
		contactUsPage = new ContactUsPage(driver);
	});

	after(async () => {
		await DriverFactory.quitDriver(driver);
	});

	it("should submit contact us form successfully", async () => {
		try {
			await homePage.openWebsite();
			assert.strictEqual(
				await homePage.verifyHomePageVisible(),
				true,
				"Home page is not visible.",
			);
			await homePage.takeScreenshot("01_HomePage.png");

			await homePage.clickContactUs();
			assert.strictEqual(
				await contactUsPage.verifyGetInTouchVisible(),
				true,
				"GET IN TOUCH is not visible.",
			);
			await contactUsPage.takeScreenshot("02_GetInTouch.png");

			await contactUsPage.enterName(name);
			await contactUsPage.enterEmail(email);
			await contactUsPage.enterSubject(subject);
			await contactUsPage.enterMessage(message);
			await contactUsPage.uploadAttachment();

			await contactUsPage.submitForm();
			await contactUsPage.acceptAlert();

			const successMessage = await contactUsPage.verifySuccessMessage();
			assert.strictEqual(
				successMessage.trim(),
				expectedSuccessText,
				"Success message does not match.",
			);
			await contactUsPage.takeScreenshot("03_SuccessMessage.png");

			await homePage.clickHome();
			assert.strictEqual(
				await homePage.verifyHomePageVisible(),
				true,
				"Home page is not visible after clicking Home.",
			);
		} catch (error) {
			console.error("Test execution failed:", error);
			throw error;
		}
	});
});
