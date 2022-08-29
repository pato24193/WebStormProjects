import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {path: '', redirectTo: 'student/list', pathMatch: 'full'},
  // {path: 'list', component: StudentPageComponent},
  // {path: 'detail/:id', component: StudentDetailComponent},
  // {path: 'update/:id', component: StudentUpdateComponent}
  {
    path: 'student', children: [
      {path: 'list', component: StudentPageComponent},
      {path: 'detail/:id', component: StudentDetailComponent},
      {path: 'update/:id', component: StudentUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
