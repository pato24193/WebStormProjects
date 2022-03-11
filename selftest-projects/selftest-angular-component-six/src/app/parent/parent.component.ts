import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck {

  valueToChild = 'Hello Child!';

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveChild(value: any): void {
    console.log('From child: ' + value);
  }

  ngDoCheck(): void {
    console.log('Parent: ngDoCheck');
  }

}
