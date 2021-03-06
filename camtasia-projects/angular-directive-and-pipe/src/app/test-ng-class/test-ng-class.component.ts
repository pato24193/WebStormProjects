import {Component, OnInit} from '@angular/core';
import {CssClass} from '../css-class';

@Component({
  selector: 'app-test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.css']
})
export class TestNgClassComponent implements OnInit {

  cssStringVar = 'colorBlue size20px';
  cssClass = new CssClass();

  constructor() {
  }

  ngOnInit(): void {
  }

}
