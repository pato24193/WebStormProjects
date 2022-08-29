import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public studentForm: FormGroup;
  public studentObj: Student;
  addressArray: FormArray;

  constructor() {
  }

  ngOnInit(): void {
    // this.studentObj =
    //   new Student(32432, 'Quoc Trung', '2022-07-21');

    this.studentForm = new FormGroup({
      name: new FormControl('',
        [Validators.required,
          Validators.minLength(10)]),
      dateOfBirth: new FormControl('', this.checkAge18),
      pwdGroup: new FormGroup({
        pwd: new FormControl('', Validators.minLength(6)),
        pwdConfirm: new FormControl()
      }, this.checkPassword),
      addressArray: new FormArray(
        [
          new FormGroup({
            street: new FormControl(''),
            city: new FormControl('')
          })
        ]
      )
    });

    // this.studentForm.patchValue(this.studentObj);
    this.addressArray = this.studentForm.controls.addressArray as FormArray;
  }

  getInfoStudent(): void {
    console.log(this.studentForm);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const sYear =
      abstractControl.value.substr(0, 4);
    const curYear =
      new Date().getFullYear();

    return curYear - sYear >= 18 ? null : {not18: true};
  }

  addMore(): void {
    const newAddress = new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    });

    this.addressArray.push(newAddress);
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
  }
}
