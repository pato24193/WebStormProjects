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
  student: Student;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(value => {
      // console.log(value.get('studentId'));
      this.studentId = Number(value.get('studentId'));
    });

    this.studentService.findById(this.studentId).subscribe(value => {
      this.student = value;
      this.studentForm.patchValue(this.student);
    });

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18])
    });

  }

  updateInfoStudent(): void {
    console.log(this.studentForm.value);
    const studentAfter = this.studentForm.value;
    studentAfter.id = this.student.id;

    console.log('aaaaaaaaaaaa');
    this.studentService.saveInfo(studentAfter)
      .subscribe(value => {

      }, error => {

      }, () => {
        this.router.navigateByUrl('/student/list');
      });
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

}
