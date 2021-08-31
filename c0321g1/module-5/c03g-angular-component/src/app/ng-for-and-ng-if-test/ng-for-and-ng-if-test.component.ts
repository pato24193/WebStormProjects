import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  studentList = [];

  constructor() {
    this.studentList.push(
      new Student(325, 'Nguyen Van A', '2021-08-23', 1));
    this.studentList.push(
      new Student(983, 'Nguyen Thi B', '2000-06-23', 0));
    this.studentList.push(
      new Student(123, 'Nguyen Thi D', '1999-01-23', 0));
    this.studentList.push(
      new Student(542, 'Nguyen Van C', '1997-08-01', 1));
  }

  ngOnInit(): void {
  }

}
