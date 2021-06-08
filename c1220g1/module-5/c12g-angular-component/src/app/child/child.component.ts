import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  public valueFromParent: string = 'C1220G1';

  @Output()
  public eventChild = new EventEmitter();

  public valueToParent: string = "Hello Parent (@Ouput)";

  public propertyChild: string = "123";

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.valueFromParent);
  }

  sendValueToParent(): void {
    this.eventChild.emit(this.valueToParent);
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
}
