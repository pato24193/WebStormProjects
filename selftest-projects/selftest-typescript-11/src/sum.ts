function sum2Num(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum2Num(3, 5));

let studentTuple: [number, string, string] = [322, 'Tien', '2022-10-14'];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj2: IStudent
    = {id: 232, name: 'Nguyen Van B', dateOfBirth: '2022-10-14'};
console.log(studentObj2);

class Student {
    private id: number;
    private name: string;
    private dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

}

let studentObj3 =
    new Student(23434, 'Nguyen Van C', '2022-10-14');
console.log(studentObj3);
