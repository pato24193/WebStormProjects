function sum(a, b) {
    return a + b;
}
console.log(sum(5, 9));
// Tuple
var studentObj;
studentObj = [1, "Nguyen Van A", "2021-08-19"];
console.log(studentObj);
var studentObj2 = { id: 2, name: 'Nguyen Van B', dateOfBirth: '2021-08-20' };
console.log(studentObj2);
// Class
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj3 = new Student(3, "Nguyen Van C", "2021-08-21");
console.log(studentObj3);
