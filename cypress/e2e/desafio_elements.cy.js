describe('Teste desafio elements', () => {

    beforeEach(() => {
      
      cy.viewport(2000, 1000)
      cy.acessandoPaginaForms()
  
  })
  
  it('Acessando o submenu Web Tables  ', () => {
    cy.once('uncaught:exception', () => false);
    cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    cy.get('#addNewRecordButton').click()
    cy.wait(1000)
    cy.get('#firstName').type('George')
    cy.get('#lastName').type('Tada')
    cy.get('#userEmail').type('george@hotmail.com')
    cy.get('#age').type('41')
    cy.get('#salary').type('1000')
    cy.get('#department').type('TI')
    cy.get('#submit').click()
    cy.wait(1000)
    cy.get('#edit-record-4').click()
    cy.get('#age').clear().type('41')
    cy.get('#submit').click()
    cy.get('#delete-record-4').click()
    
    }) 

})