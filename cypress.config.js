const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://en.wikipedia.org',
    setupNodeEvents(on, config) {
      // Handle events such as task creation or plugins setup here.
      // For example, you can configure plugins or add custom tasks.
      
      // This example configures a custom task for logging
      on('task', {
        logMessage(message) {
          console.log(message);
          return null; // Cypress requires a return value for tasks
        },
      });

      return config; // Always return the updated config
    },
    specPattern: 'cypress/e2e/**/*.cy.ts', // Path to test files
    supportFile: 'cypress/support/index.ts', // Path to support file
  },
  viewportWidth: 1280, // Set default viewport width
  viewportHeight: 720, // Set default viewport height
  screenshotOnRunFailure: true, // Enable screenshots on test failure
  video: true, // Enable video recording
  reporter: 'mochawesome', // Use Mochawesome as the test reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory for test reports
    overwrite: false, // Do not overwrite reports
    html: true, // Generate HTML reports
    json: true, // Generate JSON reports
  },
});
