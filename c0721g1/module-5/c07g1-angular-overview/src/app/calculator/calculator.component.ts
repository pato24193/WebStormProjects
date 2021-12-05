import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberA = 5;
  numberB = 7;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValueA(valueA) {
    this.numberA = valueA;
  }

  sum2Num() {
    this.result = Number(this.numberA) + Number(this.numberB);
  }
}
