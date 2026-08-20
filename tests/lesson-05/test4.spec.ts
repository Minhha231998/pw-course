import { test } from '@playwright/test';

test('Thêm 10 personal notes và thực hiện search', async ({ page }) => {
  // 1. Mở trang web
  await page.goto('https://material.playwrightvn.com/');

  // 2. Click vào bài học 4
  await page.click('text=Bài học 4: Personal notes');

  // ================= PHẦN 1: THÊM 10 NOTES =================

  // Note 1
  await page.fill('#note-title', 'click');
  await page.fill('#note-content', 'Hàm click dùng để thực hiện click vào các phần tử trên trang web');
  await page.click('#add-note');

  // Note 2
  await page.fill('#note-title', 'fill');
  await page.fill('#note-content', 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');
  await page.click('#add-note');

  // Note 3
  await page.fill('#note-title', 'type');
  await page.fill('#note-content', 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
  await page.click('#add-note');

  // Note 4
  await page.fill('#note-title', 'hover');
  await page.fill('#note-content', 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
  await page.click('#add-note');

  // Note 5
  await page.fill('#note-title', 'check');
  await page.fill('#note-content', 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
  await page.click('#add-note');

  // Note 6
  await page.fill('#note-title', 'uncheck');
  await page.fill('#note-content', 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
  await page.click('#add-note');

  // Note 7
  await page.fill('#note-title', 'selectOption');
  await page.fill('#note-content', 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
  await page.click('#add-note');

  // Note 8
  await page.fill('#note-title', 'press');
  await page.fill('#note-content', 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
  await page.click('#add-note');

  // Note 9
  await page.fill('#note-title', 'dblclick');
  await page.fill('#note-content', 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
  await page.click('#add-note');

  // Note 10
  await page.fill('#note-title', 'dragAndDrop');
  await page.fill('#note-content', 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
  await page.click('#add-note');

  // ================= PHẦN 2: THỰC HIỆN SEARCH =================

  // Điền keyword "một hoặc nhiều" vào ô tìm kiếm (id #search)
  await page.fill('#search', 'một hoặc nhiều');
});