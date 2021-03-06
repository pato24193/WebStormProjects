import {Component, OnInit} from '@angular/core';
import {NgStyleClass} from '../ng-style-class';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css']
})
export class TestNgStyleComponent implements OnInit {
  colorInput: string;
  ngStyleClass = new NgStyleClass();

  constructor() {
  }

  ngOnInit(): void {
  }

}
