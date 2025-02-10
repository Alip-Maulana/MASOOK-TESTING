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

test('Lihat lokasi', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.goto('https://sim.dev.masook.id/#/pilihOrganisasi');
  await page.getByText('Jayantara Indonesia').click();
  await page.goto('https://sim.dev.masook.id/#/dashboard/ORG-BPDZNU');
  await page.getByRole('link', { name: 'Riwayat Kehadiran' }).click();
  await page.getByRole('button', { name: 'Selesai' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Kamis, 30-01-2025 17:08' }).getByRole('button').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.google.com/maps/place/7%C2%B057\'15.9%22S+112%C2%B037\'42.0%22E/@-7.954426,112.6283413,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.954426!4d112.6283413?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D');
});

test('Fail Add Data Cuti', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByText('Jayantara Indonesia').click();
  await page.getByRole('button', { name: 'Kelola Instansi' }).click();
  await page.getByRole('link', { name: 'Hari Libur' }).click();
  await page.locator('#add').click();
  await page.getByRole('textbox', { name: 'Tanggal Awal' }).click();
  await page.getByRole('button', { name: 'February' }).click();
  await page.getByText('2025').nth(3).click();
  await page.getByText('1925').click();
  await page.getByRole('button', { name: 'Mar' }).click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.locator('#input-363').click();
  await page.getByRole('menu').getByText('1925', { exact: true }).click();
  await page.getByText('2025', { exact: true }).click();
  await page.getByRole('button', { name: 'Mar' }).click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByRole('textbox', { name: 'Keterangan' }).click();
  await page.locator('#input-367').fill('testing ');
  await page.locator('form').getByRole('button').click();
  await page.locator('#list-item-451-1').getByText('Cuti Bersama').click();
  await page.getByRole('button', { name: 'Simpan' }).click();
});

