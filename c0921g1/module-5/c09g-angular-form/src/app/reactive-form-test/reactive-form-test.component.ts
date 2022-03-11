import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';
import {ValidateUtils} from '../validate-utils';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentForm: FormGroup;
  studentObj: Student;
  validateUtils = new ValidateUtils();

  constructor() {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('',
        [Validators.required,
          Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('',
        [Validators.compose, this.validateUtils.checkAge18]),
    });
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);
    this.studentObj = Object.assign({}, this.studentForm.value);
    // console.log(this.studentObj.id);
  }

  // checkAge18(abstractControl: AbstractControl): any {
  //   // yyyy-mm-dd
  //   const yearStudent =
  //     Number(abstractControl.value.substr(0, 4));
  //   const yearCur =
  //     new Date().getFullYear();
  //
  //   return yearCur - yearStudent >= 18 ? null : {not18: true};
  // }

}
