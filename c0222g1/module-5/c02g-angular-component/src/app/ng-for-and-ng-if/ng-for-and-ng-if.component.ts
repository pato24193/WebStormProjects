import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if',
  templateUrl: './ng-for-and-ng-if.component.html',
  styleUrls: ['./ng-for-and-ng-if.component.css']
})
export class NgForAndNgIfComponent implements OnInit {

  public studentList: Student[];

  constructor() {
  }

  ngOnInit(): void {
    this.studentList = [];
    this.studentList.push(
      new Student(234, 'Nguyen Van An',
        '2000-07-19', 1));
    this.studentList.push(
      new Student(855, 'Nguyen Van Binh',
        '2000-07-20', 1));
    this.studentList.push(
      new Student(874, 'Tran Thi Cuc',
        '2000-03-21', 0));
  }

}
