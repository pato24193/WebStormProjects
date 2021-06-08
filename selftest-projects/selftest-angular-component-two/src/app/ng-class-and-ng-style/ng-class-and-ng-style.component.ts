import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-and-ng-style',
  templateUrl: './ng-class-and-ng-style.component.html',
  styleUrls: ['./ng-class-and-ng-style.component.css']
})
export class NgClassAndNgStyleComponent implements OnInit {
  public colorString: string = "red";
  public classString: string = "font20";

  constructor() { }

  ngOnInit(): void {
  }

}
