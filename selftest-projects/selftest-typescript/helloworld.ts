
// function sum(a: number, b: number) : number {
//     return a + b;
// }
//
// console.log(sum(2, 3));

// let promise = new Promise((resolve, reject) => {
//     // console.log("hello promise");
//
//     if (sum(2, 4) === 5) {
//         resolve("OK");
//     } else {
//         reject("Khong the ket noi den server");
//     }
// });
//
// promise.then(function(msg) {
//     console.log("Da thuc thi" + msg);
// }, function(errorMsg) { console.log(errorMsg) });

// interface IUser {
//     name: string,
//     age: number
// }
//
// let customer : IUser = {
//     name: "Hello",
//     age: 50
// };
//
// console.log(customer);
//
// let arrayInt = [2, 3, 4];

// for (let a of arrayInt) {
//     console.log(a);
// }

// arrayInt.forEach((num) =>
// console.log(num));
//
// let b = new Promise(() => {
//
// });

interface IStudent {
    id: number,
    name: string
}

let user: IStudent = {id: 1, name: "Tien"};
console.log(user.name);

let arrInt: Array<number> = [1, 2, 3, 4];
console.log(arrInt[0]);

console.log("Output: ")
arrInt.forEach((i) => {
    console.log(i);
});


let promiseTest = new Promise(function(resolve, reject) {
    if (2 % 3 == 0) {
        resolve("OK, duoc goy");
    } else {
        reject("NG, khong on");
    }
});

promiseTest.then(
    (msg) => {
        console.log("Ngon" + msg);
    },
    (msgError) => {
        console.log("Bad" + msgError);
    });
