

const casinoSearch="spinbet princess"
const text ="Play SpinBet Princess | Spinbet Casino"
const InCorrectInput= "InvalidGames"

//Registration 
Cypress.Commands.add('SignupBtn', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('EnterUsername', (selector,username) => {
    cy.get(selector)
        .type(username)
})
Cypress.Commands.add('EnterEmailAddress', (selector,email) => {
    cy.get(selector)
        .type(email)
})
Cypress.Commands.add('selectCountry', (selector) => {
    cy.get(selector)
        .click({force:true})
})
Cypress.Commands.add('ChooseCountry', (selector) => {
    cy.get(selector)
        .click()
})
Cypress.Commands.add('SelectCurrency', (selector) => {
    cy.get(selector)
        .click({force:true})
})
Cypress.Commands.add('ChooseCurrency', (selector) => {
    cy.get(selector)
        .click()
})
Cypress.Commands.add('EnterPassword', (selector, password) => {
    cy.get(selector)
        .type(password)
})
Cypress.Commands.add('EnterDateOfBirth', (selector,chooseday) => {
    cy.get(selector)
        .type(chooseday)
})
Cypress.Commands.add('EnterMonthOfBirth', (selector, choosemonth) => {
    cy.get(selector)
        .type(choosemonth)
})
Cypress.Commands.add('EnterYearOfBirth', (selector, chooseYear) => {
    cy.get(selector)
        .type(chooseYear)
})
Cypress.Commands.add('EnterPhoneNumber', (selector,contact) => {
    cy.get(selector)
        .type(contact)
})
Cypress.Commands.add('EnterPromoCode', (selector) => {
    cy.get(selector)
        .type('86548978900987')
})
Cypress.Commands.add('clickCheckBtn1', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickCheckbtn2', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickRegisterbtn', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickRegisterbtn', (selector) => {
    cy.get(selector)
        .should('be.visible')
        .click()
})
// search casino games

Cypress.Commands.add('clickSearch', (selector) => {
    cy.get(selector)
    .click()
})
Cypress.Commands.add('typeSearch', (selector) => {
    cy.get(selector)
    .should('be.visible')
    .type(casinoSearch)
})
Cypress.Commands.add('incorrectSearch', (selector) => {
    cy.get(selector)
    .should('be.visible')
    .type(InCorrectInput)
})
Cypress.Commands.add('InvalidInput', (selector) => {
    cy.get(selector)
    .should('be.visible')
    .and('contain.text', 'No results found'); 
  
})
Cypress.Commands.add('verifyGameSearch', (selector) => {
    cy.get(selector). then((elem) => {
   // Get the alt attribute  to compare
     const altText = elem.attr('alt'); 
        cy.log(altText);
      // Assert that the alt text is equal to "princess win"
        expect(altText).to.equal(text);
        });
       })