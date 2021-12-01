import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import {InstructorRoutingModule} from "./instructor-routing.module";



@NgModule({
  declarations: [
    InstructorListComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
