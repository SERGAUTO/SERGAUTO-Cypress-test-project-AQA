describe('Wikipedia Current Events Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the Current Events page', () => {
    cy.get('#vector-main-menu-dropdown-checkbox').click();

    cy.contains('Current events')
      .should('be.visible')
      .click();

    cy.url().should('include', '/wiki/Portal:Current_events');

    cy.contains('Portal:Current events').should('be.visible');

    cy.get('.p-current-events-headlines').contains('Recent deaths:').should('exist');

    cy.get('.p-current-events-calendar').should('exist');
  });
});
