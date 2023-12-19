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

test('Navbar logo is present', async ({ page }) => {
    // Navigate to your application
    await page.goto('https://is-218001-final.vercel.app/');
  
    // Locate the navbar
    const navbar = page.locator('nav'); // Adjust the selector as needed
    await expect(navbar).toBeVisible();
  
    // Locate the logo image within the navbar
    const logo = navbar.locator('img[alt="logo"]'); 
  
    // Check if the logo is present and visible
    await expect(logo).toBeVisible();
  
    // Click on the logo and check the navigation
    await logo.click();
    await expect(page).toHaveURL('https://is-218001-final.vercel.app/');
  
  
  });

  test('Call to Action in Hero Section', async ({ page }) => {
    // Navigate to your application
    await page.goto('https://is-218001-final.vercel.app/');
  
    // Checks if the Popup is present and clicks the Maybe Later button
    const form = await page.locator('main');
    const laterLink = form.locator('button', { hasText: 'Maybe Later' });

    // Locate the button
    const button = page.locator('a', { hasText: 'GET 30% OFF' });
  
    // Ensure the button is present and visible
    await expect(button).toBeVisible();
  
    // Click the button amd check the navigation
    await button.click();
    await expect(laterLink).toBeVisible();
  });

  test('Call to Action in Menu Section', async ({ page }) => {
    // Navigate to your application
    await page.goto('https://is-218001-final.vercel.app/');

  
    // Locate the button
    const button = page.locator('button', { hasText: 'MENU' });
  
    // Ensure the button is present and visible
    await expect(button).toBeVisible();
  
    // Click the button amd check the navigation
    await button.click();
    await expect(page).toHaveURL('https://is-218001-final.vercel.app/menu');
  });

  test('Call to Action in Join Section', async ({ page }) => {
    // Navigate to your application
    await page.goto('https://is-218001-final.vercel.app/');
  
    // Checks if the Popup is present and clicks the Maybe Later button
    const form = await page.locator('main');
    const laterLink = form.locator('button', { hasText: 'Maybe Later' });

  
    // Locate the button
    const button = page.locator('button', { hasText: 'Join Now' });
  
    // Ensure the button is present and visible
    await expect(button).toBeVisible();
  
    // Click the button and check the navigation
    await button.click();
    await expect(laterLink).toBeVisible();
  });