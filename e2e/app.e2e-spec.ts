import { InRecipePage } from './app.po';

describe('in-recipe App', () => {
  let page: InRecipePage;

  beforeEach(() => {
    page = new InRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
