// function sum(number1: number, number2: number): number {
//     return number1 + number2;
// }
//
// console.log(sum(4, 8));
// transpile / compile
// tuple
var studentTuple = [123, "Nguyen Van A", "03/06/2000"];
console.log(studentTuple);
console.log(studentTuple[1]);
var studentObjFromI = {
    id: 456,
    name: "Nguyen Van B",
    dateOfBirth: "04/06/2000"
};
console.log(studentObjFromI);
var Student = /** @class */ (function () {
    function Student(id, name, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    return Student;
}());
var studentObj = new Student(789, "Nguyen Van C", "05/06/2000");
console.log(studentObj);
