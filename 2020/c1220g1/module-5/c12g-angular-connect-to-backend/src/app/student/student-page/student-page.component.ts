import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css'],
  // providers: [StudentService]
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService) {
    this.studentList = [];
  }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.studentService.findAll().subscribe(value => {
      this.studentList = value;
    });
  }

  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe();
    this.loadList();
  }
}
