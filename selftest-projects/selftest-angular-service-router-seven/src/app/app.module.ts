import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentRoutingModule} from './student-routing.module';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { InstructorComponent } from './instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentDetailComponent,
    StudentUpdateComponent,
    HeaderComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
