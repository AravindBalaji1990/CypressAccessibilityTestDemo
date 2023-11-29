describe('accessibility test demo', () => {
  it('accessibility test', () => {
    // this has accessibility issue
    cy.visit('https://example.cypress.io')
    cy.injectAxe()
    // exclude a tag from checking 
    cy.checkA11y({
      exclude: ['.banner'],
    });
  }),
  it('accessibility test with rules', () => {
    // this has accessibility issue
    cy.visit('https://example.cypress.io')
    cy.injectAxe()
    cy.checkA11y(
      {
        exclude: ['.article-action'],
      },
      {
        rules: {
          'empty-heading': { enabled: false },
        },
      },
    );
  })
})