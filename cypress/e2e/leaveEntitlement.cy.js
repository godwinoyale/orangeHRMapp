/// <reference types="cypress" />

describe('Leave Module Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
  })

  it('Access to Leave/Add Leave Entitlement (TC-LM-001)', () => {
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()

    //click the PIM(Employee management) tab and select Add Employee target the PIM specifically
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    //cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    //Click on Add Employee button
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    //fill employee details and click save
    cy.get('[name="firstName"]').type('Ray')
    cy.get('[name="lastName"]').type('John')
    //upload employee image from fixture folder
     cy.get('input[type="file"]').selectFile('cypress/fixtures/emPass.jpg', { force: true });
    cy.wait(2000)
    //clear the input before typing employee id
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('08991')
    cy.get('.oxd-switch-input').click()
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('goddyjames')
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('rayjohn@123')
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('rayjohn@123')
    cy.get('.oxd-button--secondary').click()

    //assert employee is added successfully
    cy.contains('.oxd-text--toast-message', 'Successfully Saved', { timeout: 10000 })

    //select Leave module from the left navigation bar targeting the leave module using its text to avoid using absolute selectors which may change
    cy.contains('a', 'Leave').click()
    //Click on Entitlements tab targeting only the entitlements tab using its text to avoid using absolute selectors which may change
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
    //select Add Entitlements from the dropdown
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    //fill the Add Leave Entitlement form and click save
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
  //target the employee name input field only
    cy.get('.oxd-autocomplete-text-input > input').type('Ray John')
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    cy.wait(2000)
    //target the leave type dropdown only use contain for the leve type to avoid using absolute selectors which may change
    // cy.contains('div', 'Leave Type').click()
    // cy.contains('li', 'CAN - Bereavement').click()
    // cy.get('.oxd-input').type('10')

    cy.contains('.oxd-input-group', 'Leave Type')
  .find('.oxd-select-text')
  .click()

    cy.get('.oxd-select-dropdown')
  .contains('.oxd-select-option', 'CAN - Bereavement')
  .click()

  cy.contains('.oxd-input-group', 'Entitlement')
  .find('input')
  .type('10')
    cy.get('.oxd-button--secondary').click()
    //press the confirm button on the confirmation modal for successful update
    cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click()
  }) 

  
    
})