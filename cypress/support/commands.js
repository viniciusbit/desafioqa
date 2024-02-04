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



const preencherCampos = (tipodedado) {
	cy.fixture('dados').then(u => {
		let dados = d.dados.find((c: {tipodedado}) => c.tipodedado === tipodedado);

	cy.get('#Name').should('be.visible').type(dados.name)
	cy.get('#Email').should('be.visible').type(dados.email)
	cy.get('#Company').should('be.visible').type(dados.company)
	cy.get('#Website').should('be.visible').type(dados.website)
	cy.get('#Phone').should('be.visible').type(dados.phone)
	cy.get('#Inquiry').should('be.visible').type(dados.inquiry)
	
	})
};

Cypress.Commands.add('preencherCampos', preencherCampos);
