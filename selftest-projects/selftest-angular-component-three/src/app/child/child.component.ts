import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  valueReceiveFromParent: string;

  @Output()
  eventEmitter = new EventEmitter();

  childProperty: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  sendValueToParent() {
    this.eventEmitter.emit('Hello Parent (from Child)');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

}
