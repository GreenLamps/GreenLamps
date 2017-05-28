import { GreenLampsPage } from './app.po';

describe('green-lamps App', () => {
  let page: GreenLampsPage;

  beforeEach(() => {
    page = new GreenLampsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
