import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  propertyParent: string = "Hello Child! (@Input) 123";

  constructor() { }

  ngOnInit(): void {
  }

  getValueFromChild(event: any): void {
    console.log(event);
  }
}
