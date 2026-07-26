# Dafi Labs Automation Testing

This repository contains multiple automation projects for validating a portfolio website and an Oxa backend API.

## Contents

- `cypress/` — Cypress + TypeScript end-to-end tests for the portfolio website.
- `playwright/` — Playwright browser automation for portfolio site smoke and navigation tests.
- `selenium/` — Selenium WebDriver TypeScript Page Object Model framework for form and UI verification.
- `postman/` — Postman collection for Oxa backend API testing, including auth, session, contact, validation, and NoSQL security cases.

## Getting Started

Each folder is a self-contained automation project with its own dependencies and scripts.

### Cypress

```bash
cd cypress
npm ci
npm run cy:open
# or
npm run cy:run:chrome
```

### Playwright

```bash
cd playwright
npm install
npx playwright test
npx playwright show-report
```

### Selenium

```bash
cd selenium
npm install
npm run test
```

### Postman

Import `postman/Oxa_Backend_Postman_Collection.json` into Postman and configure the `BASE_URL` environment variable.

## Notes

- `playwright/` test different browser automation stacks for the same portfolio application.
- The `postman/` collection targets backend API validation and security scenarios.
- Use the folder-specific README files for detailed setup and execution instructions.

## Recommended Workflow

1. Choose the automation stack you want to run.
2. Install dependencies inside that folder.
3. Execute the folder-specific test script or import the Postman collection.
4. Review generated reports, screenshots, or Playwright HTML output.
