/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';


describe('Funcionalidade: Cadastro no hub de leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
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

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({ sex: 'male' })
        cy.preencherCadastro(
            nome,
            email,
            '1198765674',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Yuri Cainã', email, '4823412312', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('', email, '4823412312', 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher email', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Yuri Cainã','e', '4823412312', 'senha123', 'senha123')
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
    });
});