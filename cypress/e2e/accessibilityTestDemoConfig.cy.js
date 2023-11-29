describe('accessibility test demo', () => {
  it('accessibility test', () => {
    cy.visit('https://timdeschryver.dev/')// this website doesnt have accessbility issue
    cy.injectAxe()
    cy.checkA11y()
  })
})