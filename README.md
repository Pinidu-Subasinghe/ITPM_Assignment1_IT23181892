# ITPM_Assignment1_IT23181892
Playwright automation tests for IT3040 Assignment 1 – Sinhala transliteration system testing.

## Step 1
### Install latest playwright version
npm init playwright@latest

## Step 2
Language: Typescript
Where to put tests: tests
Use Playwright Test: true

### Install dependancies
At the root directory: npm install

#### To install the latest version of Playwright Test and its dependencies:
npm install -D @playwright/test@latest

## Step 3
### Install browsers
npx playwright install --with-deps

# Project Structure
ITPM_Assignment1_IT23181892/
│
├─ tests/                  # All your Playwright tests (TypeScript)
│   └─ singlish-to-sinhala.spec.ts
│
├─ package.json
├─ playwright.config.ts    # Playwright configuration
└─ README.md

# How to run
## Basic Run
npx playwright test

## Run in Chromium (or chrome)
npx playwright test --project=chromium

## Run with Interactive UI
npx playwright test --ui

## View Test Reports
npx playwright show-report
