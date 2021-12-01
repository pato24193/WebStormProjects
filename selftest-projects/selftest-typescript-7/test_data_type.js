// function sum2Num(a: number, b: number) {
//     return a + b;
// }
//
// console.log(sum2Num(2, 3));
let studentTuple = [1, 'Nguyen Van A', '2021-12-01'];
console.log(studentTuple[1]);
let studentObj = { id: 2, name: 'Nguyen Van B', dateOfBirth: '2021-12-02' };
console.log(studentObj);
class Student {
    constructor(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}
let studentObj2 = new Student(3, 'Nguyen Van C', '2021-12-03');
console.log(studentObj2);
