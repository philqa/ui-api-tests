/// <reference path='../steps.d.ts' />
import {PersonalHomeLoanCalcPo} from "../pages/personal-home-loan-calc.po";

Feature('Personal Home Loan Calculator');

let personalHomeLoanCalcPage;

Before(I => {
    I.amOnPage('/');
    personalHomeLoanCalcPage = new PersonalHomeLoanCalcPo(I);
});

Scenario('Submit calculation for a single, 0 dependents, average income/expenses person', I => {
    personalHomeLoanCalcPage.fillAndSubmitForm();
    I.waitForText('$479,000', personalHomeLoanCalcPage.elements.borrowResult.locator);
});

Scenario('clicking the start over button clears the form', I => {
    personalHomeLoanCalcPage.fillAndSubmitForm();
    personalHomeLoanCalcPage.click(personalHomeLoanCalcPage.elements.startOverBtn.locator);
    personalHomeLoanCalcPage.assertAllFieldsAreReset();
});

Scenario('submitting only living expenses produces an unable to calculate your borrowing power error message @parallel', I => {
    personalHomeLoanCalcPage.fillField(personalHomeLoanCalcPage.elements.livingExpensesInput.locator, '1');
    personalHomeLoanCalcPage.click(personalHomeLoanCalcPage.elements.howMuchICouldBorrowBtn.locator);
    I.waitForText('Based on the details you\'ve entered, we\'re unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.',
        personalHomeLoanCalcPage.elements.borrowError.locator);
});
