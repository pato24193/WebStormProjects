import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.css']
})
export class FormArrayTestComponent implements OnInit {

  studentForm: FormGroup;
  addressArrayTmp: FormArray;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // const studentId = Number(this.activatedRoute.snapshot.params.id);
    const student = this.studentService.findById(6546);

    this.studentForm = new FormGroup({
      name: new FormControl(student.name, [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
        this.validateAge18]),
      addressArray: new FormArray(
        [
          new FormGroup({
            street: new FormControl(''),
            city: new FormControl('')
          })
        ]
      )
    });

    this.addressArrayTmp = this.studentForm.controls.addressArray as FormArray;
  }

  ngOnInit(): void {

  }

  updateInfoStudent(): void {
    console.log(this.studentForm.value);
    this.router.navigateByUrl('');
    // this.router.navigate(['']);
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    const dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    const year = Number(dateOfBirthValue.substr(0, 4));
    const currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {invalid18: true};
  }

  addMore(): void {
    const newFormGroupAddress = new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    });

    this.addressArrayTmp.controls.push(newFormGroupAddress);
  }
}
