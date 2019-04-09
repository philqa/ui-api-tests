/// <reference path='../steps.d.ts' />
import {Constants} from "../util/constants";

const I = actor();
import {PersonalHomeLoanCalcPo} from "../pages/personal-home-loan-calc.po";
import {Utils} from "../util/utils";

let personalHomeLoanCalcPage, els;

Given(/^I am on the personal home loan calculator page$/, () => {
    personalHomeLoanCalcPage = new PersonalHomeLoanCalcPo(I);
    els = personalHomeLoanCalcPage.elements;
    I.amOnPage('/');
});
When(/^I click the "([^"]*)" button$/, (elementName) => {
    personalHomeLoanCalcPage.click(Utils.getElemLocator(els, elementName));
});
When(/^I select "([^"]*)" from the "([^"]*)" drop down$/, (text, elementName) => {
    personalHomeLoanCalcPage.selectOption(Utils.getElemLocator(els, elementName), text);
});
When(/^I enter "([^"]*)" into the "([^"]*)" field$/, (text, elementName) => {
    personalHomeLoanCalcPage.fillField(Utils.getElemLocator(els, elementName), text)
});
Then(/^I should see "([^"]*)" in the "([^"]*)" section$/, (text, elementName) => {
    I.waitForText(text, Constants.ELEMENT_WAIT, Utils.getElemLocator(els, elementName));
});
Given(/^the personal home loan calculator form has been filled and submitted$/, () => {
    personalHomeLoanCalcPage.fillAndSubmitForm();
});
Then(/^all of the form fields are reset$/, () => {
    personalHomeLoanCalcPage.assertAllFieldsAreReset();
});
Then(/^I should see "([^"]*)" in the "([^"]*)" section$/, (text, elementName) => {
    I.waitForText(text, Constants.ELEMENT_WAIT, Utils.getElemLocator(els, elementName));
});
