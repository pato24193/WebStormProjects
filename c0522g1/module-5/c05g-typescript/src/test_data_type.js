// function sum2Num(num1: number, num2: number): number {
//     return num1 + num2;
// }
//
// console.log(sum2Num(5, 78));
var studentObj1 = [123, 'Nguyen Van A', '2022-10-14'];
console.log(studentObj1);
var studentObj2 = { id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-10-14' };
console.log(studentObj2);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj3 = new Student(789, 'Nguyen Van C', '2022-10-14');
console.log(studentObj3);
