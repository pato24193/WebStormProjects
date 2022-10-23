import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-test',
  templateUrl: './ng-for-test.component.html',
  styleUrls: ['./ng-for-test.component.css']
})
export class NgForTestComponent implements OnInit {

  public studentList = [];

  constructor() {
  }

  ngOnInit(): void {
    this.studentList.push(new Student(123, 'Nguyen Van An', '2022-10-17', 1));
    this.studentList.push(new Student(982, 'Tran Van Binh', '2022-10-28', 1));
    this.studentList.push(new Student(452, 'Le Thi Ca', '2022-11-12', 0));
  }

}
