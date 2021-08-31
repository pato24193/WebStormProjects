import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.css']
})
export class FormArrayTestComponent implements OnInit {

  studentForm: FormGroup;
  addressArray: FormArray;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('',
        [Validators.required, Validators.pattern('[A-Za-z]+')]),
      dateOfBirth: new FormControl('',
        [Validators.required, this.checkValidate18]),
      pwdGroup: new FormGroup({
        pwdFirst: new FormControl(),
        pwdSecond: new FormControl()
      }),
      addressArray: new FormArray(
        [
          new FormGroup({
            street: new FormControl(''),
            city: new FormControl('')
          })
        ]
      )
    });

    this.addressArray = this.studentForm.controls.addressArray as FormArray;

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

  addMore(): void {
    const newAddress = new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    });

    this.addressArray.push(newAddress);
  }
}
