const { registration } = require("../support/Utils/access")
import generateUserData from '../support/Utils/faker';


describe("Registration Process",()=>{
  const userData = generateUserData();
  beforeEach(()=>{
    cy.visit('/',{ failOnStatusCode: false }) 
    .then((response) => {
      if (response.status === 403) {
        cy.log('Access forbidden: Check server settings or credentials.');
      } else {
        cy.log('Page loaded successfully.');
      }
    });
  })

   it('Should register a new user',()=>{
     cy.SignupBtn(registration.signupbtn)
     cy.EnterUsername(registration.usernamefield, userData.username)
     cy.EnterEmailAddress(registration.emailaddress, userData.email)
     cy.selectCountry(registration.country)
     cy.ChooseCountry(registration.choosecountry)
     cy.SelectCurrency(registration.currency)
     cy.ChooseCurrency(registration.currencyType)
     cy.EnterPassword(registration.password, userData.password)
     cy.EnterDateOfBirth(registration.DOBText,userData.dateOfBirth.day)
     cy.EnterMonthOfBirth(registration.MOBText,userData.dateOfBirth.month)
     cy.EnterYearOfBirth(registration.YOBText, userData.dateOfBirth.year)
     cy.EnterPhoneNumber(registration.MobileContact, userData.num)
     cy.EnterPromoCode(registration.promoCode)
     cy.clickCheckBtn1(registration.checkbtn1)
     cy.clickCheckbtn2(registration.checkbtn2)
     cy.clickRegisterbtn(registration.registerbtn)
  })
})
 