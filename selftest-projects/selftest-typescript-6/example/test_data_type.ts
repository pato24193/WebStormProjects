// data type
function sum(a: number, b: number): number {
    return a + b;
}

// console.log(sum(7, 8));

// tuple
let studentObj: [number, string, string];
studentObj = [1, "Nguyen Van A", "2021-08-18"];
console.log('Tuple');
console.log (studentObj);

interface Student {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObjInterface: Student =
    {id: 2, name: "Nguyen Van B", dateOfBirth: "2021-08-19"};
console.log('Interface');
console.log(studentObjInterface);

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

let studentObjClass =
    new Student(3, "Nguyen Van C", "2021-08-20");
console.log('Class');
console.log(studentObjClass);
