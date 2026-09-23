/// <reference types="cypress" />
describe('All Logout Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
  })
  it('Employee Details (TC-EM-007', () => {
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()

    //click the PIM(Employee management) tab and select Employee List
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.oxd-table-card > .oxd-table-row').first().click()

    //assert employee details are visible
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details')
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('be.visible')
    
  })
})