import { test, expect } from '@playwright/test';

test('Homepage navigation and rendering', async ({ page }) => {
  await page.goto('/');
  
  // Verify Hero Text exists
  await expect(page.locator('h1').first()).toContainText('Anuj Shukla');
  
  // Verify Navigation
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  
  // Navigate to Projects page
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL('/projects');
  
  // Check if case studies are rendered
  await expect(page.locator('h1')).toContainText('Projects & Case Studies');
});

test('Form Validation (Empty)', async ({ page }) => {
  await page.goto('/contact');
  
  // Click submit without filling anything
  await page.getByRole('button', { name: 'Send Message' }).click();
  
  // Should show validation errors
  await expect(page.getByText('Name must be at least 2 characters')).toBeVisible();
  await expect(page.getByText('Invalid email format')).toBeVisible();
});
