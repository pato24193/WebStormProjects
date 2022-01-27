function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
var studentTuple = [321, 'Nguyen Van An', '2022-01-20'];
console.log(studentTuple);
var studentObj = {
    id: 342,
    name: 'Nguyen Van B',
    dateOfBirth: '2022-01-21'
};
console.log(studentObj);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj2 = new Student(993, 'Nguyen Van C', '2022-01-22');
console.log(studentObj2);
