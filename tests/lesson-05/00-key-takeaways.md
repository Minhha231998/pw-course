# Key Takeaways Buổi 5
## 1. Javascript Function Advance
### Function Expression
* Function expression là định nghĩa function bằng cách gán nó vào 1 biến
* ví dụ:
```javascript
// Function declaration
function add(a, b) {
    return a + b;
};

// Function expression
const add = function(a, b){
    return a + b
};

// So sánh cách gọi
console.log(add (1, 2)); // trả về kết quả giống nhau
```
### Lambda Function (Arrow Function)
* Lambda function, hay còn gọi là arrow function là cách viết ngắn gọn hơn cho function, sử dụng dấu mũi tên ( => )
* ví dụ
```javascript
// function truyền thống
function add(a, b){
    return a + b;
};

// arrow function
const add = (a, b) => {
    return a + b;
};

// có thể bỏ ngoặc nhọn nếu code của function chỉ có 1 dòng
const add = (a, b) => a + b;

// không có tham số thì phải có dấu ngoặc tròn rỗng
const greet = () => console.log("hello");

//nếu chỉ có 1 tham số thì có thể bỏ ngoặc tròn - hoặc giữ cũng được, tùy style

const double = x => x * 2;
const triple = (x) => x * 3;
```
### Anonymous Function
* anonymous function là hàm ẩn danh, được sử dụng khi chỉ cần dùng 1 lần, hoặc dùng làm hàm callback
* ví dụ:
```javascript
// Named function - function có tên
function namedFunction() {
    console.log("I have a name!");
};

// Anonymous function - không tên
function(){
    console.log("I'm anonymous!");
};

//Anonyous function cần phải được sử dụng ngay để có thể trả đúng kết quả
// Ví dụ như gán nó vào 1 biến
const anonymousFunction = function(){
    console.log("I can be use now");
};

// hoặc set nó làm hàm callback (function được dùng để tính giá trị nhằm phục vụ cho việc tính toán của một function khác)

setTimeOut(function(){
    console.log("anonymous callback!");
}, 1000);
```
## 2. DOM
* Khi vào một website, chúng ta có thể thấy được website dưới dạng: Các khối text, hình ảnh, các đường liên kết, các button, trường input,...
* Tuy nhiên, máy tính thì sẽ nhìn website dưới dạng 1 cái cây có cấu trúc - Document Object Model
* Để dễ hình dung, khi bạn truy cập vào một trang web, trình duyệt sẽ nhận về mã nguồn HTML từ máy chủ. Sau đó, nó sẽ chuyển đổi toàn bộ đống mã HTML đó thành một cấu trúc dạng cây cấu trúc (DOM Tree). Trong cái cây này, mỗi thẻ HTML như div, p, a, img sẽ được coi là 1 đối tượng (object)
* Ví dụ:
```javascript
<option>United States</option>

// Phía trên là 1 node

/* Cấu trúc của nó là:
- <option>: thẻ mở
- United States: content
- </option>: thẻ đóng*/

//ngoài ra còn có dạng thẻ tự đóng
<img src = "image.jpg" alt = "image description"/>
<br/>
<hr/>

// Ví dụ về thuộc tính của thẻ - attribute
<option value="US">United States</option>
// ở ví dụ trên, ta có value là attribute node và giá trị của node này là "US"
```
* Trên thực tế, có rất nhiều loại thẻ khác nhau: Thẻ tiêu chuẩn do mozilla define, thẻ tự định nghĩa do dev
* Các thẻ tiêu chuẩn thường gặp:
  * Thẻ cấu trúc cơ bản:
    * `<html>`: Thẻ gốc của trang
    * `<head>`: Chứa các meta data, tiêu đề của website, nội dung hiển thị trên google,...
    * `<body`: Nội dung của cả website
    * `<div>`: Khối/container chung
    * `<span>`: inline container
    * `<header>, <footer>, <nav>, <section>`: Thẻ ngữ nghĩa
  * Thẻ nội dung thường gặp:
    * `<h1>` đến `<h6>`: Tiêu đề
    * `<p>`: Đoạn văn
    * `<a>`: Liên kết
    * `<img>`: Hình ảnh
    * `<ul> <ol> <li>`: Danh sách
  * Thẻ form (Quan trọng trong testing):
    * `<form>`: Biểu mẫu
    * `<input>`: Ô nhập liệu (text, password, checkbox, radio,...)
    * `<button>`: Nút bấm
    * `<select>` và `<option>`: Dropdown
    * `<textarea>`: Vùng văn bản nhiều dòng
    
