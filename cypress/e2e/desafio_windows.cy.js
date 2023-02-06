describe('Teste abertura de New Windows', () => {

    beforeEach(() => {
      
      cy.viewport(2000, 1000)
      cy.acessandoPaginaForms()
  
  })
  
  it('Acessando o submenu Browser Windows', () => {
    cy.once('uncaught:exception', () => false);
    
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
    cy.get('#windowButton').invoke('removeAttr').click({ force: true });
    cy.contains('This is a sample page')
    
    }) 

})