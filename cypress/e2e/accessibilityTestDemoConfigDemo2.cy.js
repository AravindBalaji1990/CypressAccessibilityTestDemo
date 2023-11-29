describe('accessibility test demo', () => {
  it('accessibility test- to check for a specific element', () => {
    cy.visit('https://todomvc.com/examples/react')// this website doesnt have accessbility issue
    cy.injectAxe()
    // Run Axe accessibility checks with custom options
  cy.checkA11y('.learn');
  }),
  it('accessibility test- to check for rules that impact most', () => {
    cy.visit('https://todomvc.com/examples/react')// this website doesnt have accessbility issue
    cy.injectAxe()
    // Run Axe accessibility checks with custom options
  cy.checkA11y(null,{includedImpacts:['critical','serious']});
  }),
  it('accessibility test- to exclude for a specific rules', () => {
    cy.visit('https://todomvc.com/examples/react')// this website doesnt have accessbility issue
    cy.injectAxe()
    // Run Axe accessibility checks with custom options
  cy.checkA11y(null,{rules:{
    'color-contrast':{enabled:true}
  }});
  })

})