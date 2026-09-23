/// <reference types="cypress" />
describe('Add Employee Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
    })

    it('Ess Dashboard (TC-EM-002)', () => {
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

    //logout and login again to confirm ESS user can access the dashboard and view the ESS module
    //click the user profile avater and select logout from the drop down
        // cy.get('.oxd-userdropdown-tab').click()
        // cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        // //assert login page is visible after successful logout
        // cy.url().should('include', '/auth/login')
        // cy.get('.orangehrm-login-branding > img').should('be.visible')

    })

    //Login as ESS user and confirm the ESS module is accessible and visible on the dashboard
    it('ESS user can access the dashboard and view the ESS module (TC-D-003)', () => {
      // log out of Admin session first
    cy.get('.oxd-userdropdown-tab').click()
    cy.contains('.oxd-userdropdown-link', 'Logout').click()
    cy.get('[name="username"]').clear().type('goddyjames')
    cy.get('[name="password"]').clear().type('rayjohn@123')
    cy.get('.oxd-button').click()

    //confimm the ESS module is visible on the dashboard by checking for presence of Leave module, and absence of Admin on the navigation bar
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('contain.text', 'Leave')
    cy.get(':nth-child(2) > .oxd-main-menu-item').should('not.contain.text', 'Admin')
    })

})
