// function sum(number1: number, number2: number): number {
//     return number1 + number2;
// }
//
// console.log(sum(3, 4));

let studentTuple: [number, string, string] = [1, "Nguyen Van A", "02/06/2000"];

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObjFromI: IStudent = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "03/06/2000"
}

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

let studentObj: Student = new Student (3, "Nguyen Van C", "04/06/2000");

console.log(studentTuple);
console.log(studentObjFromI);
console.log(studentObj);