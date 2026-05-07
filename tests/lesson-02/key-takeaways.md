# Ghi Chú Buổi Học - Lesson 2: Git, Version Control System & JavaScript Basic

## 1. Version Control System (Hệ thống Quản lý Phiên bản)

* **Định nghĩa:** Version Control System (VCS) là hệ thống quản lý các phiên bản của tệp tin theo thời gian. Nó cho phép người dùng xem lại lịch sử thay đổi, so sánh các khác biệt và quay trở lại bản thay đổi trước đó khi cần thiết.
* **Các loại VCS chính:**
    * **Local VCS (Cục bộ):** Lưu trữ các phiên bản ngay trên máy tính cá nhân.
    * **Centralized VCS (Tập trung):** Sử dụng một máy chủ trung tâm để lưu trữ toàn bộ các phiên bản. Bản sao của lập trình viên chỉ là phiên bản hiện tại (Ví dụ: SVN).
    * **Distributed VCS (Phân tán):** Mỗi máy tính của lập trình viên đều chứa một kho lưu trữ đầy đủ lịch sử thay đổi (Ví dụ: Git).

---

## 2. Git

Git là một hệ thống quản lý phiên bản phân tán (Distributed VCS) phổ biến nhất hiện nay.

### 2.1 Ba trạng thái (States) chính trong Git
1. **Working Directory (Thư mục làm việc):** Nơi bạn trực tiếp chỉnh sửa, thêm bớt file.
2. **Staging Area (Vùng chuẩn bị):** Nơi đánh dấu các thay đổi sẽ được đưa vào đợt lưu trữ (commit) tiếp theo.
3. **Repository (Kho lưu trữ):** Nơi Git lưu trữ chính thức các phiên bản và lịch sử của dự án.

### 2.2 Các câu lệnh Git thông dụng

#### Câu lệnh chỉ chạy MỘT LẦN duy nhất khi thiết lập:
* Khởi tạo một Git repository cục bộ:
  ```bash
  git init
  ```
* Kết nối kho lưu trữ cục bộ với kho lưu trữ từ xa (Remote Repository):
  ```bash
  git remote add origin "url"
  ```

#### Câu lệnh cần chạy MỖI KHI CÓ THAY ĐỔI (Simple Workflow):
Quy trình làm việc cơ bản: **Init → Add → Commit → Push**

1. Đưa toàn bộ thay đổi vào vùng chuẩn bị (Staging Area):
   ```bash
   git add .
   ```
2. Ghi lại ảnh chụp các thay đổi kèm lời nhắn:
   ```bash
   git commit -m "message"
   ```
3. Đẩy các thay đổi từ máy cục bộ lên nhánh chính trên server từ xa:
   ```bash
   git push origin main
   ```

### 2.3 Cấu hình Git Account (Git Config)

* **Cấp độ Global (Toàn cục):** Áp dụng cho tất cả các project trên máy tính này.
  ```bash
  git config --global user.name "Tên của bạn"
  git config --global user.email "email@example.com"
  ```
* **Cấp độ Local (Riêng biệt):** Sử dụng username/email khác cho một repository cụ thể (chạy lệnh bên trong thư mục project đó).
  ```bash
  git config user.name "Tên khác"
  git config user.email "email_khac@example.com"
  ```

### 2.4 Quy ước đặt tên Commit (Git Commit Convention)
Cú pháp tiêu chuẩn để viết thông điệp commit rõ ràng:
```text
<type>: <short_description>
```
* **`<type>`** bao gồm các loại chính như:
    * `feat`: Khi thêm một tính năng mới (Feature).
    * `fix`: Khi sửa lỗi (Bug fix).
    * `chore`: Các tác vụ vặt, cấu hình, không liên quan đến code tính năng hay sửa lỗi (ví dụ: cập nhật thư viện, gitignore).
* **`<short_description>`**: Mô tả ngắn gọn, súc tích về thay đổi vừa thực hiện.

---

## 3. JavaScript Basic

JavaScript (JS) là ngôn ngữ lập trình giúp trang web và trình duyệt hoạt động một cách linh hoạt, có tương tác.

### 3.1 Hello World
* **Cú pháp in ra màn hình console:** Có thể sử dụng dấu nháy đơn `'` hoặc nháy kép `"` cho chuỗi ký tự (string).
  ```javascript
  console.log("Hello World!"); // Sử dụng nháy kép
  console.log('Hello World!'); // Sử dụng nháy đơn
  ```
