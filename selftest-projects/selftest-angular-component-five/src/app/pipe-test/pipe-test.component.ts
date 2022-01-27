import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  str = 'Hello Pipe!';
  num = 123;

  constructor() {
  }

  ngOnInit(): void {
  }

}
