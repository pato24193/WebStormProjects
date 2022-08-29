import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentRoutingModule} from './student/student-routing.module';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
