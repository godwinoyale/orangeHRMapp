/// <reference types ="cypress" />
describe('Validate non employee search', () => {

  beforeEach(() => {
    cy.loginFixture()
  })
  it('successful login (TC-L-001)', () => {
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()
    //assert dashboard is visible after successful login
    cy.url().should('include', '/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')

    //search for non-existing employee in the employee list
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Zion')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    //assert no records found 
     cy.contains('.oxd-text--toast-message', 'No Records Found', { timeout: 10000 })
    


  })
})