import {Component, OnInit} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  valueStr = 'nguyen van a';
  valueNum = 1000000;

  constructor() {
  }

  ngOnInit(): void {
  }

}
