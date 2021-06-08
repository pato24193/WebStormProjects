import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-and-ng-class',
  templateUrl: './ng-style-and-ng-class.component.html',
  styleUrls: ['./ng-style-and-ng-class.component.css']
})
export class NgStyleAndNgClassComponent implements OnInit {

  public colorString: string = "red";
  public classString: string = "font-size-user";

  constructor() { }

  ngOnInit(): void {
  }

}
