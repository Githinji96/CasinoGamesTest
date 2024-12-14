const { search } = require("../support/Utils/access")


describe("Validate Search Functionality on Casino games",()=>{
  beforeEach(() => {
  
    cy.visit('/casino',{ failOnStatusCode: false })
    .then((response) => {
      if (response.status === 403) {
        cy.log('Access forbidden: Check server settings or credentials.');
      } else {
        cy.log('Page loaded successfully.');
      }
    });
    
    });
     
          
        
      it("Verifies that casino games search returns correct results",()=>{
        cy.viewport(1400, 800)
       
        cy.clickSearch(search.search_btn)
        cy.typeSearch(search.typeSearch)
        cy.verifyGameSearch(search.textSearch)
     
      })   
      it('Should display "No results found" when searching for a non-existent casino game',()=>{
        cy.viewport(1400, 800)
        cy.clickSearch(search.search_btn)
        cy.incorrectSearch(search.typeSearch)
        cy.InvalidInput(search.noresultstxt)
        
      })           
})