* **Cách thực thi file JS bằng Node.js:**
    * Chạy file ở thư mục hiện hành:
      ```bash
      node "tên_file.js"
      ```
    * Chạy file nằm bên trong folder: Sử dụng tính năng *Copy Path* trong VS Code để lấy đường dẫn đầy đủ của file.
      ```bash
      node "Đường_dẫn_tới_file.js"
      ```

### 3.2 Comment trong Code
Comment là các dòng chú thích giúp người đọc hiểu code hơn. Khi máy tính thực thi, các dòng comment sẽ bị bỏ qua hoàn toàn. Đây cũng là cách hiệu quả để tạm thời vô hiệu hóa (disable) dòng code mà bạn không muốn chạy.

* **Comment một dòng:** Dùng ký tự `//`. Chỉ có phần phía sau `//` trên dòng đó biến thành comment.
  ```javascript
  // Đây là comment một dòng
  console.log("Hello"); // Comment ở cuối dòng
  ```
* **Comment nhiều dòng:** Toàn bộ nội dung nằm trong khoảng từ `/*` đến `*/` sẽ là comment.
  ```javascript
  /* Đây là nội dung comment
     được viết trên nhiều dòng khác nhau
  */
  ```

### 3.3 Biến (Variable) và Hằng (Constant)

* **Biến (`let`, `var`):** Đại diện cho một ô lưu trữ dữ liệu mà giá trị của nó có thể thay đổi (gán lại) trong quá trình chạy chương trình.
  ```javascript
  let name = "Jake";
  name = "No longer Jake"; // Giá trị thay đổi tại dòng này
  console.log(name);      // Kết quả in ra: "No longer Jake"
  ```
  * *So sánh `let` và `var`:* `var` có thể khai báo lại và có phạm vi hoạt động toàn cục, trong khi `let` chặt chẽ hơn và hoạt động theo khối lệnh (Block Scope `{}`). **Khuyến nghị:** Ưu tiên dùng `let` để tránh các lỗi logic ngoài ý muốn.
* **Hằng số (`const`):** Đại diện cho dữ liệu mà giá trị của nó phải giữ nguyên và không thể gán lại sau khi đã khởi tạo.
  ```javascript
  const pi = 3.14;
  ```
* **Quy tắc lựa chọn:**
    * Mặc định hãy dùng `const` để mã nguồn an toàn, tường minh và dễ đọc hơn.
    * Chỉ dùng `let` khi bạn chắc chắn rằng biến đó sẽ cần gán lại giá trị mới ở phía sau. Không khuyến khích sử dụng `var`.

### 3.4 Kiểu dữ liệu (Data Types)
JavaScript có **8 kiểu dữ liệu**, được chia làm 2 nhóm chính:

#### 1. Primitive Types (Kiểu nguyên thủy):
* **Number:** Bao gồm cả số nguyên và số thực (số thập phân), cùng các giá trị đặc biệt như `Infinity` (vô hạn) và `NaN` (Not a Number - không xác định).
  ```javascript
  const age = 25;           // Số nguyên
  const price = 19.99;      // Số thực
  const infinity = Infinity; 
  const notANumber = NaN;
  ```
