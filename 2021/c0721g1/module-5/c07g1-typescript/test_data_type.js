// function sum2Num(a: number, b: number) {
//     return a + b;
// }
//
// console.log(sum2Num(4, 5));
// tuple
var studentObj = [123, 'Nguyen Van A', '2000-01-12'];
console.log(studentObj);
var studentObj2 = { id: 456, name: 'Nguyen Van B', dateOfBirth: '2000-01-13' };
console.log(studentObj2);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj3 = new Student(789, 'Nguyen Van C', '2000-01-14');
console.log(studentObj3);
