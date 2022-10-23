import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if-test',
  templateUrl: './ng-for-and-ng-if-test.component.html',
  styleUrls: ['./ng-for-and-ng-if-test.component.css']
})
export class NgForAndNgIfTestComponent implements OnInit {

  public studentList: Student[];

  constructor() {
  }

  ngOnInit(): void {
    this.studentList = [];
    this.studentList.push(
      new Student(234, 'Nguyen Van An',
        '2022-03-07', 1));
    this.studentList.push(
      new Student(855, 'Nguyen Van Binh',
        '2022-03-09', 1));
    this.studentList.push(
      new Student(874, 'Tran Thi Cuc',
        '2022-03-08', 0));
  }

}
