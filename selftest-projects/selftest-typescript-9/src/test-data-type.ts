function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(3, 5));

let studentTuple: [number, string, string] =
    [123, "Nguyen Van An", "2022-03-02"];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj: IStudent =
    {id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-03-02'};
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
}

let studentObj2 =
    new Student(789, 'Nguyen Van C', '2022-03-02');

console.log(studentObj2);
