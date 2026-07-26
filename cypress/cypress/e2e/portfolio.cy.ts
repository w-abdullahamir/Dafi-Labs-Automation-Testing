import { PortfolioPage } from "../support/pages/PortfolioPage";

describe("Portfolio website automation", () => {
	const portfolioPage = new PortfolioPage();

	beforeEach(() => {
		portfolioPage.setViewport(1280, 900);
		portfolioPage.visitHomePage();
		portfolioPage.assertPageLoaded();
		portfolioPage.takeScreenshot("homepage-loaded");
	});

	it("loads the hero area and main navigation", () => {
		portfolioPage.assertHeroSectionVisible();
		portfolioPage.assertHeroTitleVisible();
		portfolioPage.assertHeroTitleContains("Abdullah Amir");
		portfolioPage.assertHeroImageVisible();
		portfolioPage.assertMainNavigationVisible();
		portfolioPage.assertNavigationLinkCount(8);
		portfolioPage.assertMissingSectionLinkAbsent();
		portfolioPage.takeScreenshot("hero-and-navigation");
	});

	it("scrolls to each intended section from the navigation", () => {
		const sections: Array<
			| "about"
			| "skills"
			| "projects"
			| "quality"
			| "education"
			| "career"
			| "contact"
		> = [
			"about",
			"skills",
			"projects",
			"quality",
			"education",
			"career",
			"contact",
		];

		portfolioPage.assertMainNavigationVisible();
		portfolioPage.assertMissingSectionLinkAbsent();

		sections.forEach((section) => {
			portfolioPage.clickNavigationLink(section);
			portfolioPage.assertSectionVisible(section);
			portfolioPage.takeScreenshot(`navigation-${section}`);
		});
	});

	it("shows quality-focused project cards with valid GitHub links", () => {
		portfolioPage.clickNavigationLink("projects");
		portfolioPage.assertProjectsSectionVisible();
		portfolioPage.assertProjectCardsCount(3);
		portfolioPage.assertFirstProjectCardContains(
			"MERN Stack Full-Stack Application",
		);
		portfolioPage.assertGitHubLinksAreValid();
		portfolioPage.assertMissingProjectLinkAbsent();
		portfolioPage.takeScreenshot("projects-section");
	});

	it("exposes contact channels and footer social links", () => {
		portfolioPage.clickNavigationLink("contact");
		portfolioPage.assertContactSectionVisible();
		portfolioPage.assertContactCardsCount(4);
		portfolioPage.assertContactDetailsVisible();
		portfolioPage.assertFooterContains("Building confidence in software");
		portfolioPage.assertBodyDoesNotContainText(
			"This contact channel does not exist",
		);
		portfolioPage.takeScreenshot("contact-section");
	});

	it("opens the mobile navigation and routes correctly", () => {
		portfolioPage.setViewport(480, 844);
		portfolioPage.assertMobileMenuClosed();
		portfolioPage.openMobileMenu();
		portfolioPage.assertMobileMenuOpen();
		portfolioPage.clickNavigationLink("contact");
		portfolioPage.assertContactSectionVisible();
		portfolioPage.assertMobileMenuClosed();
		portfolioPage.assertMissingSectionLinkAbsent();
		portfolioPage.takeScreenshot("mobile-navigation");
	});
});
