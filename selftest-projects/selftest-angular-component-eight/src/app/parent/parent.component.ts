import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataToChild = 'Hello Child!';

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveFromChild(value: any) {
    console.log('Output (Child -> Parent); ');
    console.log(value);
  }
}
