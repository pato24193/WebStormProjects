import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  valueSendChild = 'Hello Child';
  valueFromChild: string;
  isShowing = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  receivedFromChild(obj): void {
    this.valueFromChild = obj;
    console.log(obj);
  }

}
