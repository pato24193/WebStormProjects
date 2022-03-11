import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public studentForm: FormGroup;
  public addressArray: FormArray;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]+')
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required,
        this.isAge18
      ]),
      pwdGroup: new FormGroup({
        password: new FormControl(''),
        passwordConf: new FormControl('')
      }, this.isSame),
      addressArray: new FormArray([
        new FormGroup({
          street: new FormControl(),
          city: new FormControl()
        })
      ])
    });

    this.addressArray = this.studentForm.controls.addressArray as FormArray;
  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
  }

  isAge18(abstractControl: AbstractControl): any {
    const year = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return curYear - year >= 18 ? null : {not18: true};
  }

  isSame(abstractControl: AbstractControl): any {
    const password = abstractControl.value.password;
    const passwordConf = abstractControl.value.passwordConf;

    return password === passwordConf ? null : {notSame: true};
  }

  addAddress(): void {
    this.addressArray.push(new FormGroup({
      street: new FormControl(),
      city: new FormControl()
    }));
  }
}
