function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
// tuple
var studentTuple = [123, 'Nguyen Van A', '2022-01-21'];
console.log(studentTuple);
var studentObj = { id: 789, name: 'Nguyen Van B', dateOfBirth: '2022-01-22' };
console.log(studentObj);
// class
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj2 = new Student(456, 'Nguyen Van C', '2022-01-23');
console.log(studentObj2);
