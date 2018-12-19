import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have 2 links', () => {
    page.navigateTo();
    expect(page.getLinkCount()).toEqual(2);
  })

  it('should have link with Table as text', () => {
    page.navigateTo();
    expect(page.getFirstLink()).toEqual('Table');
  });

  it('should have link with Form as text', () => {
    page.navigateTo();
    expect(page.getSecondLink()).toEqual('Form');
  });
});
