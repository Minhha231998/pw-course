//Viết hàm multiply, dùng 2 tham số a và b và in ra kết quả. gọi hàm  với 2 giá  trị khác nhau
function multiply(a, b){
    let result = a * b;
    return `ket qua la ${result}`;
};
console.log(multiply(7, 9));
console.log(multiply(10,12));

/*viết hàm findMy với 3 tham số a, b, c trả về giá trị nhỏ nhất.
gọi hàm và in ra kết quả với 2 bộ số khác nhau*/

// 1. Định nghĩa hàm findMy với 3 tham số a, b, c
function findMy(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
};
let groupNumber1 = findMy(5, 8, 2);
console.log("Giá trị nhỏ nhất bộ 1 là:", groupNumber1);
let groupNumber2 = findMy(10, -3, 0);
console.log("Giá trị nhỏ nhất bộ 2 là:", groupNumber2);

/*viết hàm getTopStudent nhận 2 tham số:
- students: mảng các object, mỗi object chứa name và score.
- threshhold: ngưỡng điểm để được coi là top.
hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshhold.
gọi hàm với danh sách thực tế và in ra kết quả*/

function getTopStudent(students, threshhold) {
    let topStudentsName = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshhold) {
            // Đẩy TÊN của học sinh đó vào mảng kết quả
            topStudentsName.push(students[i].name);
        }
    }

    return topStudentsName;
}

let studentList = [
    { "name": "Nguyen Minh Khoi", "score": 85 },
    { "name": "Tran Mai Chi", "score": 92 },
    { "name": "Le Khanh An", "score": 47 },
    { "name": "Pham Dang Khoa", "score": 76 },
    { "name": "Vu Hoang Yen", "score": 63 },
    { "name": "Dang Tuan Kiet", "score": 99 },
    { "name": "Hoang Minh Tue", "score": 55 },
    { "name": "Bui Gia Bach", "score": 88 },
    { "name": "Do Linh Dan", "score": 42 },
    { "name": "Ngo Hoang Nam", "score": 71 }
];

let danhSachDatChuan = getTopStudent(studentList, 80);

console.log(`top student: ${danhSachDatChuan}`);

/*viết hàm calculateInterest nhận 3 tham số:
- principal: số tiền gửi ban đầu
- rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%)
- years: số năm gửi
hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn
total = principal + principal * rate * years/100.
Gọi hàm với ví dụ thực tế và in ra kết quả*/

function calculateInterest(principal, rate, years){
    let finalResult = 0;
    finalResult = principal + principal * rate/100 * years;
    return finalResult; 
}
console.log(`số tiền sau kì hạn của bạn là: ${calculateInterest(1000000, 10, 1)}`);
