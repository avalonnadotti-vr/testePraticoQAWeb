
Cypress.Commands.add('loginAvalon', ()=>{
    const user  = 'avalon.nadotti@vrsoft.com.br'
    const password = '@@Aavalonnadotti123'

    cy.visit('https://demo.vrsoft.com.br/login')
    cy.get('input[placeholder="E-mail"]').type(user)
    cy.get('input[type="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.get('.login-title-header').should('be.visible',{setTimeout: 10})
    

})

