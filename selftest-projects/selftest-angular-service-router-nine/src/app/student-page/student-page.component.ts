import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentList: Student[];

  constructor(private studentService: StudentService) {
    this.studentList = this.studentService.findAll();
  }

  ngOnInit(): void {
  }

  // get data by call API
  // findAll(): Student[] {
  //   const studentList = new Array();
  //   studentList.push(new Student(12312, 'Nguyen Van A', '2001-02-23', 1));
  //   studentList.push(new Student(6546, 'Nguyen Thi D', '2002-02-24', 0));
  //   studentList.push(new Student(2343, 'Nguyen Thi B', '2003-02-25', 0));
  //   studentList.push(new Student(7776, 'Nguyen Van C', '2004-02-26', 1));
  //
  //   return studentList;
  // }

}
