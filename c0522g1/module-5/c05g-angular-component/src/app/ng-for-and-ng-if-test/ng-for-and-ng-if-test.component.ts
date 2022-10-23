import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  // studentList = new Array();
  studentList = [];

  constructor() {
  }

  ngOnInit(): void {
    this.studentList.push(new Student(
      123, 'Nguyen Van A', '2022-10-18', 1));
    this.studentList.push(new Student(
      345, 'Nguyen Thi C', '2022-10-20', 0));
    this.studentList.push(new Student(
      234, 'Nguyen Van B', '2022-10-19', 1));
  }

}
