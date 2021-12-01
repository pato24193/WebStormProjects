// function sum(num1: number, num2: number) {
//     return num1 + num2;
// }
//
// console.log(sum(2, 3));
var studentTuple;
studentTuple = [1, "Nguyen Van A", "01/06/2000"];
var studentObjFromInterface = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "02/06/2000"
};
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj = new Student(3, "Nguyen Van C", "03/06/2000");
console.log(studentTuple);
console.log(studentObjFromInterface);
console.log(studentObj);
