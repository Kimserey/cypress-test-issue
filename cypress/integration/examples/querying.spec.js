/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('cy.get() - query DOM elements', () => {
    let x = [...Array(100).keys()].map(x => x + "");

    cy.server()
        .route({
            method: 'POST',
            url: '/api/logout',
            status: 200,
            response: {},
            headers: {
              'set-cookie': 'csrf_access_token='
            }
        });

    cy.get('[data-cy=logoutButton]').click();

    cy.get('[data-cy=landmark]').invoke('text').should('contain', 'Welcome')
  })
})
