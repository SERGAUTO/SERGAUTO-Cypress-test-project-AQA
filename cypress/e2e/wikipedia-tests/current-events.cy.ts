describe('Wikipedia Current Events Page Test', () => {
  // Visit the Wikipedia homepage before each test
  beforeEach(() => {
    cy.visit('/'); // Wikipedia's homepage
  });

  it('should navigate to the Current Events page', () => {
    cy.get('#vector-main-menu-dropdown-checkbox').click();
    // Find and click the "Current events" link
    cy.contains('Current events')
      .should('be.visible') // Ensure the link is visible
      .click(); // Click to navigate to the Current Events page

    // Validate that the URL changes to the Current Events page
    cy.url().should('include', '/wiki/Portal:Current_events'); // Check the URL

    // Confirm the correct page title
    cy.contains('Portal:Current events').should('be.visible'); // Check for the title

    // Ensure there's content indicating recent news
    cy.get('.p-current-events-headlines').contains('Recent deaths:').should('exist'); // Check for news section

    // Optionally, check for the presence of a calendar or other navigation options
    cy.get('.p-current-events-calendar').should('exist'); // Verify the presence of a calendar
  });
});
