import {Component, OnInit} from '@angular/core';
import {IStudent} from "../istudent";
import {Student} from "../student";

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  public listStudent: Student[];

  constructor() {
    this.listStudent = new Array();
    this.listStudent.push(new Student(123, "Nguyen Van A", "06/06/2000", 1));
    this.listStudent.push(new Student(456, "Nguyen Van B", "07/06/2000", 0));
    this.listStudent.push(new Student(789, "Nguyen Van C", "08/06/2000", 1));
  }

  ngOnInit(): void {
  }

}
