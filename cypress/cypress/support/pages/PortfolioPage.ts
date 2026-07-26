export type NavigationSection =
	| "about"
	| "skills"
	| "projects"
	| "quality"
	| "education"
	| "career"
	| "contact";

export class PortfolioPage {
	private readonly selectors = {
		mainNavigation: 'nav[aria-label="Main navigation"]',
		navigationLink: "a.nav__link",
		heroSection: "#home",
		heroTitle: "h1.hero__title",
		heroImage: "img.hero__image",
		missingSectionLink: 'a.nav__link[href="#missing-section"]',
		projectsSection: "#projects",
		projectCard: ".project-card",
		projectGitHubLink: '#projects a[aria-label*="GitHub"]',
		projectLinkByAriaLabel: (label: string) =>
			`#projects a[aria-label*="${label}"]`,
		contactSection: "#contact",
		contactCard: ".contact__card",
		footer: "footer.footer",
		mobileMenu: "#nav-menu",
		mobileToggle: "#nav-toggle",
	} as const;

	private get mainNavigation(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(this.selectors.mainNavigation);
	}

	private get navigationLinks(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(
			`${this.selectors.mainNavigation} ${this.selectors.navigationLink}`,
		);
	}

	public visitHomePage(): void {
		cy.visit("/");
	}

	public setViewport(width: number, height: number): void {
		cy.viewport(width, height);
	}

	public assertPageLoaded(): void {
		cy.title().should("match", /Abdullah Amir/);
		this.mainNavigation.should("be.visible");
	}

	public assertHeroSectionVisible(): void {
		cy.get(this.selectors.heroSection).should("be.visible");
	}

	public assertHeroTitleVisible(): void {
		cy.get(this.selectors.heroTitle).should("be.visible");
	}

	public assertHeroTitleContains(expectedText: string): void {
		cy.get(this.selectors.heroTitle)
			.should("be.visible")
			.and("contain.text", expectedText);
	}

	public assertHeroImageVisible(): void {
		cy.get(this.selectors.heroImage).should("be.visible");
	}

	public assertMainNavigationVisible(): void {
		this.mainNavigation.should("be.visible");
	}

	public assertNavigationLinkCount(expectedCount: number): void {
		this.navigationLinks.should("have.length", expectedCount);
	}

	public assertMissingSectionLinkAbsent(): void {
		cy.get(this.selectors.missingSectionLink).should("not.exist");
	}

	public clickNavigationLink(section: NavigationSection): void {
		cy.get(`a.nav__link[href="#${section}"]`).click();
	}

	public assertSectionVisible(section: NavigationSection): void {
		cy.get(`#${section}`).should("be.visible");
	}

	public assertProjectsSectionVisible(): void {
		cy.get(this.selectors.projectsSection).should("be.visible");
	}

	public assertProjectCardsCount(expectedCount: number): void {
		cy.get(this.selectors.projectCard).should("have.length", expectedCount);
	}

	public assertProjectCardsCountAtLeast(minimumCount: number): void {
		cy.get(this.selectors.projectCard).should(
			"have.length.at.least",
			minimumCount,
		);
	}

	public assertFirstProjectCardContains(expectedText: string): void {
		cy.get(this.selectors.projectCard)
			.first()
			.should("contain.text", expectedText);
	}

	public assertGitHubLinksAreValid(): void {
		cy.get(this.selectors.projectGitHubLink).each(($link) => {
			cy.wrap($link)
				.invoke("attr", "href")
				.should("match", /github\.com/);
			cy.wrap($link).should("have.attr", "target", "_blank");
		});
	}

	public assertMissingProjectLinkAbsent(): void {
		cy.get(this.selectors.projectLinkByAriaLabel("NonExistentLink")).should(
			"not.exist",
		);
	}

	public assertContactSectionVisible(): void {
		cy.get(this.selectors.contactSection).should("be.visible");
	}

	public assertContactDetailsVisible(): void {
		cy.contains("work.abdullahamir@gmail.com").should("be.visible");
		cy.contains("+92 318 0762135").should("be.visible");
	}

	public assertFooterContains(expectedText: string): void {
		cy.get(this.selectors.footer).should("contain.text", expectedText);
	}

	public assertBodyDoesNotContainText(expectedText: string): void {
		cy.get("body").should("not.contain.text", expectedText);
	}

	public assertContactCardsCount(expectedCount: number): void {
		cy.get(this.selectors.contactCard).should("have.length", expectedCount);
	}

	public assertMobileMenuClosed(): void {
		cy.get(this.selectors.mobileMenu).should(
			"not.have.class",
			"nav__menu--open",
		);
	}

	public openMobileMenu(): void {
		cy.get(this.selectors.mobileToggle).should("be.visible").click();
	}

	public assertMobileMenuOpen(): void {
		cy.get(this.selectors.mobileMenu).should(
			"have.class",
			"nav__menu--open",
		);
	}

	public takeScreenshot(name: string): void {
		cy.screenshot(name, { capture: "viewport" });
	}
}
