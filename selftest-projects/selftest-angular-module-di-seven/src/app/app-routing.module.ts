import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentModule} from './student/student.module';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => StudentModule
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // exports: [
  //   RouterModule
  // ]
})
export class AppRoutingModule {
}
