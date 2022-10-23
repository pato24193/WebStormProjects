import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentFormGroup: FormGroup;
  addressArray: FormArray;

  constructor() {
  }

  ngOnInit(): void {
    this.studentFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', this.checkAge18),
      passwordGroup: new FormGroup({
        passwordFirst: new FormControl(''),
        passwordSecond: new FormControl('')
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

    this.addressArray = this.studentFormGroup.controls.addressArray as FormArray;
  }

  getValueStudent(): void {
    console.log('hahahahaha');
    console.log(this.studentFormGroup.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const formYear =
      Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return curYear - formYear >= 18 ? null : {invalid18: true};
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
    return null;
  }
}
