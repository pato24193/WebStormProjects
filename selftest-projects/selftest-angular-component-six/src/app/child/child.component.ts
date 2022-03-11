import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
  implements OnInit, OnChanges, DoCheck {

  @Input()
  valueFromParent: string;

  valueToParent = 'Hello Parent, I\'m child';

  @Output()
  public eventEmitter = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  sendParent(): void {
    this.eventEmitter.emit(this.valueToParent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('Child: ngDoCheck');
  }

}
