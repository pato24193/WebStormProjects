function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 10));

// tuple
let studentTuple: [number, string, string] =
    [123, 'Nguyen Van A', '2022-01-21'];

console.log(studentTuple);

// interface
interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;

}

let studentObj: IStudent =
    {id: 789, name: 'Nguyen Van B', dateOfBirth: '2022-01-22'}
console.log(studentObj);

// class
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

let studentObj2: Student =
    new Student(456, 'Nguyen Van C', '2022-01-23');
console.log(studentObj2);
