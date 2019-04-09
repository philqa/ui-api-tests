Feature: Personal Home Loan Calculator
  As a prospective personal home loan client
  I want to calculate my potential home loan
  So that I can make an informed choice about how much money I can borrow

  Scenario: @automated Submit calculation for a single, 0 dependents, average income/expenses person @automated
    Given I am on the personal home loan calculator page
    When I click the "Single Application Type" button
    And I select "0" from the "Dependents" drop down
    And I click the "Buying Home To Live In" button
    And I enter "80000" into the "Income" field
    And I enter "10000" into the "Other Income" field
    And I enter "500" into the "Living Expenses" field
    And I enter "0" into the "Home Loan Repayments" field
    And I enter "100" into the "Other Loan Repayments" field
    And I enter "0" into the "Other Commitments" field
    And I enter "10000" into the "Credit Card Limits" field
    And I click the "How Much Could I Borrow" button
    Then I should see "$479,000" in the "Borrow Result" section

  Scenario: @automated Clicking the start over button clears the form
    Given I am on the personal home loan calculator page
    And the personal home loan calculator form has been filled and submitted
    When I click the "Start Over" button
    Then all of the form fields are reset

  Scenario: @automated Submitting only living expenses produces an unable to calculate your borrowing power error message @automated
    Given I am on the personal home loan calculator page
    When I enter "1" into the "Living Expenses" field
    And I click the "How Much Could I Borrow" button
    Then I should see "Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641." in the "Borrow Error" section

  Scenario: @manual This will be skipped
