import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentRoutingModule} from './student-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentService} from './student.service';


@NgModule({
  declarations: [
    StudentPageComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    // StudentService
  ]
})
export class StudentModule {
}
