import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstLink() {
    return element.all(by.css('app-root li a')).get(0).getText();
  }

  getSecondLink() {
    return element.all(by.css('app-root li a')).get(1).getText();
  }

  getLinkCount() {
    return element.all(by.css('app-root li a')).count();
  }
}
