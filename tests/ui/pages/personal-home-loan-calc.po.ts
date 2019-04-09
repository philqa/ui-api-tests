import {Constants} from "../util/constants";
import {BasePage} from "./base.page";

export class PersonalHomeLoanCalcPo extends BasePage {

    elements = {
        title: {elementName: 'Page Title', locator: '#title'},
        singleApplicationTypeBtn: {elementName: 'Single Application Type', locator: '//label[contains(.,"Single")]'},
        dependentsDropdown: {elementName: 'Dependents', locator: 'select'},
        buyingHomeToLiveInBtn: {elementName: 'Buying Home To Live In', locator: '//label[contains(.,"Home to live in")]'},
        incomeInput: {elementName: 'Income', locator: '//input[@aria-labelledby="q2q1"]'},
        otherIncomeInput: {elementName: 'Other Income', locator: '//input[@aria-labelledby="q2q2"]'},
        livingExpensesInput: {elementName: 'Living Expenses', locator: '#expenses'},
        homeLoanRepaymentsInput: {elementName: 'Home Loan Repayments', locator: '#homeloans'},
        otherLoanRepaymentsInput: {elementName: 'Other Loan Repayments', locator: '#otherloans'},
        otherCommitmentsInput: {elementName: 'Other Commitments', locator: '//input[@aria-labelledby="q3q4"]'},
        creditCardLimitsInput: {elementName: 'Credit Card Limits', locator: '#credit'},
        howMuchICouldBorrowBtn: {elementName: 'How Much Could I Borrow', locator: '//button[text()="Work out how much I could borrow"]'},
        startOverBtn: {elementName: 'Start Over', locator: 'button.start-over'},
        borrowResult: {elementName: 'Borrow Result', locator: 'span.borrow__result__text__amount'},
        borrowError: {elementName: 'Borrow Error', locator: 'span.borrow__error__text'}
    };
    I;

    constructor(I: CodeceptJS.I) {
        super();
        this.I = I;
    }

    assertAllFieldsAreReset() {
        this.I.waitForValue(this.elements.incomeInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherIncomeInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.livingExpensesInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.homeLoanRepaymentsInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherLoanRepaymentsInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherCommitmentsInput.locator, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.creditCardLimitsInput.locator, '0', Constants.ELEMENT_WAIT);
    }

    fillAndSubmitForm() {
        this.click(this.elements.singleApplicationTypeBtn.locator);
        this.selectOption(this.elements.dependentsDropdown.locator, '0');
        this.click(this.elements.buyingHomeToLiveInBtn.locator);
        this.fillField(this.elements.incomeInput.locator,'80000');
        this.fillField(this.elements.otherIncomeInput.locator,'10000');
        this.fillField(this.elements.livingExpensesInput.locator,'500');
        this.fillField(this.elements.homeLoanRepaymentsInput.locator,'0');
        this.fillField(this.elements.otherLoanRepaymentsInput.locator,'100');
        this.fillField(this.elements.otherCommitmentsInput.locator,'0');
        this.fillField(this.elements.creditCardLimitsInput.locator,'10000');
        this.click(this.elements.howMuchICouldBorrowBtn.locator);
    }

}
