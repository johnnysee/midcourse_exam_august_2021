describe('Application main view', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('is expected to contain a titel', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });

  it('is expected to contain a button search', () => {
    cy.get('[data-cy=button]').should("contain", "Search")
  })

  it('is expected to contain an input field', () => {
    cy.get('[data-cy=input]').should("be.visible")
  })
});