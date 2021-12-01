// function sum(number1: number, number2: number): number {
//     return number1 + number2;
// }
//
// console.log(sum(3, 4));
var studentTuple = [1, "Nguyen Van A", "02/06/2000"];
var studentObjFromI = {
    id: 2,
    name: "Nguyen Van B",
    dateOfBirth: "03/06/2000"
};
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj = new Student(3, "Nguyen Van C", "04/06/2000");
console.log(studentTuple);
console.log(studentObjFromI);
console.log(studentObj);
