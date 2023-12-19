const { test, expect } = require('@playwright/test');

test('Navbar exists and navigates correctly', async ({ page }) => {
  // Navigate to your application
  await page.goto('https://is-218001-final.vercel.app/');

  // Check if the navbar is present
  const navbar = await page.locator('nav');
  await expect(navbar).toBeVisible();

  // Check for specific links in the navbar
  const menuLink = navbar.locator('a', { hasText: 'Menu' });
  await expect(menuLink).toBeVisible();

  const joinLink = navbar.locator('a', { hasText: 'Join Rewards' });
  await expect(joinLink).toBeVisible();

  // Click on a link and check the navigation
  await menuLink.click();
  await expect(page).toHaveURL('https://is-218001-final.vercel.app/menu'); // Adjust the URL as needed

  // Navigate back and test another link
  await page.goBack();
  await joinLink.click();
  await expect(page).toHaveURL('https://is-218001-final.vercel.app/#join'); // Adjust the URL as needed
});