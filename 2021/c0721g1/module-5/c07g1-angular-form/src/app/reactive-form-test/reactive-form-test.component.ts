import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentForm: FormGroup;

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

  registerStudent(): void {
    console.log(this.studentForm.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const dateOfBirth = abstractControl.value; // yyyy-mm-dd
    const yearBirth = dateOfBirth.substr(0, 4);
    const curYear = new Date().getFullYear();

    return curYear - yearBirth >= 18 ? null : {not18: true};
  }
}
