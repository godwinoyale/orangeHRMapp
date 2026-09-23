// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//using fixtures to store the login credentials and use it in the login command
Cypress.Commands.add('loginFixture', ()=>{
    cy.visit('/')
    cy.fixture("orangeData").then((data)=>{
        cy.get('[name="username"]').type(data.validUsername, {log: false})
        cy.get('[name="password"]').type(data.validPassword, {log: false} )
        cy.get('.oxd-button').click()
    })
})