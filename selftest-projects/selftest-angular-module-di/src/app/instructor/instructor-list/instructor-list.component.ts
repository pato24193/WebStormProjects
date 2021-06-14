import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../student/student.service";

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  constructor(private studentService: StudentService) {
    console.log(studentService.findAll());
  }

  ngOnInit(): void {
  }

}
