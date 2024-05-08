const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://en.wikipedia.org',
    setupNodeEvents(on, config) {
      on('task', {
        logMessage(message) {
          console.log(message);
          return null;
        },
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  screenshotOnRunFailure: true,
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
