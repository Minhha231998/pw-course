# Key Takeaways: Buổi 3 - Git & JavaScript Continue

## 1. Git

### 1.1 Undo Things (Hoàn tác các thay đổi)

Việc quản lý các trạng thái của code giúp kiểm soát và sửa sai trong quá trình làm việc. Dưới đây là các câu lệnh hoàn tác cơ bản:

* **Từ Staging Area về Working Directory (Bỏ add):**
    * Hoàn tác một file nhất định: `git restore --staged <file_name>`
    * Hoàn tác toàn bộ các file: `git restore --staged .`
* **Từ Local Repository về Working Directory (Hủy commit):**
    * Cú pháp: `git reset HEAD~<số_commit>` (Ví dụ: `git reset HEAD~1` để hủy commit gần nhất và giữ lại code ở thư mục làm việc).
* **💡 Lưu ý quan trọng:** Commit đầu tiên (Root commit) trong một branch **không thể** dùng lệnh `git reset` để quay lại. Nếu bắt buộc phải reset commit đầu tiên này, giải pháp duy nhất là xóa thư mục ẩn `.git` đi và thực hiện khởi tạo lại từ đầu (`git init`).

---

### 1.2 Branching (Quản lý nhánh)

Branching (Rẽ nhánh) cho phép tạo ra các phiên bản code độc lập, giúp lập trình viên phát triển tính năng mới hoặc sửa lỗi mà không làm ảnh hưởng đến mã nguồn chính thức của dự án.

* **Nguyên tắc cốt lõi:** Luôn luôn cập nhật mã nguồn mới nhất từ server (`git pull`) trước khi tạo một nhánh mới để tránh xung đột dữ liệu (conflict).
    * Lệnh cập nhật: `git pull origin main`
* **Các câu lệnh thao tác với Nhánh:**
    * **Xem danh sách nhánh hiện có:** `git branch`
    * **Tạo nhánh mới:** `git branch <tên_branch>`
    * **Chuyển sang một nhánh khác:** `git checkout <tên_branch>`
    * **Vừa tạo vừa chuyển sang nhánh mới (Phổ biến):** `git checkout -b <tên_branch>`
    * **Xóa một nhánh (sau khi đã merge hoặc không cần thiết):** `git branch -d <tên_branch>`

---

### 1.3 Git Ignore File (`.gitignore`)

File `.gitignore` là file cấu hình dùng để chỉ định cho Git biết những file hoặc thư mục nào cần được **bỏ qua (untrack)**, không ghi nhận sự thay đổi và không đẩy lên repository.

* **Tại sao cần sử dụng `.gitignore`?**
    Trong dự án thực tế, có rất nhiều file không cần thiết hoặc không nên đưa lên server:
    * *File tạm của hệ điều hành:* `.DS_Store`, `Thumbs.db`
    * *Thư mục dependencies:* `node_modules/` (thường rất nặng)
    * *File build và artifact:* Thư mục `/dist`, `/build`
    * *File cấu hình cá nhân hoặc dữ liệu nhạy cảm:* `.env` (chứa mật khẩu, token, secret key)
    * *File log và database local:* `error.log`, `local.db`

* **Cú pháp cấu hình trong `.gitignore`:**

| Cú pháp | Ý nghĩa / Ví dụ |
| :--- | :--- |
| `# dòng comment` | Dùng để ghi chú, Git sẽ bỏ qua dòng này |
| `abc.txt` | Bỏ qua một file cụ thể tên là `abc.txt` |
| `*.log` | Bỏ qua tất cả các file có đuôi `.log` |
| `ten_thu_muc/` | Bỏ qua toàn bộ thư mục và file bên trong thư mục `ten_thu_muc/` |
| `**/*.tmp` | Bỏ qua tất cả file `.tmp` nằm ở bất kỳ thư mục con nào |
| `/TODO` | Chỉ bỏ qua file `TODO` nằm ở thư mục gốc của dự án |
| `doc/**/*.txt` | Bỏ qua tất cả các file `.txt` nằm bên trong thư mục `doc/` (bao gồm cả các thư mục con của `doc/`) |
| `!important.txt` | **Ngoại lệ:** KHÔNG bỏ qua file này (dù trước đó có quy tắc khớp với nó) |
# Key Takeaways: Buổi 3 - Git & JavaScript Continue

