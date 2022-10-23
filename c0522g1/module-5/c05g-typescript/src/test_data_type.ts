function sum2Num(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum2Num(5, 78));

let studentObj1: [number, string, string]
    = [123, 'Nguyen Van A', '2022-10-14'];
console.log(studentObj1);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj2: IStudent =
    {id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-10-14'};
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
    new Student(789, 'Nguyen Van C', '2022-10-14');
console.log(studentObj3);


