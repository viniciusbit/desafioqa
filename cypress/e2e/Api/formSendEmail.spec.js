

describe('Envio de Email',() => {
    it('',('Deve retornar sucesso') => {
        cy.request('POST', 'https://formsendemailpagbrasil.com.br',{
            "name": "teste QA 1",
            "email": "teste@email.com",
            "company": "Comapany Valido",
            "website": "Website Valido",
            "phone": "(51) 95555-5555",
            "inquiry": "Inquiry 1"
        } ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.sucesso).to.be.true
        })
    });

    it('',('Deve retornar erro e informar que o campo name é inválido') => {
        cy.request('POST', 'https://formsendemailpagbrasil.com.br',{
            "email": "teste@email.com",
            "company": "Comapany Valido",
            "website": "Website Valido",
            "phone": "(51) 95555-5555",
            "inquiry": "Inquiry 1"
        } ).then((response) => {
            expect(response.status).to.eq(412)
            expect(response.body.sucesso).to.be.false
            expect(response.body.erro).contains('Campo name inválido.')
        })
    });

})