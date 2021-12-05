import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style-and-ng-class',
  templateUrl: './ng-style-and-ng-class.component.html',
  styleUrls: ['./ng-style-and-ng-class.component.css']
})
export class NgStyleAndNgClassComponent implements OnInit {

  colorStr: string;
  nameClass = 'font-size-big';

  constructor() {
  }

  ngOnInit(): void {
  }

}
