// data type
function sum(a, b) {
    return a + b;
}
// console.log(sum(7, 8));
// tuple
var studentObj;
studentObj = [1, "Nguyen Van A", "2021-08-18"];
console.log('Tuple');
console.log(studentObj);
var studentObjInterface = { id: 2, name: "Nguyen Van B", dateOfBirth: "2021-08-19" };
console.log('Interface');
console.log(studentObjInterface);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObjClass = new Student(3, "Nguyen Van C", "2021-08-20");
console.log('Class');
console.log(studentObjClass);
