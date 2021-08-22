import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numberOne = 4;
  numberTwo = 10;
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(): void {
    console.log(this.numberOne);
    console.log(this.numberTwo);
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  getValueOne(value): void {
    this.numberOne = value;
  }
}
