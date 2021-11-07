import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
    const studentId = Number(this.activatedRoute.snapshot.params.id);
    const student = this.studentService.findById(studentId);

    this.studentForm = new FormGroup({
      name: new FormControl(student.name, [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
        this.validateAge18])
    });
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

}
