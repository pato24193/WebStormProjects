import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-and-ng-class-test',
  templateUrl: './ng-style-and-ng-class-test.component.html',
  styleUrls: ['./ng-style-and-ng-class-test.component.css']
})
export class NgStyleAndNgClassTestComponent implements OnInit {

  colorStr: string;
  classStr = 'size-20';

  constructor() { }

  ngOnInit(): void {
  }

}
