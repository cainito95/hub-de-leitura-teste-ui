/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no hub de leitura', () => {
    
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Yuri Cainã')
        cy.get('#email').type(email)
        cy.get('#phone').type('1198765674')
        cy.get('#password').type('testeteste2')
        cy.get('#confirm-password').type('testeteste2')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        
    });

        it('Deve fazer cadastro com sucesso, usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1198765674')
        cy.get('#password').type('testeteste2')
        cy.get('#confirm-password').type('testeteste2')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });


});