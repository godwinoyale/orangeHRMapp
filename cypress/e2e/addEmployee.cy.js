/// <reference types="cypress" />
describe('Add Employee Test Cases', () => {
  beforeEach(() => {
    //cy.visit('/')
    cy.loginFixture()
    })

    it('Add Employee (TC-EM-002)', () => {
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()

    //click the PIM(Employee management) tab and select Add Employee
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
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

    })
})
