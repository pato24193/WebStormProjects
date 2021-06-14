import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public studentForm: FormGroup;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('Tien', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18]),
      // password: new FormControl('', this.checkPassword),
      // confirmPassword: new FormControl(''),
    });

  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }
}
