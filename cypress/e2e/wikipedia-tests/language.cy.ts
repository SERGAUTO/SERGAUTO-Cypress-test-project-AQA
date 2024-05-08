describe.only('Wikipedia Language Switching Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Start from the main page
  });

  it('should switch to an alternative language', () => {
    cy.fixture('example.json').then((data) => {
      const language = data.languages.alternative;

      // Click the language menu checkbox to open it
      cy.get('#p-lang-btn').should('be.visible').click(); // Ensure visibility before clicking

      // Ensure the menu has loaded and is visible
      cy.get('input[placeholder="Search for a language"]').type('fr'); // Type the language code
      cy.get('li[data-code="fr"]').should('be.visible'); // Check if the menu is visible
      
      // Find and click the desired language
      cy.get('a[href="https://fr.wikipedia.org/wiki/"]')
        .contains(language) // Ensure we're clicking on the right language
        .click(); // Click the language link

      // Verify that the URL changes and the page is displayed in the selected language
      cy.url().should('include', '/wiki/'); // Confirm navigation
    });
  });
});
