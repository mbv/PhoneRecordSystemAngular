import { PhoneRecordSystemAngularPage } from './app.po';

describe('phone-record-system-angular App', () => {
  let page: PhoneRecordSystemAngularPage;

  beforeEach(() => {
    page = new PhoneRecordSystemAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
