import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';


const routes: Routes = [
  // {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: StudentPageComponent},
  {path: 'detail/:studentId', component: StudentDetailComponent},
  {path: 'update/:studentId', component: StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
