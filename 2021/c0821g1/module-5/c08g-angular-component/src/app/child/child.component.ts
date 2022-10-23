import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  valueFromParent: string;

  valueToParent = 'Hello Parent (Output)';

  otherProperty: string;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  sendToParent(): void {
    this.eventEmitter.emit(this.valueToParent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

}
