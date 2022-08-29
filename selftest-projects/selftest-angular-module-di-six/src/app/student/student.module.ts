import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from './student-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
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
    StudentRoutingModule
  ],
  providers: [
    // StudentService
  ]
})
export class StudentModule { }
