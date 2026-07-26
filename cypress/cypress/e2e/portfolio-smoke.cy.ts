import { PortfolioPage } from "../support/pages/PortfolioPage";

describe("Portfolio smoke tests", () => {
	const portfolioPage = new PortfolioPage();

	beforeEach(() => {
		portfolioPage.setViewport(1280, 900);
		portfolioPage.visitHomePage();
		portfolioPage.assertPageLoaded();
		portfolioPage.assertHeroTitleVisible();
		portfolioPage.takeScreenshot("smoke-homepage");
	});

	it("renders the hero section and main navigation", () => {
		portfolioPage.assertHeroSectionVisible();
		portfolioPage.assertHeroTitleContains("Abdullah Amir");
		portfolioPage.assertMainNavigationVisible();
		portfolioPage.assertMissingSectionLinkAbsent();
		portfolioPage.takeScreenshot("hero-and-navigation");
	});

	it("opens the projects section from navigation", () => {
		portfolioPage.clickNavigationLink("projects");
		portfolioPage.assertProjectsSectionVisible();
		portfolioPage.assertProjectCardsCountAtLeast(1);
		portfolioPage.assertMissingSectionLinkAbsent();
		portfolioPage.takeScreenshot("projects-section");
	});

	it("shows contact details and footer content", () => {
		portfolioPage.clickNavigationLink("contact");
		portfolioPage.assertContactSectionVisible();
		portfolioPage.assertContactDetailsVisible();
		portfolioPage.assertFooterContains("Building confidence in software");
		portfolioPage.assertBodyDoesNotContainText(
			"This contact channel does not exist",
		);
		portfolioPage.takeScreenshot("contact-section");
	});
});
