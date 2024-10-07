import { Selector } from 'testcafe';
import signDocumentPageData from '../pageData/SignDocumentPage';

class SignDocumentPage {
    constructor() {
        this.fullnameField = Selector('input#name');
        this.nextButton = Selector('a').withText(signDocumentPageData.nextButton);
        this.confirmationModal = Selector('div[class*="section sign"]');
        this.signButtonInConfirmation = Selector('a[class*="sign-button"]');
        this.succesSignMessage = Selector('div[class*="s-header-doc-signed"]');
    }
}

export default new SignDocumentPage();