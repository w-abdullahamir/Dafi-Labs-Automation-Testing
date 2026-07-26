# Cypress Portfolio Automation

## Overview

This project uses Cypress with TypeScript and a Page Object Model (POM) structure to keep browser automation readable, maintainable, and easy to extend. The test suite targets the portfolio website and keeps selectors and user interactions encapsulated in page objects under the support layer.

## Architecture

- Tests live in [cypress/e2e](cypress/e2e)
- Page objects live in [cypress/support/pages](cypress/support/pages)
- Cypress configuration is defined in [cypress.config.ts](cypress.config.ts)
- TypeScript configuration is defined in [tsconfig.json](tsconfig.json)

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer
- Cypress 15+ compatible browser runtime

## Installation

```bash
npm ci
```

## Available Scripts

```bash
npm run cy:open
npm run cy:run
npm run cy:run:chrome
npm run cy:run:spec -- cypress/e2e/portfolio.cy.ts
```

### Usage Notes

- Use `npm run cy:open` for interactive local runs.
- Use `npm run cy:run:chrome` for headless execution in Chrome.
- Use `npm run cy:run` for the default headless run across configured browsers.

## CI/CD Overview

The framework is designed to fit GitHub Actions workflows with simple steps to install dependencies, run Cypress tests, and publish artifacts such as screenshots and videos on failure. A typical workflow can:

1. Install Node.js and npm
2. Run `npm ci`
3. Execute Cypress tests with `npm run cy:run:chrome`
4. Upload Cypress screenshots and videos as workflow artifacts
