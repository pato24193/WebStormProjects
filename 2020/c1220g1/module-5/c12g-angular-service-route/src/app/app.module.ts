import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StudentRoutingModule} from "./student-routing.module";
import { HeaderComponent } from './header/header.component';
import { InstructorPageComponent } from './instructor-page/instructor-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentUpdateComponent,
    StudentDetailComponent,
    HeaderComponent,
    InstructorPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    StudentRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
