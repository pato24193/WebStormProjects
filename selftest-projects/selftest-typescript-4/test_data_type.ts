// function sum(num1: number, num2: number) {
//     return num1 + num2;
// }
//
// console.log(sum(2, 3));

let studentTuple: [number, string, string];
studentTuple = [1, "Nguyen Van A", "01/06/2000"];

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObjFromInterface: IStudent = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "02/06/2000"
};

class Student {
    id: number;
    name: string;
    dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}

let studentObj = new Student(3, "Nguyen Van C", "03/06/2000");

console.log(studentTuple);
console.log(studentObjFromInterface);
console.log(studentObj);