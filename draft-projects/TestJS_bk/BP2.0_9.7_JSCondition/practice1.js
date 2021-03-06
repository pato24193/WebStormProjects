// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

// let a = prompt("Please input a");
// let b = prompt("Please input b");
//
// if (a % b == 0) {
//     document.write("a divide all b.");
// } else {
//     document.write("a doesn't divide all b.");
// }

// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.

// let age = prompt("Please input age");
//
// if (age >= 16) {
//     document.write("Student can join class 10.");
// } else {
//     document.write("Student can't join class 10.");
// }

// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

// let number = prompt("Please input number");
//
// if (number >= 0) {
//     document.write("Number is postive");
// } else {
//     document.write("Number is negatvie");
// }

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

// let a = prompt("Please input a");
// let b = prompt("Please input b");
// let c = prompt("Please input c");
//
// if (a > b && a > c) {
//     document.write(a + " is greater than " + b + " and " + c);
// } else if (b > a && b > c) {
//     document.write(b + " is greater than " + c + " and " + a);
// } else if (c > a && c > b) {
//     document.write(c + " is greater than " + a + " and " + b);
// } else {
//     document.write("N/A");
// }

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// Hệ số các loại điểm kiểm tra
// Kiểm tra miệng, 15 phút: tính hệ số 1
// Kiểm tra 1 tiết: tính hệ số 2
// Kiểm tra học kỳ: tính hệ số 3
// -------------------------------------------------------
// Loại giỏi: điểm trung bình các môn đạt từ 8 điểm trở lên
// Loại khá: điểm trung bình môn đạt 6.5- 7.9
// Loại trung bình: điểm trung bình môn đạt từ 5.2-6.4
// Loại yếu: điểm trung bình môn đạt từ 4.0-4.9
// Loại kém: không đạt những tiêu chuẩn xếp loại trên.

// let test15 = parseFloat(prompt("Please input test 15 minutes: "));
// let test1Period = parseFloat(prompt("Please input test 1 period: "));
// let testFinal = parseFloat(prompt("Please input final test: "));
// let averageGrade = (test15 + test1Period * 2 + testFinal * 3) / 6;
//
// if (averageGrade >= 8) {
//     document.write("The student is very good!");
// } else if (averageGrade >= 6.5 && averageGrade <= 7.9) {
//     document.write("The student is good!");
// } else if (averageGrade >= 5.2 && averageGrade <= 6.4) {
//     document.write("The student is average!");
// } else if (averageGrade >= 4 && averageGrade <= 4.9) {
//     document.write("The student is bad!");
// } else {
//     document.write("The student is very bad!");
// }

// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// Ví dụ: Giá trị hóa đơn = 650.000
// Khoảng giá trị: 0-100.000 => 2%, 100.000-500.000 => 3%, 500.000 trở lên => 5%

// let totalBills = parseFloat(prompt("Please input total bills: "));
// let poundage = 0;
//
// if (totalBills >= 500000) {
//     poundage = totalBills * 0.05;
// } else if (totalBills >= 100000 && totalBills < 500000) {
//     poundage = totalBills * 0.03;
// } else {
//     poundage = totalBills * 0.02;
// }
//
// document.write("Poundage: " + poundage);

// Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
// noi mang: 6s = 80VND
// ngoai mang: 6s = 89VND

let second = 180;
/* 1: noi mang, 2: ngoai mang */
let type = 0;
let ratesPhone = 0;

if (type == 1) {
    ratesPhone = second * 80;
} else {
    ratesPhone = second * 89;
}

document.write("Rates phone: " + ratesPhone);