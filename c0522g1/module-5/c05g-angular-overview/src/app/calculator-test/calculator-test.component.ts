import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-test',
  templateUrl: './calculator-test.component.html',
  styleUrls: ['./calculator-test.component.css']
})
export class CalculatorTestComponent implements OnInit {

  number1: number;
  number2: number;
  resultSum: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum2Num(): void {
    console.log(typeof this.number1);
    console.log(typeof this.number2);
    this.resultSum = Number(this.number1) + Number(this.number2);
  }

  updateValueNumber1(newValue: number) {
    console.log(newValue);
    this.number1 = newValue;
  }
}
