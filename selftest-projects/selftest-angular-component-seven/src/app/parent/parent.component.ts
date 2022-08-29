import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  valueToChild = 'Hello Child (from Parent)';
  studentObj = new Student(212, 'Nguyen Van A', '2022-07-18');

  constructor() {
  }

  ngOnInit(): void {
  }

  receivedFromChild(value: any): void {
    console.log(value);
  }

}
