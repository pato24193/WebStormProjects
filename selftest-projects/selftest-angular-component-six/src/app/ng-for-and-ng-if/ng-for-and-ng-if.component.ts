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
  }

  ngOnInit(): void {
    this.studentList = [];
    this.studentList.push(new Student(
      324, 'Nguyen Van An', '2022-03-06', 1));
    this.studentList.push(new Student(
      987, 'Le Van Binh', '2022-03-07', 1));
    this.studentList.push(new Student(
      421, 'Tran Thi C', '2022-03-08', 0));
  }

}
