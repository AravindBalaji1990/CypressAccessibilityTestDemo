describe('accessibility test demo', () => {
  it('accessibility test', () => {
    cy.visit('https://timdeschryver.dev/')// this website doesnt have accessbility issue
    cy.injectAxe()
    const axeOptions = {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
      rules: {
        'color-contrast': { enabled: false },
        'aria-allowed-attr': { enabled: true },
      },
    };

    // Run Axe accessibility checks with custom options
  cy.checkA11y(axeOptions);
  })
})