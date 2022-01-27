import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  public studentList = [];

  constructor() {
    this.studentList.push(
      new Student(345, 'Nguyen Van An', '2022-01-25', 1));
    this.studentList.push(
      new Student(764, 'Tran Thi B', '2022-01-28', 0));
    this.studentList.push(
      new Student(213, 'Nguyen Van C', '2022-01-30', 1));
  }

  ngOnInit(): void {
  }

}
