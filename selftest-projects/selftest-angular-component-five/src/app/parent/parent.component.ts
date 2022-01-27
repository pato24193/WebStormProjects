import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  valueToChild = 'Hello Child! (Input)';
  valueFromChild: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveFromChild(obj): void {
    this.valueFromChild = obj;
  }

}
