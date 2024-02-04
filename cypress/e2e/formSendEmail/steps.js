

Dado(/^que o usuário preenche os campos com "([^"]*)"$/, (tipodedado) => {
	cy.preencherCampos(tipodedado)
});

Dado(/^que o usuário não preenche os campos$/, () => {
	
});


Dado(/^que o usuário preenche o campo "([^"]*)"$/, (tipodedado) => {
	cy.preencherCampos(tipodedado)

});


Quando(/^o usuário submete o formulário$/, () => {
	cy.get('#Submit').should('be.visible').click()
	
});

Entao(/^o email é enviado$/, () => {
	cy.get('#Mensagem').should('be.visible').contains("Email enviado com sucesso");
});

Entao(/^o sistema informa para o usuário os campo inválidos$/, () => {
	cy.get('#“Error”').should('be.visible').contains('Campo Name inválido.')
	cy.get('#“Error”').should('be.visible').contains('Campo Email inválido.')
	cy.get('#“Error”').should('be.visible').contains('Campo Company inválido.')
	cy.get('#“Error”').should('be.visible').contains('Campo Website inválido.')
	cy.get('#“Error”').should('be.visible').contains('Campo Phone inválido.')
	cy.get('#“Error”').should('be.visible').contains('Campo Inquiry inválido.')
});

Entao(/^o sistema deve exibir uma mensagem de erro indicando que excedeu o limite de caracteres$/, () => {
	cy.get('#Mensagem').should('be.visible').contains('Limite de caracteres excedido')
});
