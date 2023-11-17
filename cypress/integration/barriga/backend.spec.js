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


    })



    it('Should create a transaction', () =>{
       

    })
    it('Should get balace', () =>{
  
    })
    it('Should remova a transaction', () =>{
      
            

    })
})


