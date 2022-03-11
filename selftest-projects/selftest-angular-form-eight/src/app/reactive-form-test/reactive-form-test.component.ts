import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public studentForm: FormGroup;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', this.checkAge18)
    });
  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const yearS = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - yearS >= 18 ? null : {not18: true};
  }

}
