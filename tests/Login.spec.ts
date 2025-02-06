import { test, expect } from '@playwright/test';

test('LOGIN-Valid', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/login');

  //valid input username and password
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('111111');
  await page.getByRole('button', { name: 'Masuk' }).click();

  await page.waitForLoadState();
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/pilihOrganisasi');

});

test('LOG-Username-Invalid', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/login');

  //valid input username and password
  await page.getByRole('textbox', { name: 'Username' }).fill('invalid_user198278172017209172091720172@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('Invalid_password');
  await page.getByRole('button', { name: 'Masuk' }).click();

  
  await expect(page.getByText('Username tidak ditemukanTutup')).toBeVisible();
  

});

test('LOG-Password-Invalid', async ({ page }) => {
  await page.goto('https://sim.dev.masook.id/#/login');
  await expect(page).toHaveURL('https://sim.dev.masook.id/#/login');

  //valid input username and password
  await page.getByRole('textbox', { name: 'Username' }).fill('operatorjmi@mail.com');
  await page.getByRole('textbox', { name: 'Kata Sandi' }).fill('Invalid_passworaosdoakdpamodjinsajmdasoidnad');
  await page.getByRole('button', { name: 'Masuk' }).click();

  
  await expect(page.getByText('Password yang dimasukkan tidak benar')).toBeVisible();
  

});

test("LOG-Empty", async ({ page }) => {
  await page.goto("https://sim.dev.masook.id/#/login");
  await expect(page).toHaveURL("https://sim.dev.masook.id/#/login");

  // Biarkan input username dan kata sandi kosong
  await page.getByRole("textbox", { name: "Username" }).fill('');
  await page.getByRole("textbox", { name: "Kata Sandi" }).fill('');
  await page.getByRole("button", { name: "Masuk" }).click();

  // Tunggu sampai halaman diupdate (atau validasi munculnya pesan error)
  const errorMessage = page.locator('text=Username tidak ditemukan'); // Sesuaikan dengan teks error yang benar
  await expect(errorMessage).toBeVisible(); // Memastikan pesan error muncul
});




