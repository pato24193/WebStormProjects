function sum2Num(num1, num2) {
    return num1 + num2;
}
console.log(sum2Num(3, 5));
var studentTuple = [322, 'Tien', '2022-10-14'];
console.log(studentTuple);
var studentObj2 = { id: 232, name: 'Nguyen Van B', dateOfBirth: '2022-10-14' };
console.log(studentObj2);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj3 = new Student(23434, 'Nguyen Van C', '2022-10-14');
console.log(studentObj3);
