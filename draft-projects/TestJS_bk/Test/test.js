// OOP = Object Oriented Programming
// 1. Hướng đối tượng là gì?
//
//     NhanVien
//     thuoc tinh
// name
// age
// address
// phone
// hanh dong, phuong thuc, ham, function
//     diLam()
// an()
// uong()
// ...

// 2. Class là gì? Cách tạo.
//     Class: template, frame, mo hinh mo ta mot doi tuong trong thuc te
// Cu phap:
//     class TenClass {
//         thuoctinh1;
//         thuoctinh2;
//         thuoctinh3;
//     ...
//         constructor(tt1, tt2, tt3) {
//             this.thuoctinh1 = tt1;
//         }
//
//         hanhDong1() {
//
//         }
//
//         hanhDong2(thuoctinhBatki) {
//
//         }
//     }
//
// Thanh phan cua 1 class:
// 1. Ten class
// 2. Cac thuoc tinh cua class
// 3. constructor: phuong thuc khoi tao
// 4. Cac phuong thuc, hanh dong
//

class Person {
    name;
    age;
    address;
    phone;

    constructor(n, a, address) { // new
        this.name = n;
        this.age = a;
        this.address = address;
    }

    eat() {
        console.log(this.name + " eat!");
    }

    drink() {
        console.log(this.name + " drink!");
    }

    getAge() {
        console.log(this.name + " is " + this.age + " years old.");
    }

    functionAll() {
        this.eat();
        this.drink();
        this.getAge();
    }

}

// 3. Object là gì? Cách tạo
// Object la the hien cua 1 class
let person = new Person("Chau");
let person2 = new Person("", "20");
let person3 = new Person();
person.setProperty("Cuong", 20, "QN");

// Encapsulation (Tinh dong goi)

console.log(person.address);