import {LinkedList} from "../LinkedList";
import {Student} from "./Student";
import {LinkedListStudent} from "./LinkedListStudent";

let linkedListStudent = new LinkedListStudent();
linkedListStudent.insertFirst(new Student('John', 5));
linkedListStudent.insertFirst(new Student('Bill', 10));
linkedListStudent.insertFirst(new Student('Harry', 4));
linkedListStudent.insertFirst(new Student('Banana', 10));

linkedListStudent.showList();

console.log(linkedListStudent.totalStudentsFail());

console.log(linkedListStudent.listStudentMaxScore());

console.log(linkedListStudent.findByName("a"));
