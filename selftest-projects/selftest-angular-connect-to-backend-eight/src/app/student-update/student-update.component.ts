import { Component, OnInit } from '@angular/core';
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

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const studentId = Number(this.activatedRoute.snapshot.params.id);
    const student = this.studentService.findById(studentId);

    this.studentForm = new FormGroup({
      name: new FormControl(student.name, [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
        this.validateAge18])
    });
  }

  updateInfoStudent(): void {
    console.log(this.studentForm.value);
    this.router.navigateByUrl('');
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {not18: true};
  }

}
