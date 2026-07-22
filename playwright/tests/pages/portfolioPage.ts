import { type Page, type Locator, expect } from "@playwright/test";

export class PortfolioPage {
	readonly page: Page;
	readonly heroSection: Locator;
	readonly heroTitle: Locator;
	readonly profileImage: Locator;
	readonly mainNavigation: Locator;
	readonly navLinks: Locator;
	readonly projectsSection: Locator;
	readonly projectCards: Locator;
	readonly contactSection: Locator;
	readonly contactCards: Locator;
	readonly footer: Locator;

	constructor(page: Page) {
		this.page = page;
		this.heroSection = page.locator("#home");
		this.heroTitle = page.locator("h1.hero__title");
		this.profileImage = page.locator("img.hero__image");
		this.mainNavigation = page.locator('nav[aria-label="Main navigation"]');
		this.navLinks = page.locator(
			'nav[aria-label="Main navigation"] a.nav__link',
		);
		this.projectsSection = page.locator("#projects");
		this.projectCards = page.locator(".project-card");
		this.contactSection = page.locator("#contact");
		this.contactCards = page.locator(".contact__card");
		this.footer = page.locator("footer.footer");
	}

	async goto() {
		await this.page.goto("");
	}

	async openSection(sectionId: string) {
		await this.page.locator(`a.nav__link[href="#${sectionId}"]`).click();
		await expect(this.page.locator(`#${sectionId}`)).toBeVisible();
	}

	async getSectionHeading(sectionId: string) {
		return this.page.locator(`#${sectionId} .section__title`).first();
	}

	async screenshot(name: string) {
		await this.page.screenshot({
			path: `test-results/screenshots/${name}.png`,
			fullPage: false,
		});
	}
}
