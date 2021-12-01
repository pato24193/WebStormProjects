import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-datepicker',
  templateUrl: './test-datepicker.component.html',
  styleUrls: ['./test-datepicker.component.css']
})
export class TestDatepickerComponent implements OnInit {
  valueDatePicker: string;
  constructor() { }

  ngOnInit(): void {
  }

  getValueDatePicker(value) {
    this.valueDatePicker = value;
  }
}
