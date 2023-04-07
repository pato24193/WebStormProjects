import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentModule} from './student/student.module';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => StudentModule
  },
  // {
  //   path: 'instructor',
  //   loadChildren: () => InstructorModule
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
