import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-if-and-ng-for-test',
  templateUrl: './ng-if-and-ng-for-test.component.html',
  styleUrls: ['./ng-if-and-ng-for-test.component.css']
})
export class NgIfAndNgForTestComponent implements OnInit {

  studentList = [];

  constructor() {
    this.studentList.push(
      new Student(234, 'Nguyen Van A', '2021-08-21', 0));
    this.studentList.push(
      new Student(123, 'Nguyen Van C', '2021-08-22', 1));
    this.studentList.push(
      new Student(874, 'Nguyen Van B', '2021-08-23', 0));
    this.studentList.push(
      new Student(231, 'Nguyen Van D', '2021-08-09', 1));
  }

  ngOnInit(): void {
  }

}
