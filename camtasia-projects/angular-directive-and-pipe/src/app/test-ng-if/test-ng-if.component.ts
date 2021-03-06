import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-ng-if',
  templateUrl: './test-ng-if.component.html',
  styleUrls: ['./test-ng-if.component.css']
})
export class TestNgIfComponent implements OnInit {

  showMe: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
