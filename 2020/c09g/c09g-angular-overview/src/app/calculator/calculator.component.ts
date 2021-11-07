import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = 100;
  number2 = 999;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValueNumber2(value: number): void {
    this.number2 = value;
  }

  sum2Num(): void {
    console.log('Number 1: ' + this.number1);
    console.log('Number 2: ' + this.number2);

    this.result = Number(this.number1) + Number(this.number2);
  }
}
