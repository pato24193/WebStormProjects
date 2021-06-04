// function sum(number1: number, number2: number): number {
//     return number1 + number2;
// }
//
// console.log(sum(4, 8));

// transpile / compile
// tuple
let studentTuple: [number, string, string]
    = [123, "Nguyen Van A", "03/06/2000"];
console.log(studentTuple);
console.log(studentTuple[1]);

// interface
interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObjFromI: IStudent = {
    id: 456,
    name: "Nguyen Van B",
    dateOfBirth: "04/06/2000"
};

console.log(studentObjFromI);

// class
class Student {
    private _id: number;
    private _name: string;
    private _dateOfBirth: string;

    // constructor(id: number, name: string, dateOfBirth: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.dateOfBirth = dateOfBirth;
    // }

    constructor(id: number, name: string, dateOfBirth: string) {
        this._id = id;
        this._name = name;
        this._dateOfBirth = dateOfBirth;
    }

// abc()
}

class Student2 {
    id: number;
    name: string;
    dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

}

let studentObj =
    new Student(789, "Nguyen Van C", "05/06/2000");
let studentObj2 = new Student2(789, "Nguyen Van C", "05/06/2000");