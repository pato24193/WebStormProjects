// let a: number = 3;
// let b: string = 'Hello';
//
// console.log(a);
// console.log(b);
// function sum(a: number, b: number): number {
//     return a + b;
// }
//
// console.log(sum(6, 12));
var studentTuple = [123, 'Nguyen Van A', '2000-07-15'];
console.log(studentTuple);
var studentObj1 = { id: 456,
    name: 'Nguyen Van B',
    dateOfBirth: '2000-07-16' };
console.log(studentObj1);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj2 = new Student(789, 'Nguyen Van C', '2000-07-17');
console.log(studentObj2);
