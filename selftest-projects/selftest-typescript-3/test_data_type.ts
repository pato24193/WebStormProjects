//
// function sum(a: number, b: number): number {
//     return a + b;
// }
//
// console.log(sum(3, 5));
//
// interface IStudent {
//     id: number;
//     name: string;
//     date_of_birth: string;
//     display(): void;
// }
//
// let student: IStudent = {
//     id: 1,
//     name: "Nguyen Van A",
//     date_of_birth: "03/02/2021",
//     display(): void {
//         console.log("Id: " + this.id);
//     }
// };
//
// let studentTuple: [number, string, string];
// studentTuple = [1, "Nguyen Van A", "03/02/2021"];
//
//
// class Student {
//     id: number;
//     name: string;
//     date_of_birth: string;
//
//     constructor(id: number, name: string, date_of_birth: string) {
//         this.id = id;
//         this.name = name;
//         this.date_of_birth = date_of_birth;
//     }
//
//     display(): void {
//         console.log(this.id + " " + this.name + " " + this.date_of_birth);
//     }
//
// }
//
// let studentClass = new Student(1, "Nguyen Van A", "03/02/2021");
//
// console.log("interface");
// console.log(student);
// console.log("tuple");
// console.log(studentTuple);
// console.log("class");
// console.log(studentClass);
// studentClass.display();
// student.display();
//
// let value = false;
// let promiseObject = new Promise(
//     (resolve, reject) => {
//         if (value) {
//             resolve(value);
//         } else {
//             reject(value);
//         }
//     }
// );
//
// promiseObject.then(value1 => {
//     console.log(("Giu loi hua " + value1));
// },reason => {
//     console.log("Khong giu loi hua lan 1 " + reason);
// });

function httpGet(url: string): Promise<any> {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            } else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}

httpGet('https://api.github.com/search/repositories?q=angular').then(
    function (value) {
        console.log('Contents: ' + value);
    },
    function (reason) {
        console.error('Something went wrong', reason);
    }
);

