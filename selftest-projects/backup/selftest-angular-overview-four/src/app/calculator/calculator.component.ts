import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public numberOne: number = 3;
  public numberTwo: number = 7;
  public result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeValue1(event: any): void {
    this.numberOne = event.target.value;
  }

  sum(): void {
    console.log(this.numberOne);
    console.log(this.numberTwo);
    this.result = Number(this.numberOne) + Number(this.numberTwo);
  }

}
