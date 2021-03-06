// 1. Khi báo biến string
// a. Không dùng từ khóa new
let str1 = "any string"; // Tao vung nho 1, "any string"
let str2 = "any string"; // Tham chieu toi cung vung nho 1, "any string"
let str3 = "abc"; // Tao vung nho 4, "abc"

// console.log("str1 == str2: " + (str1 == str2));
// console.log("str1 === str2: " + (str1 === str2));

// b. Dùng từ khóa new
let strNew1 = new String("any string"); // Tao vung nho 2, "any string"
let strNew2 = new String("any string"); // Tao vung nho 3, "any string"

// console.log("strNew1 == strNew2: " + (strNew1 == strNew2));
// console.log("strNew1 === strNew2: " + (strNew1 === strNew2));

// Dung ki tu dac biet
// \ + ki tu dac biet
// Vi dụ: \n, \t, \"...
// console.log("a\\b\\c");

// string ~ char[];

// 2. Giới thiệu thêm thuộc tính, phương thức string
let strEx = "abcxyz";
// console.log(strEx.substring(3, 5));
// console.log(strEx.slice(3, 5));

// let name = "    nguyen vu       thanh    tien    ";
// console.log(name.trim());

// var name = prompt("Nhập tên khách hàng: ");
// document.write(name + "<br>");

// 3. Regular Expression
// console.log(strEx.charAt(1));
// let str = "abbba";
// str = str.replace(/b/i, "c");
// console.log(str);

let patt = /a/;
// console.log(patt.test("Hello b"));

// [0-9], [a-z], [A-Z]
let str = "ab234mn";
let pattern = /2+/g;
let result = str.match(pattern);
console.log(result);

// [0-9], \d ~ digit, both

