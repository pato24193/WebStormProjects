import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataSendChild = 'Hello Child!';

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveFromChild(value: any) {
    console.log('Receive from child (Output): ');
    console.log(value);
  }

}
