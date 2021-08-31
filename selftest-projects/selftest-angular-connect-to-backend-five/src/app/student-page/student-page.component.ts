import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService,
              private router: Router) {
    this.studentService.findAll().subscribe(value => {
      this.studentList = value;
    }, error => {
      console.log('Error');
    }, () => {
      console.log('Complete');
    });
  }

  ngOnInit(): void {

  }

  deleteStudent(id: number): void {
    this.studentService.deleteById(id).subscribe(value => {}, error => {}, () => {
      this.router.navigateByUrl('/student-page');
    });
  }
}
