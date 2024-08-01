/// <reference types="Cypress" />

describe('Testes de Cadastro Marca', () => {
  it('Automatizar o processo de login', () => {
    cy.loginAvalon()
    cy.get(':nth-child(1) > .card-rede > .card-rede-name').click()
    cy.get('.btn--primary > span').click()
    cy.get('input[class="form-control"],[placeholder="Buscar (Ctrl + K)"]').type('marca')
    cy.get('.label-page').click()
    cy.get('vr-nav-button-add > .main-nav-action__btn--container > vrc-icon > .vr').click()
    cy.get('input[placeholder="Descrição"]').type('Teste QA [Avalon Nadotti]')
    cy.get('button[type="submit"]').click()
    cy.get('input[class="form-control"],[placeholder="Buscar (Ctrl + K)"]').type('marca')
    cy.get('.label-page').click()
    cy.get('#descricao').type('Teste QA [Avalon Nadotti]')
    cy.get('span[title="Teste QA [Avalon Nadotti]"').should('be.visible')

  })
})