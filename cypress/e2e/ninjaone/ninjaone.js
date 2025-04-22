import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("I am on the NinjaOne login page", ()=>{
    cy.visit("https://app.ninjarmm.com/auth/#/login")
})

When("I enter an empty email", ()=>{
    cy.get('input[id=email]').should('be.empty');
})

When("I enter a empty password", ()=>{
    cy.get('input[id=password]').should('be.empty');
})

And("I click the Sign in button", ()=>{
    cy.get('button[type="submit"]').click();
}) 

Then("I should receive an error popup: Error during login", ()=>{
    cy.contains("Error during login").should("be.visible");
}) 

Then("I should see an error message Invalid error message", ()=>{
  //Error message for belo class: Invalid username/password. Please contact your system administrator for assistance.
  cy.get('*[class^="alert alert-danger css-xlp8fa e1vjstjx0"]').should("be.visible");

}) 

Then("I enter a valid email", ()=>{
    cy.get("[id='email']").type('vegesna_lakshmi@yahoo.com')
}) 

Then("I enter an invalid email", ()=>{
    cy.get("[id='email']").type('vegesna_lakshmi@yahoo.c')
})

Then("I enter a valid password", ()=>{
    cy.get("[id='password']").type('Password1234')
}) 

Then("I enter an invalid password", ()=>{
    cy.get("[id='password']").type('Password123')
})

Then("I should be redirected to the MFA page", ()=>{
    cy.get("[id='root']").contains('Multi-Factor Authentication')
    
}) 

Then("The password should be masked, shown as dots", ()=>{
    cy.get('input[id=password]').should('have.attr', 'type', 'password');    
}) 

When("I click on the Forgot your password? link", ()=>{  
    cy.get('a[href="#/resetPassword"]').click()
}) 

Then("I should be redirected to the password recovery page", ()=>{
    cy.contains("Verify Identity By").should("be.visible");   
}) 

When("I click on the Do not have an account? link", ()=>{  
    cy.get('a[href="#/register"]').click()
}) 

Then("I should be redirected to the registration page", ()=>{
    cy.contains("Organization").should("be.visible");   
}) 

Then("I click on Keep me signed in check box", ()=>{
    //cy.get("[id='staySignedIn']").click()  
    cy.get('*[class^="css-j5jbvc eehkzcb1"]').click()
}) 