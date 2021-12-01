import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentModule} from "./student/student.module";
import {RouterModule} from "@angular/router";
import {InstructorModule} from "./instructor/instructor.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    RouterModule,
    InstructorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
