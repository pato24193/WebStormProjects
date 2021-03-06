import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-datepicker-example',
  templateUrl: './datepicker-example.component.html',
  styleUrls: ['./datepicker-example.component.css']
})
export class DatepickerExampleComponent implements OnInit {
  dateOfBirth: string;

  constructor() {
  }

  ngOnInit(): void {

  }

  getValueDateOfBirth(value: string): void {
    this.dateOfBirth = value;
  }

  printDate(): void {
    console.log(this.dateOfBirth);
  }
}

$(() => {
  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
    onSelect: (selectedDate) => {
      $('#datepicker').trigger('click');
    }
  });
});

// $( function() {
//   $('#datepicker').datepicker({
//     dateFormat: 'dd/mm/yy',
//   });
// } );
