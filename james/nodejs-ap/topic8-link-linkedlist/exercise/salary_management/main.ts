import {LinkedListSalary} from "./LinkedListSalary";
import {Salary} from "./Salary";

let linkedListSalary = new LinkedListSalary();
linkedListSalary.addSalary(new Salary(1, 500000));
linkedListSalary.addSalary(new Salary(5, 300000));
linkedListSalary.addSalary(new Salary(12, 500000));
linkedListSalary.addSalary(new Salary(7, 100000));

linkedListSalary.showList();

console.log(linkedListSalary.getTotalSalary());

console.log(linkedListSalary.getMonthMaxSalary());
