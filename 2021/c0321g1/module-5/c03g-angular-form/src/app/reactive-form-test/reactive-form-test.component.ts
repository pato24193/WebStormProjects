import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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
        [Validators.required, Validators.pattern('[A-Za-z]+')]),
      dateOfBirth: new FormControl('',
        [Validators.required, this.checkValidate18]),
      pwdGroup: new FormGroup({
        pwdFirst: new FormControl(),
        pwdSecond: new FormControl()
      })
    });

  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
    // console.log(this.studentForm.value.name);
  }

  checkValidate18(dateOfBirthControl: AbstractControl): any {
    const dOB = dateOfBirthControl.value; // yyyy-mm-dd
    const yearDOB = Number(dOB.substr(0, 4));
    const currentYear = new Date().getFullYear();

    return currentYear - yearDOB >= 18 ? null : {invalid18: true};
  }
}
