import { test, expect } from '@playwright/test';

test('tambah data', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await page.waitForLoadState('load');
  await page.goto('https://sim.dev.masook.id/#/pilihOrganisasi');

  await page.locator('div:nth-child(2) > .ra-0 > .v-card__text > .container > .text-center').click();
  await page.getByRole('link', { name: 'Ubah Presensi' }).click();
  await page.locator('#add').click();
  await page.getByRole('textbox', { name: 'Pilih Anggota' }).click();
  await page.getByText('akunn untuk coba coba ini').click();
  await page.getByRole('textbox', { name: 'Tanggal' }).click();
  await page.getByRole('button', { name: '3', exact: true }).click();
  await page.getByRole('button', { name: 'Diisi jika akan terlambat' }).click();
  await page.getByText('Skor 2 (31-60)').click();
  await page.getByRole('button', { name: 'Diisi jika akan pulang cepat' }).click();
  await page.locator('#list-item-472-1').getByText('Skor 3 (61-90)').click();
  await page.waitForLoadState()
  await page.getByRole('textbox', { name: 'Keterangan' }).click();
  await page.locator('#input-359').fill('testing');
  await page.getByRole('button', { name: 'Simpan' }).click();
  await page.locator('#refresh').click();
});

test('click ngawur', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await page.waitForLoadState('load');
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');

  await page.locator('div:nth-child(2) > .ra-0 > .v-card__text > .container').click();
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU');
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: 'Beranda' }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: 'Analitik' }).click();
  await page.getByRole('link', { name: 'Profil dan Konfigurasi' })
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: 'Presensi Swafoto' })
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: 'Ubah Presensi' })


});

