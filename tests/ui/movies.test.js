const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('http://softuni-exam-prep-movies.onrender.com');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  