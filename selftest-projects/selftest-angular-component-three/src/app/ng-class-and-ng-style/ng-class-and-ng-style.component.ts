import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class-and-ng-style',
  templateUrl: './ng-class-and-ng-style.component.html',
  styleUrls: ['./ng-class-and-ng-style.component.css']
})
export class NgClassAndNgStyleComponent implements OnInit {

  textProperty = 'Hahaha';
  colorStr = 'red';
  backgroundStr = 'yellow';
  nameClassCustom = 'font-size-custom';

  constructor() {
  }

  ngOnInit(): void {
  }

}
