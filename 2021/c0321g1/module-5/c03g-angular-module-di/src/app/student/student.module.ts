import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentPageComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
})
export class StudentModule {
}
