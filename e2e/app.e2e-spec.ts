import { AngularTableSearchPage } from './app.po';

describe('angular-table-search App', () => {
  let page: AngularTableSearchPage;

  beforeEach(() => {
    page = new AngularTableSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