## 1. Git

### 1.1 Undo Things (Hoàn tác các thay đổi)

Việc quản lý các trạng thái của code giúp kiểm soát và sửa sai trong quá trình làm việc. Dưới đây là các câu lệnh hoàn tác cơ bản:

* **Từ Staging Area về Working Directory (Bỏ add):**
    * Hoàn tất một file nhất định: `git restore --staged <file_name>`
    * Hoàn tất toàn bộ các file: `git restore --staged .`
* **Từ Local Repository về Working Directory (Hủy commit):**
    * Cú pháp: `git reset HEAD~<số_commit>` (Ví dụ: `git reset HEAD~1` để hủy commit gần nhất và giữ lại code ở thư mục làm việc).
* **💡 Lưu ý quan trọng:** Commit đầu tiên (Root commit) trong một branch **không thể** dùng lệnh `git reset` để quay lại. Nếu bắt buộc phải reset commit đầu tiên này, giải pháp duy nhất là xóa thư mục ẩn `.git` đi và thực hiện khởi tạo lại từ đầu (`git init`).

---

### 1.2 Branching (Quản lý nhánh)

Branching (Rẽ nhánh) cho phép tạo ra các phiên bản code độc lập, giúp lập trình viên phát triển tính năng mới hoặc sửa lỗi mà không làm ảnh hưởng đến mã nguồn chính thức của dự án.

* **Nguyên tắc cốt lõi:** Luôn luôn cập nhật mã nguồn mới nhất từ server (`git pull`) trước khi tạo một nhánh mới để tránh xung đột dữ liệu (conflict).
    * Lệnh cập nhật: `git pull origin main`
* **Các câu lệnh thao tác với Nhánh:**
    * **Xem danh sách nhánh hiện có:** `git branch`
    * **Tạo nhánh mới:** `git branch <tên_branch>`
    * **Chuyển sang một nhánh khác:** `git checkout <tên_branch>`
    * **Vừa tạo vừa chuyển sang nhánh mới (Phổ biến):** `git checkout -b <tên_branch>`
    * **Xóa một nhánh (sau khi đã merge hoặc không cần thiết):** `git branch -d <tên_branch>`

---

### 1.3 Git Ignore File (`.gitignore`)

File `.gitignore` là file cấu hình dùng để chỉ định cho Git biết những file hoặc thư mục nào cần được **bỏ qua (untrack)**, không ghi nhận sự thay đổi và không đẩy lên repository.

* **Tại sao cần sử dụng `.gitignore`?**
    Trong dự án thực tế, có rất nhiều file không cần thiết hoặc không nên đưa lên server:
    * *File tạm của hệ điều hành:* `.DS_Store`, `Thumbs.db`
    * *Thư mục dependencies:* `node_modules/` (thường rất nặng)
    * *File build và artifact:* Thư mục `/dist`, `/build`
    * *File cấu hình cá nhân hoặc dữ liệu nhạy cảm:* `.env` (chứa mật khẩu, token, secret key)
    * *File log và database local:* `error.log`, `local.db`

* **Cú pháp cấu hình trong `.gitignore`:**

