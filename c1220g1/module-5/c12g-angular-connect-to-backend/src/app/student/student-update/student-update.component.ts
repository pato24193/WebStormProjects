import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../student";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css'],
  // providers: [StudentService]
})
export class StudentUpdateComponent implements OnInit {

  studentForm: FormGroup;
  studentId: number;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    let student = new Student(0, "", "", 0);
    this.studentId = 0;
    this.studentForm = new FormGroup({
      name: new FormControl(student.name, [Validators.required,
        Validators.pattern('[A-Za-z ]+')]),
      dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
        this.validateAge18])
    });

  }

  ngOnInit(): void {

    let idStudent = this.activatedRoute.snapshot.params.idStudent;
    this.studentId = Number(idStudent);
    this.studentService.findById(Number(idStudent)).subscribe(studentAPI => {
      let student = studentAPI;

      this.studentForm = new FormGroup({
        name: new FormControl(student.name, [Validators.required,
          Validators.pattern('[A-Za-z ]+')]),
        dateOfBirth: new FormControl(student.dateOfBirth, [Validators.required,
          this.validateAge18])
      });
    });
  }

  updateInfoStudent(): void {

    let studentObj: Student = Object.assign({}, this.studentForm.value);
    studentObj.id = this.studentId;
    console.log('Student id: ' + this.studentId);
    this.studentService.update(studentObj).subscribe(value => {

    }, error => {

    }, () => {
      this.router.navigateByUrl('detail/' + studentObj.id);
      // this.router.navigate(['detail', studentObj.id]);
    });


  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let dateOfBirthValue = dateOfBirthControl.value;
    // yyyy-mm-dd
    let year = Number(dateOfBirthValue.substr(0, 4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  // get data by call API
  // findById(studentId: number): Student {
  //   const studentList = new Array();
  //   studentList.push(new Student(12312, 'Nguyen Van A', '2001-02-23', 1));
  //   studentList.push(new Student(6546, 'Nguyen Thi D', '2002-02-24', 0));
  //   studentList.push(new Student(2343, 'Nguyen Thi B', '2003-02-25', 0));
  //   studentList.push(new Student(7776, 'Nguyen Van C', '2004-02-26', 1));
  //
  //   return studentList.find(studentObj => studentObj.id === studentId);
  // }

}

