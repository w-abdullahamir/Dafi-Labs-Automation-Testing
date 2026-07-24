# Selenium TypeScript POM Framework

A working Selenium WebDriver automation framework using TypeScript and the Page Object Model.

## Folder Structure

```
project-root/
│
├── src/
│   ├── asset/
│   │   └── empty_document.pdf
│   ├── locators/
│   │   ├── ContactUsLocators.ts
│   │   └── HomePageLocators.ts
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── ContactUsPage.ts
│   │   └── HomePage.ts
│   ├── tests/
│   │   └── ContactUs.spec.ts
│   └── utils/
│       ├── Config.ts
│       ├── DriverFactory.ts
│       ├── ScreenshotUtil.ts
│       └── WaitUtils.ts
│
├── screenshots/
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js installed
- Chrome browser installed
- `npm install` run from the `selenium` folder

## Installation

```bash
npm install
```

## Run the test

```bash
npm run test
```

This runs the Mocha test suite through `ts-node` and executes `src/tests/ContactUs.spec.ts`.

## Configuration

Update `src/utils/Config.ts` to change the target URL, browser, timeouts, or upload file path.

- `baseUrl` - website under test
- `browserName` - browser used by Selenium (default: `chrome`)
- `uploadFilePath` - path to the file uploaded during the Contact Us test
- `timeouts` - page load, script, and explicit wait timeouts

Example:

```ts
export const Config = {
  baseUrl: "http://automationexercise.com",
  uploadFilePath: "src/asset/empty_document.pdf",
  browserName: "chrome",
  timeouts: {
    pageLoad: 30000,
    script: 30000,
    explicit: 20000,
  },
};
```

## Test flow

The current working test covers:

- opening the automation exercise website
- verifying the home page is visible
- navigating to the Contact Us page
- filling in name, email, subject, and message
- uploading an attachment from `src/asset/empty_document.pdf`
- submitting the form and accepting the alert
- verifying the success message
- returning to the home page

## Framework details

- Uses Page Object Model with `HomePage`, `ContactUsPage`, and `BasePage`
- Uses Selenium WebDriver and explicit wait helpers in `WaitUtils.ts`
- Saves screenshots in `screenshots/`
- Uses Node's built-in `assert` in the Mocha test
- `DriverFactory` launches Chrome and maximizes the browser window

## Notes

- The current locators are already defined and do not require placeholder replacement.
- If you need a different file for upload, update `src/utils/Config.ts`.
- Screenshots are generated during test execution and stored in `screenshots/`.