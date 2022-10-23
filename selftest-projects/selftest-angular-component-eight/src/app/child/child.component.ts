import {Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input()
  dataReceive: string;

  dataSend = 'Hello Parent';

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    // console.log(this.dataReceive);
    console.log('ngOnInit');
  }

  shareDataToParent() {
    this.eventEmitter.emit(this.dataSend);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges');
  }
}
