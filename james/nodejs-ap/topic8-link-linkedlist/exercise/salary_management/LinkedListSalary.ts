import {LinkedList} from "../LinkedList";
import {Salary} from "./Salary";
import {Student} from "../grade_management/Student";

export class LinkedListSalary {

    linkedList: LinkedList<Salary>;

    constructor() {
        this.linkedList = new LinkedList<Salary>();
    }

    addSalary(salaryObj: Salary): void {
        this.linkedList.insertLast(salaryObj);
    }

    showList(): void {
        console.log(this.linkedList.readList());
    }

    getTotalSalary(): number {
        let currentNode = this.linkedList.head;
        let total = 0;

        while(currentNode !== null) {
            total += currentNode.data.money;

            currentNode = currentNode.next;
        }

        return total;
    }

    getMonthMaxSalary(): Salary[] {
        // get max score
        let moneys = this.linkedList.readList().map(obj => {
            return obj.money;
        })
        let maxMoney = Math.max(...moneys);

        // get list student
        let currentNode = this.linkedList.head;
        let listMonth = [];

        while (currentNode !== null) {
            if (currentNode.data.money == maxMoney) {
                listMonth.push(currentNode.data);
            }

            currentNode = currentNode.next;
        }

        return listMonth;
    }
}
