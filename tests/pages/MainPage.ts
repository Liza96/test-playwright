import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerlocator: Locator;
  private readonly categorriesTabsLocator: Locator;
  private readonly menuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerlocator = this.page.getByText(
      'RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация',
    );
    this.categorriesTabsLocator = this.page
      .locator('section')
      .filter({
        hasText: 'ГлавнаяРекомендацииФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ ',
      })
      .nth(1);
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
  }
  async open() {
    await this.page.goto('https://rutube.ru/', { waitUntil: 'domcontentloaded' });
  }

  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerlocator).toMatchAriaSnapshot();
  }
  async categorriesTabsHasCorrectAriaSnapshot() {
    await expect(this.categorriesTabsLocator).toMatchAriaSnapshot();
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot();
  }
}
