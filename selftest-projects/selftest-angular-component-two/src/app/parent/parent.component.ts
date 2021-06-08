import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public valueSendToSub: string = 'Hello Sub';

  constructor() { }

  ngOnInit(): void {
  }

  receivedFromChild(event: any): void {
    console.log(event);
  }
}
