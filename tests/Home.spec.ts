import { test, expect } from '@playwright/test';

test('LOGIN-LOGOUT-Succes', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await page.waitForLoadState('load');
  await page.goto('https://sim.dev.masook.id/#/pilihOrganisasi');
  await page.locator('div:nth-child(2) > .ra-0 > .v-card__text > .container').click();
  await page.waitForLoadState();
  await page.locator('header a').click();
  await page.waitForLoadState();
  await page.getByRole('listitem').filter({ hasText: 'Keluar' }).click();
  await page.waitForLoadState('load');
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/login');

});