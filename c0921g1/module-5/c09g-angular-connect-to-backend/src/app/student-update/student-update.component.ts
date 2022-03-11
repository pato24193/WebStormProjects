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
  student = new Student();

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const studentId = Number(this.activatedRoute.snapshot.params.id);
    this.studentService.findById(studentId).subscribe(value => {
        this.student = value;
      }, error => {
      },
      () => {
        this.studentForm.patchValue(this.student);
      }
    );

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl('', [Validators.required,
        this.validateAge18])
    });
  }

  updateInfoStudent(): void {
    const studentObjUpdate = this.studentForm.value;
    studentObjUpdate.id = this.student.id;

    this.studentService.save(studentObjUpdate).subscribe();

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
