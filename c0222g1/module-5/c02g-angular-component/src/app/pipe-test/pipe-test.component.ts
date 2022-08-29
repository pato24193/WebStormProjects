import {Component, OnInit} from '@angular/core';
import {DatePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  str = 'HEllo C02G1 world';
  n = 3450000000000;

  constructor(datePipe: DatePipe, titleCasePipe: TitleCasePipe) {
  }

  ngOnInit(): void {
  }

}
