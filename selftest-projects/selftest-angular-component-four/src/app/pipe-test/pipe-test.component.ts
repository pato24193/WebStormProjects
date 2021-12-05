import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  str = 'Hello World';

  student = new Student(213, 'Haha', '2021-12-05', 1);

  constructor() { }

  ngOnInit(): void {
  }

}
