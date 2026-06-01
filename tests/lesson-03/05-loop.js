// Tính tổng từ 1 đến 100
let total = 0
for (let i = 1; i <= 100; i++){
    total  = total + i;
};
console.log(total);

// In ra bảng cửu chương từ 2 đến 9
// for (let i = 1; i<= 10; i++){
//     2 * i
// }
// console.log(i) bài này khó quá, em đã hỏi AI để ra phương án giải quyết nhưng như vậy không tính nên em xin phép không viết vào đây

// Tạo 1 mảng chứa các số lẻ từ 1 đến 99
let oddArr = [];
for (let i = 1; i <= 99; i++){
    if(i % 2 === 1){oddArr.push(i)
        
}};
console.log(oddArr);

// in ra 10 email dựa trên tên người dùng và số thứ tự (vd user1@example, user2@example, user3@example)
for (let i = 1; i <= 10; i++){
    console.log(`user${i}@example.com`);
};

/*Tính tổng doanh thu 12 tháng trong năm dựa trên doanh thu đã cho và in ra tổng doanh thu, biết cấu trúc object của mảng như sau
{"month": 2, "total": 100}*/

const revenueArray = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 150 },
    { "month": 3, "total": 120 },
    { "month": 4, "total": 200 },
    { "month": 5, "total": 180 },
    { "month": 6, "total": 210 },
    { "month": 7, "total": 90 },
    { "month": 8, "total": 130 },
    { "month": 9, "total": 160 },
    { "month": 10, "total": 220 },
    { "month": 11, "total": 170 },
    { "month": 12, "total": 250 }
];

let totalRevenue = 0
for (let i = 0; i <= 11; i++){
    totalRevenue = totalRevenue + revenueArray[i].total;
};
console.log(totalRevenue);