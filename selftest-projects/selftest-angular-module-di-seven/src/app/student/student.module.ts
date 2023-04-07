import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student-routing.module';
import {StudentService} from './student.service';


@NgModule({
  declarations: [
    StudentPageComponent,
    StudentUpdateComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentRoutingModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule {
}
