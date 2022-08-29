let a: number = 3;
let b: string = 'Hello';

console.log(a);
console.log(b);

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(6, 12));

let studentTuple: [number, string, string]
    = [123, 'Nguyen Van A', '2000-07-15'];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj1: IStudent
    = {id: 456,
    name: 'Nguyen Van B',
    dateOfBirth: '2000-07-16'};

console.log(studentObj1);

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

let studentObj2 =
    new Student(789, 'Nguyen Van C', '2000-07-17');

console.log(studentObj2);
