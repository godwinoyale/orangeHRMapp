/// <reference types ="cypress" />
describe('All Login Test Cases', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  //invalid login using invalid username and valid password
  it('invalid username and valid password (TC-L-003)', () => {
    cy.fixture("orangeData").then((data) => {
        cy.get('[name="username"]').type(data.invalidUsername)
        cy.get('[name="password"]').type(data.validPassword)

    })
      cy.get('.oxd-button').click()
      //assert error message is visible
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
      cy.url().should('include', '/auth/login')
      
  })
   //invalid login using valid username and invalid password
  it('valid username and invalid password (TC-L-004)', () => {
    cy.fixture("orangeData").then((data) => {
        cy.get('[name="username"]').type(data.validUsername)
        cy.get('[name="password"]').type(data.invalidPassword)

    })
      cy.get('.oxd-button').click()
      //assert error message is visible
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
      cy.url().should('include', '/auth/login')
  })
  //invalid login using invalid username and invalid password
  it('invalid username and invalid password (TC-L-005)', () => {
    cy.fixture("orangeData").then((data) => {
      cy.get('[name="username"]').type(data.invalidUsername)
      cy.get('[name="password"]').type(data.invalidPassword)

    })
      cy.get('.oxd-button').click()
      //assert error message is visible
      cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
      cy.url().should('include', '/auth/login')
  })

   it('Empty Fields (TC-L-010)', () => {
      cy.get('.oxd-button').click()
      //assert error message is visible
      cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
      cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required')
      //cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
      cy.url().should('include', '/auth/login')
      
  })
})
   