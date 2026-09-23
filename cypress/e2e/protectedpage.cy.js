/// <reference types="cypress" />

describe('Protected Page Test', () => {
    beforeEach(() => {
        cy.loginFixture()
    })
    it('successful logout (TC-LO-003)', () => {
        // cy.get('[name="username"]').type('Admin')
        // cy.get('[name="password"]').type('admin123')
        // cy.get('.oxd-button').click()

        //click the user profile avater and select logout from the drop down
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        //assert login page is visible after successful logout
        cy.url().should('include', '/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')

        //visit the dashboard page after logout and assert user is redirected to login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.url().should('include', '/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')

    })
})