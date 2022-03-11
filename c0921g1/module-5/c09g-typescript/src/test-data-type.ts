function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(8, 7));

let studentTuple: [number, string, string] =
    [123, 'Nguyen Van A', '2022-03-03'];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj: IStudent =
    {id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-03-04'}
console.log(studentObj);

class Student {
    id: number;
    name: string;
    dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getId(): number {
        return this.id;
    }
}

let studentObj2 = new Student(789, 'Nguyen Van C', '2022-03-05');
console.log(studentObj2);
