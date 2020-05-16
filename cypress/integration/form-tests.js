

describe('name', function() {
    it('selects name input and types a name', function() {
        cy.visit("http://localhost:3000/pizza")
        cy.get("#name").type("Cris")
    })
})

describe('select multiple toppings', function() {
    it('see if we can select multiple toppings', function() {
        cy.visit("http://localhost:3000/pizza")
        cy.get("#pepperoni").click()
        cy.get("#sausage").click()
        cy.get("#bacon").click()
    })
})

describe('can submit', function() {
    it('see if we can submit the form', function() {
        cy.visit("http://localhost:3000/pizza")
        cy.get("#submit").click()
    })
})