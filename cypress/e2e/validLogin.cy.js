/// <reference types ="cypress" />
describe('All Login Test Cases', () => {

  beforeEach(() => {
    //cy.clearCookies()
    cy.visit('/')    
  })

  it('successful login (TC-L-001)', () => {
    cy.fixture("orangeData").then((data) =>{
      cy.log('username:', data.validUsername)
      cy.log('password:', data.validPassword)
      cy.get('[name="username"]').type(data.validUsername)
      cy.get('[name="password"]').type(data.validPassword)
    })
    cy.get('.oxd-button').click()
    //assert dashboard is visible after successful login
    cy.url().should('include', '/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')

  } )

})
   