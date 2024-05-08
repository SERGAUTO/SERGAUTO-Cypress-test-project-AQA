describe.only('Wikipedia Language Switching Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should switch to an alternative language', () => {
    cy.fixture('testData.json').then((data) => {
      const language = data.languages.alternative;

      cy.get('#p-lang-btn').should('be.visible').click();

      cy.get('input[placeholder="Search for a language"]').type('fr');
      cy.get('li[data-code="fr"]').should('be.visible');
      
      cy.get('a[href="https://fr.wikipedia.org/wiki/"]')
        .contains(language)
        .click();

      cy.url().should('include', '/wiki/');
    });
  });
});
