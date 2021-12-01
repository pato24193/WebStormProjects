
// let promise = new Promise(((resolve, reject) => {
//     let execute = false;
//
//     if (execute) {
//         resolve('Da thuc hien loi hua');
//     } else {
//         reject('Khong thuc hien loi hua');
//     }
// }));

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
function sum(a: number, b: number) {
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

async function testAsync(){
    console.log(await sum(3, 5))
    return "done";
}

testAsync().then((success) => {
    console.log(success);
}, (error) => {
    console.log(error);
});

interface IStudent {
    id: number;
    name: string;
}

class Student implements IStudent {
    id: number;
    name: string;
}
