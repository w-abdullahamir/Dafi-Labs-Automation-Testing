import { By } from "selenium-webdriver";

export class ContactUsLocators {
	public getInTouchHeading = By.xpath("//h2[text()='Get In Touch']");
	public nameInput = By.xpath("//input[@name='name']");
	public emailInput = By.xpath("//input[@name='email']");
	public subjectInput = By.xpath("//input[@name='subject']");
	public messageTextArea = By.xpath("//textarea[@name='message']");
	public uploadInput = By.xpath("//input[@name='upload_file']");
	public submitButton = By.xpath("//input[@name='submit']");
	public successMessage = By.xpath(
		"//div[contains(@class, 'status alert') and contains(text(), 'Success')]",
	);
}
