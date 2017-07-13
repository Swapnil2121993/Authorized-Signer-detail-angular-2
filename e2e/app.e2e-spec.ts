import { NobleTestAngular2Page } from './app.po';

describe('noble-test-angular2 App', () => {
  let page: NobleTestAngular2Page;

  beforeEach(() => {
    page = new NobleTestAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
