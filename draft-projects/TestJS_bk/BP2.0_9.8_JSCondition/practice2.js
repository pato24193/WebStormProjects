// Bài 1: Chuyển từ độ C sang độ F.
//     °C  x  9/5 + 32 = °F

// let celcius = parseFloat(prompt("Please input celcius: "));
// let f = celcius * 1.8 + 32;
//
// document.writeln("F: " + f);

// Bài 2: Chuyển từ mét sang feet:
//     ft =m * 3.2808

// let meter = parseFloat(prompt("Please input meter: "));
// let feet = meter * 3.2808
//
// document.writeln("Feet: " + feet);

// Bài 3: Tính diện tích hình vuông khi biết cạnh

// let a = parseFloat(prompt("Please input a: "));
// let area = a * a;
//
// document.writeln("Area square: " + area);

// Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b

// let width = parseFloat(prompt("Please input width: "));
// let height = parseFloat(prompt("Please input height: "));
// let area = width * height;
//
// document.writeln("Area rectangle: " + area);

// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b

// let a = parseFloat(prompt("Please input a: "));
// let b = parseFloat(prompt("Please input b: "));
// let area = (a * b)/2;
//
// document.writeln("Area triangle: " + area);

// Bài 6: Giải phương trình bậc 1.

// let a = parseFloat(prompt("Please input a: "));
// let b = parseFloat(prompt("Please input b: "));
//
// if (a === 0) {
//     document.write("Program is no solution");
// } else {
//     let result = -b / a;
//     document.write("x = " + result);
// }

// Bài 7: Giải phương trình bậc 2.

// let a = parseFloat(prompt("Please input a: "));
// let b = parseFloat(prompt("Please input b: "));
// let c = parseFloat(prompt("Please input c: "));
// let delta = b * b - 4 * a * c;
//
// if (delta < 0) {
//     document.write("Program is no solution");
// } else if (delta === 0) {
//     let x = -b / (2 * a);
//     document.write("x = " + x);
// } else {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     document.write("x1 = " + x1 + ", x2 = " + x2);
// }

// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.

// let a = parseInt(prompt("Please input one number: "));
//
// if (a > 0 && a <= 120) {
//     document.writeln(a + " is age.");
// } else {
//     document.writeln(a + " is not age.");
// }

// Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là
// a,b,c > 0
// a + b > c
// b + c > a
// a + c > b

// let a = parseFloat(prompt("Please input a: "));
// let b = parseFloat(prompt("Please input b: "));
// let c = parseFloat(prompt("Please input c: "));
//
// if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
//     document.write(a + ", " + b + ", " + c + " is a triangle");
// } else {
//     document.write(a + ", " + b + ", " + c + " is not a triangle");
// }

// Bài 10: Viết chương trình tính giá điện
// Bậc 1: Cho kWh từ 0 - 50 là 1.678
// Bậc 2: Cho kWh từ 51 - 100 là 1.734
// Bậc 3: Cho kWh từ 101 - 200 là 2.014
// Bậc 4: Cho kWh từ 201 - 300 là 2.536
// Bậc 5: Cho kWh từ 301 - 400 là 2.834
// Bậc 6: Cho kWh từ 401 trở lên là 2.927

// let kWh = parseInt(prompt("Please input kWh: "));
// let billElectricity = 0;
//
// if (kWh >= 0 && kWh <= 50) {
//     billElectricity = kWh * 1.678;
// } else if (kWh >= 51 && kWh <= 100) {
//     billElectricity = kWh * 1.734;
// } else if (kWh >= 101 && kWh <= 200) {
//     billElectricity = kWh * 2.014;
// } else if (kWh >= 201 && kWh <= 300) {
//     billElectricity = kWh * 2.536;
// } else if (kWh >= 301 && kWh <= 400) {
//     billElectricity = kWh * 2.834;
// } else {
//     billElectricity = kWh * 2.927;
// }
//
// document.writeln("Bill electricity: " + billElectricity);

// Bài 11: Viết chương trình tính thuế thu nhập cá nhân
// Tinh theo thang (trieu dong)
// < 5: 5%
// 5 - 10: 10%
// 10 - 18: 15%
// 18 - 32: 20%
// 32 - 52: 25%
// 52 - 80: 30%
// > 80: 35%

// let salary = parseFloat(prompt("Please input salary of month: "));
// let tax = 0;
//
// if (salary < 5) {
//     tax = salary  * 0.05;
// } else if (salary >= 5 && salary < 10) {
//     tax = salary * 0.1;
// } else if (salary >= 10 && salary < 18) {
//     tax = salary * 0.15;
// } else if (salary >= 18 && salary < 32) {
//     tax = salary * 0.2;
// } else if (salary >= 32 && salary < 52) {
//     tax = salary * 0.25;
// } else if (salary >= 52 && salary < 80) {
//     tax = salary * 0.3;
// } else {
//     tax = salary * 0.35;
// }
//
// document.write("Tax = " + tax);

// Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
// Tiền lãi = Số tiền gửi x Lãi suất (% năm)/12

// let deposit = parseFloat(prompt("Please input deposit: "));
// let month = parseInt(prompt("Please input number of months: "));
// let interestRate = parseInt(prompt("Please input interest rate: "));
// let interestMoney = deposit * (interestRate / 100) / month;
//
// document.write("Interest money: " + interestMoney);