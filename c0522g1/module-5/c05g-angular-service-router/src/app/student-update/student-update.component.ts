import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  studentForm: FormGroup;
  studentId: number;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(value => {
      // console.log(value.get('studentId'));
      this.studentId = Number(value.get('studentId'));
    });
    const student = this.studentService.findById(this.studentId);

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18])
    });

    this.studentForm.patchValue(student);
  }

  updateInfoStudent(): void {
    console.log(this.studentForm.value);
    // Call API to update
    this.router.navigateByUrl('');
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

}
