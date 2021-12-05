function sum2Num(a: number, b: number) {
    return a + b;
}

console.log(sum2Num(4, 5));

// tuple
let studentObj: [number, string, string]
    = [123, 'Nguyen Van A', '2000-01-12'];

console.log(studentObj);

// interface
interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj2: IStudent
    = {id: 456, name: 'Nguyen Van B', dateOfBirth: '2000-01-13'};
console.log(studentObj2);

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

let studentObj3 =
    new Student(789, 'Nguyen Van C', '2000-01-14');
console.log(studentObj3);
