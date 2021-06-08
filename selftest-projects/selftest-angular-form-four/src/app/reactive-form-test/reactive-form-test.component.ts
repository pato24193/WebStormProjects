import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  public studentForm: FormGroup;
  // public studentForm: FormBuilder;

  constructor(private fb: FormBuilder) {
    // this.studentForm = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]+')]),
    //   dateOfBirth: new FormControl('', [Validators.required, this.checkAge]),
    //   email: new FormControl('', Validators.email)
    // });
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]+')]],
      dateOfBirth: ['', [Validators.required, this.checkAge]],
      email: ['', Validators.email]
    });
  }

  ngOnInit(): void {
  }

  getStudentForm(): void {
    console.log(this.studentForm.value);
  }

  checkAge(dateOfBirthControl: AbstractControl): any {
    let dateOfBirth = dateOfBirthControl.value;
    let year = Number(dateOfBirth.substr(0, 4));

    return new Date().getFullYear() - year >= 18 ? null : {invalidDate18: true};
  }
}
