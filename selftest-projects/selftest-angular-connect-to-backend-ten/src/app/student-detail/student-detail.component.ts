import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student;

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.studentId);
    this.studentService.findById(id).subscribe(value => {
      this.student = value;
    }, error => {

    });
  }

}
