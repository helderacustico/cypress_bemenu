    
it('test', () => {
    cy.viewport(1600, 880)
    
    // acessa a pagina
    cy.visit("https://bemenu.app/paobom")
    
    // localiza o primeiro produto da lista
    cy.get(':nth-child(2) > .rowCat > .slides-md > .swiper-wrapper > .swiper-slide > .card3').click()

    cy.get(':nth-child(2) > .rowCat > .slides-md > .swiper-wrapper > .swiper-slide > .card3 > .cardDescricao > .t1')
        .invoke('text').then(($value_1) => {
            cy.log($value_1)
        })    

    
    // seleciona incremento no intem do modal
    cy.get(':nth-child(4) > .ng-untouched').click()
    
    cy.get('.botoes > ion-row.md > .md').click()

    cy.get('.botoes > ion-row.md > .md').click()

    cy.get(':nth-child(2) > .alert-button-inner').click()
    
    //informa telefone
    cy.get('input[type="tel"]')
        .click()
        .wait(1000)
        .type('3741658978')

    cy.get('.botoes > .md').click()

    //informa nome
    cy.get('input[type="text"]')
        .click()
        .wait(1000)
        .type('Helder Soares')
    
    cy.get('.botoes > .md').click()

    cy.get('.confirmarPedido').click()

    //adiciona enderaço
    
    cy.get(':nth-child(5) > .botoesCabecalho > .button > div').click()

    //novo endereço
    cy.get('#ion-overlay-7 > .modal-wrapper > .ion-page > ion-content.md > .cabecalhoBtn > .botoes > .md').click()

    cy.get(':nth-child(2) > .input > .ng-untouched > .native-input').type('meu novo endereço')

    cy.get(':nth-child(3) > .input > .ng-untouched > .native-input').type('Rua da Pituba')
    cy.get(':nth-child(4) > .input > .ng-untouched > .native-input').type('108')
    cy.get('.ionic-selectable-cover').click()
    cy.get('.toolbar-searchbar > .ng-untouched > .searchbar-input-container > .searchbar-input').type('Bela Vista')
    cy.get('.ionic-selectable-group > :nth-child(1) > .sc-ion-label-md-h').click()



   

    
    

    
})
    
