import {Component, OnInit} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  valueAPI = 'nguyen VAN an';
  moneyAPI = 7000;

  constructor(public titlePipe: TitleCasePipe) {
  }

  ngOnInit(): void {
    this.valueAPI = this.titlePipe.transform(this.valueAPI);
  }

}
