Feature: Login page


Scenario: Successful login with valid credentials
    Given I am on the NinjaOne login page
    When I enter a valid email  
    And I enter a valid password
    And I click the Sign in button
    Then I should be redirected to the MFA page

Scenario: Login with invalid email
    Given I am on the NinjaOne login page
    When I enter an invalid email        
    And I enter a valid password
    And I click the Sign in button    
    Then I should receive an error popup: Error during login

Scenario: Login with invalid password
    Given I am on the NinjaOne login page
    When I enter a valid email 
    And I enter an invalid password
    And I click the Sign in button 
    Then I should see an error message Invalid error message

Scenario: Attempt to login with empty email
    Given I am on the NinjaOne login page
    When I enter an empty email
    And I enter a valid password   
    And I click the Sign in button 
    Then I should receive an error popup: Error during login

Scenario: Attempt to login with empty password
    Given I am on the NinjaOne login page
    When I enter a valid email
    And I enter a empty password   
    And I click the Sign in button 
    Then I should receive an error popup: Error during login

Scenario: Attempt to login with empty email and password
    Given I am on the NinjaOne login page
    When I enter an empty email
    And I enter a empty password 
    And I click the Sign in button
    Then I should receive an error popup: Error during login


Scenario: Password should be masked by default
    Given I am on the NinjaOne login page
    When I enter a valid password
    Then The password should be masked, shown as dots

Scenario: Forgot password link redirects correctly
    Given I am on the NinjaOne login page
    When I click on the Forgot your password? link
    Then I should be redirected to the password recovery page

Scenario: Do not have an account link? redirects correctly
    Given I am on the NinjaOne login page
    When I click on the Do not have an account? link
    Then I should be redirected to the registration page

Scenario: Keep me signed in check box on  works correctly
    Given I am on the NinjaOne login page
    When I enter a valid email  
    And I enter a valid password
    And I click on Keep me signed in check box
    And I click the Sign in button
    Then I should be redirected to the MFA page