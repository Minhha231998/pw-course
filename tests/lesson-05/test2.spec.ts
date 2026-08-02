import { test } from "@playwright/test";

test("tên test", async ({ page }) => {
    
    await test.step('Go to https://material.playwrightvn.com/', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click on Bài Tập 2', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    });

    await test.step('Click vào add to cart của sản phẩm 1', async () => {
        await page.locator('//button[@data-product-id="1"]').click();
        await page.waitForTimeout(2000);
        await page.locator('//button[@data-product-id="1"]').click();
    });

    await test.step('Click vào add to cart của sản phẩm 2', async () => {
        await page.locator('//button[@data-product-id="2"]').click();
        await page.waitForTimeout(2000);
        await page.locator('//button[@data-product-id="2"]').click();
        await page.waitForTimeout(2000);
        await page.locator('//button[@data-product-id="2"]').click();
    });

        await test.step('Click vào add to cart của sản phẩm 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click();
    });

});