* **String:** Chuỗi ký tự. Có thể bao quanh bởi nháy kép, nháy đơn hoặc dấu backtick (dấu huyền `` ` ``).
  ```javascript
  const name = "John";           // Nháy kép
  const message = 'I like coding';// Nháy đơn
  const template = `Age: 10`;    // Dấu backtick
  ```
* **Boolean:** Chỉ nhận một trong hai giá trị logic: `true` (đúng) hoặc `false` (sai).
  ```javascript
  const isActive = true;
  const isComplete = false;
  ```
* **Các kiểu nguyên thủy khác:** `undefined`, `null`, `symbol`, `bigInt`.

#### 2. Reference Types (Kiểu tham chiếu):
* Chỉ gồm duy nhất 1 dạng dữ liệu là **Object** (Đối tượng).

> 💡 **Mẹo:** Để kiểm tra kiểu dữ liệu của một giá trị hoặc biến, ta sử dụng toán tử `typeof <tên_biến>`.

### 3.5 Toán tử (Operators)

#### 3.5.1 Toán tử so sánh bằng
* `==` (So sánh tương đối): Tự động chuyển đổi hai toán hạng về cùng một kiểu dữ liệu trước khi so sánh giá trị.
* `===` (So sánh tuyệt đối/chặt chẽ): So sánh cả kiểu dữ liệu lẫn giá trị. Nếu khác kiểu dữ liệu, kết quả trả về luôn là `false`.
  ```javascript
  5 == "5"   // true (vì chuỗi "5" được ép kiểu về số 5)
  5 === "5"  // false (vì một bên là Number, một bên là String)
  ```
  *Khuyên dùng:* Luôn sử dụng `===`.

#### 3.5.2 Toán tử so sánh khác
* `!=` (Khác tương đối): Kiểm tra xem hai giá trị có khác nhau tương đối hay không.
* `!==` (Khác tuyệt đối): Kiểm tra sự khác biệt nghiêm ngặt cả về giá trị lẫn kiểu dữ liệu.
  ```javascript
  5 != "5"   // false
  5 != "6"   // true
  5 !== "5"  // true (khác nhau về kiểu dữ liệu)
  5 !== 5    // false
  ```

#### 3.5.3 Toán tử so sánh lớn/nhỏ
* `>` (Lớn hơn), `<` (Nhỏ hơn), `>=` (Lớn hơn hoặc bằng), `<=` (Nhỏ hơn hoặc bằng).
  ```javascript
  5 > 10   // false
  5 >= 10  // false
  5 < 10   // true
  5 <= 10  // true
  ```

#### 3.5.4 Toán tử logic
Dùng để kết hợp nhiều điều kiện, kết quả trả về là một giá trị Boolean.
* `&&` (Toán tử AND): Chỉ trả về `true` khi tất cả các vế điều kiện đều đúng.
* `||` (Toán tử OR): Trả về `true` chỉ cần một trong các vế điều kiện đúng.

*Ví dụ thực tế:*
```javascript
const isMoreThan6 = true; // Làm việc trên 6 tháng
const isOfficial = false; // Nhân viên chính thức

// Điều kiện thưởng tháng 13 (Làm trên 6 tháng HOẶC là nhân viên chính thức)
const receive13 = isMoreThan6 || isOfficial; // Kết quả: true

// Điều kiện thưởng tháng 14 (Làm trên 6 tháng VÀ phải là nhân viên chính thức)
const receive14 = isMoreThan6 && isOfficial; // Kết quả: false
```

#### 3.5.5 Toán tử một ngôi (Unary Operators)
* **Toán tử đặt TRƯỚC (`++a`, `--a`):** Thay đổi giá trị của biến trước, sau đó mới trả về kết quả để thực hiện biểu thức tiếp theo.
* **Toán tử đặt SAU (`a++`, `a--`):** Trả về giá trị hiện tại của biến phục vụ biểu thức trước, sau đó mới thay đổi giá trị của biến.
  ```javascript
  // Toán tử nằm ở sau:
  let a = 10;
  let b = a++; 
  console.log(b); // Kết quả in ra: 10
  
  // Toán tử nằm ở trước:
  let x = 10;
  let y = ++x; 
  console.log(y); // Kết quả in ra: 11
  ```

#### 3.5.6 Toán tử toán học
* Bao gồm các phép tính cơ bản: Cộng `+`, Trừ `-`, Nhân `*`, Chia `/`.
  ```javascript
  const firstNumber = 5;
  const secondNumber = 10;
  const result = firstNumber + secondNumber;
  console.log(result); // Kết quả in ra: 15
  ```

### 3.6 Câu lệnh điều kiện (Conditional Statements)
Dùng để kiểm tra một hoặc nhiều điều kiện. Nếu điều kiện thỏa mãn (`true`), đoạn code bên trong khối lệnh mới được thực thi. JS hỗ trợ: `if`, `if...else`, `if...else if...else`, `switch...case`.

* Cú pháp cơ bản: `if (<điều kiện>) { // code }`
* *Các ví dụ minh họa:*
  ```javascript
  // Ví dụ 1
  let hour = 6;
  if (hour < 7) {
      console.log("Is not morning yet"); 
  }

  // Ví dụ 2: Kết hợp toán tử logic
  let score = 7;
  if (score < 8 && score > 5) {
      console.log("Học sinh tiên tiến"); 
  }

  // Ví dụ 3: Câu điều kiện lồng nhau (Nested If)
  let currentHour = 8;
  if (currentHour < 12) {
      if (currentHour > 7) {
          console.log("Ca sáng"); 
      }
  }
  ```

### 3.7 Vòng lặp (Loops)
Vòng lặp được sử dụng khi cần lặp lại một đoạn mã logic nhiều lần. 

* **Cú pháp vòng lặp `for` cơ bản:**
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log("Hello");
  }
  // Vòng lặp sẽ chạy tương ứng với i = 0, 1, 2, 3, 4 và in ra 5 lần chữ "Hello"
  ```

---
**KẾT THÚC BÀI HỌC 2**