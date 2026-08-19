describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Yuri Cainã Menezes de Oliveira')
    cy.get('[name="email"]').type('yuri@teste.com.br')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Testando 123 testando 123')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('yuri@teste.com.br')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Testando 123 testando 123')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher e-mail', () => {
    cy.get('[name="name"]').type('Yuri Cainã Menezes de Oliveira')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').type('Testando 123 testando 123')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Yuri Cainã Menezes de Oliveira')
    cy.get('[name="email"]').type('yuri@teste.com.br')
    cy.get('[name="message"]').type('Testando 123 testando 123')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  });

    it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Yuri Cainã Menezes de Oliveira')
    cy.get('[name="email"]').type('yuri@teste.com.br')
    cy.get('[name="subject"]').select('Suporte Técnico')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });




});