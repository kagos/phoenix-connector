import { PhoenixConnectorPage } from './app.po';

describe('phoenix-connector App', function() {
  let page: PhoenixConnectorPage;

  beforeEach(() => {
    page = new PhoenixConnectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
