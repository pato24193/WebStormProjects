import { Component, OnInit } from '@angular/core';
import {TestRoutingService} from '../test-routing.service';

@Component({
  selector: 'app-test-routing',
  templateUrl: './test-routing.component.html',
  styleUrls: ['./test-routing.component.css']
})
export class TestRoutingComponent implements OnInit {

  constructor(private testRoutingService: TestRoutingService) { }

  ngOnInit(): void {
    this.testRoutingService.parentToChildValue = 10;
  }

}
