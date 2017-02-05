import { ArsPage } from './app.po';

describe('ars App', function() {
  let page: ArsPage;

  beforeEach(() => {
    page = new ArsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
