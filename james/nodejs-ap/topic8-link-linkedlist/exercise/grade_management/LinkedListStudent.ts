import {LinkedList} from "../LinkedList";
import {Student} from "./Student";

export class LinkedListStudent {
    linkedList: LinkedList<Student>;

    constructor() {
        this.linkedList = new LinkedList<Student>();
    }

    insertFirst(studentObj: Student): void {
        this.linkedList.insertFirst(studentObj);
    }

    insertLast(studentObj: Student): void {
        this.linkedList.insertLast(studentObj);
    }

    showList(): void {
        console.log(this.linkedList.readList());
    }

    totalStudentsFail(): number {
        let currentNode = this.linkedList.head;
        let count = 0;

        while (currentNode !== null) {
            if (currentNode.data.score <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }

        return count;
    }

    listStudentMaxScore(): Student[] {
        // get max score
        let scores = this.linkedList.readList().map(obj => {
            return obj.score;
        })
        let maxScore = Math.max(...scores);

        // get list student
        let currentNode = this.linkedList.head;
        let listTopStudent = [];

        while (currentNode !== null) {
            if (currentNode.data.score == maxScore) {
                listTopStudent.push(currentNode.data);
            }

            currentNode = currentNode.next;
        }

        return listTopStudent;
    }

    findByName(keywordName: string): Student[] {
        let currentNode = this.linkedList.head;
        let listStudent = [];

        while (currentNode !== null) {
            if (currentNode.data.name.includes(keywordName)) {
                listStudent.push(currentNode.data);
            }

            currentNode = currentNode.next;
        }

        return listStudent;
    }
}
