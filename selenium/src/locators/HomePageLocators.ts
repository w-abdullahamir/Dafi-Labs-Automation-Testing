import { By } from "selenium-webdriver";

export class HomePageLocators {
	public contactUsButton = By.xpath("//a[@href='/contact_us']");
	public homeButton = By.xpath("//a[@href='/' and @class='btn btn-success']");
	public homePageBanner = By.xpath(
		"//img[@alt='Website for automation practice']",
	);
}
