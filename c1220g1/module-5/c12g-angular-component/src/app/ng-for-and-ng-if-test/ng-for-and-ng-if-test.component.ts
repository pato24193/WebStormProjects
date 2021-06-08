import { Component, OnInit } from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  public studentList: Student[];

  constructor() {
    this.studentList = new Array();
    this.studentList.push(new Student(123, "Nguyen Van A", "07/06/2000", 1));
    this.studentList.push(new Student(456, "Nguyen Van B", "08/06/2000", 0));
    this.studentList.push(new Student(789, "Nguyen Van C", "09/06/2000", 0));
    this.studentList.push(new Student(565, "Nguyen Van D", "10/06/2000", 1));
  }

  ngOnInit(): void {
  }

}
