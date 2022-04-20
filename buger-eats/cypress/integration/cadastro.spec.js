describe('Cadastro', () => {
    it('Usuario deve se tornar um entregador',() => {
        cy.viewport(1440,900);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('a[href="/deliver"]').click();

        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

        var entregador = {
            name:'joao pedro',
            cpf:'00000011101',
            email:'richard.emp@gmail.com',
            whatsapp:'11954322252',
            endereco:{
                cep:'00001000',
                rua:'rua tal',
                numero:'1000',
                complemento:'ap 142',
                bairro:'itaim bibi',
                cidade_uf:'São Paulo/SP'
            }
        }

        cy.get('input[name="name"]').type(entregador.name);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[name="email"]').type(entregador.email);
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp);

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
        cy.get('input[name="address"]').type(entregador.endereco.rua);
        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento);
        cy.get('input[name="district"]').type(entregador.endereco.bairro);
        cy.get('input[name="city-uf"]').type(entregador.endereco.cidade_uf);

    })
})