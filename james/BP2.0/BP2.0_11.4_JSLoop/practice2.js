// Bài 1: In dãy Finonaci

// let firstFibo = 1;
// let secondFibo = 1;
// let tmp = 0;
//
// document.writeln(firstFibo);
// document.writeln(secondFibo);
//
// for (let i = 3; i <= 20; i++) {
//     tmp = firstFibo;
//     firstFibo = secondFibo;
//     secondFibo += tmp;
//     document.writeln(secondFibo);
// }

// Bài 2: Tính giai thừa của một số nguyên dương

// let number = parseInt(prompt("Please input one positve number: "));
// let factorial = 1;
//
// for (let i = 2; i <= number; i++) {
//     factorial *= i;
// }
//
// document.writeln("Factorial(" + number + ") = " + factorial);

// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i >= j) {
//             document.writeln("*");
//         } else {
//             document.writeln("&ensp;");
//         }
//     }
//     document.write("<br>");
// }
//
// document.write("<br>");
//
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= 1; j--) {
//         if (j >= i) {
//             document.writeln("*");
//         } else {
//             document.writeln("&ensp;");
//         }
//     }
//     document.write("<br>");
// }
//
// document.write("<br>");
//
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= 1; j--) {
//         if (j > i) {
//             document.writeln("&ensp;");
//         } else {
//             document.writeln("*");
//         }
//     }
//     document.write("<br>");
// }
//
// document.write("<br>");
//
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i > j) {
//             document.writeln("&ensp;");
//         } else {
//             document.writeln("*");
//         }
//     }
//     document.write("<br>");
// }

// Bài 4: In hình chữ nhật

// for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= 20; j++) {
//         if (i === 1 || j === 1 || i === 7 || j === 20) {
//             document.writeln("*");
//         } else {
//             document.writeln("&ensp;");
//         }
//     }
//     document.writeln("<br>");
// }

// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
// Tiền lãi = Số tiền gửi x Lãi suất (% năm)/12

// let deposit = parseFloat(prompt("Please input deposit: "));
// let month = parseInt(prompt("Please input number of months: "));
// let interestRate = parseInt(prompt("Please input interest rate: "));
// let interestMoney = deposit * (interestRate / 100) / month;
//
// document.write("Interest money: " + interestMoney);

// Bài 6: In hình trái tim

/* HERE, we have set the size of Heart, size = 10 */
let a, b, size = 15;

/* FOR THE APEX OF HEART */
for (a = size/2; a <= size; a = a+2) {
    // FOR SPACE BEFORE PEAK-1 : PART 1
    for (b = 1; b < size-a; b = b+2)
        document.writeln("&ensp;");

    // FOR PRINTING PEAK-1 : PART 2
    for (b = 1; b <= a; b++)
        document.writeln("A");

    // FOR SPACE B/W PEAK-1 AND PEAK-2 : PART 3
    for (b = 1; b <= size-a; b++)
        document.writeln("&ensp;");

    // FOR PRINTING PEAK-2 : PART 4
    for (b = 1; b <= a-1; b++)
        document.writeln("A");

    document.writeln("<br>");
}

/*FOR THE BASE OF HEART ie. THE INVERTED TRIANGLE */
for (a = size; a >= 0; a--) {
    // FOR SPACE BEFORE THE INVERTED TRIANGLE : PART 5
    for (b = a; b < size; b++)
        document.writeln("&ensp;");

    // FOR PRINTING THE BASE OF TRIANGLE : PART 6
    for (b = 1; b <= ((a * 2) - 1); b++)
        document.writeln("B");

    document.writeln("<br>");
}