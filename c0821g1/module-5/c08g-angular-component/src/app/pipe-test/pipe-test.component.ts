import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  str = 'HELlo piPE';
  num = 14;

  constructor() {
  }

  ngOnInit(): void {
  }

}
