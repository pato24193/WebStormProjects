import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  valueToChild = 'Hello Child (from Parent)';

  constructor() {
  }

  ngOnInit(): void {
  }

  receivedFromChild(value: any) {
    console.log('Hello Parent: ');
    console.log(value);
  }
}
