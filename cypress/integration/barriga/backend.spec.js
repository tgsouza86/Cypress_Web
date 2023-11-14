///<reference types="cypress" />




describe('Should Test at a functional level ', () => {
   
    before(() => {
   //     cy.login('tgsouza89@gmail.com', 'ti01de02')
    //    cy.resetApp()
      //  cy.visit('https://barrigareact.wcaquino.me/') 
      //  cy.get(loc.LOGIN.USER).type('tgsouza89@gmail.com')
      //  cy.get(loc.LOGIN.PASSWORD).type('ti01de02')
      //  cy.get(loc.LOGIN.BTN_LOGIN).click()
      //  cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })

    it('Should creater an account', () => {
      cy.request({
           method: 'POST',
           url: 'https://barrigarest.wcaquino.me/signin',
           body: {
               email: "tgsouza89@gmail.com",
               redirecionar: false,
                senha:"ti01de02"
           }

       }).its('body.token').should('not.be.empty')
       .then(token => {
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers:{Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta via rest'   
    
            }
          }). then(res => console.log(res))
        
       }) 
        
    })



    it('Should update an account', () => {
       // cy.get(':nth-child(3) > :nth-child(2) > .fa-edit')
       
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


