import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closePopCookiesAlert() {
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
  }
}
