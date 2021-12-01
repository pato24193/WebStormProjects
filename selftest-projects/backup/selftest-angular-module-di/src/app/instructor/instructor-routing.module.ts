import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InstructorListComponent} from "./instructor-list/instructor-list.component";

const routes: Routes = [
  {path: 'instructor', component: InstructorListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class InstructorRoutingModule { }
