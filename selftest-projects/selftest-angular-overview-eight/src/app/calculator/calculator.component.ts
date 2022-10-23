import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1 = 4;
  number2 = 8;
  result2Num: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum2Num(): void {
    console.log(typeof this.number1);
    console.log(typeof this.number2);
    this.result2Num = Number(this.number1) + Number(this.number2);
  }

  updateValueNum1(newValue: number): void {
    this.number1 = newValue;
  }
}
