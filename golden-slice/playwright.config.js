// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  

  // Define browsers to test on
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],

};
