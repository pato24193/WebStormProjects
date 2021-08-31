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
      name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required, this.checkValidate18]),
      pwdGroup: new FormGroup({
        pwd: new FormControl(''),
        pwdConfirm: new FormControl('')
      }, this.checkValidatePassword)
    });
  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
  }

  checkValidate18(abstractControl: AbstractControl): any {
    const dateOfBirth = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return curYear - dateOfBirth < 18 ? {invalid18: true} : null;
  }

  checkValidatePassword(abstractControl: AbstractControl): any {
    const pwd = abstractControl.value.pwd;
    const pwdConfirm = abstractControl.value.pwdConfirm;

    return pwd === pwdConfirm ? null : {invalidPassword: true};
  }
}
