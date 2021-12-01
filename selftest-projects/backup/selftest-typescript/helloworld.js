// function sum(a: number, b: number) : number {
//     return a + b;
// }
//
// console.log(sum(2, 3));
let user = { id: 1, name: "Tien" };
console.log(user.name);
let arrInt = [1, 2, 3, 4];
console.log(arrInt[0]);
console.log("Output: ");
arrInt.forEach((i) => {
    console.log(i);
});
let promiseTest = new Promise(function (resolve, reject) {
    if (2 % 3 == 0) {
        resolve("OK, duoc goy");
    }
    else {
        reject("NG, khong on");
    }
});
promiseTest.then((msg) => {
    console.log("Ngon" + msg);
}, (msgError) => {
    console.log("Bad" + msgError);
});
