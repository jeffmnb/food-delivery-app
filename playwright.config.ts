import { defineConfig, devices } from "@playwright/test"
const isCI = false
export default defineConfig({
  testDir: "src/test/e2e",
  fullyParallel: true,
  forbidOnly: !!isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  use: {
    baseURL: "http://localhost:5173",
  },
  webServer: {
    command: "pnpm dev:test",
    url: "http://localhost:5173",
    reuseExistingServer: !isCI,
  },
  projects: [
    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    // {
    //     name: "chromium",
    //     use: { ...devices["Desktop Chrome"] },
    //   },
    //   {
    //     name: "firefox",
    //     use: { ...devices["Desktop Firefox"] },
    //   },
    //   {
    //     name: "webkit",
    //     use: { ...devices["Desktop Safari"] },
    //   },
    //   {
    //     name: "Mobile Chrome",
    //     use: { ...devices["Pixel 5"] },
    //   },
    //   {
    //     name: "Mobile Safari",
    //     use: { ...devices["iPhone 12"] },
    //   },
    //   {
    //     name: "Microsoft Edge",
    //     use: { ...devices["Desktop Edge"], channel: "msedge" },
    //   },
  ],
})
