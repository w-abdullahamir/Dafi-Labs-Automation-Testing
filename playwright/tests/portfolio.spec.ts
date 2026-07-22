import { test, expect } from "@playwright/test";
import { PortfolioPage } from "./pages/portfolioPage";

test.describe("Portfolio website automation", () => {
	test("homepage loads with the main hero and navigation content", async ({
		page,
	}) => {
		const portfolioPage = new PortfolioPage(page);

		await portfolioPage.goto();
		await portfolioPage.screenshot("homepage-loaded");

		await expect(page).toHaveTitle(/Abdullah Amir/);
		await expect(portfolioPage.heroSection).toBeVisible();
		await expect(portfolioPage.heroTitle).toHaveText("Abdullah Amir");
		await expect(portfolioPage.profileImage).toBeVisible();
		await expect(portfolioPage.mainNavigation).toBeVisible();
		await expect(portfolioPage.navLinks).toHaveCount(8);
	});

	test("navigation scrolls to each intended section", async ({ page }) => {
		const portfolioPage = new PortfolioPage(page);

		await portfolioPage.goto();

		const sections = [
			"about",
			"skills",
			"projects",
			"quality",
			"education",
			"career",
			"contact",
		];

		for (const sectionId of sections) {
			await portfolioPage.openSection(sectionId);
			await expect(page.locator(`#${sectionId}`)).toBeVisible();
			await portfolioPage.screenshot(`navigation-${sectionId}`);
		}
	});

	test("projects section shows quality-focused project cards with valid GitHub links", async ({
		page,
	}) => {
		const portfolioPage = new PortfolioPage(page);

		await portfolioPage.goto();
		await portfolioPage.openSection("projects");

		await expect(portfolioPage.projectsSection).toBeVisible();
		await expect(portfolioPage.projectCards).toHaveCount(3);
		await expect(portfolioPage.projectCards.first()).toContainText(
			"MERN Stack Full-Stack Application",
		);

		const githubLinks = portfolioPage.page.locator(
			'#projects a[aria-label*="GitHub"]',
		);
		await expect(githubLinks).toHaveCount(3);

		for (const link of await githubLinks.all()) {
			await expect(link).toHaveAttribute("href", /github\.com/);
			await expect(link).toHaveAttribute("target", "_blank");
		}

		await portfolioPage.screenshot("projects-section");
	});

	test("contact section exposes contact channels and footer social links", async ({
		page,
	}) => {
		const portfolioPage = new PortfolioPage(page);

		await portfolioPage.goto();
		await portfolioPage.openSection("contact");

		await expect(portfolioPage.contactSection).toBeVisible();
		await expect(portfolioPage.contactCards).toHaveCount(4);
		await expect(
			portfolioPage.page.getByText("work.abdullahamir@gmail.com"),
		).toBeVisible();
		await expect(
			portfolioPage.page.getByText("+92 318 0762135"),
		).toBeVisible();
		await expect(portfolioPage.footer).toContainText(
			"Building confidence in software",
		);

		await portfolioPage.screenshot("contact-section");
	});

	test("mobile navigation opens and routes correctly", async ({ page }) => {
		const portfolioPage = new PortfolioPage(page);

		await page.setViewportSize({ width: 480, height: 844 });
		await portfolioPage.goto();

		const toggle = portfolioPage.page.locator("#nav-toggle");
		await expect(toggle).toBeVisible();
		await toggle.click();
		await expect(portfolioPage.page.locator("#nav-menu")).toHaveClass(
			/nav__menu--open/,
		);

		await portfolioPage.page
			.locator('a.nav__link[href="#contact"]')
			.click();
		await expect(portfolioPage.page.locator("#contact")).toBeVisible();
		await portfolioPage.screenshot("mobile-navigation");
	});
});
