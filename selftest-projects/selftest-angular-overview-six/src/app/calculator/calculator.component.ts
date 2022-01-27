import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public numberOne = 10;
  public numberTwo = 5;
  public result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue1(value): void {
    this.numberOne = value;
  }

  sum2Num(): void {
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }
}
