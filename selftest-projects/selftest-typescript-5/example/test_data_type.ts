function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 6));

let studentTuple: [number, string, string];
studentTuple = [1, "Nguyen Van A", "2021-08-15"];
console.log(studentTuple);

interface IStudent {
    id: number;
    name: string;
    dateOfBirth: string;
}

let studentObj: IStudent = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "2021-08-16"
};

console.log(studentObj);

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

let studentObj2: Student = new Student(3, "Nguyen Van C", "2021-08-17");
console.log(studentObj2);
