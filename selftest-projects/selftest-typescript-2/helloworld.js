// let promise = new Promise(((resolve, reject) => {
//     let execute = false;
//
//     if (execute) {
//         resolve('Da thuc hien loi hua');
//     } else {
//         reject('Khong thuc hien loi hua');
//     }
// }));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//
// interface IStudent {
//     id: number;
//     name: string;
// }
//
// let student: IStudent = {
//     id: 1,
//     name: 'Tien'
// }
//
// console.log(student);
//
// let arrNum: number[] = [3, 4, 5, 1];
// arrNum.forEach(str => {
//     console.log(str);
// });
//
function sum(a, b) {
    return a + b;
}
//
// console.log('Sum: ' + sum(3, 5));
// function processCallback(promise, callbackSum) {
//     promise();
//     callbackSum();
// }
//
// processCallback(() => {
//     promise.then(result => {
//         console.log(result);
//     }, error => {
//         console.log(error);
//     });
// }, () => {
//     console.log('Sum: ' + sum(3, 5));
// });
// promise.then(result => {
//     console.log(result);
// }, error => {
//     console.log(error);
//     console.log('Sum: ' + sum(3, 5));
// });
function testAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(yield sum(3, 5));
        return "done";
    });
}
testAsync().then((success) => {
    console.log(success);
}, (error) => {
    console.log(error);
});
