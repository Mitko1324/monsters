
/// <reference types="cypress" />


describe('', () => {
    it('', () => {

        const email = Cypress.env('email')
        const password = Cypress.env('password')
        cy.visit('https://juice-shop.herokuapp.com/#/login')
        cy.get('#email').type(email)
        cy.get('#password').type(password)




        // cy.get('.subnav')
        //     .find('li')
        //     .find('a')
        //     .filter('.active')
        //     .click()


    });
});
