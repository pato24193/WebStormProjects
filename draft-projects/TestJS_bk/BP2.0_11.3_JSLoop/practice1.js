// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành

// for (let i = 1; i <= 100; i++) {
//     document.writeln(i);
//     if (i === 99) {
//         alert("Complete!");
//     }
// }

// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ

// let temperature = prompt("Please input temperature: ");
//
// if (temperature > 100) {
//     document.write("Please decrease temperature!");
// } else if (temperature < 20) {
//     document.write("Please increase temperature!");
// } else {
//     document.write("OK");
// }

// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên

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

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5

// let firstFibo = 1;
// let secondFibo = 1;
// let tmp = 0;
//
// while (true) {
//     tmp = firstFibo;
//     firstFibo = secondFibo;
//     secondFibo += tmp;
//
//     if (secondFibo % 5 === 0) {
//         document.writeln("First Fibonacci number divide all 5: " + secondFibo);
//         break;
//     }
// }

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci

// let firstFibo = 1;
// let secondFibo = 1;
// let tmp = 0;
// let sum = firstFibo + secondFibo;
//
// for (let i = 3; i <= 20; i++) {
//     tmp = firstFibo;
//     firstFibo = secondFibo;
//     secondFibo += tmp;
//     sum += secondFibo;
// }
//
// document.writeln("Sum: " + sum);

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên

// let sum = 7;
// let number = 8;
// let count = 1;
//
// while (true) {
//     if (number % 7 === 0) {
//         sum += number;
//         count++;
//     }
//
//     number++;
//
//     if (count === 30) {
//         break;
//     }
// }
//
// document.writeln("Sum of 30 numbers, which divide all 7: " + sum);

// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.writeln("FizzBuzz");
    } else if (i % 3 === 0) {
        document.writeln("Fizz");
    } else if (i % 5 === 0) {
        document.writeln("Buzz");
    } else {
        document.writeln(i);
    }
}
