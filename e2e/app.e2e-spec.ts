import { UniqcastPage } from './app.po';

describe('uniqcast App', () => {
  let page: UniqcastPage;

  beforeEach(() => {
    page = new UniqcastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
