import {Constants} from "../util/constants";
const I = actor();

export class BasePage {

    click(locator) {
        I.waitForElement(locator, Constants.ELEMENT_WAIT);
        I.click(locator);
    }

    selectOption(locator, text) {
        I.waitForElement(locator, Constants.ELEMENT_WAIT);
        I.selectOption(locator, text);
    }

    fillField(locator, text) {
        I.waitForElement(locator, Constants.ELEMENT_WAIT);
        I.click(locator);
        I.fillField(locator, text);
    }

}
