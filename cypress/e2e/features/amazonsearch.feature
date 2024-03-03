@e2e-test
Feature: amazon.co.uk
  Scenario: List all the Samsung phones
    When The use visits amazon.co.uk
    And the user accepts cookies
    Then the user searches for Samsung Mobile phones

