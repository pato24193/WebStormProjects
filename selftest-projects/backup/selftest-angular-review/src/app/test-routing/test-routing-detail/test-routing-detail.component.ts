import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TestRoutingService} from '../test-routing.service';

@Component({
  selector: 'app-test-routing-detail',
  templateUrl: './test-routing-detail.component.html',
  styleUrls: ['./test-routing-detail.component.css']
})
export class TestRoutingDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private testRoutingService: TestRoutingService) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap.get('id'));
    });

    console.log(this.testRoutingService.parentToChildValue);
  }

}
