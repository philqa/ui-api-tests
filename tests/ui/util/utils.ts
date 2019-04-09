export class Utils {

    static getElemLocator(els, elementName) {
        return Object.values(els).find(e => e["elementName"] === elementName)["locator"];
    }

}
