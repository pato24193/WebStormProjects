import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if',
  templateUrl: './ng-for-and-ng-if.component.html',
  styleUrls: ['./ng-for-and-ng-if.component.css']
})
export class NgForAndNgIfComponent implements OnInit {

  studentList = [];

  constructor() {
    this.studentList.push(
      new Student(432, 'Nguyen Van A', '2022-01-24', 1));
    this.studentList.push(
      new Student(753, 'Nguyen Thi C', '2022-01-28', 0));
    this.studentList.push(
      new Student(123, 'Le Tran B', '2022-01-22', 1));
  }

  ngOnInit(): void {
  }

}
