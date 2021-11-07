import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  textStr = 'HEllO wOrLD';
  textNum = 456;

  constructor() {
  }

  ngOnInit(): void {
  }

}
