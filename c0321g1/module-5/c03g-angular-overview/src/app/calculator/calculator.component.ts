import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  a = 8;
  b = 7;
  resultFinal: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  setValue1(number1, number2: number): void {
    this.a = number1;
    console.log('Number 2: ' + number2);
    // directive style
  }

  sum2Num(): void {
    console.log(this.a + ' ' + this.b);
    this.resultFinal = Number(this.a) + Number(this.b);
  }

}
