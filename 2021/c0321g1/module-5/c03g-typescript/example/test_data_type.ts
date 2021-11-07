function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 9));

// Tuple
let studentObj: [number, string, string] = [1, "Nguyen Van A", "2021-08-19"];

console.log(studentObj);

// Interface
interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
    // sayHi:() => string;
}

let studentObj2: IStudent =
    {id: 2, name: 'Nguyen Van B', dateOfBirth: '2021-08-20'};
console.log(studentObj2);

// Class
class Student {
    private id: number;
    protected name: string;
    dateOfBirth: string;

    constructor(id: number, name: string, dateOfBirth: string) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}

let studentObj3 = new Student(3, "Nguyen Van C","2021-08-21");
console.log(studentObj3);

