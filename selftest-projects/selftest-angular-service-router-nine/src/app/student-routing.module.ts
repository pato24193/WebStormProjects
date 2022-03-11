import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  // {path: 'list', component: StudentPageComponent},
  // {path: 'detail/:id', component: StudentDetailComponent},
  // {path: 'update/:id', component: StudentUpdateComponent},
  {
    path: 'student',
    children: [
      {path: '', component: StudentPageComponent},
      {path: 'detail/:id', component: StudentDetailComponent},
      {path: 'update/:id', component: StudentUpdateComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule {
}
