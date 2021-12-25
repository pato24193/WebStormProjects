import {Component, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  str = 'Hello World';

  constructor(pipeUpper: UpperCasePipe, datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

}
