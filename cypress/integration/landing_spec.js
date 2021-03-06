//SIBYL
describe('Landing Page Test', function() {
   
    it('Should contain landing video', function() {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('<')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
        })
        cy.get('.NoUser').find('video')
        
    })

    it('How To Button is Found', function() {
        cy.visit('/')
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('<')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
        })
        cy.get('.no-user-landing').find('.howTo-button')
 })

 it('Login Button is found', function() {
    cy.visit('/')
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('<')
    
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()
    
        // return false to prevent the error from
        // failing this test
        return false
    })
    cy.get('.no-user-landing').find('.login-button')
})

}) 