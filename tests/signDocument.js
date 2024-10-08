import signDocumentPage from '../pages/SignDocumentPage';
import signDocumentPageData from '../pageData/SignDocumentPage';
import * as config from '../testData/global';
import { faker } from '@faker-js/faker';

fixture`Sign the Document`
  .page(config.signDocURL);

test('Sign the document', async t => {
    await t
      .click(signDocumentPage.fullnameField)
      .typeText(signDocumentPage.fullnameField, faker.person.fullName())
      .click(signDocumentPage.nextButton)
      .expect(signDocumentPage.confirmationModal.exists).ok('Confirmation modal is absent');
    await t.takeElementScreenshot(signDocumentPage.confirmationModal);
    await t.click(signDocumentPage.signButtonInConfirmation);
    await t.expect(signDocumentPage.succesSignMessage.textContent).eql(signDocumentPageData.succesSignMessage, 'Success signing document message is absent');
}
);