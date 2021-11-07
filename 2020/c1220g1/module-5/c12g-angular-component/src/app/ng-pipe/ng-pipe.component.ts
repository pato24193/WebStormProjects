import { Component, OnInit } from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-ng-pipe',
  templateUrl: './ng-pipe.component.html',
  styleUrls: ['./ng-pipe.component.css']
})
export class NgPipeComponent implements OnInit {

  name: string = "nguyen van a";
  dateOfBirth: string = "07/06/2021";
  numberTest: number = 123;

  constructor(titleCasePipe: TitleCasePipe) {
    this.name = titleCasePipe.transform(this.name);
  }

  ngOnInit(): void {
  }

}
