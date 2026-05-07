/*Cân nặng lý tưởng = số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = số lẻ  của chiều cao
Mức cân tối thiểu = số lẻ của chiều cao x 8 rồi chia 10
Như vậy nếu bạn cao 1,7m tức 170cm thì:
- Cân nặng lý tưởng của bạn: 70 x 9 : 10 = 63kg
- Cân nặng tối đa: 70kg
- Cân nặng tối thiểu: 70 x 8 : 10 = 56kg

Phạm  vi áp dụng: Công thức áp dụng cho chiều cao > 100*/

let height = 170;
let idealweight = (height - 100) * 9 / 10;
let maximumWeight = height - 100;
let minimumWeight = (height - 100) * 8 / 10;
console.log(idealweight, maximumWeight, minimumWeight);

