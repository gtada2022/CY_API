/// <reference types="Cypress" />
describe('Test E2E login sucess', () => {

  beforeEach(() => {
    
    cy.viewport(2000, 1000)
    cy.acessandoPaginaForms()

})
  

    it('Acessando o submenu Pratice Form e preenchendo os campos', () => {
    
      cy.once('uncaught:exception', () => false);
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
      cy.get('.practice-form-wrapper').should('be.visible')
      cy.get('#firstName').type('George')
      cy.get('#lastName').type('Tada')
      cy.get('#userEmail').type('george.tada@hotmail.com')
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
      cy.get('#userNumber').type('14997242935')
      cy.get('#dateOfBirthInput').click()
      cy.wait(1000)
      cy.get('.react-datepicker__month-select').select('November')
      cy.get('.react-datepicker__year-select').select('1981')
      cy.get(':nth-child(2) > .react-datepicker__day--012').click()
      cy.wait(1000)
      cy.get('.subjects-auto-complete__value-container')
      .click()
      .type('Accounting{downarrow}{enter}',{ delay:100})
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click() 
      cy.get('#uploadPicture')
      .selectFile('./teste_acc.txt')
      cy.get('#currentAddress').type("teste endereço")
      cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
      .click()
      .type('Uttar Pradesh{downarrow}{enter}',{ delay:100})
      cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .click()
      .type('Agra{downarrow}{enter}',{ delay:100})
      cy.get('#submit').click()
      cy.get('.modal-header').should('be.visible')  
      cy.get('#closeLargeModal').click() 

  
    })
  
        
     
    })