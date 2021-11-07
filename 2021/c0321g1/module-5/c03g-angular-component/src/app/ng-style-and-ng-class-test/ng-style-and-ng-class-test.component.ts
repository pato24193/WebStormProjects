import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style-and-ng-class-test',
  templateUrl: './ng-style-and-ng-class-test.component.html',
  styleUrls: ['./ng-style-and-ng-class-test.component.css']
})
export class NgStyleAndNgClassTestComponent implements OnInit {

  textString = 'Hello Attribute Directive';
  colorStr = 'yellow';
  nameClass = 'custom-size-50';

  constructor() {
  }

  ngOnInit(): void {
  }

}
