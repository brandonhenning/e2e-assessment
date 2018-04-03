describe('Kitchen Sink', function () {
    it('do something', function () {
      cy.visit('http://localhost:3000')
      cy.get('main > section > ul > li').should('have.length', 4)

      cy.get('form > input').eq(0).should('be.empty')
      cy.get('form > input').eq(1).should('be.empty')
      cy.get('form > textarea').should('be.empty')

      cy.get('form > input').eq(0).type('Job Title')
      cy.get('form > input').eq(1).type('Pay')
      cy.get('form > textarea').type('Description')

      cy.get('form > input').eq(2).click()

      cy.get('form > input').eq(0).should('be.empty')
      cy.get('form > input').eq(1).should('be.empty')
      cy.get('form > textarea').should('be.empty')

      cy.get('main > section > ul > li').eq(0).should('exist')
      cy.get('main > section > ul > li').eq(0).as('top-posting')

      cy.get('@top-posting').get('h4').eq(0).should('have.text', 'Job Title')
      cy.get('@top-posting').get('small').eq(0).should('have.text', 'Pay')
      cy.get('@top-posting').get('p').eq(0).should('have.text', 'Description')
      cy.get('@top-posting').get('small').eq(1).should('have.text', '0 dinos are interested in this job')
    })
})