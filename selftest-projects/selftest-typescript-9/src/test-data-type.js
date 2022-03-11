function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
var studentTuple = [123, "Nguyen Van An", "2022-03-02"];
console.log(studentTuple);
var studentObj = { id: 456, name: 'Nguyen Van B', dateOfBirth: '2022-03-02' };
console.log(studentObj);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj2 = new Student(789, 'Nguyen Van C', '2022-03-02');
console.log(studentObj2);
