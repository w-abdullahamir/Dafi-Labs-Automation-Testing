# Playwright Automation Tests

This folder contains browser automation tests for the portfolio website using Playwright.

## What is inside this folder?

- `package.json` — contains the Playwright dependencies and npm scripts used to run the tests.
- `playwright.config.ts` — test configuration, including browser settings, base URL, and reporting options.
- `tests/` — all automated test cases.
  - `portfolio-smoke.spec.ts` — lightweight smoke tests to confirm the site loads correctly.
  - `portfolio.spec.ts` — broader UI and navigation coverage for the portfolio website.
  - `pages/portfolioPage.ts` — a page object model that encapsulates selectors and reusable actions for the website.
- `playwright-report/` — generated HTML reports from test runs.
- `test-results/` — screenshots and trace artifacts produced during failed or completed runs.

## What tests are being done?

The tests validate that the portfolio website:

- loads successfully in the browser
- displays the hero section and navigation correctly
- routes to the intended sections of the page
- includes valid GitHub links
- shows the expected footer and social links
- behaves correctly during basic smoke checks

## How to run the tests

From the `playwright/` folder, run:

```bash
npm install
npx playwright test
```

To open the HTML report after a run:

```bash
npx playwright show-report
```

## Notes

These tests are intended to help verify the website’s core functionality and catch regressions during future updates.
