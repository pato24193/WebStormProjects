function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
var studentTuple;
studentTuple = [1, "Nguyen Van A", "2021-08-15"];
console.log(studentTuple);
var studentObj = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "2021-08-16"
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
var studentObj2 = new Student(3, "Nguyen Van C", "2021-08-17");
console.log(studentObj2);
