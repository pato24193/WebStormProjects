import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator-test',
  templateUrl: './calculator-test.component.html',
  styleUrls: ['./calculator-test.component.css']
})
export class CalculatorTestComponent implements OnInit {

  public a = 10;
  public b = 5;
  public result: number;

  constructor() {
  }

  ngOnInit(): void {
    const a = 3;
  }

  sum2Num(): void {
    this.result = Number(this.a) + Number(this.b);
    console.log('a = ' + this.a);
    console.log('b = ' + this.b);
    console.log(this.result);
  }

  getNumber1(numParam: number): void {
    this.a = numParam;
  }

}
