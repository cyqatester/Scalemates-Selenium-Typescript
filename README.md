# Scalemates Selenium E2E

TypeScript + Selenium WebDriver + Mocha + Chai, using the Page Object Model.

## Setup
Requires Node.js 22/24 and Chrome or Firefox installed.

```bash
npm install
```

Selenium Manager (included with Selenium 4) automatically manages compatible browser drivers in typical local setups.

## Run
All 10 spec files with up to two Mocha worker processes:

```bash
npm test
```

Chrome only (PowerShell):
```powershell
$env:BROWSER="chrome"; npm test
```

Chrome only (CMD):
```cmd
set BROWSER=chrome && npm test
```

Firefox only (PowerShell):
```powershell
$env:BROWSER="firefox"; npm test
```

Show the browser instead of headless:
```powershell
$env:HEADLESS="false"; npm test
```

## Specs
- homepage.spec.ts — homepage loads
- news-feed.spec.ts — News Feed link and heading
- kits.spec.ts — Kits link and heading
- paints.spec.ts — Paints link and heading
- books.spec.ts — Books link and heading
- magazines.spec.ts — Magazines link and heading
- brands.spec.ts — Brands link and heading
- shops.spec.ts — Shops link and heading
- events.spec.ts — Events link and heading
- updates.spec.ts — Updates link and heading contains Updates

## Parallelism
Mocha parallel mode schedules spec files, not individual tests. The ten separate spec files allow up to two files to run concurrently. Each test gets its own browser session via Mocha root hooks. Actual concurrency also depends on available CPU/memory and site responsiveness.

## Page Object Model structure

Each spec has its own page object under `src/pages`:
- `home.page.ts` — homepage checks
- `news-feed.page.ts`, `kits.page.ts`, `paints.page.ts`, `books.page.ts`
- `magazines.page.ts`, `brands.page.ts`, `shops.page.ts`, `events.page.ts`, `updates.page.ts`

`section.page.ts` contains shared behavior for section pages, while `core/base-page.ts`
contains common Selenium navigation, visibility, click, and title helpers. Each spec
uses only its corresponding page object. `test/hooks.ts` creates and closes a browser
session for each test; `test/support/driver.ts` provides typed access to that session.

## GitHub Actions CI

The workflow is configured at `.github/workflows/e2e.yml` and runs on pushes and pull requests to `main`/`master`, plus manual runs via **Actions → Scalemates Selenium E2E → Run workflow**.

It uses current Node.js 24-compatible official actions:
- `actions/checkout@v7`
- `actions/setup-node@v7`
- `actions/upload-artifact@v7`

The job uses `ubuntu-24.04`, runs Chrome and Firefox as a browser matrix, and uploads screenshots if a test job fails. The workflow currently uses `npm install` because this starter archive does not include a generated `package-lock.json`. After running `npm install` locally, commit the generated `package-lock.json` and change the workflow install step to `npm ci` for reproducible CI installs.
