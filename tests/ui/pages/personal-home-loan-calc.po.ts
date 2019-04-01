import {Constants} from "../util/constants";

export class PersonalHomeLoanCalcPage {
    elements = {
        title: '#title',
        singleApplicationTypeBtn: '//label[contains(.,"Single")]',
        dependentsDropdown: 'select',
        buyingHomeToLiveInBtn: '//label[contains(.,"Home to live in")]',
        incomeInput: '//input[@aria-labelledby="q2q1"]',
        otherIncomeInput: '//input[@aria-labelledby="q2q2"]',
        livingExpensesInput: '#expenses',
        homeLoanRepaymentsInput: '#homeloans',
        otherLoanRepaymentsInput: '#otherloans',
        otherCommitmentsInput: '//input[@aria-labelledby="q3q4"]',
        creditCardLimitsInput: '#credit',
        howMuchICouldBorrowBtn: '//button[text()="Work out how much I could borrow"]',
        startOverBtn: 'button.start-over',
        borrowResult: 'span.borrow__result__text__amount',
        borrowError: 'span.borrow__error__text'
    };

    constructor(private I: CodeceptJS.I) {}

    clickSingleApplicationType() {
        this.I.waitForElement(this.elements.singleApplicationTypeBtn, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.singleApplicationTypeBtn);
    }

    selectDependents(option) {
        this.I.waitForElement(this.elements.dependentsDropdown, Constants.ELEMENT_WAIT);
        this.I.selectOption(this.elements.dependentsDropdown, option);
    }

    clickBuyingHomeToLiveIn() {
        this.I.waitForElement(this.elements.buyingHomeToLiveInBtn, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.buyingHomeToLiveInBtn);
    }

    enterIncome(income) {
        this.I.waitForElement(this.elements.incomeInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.incomeInput);
        this.I.fillField(this.elements.incomeInput, income);
    }

    enterOtherIncome(otherIncome) {
        this.I.waitForElement(this.elements.otherIncomeInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.otherIncomeInput);
        this.I.fillField(this.elements.otherIncomeInput, otherIncome);
    }

    enterLivingExpenses(livingExpenses) {
        this.I.waitForElement(this.elements.livingExpensesInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.livingExpensesInput);
        this.I.fillField(this.elements.livingExpensesInput, livingExpenses);
    }

    enterHomeLoanRepayments(homeLoanRepayments) {
        this.I.waitForElement(this.elements.homeLoanRepaymentsInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.homeLoanRepaymentsInput);
        this.I.fillField(this.elements.homeLoanRepaymentsInput, homeLoanRepayments);
    }

    enterOtherLoanRepayments(otherLoanRepayments) {
        this.I.waitForElement(this.elements.otherLoanRepaymentsInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.otherLoanRepaymentsInput);
        this.I.fillField(this.elements.otherLoanRepaymentsInput, otherLoanRepayments);
    }

    enterOtherCommitments(otherCommitments) {
        this.I.waitForElement(this.elements.otherCommitmentsInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.otherCommitmentsInput);
        this.I.fillField(this.elements.otherCommitmentsInput, otherCommitments);
    }

    enterCreditCardLimits(creditCardLimits) {
        this.I.waitForElement(this.elements.creditCardLimitsInput, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.creditCardLimitsInput);
        this.I.fillField(this.elements.creditCardLimitsInput, creditCardLimits);
    }

    clickHowMuchCouldIBorrow() {
        this.I.waitForElement(this.elements.howMuchICouldBorrowBtn, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.howMuchICouldBorrowBtn);
    }

    clickStartOver() {
        this.I.waitForElement(this.elements.startOverBtn, Constants.ELEMENT_WAIT);
        this.I.click(this.elements.startOverBtn);
    }

    assertAllFieldsAreReset() {
        this.I.waitForValue(this.elements.incomeInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherIncomeInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.livingExpensesInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.homeLoanRepaymentsInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherLoanRepaymentsInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.otherCommitmentsInput, '0', Constants.ELEMENT_WAIT);
        this.I.waitForValue(this.elements.creditCardLimitsInput, '0', Constants.ELEMENT_WAIT);
    }

    fillAndSubmitForm() {
        this.clickSingleApplicationType();
        this.selectDependents('0');
        this.clickBuyingHomeToLiveIn();
        this.enterIncome('80000');
        this.enterOtherIncome('10000');
        this.enterLivingExpenses('500');
        this.enterHomeLoanRepayments('0');
        this.enterOtherLoanRepayments('100');
        this.enterOtherCommitments('0');
        this.enterCreditCardLimits('10000');
        this.clickHowMuchCouldIBorrow();
    }

    assertBorrowResultEquals(text) {
        this.I.waitForText(text, Constants.ELEMENT_WAIT, this.elements.borrowResult);
    }

    assertBorrowErrorEquals(error) {
        this.I.waitForText(error, Constants.ELEMENT_WAIT, this.elements.borrowError);
    }

}
