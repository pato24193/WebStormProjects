import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  receiveData: string;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
    console.log('constructor.......');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck.......');
  }

  ngOnInit(): void {
    console.log('ngOnInit.......');
  }

  sendToParent(): void {
    this.eventEmitter.emit('Hello Parent!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.......');
  }
}
