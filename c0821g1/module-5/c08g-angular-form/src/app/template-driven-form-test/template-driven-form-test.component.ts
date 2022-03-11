import {Component, OnInit} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-template-driven-form-test',
  templateUrl: './template-driven-form-test.component.html',
  styleUrls: ['./template-driven-form-test.component.css']
})
export class TemplateDrivenFormTestComponent implements OnInit {

  public student: Student;

  constructor() {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  getInfoStudentForm(form: any): void {
    console.log(form.value);
    console.log(this.student);
  }

}
