import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public numOne = 5;
  public numTwo = 7;
  public result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum2Num(): void {
    console.log('1: ' + this.numOne);
    console.log('2: ' + this.numTwo);
    this.result = Number(this.numOne) + Number(this.numTwo);
  }

  getNum1(numOneHTML: number): void {
    this.numOne = numOneHTML;
  }

}
