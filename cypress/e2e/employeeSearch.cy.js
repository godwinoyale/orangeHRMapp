/// <reference types="cypress" />
describe('All Logout Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
    })
    it('Search Employee by Name (TC-ES-001)', () => {
      // cy.get('[name="username"]').type('Admin')
      // cy.get('[name="password"]').type('admin123')
      // cy.get('.oxd-button').click()

      //click the PIM(Employee management) tab and select Employee List
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        //search employee by name and click search button
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Emily Jones')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        //assert employee is found successfully
        cy.get('.oxd-table-card > .oxd-table-row').should('have.length', 1)
        cy.get('.oxd-table-cell').eq(2) .invoke('text').then(newText => expect(newText.trim()).to.equal('Emily'))
        cy.get('.oxd-table-cell').eq(3).invoke('text').then(newText => expect(newText.trim()).to.equal('Jones'))
        
    })
  
})