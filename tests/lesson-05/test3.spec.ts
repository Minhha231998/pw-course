import { test } from '@playwright/test';

test("100 to do items", async ({ page }) => {

    await test.step('tên step', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click vào bài tập 3', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });

    await test.step('Thêm 100 to do items', async () => {
        const taskInput = page.locator('//input[@id="new-task"]');
        const addButton = page.locator('//button[@id="add-task"]');

        for (let i = 1; i <= 100; i++) {
            await taskInput.fill(`Todo ${i}`);
            await addButton.click();
        }
    });

    await test.step('Xóa các todo có số lẻ', async () => {       
        page.on('dialog', async dialog => {
            await dialog.accept();
        });
        
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`#todo-${i}-delete`).click();
        }
    });

});