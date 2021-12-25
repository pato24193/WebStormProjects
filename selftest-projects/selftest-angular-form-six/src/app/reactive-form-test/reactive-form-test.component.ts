import {Component, OnInit} from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentForm: FormGroup;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', this.isAge18),
      passwordGroup: new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl()
      }, this.checkPassword)
    });
  }

  ngOnInit(): void {
  }

  registerStudent(): void {
    console.log(this.studentForm.value);
  }

  isAge18(control: AbstractControl): any {
    const dateOfBirth = control.value;
    const year = Number(dateOfBirth.substr(0, 4));
    const curYear = new Date().getFullYear();

    return curYear - year >= 18 ? null : {invalid18: true};
  }

  checkPassword(control: AbstractControl): any {
    const password = control.value.password;
    const passwordConfirm = control.value.passwordConfirm;

    return password === passwordConfirm ? null : {notSamePassword: true};
  }
}
