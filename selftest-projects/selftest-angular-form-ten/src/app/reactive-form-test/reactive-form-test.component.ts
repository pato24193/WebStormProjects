import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  studentFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.studentFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', this.checkAge18)
    });
  }

  registInfoStudent(): void {
    console.log(this.studentFormGroup.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return curYear - formYear >= 18 ? null : {invalid18: true};
  }
}
