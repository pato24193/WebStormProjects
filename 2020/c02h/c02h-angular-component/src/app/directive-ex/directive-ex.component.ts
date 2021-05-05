import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-directive-ex',
  templateUrl: './directive-ex.component.html',
  styleUrls: ['./directive-ex.component.css']
})
export class DirectiveExComponent implements OnInit, OnChanges {

  arrStudent: Student[];

  isShow = true;
  isShowGreen = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.arrStudent = new Array<Student>();
    // this.arrStudent.push(new Student(1, 'Tien'));
    // this.arrStudent.push(new Student(2, 'Khanh'));
  }

  changeGreen() {
    this.isShowGreen = true;
  }

}
