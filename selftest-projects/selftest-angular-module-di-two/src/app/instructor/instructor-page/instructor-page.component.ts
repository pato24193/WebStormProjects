import { Component, OnInit } from '@angular/core';
import {Student} from '../../student/student';
import {StudentService} from '../../student/student.service';

@Component({
  selector: 'app-instructor-page',
  templateUrl: './instructor-page.component.html',
  styleUrls: ['./instructor-page.component.css']
})
export class InstructorPageComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    console.log(this.studentService.msg);
  }

}
