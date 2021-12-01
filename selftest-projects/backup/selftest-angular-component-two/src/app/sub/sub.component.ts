import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  public valueParentToSub: string = "";

  @Output()
  public eventInChild = new EventEmitter();

  subProperty: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log("Output: " + this.valueParentToSub);
  }

  sendToParent() {
    this.eventInChild.emit("Hello Parent");
  }

  ngOnChanges(): void {
    console.log('onChange');
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }
}
