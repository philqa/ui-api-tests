/// <reference path='../steps.d.ts' />
import {PersonalHomeLoanCalcPage} from "../pages/personal-home-loan-calc.po";

Feature('Personal Home Loan Calculator');

let personalHomeLoanCalcPage;

Before(I => {
    I.amOnPage('/');
    personalHomeLoanCalcPage = new PersonalHomeLoanCalcPage(I);
});

Scenario('Submit calculation for a single, 0 dependents, average income/expenses person', I => {
    personalHomeLoanCalcPage.fillAndSubmitForm();
    personalHomeLoanCalcPage.assertBorrowResultEquals('$479,000');
});

Scenario('clicking the start over button clears the form', I => {
    personalHomeLoanCalcPage.fillAndSubmitForm();
    personalHomeLoanCalcPage.clickStartOver();
    personalHomeLoanCalcPage.assertAllFieldsAreReset();
});

Scenario('submitting only living expenses produces an unable to calculate your borrowing power error message', I => {
    personalHomeLoanCalcPage.enterLivingExpenses('1');
    personalHomeLoanCalcPage.clickHowMuchCouldIBorrow();
    personalHomeLoanCalcPage.assertBorrowErrorEquals('Based on the details you\'ve entered, we\'re unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 100 641.')
});
