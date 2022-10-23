import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/list', pathMatch: 'full'
  },
  {
    path: 'list', component: StudentPageComponent
  },
  {
    path: 'edit/:id', component: StudentUpdateComponent
  },
  {
    path: 'detail/:id', component: StudentDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }
