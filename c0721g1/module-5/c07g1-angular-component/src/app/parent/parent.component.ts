import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  valueSendChild = 'Hello Child!';

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveFromChild(obj: any): void {
    console.log(obj);
  }

}
