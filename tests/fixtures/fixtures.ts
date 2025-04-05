import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

// Объявляем типы ваших фикстур.
type MyFixtures = {
  mainPage: MainPage;
};

// Расширяем базовый тест, предоставляя "todoPage" и "settingsPage".
// Этот новый "test" может быть использован в нескольких тестовых файлах, и каждый из них получит фикстуры.
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Настраиваем фикстуру.
    const mainPage = new MainPage(page);
    await mainPage.open();
    await mainPage.closePopCookiesAlert();

    // Используем значение фикстуры в тесте.
    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
