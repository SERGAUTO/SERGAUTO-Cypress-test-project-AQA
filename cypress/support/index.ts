/// <reference types="cypress" />

// Import commands.js to add custom commands or global configurations
import './commands';

// This file is automatically loaded before your test files.
// Use it to set up common configurations, custom commands, or event handlers.

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions.
  // You might want to customize this to ignore specific exceptions.
  // Return false to prevent the error from failing the test.
  
  // Example: Ignore specific errors (if they are known and not critical)
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false; // Ignore ResizeObserver errors
  }

  // Otherwise, you can return true to let the test fail
  return false;
});

// Other event handlers or configurations can be set up here
