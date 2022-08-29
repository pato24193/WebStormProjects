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
  }

  ngOnInit(): void {
    this.studentList.push(
      new Student(123, 'Nguyen Van An', '2022-07-19', 0));
    this.studentList.push(
      new Student(543, 'Nguyen Van Binh', '2022-07-20', 1));
    this.studentList.push(
      new Student(8786, 'Nguyen Van Canh', '2022-07-21', 0));
  }

}
