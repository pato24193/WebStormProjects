import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-second',
  templateUrl: './calculator-second.component.html',
  styleUrls: ['./calculator-second.component.css']
})
export class CalculatorSecondComponent implements OnInit {

  abc: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
