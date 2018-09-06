import { DarknetAngularPage } from './app.po';

describe('darknet-angular App', () => {
  let page: DarknetAngularPage;

  beforeEach(() => {
    page = new DarknetAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
