import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if',
  templateUrl: './ng-for-and-ng-if.component.html',
  styleUrls: ['./ng-for-and-ng-if.component.css']
})
export class NgForAndNgIfComponent implements OnInit {

  studentList: Student[];

  constructor() {
    this.studentList = [];
    this.studentList.push(
      new Student(123, 'Nguyen Van A', '2021-12-02', 1));
    this.studentList.push(
      new Student(324, 'Nguyen Van C', '2021-12-01', 1));
    this.studentList.push(
      new Student(756, 'Le Thi B', '2021-12-25', 0));
  }

  ngOnInit(): void {
  }

}
