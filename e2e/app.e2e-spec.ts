import { CharSyncPage } from './app.po';

describe('char-sync App', function() {
  let page: CharSyncPage;

  beforeEach(() => {
    page = new CharSyncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
