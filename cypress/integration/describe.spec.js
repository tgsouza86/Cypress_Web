/// <reference types="cypress" />

it('A external test..', () => {

})

describe.skip('Should group test... ', () => {
    describe('Should group more specific tests ...', () =>{
        it.skip('A specific test..', () => {

        })     
    })
    describe('Should group more specific tests ...', () =>{
        it('A specific test..', () => {

        })     
    })
    
    it('A internal test..', () => {

    })  
})
