import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule, JsonpClientBackend} from '@angular/common/http';
import {StudentRoutingModule} from './student-routing.module';
import {RouterModule} from '@angular/router';
import {StudentService} from './student.service';

@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentPageComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StudentRoutingModule,
    RouterModule,
    HttpClientJsonpModule
  ],
  providers: [
    // StudentService
  ]
})
export class StudentModule {
}
