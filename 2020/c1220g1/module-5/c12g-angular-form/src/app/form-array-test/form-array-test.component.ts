import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.css']
})
export class FormArrayTestComponent implements OnInit {

  public studentForm: FormGroup;
  public addressArray: FormArray;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl('Tien', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18]),
      addressArray: new FormArray([
        new FormGroup({
          address: new FormControl(''),
          city: new FormControl('')
        })
      ])
    });

    this.addressArray = this.studentForm.controls.addressArray as FormArray;
  }

  ngOnInit(): void {
  }

  getInfoStudent(): void {
    console.log(this.studentForm.value);

    for (let obj of this.addressArray.controls) {
      console.log(obj.value);
    }
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  addMore(): void {
    let formGroupAddress = new FormGroup({
      address: new FormControl(''),
      city: new FormControl('')
    });

    this.addressArray.push(formGroupAddress);
  }
}
