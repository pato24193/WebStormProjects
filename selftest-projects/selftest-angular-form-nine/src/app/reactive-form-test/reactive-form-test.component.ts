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
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('',
        [Validators.minLength(10), Validators.required]),
      dateOfBirth: new FormControl('', this.checkAge18),
      pwdGroup: new FormGroup({
        pwd: new FormControl(''),
        pwdConfirm: new FormControl('')
      }, this.checkSamePassword)
    });
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const year = abstractControl.value.substr(0, 4);
    const curYear = new Date().getFullYear();

    return curYear - year >= 18 ? null : {invalid18: true};
  }

  checkSamePassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
  }
}
