import { Given,And,When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";
const amazonSearchPage = require("../../pages/amazonSearchPage")

Given("The use visits amazon.co.uk", () => {
  cy.visit("https://www.amazon.co.uk");
});

And("the user accepts cookies", () => {
  amazonSearchPage.acceptCookies();
 });

When("the user searches for Samsung Mobile phones", () => {
  cy.get('#nav-hamburger-menu').click({force: true});
  //cy.get('.hm-icon-label').click({force: true});
  cy.wait(2000);


  cy.get('div#hmenu-content > .hmenu-visible > li > a.hmenu-item').each(($ele) => { 
    //cy.log("LOOOOOOG" + $ele.text());
    if ($ele.text() == "Electronics & Computers") {
        cy.wrap($ele).click({force: true});
        cy.wait(2000);
    }
  }) 
  
  cy.get('div#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li > a.hmenu-item').each(($ele) => { 
    // cy.get('[data-menu-id="13"]').each(($ele) => { 
  
  //cy.log("LOOOOOOG" + $ele.text());
    if ($ele.text() == "Phones & Accessories") {
        cy.wrap($ele).click({force: true});
        cy.wait(2000);
    }
  }) 

  cy.get('#a-autoid-0-announce').click();
  //cy.get('div>div>div>div>div>p>a[href="/b/ref=fst_h1_st_1?node=5362060031"]').click();
  cy.wait(1000);

  cy.get('.a-list-item > a.a-link-normal > div.a-checkbox.a-checkbox-fancy.aok-float-left.apb-browse-refinements-checkbox > label > span.a-label.a-checkbox-label > span.aok-offscreen.aok-offscreen-text').each(($ele) => { 
    //cy.log("LOOOOOOG " + $ele.text());
    if ($ele.text() == "20 MP & above") {
        cy.wrap($ele).click({force: true});
        cy.wait(2000);
    }
  }) 

  cy.get('#p_89\\/Samsung > .a-list-item > .a-link-normal > .a-size-base',{timeout:2000}).click({force: true});

  cy.get('#p_n_feature_thirteen_browse-bin\\/12421314031 > .a-list-item > .a-link-normal > .a-size-base',{timeout:2000}).click({force: true});

  cy.get('#p_36\\/138897031 > .a-list-item > .a-link-normal > .a-size-base',{timeout:2000}).click({force: true});


});