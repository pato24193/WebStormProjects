import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOne: number = 8;
  numberTwo: number = 9;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sum2Num(): void {
    console.log('1 ' + this.numberOne);
    console.log('2 ' + this.numberTwo);
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  setValue1($event: any): void {
    this.numberOne = $event.target.value;
  }
}