## 3. Selector
* Automation script là việc sử dụng script để tương tác với các phần tử của trang web. Và để tương tác được với các phần tử của web, thì chúng ta cần phải tìm ra nó.
* Selector sẽ giúp chúng ta tìm được ra các phần tử mà chúng ta muốn
* Có 3 loại selector thường gặp: Xpath, CSS selector, Playwright Selector
* Xpath:
  * Dùng trong hầu hết các trường hợp
  * Đa dạng, có khả năng tìm được các phần tử khó
  * Nhược điểm là hơi dài
  * Ví dụ: //button[normalize-space() = 'Add to cart']
* CSS selector:
  * Ngắn gọn, performance cao
  * Dùng trong các trường hợp dễ tìm
  * Không linh hoạt bằng Xpath
  * VD: .add-to-cart
* Playwright selector:
  * Chỉ dùng riêng cho playwright
  * Ngắn gọn, không phụ thuộc vào cấu trúc DOM
  * Hướng tới "giống người dùng đang nhìn thấy cái gì"
  * VD: page.getByText("Add to cart");
* Khi nào thì nên dùng cái gì:
  * Playwright selector > CSS Selector > Xpath        
## 4. Xpath Selector
* Xpath là viết tắt của XML path
* Có 2 loại xpath:
  * Tuyệt đối: Đi dọc theo cây DOM, bắt đầu bởi 1 /
  * Tương đối: Tìm dựa vào đặc tính, bắt đầu bởi 2 /
    * ví dụ: //tenthe[@thuoctinh="giatri"]
  * Nên dùng xpath tương đối  
## 5. Playwright Basic Syntax
* test: đơn vị cơ bản để khai báo 1 test
```javascript
import { test } from '@playwright/test';

test("tên test", async ({ page }) => {

});
```
* step: Đơn vị nhỏ hơn của test, để khai báo từng step của test case
```javascript
test("tên test", async ({ page }) => {
    
    await test.step('tên step', async () => {
        // code  của test
    });
});

// Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain
```
* Navigate
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```
* Locate
```javascript
// Sử dụng page.locator("<selector>") để chọn phần tử trên trang
page.locator("//input[@id = 'email']")
```
* Click
```javascript
// Single click
await page.locator("//button").click();

// Double click
await page.locator("//button").dbclick();

// Click chuột phải
page.locator("//button").click({
    button: 'right'
});

// Click chuột kèm bấm phím khác
page.locator(" ").click({
    modifiers: ['shift'],
})
```
* Input
```javascript
// Fill - Giống việc bạn paste content vào 1 ô input
page.locator("//input").fill("playwright việt nam");

// pressSequentially - Giống việc bạn gõ từng chữ cái vào ô input
page.locator("//input").pressSequentially('Playwright Việt Nam', {
    delay: 100,
});
```
* Radio/Checkbox
```javascript
// Lấy giá trị hiện tại đang là check hay không
const isChecked = ;
page.locator("//input").isChecked();

//Check / Uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```
* Select
```javascript
await page.locator('//select[@id ="country"]').selectOption({ label: 'USA' });
```
* Upload file
```javascript
await page.locator("//input[@id = 'profile']").setInputFiles("<file-path>");
```