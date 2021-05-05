import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onKeyUpEnter(event) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
}
