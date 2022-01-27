function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(3, 5));

let studentTuple: [number, string, string]
    = [321, 'Nguyen Van An', '2022-01-20'];

console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj: IStudent = {
    id: 342,
    name: 'Nguyen Van B',
    dateOfBirth: '2022-01-21'
}

console.log(studentObj);

class Student {
    private id: number;
    protected name: string;
    public dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}

let studentObj2 = new Student(
    993, 'Nguyen Van C', '2022-01-22');
console.log(studentObj2);
