import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {path: '', component: StudentPageComponent},
  {path: 'detail/:id', component: StudentDetailComponent},
  {path: 'update/:id', component: StudentUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