| Cú pháp | Ý nghĩa / Ví dụ |
| :--- | :--- |
| `# dòng comment` | Dùng để ghi chú, Git sẽ bỏ qua dòng này |
| `abc.txt` | Bỏ qua một file cụ thể tên là `abc.txt` |
| `*.log` | Bỏ qua tất cả các file có đuôi `.log` |
| `ten_thu_muc/` | Bỏ qua toàn bộ thư mục và file bên trong thư mục `ten_thu_muc/` |
| `**/*.tmp` | Bỏ qua tất cả file `.tmp` nằm ở bất kỳ thư mục con nào |
| `/TODO` | Chỉ bỏ qua file `TODO` nằm ở thư mục gốc của dự án |
| `doc/**/*.txt` | Bỏ qua tất cả các file `.txt` nằm bên trong thư mục `doc/` (bao gồm cả các thư mục con của `doc/`) |
| `!important.txt` | **Ngoại lệ:** KHÔNG bỏ qua file này (dù trước đó có quy tắc khớp với nó) |

---

## 2. JavaScript Continue

### 2.1 Code Convention (Quy ước viết code)

Code Convention là các quy tắc chung khi viết mã nguồn. Việc tuân thủ convention giúp code sạch sẽ, thống nhất, giúp các thành viên khác trong team dễ dàng đọc và bảo trì.

* **Các quy ước đặt tên phổ biến:** `snake_case`, `camelCase`, `kebab-case`, `UPPER_SNAKE_CASE`, `PascalCase`.
* **🚨 Quy ước áp dụng riêng trong lớp học:**
    * `camelCase` (Lạc đà): Dùng đặt tên **biến** và **hàm** (Ví dụ: `myName`, `getUserData()`).
    * `kebab-case` (Cột gạch ngang): Dùng đặt tên **file** và **folder** (Ví dụ: `git-homework/`, `script-lesson3.js`).
    * `PascalCase` (Viết hoa chữ cái đầu mỗi từ): Dùng đặt tên **class** (Ví dụ: `ProductService`).
    * `snake_case`: Tạm thời không sử dụng trong phạm vi học phần này.

---

### 2.2 Console Log Nâng Cao

* **Sử dụng dấu nháy kép `" "` và nháy đơn `' '`:** Về tính năng hoàn toàn giống nhau. Tuy nhiên, để tránh lỗi cú pháp khi nội dung chuỗi có chứa dấu nháy, ta áp dụng quy tắc xen kẽ:
    * Nội dung chứa nháy kép `"` $\rightarrow$ Bọc ngoài bằng nháy đơn `' '` (Ví dụ: `console.log('Anh ấy nói: "Xin chào!"');`)
    * Nội dung chứa nháy đơn `''` $\rightarrow$ Bọc ngoài bằng nháy kép `" "` (Ví dụ: `console.log("It's a beautiful day");`)
