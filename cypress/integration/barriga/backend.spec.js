///<reference types="cypress" />
import '../../support/commands'




describe('Should Test at a functional level ', () => {
   let token
    before(() => {
        cy.getToken('tgsouza89@gmail.com', 'ti01de02')
        .then(tkn => {
            token = tkn
        })

  
    })

    beforeEach(() =>{
        cy.resetRest()

    })

    it('Should creater an account', () => {
      
     
        cy.request({
            url: '/contas',
            method: 'POST',
            headers:{Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta via resttt'   
    
            }
          }).as('response')
        
      
       cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via resttt')
       })
        
    })



    it('Should update an account', () => {

        cy.request({
            method: 'GET',
            url: '/contas',
            headers:{Authorization: `JWT ${token}`},
            qs: {
                nome: 'Conta para alterar'
            }

        }).then(res => {
            cy.request({

                url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
                method: 'PUT',
                headers:{Authorization: `JWT ${token}`},
                body: {
                   nome: 'conta alterada via rest'
                }
        
        
             }).as('response')

        })
  

      cy.get('@response').its('status').should('be.equal', 200)
       
    })


    it('Should not create an account with same name', () =>{

        cy.request({
            url: '/contas',
            method: 'POST',
            headers:{Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta mesmo nome'   
    
            },
            failOnStatusCode: false
          }).as('response')
        
      
       cy.get('@response').then(res => {
            expect(res.status).to.be.equal(400)            
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
       })


    })



    it('Should create a transaction', () =>{
        cy.getContaByName('Conta para movimentacoes')
        .then(contId => {
            cy.request({
                method: 'POST',
                url: '/transacoes',
                headers:{Authorization: `JWT ${token}`},
                body: {
                    conta_id: contId,
                    data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                    data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                    descricao: "desc",
                    envolvido: "inter",
                    status: true,
                    tipo: "REC",
                    valor: "123"
    
                    
    
                }
            }).as('response')

        })
  
        cy.get('@response').its('status').should('be.equal', 201) 
        cy.get('@response').its('body.id').should('exist', 201)        

    })
    it('Should get balace', () =>{
        cy.request({
            url: '/saldo',
            method: 'GET',
            headers:{Authorization: `JWT ${token}`}

        }).then(res=> {
            let saldoConta = null
            res.body.forEach(c =>{
                if(c.conta === 'Conta para saldo') saldoConta = c.saldo
            })
            expect(saldoConta).to.be.equal('534.00')
        })
  
    })
    it('Should remova a transaction', () =>{
        cy.request({
            method: 'GET',
            url: '/transacoes',
            headers:{Authorization: `JWT ${token}`},
            qs: { descricao: 'Movimentacao para exclusao'}           

        }).then(res => {
            cy.request({

                url: `/transacoes/${res.body[0].id}`,
                method: 'DELETE',
                headers:{Authorization: `JWT ${token}`}
            }).its('status').should('be.equal', 204)

        })
      
            

    })
})


