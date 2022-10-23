import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {

  public numberOne = 5;
  public numberTwo = 10;
  public result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum2Num(): void {
    console.log(this.numberOne);
    console.log(this.numberTwo);
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

  getValue1(valueInHTML): void {
    this.numberOne = valueInHTML;
  }
}