* **Formatted Console Log (Template Literals):** Khi muốn in ra một chuỗi chứa giá trị của biến, ta bọc chuỗi bằng dấu **backtick (\`)** (phím dưới nút Esc) và truyền biến qua cú pháp `${tên_biến}`.
    ```javascript
    let myName = "Jake Nguyễn";
    console.log(`tôi tên là ${myName}`); // Kết quả: tôi tên là Jake Nguyễn
    ```
* **Nối chuỗi bằng toán tử cộng (`+`):** Cách làm truyền thống để cộng chuỗi và biến.
    ```javascript
    let myName = "Jake Nguyễn";
    console.log("tôi tên là " + myName);
    ```

---

### 2.3 Object (Đối tượng)

Object là kiểu dữ liệu dùng để lưu trữ thông tin dưới dạng cặp **Key - Value** (Khóa - Giá trị). Object có thể được gán vào một biến (`let`) hoặc một hằng số (`const`).

* **Cú pháp khởi tạo:** Sử dụng dấu ngoặc nhọn `{}`. Các cặp key-value ngăn cách bằng dấu hai chấm `:`, và các thuộc tính cách nhau bằng dấu phẩy `,`.
    ```javascript
    let myItems = {
      item1: "key",
      item2: "phone",
      item3: "wallet"
    };
    ```

* **Cách truy xuất/in giá trị trong Object:**

#### Cách 1: Sử dụng Dấu chấm (`.`) - Phổ biến nhất
Áp dụng khi tên thuộc tính (key) là một chuỗi tiêu chuẩn, không chứa ký tự đặc biệt.
```javascript
const user = {
  name: "Hoàng",
  age: 25,
  "job-title": "Web Developer"
};

console.log(user.name); // Kết quả: Hoàng
console.log(user.age);  // Kết quả: 25
```
#### Cách 2: Dùng Dấu ngoặc vuông (`[]`)
Bắt buộc phải dùng cách này trong 2 trường hợp cụ thể:
1. **Tên thuộc tính chứa ký tự đặc biệt** (dấu gạch ngang, khoảng trắng). *Lưu ý: Phải bọc tên key trong dấu nháy.*
2. **Tên thuộc tính nằm trong một biến số (Dynamic Key).**

Cú pháp: `console.log(objectName["keyName"]);`

```javascript
// Trường hợp 1: Key có dấu gạch ngang (user.job-title sẽ báo lỗi cú pháp)
console.log(user["job-title"]); // Kết quả: Web Developer

// Trường hợp 2: Tên key được lưu trong một biến khác
const keyToFind = "age";
console.log(user[keyToFind]);   // Kết quả: 25 (tương đương user["age"])
```
### 2.4 Array (Mảng)

Array là một trong những cấu trúc dữ liệu quan trọng và được dùng nhiều nhất trong JavaScript. Array giống như một chiếc hộp mà người dùng bỏ tất cả vật phẩm vào trong mà không cần phân loại dưới dạng key-value như object. Tuy nhiên, nó vẫn có vị trí cố định cho từng vật phẩm và vị trí này bắt đầu tính từ số 0.

* **Cách tạo một Array:** Để tạo một Array, bạn bọc các giá trị bên trong một cặp dấu ngoặc vuông `[ ]`, các phần tử cách nhau bằng dấu phẩy `,`.
    ```javascript
    // Một mảng chứa danh sách các loại trái cây
    const fruits = ["Táo", "Chuối", "Cam"];

    // Một mảng chứa các con số
    const numbers = [10, 20, 30, 40];
    ```

* **Cách lấy giá trị ra (Sử dụng Chỉ số - Index):** Mỗi phần tử trong Array đều có một "số ghế" của nó, trong lập trình gọi là **Index**.
    ```javascript
    const fruits = ["Táo", "Chuối", "Cam"];
    // Ghế số (Index): 0        1        2

    console.log(fruits[0]); // Kết quả: Táo (Phần tử đầu tiên)
    console.log(fruits[1]); // Kết quả: Chuối
    ```

* **Kiểm tra độ dài của mảng:** Nếu muốn biết mảng đó đang có tổng cộng bao nhiêu phần tử, hãy dùng thuộc tính `.length`.
    ```javascript
    console.log(fruits.length); // Kết quả: 3
    ```

---

### 2.5 Function (Hàm)

Function là một đoạn code được đặt tên, có tính đóng gói cao, có thể tái sử dụng nhiều lần và thực hiện một nhiệm vụ hoặc một phép tính toán cụ thể.

* **Cách khai báo:**
    ```javascript
    function nameOfFunction(parameter) {
      // Khối lệnh xử lý code
    }
    ```
* **Ví dụ:**
```javascript
function chaoHoi(name = "bạn hiền") {
  return `Xin chào ${name}!`;
};
console.log(chaoHoi("Hoàng")); // Kết quả: Xin chào Hoàng!
console.log(chaoHoi());        // Kết quả: Xin chào bạn hiền! (Tự lấy mặc định)
```
* **⚠️ Lưu ý quan trọng:** Cần phải có từ khóa `return` ở trong block code của function nếu muốn hàm trả về một kết quả cụ thể. Nếu không có `return`, giá trị trả về mặc định của function khi được gọi sẽ luôn là `undefined`.
