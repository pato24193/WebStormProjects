import {Component, OnInit} from '@angular/core';
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
    this.studentList.push(new Student(
      234, 'Nguyen Van A', '2000-12-03', 1));
    this.studentList.push(new Student(
      764, 'Nguyen Van C', '2000-12-04', 1));
    this.studentList.push(new Student(
      187, 'Le Thi B', '2000-12-09', 0));
  }

  ngOnInit(): void {
  }

}
