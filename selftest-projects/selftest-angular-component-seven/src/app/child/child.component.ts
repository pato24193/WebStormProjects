import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  valueFromParent: string;

  @Input()
  objectFromParent: Student;

  @Output()
  evenEmitter = new EventEmitter();

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
    this.evenEmitter.emit('Hello Parent (from Child)');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
