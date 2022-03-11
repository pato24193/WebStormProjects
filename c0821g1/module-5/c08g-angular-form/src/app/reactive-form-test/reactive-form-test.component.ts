import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentForm: FormGroup;
  studentObj: Student;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('',
        [Validators.required, this.checkAge18]),
      pwGroup: new FormGroup({
        password: new FormControl('',
          [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl()
      }, this.checkPassword)
    });
  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm);
    // this.studentObj = Object.assign({}, this.studentForm.value);
    // console.log(this.studentObj);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const yearStudent = Number(abstractControl.value.substr(0, 4));
    const currentYear = new Date().getFullYear();
    console.log(currentYear - yearStudent);
    return currentYear - yearStudent >= 18 ? null : {not18: true};
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log(abstractControl.value);
  }

}
