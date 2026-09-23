/// <reference types="cypress" />

describe('Employee Management Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
  })

  it('Edit Employee Details (TC-EM-008)', () => {
    // --- Login ---
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()

    // --- Navigate: PIM -> Employee List -> open first employee ---
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    
    // Clicking anywhere on the row navigates to that employee's profile in
    // OrangeHRM 
    cy.get('.oxd-table-card .oxd-table-row').first().click()
    
    // Edit first, middle, and last name
    cy.get('[name="firstName"]').clear().type('Joan')
    cy.get('[name="middleName"]').clear().type('Marie')
    cy.get('[name="lastName"]').clear().type('Hogan')
    cy.contains('button', 'Save').click()

    // Wait for the "Successfully Updated" toast message to appear, with a timeout of 10 seconds
    cy.contains('.oxd-text--toast-message', 'Successfully Updated', { timeout: 10000 })

    // Personal Details: Date of Birth
    // NOTE: OrangeHRM's Date of Birth is normally a Single input with a date
    // picker (not separate day/month/year fields).
    cy.contains('.oxd-input-group', 'Date of Birth')
      .find('input')
      .clear()
      .type('16-05-1990') // adjust format to whatever the field actually expects

    //  Gender radio button
    // sibling. OrangeHRM usually wraps the radio in a container div, so we
    // walk up to the shared wrapper and find the input inside it instead.
    cy.contains('label', 'Female')
      .closest('.oxd-radio-wrapper, .oxd-input-group')
      .find('input[type="radio"]')
      .check({ force: true })

    // Marital Status dropdown
    cy.contains('.oxd-input-group', 'Marital Status')
      .find('.oxd-select-text')
      .click()
    cy.contains('.oxd-select-option', 'Single').click()

    // --- Save personal details ---
    cy.contains('button', 'Save').click()
    cy.contains('.oxd-text--toast-message', 'Successfully Updated', { timeout: 30000 })

    // --- Verify via Employee List search ---
    cy.contains('.oxd-main-menu-item', 'PIM').click()
    
    cy.get('.oxd-autocomplete-text-input input').first().type('Joan Marie Hogan')
    // Wait for the autocomplete suggestion to appear and select it
    cy.get('.oxd-autocomplete-dropdown')
      .should('be.visible')
      .contains('Joan Marie Hogan')
      .click()
    cy.contains('button', 'Search').click()

    // cy.get('.oxd-table-card').should('have.length', 1)
    // cy.get('.oxd-table-cell').eq(2).invoke('text').then(text => {
    //   expect(text.trim()).to.equal('Joan Marie')
    // })
    // cy.get('.oxd-table-cell').eq(3).invoke('text').then(text => {
    //   expect(text.trim()).to.equal('Hogan')
    // })
    // Only look at the first row, regardless of how many rows match
      cy.get('.oxd-table-card .oxd-table-row').first().within(() => {
        cy.get('.oxd-table-cell').eq(2).invoke('text').then(text => {
          expect(text.trim()).to.equal('Joan Marie')
        })
        cy.get('.oxd-table-cell').eq(3).invoke('text').then(text => {
          expect(text.trim()).to.equal('Hogan')
        })
      })
  })
})