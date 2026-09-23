/// <reference types="cypress" />

describe('Logout Test Cases', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('successful logout (TC-LO-001)', () => {
        cy.fixture("orangeData").then((data) => {
            cy.get('[name="username"]').type(data.validUsername)
            cy.get('[name="password"]').type(data.validPassword)

        })
        cy.get('.oxd-button').click()

        //click the user profile avater and select logout from the drop down
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        //assert login page is visible after successful logout
        cy.url().should('include', '/auth/login')
        cy.get('.orangehrm-login-branding > img').should('be.visible')

    })
})