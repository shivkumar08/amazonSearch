class amazonSearchPage{

    elements = {

        iframeCookies: () => cy.getIframeBody()
         .find('#sp-cc-accept'),

      };
     
      acceptCookies(){
        this.elements.iframeCookies().click();
      }

}
module.exports = new amazonSearchPage();
      