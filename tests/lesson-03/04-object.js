//tạo object car sau đó in ra năm sản xuất của xe
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021,
};
console.log(`release year ${car.year}`);

/*Tạo 1 object person có thuộc tính name, address (là 1 object lồng chứa các thuộc tính street, city, country).
In ra tên đường của người này*/
let person = {
    "name": "Jake Nguyen",
    "address": {
        "street": "Le Duan",
        "city": "Ha Noi",
        "country": "Viet Nam",
    },
};
console.log(`Street = ${person.address.country}`);

/*Tạo 1 object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông
Biết object student bao gồm name và grades, trong đó grades là 1 object với 2 thuộc tính kiểu number cho english và math*/
let student = {
    "name": "Jake Nguyen",
    "grades": {
        "english": 10,
        "math": 5,
    },
};
console.log(student["grades"]["math"]);

/*Tạo 1 object tên là settings để quản lý cài đặt ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume
và in ra object mới*/
let settings = {
    volume: 100,
    brightness: 100,
};
settings.volume = 50;
console.log(settings.volume);

//Tạo 1 object bike và sau đó thêm thuộc tính vào object đó
let bike = {};
bike.color = "green";
console.log(bike.color);

//Tạo 1 object tên là employee với các thuộc tính sau: name, age và xóa thuộc tính age khỏi object này
let employee = {
    name: "Jake Nguyen",
    age: "29",
};
delete employee.age
console.log(employee);

/*Một trường học có lớp và các học sinh như sau:
- Class A: An, Bình, Châu.
- ClassB: Đào, Hương, Giang.
Hãy viết code để đáp ứng các điều kiện sau:
- Khai báo tên biến school
- tên class là tên thuộc tính, giá trị của các thuộc tính này là 1 mảng chứa tên các học sinh*/
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}

console.log(school);
