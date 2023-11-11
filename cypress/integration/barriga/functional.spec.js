///<reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Should Test at a functional level ', () => {
   
    before(() => {
        cy.login('tgsouza89@gmail.com', 'ti01de02')
        cy.resetApp()
      //  cy.visit('https://barrigareact.wcaquino.me/') 
      //  cy.get(loc.LOGIN.USER).type('tgsouza89@gmail.com')
      //  cy.get(loc.LOGIN.PASSWORD).type('ti01de02')
      //  cy.get(loc.LOGIN.BTN_LOGIN).click()
      //  cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })

    it('Should creater an account', () => {
        cy.acessarMenuConta()
       cy.inserirConta()
      //  cy.get(loc.MENU.SETTINGS).click()
      //  cy.get(loc.MENU.CONTAS).click()



     //   cy.get(loc.CONTAS.NOME).type('Conta de teste Tiago')
     //   cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })



    it('Should update an account', () => {
       // cy.get(':nth-child(3) > :nth-child(2) > .fa-edit')
       cy.acessarMenuConta()
     //  cy.get(loc.MENU.SETTINGS).click()
      // cy.get(loc.MENU.CONTAS).click()
       cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
       cy.get(loc.CONTAS.NOME)
        .clear()
        .type('Conta alterada')
       cy.get(loc.CONTAS.BTN_SALVAR).click()
       cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso') 
    })
})
