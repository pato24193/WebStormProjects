import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StudentPageComponent} from './student/student-page/student-page.component';
import {StudentUpdateComponent} from './student/student-update/student-update.component';
import {StudentDetailComponent} from './student/student-detail/student-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StudentRoutingModule} from './student/student-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {StudentModule} from './student/student.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StudentModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
