describe('Wikipedia Edit Capability Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the edit page for an article (if logged in)', () => {
    cy.visit('/wiki/Automation_testing');
    cy.get('#ca-edit').click();

    cy.url().should('include', 'action=edit');
  });
});
