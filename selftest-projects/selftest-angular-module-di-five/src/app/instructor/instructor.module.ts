import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';
import {InstructorRoutingModule} from './instructor-routing.module';
import {StudentService} from '../student/student.service';



@NgModule({
  declarations: [InstructorPageComponent],
  exports: [
    InstructorPageComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ],
  providers: [
    // StudentService
  ]
})
export class InstructorModule { }
