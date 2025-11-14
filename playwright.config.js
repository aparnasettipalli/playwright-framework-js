const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,              
    baseURL: 'https://www.saucedemo.com',
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    trace: 'on',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'reports' }]]
});
