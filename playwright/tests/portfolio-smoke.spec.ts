import { test, expect } from "@playwright/test";
import { PortfolioPage } from "./pages/portfolioPage";

test("portfolio smoke test", async ({ page }) => {
	const portfolioPage = new PortfolioPage(page);

	await portfolioPage.goto();
	await expect(portfolioPage.heroTitle).toBeVisible();
	await expect(portfolioPage.mainNavigation).toBeVisible();
});
