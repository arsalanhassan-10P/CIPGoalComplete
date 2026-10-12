# SauceDemo Playwright Automation Project

A production-quality Playwright JavaScript test automation project for SauceDemo using the Page Object Model, reusable fixtures, environment-based configuration, and rich reporting.

## Overview

This project demonstrates a maintainable end-to-end automation solution for the SauceDemo application. It covers login, product browsing, sorting, cart management, checkout flow, and logout. The design follows industry best practices including:

- Page Object Model (POM)
- Reusable fixtures and utility data
- Independent tests for local or parallel execution
- Cross-browser support
- HTML reporting with screenshots, traces, and videos on failure
- Clear separation of concerns across pages, fixtures, and tests

## Project Structure

```text
saucedemo-playwright-js/
├── .github/
│   └── copilot-instructions.md
├── fixtures/
│   └── sauce-demo.fixture.js
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── CheckoutCompletePage.js
├── tests/
│   ├── login.spec.js
│   ├── inventory.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── utils/
│   └── testData.js
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
├── README.md
└── test-results/
```

## Prerequisites

- Node.js 18 or later
- npm
- Playwright browsers

## Installation

1. Install dependencies:

```bash
npm install
```

2. Copy the sample environment file and adjust credentials if needed:

```bash
copy .env.example .env
```

On Linux/macOS:

```bash
cp .env.example .env
```

3. Install browser binaries if they were not installed during the package setup:

```bash
npx playwright install
```

## Configuration

The project uses environment variables for configuration and credentials. The main values are defined in `.env.example`:

```env
BASE_URL=https://www.saucedemo.com/
STANDARD_USER=standard_user
STANDARD_PASSWORD=secret_sauce
LOCKED_USER=locked_out_user
PROBLEM_USER=problem_user
PERFORMANCE_USER=performance_glitch_user
```

## Running Tests

Run the complete suite:

```bash
npm test
```

Run only Chromium:

```bash
npm run test:chromium
```

Run in headed mode:

```bash
npm run test:headed
```

Open the Playwright UI runner:

```bash
npm run test:ui
```

Debug a test:

```bash
npm run test:debug
```

## Test Cases Covered

This project includes 10 end-to-end scenarios:

1. Valid user login
2. Locked user validation
3. User logout flow
4. Product sorting by price low-to-high
5. Product details page navigation
6. Single item added to cart
7. Multiple items added to cart
8. Remove item from cart
9. Complete checkout flow
10. Checkout validation when first name is missing

## Reporting

The project is configured for Playwright HTML reporting. After each run, HTML results are generated in the `playwright-report` folder.

Open the report:

```bash
npm run report
```

Artifacts retained for failed runs include:

- Screenshots
- Videos
- Trace files

## Best Practices Implemented

- Page Object Model for reliable maintenance
- Reusable fixtures for shared page objects
- Test data centralized in one utility module
- Test independence for reliable parallel execution
- Explicit waits and deterministic assertions
- Browser coverage across Chromium, Firefox, and WebKit
- Clean separation of test logic and UI interactions

## Maintenance Tips

- Add new page objects when a new screen or flow is introduced.
- Keep selectors as close to page objects as possible rather than inline in tests.
- Extend `utils/testData.js` for new scenario data.
- Prefer stable locators like `data-test` attributes when available.
- Keep tests focused on user behavior rather than implementation details.

## Notes

The SauceDemo site is public and stable for automation training and demonstration, but test data should still be kept in environment files wherever possible to avoid hardcoded credentials and fragile configuration.
