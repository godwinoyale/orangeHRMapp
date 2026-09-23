/// <reference types="cypress" />
describe('Add Employee Test Cases', () => {
  beforeEach(() => {
    cy.loginFixture()
    })

    it('Add User/Employee First', () => {
    // cy.get('[name="username"]').type('Admin')
    // cy.get('[name="password"]').type('admin123')
    // cy.get('.oxd-button').click()

    //click the PIM(Employee management) tab and select Add Employee
    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    //Click on Add Employee button using contains to avoid using absolute selectors which may change
    //cy.contains('button', 'Add Employee').click()
    //cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    //fill employee details and click save 
    cy.get('[name="firstName"]').type('Joy')
    cy.get('[name="lastName"]').type('John')
    //upload employee image from fixture folder
     cy.get('input[type="file"]').selectFile('cypress/fixtures/emPass.jpg', { force: true });
    cy.wait(2000)
    //clear the input before typing employee id
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('09991')
    cy.get('.oxd-switch-input').click()
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('joyjohn')
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('joyjohn@123')
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('joyjohn@123')
    cy.get('.oxd-button--secondary').click()

    //assert employee is added successfully
    cy.contains('.oxd-text--toast-message', 'Successfully Saved', { timeout: 10000 })


    //search for the added user and verify if the user exist using username
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-filter-area .oxd-input-group')
  .eq(0)
  .find('input')
  .type('joyjohn')

    //cy.get(':nth-child(1) > .oxd-input-group').type('goddyjames')
      cy.contains('button', 'Search').click()

      //confirm if Ray John is found in the search results
        cy.get('.oxd-table-card > .oxd-table-row').should('have.length', 1)
        cy.get('.oxd-table-cell').eq(1) .invoke('text').then(newText => expect(newText.trim()).to.equal('joyjohn'))

    
  })
    
})
